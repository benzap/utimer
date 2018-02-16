// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.ext_async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.dispatch');
if(typeof utimer.ext_async._STAR_tab_focused_QMARK_ !== 'undefined'){
} else {
utimer.ext_async._STAR_tab_focused_QMARK_ = cljs.core.atom.call(null,true);
}
if(typeof utimer.ext_async._STAR_timeout_callback_id !== 'undefined'){
} else {
utimer.ext_async._STAR_timeout_callback_id = cljs.core.atom.call(null,(0));
}
if(typeof utimer.ext_async.timeout_tick_rate !== 'undefined'){
} else {
utimer.ext_async.timeout_tick_rate = (500);
}
utimer.ext_async.is_browser_QMARK_ = (function utimer$ext_async$is_browser_QMARK_(){
return !((window == null));
});
utimer.ext_async.timeout_queue_dispatcher = (function utimer$ext_async$timeout_queue_dispatcher(){
if((cljs.core.async.impl.dispatch.queued_QMARK_) && (cljs.core.async.impl.dispatch.running_QMARK_)){
return null;
} else {
cljs.core.async.impl.dispatch.queued_QMARK_ = true;

cljs.core.async.impl.dispatch.process_messages.call(null);

return cljs.core.reset_BANG_.call(null,utimer.ext_async._STAR_timeout_callback_id,setTimeout(utimer.ext_async.timeout_queue_dispatcher,utimer.ext_async.timeout_tick_rate));
}
});
utimer.ext_async.attach_browser_async_harness_BANG_ = (function utimer$ext_async$attach_browser_async_harness_BANG_(){
if(cljs.core.truth_(utimer.ext_async.is_browser_QMARK_.call(null))){
document.addEventListener("visibilitychange",(function (){
return cljs.core.reset_BANG_.call(null,utimer.ext_async._STAR_tab_focused_QMARK_,cljs.core.not.call(null,(document["hidden"])));
}));

return cljs.core.add_watch.call(null,utimer.ext_async._STAR_tab_focused_QMARK_,new cljs.core.Keyword(null,"dispatch-changer","dispatch-changer",314573883),(function (_,___$1,___$2,focused_QMARK_){
if(cljs.core.not.call(null,focused_QMARK_)){
return utimer.ext_async.timeout_queue_dispatcher.call(null);
} else {
return clearTimeout(cljs.core.deref.call(null,utimer.ext_async._STAR_timeout_callback_id));
}
}));
} else {
return null;
}
});
