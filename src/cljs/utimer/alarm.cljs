(ns utimer.alarm
  (:require 
   [rum.core :as rum]))


(def default-audio-file-location "audio/")
(def default-alarm-sound "audio/analog_alarm.mp3")


(defn audio-object []
  (let [audio (js/Audio.)]
    (aset audio "preload" "auto")
    audio))

(def *tested-audio (atom (audio-object)))


(defn test-play! [alarm]
  (when-let [old-audio @*tested-audio]
    (.pause old-audio))
  (reset! *tested-audio (.cloneNode (:audio alarm) true))
  (aset @*tested-audio "loop" false)
  (.play @*tested-audio))


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
  (let [old-src (.getAttribute audio "src")
        src (if (= src "None") "" src)]
    (when (not= old-src src)
      (.setAttribute audio "src" src)
      (.load audio))
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
    (.pause audio))
  (swap! *options assoc :played-once? false)
  (aset audio "currentTime" 0)
  alarm)


#_(do
  (def a (new-alarm))
  (set-sound! a "audio/analog_alarm.mp3")
  (play! a)
  (.log js/console (clj->js a)))


