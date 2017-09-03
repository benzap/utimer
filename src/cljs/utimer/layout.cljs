(ns utimer.layout
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [com.rpl.specter :as specter :refer [FIRST ALL BEGINNING END LAST VAL]]
   [cljs.core.async :refer [chan sliding-buffer put! <! >! timeout close!]]
   [clojure.spec.alpha :as s]
   [utimer.utils :as utils :refer [create-uuid]]))


(defn element [type]
  {:type type
   :id (create-uuid)})


(defn insertv [xs x i]
  (let [[x1 x2] (split-at i xs)]
    (vec (concat x1 (list x) x2))))


(defn length-row [layout]
  (count layout))


(defn length-col [layout j]
  (count (get layout j)))


(defn init-layout []
  [[(element :initial)]])


(defn branch
  ([layout element row col]
   (specter/transform [(specter/keypath row)]
                      #(insertv % element col)
                      layout))
  ([layout element row]
   (branch layout element row (length-col layout row)))
  ([layout element]
   (let [row (length-row layout)
         col (length-col layout row)]
     (branch layout element row col))))


#_(-> (init-layout)
      (branch (element :branch11) 0)
      (branch (element :branch12) 0))

(specter/transform [(specter/keypath 1)] #(conj % :a) [[1 2 3] [4 5 6]])


(defn extend
  ([layout element row]
   (specter/transform []
                      #(insertv % [element] row)
                      layout))
  ([layout element]
   (extend layout element (length-row layout))))
