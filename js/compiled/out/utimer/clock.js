// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.clock');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.spec.alpha');
goog.require('utimer.timer');
cljs.core.enable_console_print_BANG_.call(null);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","*initialized?","utimer.clock/*initialized?",-861282460),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("cljs","core.Atom","cljs/core.Atom",-1232630089,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__40774_SHARP_){
return (p1__40774_SHARP_ instanceof cljs.core.Atom);
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","*timer","utimer.clock/*timer",192367974),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("cljs","core.Atom","cljs/core.Atom",-1232630089,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__40775_SHARP_){
return (p1__40775_SHARP_ instanceof cljs.core.Atom);
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","channel","utimer.clock/channel",1096085244),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("cljs","core.async.impl.channels.ManyToManyChannel","cljs/core.async.impl.channels.ManyToManyChannel",1784516213,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__40776_SHARP_){
return (p1__40776_SHARP_ instanceof cljs.core.async.impl.channels.ManyToManyChannel);
}));
utimer.clock.default_tick_rate_ms = (20);
utimer.clock.new_clock = (function utimer$clock$new_clock(var_args){
var args__36180__auto__ = [];
var len__36173__auto___40782 = arguments.length;
var i__36174__auto___40783 = (0);
while(true){
if((i__36174__auto___40783 < len__36173__auto___40782)){
args__36180__auto__.push((arguments[i__36174__auto___40783]));

var G__40784 = (i__36174__auto___40783 + (1));
i__36174__auto___40783 = G__40784;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((1) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((1)),(0),null)):null);
return utimer.clock.new_clock.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36181__auto__);
});

utimer.clock.new_clock.cljs$core$IFn$_invoke$arity$variadic = (function (duration,p__40779){
var map__40780 = p__40779;
var map__40780__$1 = ((((!((map__40780 == null)))?((((map__40780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40780):map__40780);
var tick_rate = cljs.core.get.call(null,map__40780__$1,new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549),utimer.clock.default_tick_rate_ms);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"*initialized?","*initialized?",2050741236),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"*timer","*timer",-637700106),cljs.core.atom.call(null,utimer.timer.new_timer.call(null,duration)),new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549),tick_rate,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10)))], null);
});

utimer.clock.new_clock.cljs$lang$maxFixedArity = (1);

utimer.clock.new_clock.cljs$lang$applyTo = (function (seq40777){
var G__40778 = cljs.core.first.call(null,seq40777);
var seq40777__$1 = cljs.core.next.call(null,seq40777);
return utimer.clock.new_clock.cljs$core$IFn$_invoke$arity$variadic(G__40778,seq40777__$1);
});

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","tick-rate","utimer.clock/tick-rate",357050845),new cljs.core.Keyword("utimer.timer","ms","utimer.timer/ms",-792243724),new cljs.core.Keyword("utimer.timer","ms","utimer.timer/ms",-792243724));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","event-channel","utimer.clock/event-channel",-152971646),new cljs.core.Keyword("utimer.clock","channel","utimer.clock/channel",1096085244),new cljs.core.Keyword("utimer.clock","channel","utimer.clock/channel",1096085244));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","progress-channel","utimer.clock/progress-channel",444438759),new cljs.core.Keyword("utimer.clock","channel","utimer.clock/channel",1096085244),new cljs.core.Keyword("utimer.clock","channel","utimer.clock/channel",1096085244));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","clock","utimer.clock/clock",-115672887),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.clock","*initialized?","utimer.clock/*initialized?",-861282460),new cljs.core.Keyword("utimer.clock","*timer","utimer.clock/*timer",192367974),new cljs.core.Keyword("utimer.clock","tick-rate","utimer.clock/tick-rate",357050845),new cljs.core.Keyword("utimer.clock","event-channel","utimer.clock/event-channel",-152971646),new cljs.core.Keyword("utimer.clock","progress-channel","utimer.clock/progress-channel",444438759)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.clock","*initialized?","utimer.clock/*initialized?",-861282460),new cljs.core.Keyword("utimer.clock","*timer","utimer.clock/*timer",192367974),new cljs.core.Keyword("utimer.clock","tick-rate","utimer.clock/tick-rate",357050845),new cljs.core.Keyword("utimer.clock","event-channel","utimer.clock/event-channel",-152971646),new cljs.core.Keyword("utimer.clock","progress-channel","utimer.clock/progress-channel",444438759)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__40785){
return cljs.core.map_QMARK_.call(null,G__40785);
}),(function (G__40785){
return cljs.core.contains_QMARK_.call(null,G__40785,new cljs.core.Keyword(null,"*initialized?","*initialized?",2050741236));
}),(function (G__40785){
return cljs.core.contains_QMARK_.call(null,G__40785,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
}),(function (G__40785){
return cljs.core.contains_QMARK_.call(null,G__40785,new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549));
}),(function (G__40785){
return cljs.core.contains_QMARK_.call(null,G__40785,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
}),(function (G__40785){
return cljs.core.contains_QMARK_.call(null,G__40785,new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311));
})], null),(function (G__40785){
return (cljs.core.map_QMARK_.call(null,G__40785)) && (cljs.core.contains_QMARK_.call(null,G__40785,new cljs.core.Keyword(null,"*initialized?","*initialized?",2050741236))) && (cljs.core.contains_QMARK_.call(null,G__40785,new cljs.core.Keyword(null,"*timer","*timer",-637700106))) && (cljs.core.contains_QMARK_.call(null,G__40785,new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549))) && (cljs.core.contains_QMARK_.call(null,G__40785,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114))) && (cljs.core.contains_QMARK_.call(null,G__40785,new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.clock","*initialized?","utimer.clock/*initialized?",-861282460),new cljs.core.Keyword("utimer.clock","*timer","utimer.clock/*timer",192367974),new cljs.core.Keyword("utimer.clock","tick-rate","utimer.clock/tick-rate",357050845),new cljs.core.Keyword("utimer.clock","event-channel","utimer.clock/event-channel",-152971646),new cljs.core.Keyword("utimer.clock","progress-channel","utimer.clock/progress-channel",444438759)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*initialized?","*initialized?",2050741236),new cljs.core.Keyword(null,"*timer","*timer",-637700106),new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549),new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"*initialized?","*initialized?",2050741236))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"*timer","*timer",-637700106))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"event-channel","event-channel",1215556114))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","event-action","utimer.clock/event-action",406622207),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","event","utimer.clock/event",1072019074),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.clock","event-action","utimer.clock/event-action",406622207)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.clock","event-action","utimer.clock/event-action",406622207)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__40786){
return cljs.core.map_QMARK_.call(null,G__40786);
}),(function (G__40786){
return cljs.core.contains_QMARK_.call(null,G__40786,new cljs.core.Keyword(null,"event-action","event-action",-974748529));
})], null),(function (G__40786){
return (cljs.core.map_QMARK_.call(null,G__40786)) && (cljs.core.contains_QMARK_.call(null,G__40786,new cljs.core.Keyword(null,"event-action","event-action",-974748529)));
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
utimer.clock.do_action_start_BANG_ = (function utimer$clock$do_action_start_BANG_(p__40787){
var map__40788 = p__40787;
var map__40788__$1 = ((((!((map__40788 == null)))?((((map__40788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40788):map__40788);
var clock = map__40788__$1;
var _STAR_timer = cljs.core.get.call(null,map__40788__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
var event_channel = cljs.core.get.call(null,map__40788__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.swap_BANG_.call(null,_STAR_timer,utimer.timer.start);

cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_tick.call(null));

return clock;
});
utimer.clock.do_action_stop_BANG_ = (function utimer$clock$do_action_stop_BANG_(p__40790){
var map__40791 = p__40790;
var map__40791__$1 = ((((!((map__40791 == null)))?((((map__40791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40791):map__40791);
var clock = map__40791__$1;
var _STAR_timer = cljs.core.get.call(null,map__40791__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
var event_channel = cljs.core.get.call(null,map__40791__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.swap_BANG_.call(null,_STAR_timer,utimer.timer.stop);

cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_tick.call(null));

return clock;
});
utimer.clock.do_action_tick_BANG_ = (function utimer$clock$do_action_tick_BANG_(p__40793){
var map__40794 = p__40793;
var map__40794__$1 = ((((!((map__40794 == null)))?((((map__40794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40794):map__40794);
var clock = map__40794__$1;
var _STAR_timer = cljs.core.get.call(null,map__40794__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
var event_channel = cljs.core.get.call(null,map__40794__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var progress_channel = cljs.core.get.call(null,map__40794__$1,new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311));
var tick_rate = cljs.core.get.call(null,map__40794__$1,new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549));
var c__38070__auto___40823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38070__auto___40823,map__40794,map__40794__$1,clock,_STAR_timer,event_channel,progress_channel,tick_rate){
return (function (){
var f__38071__auto__ = (function (){var switch__38026__auto__ = ((function (c__38070__auto___40823,map__40794,map__40794__$1,clock,_STAR_timer,event_channel,progress_channel,tick_rate){
return (function (state_40811){
var state_val_40812 = (state_40811[(1)]);
if((state_val_40812 === (1))){
var inst_40796 = cljs.core.async.timeout.call(null,tick_rate);
var state_40811__$1 = state_40811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40811__$1,(2),inst_40796);
} else {
if((state_val_40812 === (2))){
var inst_40798 = (state_40811[(2)]);
var inst_40799 = cljs.core.swap_BANG_.call(null,_STAR_timer,utimer.timer.tick);
var inst_40800 = cljs.core.deref.call(null,_STAR_timer);
var inst_40801 = new cljs.core.Keyword(null,"started?","started?",-1301062863).cljs$core$IFn$_invoke$arity$1(inst_40800);
var state_40811__$1 = (function (){var statearr_40813 = state_40811;
(statearr_40813[(7)] = inst_40799);

(statearr_40813[(8)] = inst_40798);

return statearr_40813;
})();
if(cljs.core.truth_(inst_40801)){
var statearr_40814_40824 = state_40811__$1;
(statearr_40814_40824[(1)] = (3));

} else {
var statearr_40815_40825 = state_40811__$1;
(statearr_40815_40825[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40812 === (3))){
var inst_40803 = cljs.core.deref.call(null,_STAR_timer);
var inst_40804 = cljs.core.async.put_BANG_.call(null,progress_channel,inst_40803);
var state_40811__$1 = state_40811;
var statearr_40816_40826 = state_40811__$1;
(statearr_40816_40826[(2)] = inst_40804);

(statearr_40816_40826[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40812 === (4))){
var state_40811__$1 = state_40811;
var statearr_40817_40827 = state_40811__$1;
(statearr_40817_40827[(2)] = null);

(statearr_40817_40827[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40812 === (5))){
var inst_40807 = (state_40811[(2)]);
var inst_40808 = utimer.clock.event_tick.call(null);
var inst_40809 = cljs.core.async.put_BANG_.call(null,event_channel,inst_40808);
var state_40811__$1 = (function (){var statearr_40818 = state_40811;
(statearr_40818[(9)] = inst_40807);

return statearr_40818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40811__$1,inst_40809);
} else {
return null;
}
}
}
}
}
});})(c__38070__auto___40823,map__40794,map__40794__$1,clock,_STAR_timer,event_channel,progress_channel,tick_rate))
;
return ((function (switch__38026__auto__,c__38070__auto___40823,map__40794,map__40794__$1,clock,_STAR_timer,event_channel,progress_channel,tick_rate){
return (function() {
var utimer$clock$do_action_tick_BANG__$_state_machine__38027__auto__ = null;
var utimer$clock$do_action_tick_BANG__$_state_machine__38027__auto____0 = (function (){
var statearr_40819 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40819[(0)] = utimer$clock$do_action_tick_BANG__$_state_machine__38027__auto__);

(statearr_40819[(1)] = (1));

return statearr_40819;
});
var utimer$clock$do_action_tick_BANG__$_state_machine__38027__auto____1 = (function (state_40811){
while(true){
var ret_value__38028__auto__ = (function (){try{while(true){
var result__38029__auto__ = switch__38026__auto__.call(null,state_40811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38029__auto__;
}
break;
}
}catch (e40820){if((e40820 instanceof Object)){
var ex__38030__auto__ = e40820;
var statearr_40821_40828 = state_40811;
(statearr_40821_40828[(5)] = ex__38030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40829 = state_40811;
state_40811 = G__40829;
continue;
} else {
return ret_value__38028__auto__;
}
break;
}
});
utimer$clock$do_action_tick_BANG__$_state_machine__38027__auto__ = function(state_40811){
switch(arguments.length){
case 0:
return utimer$clock$do_action_tick_BANG__$_state_machine__38027__auto____0.call(this);
case 1:
return utimer$clock$do_action_tick_BANG__$_state_machine__38027__auto____1.call(this,state_40811);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$clock$do_action_tick_BANG__$_state_machine__38027__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$clock$do_action_tick_BANG__$_state_machine__38027__auto____0;
utimer$clock$do_action_tick_BANG__$_state_machine__38027__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$clock$do_action_tick_BANG__$_state_machine__38027__auto____1;
return utimer$clock$do_action_tick_BANG__$_state_machine__38027__auto__;
})()
;})(switch__38026__auto__,c__38070__auto___40823,map__40794,map__40794__$1,clock,_STAR_timer,event_channel,progress_channel,tick_rate))
})();
var state__38072__auto__ = (function (){var statearr_40822 = f__38071__auto__.call(null);
(statearr_40822[(6)] = c__38070__auto___40823);

return statearr_40822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38072__auto__);
});})(c__38070__auto___40823,map__40794,map__40794__$1,clock,_STAR_timer,event_channel,progress_channel,tick_rate))
);


return clock;
});
utimer.clock.do_action_reset_BANG_ = (function utimer$clock$do_action_reset_BANG_(p__40830){
var map__40831 = p__40830;
var map__40831__$1 = ((((!((map__40831 == null)))?((((map__40831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40831):map__40831);
var clock = map__40831__$1;
var _STAR_timer = cljs.core.get.call(null,map__40831__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
var event_channel = cljs.core.get.call(null,map__40831__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var progress_channel = cljs.core.get.call(null,map__40831__$1,new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311));
cljs.core.swap_BANG_.call(null,_STAR_timer,utimer.timer.reset);

cljs.core.async.put_BANG_.call(null,progress_channel,cljs.core.deref.call(null,_STAR_timer));

cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_tick.call(null));

return clock;
});
utimer.clock.do_action_quit_BANG_ = (function utimer$clock$do_action_quit_BANG_(p__40833){
var map__40834 = p__40833;
var map__40834__$1 = ((((!((map__40834 == null)))?((((map__40834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40834):map__40834);
var clock = map__40834__$1;
var _STAR_timer = cljs.core.get.call(null,map__40834__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
var event_channel = cljs.core.get.call(null,map__40834__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var progress_channel = cljs.core.get.call(null,map__40834__$1,new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311));
cljs.core.swap_BANG_.call(null,_STAR_timer,utimer.timer.stop);

cljs.core.async.close_BANG_.call(null,event_channel);

cljs.core.async.close_BANG_.call(null,progress_channel);

return clock;
});
utimer.clock.do_action_change_BANG_ = (function utimer$clock$do_action_change_BANG_(p__40836,duration){
var map__40837 = p__40836;
var map__40837__$1 = ((((!((map__40837 == null)))?((((map__40837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40837):map__40837);
var clock = map__40837__$1;
var _STAR_timer = cljs.core.get.call(null,map__40837__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
var event_channel = cljs.core.get.call(null,map__40837__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.swap_BANG_.call(null,_STAR_timer,utimer.timer.change_duration,duration);

cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_tick.call(null));

return clock;
});
utimer.clock.event_loop = (function utimer$clock$event_loop(p__40839){
var map__40840 = p__40839;
var map__40840__$1 = ((((!((map__40840 == null)))?((((map__40840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40840):map__40840);
var clock = map__40840__$1;
var _STAR_initialized_QMARK_ = cljs.core.get.call(null,map__40840__$1,new cljs.core.Keyword(null,"*initialized?","*initialized?",2050741236));
var event_channel = cljs.core.get.call(null,map__40840__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.reset_BANG_.call(null,_STAR_initialized_QMARK_,true);

var c__38070__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38070__auto__,map__40840,map__40840__$1,clock,_STAR_initialized_QMARK_,event_channel){
return (function (){
var f__38071__auto__ = (function (){var switch__38026__auto__ = ((function (c__38070__auto__,map__40840,map__40840__$1,clock,_STAR_initialized_QMARK_,event_channel){
return (function (state_40872){
var state_val_40873 = (state_40872[(1)]);
if((state_val_40873 === (7))){
var inst_40868 = (state_40872[(2)]);
var state_40872__$1 = state_40872;
var statearr_40874_40901 = state_40872__$1;
(statearr_40874_40901[(2)] = inst_40868);

(statearr_40874_40901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (1))){
var state_40872__$1 = state_40872;
var statearr_40875_40902 = state_40872__$1;
(statearr_40875_40902[(2)] = null);

(statearr_40875_40902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (4))){
var inst_40844 = (state_40872[(7)]);
var inst_40846 = (state_40872[(8)]);
var inst_40844__$1 = (state_40872[(2)]);
var inst_40845 = cljs.core.println.call(null,"Tick...");
var inst_40846__$1 = new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(inst_40844__$1);
var state_40872__$1 = (function (){var statearr_40876 = state_40872;
(statearr_40876[(7)] = inst_40844__$1);

(statearr_40876[(8)] = inst_40846__$1);

(statearr_40876[(9)] = inst_40845);

return statearr_40876;
})();
if(cljs.core.truth_(inst_40846__$1)){
var statearr_40877_40903 = state_40872__$1;
(statearr_40877_40903[(1)] = (5));

} else {
var statearr_40878_40904 = state_40872__$1;
(statearr_40878_40904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (15))){
var state_40872__$1 = state_40872;
var statearr_40879_40905 = state_40872__$1;
(statearr_40879_40905[(2)] = null);

(statearr_40879_40905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (13))){
var inst_40856 = utimer.clock.do_action_quit_BANG_.call(null,clock);
var state_40872__$1 = state_40872;
var statearr_40880_40906 = state_40872__$1;
(statearr_40880_40906[(2)] = inst_40856);

(statearr_40880_40906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (6))){
var inst_40866 = cljs.core.reset_BANG_.call(null,_STAR_initialized_QMARK_,false);
var state_40872__$1 = state_40872;
var statearr_40881_40907 = state_40872__$1;
(statearr_40881_40907[(2)] = inst_40866);

(statearr_40881_40907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (3))){
var inst_40870 = (state_40872[(2)]);
var state_40872__$1 = state_40872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40872__$1,inst_40870);
} else {
if((state_val_40873 === (12))){
var inst_40854 = utimer.clock.do_action_reset_BANG_.call(null,clock);
var state_40872__$1 = state_40872;
var statearr_40882_40908 = state_40872__$1;
(statearr_40882_40908[(2)] = inst_40854);

(statearr_40882_40908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (2))){
var state_40872__$1 = state_40872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40872__$1,(4),event_channel);
} else {
if((state_val_40873 === (11))){
var inst_40852 = utimer.clock.do_action_tick_BANG_.call(null,clock);
var state_40872__$1 = state_40872;
var statearr_40883_40909 = state_40872__$1;
(statearr_40883_40909[(2)] = inst_40852);

(statearr_40883_40909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (9))){
var inst_40848 = utimer.clock.do_action_start_BANG_.call(null,clock);
var state_40872__$1 = state_40872;
var statearr_40884_40910 = state_40872__$1;
(statearr_40884_40910[(2)] = inst_40848);

(statearr_40884_40910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (5))){
var inst_40846 = (state_40872[(8)]);
var state_40872__$1 = state_40872;
var G__40885_40911 = inst_40846;
var G__40885_40912__$1 = (((G__40885_40911 instanceof cljs.core.Keyword))?G__40885_40911.fqn:null);
switch (G__40885_40912__$1) {
case "start":
var statearr_40886_40914 = state_40872__$1;
(statearr_40886_40914[(1)] = (9));


break;
case "stop":
var statearr_40887_40915 = state_40872__$1;
(statearr_40887_40915[(1)] = (10));


break;
case "tick":
var statearr_40888_40916 = state_40872__$1;
(statearr_40888_40916[(1)] = (11));


break;
case "reset":
var statearr_40889_40917 = state_40872__$1;
(statearr_40889_40917[(1)] = (12));


break;
case "quit":
var statearr_40890_40918 = state_40872__$1;
(statearr_40890_40918[(1)] = (13));


break;
case "change":
var statearr_40891_40919 = state_40872__$1;
(statearr_40891_40919[(1)] = (14));


break;
default:
var statearr_40892_40920 = state_40872__$1;
(statearr_40892_40920[(1)] = (15));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (14))){
var inst_40844 = (state_40872[(7)]);
var inst_40858 = new cljs.core.Keyword(null,"event-value","event-value",1898135138).cljs$core$IFn$_invoke$arity$1(inst_40844);
var inst_40859 = utimer.clock.do_action_change_BANG_.call(null,clock,inst_40858);
var state_40872__$1 = state_40872;
var statearr_40893_40921 = state_40872__$1;
(statearr_40893_40921[(2)] = inst_40859);

(statearr_40893_40921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (10))){
var inst_40850 = utimer.clock.do_action_stop_BANG_.call(null,clock);
var state_40872__$1 = state_40872;
var statearr_40894_40922 = state_40872__$1;
(statearr_40894_40922[(2)] = inst_40850);

(statearr_40894_40922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (8))){
var inst_40863 = (state_40872[(2)]);
var state_40872__$1 = (function (){var statearr_40895 = state_40872;
(statearr_40895[(10)] = inst_40863);

return statearr_40895;
})();
var statearr_40896_40923 = state_40872__$1;
(statearr_40896_40923[(2)] = null);

(statearr_40896_40923[(1)] = (2));


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
});})(c__38070__auto__,map__40840,map__40840__$1,clock,_STAR_initialized_QMARK_,event_channel))
;
return ((function (switch__38026__auto__,c__38070__auto__,map__40840,map__40840__$1,clock,_STAR_initialized_QMARK_,event_channel){
return (function() {
var utimer$clock$event_loop_$_state_machine__38027__auto__ = null;
var utimer$clock$event_loop_$_state_machine__38027__auto____0 = (function (){
var statearr_40897 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40897[(0)] = utimer$clock$event_loop_$_state_machine__38027__auto__);

(statearr_40897[(1)] = (1));

return statearr_40897;
});
var utimer$clock$event_loop_$_state_machine__38027__auto____1 = (function (state_40872){
while(true){
var ret_value__38028__auto__ = (function (){try{while(true){
var result__38029__auto__ = switch__38026__auto__.call(null,state_40872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38029__auto__;
}
break;
}
}catch (e40898){if((e40898 instanceof Object)){
var ex__38030__auto__ = e40898;
var statearr_40899_40924 = state_40872;
(statearr_40899_40924[(5)] = ex__38030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40925 = state_40872;
state_40872 = G__40925;
continue;
} else {
return ret_value__38028__auto__;
}
break;
}
});
utimer$clock$event_loop_$_state_machine__38027__auto__ = function(state_40872){
switch(arguments.length){
case 0:
return utimer$clock$event_loop_$_state_machine__38027__auto____0.call(this);
case 1:
return utimer$clock$event_loop_$_state_machine__38027__auto____1.call(this,state_40872);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$clock$event_loop_$_state_machine__38027__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$clock$event_loop_$_state_machine__38027__auto____0;
utimer$clock$event_loop_$_state_machine__38027__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$clock$event_loop_$_state_machine__38027__auto____1;
return utimer$clock$event_loop_$_state_machine__38027__auto__;
})()
;})(switch__38026__auto__,c__38070__auto__,map__40840,map__40840__$1,clock,_STAR_initialized_QMARK_,event_channel))
})();
var state__38072__auto__ = (function (){var statearr_40900 = f__38071__auto__.call(null);
(statearr_40900[(6)] = c__38070__auto__);

return statearr_40900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38072__auto__);
});})(c__38070__auto__,map__40840,map__40840__$1,clock,_STAR_initialized_QMARK_,event_channel))
);

return c__38070__auto__;
});
utimer.clock.duration = (function utimer$clock$duration(p__40926){
var map__40927 = p__40926;
var map__40927__$1 = ((((!((map__40927 == null)))?((((map__40927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40927):map__40927);
var clock = map__40927__$1;
var _STAR_timer = cljs.core.get.call(null,map__40927__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
return new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_timer));
});
utimer.clock.progress = (function utimer$clock$progress(p__40929){
var map__40930 = p__40929;
var map__40930__$1 = ((((!((map__40930 == null)))?((((map__40930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40930):map__40930);
var clock = map__40930__$1;
var _STAR_timer = cljs.core.get.call(null,map__40930__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
return new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_timer));
});
utimer.clock.started_QMARK_ = (function utimer$clock$started_QMARK_(p__40932){
var map__40933 = p__40932;
var map__40933__$1 = ((((!((map__40933 == null)))?((((map__40933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40933.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40933):map__40933);
var clock = map__40933__$1;
var _STAR_timer = cljs.core.get.call(null,map__40933__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
return new cljs.core.Keyword(null,"started?","started?",-1301062863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_timer));
});
utimer.clock.finished_QMARK_ = (function utimer$clock$finished_QMARK_(p__40935){
var map__40936 = p__40935;
var map__40936__$1 = ((((!((map__40936 == null)))?((((map__40936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40936):map__40936);
var clock = map__40936__$1;
var _STAR_timer = cljs.core.get.call(null,map__40936__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
return (utimer.clock.progress.call(null,clock) >= utimer.clock.duration.call(null,clock));
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
utimer.clock.start_BANG_ = (function utimer$clock$start_BANG_(p__40938){
var map__40939 = p__40938;
var map__40939__$1 = ((((!((map__40939 == null)))?((((map__40939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40939.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40939):map__40939);
var clock = map__40939__$1;
var initialized_QMARK_ = cljs.core.get.call(null,map__40939__$1,new cljs.core.Keyword(null,"initialized?","initialized?",1707939066));
var timer = cljs.core.get.call(null,map__40939__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
var event_channel = cljs.core.get.call(null,map__40939__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var progress_channel = cljs.core.get.call(null,map__40939__$1,new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311));
if(cljs.core.truth_(initialized_QMARK_)){
} else {
utimer.clock.event_loop.call(null,clock);
}

cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_start.call(null));

return clock;
});
utimer.clock.stop_BANG_ = (function utimer$clock$stop_BANG_(p__40941){
var map__40942 = p__40941;
var map__40942__$1 = ((((!((map__40942 == null)))?((((map__40942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40942):map__40942);
var clock = map__40942__$1;
var event_channel = cljs.core.get.call(null,map__40942__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_stop.call(null));

return clock;
});
utimer.clock.restart_BANG_ = (function utimer$clock$restart_BANG_(p__40944){
var map__40945 = p__40944;
var map__40945__$1 = ((((!((map__40945 == null)))?((((map__40945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40945):map__40945);
var clock = map__40945__$1;
var event_channel = cljs.core.get.call(null,map__40945__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_reset.call(null));

return clock;
});
utimer.clock.quit_BANG_ = (function utimer$clock$quit_BANG_(p__40947){
var map__40948 = p__40947;
var map__40948__$1 = ((((!((map__40948 == null)))?((((map__40948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40948):map__40948);
var clock = map__40948__$1;
var event_channel = cljs.core.get.call(null,map__40948__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_quit.call(null));

return clock;
});
utimer.clock.change_BANG_ = (function utimer$clock$change_BANG_(p__40950,duration){
var map__40951 = p__40950;
var map__40951__$1 = ((((!((map__40951 == null)))?((((map__40951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40951):map__40951);
var clock = map__40951__$1;
var event_channel = cljs.core.get.call(null,map__40951__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_change.call(null,duration));

return clock;
});
