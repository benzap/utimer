(ns utimer.events)


(defn event-timer-unmount [id]
  {:event-type :unmount
   :id id})


(defn is-event-timer-unmount?
  [{:keys [event-type]}]
  (= event-type :unmount))


(defn event-echo [text]
  {:event-type :echo
   :text text})


(defn is-event-echo?
  [{:keys [event-type]}]
  (= event-type :echo))


(defn event-start-timer-with-label [label]
  {:event-type :start-timer-with-label
   :label label})


(defn is-event-start-timer-with-label?
  [{:keys [event-type]}]
  (= event-type :start-timer-with-label))


(defn event-finished-timer [id label]
  {:event-type :finished-timer
   :id id
   :label label})


(defn is-event-finished-timer?
  [{:keys [event-type]}]
  (= event-type :finished-timer))


(defn event-remove-timer [id]
  {:event-type :remove-timer
   :id id})


(defn is-event-remove-timer?
  [{:keys [event-type]}]
  (= event-type :remove-timer))


(defn event-update-timer [timer-data]
  {:event-type :update-timer
   :timer-data timer-data})


(defn is-event-update-timer?
  [{:keys [event-type]}]
  (= event-type :update-timer))
