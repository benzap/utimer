(ns utimer.test-runner
  (:require
   [doo.runner :refer-macros [doo-tests]]
   [utimer.core-test]
   [utimer.common-test]))

(enable-console-print!)

(doo-tests 'utimer.core-test
           'utimer.common-test)
