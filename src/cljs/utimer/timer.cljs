(ns utimer.timer
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require 
   [clojure.spec.alpha :as s]
   [cljs.core.async :refer [chan put! <! >! timeout]]
   [cljs-time.core :as time]
   [cljs-time.coerce :refer [to-long]]))


(enable-console-print!)


(s/def ::ms integer?)
(s/def ::datetime #(instance? goog.date.UtcDateTime %))


(def default-duration-ms (* 5 1000))


(defrecord Timer [tick-time progress duration])


(s/def ::started? boolean?)
(s/def ::tick-time ::datetime)
(s/def ::progress ::ms)
(s/def ::duration ::ms)


(s/def ::timer (s/keys :req-un [::started? ::tick-time ::progress ::duration]))


(defn new-timer [duration]
  (map->Timer {:started? false
               :tick-time (time/now)
               :progress 0
               :duration duration
               }))


(s/fdef new-timer :ret ::timer)


(defn start [timer]
  (assoc timer
         :tick-time (time/now)
         :started? true))

(s/fdef start
        :args (s/cat :timer ::timer)
        :ret ::timer)


(defn stop [timer]
  (assoc timer :started? false))

(s/fdef stop
        :args (s/cat :timer ::timer)
        :ret ::timer)


(defn reset [timer]
  (assoc timer :progress 0))

(s/fdef reset
        :args (s/cat :timer ::timer)
        :ret ::timer)


(defn change-duration [timer duration]
  (assoc timer :duration duration))

(s/fdef change-duration
        :args (s/cat :timer ::timer :duration ::duration)
        :ret ::timer)


(defn tick [{:keys [started? tick-time progress] :as timer}]
  (if started?
    (let [now (time/now)]
      (assoc timer
             :tick-time now
             :progress (+ progress (- (to-long now)
                                      (to-long tick-time)))))
    timer))

(s/fdef tick
        :args (s/cat :timer ::timer)
        :ret ::timer)
