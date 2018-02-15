(ns utimer.components.header
  (:require
   [rum.core :as rum]
   [utimer.components.utils :as c-utils]))


(rum/defcs c-header [app-state]
  [:div.ut-header
   [:div.header-title.noselect "μTimer"]
   [:div.header-add-timer]
   [:div.header-end-spacer]])
