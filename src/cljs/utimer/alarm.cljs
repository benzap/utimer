(ns utimer.alarm
  (:require 
   [rum.core :as rum]))


(def default-audio-file-location "audio/")
(def default-alarm-sound "audio/analog_alarm.mp3")


(defn audio-object [] (js/Audio.))


(defn new-alarm []
  (let [audio (audio-object)]
    (.setAttribute audio "src" default-alarm-sound)
    {:audio audio
     :*options (atom {:played-once? false})}))


(defn is-playing? [{:keys [audio] :as alarm}]
  (not (.-paused audio)))


(defn is-looping? [{:keys [audio] :as alarm}]
  (boolean (aget audio "loop")))


(defn set-sound!
  [{:keys [audio] :as alarm} src]
  (let [old-src (.getAttribute audio "src")]
    (when (not= old-src src)
      (.setAttribute audio "src" src))
    alarm))


(defn set-loop!
  [{:keys [audio] :as alarm} x]
  (aset audio "loop" (boolean x))
  alarm)


(defn play! [{:keys [audio *options] :as alarm}]
  (when (and (.-paused audio)
             (or (is-looping? alarm)
                 (-> @*options :played-once? not)))
    (aset audio "currentTime" 0)
    (.play audio)
    (swap! *options assoc :played-once? true))
  alarm)


(defn stop! [{:keys [audio *options] :as alarm}]
  (when-not (.-paused audio)
    (aset audio "currentTime" 0)
    (.pause audio)
    (swap! *options assoc :played-once? false))
  alarm)


#_(do
  (def a (new-alarm))
  (set-sound! a "audio/analog_alarm.mp3")
  (play! a)
  (.log js/console (clj->js a)))


