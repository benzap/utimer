(ns utimer.ext-async
  "Monkey-patch for cljs.core.async to continue firing the event tasks
  after the current browser tab loses focus.
  
  The primary means to do this is to change the dispatcher to use
  setTimeout when the browser loses focus, and re-enable the default
  dispatcher operation when it regains focus.

  Programming Tasks:
  - Use the visibility API: https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API

  References:
  - https://github.com/clojure/core.async/blob/f8e87e1625b1660b7f3b0aea044aad1327441741/src/main/clojure/cljs/core/async/impl/dispatch.cljs
  "
  (:require [cljs.core.async.impl.dispatch :as async.dispatch]))


(defonce *tab-focused? (atom true))
(defonce *timeout-callback-id (atom 0))
(defonce timeout-tick-rate 500) ;; ms


(defn is-browser? [] (not (nil? js/window)))


(defn timeout-queue-dispatcher []
  ;; follow the same conditions as async.dispatch/queue-dispatcher
  (when-not (and async.dispatch/queued? async.dispatch/running?)
    (set! async.dispatch/queued? true)
    (async.dispatch/process-messages)
    (reset! *timeout-callback-id (js/setTimeout timeout-queue-dispatcher timeout-tick-rate))
    ))


(defn attach-browser-async-harness! []
  ;; bind tabbed event focus only if it's a browser
  (when (is-browser?)
    ;; sets *tab-focused? based on if the current tab is open
    (.addEventListener js/document "visibilitychange"
                       #(reset! *tab-focused? (not (aget js/document "hidden"))))

    ;; Change the dispatcher if the tab is out of focus
    (add-watch *tab-focused? :dispatch-changer
               (fn [_ _ _ focused?]
                 (if-not focused?
                   (timeout-queue-dispatcher)
                   (js/clearTimeout @*timeout-callback-id))
                 ))))


