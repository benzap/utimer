(ns utimer.flat-timer
  (:require
   [utimer.utils :as utils :refer [create-uuid]]
   [utimer.alarm :as alarm]))


(def default-options
  {:open? false
   :loop? false
   :sound alarm/default-alarm-sound
   :prog-start-label ""
   :prog-close-after-msec nil
   :prog-reset-after-msec nil})


(defn new-flat-timer [& {:keys [initial label options]
                         :or {label ""
                              initial "5 Minutes"
                              options {}}}]
  {:id (create-uuid)
   :type :flat
   :initial initial
   :label label
   :options (merge default-options options)})
