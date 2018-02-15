(ns utimer.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [cljs.core.async :refer [chan sliding-buffer put! <! >! timeout close!]]
   [rum.core :as rum]
   [orchestra-cljs.spec.test :as st]
   
   ;; UTimer Modules
   [utimer.timer]
   [utimer.clock :as clock]
   [utimer.layout :as layout]
   [utimer.utils :as utils :refer [create-uuid]]
   
   ;; UTimer Components
   [utimer.components.header :refer [c-header]]
   [utimer.components.layout :refer [c-layout]]
   [utimer.components.flat-timer :refer [c-flat-timer]]
   [utimer.components.adder :refer [c-adder]]
   ))

;; For testing and development
(st/instrument)


(enable-console-print!)


(defonce app-state
  (atom
   {:edit-mode false
    :layout [{:type :flat :initial "10 Minutes" :id (create-uuid)}
             {:type :flat :initial "5 Hours" :id (create-uuid)}]}))


(defn add-flat-alarm [initial]
  (swap! app-state update-in [:layout] conj {:type :flat :initial initial :id (create-uuid)}))


(defn remove-by-id [id layout]
  (filterv (fn [elem] (not= (:id elem) id)) layout))


(def remove-chan (chan))
(defn mixin-remove-timer []
  {:did-mount (fn [state]
                (go-loop []
                  (let [uuid (<! remove-chan)]
                    (swap! app-state update-in [:layout] (partial remove-by-id uuid)))
                  (recur))
                state)})


(rum/defc main <
  (mixin-remove-timer)
  rum/reactive
  [app-state]
  (let [{:keys [layout]} (rum/react app-state)]
    [:div.main-body
     (c-header app-state)
     [:div.main-container
      (for [elem-data layout]
        (cond
          (= (:type elem-data) :flat)
          (c-flat-timer elem-data remove-chan)))
      (c-adder app-state)
     ]]))


(defn render []
  (rum/mount (main app-state) (. js/document (getElementById "app"))))
