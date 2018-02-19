// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.events');
goog.require('cljs.core');
utimer.events.event_timer_unmount = (function utimer$events$event_timer_unmount(id){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"unmount","unmount",-1779083333),new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
});
utimer.events.is_event_timer_unmount_QMARK_ = (function utimer$events$is_event_timer_unmount_QMARK_(p__40960){
var map__40961 = p__40960;
var map__40961__$1 = ((((!((map__40961 == null)))?((((map__40961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40961):map__40961);
var event_type = cljs.core.get.call(null,map__40961__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"unmount","unmount",-1779083333));
});
utimer.events.event_echo = (function utimer$events$event_echo(text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"echo","echo",1461973457),new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
});
utimer.events.is_event_echo_QMARK_ = (function utimer$events$is_event_echo_QMARK_(p__40963){
var map__40964 = p__40963;
var map__40964__$1 = ((((!((map__40964 == null)))?((((map__40964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40964):map__40964);
var event_type = cljs.core.get.call(null,map__40964__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"echo","echo",1461973457));
});
utimer.events.event_start_timer_with_label = (function utimer$events$event_start_timer_with_label(label){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"start-timer-with-label","start-timer-with-label",-1613161304),new cljs.core.Keyword(null,"label","label",1718410804),label], null);
});
utimer.events.is_event_start_timer_with_label_QMARK_ = (function utimer$events$is_event_start_timer_with_label_QMARK_(p__40966){
var map__40967 = p__40966;
var map__40967__$1 = ((((!((map__40967 == null)))?((((map__40967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40967):map__40967);
var event_type = cljs.core.get.call(null,map__40967__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"start-timer-with-label","start-timer-with-label",-1613161304));
});
utimer.events.event_finished_timer = (function utimer$events$event_finished_timer(id,label){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"finished-timer","finished-timer",-1378278955),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"label","label",1718410804),label], null);
});
utimer.events.is_event_finished_timer_QMARK_ = (function utimer$events$is_event_finished_timer_QMARK_(p__40969){
var map__40970 = p__40969;
var map__40970__$1 = ((((!((map__40970 == null)))?((((map__40970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40970):map__40970);
var event_type = cljs.core.get.call(null,map__40970__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"finished-timer","finished-timer",-1378278955));
});
utimer.events.event_remove_timer = (function utimer$events$event_remove_timer(id){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"remove-timer","remove-timer",-2003934250),new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
});
utimer.events.is_event_remove_timer_QMARK_ = (function utimer$events$is_event_remove_timer_QMARK_(p__40972){
var map__40973 = p__40972;
var map__40973__$1 = ((((!((map__40973 == null)))?((((map__40973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40973):map__40973);
var event_type = cljs.core.get.call(null,map__40973__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"remove-timer","remove-timer",-2003934250));
});
utimer.events.event_update_timer = (function utimer$events$event_update_timer(timer_data){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"update-timer","update-timer",1946173800),new cljs.core.Keyword(null,"timer-data","timer-data",-1203522005),timer_data], null);
});
utimer.events.is_event_update_timer_QMARK_ = (function utimer$events$is_event_update_timer_QMARK_(p__40975){
var map__40976 = p__40975;
var map__40976__$1 = ((((!((map__40976 == null)))?((((map__40976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40976):map__40976);
var event_type = cljs.core.get.call(null,map__40976__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"update-timer","update-timer",1946173800));
});
