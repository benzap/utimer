(ns utimer.core
  (:require [rum.core :as rum]
            [orchestra-cljs.spec.test :as st]

            ;; UTimer Modules
            [utimer.timer]
            [utimer.clock :as clock]

            ;; UTimer Components
            [utimer.components.header :refer [c-header]]
            ))

;; For testing and development
(st/instrument)


(enable-console-print!)


(defonce app-state
  (atom
   {
    :timers []
    :layout [{:type :initial}]}))


(rum/defc main < 
  rum/reactive
  [app-state]
  (let [{:keys [layout]} (rum/react app-state)]
    [:div.main-container
     (c-header app-state)

     ]))


(defn render []
  (rum/mount (main app-state) (. js/document (getElementById "app"))))


(def t (utimer.timer/new-timer 1000))

(->> t 
    utimer.timer/start
    utimer.timer/tick
    utimer.timer/tick
    utimer.timer/stop
    (.log js/console))

(def c (clock/new-clock (utimer.timer/new-timer 5000)))
(def c2 (clock/new-clock (utimer.timer/new-timer 10000)))

(comment
  (clock/start! c)
  (clock/start! c2)

  (.setInterval js/window 
                (fn []
                  (.log js/console
                        "clock 1:" (-> c :*timer deref clj->js))
                  (.log js/console
                        "clock 2:" (-> c2 :*timer deref clj->js)))
                1000)

  (.setTimeout js/window #(clock/quit! c) 5000)
  )
