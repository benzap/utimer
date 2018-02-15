(ns utimer.alarm
  (:require 
   [rum.core :as rum]))


(def default-audio-file-location "audio/")
(def default-alarm-sound "audio/analog_alarm.mp3")


(defn audio-object [] (js/Audio.))


(defn new-alarm []
  (let [audio (audio-object)]
    (.setAttribute audio "src" default-alarm-sound)
    {:audio audio}))


(defn set-sound!
  [{:keys [audio] :as alarm} src]
  (let [old-src (.getAttribute audio "src")]
    (when (not= old-src src)
      (.setAttribute audio "src" src))
    alarm))


(defn set-loop!
  [{:keys [audio] :as alarm} x]
  (if (true? x)
    (.setAttribute audio "loop" "true")
    (.setAttribute audio "loop" "false")))


(defn play! [{:keys [audio] :as alarm}]
  (when (.-paused audio)
    (.play audio))
  alarm)


(defn stop! [{:keys [audio] :as alarm}]
  (when-not (.-paused audio)
    (.pause audio))
  alarm)


#_(do
  (def a (new-alarm))
  (set-sound! a "audio/analog_alarm.mp3")
  (play! a)
  (.log js/console (clj->js a)))


