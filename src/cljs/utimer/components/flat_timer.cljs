(ns utimer.components.flat-timer
  (:require [goog.functions]
            [rum.core :as rum]
            [cljs.core.async :refer [put!]]
            [utimer.clock :as clock]
            [utimer.timer :as timer]
            [utimer.display :as display]
            [utimer.alarm :as alarm]
            [utimer.input-timer-parser :as parser]
            [utimer.components.utils :as c-utils]))


(defn editable-label []
  {:text ""
   :edit-mode false})


(defn editable-time []
  {:text ""
   :edit-mode false})


(defn display-timeleft [clock]
  (let [time (parser/duration->time (clock/timeleft-ms clock))]
    (display/display-timeleft time)))


(defn display-duration [clock]
  (let [time (parser/duration->time (clock/duration clock))]
    (display/display-timeleft time)))


(defn display-timeleft-class [clock]
  (let [time (parser/duration->time (clock/timeleft-ms clock))]
    (display/display-class time)))


(defn display-duration-class [clock]
  (let [time (parser/duration->time (clock/duration clock))]
    (display/display-class time)))


(defn mixin-flat-timer []
  {:did-update
   (fn [state]
     (let [react-component (:rum/react-component state)
           dom-node (js/ReactDOM.findDOMNode react-component)]

       ;;FIXME: unable to focus if both input fields are open
       (when-let [elem (.querySelector js/document ".flat-timer-edit-mode>input")]
         (.focus elem))
       
       (when-let [elem (.querySelector js/document ".flat-timer-input>input")]
         (.focus elem))
       )
     state)})

;; Alarm functions
(defn get-alarm [state]
  (c-utils/get-alarm state))


(rum/defcs c-flat-timer <
  {:key-fn (fn [element] (:id element))}
  rum/reactive
  (c-utils/mixin-clock)
  (c-utils/mixin-alarm)
  (mixin-flat-timer)
  (rum/local (editable-label) ::*label-text)
  (rum/local (editable-time) ::*time-text)
  (rum/local {:open? false
              :loop? false
              :sound alarm/default-alarm-sound}
             ::*extended-options)

  [state element remove-chan]
  (let [clock (:clock state)
        alarm (get-alarm state)
        progress-s (str (clock/percent-progress clock) "%")
        *label-text (::*label-text state)
        *time-text (::*time-text state)
        *extended-options (::*extended-options state)]
    
    ;; Configure Alarm Settings
    (let [alarm (get-alarm state)]
      (alarm/set-loop! alarm (:loop? @*extended-options))
      (alarm/set-sound! alarm (:sound @*extended-options))
      )

    ;; play alarm if timer is finished
    (if (clock/finished? clock)
      (alarm/play! alarm)
      (alarm/stop! alarm))


    [:div.ut-timer.flat-timer {:class (str "timer-" (:id element))}
     [:div.flat-timer-main {:class (when (clock/finished? clock) "anim-color-reversal-normal")}
     [:svg {:class "flat-timer-progress" :width "100%" :height "100%"}
      [:rect {:class "flat-background" :width "100%" :height "100%" :fill "rgb(196,198,166)"}]
      [:rect {:class "svg-timer-progress" :width progress-s :height "100%" :fill "rgb(215,194,157)"}]
      [:rect {:class "svg-timer-progress-tick" :x progress-s :width "1" :height "100%" :fill "rgba(0,0,0,0.1)"}]
      ]
     [:div.flat-timer-container
      [:div.flat-timer-left-pane
       [:div.flat-timer-button.play-pause
        [:div.material-icons.noselect
         {:on-click (fn [] (cond 
                             (clock/started? clock) (clock/stop! clock)
                             (clock/finished? clock) (-> clock clock/restart! clock/start!)
                             :else (clock/start! clock)))}
         (if (clock/started? clock) "pause" "play_arrow")]]]
      [:div.flat-timer-middle-pane
       [:div.flat-timer-middle-container.noselect
        (if-not (:edit-mode @*label-text)
          (let [text (:text @*label-text)
                has-text? (> (count text) 0)]
           [[:div.flat-timer-label
            {:class (when-not has-text? "no-label")
             :on-click (fn [] (swap! *label-text assoc :edit-mode true))}
            (if-not has-text? "No Label" text)]
           [:div.material-icons.noselect
            {:on-click (fn [] (swap! *label-text assoc :edit-mode true))}
            "edit"]])

          [:div.flat-timer-edit-mode.noselect
           [:input {:type "text" :value (:text @*label-text)
                    :on-change (fn [e] (swap! *label-text assoc :text (-> e .-target .-value)))
                    :on-key-down
                    (fn [e] (let [key (-> e .-key)]
                              (when (or (= key "Enter")
                                        (= key "Escape"))
                                (swap! *label-text assoc :edit-mode false))))}]
           [:div.material-icons
            {:on-click (fn [] (swap! *label-text assoc :edit-mode false))}
            "check"]])
        ]

       [:div.flat-timer-input
        (if-not (:edit-mode @*time-text)
          [:div.flat-timer-display-container
           {:on-click (fn [e]
                        (swap! *time-text assoc
                               :edit-mode true
                               :text ""
                               ))
                        
            :class (if-not (clock/finished? clock)
                     (display-timeleft-class clock)
                     (display-duration-class clock))}
           (if-not (clock/finished? clock)
             (display-timeleft clock)
             (display-duration clock))]
          [:input {:type "text" :value (:text @*time-text)
                   :on-change (fn [e] (swap! *time-text assoc :text (-> e .-target .-value)))
                   :on-key-down
                   (fn [e]
                     (let [key (-> e .-key)]
                       (case key
                         "Enter"
                         (do
                           (swap! *time-text assoc :edit-mode false)
                           (clock/change! clock (parser/parse->duration (:text @*time-text)))
                           (clock/restart! clock)
                           )
                         "Escape"
                         (do
                           (swap! *time-text assoc :edit-mode false)
                          )
                         nil)
                       ))}])]

       [:div.flat-timer-middle-container.noselect
        [:div.flat-timer-label
         [:div.material-icons.noselect
          {:on-click (fn [] (swap! *extended-options update :open? not))}
          (if (:open? @*extended-options) "expand_less" "dehaze")]]
        ]]
      [:div.flat-timer-right-pane
       [:div.flat-timer-button.close
        {:on-click (fn [] (put! remove-chan (:id element)))
         :title "Close Timer"}
        [:div.material-icons.noselect "close"]]
       [:div.flat-timer-button.restart
        {:on-click (fn [] (-> clock clock/stop! clock/restart!))
         :title "Restart Timer"}
        [:div.material-icons.noselect "repeat"]]
       ]]]
     (when (:open? @*extended-options)
       [:div.flat-timer-extended-options.anim-expand-vertical-normal
        [:.alarm-sound-setting
         [:label "Alarm Sound"]
         [:select {:value (:sound @*extended-options)
                   :on-change
                   (fn [e]
                     (swap! *extended-options assoc :sound (-> e .-target .-value)))}
          [:option {:value nil} "None"]
          [:option {:value "audio/analog_alarm.mp3"} "Analog Alarm"]
          [:option {:value "audio/chinese_gong.mp3"} "Chinese Gong"]
          [:option {:value "audio/dixie_horn.mp3"} "Dixie Horn"]
          [:option {:value "audio/fog_horn.mp3"} "Fog Horn"]
          [:option {:value "audio/front_desk_bell.mp3"} "Front Desk Bell"]
          [:option {:value "audio/metal_gong.mp3"} "Metal Gong"]
          [:option {:value "audio/missle_alert.mp3"} "Missle Alert"]
          [:option {:value "audio/news_intro.mp3"} "News Intro"]
          [:option {:value "audio/police_whistle.mp3"} "Police Whistle"]
          [:option {:value "audio/railroad_crossing.mp3"} "Railroad Crossing"]
          [:option {:value "audio/school_bell.mp3"} "School Bell"]
          [:option {:value "audio/shotgun.mp3"} "Shotgun"]
          [:option {:value "audio/speaker_pulse.mp3"} "Speaker Pulse"]
          [:option {:value "audio/train_whistle.mp3"} "Train Whistle"]
          [:option {:value "audio/war_alarm.mp3"} "War Alarm"]]
         [:button.mat-button "Test Alarm"]]
        [:.alarm-sound-setting
         [:label "Alarm Repeat?"]
         [:input {:type "checkbox"
                  :defaultChecked (:loop? @*extended-options)
                  :on-change
                  (fn [e]
                    (let [val (-> e .-target .-checked)]
                      (swap! *extended-options assoc :loop? val)))
                  }]]])
     ]))
