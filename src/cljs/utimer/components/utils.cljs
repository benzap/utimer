(ns utimer.components.utils
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [rum.core :as rum]
   [cljs.core.async :refer [chan sliding-buffer put! <! >! timeout close!]]
   [clojure.spec.alpha :as s]
   [utimer.alarm :as alarm]
   [utimer.clock :as clock]
   ))


(defn get-alarm [state]
  (-> state :alarm deref :context))


(defn force-render-alarm! [state]
  (swap! (:alarm state) update :force-render inc))


(defn mixin-alarm []
  {:will-mount
   (fn [state]
     (let [alarm (atom {:context (alarm/new-alarm)
                        :force-render 0})
           component (:rum/react-component state)]
       (add-watch
        alarm ::alarm
        (fn [_ _ _ _] (rum/request-render component)))
       (assoc state
              :alarm alarm)))

   :did-mount
   (fn [state]
     (let [[element] (:rum/args state)
           alarm (get-alarm state)]
       (.log js/console (:audio alarm))
       ;;(alarm/attach-class! alarm (str "timer-" (:id element)))
       state))

   :will-unmount
   (fn [state]
     (alarm/stop! (get-alarm state))
     (dissoc state :alarm))})


(defn mixin-clock []
  {:will-mount
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
