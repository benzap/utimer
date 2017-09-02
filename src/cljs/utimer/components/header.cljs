(ns utimer.components.header
  (:require
   [rum.core :as rum]
   [utimer.components.utils :as c-utils]))


(rum/defcs c-header [app-state]
  [:div.ut-header
   [:div.header-title "μTimer"]
   [:div.header-add-timer
    [:div.mat-button "+ Add Timer"]]
   [:div.header-end-spacer]])
