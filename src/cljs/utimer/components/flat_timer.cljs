(ns utimer.components.flat-timer
  (:require [goog.functions]
            [rum.core :as rum]
            [utimer.components.utils :as c-utils]))


(rum/defcs c-flat-timer <
  rum/reactive
  [state app-state]
  (let [{:keys [layout]} (rum/react app-state)]))
