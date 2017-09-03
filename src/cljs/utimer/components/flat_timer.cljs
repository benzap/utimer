(ns utimer.components.flat-timer
  (:require [goog.functions]
            [rum.core :as rum]
            [utimer.clock :as clock]
            [utimer.timer :as timer]
            [utimer.components.utils :as c-utils]))


(rum/defcs c-flat-timer <
  rum/reactive
  [state element]
  (let []
    [:div.ut-timer.flat-timer
     [:svg {:class "flat-timer-progress" :width "100%" :height "100%"}
      [:rect {:class "flat-background" :width "100%" :height "100%" :fill "rgb(196,198,166)"}]
      [:rect {:class "flat-background" :width "40%" :height "100%" :fill "rgb(215,194,157)"}]
      [:text {:x "50%" :y "50%" :dy "20" :font-size "60" :text-anchor "middle" :fill "#111"} "SVG"]]
     [:div.flat-timer-name "Timer 1"]
     [:div.flat-timer-container
      [:div.flat-timer-input
       [:input {:type "text"}]]]
     ]))
