(ns utimer.utils
  (:require [clojure.string :as string]))


(defn create-uuid
  []
  (letfn [(f [] (.toString (rand-int 16) 16))
          (fseq [n] (repeatedly n f))
          (fstring [n] (apply str (fseq n)))
          (g [] (.toString  (bit-or 0x8 (bit-and 0x3 (rand-int 15))) 16))
          (gseq [n] (repeatedly n g))
          (gstring [n] (apply str (gseq n)))]
    (str (fstring 8) "-"
         (fstring 4) "-4"
         (fstring 3) "-"
         (gstring 1) (gstring 3) "-"
         (fstring 12))))

;;(create-uuid)
