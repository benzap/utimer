(ns utimer.components.header
  (:require
   [cljs.reader :refer [read-string]]
   [rum.core :as rum]
   [utimer.layout :as layout]
   [utimer.components.utils :as c-utils]))


(rum/defcs c-header <
  rum/reactive
  [state app-state]
  (let [{:keys [layout]} (rum/react app-state)]
    [:div.ut-header
     [:div.header-title.noselect "μTimer"]
     [:div.header-template-chooser
      [:select {:defaultValue layout/template-default
                :on-change
                (fn [e]
                  (swap! app-state assoc :layout (read-string (-> e .-target .-value))))}
       [:option {:value layout/template-default} "Default"]
       [:option {:value layout/template-pomodoro} "Pomodoro"]
       [:option {:value layout/template-boxing} "Boxing"]
       [:option {:value layout/template-meditation} "Meditation"]
       ]]
     [:div.header-end-spacer
      [:a {:href "http://github.com/benzap/utimer"
           :title "View Github Page"}
       [:div.material-icons "help"]]]]))
