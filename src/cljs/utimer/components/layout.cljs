(ns utimer.components.layout
  (:require
   [rum.core :as rum]
   [utimer.components.utils :as c-utils]
   [utimer.components.flat-timer :refer [c-flat-timer]]
   ))


(rum/defcs c-layout <
  rum/reactive
  [state app-state layout]
  (let [{:keys [layout]} (rum/react app-state)]
    (for [elem layout]
      (case (:type elem)
        :initial (c-flat-timer app-state)))))
