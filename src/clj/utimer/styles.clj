(ns utimer.styles
  (:require [garden-watcher.def :refer [defstyles]]
            [garden.units :as units :refer [px em]]
            [garden.color :as color :refer [rgb rgba hex->rgb]]
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






  )
