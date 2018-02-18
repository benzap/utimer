(ns utimer.components.flat-timer
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [goog.functions]
   [rum.core :as rum]
   [cljs.core.async :refer [put! >! timeout close! untap]]
   [utimer.clock :as clock]
   [utimer.timer :as timer]
   [utimer.display :as display]
   [utimer.alarm :as alarm]
   [utimer.input-timer-parser :as parser]
   [utimer.components.utils :as c-utils]
   [utimer.title-updater :refer [timer-updater-interval]]))


(defn editable-label [default-text]
  {:text default-text
   :edit-mode false})


(defn editable-time [default-text]
  {:text default-text
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
     state)

   :did-mount
   (fn [state]
     (let [element (-> state :rum/args first)
           update-chan (-> state :rum/args (nth 2))
           *label-text (::*label-text state)
           clock (:clock state)
           alarm (c-utils/get-alarm state)
           updater-interval-id
           (js/setInterval
            (fn []
              (put! update-chan
                    {:id (:id element)
                     :label (:text @*label-text)
                     :progress (clock/progress clock)
                     :duration (clock/duration clock)
                     :started? (clock/started? clock)
                     :finished? (clock/finished? clock)})
              ) timer-updater-interval)]
       (assoc state ::updater-interval-id updater-interval-id)))
   :will-unmount
   (fn [state]
     (let [element (-> state :rum/args first)
           update-chan (-> state :rum/args (nth 2))]
       (js/clearTimeout (::updater-interval-id state))
       (put! update-chan
             {:id (:id element)
              :label ""
              :progress 100
              :duration 100
              :started? false
              :finished? true})

       (dissoc state ::updater-interval-id)))})


;; Alarm functions
(defn get-alarm [state]
  (c-utils/get-alarm state))


(rum/defcs c-flat-timer <
  {:key-fn (fn [element] (:id element))}
  rum/reactive
  (c-utils/mixin-alarm)
  (c-utils/mixin-clock)
  (mixin-flat-timer)

  ;; Local state with initial props
  {:will-mount
   (fn [state]
     (let [component (:rum/react-component state)
           element (-> state :rum/args first)
           
           ;; Local States
           *time-text (atom (editable-time (get element :initial "")))
           *label-text (atom (editable-label (get element :label "")))
           *finished-once? (atom false)
           *extended-options (atom {:open? false
                                    :loop? false
                                    :sound alarm/default-alarm-sound
                                    :test? false
                                    :prog-start-label ""
                                    :prog-close-after-msec nil
                                    :prog-reset-after-msec nil})
           ]
       (add-watch *time-text ::*time-text #(rum/request-render component))
       (add-watch *label-text ::*label-text #(rum/request-render component))
       (add-watch *finished-once? ::*finished-once? #(rum/request-render component))
       (add-watch *extended-options ::*extended-options #(rum/request-render component))

       (assoc state
              ::*time-text *time-text
              ::*label-text *label-text
              ::*finished-once? *finished-once?
              ::*extended-options *extended-options)))
   :did-mount
   (fn [state]
     (let [[_ bcast-in] (-> state :rum/args (nth 3))
           element (-> state :rum/args first)
           clock (:clock state)
           *label-text (::*label-text state)]
       (go-loop []
         (when-let [event (<! bcast-in)]
           ;; Process Broadcasted events
           (cond
             ;; Close the channel on unmount
             (and (= (:event-type event) :unmount)
                  (= (:id element) (:id event)))
             (close! bcast-in)
             
             ;; Start the timer if :start-timer has matching label
             (and (= (:event-type event) :start-timer-with-label)
                  (= (:label event) (:text @*label-text)))
             (-> clock clock/restart! clock/start!)


             (= (:event-type event) :echo)
             (println (:id element) " - Echo - " (:text event))
             )
           ;; Only keep looping if we haven't received an unmount event
           (when-not (and (= (:event-type event) :unmount)
                          (= (:id element) (:id event)))
             (recur))
           )))
     state)
   :will-unmount
   (fn [state]
     ;; send a broadcast unmount event to remove the :did-mount go-loop
     (let [[bcast-out _] (-> state :rum/args (nth 3))
           element (-> state :rum/args first)]
       (put! bcast-out {:event-type :unmount :id (:id element)}))
     state)}

  ;; Begin Render
  [state element remove-chan update-chan [bcast-out _]]
  (let [clock (:clock state)
        alarm (get-alarm state)
        progress-s (str (clock/percent-progress clock) "%")
        *label-text (::*label-text state)
        *time-text (::*time-text state)
        *finished-once? (::*finished-once? state)
        *extended-options (::*extended-options state)]

    ;; Configure Alarm Settings
    (let [alarm (get-alarm state)]
      (alarm/set-loop! alarm (:loop? @*extended-options))
      (alarm/set-sound! alarm (:sound @*extended-options))
      )

    ;; play alarm if timer is finished
    (if (clock/finished? clock)
      (alarm/play! alarm)
      (do
        (alarm/stop! alarm)
        (reset! *finished-once? false)
        ))

    ;; Programmable Functionality. Operations are only called once.
    (when (and (clock/finished? clock) (not @*finished-once?))
      (reset! *finished-once? true)

      ;; Start timer with the given label
      (when-let [prog-start-label (:prog-start-label @*extended-options)]
        (when-not (empty? prog-start-label)
          (put! bcast-out {:event-type :start-timer-with-label :label prog-start-label})))

      ;; Close timer after a specified time
      (when-let [prog-close-after-msec (:prog-close-after-msec @*extended-options)]
        (go
          (<! (timeout prog-close-after-msec))
          (-> alarm alarm/stop!)
          (-> clock clock/stop! clock/restart!)
          (>! remove-chan (:id element))))

      ;; Reset timer after a specified time
      (when-let [prog-reset-after-msec (:prog-reset-after-msec @*extended-options)]
        (go
          (<! (timeout prog-reset-after-msec))
          (-> alarm alarm/stop!)
          (-> clock clock/stop! clock/restart!)
          )))


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
                             (clock/finished? clock) (-> clock clock/restart!)
                             :else (clock/start! clock)))}
         (cond (clock/started? clock) "pause"
               (clock/finished? clock) "stop"
               :else "play_arrow")]]]
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
           [:input {:type "text"
                    :value (:text @*label-text)
                    
                    ;; Hack to move cursor to the end of the input text
                    :on-focus
                    (fn [e] 
                      (let [this (.-target e)]
                        (js/setTimeout #(aset this "selectionStart" 10000) 0)))
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
           {:on-click #(swap! *time-text assoc :edit-mode true)
            :class (if-not (clock/finished? clock)
                     (display-timeleft-class clock)
                     (display-duration-class clock))}
           (if-not (clock/finished? clock)
             (display-timeleft clock)
             (display-duration clock))]
          [:input {:type "text"
                   :value (:text @*time-text)

                   ;; Hack to move cursor to the end of the input text
                   :on-focus
                   (fn [e] 
                     (let [this (.-target e)]
                       (js/setTimeout #(aset this "selectionStart" 10000) 0)))
                   :on-change
                   (fn [e]
                     (let [val (-> e .-target .-value)]
                       (swap! *time-text assoc :text val)))
                   :on-key-down
                   (fn [e]
                     (let [key (-> e .-key)]
                       (case key
                         "Enter"
                         (do
                           (swap! *time-text assoc :edit-mode false)
                           (cond-> clock
                               (not (empty? (:text @*time-text)))
                               (clock/change! (parser/parse->duration (:text @*time-text)))
                               true
                               clock/restart!
                               true
                               clock/stop!))
                         "Escape"
                         (do
                           (swap! *time-text assoc :edit-mode false)
                          )
                         nil)
                       ))}])]

       [:div.flat-timer-middle-container.noselect.extended-options-button
        [:div.flat-timer-label
         [:div.material-icons.noselect
          {:on-click (fn [] (swap! *extended-options update :open? not))
           :title (if (:open? @*extended-options) "Hide Options" "Show Options")}
          (if (:open? @*extended-options) "expand_less" "dehaze")]]
        ]]
      [:div.flat-timer-right-pane
       [:div.flat-timer-button.close
        {:on-click (fn [] (put! remove-chan (:id element)))
         :title "Close Timer"}
        [:div.material-icons.noselect "close"]]
       [:div.flat-timer-button.restart
        {:on-click (fn [] (-> clock clock/stop! clock/restart!))
         :title (when (clock/progressed? clock) "Restart Timer")}
        [:div.material-icons.noselect
         {:class (when-not (clock/progressed? clock) "button-fade")}
         "repeat"]]
       ]]]
     (when (:open? @*extended-options)
       [:div.flat-timer-extended-options.anim-expand-vertical-normal
        [:div.flat-timer-extended-options-container
         [:h2 "Alarm Settings"]
         [:.alarm-sound-setting
          [:label "Alarm Sound: "]
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
          [:button.mat-button
           {:on-click #(alarm/test-play! alarm)}
           "Test Alarm"]]
         [:.alarm-sound-setting
          [:label "Alarm Repeat?"]
          [:input {:type "checkbox"
                   :defaultChecked (:loop? @*extended-options)
                   :on-change
                   (fn [e]
                     (let [val (-> e .-target .-checked)]
                       (swap! *extended-options assoc :loop? val)))
                   }]]
         [:hr]
         [:h2 "Programmable Settings"]
         [:.programmable-setting
          [:label "On Finish - Start Timer with Label: "]
          [:input {:placeholder "Label Name"
                   :type "text"
                   :defaultValue (:prog-start-label @*extended-options)
                   :on-change
                   (fn [e]
                     (swap! *extended-options assoc :prog-start-label (-> e .-target .-value)))}]
          [:button.mat-button
           {:on-click #(put! bcast-out {:event-type :start-timer-with-label
                                        :label (:prog-start-label @*extended-options)})}
           "Test Label"]]
         
         [:.programmable-setting
          [:label "On Finish - Close this Timer: "]
          [:select {:value (:prog-close-after-msec @*extended-options)
                    :on-change
                    (fn [e]
                      (swap! *extended-options assoc :prog-close-after-msec (-> e .-target .-value)))}
           [:option {:value nil} "Never"]
           [:option {:value 5000} "After 5 Seconds"]
           [:option {:value 10000} "After 10 Seconds"]
           [:option {:value 30000} "After 30 Seconds"]]]

         [:.programmable-setting
          [:label "On Finish - Reset this Timer: "]
          [:select {:value (:prog-reset-after-msec @*extended-options)
                    :on-change
                    (fn [e]
                      (swap! *extended-options assoc :prog-reset-after-msec (-> e .-target .-value)))}
           [:option {:value nil} "Never"]
           [:option {:value 5000} "After 5 Seconds"]
           [:option {:value 10000} "After 10 Seconds"]
           [:option {:value 30000} "After 30 Seconds"]]]
         ]])
     ]))
