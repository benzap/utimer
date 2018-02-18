(ns utimer.styles
  (:require [garden-watcher.def :refer [defstyles]]
            [garden.def :refer [defkeyframes]]
            [garden.units :as units :refer [px em]]
            [garden.color :as color :refer [rgb rgba hex->rgb rgb->hex]]
            [garden.stylesheet :refer [at-media]]))

(def color-red (rgb 229 172 158))
(def color-beige (rgb 205 191 162))
(def color-green (rgb 196 198 166))
(def color-yellow (rgb 215 208 170))
(def color-orange (rgb 215 194 157))

(def font-sans "'Droid Sans', sans-serif")
(def font-serif "'Droid Serif', serif")


(defkeyframes anim-fade-in
  ["0%"
   {:opacity 0}]

  ["100%"
   {:opacity 1.0}])


(defkeyframes anim-expand-vertical
  ["0%"
   {:background-color "black"
    :opacity 0.5}]
  ["100%"
   {:background-color color-orange
    :opacity 1.0}])


(defkeyframes anim-color-reversal
  ["0%"
   {:background-color (color/darken color-red 20)}]
  ["80%"
   {:background-color (color/darken color-green 20)}]
  ["100%"
   {:background-color (color/darken color-red 20)}])


(defstyles style
  [:*
   {:box-sizing :border-box
    :padding 0
    :margin 0
    :font-family font-sans
    :color (color/darken color-green 60)}]


  ;;
  ;; Animations
  ;;

  anim-fade-in
  [:.anim-fade-in-normal
   {:animation-name "anim-fade-in"
    :animation-duration "1.5s"
    :animation-fill-mode "both"}]

  anim-expand-vertical
  [:.anim-expand-vertical-normal
   {:animation-name "anim-expand-vertical"
    :animation-duration "0.2s"
    :animation-fill-mode "both"}]

  anim-color-reversal
  [:.anim-color-reversal-normal
   {:animation-name "anim-color-reversal"
    :animation-duration "1.0s"
    :animation-iteration-count "infinite"
    :animation-fill-mode "both"}]
  


  [:body
   {:width "100%"
    :min-width (px 500)}]

  [:html
   {:width "100%"
    :background-color (color/lighten color-beige 20)}]

  [:h1 {:text-decoration "underline"}]

  [:.noselect
   {:-webkit-touch-callout "none"
    :-webkit-user-select "none"
    :-khtml-user-select "none"
    :-moz-user-select "none"
    :-ms-user-select "none"
    :user-select "none"}]

  [:.ut-header
   {:display "flex"
    :flex-direction "row"
    :justify-content "space-between"
    :padding (px 10)
    :background-color (color/darken color-beige 10)
    :line-height "100%"
    :height "100%"}

   [:.header-title
    {:font-size (em 1.5)
     :font-weight "bold"
     :flex-basis (px 100)
     :flex-grow 0
     :flex-shrink 0
     :text-align "center"
     :align-self "center"}]

   [:.header-add-timer
    {:display "flex"
     :justify-content "center"
     :flex-grow 1
     :text-align "center"}]

   [:.mat-button
    {:font-size (em 1.5)
     :font-weight "bolder"
     :border "1px solid white"
     :border-radius (px 2)
     :background-color (color/darken color-beige 20)
     :padding (px 10)
     :max-width (px 500)
     :min-width (px 120)
     :width "80%"
     :text-align "center"}
    [:&:hover
     {:background-color (color/lighten color-beige 0)
      :cursor "pointer"}]]

   [:.header-end-spacer
    {:flex-basis (px 100)
     :flex-shrink 1}]]

  [:.ut-timer
   {:display "flex"
    :flex-direction "column"
    :box-sizing "initial"
    :border-bottom "2px solid black"
    :border-bottom-color (color/darken color-beige 20)}]

  ;;svg
  [:.flat-timer-progress
   {:position "absolute"
    :height (px 140)
    :z-index -1}]

  [:.flat-timer-container
   {:position "relative"
    :display "flex"
    :flex-direction "row"
    :align-items "center"
    :width "100%"
    :height (px 140)
    :text-align "center"}]
  
  [:.flat-timer-left-pane
   {:display "flex"
    :flex-direction "column"
    :margin-left (px 10)
    :margin-right (px 10)}]

  [:.flat-timer-middle-pane
   {:display "flex"
    :height "100%"
    :padding (px 5)
    :flex-direction "column"
    :justify-content "center"
    :align-items "center"
    :flex-grow 1}]

  [:.flat-timer-right-pane
   {:display "flex"
    :flex-direction "column"
    :margin-right (px 10)
    :margin-left (px 20)
    }]

  [:.flat-timer-middle-container
   {:display "flex"
    :flex-direction "row"
    :justify-content "center"
    :align-items "center"
    :cursor "pointer"}
   [:.material-icons
    {:font-size (em 1.4)
     :vertical-align "middle"
     :padding-left (px 10)
     :padding-right (px 10)
     :color (rgba 0 0 0 0.2)
     :cursor "pointer"
     :transition "transform 0.5s"}
    [:&:hover {:color (color/lighten color-beige 20)
               }]
    [:&:active
     {:transform "translate(0, 3px)"}]]]

  [:.extended-options-button
   {:margin-right (px 35)}]

  [:.material-icons
   {:transition "color 0.1s"}]

  [:.flat-timer-label
   {:font-weight "bold"
    :font-size (em 1.2)
    :transition "color 0.1s"}
   [:.material-icons
    {:transition "color 0.1s"}]
   [:&:hover
    {:color (rgba 0 0 0 0.5)}]]

  [:.no-label
   {:font-style "italic"
    :font-weight "lighter"
    :font-family font-serif
    :color (rgba 0 0 0 0.3)}]

  [:.flat-timer-edit-mode
   {:display "flex"
    :flex-direction "row"}
   [:input
    {:border "none"
     :outline "none"
     :font-size (em 1)
     :font-family font-sans
     :padding-left (px 10)
     :padding-right (px 10)
     :border-radius (px 4)
     :background-color color-yellow
     :text-align "center"
     :padding (px 3)
     }]]

  [:.flat-timer-input
   {:display "flex"
    :flex-direction "column"
    :justify-content "center"
    :align-items "center"
    :min-width (px 150)
    :width "100%"
    :padding (px 10)
    :padding-right (px 40)
    :flex-grow 1
    :overflow "hidden"
    :align-self "center"}
   [:input 
    {:width "100%"
     :height "100%"
     :align-self "center"
     :border "none"
     :outline "none"
     :border-radius (px 4)
     :padding-left (px 15)
     :font-size (em 2)
     :font-family font-serif
     :font-style "italic"
     :text-align "center"
     :background-color (rgba 217, 218, 197 0.5)}]]

  [:.flat-timer-display-container
   {:font-size (em 2)}]
  
  [:.svg-timer-progress
   {:transition "width 0.01s"
    :transition-timing-function "ease-out"}]

  [:.svg-timer-progress-tick
   {:transition "x 0.01s"
    :transition-timing-function "ease-out"}]
  
  [:.flat-timer-button
   {:padding (px 15)
    :flex-basis (px 30)
    :font-size (px 30)}]

  [:.flat-timer-button.play-pause
   {:margin-left (px 10)}
   [:.material-icons
    {:border-radius "100%"
     :font-size (px 80)
     :transition "background-color 0.2s"}
    [:&:hover 
     {:background-color (rgba 0 0 0 0.1)}]]]

  [:.flat-timer-button.close
   {}
   [:.material-icons
    {:transition "color 0.1s"
     :cursor "pointer"}
    [:&:hover
     {:color (color/lighten color-beige 20)}]]]

  [:.flat-timer-button.restart
   [:.material-icons
    {:transition "color 0.1s"
     :cursor "pointer"}
    [:&:hover
     {:color (color/lighten color-beige 20)}]]
   [:.button-fade
    {:color (rgba 0 0 0 0.3)
     :cursor "initial"}
    [:&:hover
     {:color (rgba 0 0 0 0.3)}]]]

  [:.play-pause
   [:.material-icons
    {:transition "color 0.1s"
     :cursor "pointer"}
    [:&:hover
     {:color "black"}]]]

  [:.display-timer-year
   {}]

  [:.display-timer-day
   {}]

  [:.display-timer-hour
   {:font-size (em 3)}]
  
  [:.display-timer-minute
   {:font-size (em 3)}]

  [:.display-timer-second
   {:font-size (em 3.5)}]

  [:.audio-playback {:display "none"}]

  [:.adder-container
   {:display "flex"
    :width "100%"
    :justify-content "center"
    :align-items "center"
    :height (px 20)
    :background-color color-yellow
    :cursor "pointer"
    :color (rgba 13 13 13 0.5)
    :transition "background-color 0.3s"}
   [:&:hover
    {:color "black"
     :background-color (color/darken color-yellow 10)}]]

  [:.adder-container>.material-icons
   {:padding-left (px 20)}]

  [:.flat-timer-extended-options
   {:display "flex"
    :flex-grow 0
    :flex-shrink 0
    :justify-content "center"
    :flex-direction "column"
    :background-color (color/darken color-orange 0)
    :border-top "1px solid rgba(0,0,0,0.1)"
    :box-shadow "inset 0px 3px 3px 0px rgba(0,0,0,0.7)"
    :padding (px 10)
    :overflow "hidden"}
   [:hr
    {:border "1px solid grey"
     :border-color (rgba 13 13 13 0.3)
     :border-radius (px 2)
     :margin-top (px 10)
     :margin-bottom (px 10)}]]
  
  [:.flat-timer-extended-options-container
   {:margin "auto auto"}]

  [:.alarm-sound-setting
   {:display "flex"
    ;;:justify-content "center"
    :align-items "center"
    :padding (px 5)}]

  [:.programmable-setting
   {:display "flex"
    :align-items "center"
    :padding (px 5)}]

  [:select {:width (px 120)
            :height (px 24)
            :background-color (color/darken color-beige 10)
            :outline "none"
            :color (rgba 64 64 64 1.0)
            :margin-left (px 5)
            :margin-right (px 5)}]

  [:.programmable-setting>select
   {:width (px 160)}]

  ["input[type=checkbox]"
   {:padding (px 5)
    :margin-left (px 7)
    :margin-right (px 7)}]

  [".programmable-setting>input[type=text]"
   {:width (px 120)
    :height (px 24)
    :background-color (color/darken color-beige 10)
    :outline "none"
    :color (rgba 64 64 64 1.0)
    :margin-left (px 5)
    :margin-right (px 5)
    :border "1px solid grey"
    :padding (px 5)}]

  [:.mat-button
   {:background-color (rgba 13 13 13 0.3)
    :border "none"
    :outline "none"
    :padding (px 5)
    :cursor "pointer"}
   [:&:hover
    {:color (rgba 240 240 240 0.5)}]]

  )
