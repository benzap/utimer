(ns utimer.core
  (:require [rum.core :as rum]))

(enable-console-print!)

(defonce app-state (atom {:text "Hello Chestnut!"}))

(rum/defc greeting < rum/reactive []
   [:h1 (:text (rum/react app-state))])

(defn render []
  (rum/mount (greeting) (. js/document (getElementById "app"))))
