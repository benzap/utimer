(ns utimer.alarm
  (:require 
   [rum.core :as rum]))


(def default-audio-file-location "audio/")
(def default-alarm-sound "audio/analog_alarm.mp3")


(defn audio-object [] (js/Audio.))


(defn new-alarm []
  (let [audio (audio-object)
        rhythm (js/Rythm.)]
    (.connectExternalAudioElement rhythm audio)
    (.setAttribute audio "src" default-alarm-sound)
    {:audio audio
     :rhythm rhythm}))


(defn set-sound!
  [{:keys [audio] :as alarm} src]
  (.setAttribute audio "src" src)
  alarm)


(defn set-loop!
  [{:keys [audio] :as alarm} x]
  (if (true? x)
    (.setAttribute audio "loop" "true")
    (.setAttribute audio "loop" "false")))


(defn play! [{:keys [audio rhythm] :as alarm}]
  (.start rhythm)
  (.play audio)
  alarm)


(defn stop! [{:keys [audio rhythm] :as alarm}]
  (.stop rhythm)
  (.pause audio)
  alarm)


(defn attach-class! [{:keys [rhythm] :as alarm} class-name]
  (.addRythm rhythm class-name "pulse" 500 100
             #js {:min 1.0 :max 1.02})
  alarm)


#_(do
  (def a (new-alarm))
  (set-sound! a "audio/analog_alarm.mp3")
  (play! a)
  (attach-class! a "flat-timer")
  (.log js/console (clj->js a)))


