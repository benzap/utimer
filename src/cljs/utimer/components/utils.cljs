(ns utimer.components.utils
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [rum.core :as rum]
   [cljs.core.async :refer [chan sliding-buffer put! <! >! timeout close!]]
   [clojure.spec.alpha :as s]
   [utimer.alarm :as alarm]
   [utimer.clock :as clock]
   [utimer.input-timer-parser :refer [parse->duration]]
   ))


(defn get-alarm [state]
  (some-> state :alarm deref :context))


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
       (assoc state :alarm alarm)))

   :did-mount
   (fn [state]
     (let [[element] (:rum/args state)
           alarm (get-alarm state)]
       state))

   :will-unmount
   (fn [state]
     (some-> (get-alarm state) alarm/stop!)
     (dissoc state :alarm))})


(defn mixin-clock []
  {:will-mount
   (fn [state]
     (let [element (-> state :rum/args first)
           initial-value (parse->duration (get element :initial "5 Minutes"))
           clock (clock/new-clock initial-value)
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

       (clock/init! clock)

       (go-loop []
         (let [timer (<! progress-channel)
               time-left-ms (- (:duration timer) (:progress timer))]
           (when timer ;; stop loop if the channel closes
             (when (<= time-left-ms 0) (clock/stop! clock))
             (recur))))

       (when-let [*alarm (:alarm state)]
         ;; Add in a interval for when the window loses focus
         (swap! *alarm assoc :interval-id
                (js/setInterval (fn [] (if (clock/finished? clock)
                                         (alarm/play! (get-alarm state))
                                         (alarm/stop! (get-alarm state)))) 200)))

       state))

   :will-unmount
   (fn [state]
     (clock/quit! (:clock state))
     (when-let [interval-id (some-> state :alarm deref :interval-id)]
       (js/clearTimeout interval-id))
     state)})
