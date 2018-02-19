(ns utimer.layout
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [com.rpl.specter :as specter :refer [FIRST ALL BEGINNING END LAST VAL]]
   [cljs.core.async :refer [chan sliding-buffer put! <! >! timeout close!]]
   [clojure.spec.alpha :as s]
   [utimer.utils :as utils :refer [create-uuid]]
   [utimer.flat-timer :refer [new-flat-timer]]))


(def template-default
  [(new-flat-timer :initial "5 Minutes" :label "Timer #1")
   (new-flat-timer :initial "10 Minutes" :label "Timer #2")])


(def template-pomodoro
  [(new-flat-timer :initial "25 Minutes" :label "Pomodoro #1"
                   :options {:prog-start-label "Break #1"
                             :prog-reset-after-msec 10000})

   (new-flat-timer :initial "5 Minutes" :label "Break #1"
                   :options {:prog-start-label "Pomodoro #2"
                             :prog-reset-after-msec 10000})

   (new-flat-timer :initial "25 Minutes" :label "Pomodoro #2"
                   :options {:prog-start-label "Break #2"
                             :prog-reset-after-msec 10000})

   (new-flat-timer :initial "5 Minutes" :label "Break #2"
                   :options {:prog-start-label "Pomodoro #3"
                             :prog-reset-after-msec 10000})

   (new-flat-timer :initial "25 Minutes" :label "Pomodoro #3"
                   :options {:prog-start-label "Break #3"
                             :prog-reset-after-msec 10000})

   (new-flat-timer :initial "5 Minutes" :label "Break #3"
                   :options {:prog-start-label "Pomodoro #4"
                             :prog-reset-after-msec 10000})

   (new-flat-timer :initial "25 Minutes" :label "Pomodoro #4"
                   :options {:prog-start-label "Break #4"
                             :prog-reset-after-msec 10000})

   (new-flat-timer :initial "5 Minutes" :label "Break #4"
                   :options {:prog-start-label "Pomodoro #5"
                             :prog-reset-after-msec 10000})

   (new-flat-timer :initial "25 Minutes" :label "Pomodoro #5"
                   :options {:prog-start-label "Break #5"
                             :prog-reset-after-msec 10000})

   (new-flat-timer :initial "30 Minutes" :label "Break #5"
                   :options {:prog-start-label "Pomodoro #1"
                             :prog-reset-after-msec 10000})])


(def template-boxing
  [(new-flat-timer :initial "3 Minutes" :label "Boxing Round"
                   :options {:sound "audio/boxing_bell.mp3"
                             :prog-start-label "Rest"
                             :prog-reset-after-msec 10000})
   (new-flat-timer :initial "1 Minutes" :label "Rest"
                   :options {:sound "audio/boxing_bell.mp3"
                             :prog-start-label "Boxing Round"
                             :prog-reset-after-msec 5000})])


(def template-meditation
  [(new-flat-timer :initial "15 Minutes" :label "Meditation"
                   :options {:sound "audio/chinese_gong.mp3"})])
