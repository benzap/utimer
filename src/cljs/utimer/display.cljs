(ns utimer.display
  (:require [clojure.string :as string]))



(defn >0 [x] (> x 0))


(defn >1 [x] (> x 1))


(defn auto-plural [text x]
  (if (>1 x) (str text "s") text))


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
  (str (fixed-two minute) ":" (fixed-two second) ":" (fixed-three millisecond)))


(defn second-display-timer
  [{:keys [second millisecond]}]
  (str second "." (fixed-three millisecond)))


(defn display-timeleft
  [{:keys [year day hour minute second millisecond] :as time}]
  (cond
    (>0 year) (year-display-timer time)
    (>0 day) (day-display-timer time)
    (>0 hour) (hour-display-timer time)
    (>0 minute) (minute-display-timer time)
    (>0 second) (second-display-timer time)
    :else (second-display-timer time)))


(defn display-class
  [{:keys [year day hour minute second millisecond]}]
  (cond
    (>0 year) "display-timer-year"
    (>0 day) "display-timer-day"
    (>0 hour) "display-timer-hour"
    (>0 minute) "display-timer-minute"
    (>0 second) "display-timer-second"
    :else "display-timer-second"))
  
