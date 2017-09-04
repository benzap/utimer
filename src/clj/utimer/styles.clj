(ns utimer.styles
  (:require [garden-watcher.def :refer [defstyles]]
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

(defstyles style
  [:*
   {:box-sizing :border-box
    :padding 0
    :margin 0
    :font-family font-sans
    :color (color/darken color-green 60)}]
  [:body
   {:width "100%"}]

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
     :min-width (px 170)
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
    :height (px 140)
    :border-bottom "2px solid white"
    :border-bottom-color (color/lighten color-beige 20)}]

  ;;svg
  [:.flat-timer-progress
   {:position "absolute"
    :height (px 140)
    :z-index -1}]

  [:.flat-timer-container
   {:position "absolute"
    :display "flex"
    :flex-direction "row"
    :align-items "center"
    :width "100%"
    :height (px 140)
    :text-align "center"}]
  
  [:.flat-timer-left-pane
   {:display "flex"
    :flex-direction "column"}]

  [:.flat-timer-middle-pane
   {:display "flex"
    :height "100%"
    :flex-direction "column"
    :justify-content "center"
    :align-items "center"
    :flex-grow 1}]

  [:.flat-timer-right-pane
   {:display "flex"
    :flex-direction "column"
    }]

  [:.flat-timer-label
   {:padding (px 5)
    :font-weight "bold"}]

  [:.flat-timer-input
   {:display "flex"
    :flex-direction "column"
    :justify-content "center"
    :align-items "center"
    :min-width (px 250)
    :width "100%"
    :padding (px 10)
    :padding-right (px 40)
    :flex-grow 1
    :align-self "center"}
   [:input 
    {:width "100%"
     :height "50%"
     :align-self "center"
     :border "none"
     :outline "none"
     :border-radius (px 4)
     :padding-left (px 15)
     :font-size (em 3)
     :font-family font-serif
     :font-style "italic"
     :text-align "center"
     :background-color (rgba 217, 218, 197 0.5)}]]

  
  [:.svg-timer-progress
   {:transition "width 0.01s linear"}]
  
  [:.flat-timer-button
   {:padding (px 15)
    :flex-basis (px 30)
    :font-size (px 30)
    :cursor "pointer"}]

  [:.flat-timer-button.play-pause
   {}
   [:.material-icons
    {:font-size (px 80)}]]

  )
