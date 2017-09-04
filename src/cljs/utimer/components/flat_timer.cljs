(ns utimer.components.flat-timer
  (:require [goog.functions]
            [rum.core :as rum]
            [utimer.clock :as clock]
            [utimer.timer :as timer]
            [utimer.components.utils :as c-utils]))


(rum/defcs c-flat-timer <
  rum/reactive
  (c-utils/mixin-clock)
  [state element]
  (let [clock (:clock state)
        progress-s (str (clock/percent-progress clock) "%")]
    [:div.ut-timer.flat-timer
     [:svg {:class "flat-timer-progress" :width "100%" :height "100%"}
      [:rect {:class "flat-background" :width "100%" :height "100%" :fill "rgb(196,198,166)"}]
      [:rect {:class "svg-timer-progress" :width progress-s :height "100%" :fill "rgb(215,194,157)"}]
      [:text {:x "50%" :y "50%" :dy "20" :font-size "60" :text-anchor "middle" :fill "#111"} "SVG"]]
     [:div.flat-timer-container
      [:div.flat-timer-left-pane
       [:div.flat-timer-button.play-pause
        [:div.material-icons.noselect
         {:on-click (fn [] (if (clock/started? clock) (clock/stop! clock) (clock/start! clock)))}
         (if (clock/started? clock) "pause" "play_arrow")]]]
      [:div.flat-timer-middle-pane
       [:div.flat-timer-label.noselect "Label"]
       [:div.flat-timer-input
        [:input {:type "text"}]]
       [:div.flat-timer-label.noselect "Another Label"]]
      [:div.flat-timer-right-pane
       [:div.flat-timer-button.close
        [:div.material-icons.noselect "close"]]
       [:div.flat-timer-button.restart
        {:on-click (fn [] (clock/restart! clock))}
        [:div.material-icons.noselect "repeat"]]
       ]]

     ]))
