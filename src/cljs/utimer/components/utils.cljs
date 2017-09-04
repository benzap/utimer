(ns utimer.components.utils
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [rum.core :as rum]
   [cljs.core.async :refer [chan sliding-buffer put! <! >! timeout close!]]
   [clojure.spec.alpha :as s]
   [utimer.clock :as clock]
   ))


(defn mixin-clock []
  {:key-fn
   (fn [element] (:id element))

   :will-mount
   (fn [state]
     (let [clock (clock/new-clock 10000)
           component (:rum/react-component state)]
       (add-watch
        (:*timer clock) ::timer
        (fn [_ _ _ _] (rum/request-render component)))
       (assoc state
              :clock clock)))

   :did-mount
   (fn [state]
     (let [clock (:clock state)
           progress-channel (:progress-channel clock)]

       (clock/start! clock)

       (go-loop []
         (let [timer (<! progress-channel)
               time-left-ms (- (:duration timer) (:progress timer))]
           (when timer ;; stop loop if the channel closes
             (when (<= time-left-ms 0) (clock/stop! clock))
             (recur))))

       state))

   :will-unmount
   (fn [state]
     (clock/quit! (:clock state)))})
