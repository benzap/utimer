(ns utimer.components.adder
  (:require
   [rum.core :as rum]

   [utimer.utils :as utils :refer [create-uuid]]
   ))


(defn add-flat-alarm [app-state]
  (swap! app-state update-in [:layout] conj
         {:type :flat :initial "10 Minutes" :id (create-uuid)}))


(rum/defcs c-adder <
  {:key-fn (fn [_] "unique-id-adder")}
  rum/reactive
  [state app-state]
  (let []
    [:div.adder-container {:title "Add Timer"
                           :on-click (fn [e] (add-flat-alarm app-state))}
     [:div.material-icons.noselect "add"]]
    ))
