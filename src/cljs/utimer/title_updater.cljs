(ns utimer.title-updater
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [cljs.core.async :refer [chan put! <! >! timeout close!]]

   [utimer.display :as display]
   [utimer.input-timer-parser :refer [duration->time]]))


(defn duration->display [ms]
  (-> ms
      duration->time
      display/display-title-timeleft))


(defn set-title! [title]
  (aset js/document "title" title))


(defn remove-not-started? [time-events]
  (filter (fn [{:keys [started?]}] started?) time-events))


(defn sort-by-closest-end-time [time-events]
  (sort-by (fn [{:keys [progress duration]}] (- duration progress)) time-events))


(defn get-closest-time-event [time-events]
  (->> time-events
      remove-not-started?
      sort-by-closest-end-time
      first))


(def timer-updater-interval 50) ;;ms
(def update-chan (chan))
(def *update-listing (atom {}))
(defn mixin-update-title []
  {:did-mount
   (fn [state]
     ;; Retrieve time events and place in an update listing
     (go-loop []
       (when-let [{:keys [id label progress duration started? finished?] :as time-event}
                  (<! update-chan)]
         (swap! *update-listing assoc (:id time-event) time-event)
         (recur)))

     ;; Lookover the update listing, and display a time closest to completion
     (go-loop []
       (if-let [{:keys [label progress duration] :as time-event}
                  (get-closest-time-event (vals @*update-listing))]
         (set-title! (str (duration->display (- duration progress))
                          (when-not (empty? label) (str " - " label))))
         (set-title! (str "uTimer")))
       
       (<! (timeout timer-updater-interval))
       (recur))

     state)})
