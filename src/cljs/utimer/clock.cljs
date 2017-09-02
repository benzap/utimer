(ns utimer.clock
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require 
   [cljs.core.async :refer [chan sliding-buffer put! <! >! timeout close!]]
   [clojure.spec.alpha :as s]
   [utimer.timer :as timer]))


(enable-console-print!)

(atom 0)

(s/def ::*initialized? #(instance? cljs.core.Atom %))
(s/def ::*timer #(instance? cljs.core.Atom %))
(s/def ::channel #(instance? cljs.core.async.impl.channels.ManyToManyChannel %))

(def default-tick-rate-ms 20)

(defn new-clock
  [timer &
   {:keys [tick-rate]
    :or {tick-rate default-tick-rate-ms}}]
  {:*initialized? (atom false)
   :*timer (atom timer)
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


(defn- do-action-start!
  [{:keys [*timer event-channel] :as clock}]
  (swap! *timer timer/start)
  (put! event-channel (event-tick)))


(defn- do-action-stop!
  [{:keys [*timer event-channel] :as clock}]
  (swap! *timer timer/stop)
  (put! event-channel (event-tick)))


(defn- do-action-tick!
  [{:keys [*timer event-channel progress-channel tick-rate] :as clock}]
  (go
    (<! (timeout tick-rate))
    (swap! *timer timer/tick)
    (put! progress-channel @*timer)
    (put! event-channel (event-tick))))


(defn- do-action-reset!
  [{:keys [*timer event-channel progress-channel] :as clock}]
  (swap! *timer timer/reset)
  (put! progress-channel @*timer)
  (put! event-channel (event-tick)))


(defn- do-action-quit!
  [{:keys [*timer event-channel progress-channel] :as clock}]
  (swap! *timer timer/stop)
  (close! event-channel)
  (close! progress-channel))


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
            nil)
          (recur))
        (do
          (reset! *initialized? false))
      ))))


(defn start!
  [{:keys [initialized? timer event-channel progress-channel]
    :as clock}]
  (when-not initialized? (event-loop clock))
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
