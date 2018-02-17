// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.clock');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.spec.alpha');
goog.require('utimer.timer');
cljs.core.enable_console_print_BANG_.call(null);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","*initialized?","utimer.clock/*initialized?",-861282460),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("cljs","core.Atom","cljs/core.Atom",-1232630089,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__50672_SHARP_){
return (p1__50672_SHARP_ instanceof cljs.core.Atom);
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","*timer","utimer.clock/*timer",192367974),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("cljs","core.Atom","cljs/core.Atom",-1232630089,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__50673_SHARP_){
return (p1__50673_SHARP_ instanceof cljs.core.Atom);
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","channel","utimer.clock/channel",1096085244),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("cljs","core.async.impl.channels.ManyToManyChannel","cljs/core.async.impl.channels.ManyToManyChannel",1784516213,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__50674_SHARP_){
return (p1__50674_SHARP_ instanceof cljs.core.async.impl.channels.ManyToManyChannel);
}));
utimer.clock.default_tick_rate_ms = (20);
utimer.clock.new_clock = (function utimer$clock$new_clock(var_args){
var args__36180__auto__ = [];
var len__36173__auto___50680 = arguments.length;
var i__36174__auto___50681 = (0);
while(true){
if((i__36174__auto___50681 < len__36173__auto___50680)){
args__36180__auto__.push((arguments[i__36174__auto___50681]));

var G__50682 = (i__36174__auto___50681 + (1));
i__36174__auto___50681 = G__50682;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((1) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((1)),(0),null)):null);
return utimer.clock.new_clock.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36181__auto__);
});

utimer.clock.new_clock.cljs$core$IFn$_invoke$arity$variadic = (function (duration,p__50677){
var map__50678 = p__50677;
var map__50678__$1 = ((((!((map__50678 == null)))?((((map__50678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50678):map__50678);
var tick_rate = cljs.core.get.call(null,map__50678__$1,new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549),utimer.clock.default_tick_rate_ms);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"*initialized?","*initialized?",2050741236),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"*timer","*timer",-637700106),cljs.core.atom.call(null,utimer.timer.new_timer.call(null,duration)),new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549),tick_rate,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10)))], null);
});

utimer.clock.new_clock.cljs$lang$maxFixedArity = (1);

utimer.clock.new_clock.cljs$lang$applyTo = (function (seq50675){
var G__50676 = cljs.core.first.call(null,seq50675);
var seq50675__$1 = cljs.core.next.call(null,seq50675);
return utimer.clock.new_clock.cljs$core$IFn$_invoke$arity$variadic(G__50676,seq50675__$1);
});

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","tick-rate","utimer.clock/tick-rate",357050845),new cljs.core.Keyword("utimer.timer","ms","utimer.timer/ms",-792243724),new cljs.core.Keyword("utimer.timer","ms","utimer.timer/ms",-792243724));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","event-channel","utimer.clock/event-channel",-152971646),new cljs.core.Keyword("utimer.clock","channel","utimer.clock/channel",1096085244),new cljs.core.Keyword("utimer.clock","channel","utimer.clock/channel",1096085244));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","progress-channel","utimer.clock/progress-channel",444438759),new cljs.core.Keyword("utimer.clock","channel","utimer.clock/channel",1096085244),new cljs.core.Keyword("utimer.clock","channel","utimer.clock/channel",1096085244));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","clock","utimer.clock/clock",-115672887),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.clock","*initialized?","utimer.clock/*initialized?",-861282460),new cljs.core.Keyword("utimer.clock","*timer","utimer.clock/*timer",192367974),new cljs.core.Keyword("utimer.clock","tick-rate","utimer.clock/tick-rate",357050845),new cljs.core.Keyword("utimer.clock","event-channel","utimer.clock/event-channel",-152971646),new cljs.core.Keyword("utimer.clock","progress-channel","utimer.clock/progress-channel",444438759)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.clock","*initialized?","utimer.clock/*initialized?",-861282460),new cljs.core.Keyword("utimer.clock","*timer","utimer.clock/*timer",192367974),new cljs.core.Keyword("utimer.clock","tick-rate","utimer.clock/tick-rate",357050845),new cljs.core.Keyword("utimer.clock","event-channel","utimer.clock/event-channel",-152971646),new cljs.core.Keyword("utimer.clock","progress-channel","utimer.clock/progress-channel",444438759)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__50683){
return cljs.core.map_QMARK_.call(null,G__50683);
}),(function (G__50683){
return cljs.core.contains_QMARK_.call(null,G__50683,new cljs.core.Keyword(null,"*initialized?","*initialized?",2050741236));
}),(function (G__50683){
return cljs.core.contains_QMARK_.call(null,G__50683,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
}),(function (G__50683){
return cljs.core.contains_QMARK_.call(null,G__50683,new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549));
}),(function (G__50683){
return cljs.core.contains_QMARK_.call(null,G__50683,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
}),(function (G__50683){
return cljs.core.contains_QMARK_.call(null,G__50683,new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311));
})], null),(function (G__50683){
return (cljs.core.map_QMARK_.call(null,G__50683)) && (cljs.core.contains_QMARK_.call(null,G__50683,new cljs.core.Keyword(null,"*initialized?","*initialized?",2050741236))) && (cljs.core.contains_QMARK_.call(null,G__50683,new cljs.core.Keyword(null,"*timer","*timer",-637700106))) && (cljs.core.contains_QMARK_.call(null,G__50683,new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549))) && (cljs.core.contains_QMARK_.call(null,G__50683,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114))) && (cljs.core.contains_QMARK_.call(null,G__50683,new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.clock","*initialized?","utimer.clock/*initialized?",-861282460),new cljs.core.Keyword("utimer.clock","*timer","utimer.clock/*timer",192367974),new cljs.core.Keyword("utimer.clock","tick-rate","utimer.clock/tick-rate",357050845),new cljs.core.Keyword("utimer.clock","event-channel","utimer.clock/event-channel",-152971646),new cljs.core.Keyword("utimer.clock","progress-channel","utimer.clock/progress-channel",444438759)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*initialized?","*initialized?",2050741236),new cljs.core.Keyword(null,"*timer","*timer",-637700106),new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549),new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"*initialized?","*initialized?",2050741236))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"*timer","*timer",-637700106))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"event-channel","event-channel",1215556114))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","event-action","utimer.clock/event-action",406622207),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","event","utimer.clock/event",1072019074),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.clock","event-action","utimer.clock/event-action",406622207)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.clock","event-action","utimer.clock/event-action",406622207)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__50684){
return cljs.core.map_QMARK_.call(null,G__50684);
}),(function (G__50684){
return cljs.core.contains_QMARK_.call(null,G__50684,new cljs.core.Keyword(null,"event-action","event-action",-974748529));
})], null),(function (G__50684){
return (cljs.core.map_QMARK_.call(null,G__50684)) && (cljs.core.contains_QMARK_.call(null,G__50684,new cljs.core.Keyword(null,"event-action","event-action",-974748529)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.clock","event-action","utimer.clock/event-action",406622207)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-action","event-action",-974748529)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"event-action","event-action",-974748529)))], null),null])));
utimer.clock.event_start = (function utimer$clock$event_start(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-action","event-action",-974748529),new cljs.core.Keyword(null,"start","start",-355208981)], null);
});
utimer.clock.event_stop = (function utimer$clock$event_stop(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-action","event-action",-974748529),new cljs.core.Keyword(null,"stop","stop",-2140911342)], null);
});
utimer.clock.event_tick = (function utimer$clock$event_tick(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-action","event-action",-974748529),new cljs.core.Keyword(null,"tick","tick",-835886976)], null);
});
utimer.clock.event_reset = (function utimer$clock$event_reset(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-action","event-action",-974748529),new cljs.core.Keyword(null,"reset","reset",-800929946)], null);
});
utimer.clock.event_quit = (function utimer$clock$event_quit(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-action","event-action",-974748529),new cljs.core.Keyword(null,"quit","quit",53285210)], null);
});
utimer.clock.event_change = (function utimer$clock$event_change(duration){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-action","event-action",-974748529),new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.Keyword(null,"event-value","event-value",1898135138),duration], null);
});
utimer.clock.do_action_start_BANG_ = (function utimer$clock$do_action_start_BANG_(p__50685){
var map__50686 = p__50685;
var map__50686__$1 = ((((!((map__50686 == null)))?((((map__50686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50686):map__50686);
var clock = map__50686__$1;
var _STAR_timer = cljs.core.get.call(null,map__50686__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
var event_channel = cljs.core.get.call(null,map__50686__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.swap_BANG_.call(null,_STAR_timer,utimer.timer.start);

cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_tick.call(null));

return clock;
});
utimer.clock.do_action_stop_BANG_ = (function utimer$clock$do_action_stop_BANG_(p__50688){
var map__50689 = p__50688;
var map__50689__$1 = ((((!((map__50689 == null)))?((((map__50689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50689):map__50689);
var clock = map__50689__$1;
var _STAR_timer = cljs.core.get.call(null,map__50689__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
var event_channel = cljs.core.get.call(null,map__50689__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.swap_BANG_.call(null,_STAR_timer,utimer.timer.stop);

cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_tick.call(null));

return clock;
});
utimer.clock.do_action_tick_BANG_ = (function utimer$clock$do_action_tick_BANG_(p__50691){
var map__50692 = p__50691;
var map__50692__$1 = ((((!((map__50692 == null)))?((((map__50692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50692):map__50692);
var clock = map__50692__$1;
var _STAR_timer = cljs.core.get.call(null,map__50692__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
var event_channel = cljs.core.get.call(null,map__50692__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var progress_channel = cljs.core.get.call(null,map__50692__$1,new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311));
var tick_rate = cljs.core.get.call(null,map__50692__$1,new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549));
var c__48318__auto___50721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto___50721,map__50692,map__50692__$1,clock,_STAR_timer,event_channel,progress_channel,tick_rate){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto___50721,map__50692,map__50692__$1,clock,_STAR_timer,event_channel,progress_channel,tick_rate){
return (function (state_50709){
var state_val_50710 = (state_50709[(1)]);
if((state_val_50710 === (1))){
var inst_50694 = cljs.core.async.timeout.call(null,tick_rate);
var state_50709__$1 = state_50709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50709__$1,(2),inst_50694);
} else {
if((state_val_50710 === (2))){
var inst_50696 = (state_50709[(2)]);
var inst_50697 = cljs.core.swap_BANG_.call(null,_STAR_timer,utimer.timer.tick);
var inst_50698 = cljs.core.deref.call(null,_STAR_timer);
var inst_50699 = new cljs.core.Keyword(null,"started?","started?",-1301062863).cljs$core$IFn$_invoke$arity$1(inst_50698);
var state_50709__$1 = (function (){var statearr_50711 = state_50709;
(statearr_50711[(7)] = inst_50696);

(statearr_50711[(8)] = inst_50697);

return statearr_50711;
})();
if(cljs.core.truth_(inst_50699)){
var statearr_50712_50722 = state_50709__$1;
(statearr_50712_50722[(1)] = (3));

} else {
var statearr_50713_50723 = state_50709__$1;
(statearr_50713_50723[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50710 === (3))){
var inst_50701 = cljs.core.deref.call(null,_STAR_timer);
var inst_50702 = cljs.core.async.put_BANG_.call(null,progress_channel,inst_50701);
var state_50709__$1 = state_50709;
var statearr_50714_50724 = state_50709__$1;
(statearr_50714_50724[(2)] = inst_50702);

(statearr_50714_50724[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50710 === (4))){
var state_50709__$1 = state_50709;
var statearr_50715_50725 = state_50709__$1;
(statearr_50715_50725[(2)] = null);

(statearr_50715_50725[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50710 === (5))){
var inst_50705 = (state_50709[(2)]);
var inst_50706 = utimer.clock.event_tick.call(null);
var inst_50707 = cljs.core.async.put_BANG_.call(null,event_channel,inst_50706);
var state_50709__$1 = (function (){var statearr_50716 = state_50709;
(statearr_50716[(9)] = inst_50705);

return statearr_50716;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50709__$1,inst_50707);
} else {
return null;
}
}
}
}
}
});})(c__48318__auto___50721,map__50692,map__50692__$1,clock,_STAR_timer,event_channel,progress_channel,tick_rate))
;
return ((function (switch__48230__auto__,c__48318__auto___50721,map__50692,map__50692__$1,clock,_STAR_timer,event_channel,progress_channel,tick_rate){
return (function() {
var utimer$clock$do_action_tick_BANG__$_state_machine__48231__auto__ = null;
var utimer$clock$do_action_tick_BANG__$_state_machine__48231__auto____0 = (function (){
var statearr_50717 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50717[(0)] = utimer$clock$do_action_tick_BANG__$_state_machine__48231__auto__);

(statearr_50717[(1)] = (1));

return statearr_50717;
});
var utimer$clock$do_action_tick_BANG__$_state_machine__48231__auto____1 = (function (state_50709){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_50709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e50718){if((e50718 instanceof Object)){
var ex__48234__auto__ = e50718;
var statearr_50719_50726 = state_50709;
(statearr_50719_50726[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50727 = state_50709;
state_50709 = G__50727;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
utimer$clock$do_action_tick_BANG__$_state_machine__48231__auto__ = function(state_50709){
switch(arguments.length){
case 0:
return utimer$clock$do_action_tick_BANG__$_state_machine__48231__auto____0.call(this);
case 1:
return utimer$clock$do_action_tick_BANG__$_state_machine__48231__auto____1.call(this,state_50709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$clock$do_action_tick_BANG__$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$clock$do_action_tick_BANG__$_state_machine__48231__auto____0;
utimer$clock$do_action_tick_BANG__$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$clock$do_action_tick_BANG__$_state_machine__48231__auto____1;
return utimer$clock$do_action_tick_BANG__$_state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto___50721,map__50692,map__50692__$1,clock,_STAR_timer,event_channel,progress_channel,tick_rate))
})();
var state__48320__auto__ = (function (){var statearr_50720 = f__48319__auto__.call(null);
(statearr_50720[(6)] = c__48318__auto___50721);

return statearr_50720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto___50721,map__50692,map__50692__$1,clock,_STAR_timer,event_channel,progress_channel,tick_rate))
);


return clock;
});
utimer.clock.do_action_reset_BANG_ = (function utimer$clock$do_action_reset_BANG_(p__50728){
var map__50729 = p__50728;
var map__50729__$1 = ((((!((map__50729 == null)))?((((map__50729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50729):map__50729);
var clock = map__50729__$1;
var _STAR_timer = cljs.core.get.call(null,map__50729__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
var event_channel = cljs.core.get.call(null,map__50729__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var progress_channel = cljs.core.get.call(null,map__50729__$1,new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311));
cljs.core.swap_BANG_.call(null,_STAR_timer,utimer.timer.reset);

cljs.core.async.put_BANG_.call(null,progress_channel,cljs.core.deref.call(null,_STAR_timer));

cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_tick.call(null));

return clock;
});
utimer.clock.do_action_quit_BANG_ = (function utimer$clock$do_action_quit_BANG_(p__50731){
var map__50732 = p__50731;
var map__50732__$1 = ((((!((map__50732 == null)))?((((map__50732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50732.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50732):map__50732);
var clock = map__50732__$1;
var _STAR_timer = cljs.core.get.call(null,map__50732__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
var event_channel = cljs.core.get.call(null,map__50732__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var progress_channel = cljs.core.get.call(null,map__50732__$1,new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311));
cljs.core.swap_BANG_.call(null,_STAR_timer,utimer.timer.stop);

cljs.core.async.close_BANG_.call(null,event_channel);

cljs.core.async.close_BANG_.call(null,progress_channel);

return clock;
});
utimer.clock.do_action_change_BANG_ = (function utimer$clock$do_action_change_BANG_(p__50734,duration){
var map__50735 = p__50734;
var map__50735__$1 = ((((!((map__50735 == null)))?((((map__50735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50735):map__50735);
var clock = map__50735__$1;
var _STAR_timer = cljs.core.get.call(null,map__50735__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
var event_channel = cljs.core.get.call(null,map__50735__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.swap_BANG_.call(null,_STAR_timer,utimer.timer.change_duration,duration);

cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_tick.call(null));

return clock;
});
utimer.clock.event_loop = (function utimer$clock$event_loop(p__50737){
var map__50738 = p__50737;
var map__50738__$1 = ((((!((map__50738 == null)))?((((map__50738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50738.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50738):map__50738);
var clock = map__50738__$1;
var _STAR_initialized_QMARK_ = cljs.core.get.call(null,map__50738__$1,new cljs.core.Keyword(null,"*initialized?","*initialized?",2050741236));
var event_channel = cljs.core.get.call(null,map__50738__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.reset_BANG_.call(null,_STAR_initialized_QMARK_,true);

var c__48318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto__,map__50738,map__50738__$1,clock,_STAR_initialized_QMARK_,event_channel){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto__,map__50738,map__50738__$1,clock,_STAR_initialized_QMARK_,event_channel){
return (function (state_50769){
var state_val_50770 = (state_50769[(1)]);
if((state_val_50770 === (7))){
var inst_50765 = (state_50769[(2)]);
var state_50769__$1 = state_50769;
var statearr_50771_50798 = state_50769__$1;
(statearr_50771_50798[(2)] = inst_50765);

(statearr_50771_50798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50770 === (1))){
var state_50769__$1 = state_50769;
var statearr_50772_50799 = state_50769__$1;
(statearr_50772_50799[(2)] = null);

(statearr_50772_50799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50770 === (4))){
var inst_50742 = (state_50769[(7)]);
var inst_50743 = (state_50769[(8)]);
var inst_50742__$1 = (state_50769[(2)]);
var inst_50743__$1 = new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(inst_50742__$1);
var state_50769__$1 = (function (){var statearr_50773 = state_50769;
(statearr_50773[(7)] = inst_50742__$1);

(statearr_50773[(8)] = inst_50743__$1);

return statearr_50773;
})();
if(cljs.core.truth_(inst_50743__$1)){
var statearr_50774_50800 = state_50769__$1;
(statearr_50774_50800[(1)] = (5));

} else {
var statearr_50775_50801 = state_50769__$1;
(statearr_50775_50801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50770 === (15))){
var state_50769__$1 = state_50769;
var statearr_50776_50802 = state_50769__$1;
(statearr_50776_50802[(2)] = null);

(statearr_50776_50802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50770 === (13))){
var inst_50753 = utimer.clock.do_action_quit_BANG_.call(null,clock);
var state_50769__$1 = state_50769;
var statearr_50777_50803 = state_50769__$1;
(statearr_50777_50803[(2)] = inst_50753);

(statearr_50777_50803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50770 === (6))){
var inst_50763 = cljs.core.reset_BANG_.call(null,_STAR_initialized_QMARK_,false);
var state_50769__$1 = state_50769;
var statearr_50778_50804 = state_50769__$1;
(statearr_50778_50804[(2)] = inst_50763);

(statearr_50778_50804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50770 === (3))){
var inst_50767 = (state_50769[(2)]);
var state_50769__$1 = state_50769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50769__$1,inst_50767);
} else {
if((state_val_50770 === (12))){
var inst_50751 = utimer.clock.do_action_reset_BANG_.call(null,clock);
var state_50769__$1 = state_50769;
var statearr_50779_50805 = state_50769__$1;
(statearr_50779_50805[(2)] = inst_50751);

(statearr_50779_50805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50770 === (2))){
var state_50769__$1 = state_50769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50769__$1,(4),event_channel);
} else {
if((state_val_50770 === (11))){
var inst_50749 = utimer.clock.do_action_tick_BANG_.call(null,clock);
var state_50769__$1 = state_50769;
var statearr_50780_50806 = state_50769__$1;
(statearr_50780_50806[(2)] = inst_50749);

(statearr_50780_50806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50770 === (9))){
var inst_50745 = utimer.clock.do_action_start_BANG_.call(null,clock);
var state_50769__$1 = state_50769;
var statearr_50781_50807 = state_50769__$1;
(statearr_50781_50807[(2)] = inst_50745);

(statearr_50781_50807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50770 === (5))){
var inst_50743 = (state_50769[(8)]);
var state_50769__$1 = state_50769;
var G__50782_50808 = inst_50743;
var G__50782_50809__$1 = (((G__50782_50808 instanceof cljs.core.Keyword))?G__50782_50808.fqn:null);
switch (G__50782_50809__$1) {
case "start":
var statearr_50783_50811 = state_50769__$1;
(statearr_50783_50811[(1)] = (9));


break;
case "stop":
var statearr_50784_50812 = state_50769__$1;
(statearr_50784_50812[(1)] = (10));


break;
case "tick":
var statearr_50785_50813 = state_50769__$1;
(statearr_50785_50813[(1)] = (11));


break;
case "reset":
var statearr_50786_50814 = state_50769__$1;
(statearr_50786_50814[(1)] = (12));


break;
case "quit":
var statearr_50787_50815 = state_50769__$1;
(statearr_50787_50815[(1)] = (13));


break;
case "change":
var statearr_50788_50816 = state_50769__$1;
(statearr_50788_50816[(1)] = (14));


break;
default:
var statearr_50789_50817 = state_50769__$1;
(statearr_50789_50817[(1)] = (15));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50770 === (14))){
var inst_50742 = (state_50769[(7)]);
var inst_50755 = new cljs.core.Keyword(null,"event-value","event-value",1898135138).cljs$core$IFn$_invoke$arity$1(inst_50742);
var inst_50756 = utimer.clock.do_action_change_BANG_.call(null,clock,inst_50755);
var state_50769__$1 = state_50769;
var statearr_50790_50818 = state_50769__$1;
(statearr_50790_50818[(2)] = inst_50756);

(statearr_50790_50818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50770 === (10))){
var inst_50747 = utimer.clock.do_action_stop_BANG_.call(null,clock);
var state_50769__$1 = state_50769;
var statearr_50791_50819 = state_50769__$1;
(statearr_50791_50819[(2)] = inst_50747);

(statearr_50791_50819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50770 === (8))){
var inst_50760 = (state_50769[(2)]);
var state_50769__$1 = (function (){var statearr_50792 = state_50769;
(statearr_50792[(9)] = inst_50760);

return statearr_50792;
})();
var statearr_50793_50820 = state_50769__$1;
(statearr_50793_50820[(2)] = null);

(statearr_50793_50820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48318__auto__,map__50738,map__50738__$1,clock,_STAR_initialized_QMARK_,event_channel))
;
return ((function (switch__48230__auto__,c__48318__auto__,map__50738,map__50738__$1,clock,_STAR_initialized_QMARK_,event_channel){
return (function() {
var utimer$clock$event_loop_$_state_machine__48231__auto__ = null;
var utimer$clock$event_loop_$_state_machine__48231__auto____0 = (function (){
var statearr_50794 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50794[(0)] = utimer$clock$event_loop_$_state_machine__48231__auto__);

(statearr_50794[(1)] = (1));

return statearr_50794;
});
var utimer$clock$event_loop_$_state_machine__48231__auto____1 = (function (state_50769){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_50769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e50795){if((e50795 instanceof Object)){
var ex__48234__auto__ = e50795;
var statearr_50796_50821 = state_50769;
(statearr_50796_50821[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50822 = state_50769;
state_50769 = G__50822;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
utimer$clock$event_loop_$_state_machine__48231__auto__ = function(state_50769){
switch(arguments.length){
case 0:
return utimer$clock$event_loop_$_state_machine__48231__auto____0.call(this);
case 1:
return utimer$clock$event_loop_$_state_machine__48231__auto____1.call(this,state_50769);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$clock$event_loop_$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$clock$event_loop_$_state_machine__48231__auto____0;
utimer$clock$event_loop_$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$clock$event_loop_$_state_machine__48231__auto____1;
return utimer$clock$event_loop_$_state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto__,map__50738,map__50738__$1,clock,_STAR_initialized_QMARK_,event_channel))
})();
var state__48320__auto__ = (function (){var statearr_50797 = f__48319__auto__.call(null);
(statearr_50797[(6)] = c__48318__auto__);

return statearr_50797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto__,map__50738,map__50738__$1,clock,_STAR_initialized_QMARK_,event_channel))
);

return c__48318__auto__;
});
utimer.clock.duration = (function utimer$clock$duration(p__50823){
var map__50824 = p__50823;
var map__50824__$1 = ((((!((map__50824 == null)))?((((map__50824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50824):map__50824);
var clock = map__50824__$1;
var _STAR_timer = cljs.core.get.call(null,map__50824__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
return new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_timer));
});
utimer.clock.progress = (function utimer$clock$progress(p__50826){
var map__50827 = p__50826;
var map__50827__$1 = ((((!((map__50827 == null)))?((((map__50827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50827):map__50827);
var clock = map__50827__$1;
var _STAR_timer = cljs.core.get.call(null,map__50827__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
return new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_timer));
});
utimer.clock.started_QMARK_ = (function utimer$clock$started_QMARK_(p__50829){
var map__50830 = p__50829;
var map__50830__$1 = ((((!((map__50830 == null)))?((((map__50830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50830):map__50830);
var clock = map__50830__$1;
var _STAR_timer = cljs.core.get.call(null,map__50830__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
return new cljs.core.Keyword(null,"started?","started?",-1301062863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_timer));
});
utimer.clock.progressed_QMARK_ = (function utimer$clock$progressed_QMARK_(clock){
return (utimer.clock.progress.call(null,clock) > (0));
});
utimer.clock.finished_QMARK_ = (function utimer$clock$finished_QMARK_(p__50832){
var map__50833 = p__50832;
var map__50833__$1 = ((((!((map__50833 == null)))?((((map__50833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50833):map__50833);
var clock = map__50833__$1;
var _STAR_timer = cljs.core.get.call(null,map__50833__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
return ((utimer.clock.progress.call(null,clock) >= utimer.clock.duration.call(null,clock))) && ((utimer.clock.duration.call(null,clock) > (0)));
});
utimer.clock.percent_progress = (function utimer$clock$percent_progress(clock){
var x = ((utimer.clock.progress.call(null,clock) / utimer.clock.duration.call(null,clock)) * (100));
if(cljs.core.truth_(isNaN(x))){
return (0);
} else {
if((x > (100))){
return (100);
} else {
return x;

}
}
});
utimer.clock.timeleft_ms = (function utimer$clock$timeleft_ms(clock){
var t = (utimer.clock.duration.call(null,clock) - utimer.clock.progress.call(null,clock));
if(!((t < (0)))){
return t;
} else {
return (0);
}
});
utimer.clock.init_BANG_ = (function utimer$clock$init_BANG_(p__50835){
var map__50836 = p__50835;
var map__50836__$1 = ((((!((map__50836 == null)))?((((map__50836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50836):map__50836);
var clock = map__50836__$1;
var initialized_QMARK_ = cljs.core.get.call(null,map__50836__$1,new cljs.core.Keyword(null,"initialized?","initialized?",1707939066));
if(cljs.core.truth_(initialized_QMARK_)){
return null;
} else {
return utimer.clock.event_loop.call(null,clock);
}
});
utimer.clock.start_BANG_ = (function utimer$clock$start_BANG_(p__50838){
var map__50839 = p__50838;
var map__50839__$1 = ((((!((map__50839 == null)))?((((map__50839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50839):map__50839);
var clock = map__50839__$1;
var initialized_QMARK_ = cljs.core.get.call(null,map__50839__$1,new cljs.core.Keyword(null,"initialized?","initialized?",1707939066));
var timer = cljs.core.get.call(null,map__50839__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
var event_channel = cljs.core.get.call(null,map__50839__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var progress_channel = cljs.core.get.call(null,map__50839__$1,new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311));
utimer.clock.init_BANG_.call(null,clock);

cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_start.call(null));

return clock;
});
utimer.clock.stop_BANG_ = (function utimer$clock$stop_BANG_(p__50841){
var map__50842 = p__50841;
var map__50842__$1 = ((((!((map__50842 == null)))?((((map__50842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50842):map__50842);
var clock = map__50842__$1;
var event_channel = cljs.core.get.call(null,map__50842__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_stop.call(null));

return clock;
});
utimer.clock.restart_BANG_ = (function utimer$clock$restart_BANG_(p__50844){
var map__50845 = p__50844;
var map__50845__$1 = ((((!((map__50845 == null)))?((((map__50845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50845):map__50845);
var clock = map__50845__$1;
var event_channel = cljs.core.get.call(null,map__50845__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_reset.call(null));

return clock;
});
utimer.clock.quit_BANG_ = (function utimer$clock$quit_BANG_(p__50847){
var map__50848 = p__50847;
var map__50848__$1 = ((((!((map__50848 == null)))?((((map__50848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50848):map__50848);
var clock = map__50848__$1;
var event_channel = cljs.core.get.call(null,map__50848__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_quit.call(null));

return clock;
});
utimer.clock.change_BANG_ = (function utimer$clock$change_BANG_(p__50850,duration){
var map__50851 = p__50850;
var map__50851__$1 = ((((!((map__50851 == null)))?((((map__50851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50851):map__50851);
var clock = map__50851__$1;
var event_channel = cljs.core.get.call(null,map__50851__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_change.call(null,duration));

return clock;
});
