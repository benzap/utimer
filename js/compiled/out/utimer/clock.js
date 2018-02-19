// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.clock');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.spec.alpha');
goog.require('utimer.timer');
cljs.core.enable_console_print_BANG_.call(null);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","*initialized?","utimer.clock/*initialized?",-861282460),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("cljs","core.Atom","cljs/core.Atom",-1232630089,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__40777_SHARP_){
return (p1__40777_SHARP_ instanceof cljs.core.Atom);
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","*timer","utimer.clock/*timer",192367974),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("cljs","core.Atom","cljs/core.Atom",-1232630089,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__40778_SHARP_){
return (p1__40778_SHARP_ instanceof cljs.core.Atom);
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","channel","utimer.clock/channel",1096085244),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("cljs","core.async.impl.channels.ManyToManyChannel","cljs/core.async.impl.channels.ManyToManyChannel",1784516213,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__40779_SHARP_){
return (p1__40779_SHARP_ instanceof cljs.core.async.impl.channels.ManyToManyChannel);
}));
utimer.clock.default_tick_rate_ms = (20);
utimer.clock.new_clock = (function utimer$clock$new_clock(var_args){
var args__36180__auto__ = [];
var len__36173__auto___40785 = arguments.length;
var i__36174__auto___40786 = (0);
while(true){
if((i__36174__auto___40786 < len__36173__auto___40785)){
args__36180__auto__.push((arguments[i__36174__auto___40786]));

var G__40787 = (i__36174__auto___40786 + (1));
i__36174__auto___40786 = G__40787;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((1) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((1)),(0),null)):null);
return utimer.clock.new_clock.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36181__auto__);
});

utimer.clock.new_clock.cljs$core$IFn$_invoke$arity$variadic = (function (duration,p__40782){
var map__40783 = p__40782;
var map__40783__$1 = ((((!((map__40783 == null)))?((((map__40783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40783):map__40783);
var tick_rate = cljs.core.get.call(null,map__40783__$1,new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549),utimer.clock.default_tick_rate_ms);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"*initialized?","*initialized?",2050741236),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"*timer","*timer",-637700106),cljs.core.atom.call(null,utimer.timer.new_timer.call(null,duration)),new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549),tick_rate,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(3)))], null);
});

utimer.clock.new_clock.cljs$lang$maxFixedArity = (1);

utimer.clock.new_clock.cljs$lang$applyTo = (function (seq40780){
var G__40781 = cljs.core.first.call(null,seq40780);
var seq40780__$1 = cljs.core.next.call(null,seq40780);
return utimer.clock.new_clock.cljs$core$IFn$_invoke$arity$variadic(G__40781,seq40780__$1);
});

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","tick-rate","utimer.clock/tick-rate",357050845),new cljs.core.Keyword("utimer.timer","ms","utimer.timer/ms",-792243724),new cljs.core.Keyword("utimer.timer","ms","utimer.timer/ms",-792243724));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","event-channel","utimer.clock/event-channel",-152971646),new cljs.core.Keyword("utimer.clock","channel","utimer.clock/channel",1096085244),new cljs.core.Keyword("utimer.clock","channel","utimer.clock/channel",1096085244));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","progress-channel","utimer.clock/progress-channel",444438759),new cljs.core.Keyword("utimer.clock","channel","utimer.clock/channel",1096085244),new cljs.core.Keyword("utimer.clock","channel","utimer.clock/channel",1096085244));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","clock","utimer.clock/clock",-115672887),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.clock","*initialized?","utimer.clock/*initialized?",-861282460),new cljs.core.Keyword("utimer.clock","*timer","utimer.clock/*timer",192367974),new cljs.core.Keyword("utimer.clock","tick-rate","utimer.clock/tick-rate",357050845),new cljs.core.Keyword("utimer.clock","event-channel","utimer.clock/event-channel",-152971646),new cljs.core.Keyword("utimer.clock","progress-channel","utimer.clock/progress-channel",444438759)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.clock","*initialized?","utimer.clock/*initialized?",-861282460),new cljs.core.Keyword("utimer.clock","*timer","utimer.clock/*timer",192367974),new cljs.core.Keyword("utimer.clock","tick-rate","utimer.clock/tick-rate",357050845),new cljs.core.Keyword("utimer.clock","event-channel","utimer.clock/event-channel",-152971646),new cljs.core.Keyword("utimer.clock","progress-channel","utimer.clock/progress-channel",444438759)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__40788){
return cljs.core.map_QMARK_.call(null,G__40788);
}),(function (G__40788){
return cljs.core.contains_QMARK_.call(null,G__40788,new cljs.core.Keyword(null,"*initialized?","*initialized?",2050741236));
}),(function (G__40788){
return cljs.core.contains_QMARK_.call(null,G__40788,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
}),(function (G__40788){
return cljs.core.contains_QMARK_.call(null,G__40788,new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549));
}),(function (G__40788){
return cljs.core.contains_QMARK_.call(null,G__40788,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
}),(function (G__40788){
return cljs.core.contains_QMARK_.call(null,G__40788,new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311));
})], null),(function (G__40788){
return (cljs.core.map_QMARK_.call(null,G__40788)) && (cljs.core.contains_QMARK_.call(null,G__40788,new cljs.core.Keyword(null,"*initialized?","*initialized?",2050741236))) && (cljs.core.contains_QMARK_.call(null,G__40788,new cljs.core.Keyword(null,"*timer","*timer",-637700106))) && (cljs.core.contains_QMARK_.call(null,G__40788,new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549))) && (cljs.core.contains_QMARK_.call(null,G__40788,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114))) && (cljs.core.contains_QMARK_.call(null,G__40788,new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.clock","*initialized?","utimer.clock/*initialized?",-861282460),new cljs.core.Keyword("utimer.clock","*timer","utimer.clock/*timer",192367974),new cljs.core.Keyword("utimer.clock","tick-rate","utimer.clock/tick-rate",357050845),new cljs.core.Keyword("utimer.clock","event-channel","utimer.clock/event-channel",-152971646),new cljs.core.Keyword("utimer.clock","progress-channel","utimer.clock/progress-channel",444438759)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*initialized?","*initialized?",2050741236),new cljs.core.Keyword(null,"*timer","*timer",-637700106),new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549),new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"*initialized?","*initialized?",2050741236))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"*timer","*timer",-637700106))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"event-channel","event-channel",1215556114))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","event-action","utimer.clock/event-action",406622207),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.clock","event","utimer.clock/event",1072019074),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.clock","event-action","utimer.clock/event-action",406622207)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.clock","event-action","utimer.clock/event-action",406622207)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__40789){
return cljs.core.map_QMARK_.call(null,G__40789);
}),(function (G__40789){
return cljs.core.contains_QMARK_.call(null,G__40789,new cljs.core.Keyword(null,"event-action","event-action",-974748529));
})], null),(function (G__40789){
return (cljs.core.map_QMARK_.call(null,G__40789)) && (cljs.core.contains_QMARK_.call(null,G__40789,new cljs.core.Keyword(null,"event-action","event-action",-974748529)));
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
utimer.clock.do_action_start_BANG_ = (function utimer$clock$do_action_start_BANG_(p__40790){
var map__40791 = p__40790;
var map__40791__$1 = ((((!((map__40791 == null)))?((((map__40791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40791):map__40791);
var clock = map__40791__$1;
var _STAR_timer = cljs.core.get.call(null,map__40791__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
var event_channel = cljs.core.get.call(null,map__40791__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.swap_BANG_.call(null,_STAR_timer,utimer.timer.start);

cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_tick.call(null));

return clock;
});
utimer.clock.do_action_stop_BANG_ = (function utimer$clock$do_action_stop_BANG_(p__40793){
var map__40794 = p__40793;
var map__40794__$1 = ((((!((map__40794 == null)))?((((map__40794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40794):map__40794);
var clock = map__40794__$1;
var _STAR_timer = cljs.core.get.call(null,map__40794__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
var event_channel = cljs.core.get.call(null,map__40794__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.swap_BANG_.call(null,_STAR_timer,utimer.timer.stop);

cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_tick.call(null));

return clock;
});
utimer.clock.do_action_tick_BANG_ = (function utimer$clock$do_action_tick_BANG_(p__40796){
var map__40797 = p__40796;
var map__40797__$1 = ((((!((map__40797 == null)))?((((map__40797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40797):map__40797);
var clock = map__40797__$1;
var _STAR_timer = cljs.core.get.call(null,map__40797__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
var event_channel = cljs.core.get.call(null,map__40797__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var progress_channel = cljs.core.get.call(null,map__40797__$1,new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311));
var tick_rate = cljs.core.get.call(null,map__40797__$1,new cljs.core.Keyword(null,"tick-rate","tick-rate",601757549));
var c__38837__auto___40826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38837__auto___40826,map__40797,map__40797__$1,clock,_STAR_timer,event_channel,progress_channel,tick_rate){
return (function (){
var f__38838__auto__ = (function (){var switch__38793__auto__ = ((function (c__38837__auto___40826,map__40797,map__40797__$1,clock,_STAR_timer,event_channel,progress_channel,tick_rate){
return (function (state_40814){
var state_val_40815 = (state_40814[(1)]);
if((state_val_40815 === (1))){
var inst_40799 = cljs.core.async.timeout.call(null,tick_rate);
var state_40814__$1 = state_40814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40814__$1,(2),inst_40799);
} else {
if((state_val_40815 === (2))){
var inst_40801 = (state_40814[(2)]);
var inst_40802 = cljs.core.swap_BANG_.call(null,_STAR_timer,utimer.timer.tick);
var inst_40803 = cljs.core.deref.call(null,_STAR_timer);
var inst_40804 = new cljs.core.Keyword(null,"started?","started?",-1301062863).cljs$core$IFn$_invoke$arity$1(inst_40803);
var state_40814__$1 = (function (){var statearr_40816 = state_40814;
(statearr_40816[(7)] = inst_40802);

(statearr_40816[(8)] = inst_40801);

return statearr_40816;
})();
if(cljs.core.truth_(inst_40804)){
var statearr_40817_40827 = state_40814__$1;
(statearr_40817_40827[(1)] = (3));

} else {
var statearr_40818_40828 = state_40814__$1;
(statearr_40818_40828[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40815 === (3))){
var inst_40806 = cljs.core.deref.call(null,_STAR_timer);
var inst_40807 = cljs.core.async.put_BANG_.call(null,progress_channel,inst_40806);
var state_40814__$1 = state_40814;
var statearr_40819_40829 = state_40814__$1;
(statearr_40819_40829[(2)] = inst_40807);

(statearr_40819_40829[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40815 === (4))){
var state_40814__$1 = state_40814;
var statearr_40820_40830 = state_40814__$1;
(statearr_40820_40830[(2)] = null);

(statearr_40820_40830[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40815 === (5))){
var inst_40810 = (state_40814[(2)]);
var inst_40811 = utimer.clock.event_tick.call(null);
var inst_40812 = cljs.core.async.put_BANG_.call(null,event_channel,inst_40811);
var state_40814__$1 = (function (){var statearr_40821 = state_40814;
(statearr_40821[(9)] = inst_40810);

return statearr_40821;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40814__$1,inst_40812);
} else {
return null;
}
}
}
}
}
});})(c__38837__auto___40826,map__40797,map__40797__$1,clock,_STAR_timer,event_channel,progress_channel,tick_rate))
;
return ((function (switch__38793__auto__,c__38837__auto___40826,map__40797,map__40797__$1,clock,_STAR_timer,event_channel,progress_channel,tick_rate){
return (function() {
var utimer$clock$do_action_tick_BANG__$_state_machine__38794__auto__ = null;
var utimer$clock$do_action_tick_BANG__$_state_machine__38794__auto____0 = (function (){
var statearr_40822 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40822[(0)] = utimer$clock$do_action_tick_BANG__$_state_machine__38794__auto__);

(statearr_40822[(1)] = (1));

return statearr_40822;
});
var utimer$clock$do_action_tick_BANG__$_state_machine__38794__auto____1 = (function (state_40814){
while(true){
var ret_value__38795__auto__ = (function (){try{while(true){
var result__38796__auto__ = switch__38793__auto__.call(null,state_40814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38796__auto__;
}
break;
}
}catch (e40823){if((e40823 instanceof Object)){
var ex__38797__auto__ = e40823;
var statearr_40824_40831 = state_40814;
(statearr_40824_40831[(5)] = ex__38797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40832 = state_40814;
state_40814 = G__40832;
continue;
} else {
return ret_value__38795__auto__;
}
break;
}
});
utimer$clock$do_action_tick_BANG__$_state_machine__38794__auto__ = function(state_40814){
switch(arguments.length){
case 0:
return utimer$clock$do_action_tick_BANG__$_state_machine__38794__auto____0.call(this);
case 1:
return utimer$clock$do_action_tick_BANG__$_state_machine__38794__auto____1.call(this,state_40814);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$clock$do_action_tick_BANG__$_state_machine__38794__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$clock$do_action_tick_BANG__$_state_machine__38794__auto____0;
utimer$clock$do_action_tick_BANG__$_state_machine__38794__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$clock$do_action_tick_BANG__$_state_machine__38794__auto____1;
return utimer$clock$do_action_tick_BANG__$_state_machine__38794__auto__;
})()
;})(switch__38793__auto__,c__38837__auto___40826,map__40797,map__40797__$1,clock,_STAR_timer,event_channel,progress_channel,tick_rate))
})();
var state__38839__auto__ = (function (){var statearr_40825 = f__38838__auto__.call(null);
(statearr_40825[(6)] = c__38837__auto___40826);

return statearr_40825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38839__auto__);
});})(c__38837__auto___40826,map__40797,map__40797__$1,clock,_STAR_timer,event_channel,progress_channel,tick_rate))
);


return clock;
});
utimer.clock.do_action_reset_BANG_ = (function utimer$clock$do_action_reset_BANG_(p__40833){
var map__40834 = p__40833;
var map__40834__$1 = ((((!((map__40834 == null)))?((((map__40834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40834):map__40834);
var clock = map__40834__$1;
var _STAR_timer = cljs.core.get.call(null,map__40834__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
var event_channel = cljs.core.get.call(null,map__40834__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var progress_channel = cljs.core.get.call(null,map__40834__$1,new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311));
cljs.core.swap_BANG_.call(null,_STAR_timer,utimer.timer.reset);

cljs.core.async.put_BANG_.call(null,progress_channel,cljs.core.deref.call(null,_STAR_timer));

cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_tick.call(null));

return clock;
});
utimer.clock.do_action_quit_BANG_ = (function utimer$clock$do_action_quit_BANG_(p__40836){
var map__40837 = p__40836;
var map__40837__$1 = ((((!((map__40837 == null)))?((((map__40837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40837):map__40837);
var clock = map__40837__$1;
var _STAR_timer = cljs.core.get.call(null,map__40837__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
var event_channel = cljs.core.get.call(null,map__40837__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var progress_channel = cljs.core.get.call(null,map__40837__$1,new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311));
cljs.core.swap_BANG_.call(null,_STAR_timer,utimer.timer.stop);

cljs.core.async.close_BANG_.call(null,event_channel);

cljs.core.async.close_BANG_.call(null,progress_channel);

return clock;
});
utimer.clock.do_action_change_BANG_ = (function utimer$clock$do_action_change_BANG_(p__40839,duration){
var map__40840 = p__40839;
var map__40840__$1 = ((((!((map__40840 == null)))?((((map__40840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40840):map__40840);
var clock = map__40840__$1;
var _STAR_timer = cljs.core.get.call(null,map__40840__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
var event_channel = cljs.core.get.call(null,map__40840__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.swap_BANG_.call(null,_STAR_timer,utimer.timer.change_duration,duration);

cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_tick.call(null));

return clock;
});
utimer.clock.event_loop = (function utimer$clock$event_loop(p__40842){
var map__40843 = p__40842;
var map__40843__$1 = ((((!((map__40843 == null)))?((((map__40843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40843):map__40843);
var clock = map__40843__$1;
var _STAR_initialized_QMARK_ = cljs.core.get.call(null,map__40843__$1,new cljs.core.Keyword(null,"*initialized?","*initialized?",2050741236));
var event_channel = cljs.core.get.call(null,map__40843__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.reset_BANG_.call(null,_STAR_initialized_QMARK_,true);

var c__38837__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38837__auto__,map__40843,map__40843__$1,clock,_STAR_initialized_QMARK_,event_channel){
return (function (){
var f__38838__auto__ = (function (){var switch__38793__auto__ = ((function (c__38837__auto__,map__40843,map__40843__$1,clock,_STAR_initialized_QMARK_,event_channel){
return (function (state_40874){
var state_val_40875 = (state_40874[(1)]);
if((state_val_40875 === (7))){
var inst_40870 = (state_40874[(2)]);
var state_40874__$1 = state_40874;
var statearr_40876_40903 = state_40874__$1;
(statearr_40876_40903[(2)] = inst_40870);

(statearr_40876_40903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (1))){
var state_40874__$1 = state_40874;
var statearr_40877_40904 = state_40874__$1;
(statearr_40877_40904[(2)] = null);

(statearr_40877_40904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (4))){
var inst_40848 = (state_40874[(7)]);
var inst_40847 = (state_40874[(8)]);
var inst_40847__$1 = (state_40874[(2)]);
var inst_40848__$1 = new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(inst_40847__$1);
var state_40874__$1 = (function (){var statearr_40878 = state_40874;
(statearr_40878[(7)] = inst_40848__$1);

(statearr_40878[(8)] = inst_40847__$1);

return statearr_40878;
})();
if(cljs.core.truth_(inst_40848__$1)){
var statearr_40879_40905 = state_40874__$1;
(statearr_40879_40905[(1)] = (5));

} else {
var statearr_40880_40906 = state_40874__$1;
(statearr_40880_40906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (15))){
var state_40874__$1 = state_40874;
var statearr_40881_40907 = state_40874__$1;
(statearr_40881_40907[(2)] = null);

(statearr_40881_40907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (13))){
var inst_40858 = utimer.clock.do_action_quit_BANG_.call(null,clock);
var state_40874__$1 = state_40874;
var statearr_40882_40908 = state_40874__$1;
(statearr_40882_40908[(2)] = inst_40858);

(statearr_40882_40908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (6))){
var inst_40868 = cljs.core.reset_BANG_.call(null,_STAR_initialized_QMARK_,false);
var state_40874__$1 = state_40874;
var statearr_40883_40909 = state_40874__$1;
(statearr_40883_40909[(2)] = inst_40868);

(statearr_40883_40909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (3))){
var inst_40872 = (state_40874[(2)]);
var state_40874__$1 = state_40874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40874__$1,inst_40872);
} else {
if((state_val_40875 === (12))){
var inst_40856 = utimer.clock.do_action_reset_BANG_.call(null,clock);
var state_40874__$1 = state_40874;
var statearr_40884_40910 = state_40874__$1;
(statearr_40884_40910[(2)] = inst_40856);

(statearr_40884_40910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (2))){
var state_40874__$1 = state_40874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40874__$1,(4),event_channel);
} else {
if((state_val_40875 === (11))){
var inst_40854 = utimer.clock.do_action_tick_BANG_.call(null,clock);
var state_40874__$1 = state_40874;
var statearr_40885_40911 = state_40874__$1;
(statearr_40885_40911[(2)] = inst_40854);

(statearr_40885_40911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (9))){
var inst_40850 = utimer.clock.do_action_start_BANG_.call(null,clock);
var state_40874__$1 = state_40874;
var statearr_40886_40912 = state_40874__$1;
(statearr_40886_40912[(2)] = inst_40850);

(statearr_40886_40912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (5))){
var inst_40848 = (state_40874[(7)]);
var state_40874__$1 = state_40874;
var G__40887_40913 = inst_40848;
var G__40887_40914__$1 = (((G__40887_40913 instanceof cljs.core.Keyword))?G__40887_40913.fqn:null);
switch (G__40887_40914__$1) {
case "start":
var statearr_40888_40916 = state_40874__$1;
(statearr_40888_40916[(1)] = (9));


break;
case "stop":
var statearr_40889_40917 = state_40874__$1;
(statearr_40889_40917[(1)] = (10));


break;
case "tick":
var statearr_40890_40918 = state_40874__$1;
(statearr_40890_40918[(1)] = (11));


break;
case "reset":
var statearr_40891_40919 = state_40874__$1;
(statearr_40891_40919[(1)] = (12));


break;
case "quit":
var statearr_40892_40920 = state_40874__$1;
(statearr_40892_40920[(1)] = (13));


break;
case "change":
var statearr_40893_40921 = state_40874__$1;
(statearr_40893_40921[(1)] = (14));


break;
default:
var statearr_40894_40922 = state_40874__$1;
(statearr_40894_40922[(1)] = (15));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (14))){
var inst_40847 = (state_40874[(8)]);
var inst_40860 = new cljs.core.Keyword(null,"event-value","event-value",1898135138).cljs$core$IFn$_invoke$arity$1(inst_40847);
var inst_40861 = utimer.clock.do_action_change_BANG_.call(null,clock,inst_40860);
var state_40874__$1 = state_40874;
var statearr_40895_40923 = state_40874__$1;
(statearr_40895_40923[(2)] = inst_40861);

(statearr_40895_40923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (10))){
var inst_40852 = utimer.clock.do_action_stop_BANG_.call(null,clock);
var state_40874__$1 = state_40874;
var statearr_40896_40924 = state_40874__$1;
(statearr_40896_40924[(2)] = inst_40852);

(statearr_40896_40924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40875 === (8))){
var inst_40865 = (state_40874[(2)]);
var state_40874__$1 = (function (){var statearr_40897 = state_40874;
(statearr_40897[(9)] = inst_40865);

return statearr_40897;
})();
var statearr_40898_40925 = state_40874__$1;
(statearr_40898_40925[(2)] = null);

(statearr_40898_40925[(1)] = (2));


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
});})(c__38837__auto__,map__40843,map__40843__$1,clock,_STAR_initialized_QMARK_,event_channel))
;
return ((function (switch__38793__auto__,c__38837__auto__,map__40843,map__40843__$1,clock,_STAR_initialized_QMARK_,event_channel){
return (function() {
var utimer$clock$event_loop_$_state_machine__38794__auto__ = null;
var utimer$clock$event_loop_$_state_machine__38794__auto____0 = (function (){
var statearr_40899 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40899[(0)] = utimer$clock$event_loop_$_state_machine__38794__auto__);

(statearr_40899[(1)] = (1));

return statearr_40899;
});
var utimer$clock$event_loop_$_state_machine__38794__auto____1 = (function (state_40874){
while(true){
var ret_value__38795__auto__ = (function (){try{while(true){
var result__38796__auto__ = switch__38793__auto__.call(null,state_40874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38796__auto__;
}
break;
}
}catch (e40900){if((e40900 instanceof Object)){
var ex__38797__auto__ = e40900;
var statearr_40901_40926 = state_40874;
(statearr_40901_40926[(5)] = ex__38797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40927 = state_40874;
state_40874 = G__40927;
continue;
} else {
return ret_value__38795__auto__;
}
break;
}
});
utimer$clock$event_loop_$_state_machine__38794__auto__ = function(state_40874){
switch(arguments.length){
case 0:
return utimer$clock$event_loop_$_state_machine__38794__auto____0.call(this);
case 1:
return utimer$clock$event_loop_$_state_machine__38794__auto____1.call(this,state_40874);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$clock$event_loop_$_state_machine__38794__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$clock$event_loop_$_state_machine__38794__auto____0;
utimer$clock$event_loop_$_state_machine__38794__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$clock$event_loop_$_state_machine__38794__auto____1;
return utimer$clock$event_loop_$_state_machine__38794__auto__;
})()
;})(switch__38793__auto__,c__38837__auto__,map__40843,map__40843__$1,clock,_STAR_initialized_QMARK_,event_channel))
})();
var state__38839__auto__ = (function (){var statearr_40902 = f__38838__auto__.call(null);
(statearr_40902[(6)] = c__38837__auto__);

return statearr_40902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38839__auto__);
});})(c__38837__auto__,map__40843,map__40843__$1,clock,_STAR_initialized_QMARK_,event_channel))
);

return c__38837__auto__;
});
utimer.clock.duration = (function utimer$clock$duration(p__40928){
var map__40929 = p__40928;
var map__40929__$1 = ((((!((map__40929 == null)))?((((map__40929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40929):map__40929);
var clock = map__40929__$1;
var _STAR_timer = cljs.core.get.call(null,map__40929__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
return new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_timer));
});
utimer.clock.progress = (function utimer$clock$progress(p__40931){
var map__40932 = p__40931;
var map__40932__$1 = ((((!((map__40932 == null)))?((((map__40932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40932):map__40932);
var clock = map__40932__$1;
var _STAR_timer = cljs.core.get.call(null,map__40932__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
return new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_timer));
});
utimer.clock.started_QMARK_ = (function utimer$clock$started_QMARK_(p__40934){
var map__40935 = p__40934;
var map__40935__$1 = ((((!((map__40935 == null)))?((((map__40935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40935):map__40935);
var clock = map__40935__$1;
var _STAR_timer = cljs.core.get.call(null,map__40935__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
return new cljs.core.Keyword(null,"started?","started?",-1301062863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_timer));
});
utimer.clock.progressed_QMARK_ = (function utimer$clock$progressed_QMARK_(clock){
return (utimer.clock.progress.call(null,clock) > (0));
});
utimer.clock.finished_QMARK_ = (function utimer$clock$finished_QMARK_(p__40937){
var map__40938 = p__40937;
var map__40938__$1 = ((((!((map__40938 == null)))?((((map__40938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40938):map__40938);
var clock = map__40938__$1;
var _STAR_timer = cljs.core.get.call(null,map__40938__$1,new cljs.core.Keyword(null,"*timer","*timer",-637700106));
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
utimer.clock.init_BANG_ = (function utimer$clock$init_BANG_(p__40940){
var map__40941 = p__40940;
var map__40941__$1 = ((((!((map__40941 == null)))?((((map__40941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40941):map__40941);
var clock = map__40941__$1;
var initialized_QMARK_ = cljs.core.get.call(null,map__40941__$1,new cljs.core.Keyword(null,"initialized?","initialized?",1707939066));
if(cljs.core.truth_(initialized_QMARK_)){
return null;
} else {
return utimer.clock.event_loop.call(null,clock);
}
});
utimer.clock.start_BANG_ = (function utimer$clock$start_BANG_(p__40943){
var map__40944 = p__40943;
var map__40944__$1 = ((((!((map__40944 == null)))?((((map__40944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40944):map__40944);
var clock = map__40944__$1;
var initialized_QMARK_ = cljs.core.get.call(null,map__40944__$1,new cljs.core.Keyword(null,"initialized?","initialized?",1707939066));
var timer = cljs.core.get.call(null,map__40944__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
var event_channel = cljs.core.get.call(null,map__40944__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var progress_channel = cljs.core.get.call(null,map__40944__$1,new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311));
utimer.clock.init_BANG_.call(null,clock);

cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_start.call(null));

return clock;
});
utimer.clock.stop_BANG_ = (function utimer$clock$stop_BANG_(p__40946){
var map__40947 = p__40946;
var map__40947__$1 = ((((!((map__40947 == null)))?((((map__40947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40947):map__40947);
var clock = map__40947__$1;
var event_channel = cljs.core.get.call(null,map__40947__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_stop.call(null));

return clock;
});
utimer.clock.restart_BANG_ = (function utimer$clock$restart_BANG_(p__40949){
var map__40950 = p__40949;
var map__40950__$1 = ((((!((map__40950 == null)))?((((map__40950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40950):map__40950);
var clock = map__40950__$1;
var event_channel = cljs.core.get.call(null,map__40950__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_reset.call(null));

return clock;
});
utimer.clock.quit_BANG_ = (function utimer$clock$quit_BANG_(p__40952){
var map__40953 = p__40952;
var map__40953__$1 = ((((!((map__40953 == null)))?((((map__40953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40953.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40953):map__40953);
var clock = map__40953__$1;
var event_channel = cljs.core.get.call(null,map__40953__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_quit.call(null));

return clock;
});
utimer.clock.change_BANG_ = (function utimer$clock$change_BANG_(p__40955,duration){
var map__40956 = p__40955;
var map__40956__$1 = ((((!((map__40956 == null)))?((((map__40956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40956):map__40956);
var clock = map__40956__$1;
var event_channel = cljs.core.get.call(null,map__40956__$1,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
cljs.core.async.put_BANG_.call(null,event_channel,utimer.clock.event_change.call(null,duration));

return clock;
});
