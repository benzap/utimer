// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.system');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('utimer.components.ui');
utimer.system.new_system = (function utimer$system$new_system(){
return com.stuartsierra.component.system_map.call(null,new cljs.core.Keyword(null,"app-root","app-root",1723856706),utimer.components.ui.new_ui_component.call(null));
});
utimer.system.init = (function utimer$system$init(){
return utimer.system.system = utimer.system.new_system.call(null);
});
utimer.system.start = (function utimer$system$start(){
return utimer.system.system = com.stuartsierra.component.start.call(null,utimer.system.system);
});
utimer.system.stop = (function utimer$system$stop(){
return utimer.system.system = com.stuartsierra.component.stop.call(null,utimer.system.system);
});
utimer.system.go = (function utimer$system$go(){
utimer.system.init.call(null);

return utimer.system.start.call(null);
});
goog.exportSymbol('utimer.system.go', utimer.system.go);
utimer.system.reset = (function utimer$system$reset(){
utimer.system.stop.call(null);

return utimer.system.go.call(null);
});
