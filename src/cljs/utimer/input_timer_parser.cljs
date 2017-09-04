(ns utimer.input-timer-parser
  (:require [clojure.string :as string]))

(def re-year #"([0-9]+)\s*y|yr|yrs|year|years")

(def re-month #"([0-9]+)\s*mon|month|months")

(def re-week #"([0-9]+)\s*w|week|weeks")

(def re-day #"([0-9]+)\s*d|day|days|night|nights")

(def re-hour #"([0-9]+)\s*h|hr|hrs|hour|hours")

(def re-minute #"([0-9]+)\s*m[^s]|min|minute|minutes")

(def re-second #"([0-9]+)\s*s|sec|secs|second|seconds")

(def re-milli #"([0-9]+)\s*ms|msec|msecs|millisecond|milliseconds")


(defn parse-time-value [re s]
  (let [[_ value] (re-find re (string/lower-case s))]
    (if value
      (.parseFloat js/window value)
      0)))


(defn parse [s]
  {:year (parse-time-value re-year s)
   :month (parse-time-value re-month s)
   :week (parse-time-value re-week s)
   :day (parse-time-value re-day s)
   :hour (parse-time-value re-hour s)
   :minute (parse-time-value re-minute s)
   :second (parse-time-value re-second s)
   :millisecond (parse-time-value re-milli s)
   })

;;(parse "1000msec")
;;(parse "1hour and 2 seconds with 4 weeks")

(def milli-duration 1)
(def second-duration (* milli-duration 1000))
(def minute-duration (* second-duration 60))
(def hour-duration (* minute-duration 60))
(def day-duration (* hour-duration 24))
(def week-duration (* day-duration 7))
(def month-duration (* day-duration 30))
(def year-duration (* day-duration 365))


(defn parse->duration [s]
  (let [{:keys [year month week day hour minute second millisecond]} (parse s)]
    (+
     (* milli-duration millisecond)
     (* second-duration second)
     (* minute-duration minute)
     (* hour-duration hour)
     (* day-duration day)
     (* week-duration week)
     (* month-duration month)
     (* year-duration year)
     )))


;;(parse->duration "1hr2m30secs")
(defn --duration [duration segment]
  (let [val (.floor js/Math (/ duration segment))]
    [val (- duration (* val segment))]))


(defn duration->time [duration]
  (let [time {}

        ;; Years
        [years duration] (--duration duration year-duration)
        time (assoc time :year years)
        
        ;; Days
        [days duration] (--duration duration day-duration)
        time (assoc time :day days)

        ;; Hours
        [hours duration] (--duration duration hour-duration)
        time (assoc time :hour hours)

        ;; Minutes
        [minutes duration] (--duration duration minute-duration)
        time (assoc time :minute minutes)

        ;; Seconds
        [seconds duration] (--duration duration second-duration)
        time (assoc time :second seconds)

        ;; Milliseconds
        [milliseconds duration] (--duration duration milli-duration)
        time (assoc time :millisecond milliseconds)

        ]
    time))


;;(duration->time 21512521512)
