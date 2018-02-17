(ns utimer.clock
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require 
   [cljs.core.async :refer [chan sliding-buffer put! <! >! timeout close!]]
   [clojure.spec.alpha :as s]
   [utimer.timer :as timer]))


(enable-console-print!)


(s/def ::*initialized? #(instance? cljs.core.Atom %))
(s/def ::*timer #(instance? cljs.core.Atom %))
(s/def ::channel #(instance? cljs.core.async.impl.channels.ManyToManyChannel %))

(def default-tick-rate-ms 20)

(defn new-clock
  [duration &
   {:keys [tick-rate]
    :or {tick-rate default-tick-rate-ms}}]
  {:*initialized? (atom false)
   :*timer (atom (timer/new-timer duration))
   :tick-rate tick-rate
   :event-channel (chan)
   :progress-channel (chan (sliding-buffer 10))})

(s/def ::tick-rate ::timer/ms)
(s/def ::event-channel ::channel)
(s/def ::progress-channel ::channel)

(s/def ::clock (s/keys :req-un [::*initialized? ::*timer ::tick-rate
                                ::event-channel ::progress-channel]))

;; Events
(s/def ::event-action keyword?)
(s/def ::event (s/keys :req-un [::event-action]))

(defn event-start [] {:event-action :start})
(defn event-stop [] {:event-action :stop})
(defn event-tick [] {:event-action :tick})
(defn event-reset [] {:event-action :reset})
(defn event-quit [] {:event-action :quit})
(defn event-change [duration] {:event-action :change :event-value duration})


(defn- do-action-start!
  [{:keys [*timer event-channel] :as clock}]
  (swap! *timer timer/start)
  (put! event-channel (event-tick))
  clock)


(defn- do-action-stop!
  [{:keys [*timer event-channel] :as clock}]
  (swap! *timer timer/stop)
  (put! event-channel (event-tick))
  clock)


(defn- do-action-tick!
  [{:keys [*timer event-channel progress-channel tick-rate] :as clock}]
  (go
    (<! (timeout tick-rate))
    (swap! *timer timer/tick)
    (when (-> @*timer :started?)
      (put! progress-channel @*timer))
    (put! event-channel (event-tick)))
  clock)


(defn- do-action-reset!
  [{:keys [*timer event-channel progress-channel] :as clock}]
  (swap! *timer timer/reset)
  (put! progress-channel @*timer)
  (put! event-channel (event-tick))
  clock)


(defn- do-action-quit!
  [{:keys [*timer event-channel progress-channel] :as clock}]
  (swap! *timer timer/stop)
  (close! event-channel)
  (close! progress-channel)
  clock)


(defn- do-action-change!
  [{:keys [*timer event-channel] :as clock} duration]
  (swap! *timer timer/change-duration duration)
  (put! event-channel (event-tick))
  clock)


(defn event-loop
  [{:keys [*initialized? event-channel] :as clock}]
  (reset! *initialized? true)
  (go-loop []
    (let [event (<! event-channel)]
      (if-let [action (:event-action event)]
        (do
          (case action
            :start (do-action-start! clock)
            :stop (do-action-stop! clock)
            :tick (do-action-tick! clock)
            :reset (do-action-reset! clock)
            :quit (do-action-quit! clock)
            :change (do-action-change! clock (:event-value event))
            nil)
          (recur))
        (do
          (reset! *initialized? false))
      ))))


(defn duration [{:keys [*timer] :as clock}]
  (-> @*timer :duration))


(defn progress [{:keys [*timer] :as clock}]
  (-> @*timer :progress))


(defn started? [{:keys [*timer] :as clock}]
  (-> @*timer :started?))


(defn progressed? [clock]
  (> (progress clock) 0))


(defn finished? [{:keys [*timer] :as clock}]
  (and 
   (>= (progress clock) (duration clock))
   (> (duration clock) 0)))


(defn percent-progress [clock]
  (let [x (-> (progress clock)
              (/ (duration clock))
              (* 100))]
    (cond (js/isNaN x) 0
          (> x 100) 100
          :else x
          )))


(defn timeleft-ms [clock]
  (let [t (- (duration clock)
             (progress clock))]
    (if-not (< t 0) t 0)))


(defn init!
  [{:keys [initialized?] :as clock}]
  (when-not initialized? (event-loop clock)))


(defn start!
  [{:keys [initialized? timer event-channel progress-channel]
    :as clock}]
  (init! clock)
  (put! event-channel (event-start))
  clock)


(defn stop!
  [{:keys [event-channel] :as clock}]
  (put! event-channel (event-stop))
  clock)


(defn restart!
  [{:keys [event-channel] :as clock}]
  (put! event-channel (event-reset))
  clock)


(defn quit!
  [{:keys [event-channel] :as clock}]
  (put! event-channel (event-quit))
  clock)


(defn change!
  [{:keys [event-channel] :as clock} duration]
  (put! event-channel (event-change duration))
  clock)
