(ns utimer.display
  (:require [clojure.string :as string]))



(defn >0 [x] (> x 0))


(defn >1 [x] (> x 1))


(defn auto-plural [text x]
  (if (or (= x 0) (>1 x)) (str text "s") text))


(defn fixed-two [x]
  (let [s (str x)
        c (count s)]
    (case c
      0 "00"
      1 (str "0" x)
      2 (str x)
      (str x))))
  

(defn fixed-three [x]
  (let [s (str x)
        c (count s)]
    (case c
      0 "000"
      1 (str "00" x)
      2 (str "0" x)
      (str x))))


(defn year-display-timer
  [{:keys [year day hour minute]}]
  (str year (auto-plural " Year" year) " "
       day (auto-plural " Day" day) " "
       hour (auto-plural " Hour" hour) " "
       minute (auto-plural " Minute" minute)))


(defn day-display-timer
  [{:keys [day hour minute second]}]
  (str day (auto-plural " Day" day) " "
       hour (auto-plural " Hour" hour) " "
       minute (auto-plural " Minute" minute) " "
       second (auto-plural " Second" second)))


(defn hour-display-timer
  [{:keys [hour minute second]}]
  (str (fixed-two hour) ":" (fixed-two minute) ":" (fixed-two second)))


(defn minute-display-timer
  [{:keys [minute second millisecond]}]
  (str (fixed-two minute) ":" (fixed-two second)))


(defn second-display-timer
  [{:keys [second millisecond]}]
  (str second "." (fixed-three millisecond) "s"))


(defn invalid-display-timer
  []
  (str "Err"))


(defn display-timeleft
  [{:keys [year day hour minute second millisecond] :as time}]
  (cond
    (>0 year) (year-display-timer time)
    (>0 day) (day-display-timer time)
    (>0 hour) (hour-display-timer time)
    (>0 minute) (minute-display-timer time)
    (>0 second) (second-display-timer time)
    (>0 millisecond) (second-display-timer time)
    :else (invalid-display-timer)))


(defn display-class
  [{:keys [year day hour minute second millisecond]}]
  (cond
    (>0 year) "display-timer-year"
    (>0 day) "display-timer-day"
    (>0 hour) "display-timer-hour"
    (>0 minute) "display-timer-minute"
    (>0 second) "display-timer-second"
    :else "display-timer-second"))


(defn float->fix1 [x]
  (let [s (.toFixed x 1)]
    (string/replace s #"\.0" "")))


(defn shorthand-year-display-timer
  [{:keys [year day] :as time}]
  (let [year (float->fix1 (+ year (/ day 365)))]
    (str "~" year (auto-plural " Year" year))))


(defn shorthand-day-display-timer
  [{:keys [day hour] :as time}]
  (let [day (float->fix1 (+ day (/ hour 24)))]
    (str "~" day (auto-plural " Day" day))))


(defn shorthand-hour-display-timer
  [{:keys [hour minute] :as time}]
  (let [hour (float->fix1 (+ hour (/ minute 60)))]
    (str "~" hour (auto-plural " Hour" hour))))


(defn shorthand-minute-display-timer
  [{:keys [minute second] :as time}]
  (if (>= minute 10)
    (str "~" minute (auto-plural " Minute" minute))
    (str minute ":" (fixed-two second))))


(defn shorthand-second-display-timer
  [{:keys [second] :as time}]
  (if (>= second 10)
    (str second "s")
    (str second "s!")))


(defn display-title-timeleft
  [{:keys [year day hour minute second millisecond] :as time}]
  (cond
    (>0 year) (shorthand-year-display-timer time)
    (>0 day) (shorthand-day-display-timer time)
    (>0 hour) (shorthand-hour-display-timer time)
    (>0 minute) (shorthand-minute-display-timer time)
    (>0 second) (shorthand-second-display-timer time)
    (>0 millisecond) (shorthand-second-display-timer time)
    :else (invalid-display-timer)))
