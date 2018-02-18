// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('utimer.ext_async');
goog.require('rum.core');
goog.require('orchestra_cljs.spec.test');
goog.require('utimer.timer');
goog.require('utimer.clock');
goog.require('utimer.layout');
goog.require('utimer.utils');
goog.require('utimer.title_updater');
goog.require('utimer.components.header');
goog.require('utimer.components.layout');
goog.require('utimer.components.flat_timer');
goog.require('utimer.components.adder');
var opts46950_46956 = null;
cljs.core.reduce.call(null,((function (opts46950_46956){
return (function (ret__43372__auto__,p__46951){
var vec__46952 = p__46951;
var ___43373__auto__ = cljs.core.nth.call(null,vec__46952,(0),null);
var f__43374__auto__ = cljs.core.nth.call(null,vec__46952,(1),null);
var sym__43375__auto__ = f__43374__auto__.call(null);
var G__46955 = ret__43372__auto__;
if(cljs.core.truth_(sym__43375__auto__)){
return cljs.core.conj.call(null,G__46955,sym__43375__auto__);
} else {
return G__46955;
}
});})(opts46950_46956))
,cljs.core.PersistentVector.EMPTY,orchestra_cljs.spec.test.distinct_by.call(null,cljs.core.first,cljs.core.filter.call(null,((function (opts46950_46956){
return (function (p1__43371__43376__auto__){
return orchestra_cljs.spec.test.instrumentable_syms.call(null,opts46950_46956).call(null,cljs.core.first.call(null,p1__43371__43376__auto__));
});})(opts46950_46956))
,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("utimer.timer","stop","utimer.timer/stop",833128224,null),new cljs.core.Symbol("utimer.timer","reset","utimer.timer/reset",1283950052,null),new cljs.core.Symbol("utimer.timer","new-timer","utimer.timer/new-timer",1371860230,null),new cljs.core.Symbol("utimer.timer","start","utimer.timer/start",437833483,null),new cljs.core.Symbol("utimer.timer","change-duration","utimer.timer/change-duration",-1184650960,null),new cljs.core.Symbol("utimer.timer","tick","utimer.timer/tick",-42881346,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts46950_46956){
return (function (){
var checked__43344__auto__ = orchestra_cljs.spec.test.instrument_1_STAR_.call(null,utimer.timer.stop,new cljs.core.Var(function(){return utimer.timer.stop;},new cljs.core.Symbol("utimer.timer","stop","utimer.timer/stop",833128224,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utimer.timer","utimer.timer",-220714435,null),new cljs.core.Symbol(null,"stop","stop",-500379815,null),"/C:/Users/benzap/projects/utimer/src/cljs/utimer/timer.cljs",11,1,53,53,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timer","timer",373563788,null)], null)),null,(cljs.core.truth_(utimer.timer.stop)?utimer.timer.stop.cljs$lang$test:null)])),opts46950_46956);
if(cljs.core.truth_(checked__43344__auto__)){
utimer.timer.stop = checked__43344__auto__;
} else {
}

return new cljs.core.Symbol("utimer.timer","stop","utimer.timer/stop",833128224,null);
});})(opts46950_46956))
,((function (opts46950_46956){
return (function (){
var checked__43344__auto__ = orchestra_cljs.spec.test.instrument_1_STAR_.call(null,utimer.timer.reset,new cljs.core.Var(function(){return utimer.timer.reset;},new cljs.core.Symbol("utimer.timer","reset","utimer.timer/reset",1283950052,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utimer.timer","utimer.timer",-220714435,null),new cljs.core.Symbol(null,"reset","reset",839601581,null),"/C:/Users/benzap/projects/utimer/src/cljs/utimer/timer.cljs",12,1,61,61,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timer","timer",373563788,null)], null)),null,(cljs.core.truth_(utimer.timer.reset)?utimer.timer.reset.cljs$lang$test:null)])),opts46950_46956);
if(cljs.core.truth_(checked__43344__auto__)){
utimer.timer.reset = checked__43344__auto__;
} else {
}

return new cljs.core.Symbol("utimer.timer","reset","utimer.timer/reset",1283950052,null);
});})(opts46950_46956))
,((function (opts46950_46956){
return (function (){
var checked__43344__auto__ = orchestra_cljs.spec.test.instrument_1_STAR_.call(null,utimer.timer.new_timer,new cljs.core.Var(function(){return utimer.timer.new_timer;},new cljs.core.Symbol("utimer.timer","new-timer","utimer.timer/new-timer",1371860230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utimer.timer","utimer.timer",-220714435,null),new cljs.core.Symbol(null,"new-timer","new-timer",576234703,null),"/C:/Users/benzap/projects/utimer/src/cljs/utimer/timer.cljs",16,1,32,32,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null)], null)),null,(cljs.core.truth_(utimer.timer.new_timer)?utimer.timer.new_timer.cljs$lang$test:null)])),opts46950_46956);
if(cljs.core.truth_(checked__43344__auto__)){
utimer.timer.new_timer = checked__43344__auto__;
} else {
}

return new cljs.core.Symbol("utimer.timer","new-timer","utimer.timer/new-timer",1371860230,null);
});})(opts46950_46956))
,((function (opts46950_46956){
return (function (){
var checked__43344__auto__ = orchestra_cljs.spec.test.instrument_1_STAR_.call(null,utimer.timer.start,new cljs.core.Var(function(){return utimer.timer.start;},new cljs.core.Symbol("utimer.timer","start","utimer.timer/start",437833483,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utimer.timer","utimer.timer",-220714435,null),new cljs.core.Symbol(null,"start","start",1285322546,null),"/C:/Users/benzap/projects/utimer/src/cljs/utimer/timer.cljs",12,1,43,43,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timer","timer",373563788,null)], null)),null,(cljs.core.truth_(utimer.timer.start)?utimer.timer.start.cljs$lang$test:null)])),opts46950_46956);
if(cljs.core.truth_(checked__43344__auto__)){
utimer.timer.start = checked__43344__auto__;
} else {
}

return new cljs.core.Symbol("utimer.timer","start","utimer.timer/start",437833483,null);
});})(opts46950_46956))
,((function (opts46950_46956){
return (function (){
var checked__43344__auto__ = orchestra_cljs.spec.test.instrument_1_STAR_.call(null,utimer.timer.change_duration,new cljs.core.Var(function(){return utimer.timer.change_duration;},new cljs.core.Symbol("utimer.timer","change-duration","utimer.timer/change-duration",-1184650960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utimer.timer","utimer.timer",-220714435,null),new cljs.core.Symbol(null,"change-duration","change-duration",-2031623687,null),"/C:/Users/benzap/projects/utimer/src/cljs/utimer/timer.cljs",22,1,69,69,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timer","timer",373563788,null),new cljs.core.Symbol(null,"duration","duration",-1210334701,null)], null)),null,(cljs.core.truth_(utimer.timer.change_duration)?utimer.timer.change_duration.cljs$lang$test:null)])),opts46950_46956);
if(cljs.core.truth_(checked__43344__auto__)){
utimer.timer.change_duration = checked__43344__auto__;
} else {
}

return new cljs.core.Symbol("utimer.timer","change-duration","utimer.timer/change-duration",-1184650960,null);
});})(opts46950_46956))
,((function (opts46950_46956){
return (function (){
var checked__43344__auto__ = orchestra_cljs.spec.test.instrument_1_STAR_.call(null,utimer.timer.tick,new cljs.core.Var(function(){return utimer.timer.tick;},new cljs.core.Symbol("utimer.timer","tick","utimer.timer/tick",-42881346,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utimer.timer","utimer.timer",-220714435,null),new cljs.core.Symbol(null,"tick","tick",804644551,null),"/C:/Users/benzap/projects/utimer/src/cljs/utimer/timer.cljs",11,1,77,77,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"started?","started?",339468664,null),new cljs.core.Symbol(null,"tick-time","tick-time",1384940363,null),new cljs.core.Symbol(null,"progress","progress",1884855074,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"timer","timer",373563788,null)], null)], null)),null,(cljs.core.truth_(utimer.timer.tick)?utimer.timer.tick.cljs$lang$test:null)])),opts46950_46956);
if(cljs.core.truth_(checked__43344__auto__)){
utimer.timer.tick = checked__43344__auto__;
} else {
}

return new cljs.core.Symbol("utimer.timer","tick","utimer.timer/tick",-42881346,null);
});})(opts46950_46956))
], null)))));
cljs.core.enable_console_print_BANG_.call(null);
if(typeof utimer.core.app_state !== 'undefined'){
} else {
utimer.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),false,new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"flat","flat",577594262),new cljs.core.Keyword(null,"initial","initial",1854648214),"10 Minutes",new cljs.core.Keyword(null,"id","id",-1388402092),utimer.utils.create_uuid.call(null),new cljs.core.Keyword(null,"label","label",1718410804),"Alarm #1"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"flat","flat",577594262),new cljs.core.Keyword(null,"initial","initial",1854648214),"5 Hours",new cljs.core.Keyword(null,"id","id",-1388402092),utimer.utils.create_uuid.call(null)], null)], null)], null));
}
utimer.core.add_flat_alarm = (function utimer$core$add_flat_alarm(initial){
return cljs.core.swap_BANG_.call(null,utimer.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"flat","flat",577594262),new cljs.core.Keyword(null,"initial","initial",1854648214),initial,new cljs.core.Keyword(null,"id","id",-1388402092),utimer.utils.create_uuid.call(null)], null));
});
utimer.core.remove_by_id = (function utimer$core$remove_by_id(id,layout){
return cljs.core.filterv.call(null,(function (elem){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(elem),id);
}),layout);
});
utimer.core.remove_chan = cljs.core.async.chan.call(null);
utimer.core.mixin_remove_timer = (function utimer$core$mixin_remove_timer(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var c__39213__auto___46978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39213__auto___46978){
return (function (){
var f__39214__auto__ = (function (){var switch__39169__auto__ = ((function (c__39213__auto___46978){
return (function (state_46969){
var state_val_46970 = (state_46969[(1)]);
if((state_val_46970 === (1))){
var state_46969__$1 = state_46969;
var statearr_46971_46979 = state_46969__$1;
(statearr_46971_46979[(2)] = null);

(statearr_46971_46979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46970 === (2))){
var state_46969__$1 = state_46969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46969__$1,(4),utimer.core.remove_chan);
} else {
if((state_val_46970 === (3))){
var inst_46967 = (state_46969[(2)]);
var state_46969__$1 = state_46969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46969__$1,inst_46967);
} else {
if((state_val_46970 === (4))){
var inst_46959 = (state_46969[(2)]);
var inst_46960 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46961 = [new cljs.core.Keyword(null,"layout","layout",-2120940921)];
var inst_46962 = (new cljs.core.PersistentVector(null,1,(5),inst_46960,inst_46961,null));
var inst_46963 = cljs.core.partial.call(null,utimer.core.remove_by_id,inst_46959);
var inst_46964 = cljs.core.swap_BANG_.call(null,utimer.core.app_state,cljs.core.update_in,inst_46962,inst_46963);
var state_46969__$1 = (function (){var statearr_46972 = state_46969;
(statearr_46972[(7)] = inst_46964);

return statearr_46972;
})();
var statearr_46973_46980 = state_46969__$1;
(statearr_46973_46980[(2)] = null);

(statearr_46973_46980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__39213__auto___46978))
;
return ((function (switch__39169__auto__,c__39213__auto___46978){
return (function() {
var utimer$core$mixin_remove_timer_$_state_machine__39170__auto__ = null;
var utimer$core$mixin_remove_timer_$_state_machine__39170__auto____0 = (function (){
var statearr_46974 = [null,null,null,null,null,null,null,null];
(statearr_46974[(0)] = utimer$core$mixin_remove_timer_$_state_machine__39170__auto__);

(statearr_46974[(1)] = (1));

return statearr_46974;
});
var utimer$core$mixin_remove_timer_$_state_machine__39170__auto____1 = (function (state_46969){
while(true){
var ret_value__39171__auto__ = (function (){try{while(true){
var result__39172__auto__ = switch__39169__auto__.call(null,state_46969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39172__auto__;
}
break;
}
}catch (e46975){if((e46975 instanceof Object)){
var ex__39173__auto__ = e46975;
var statearr_46976_46981 = state_46969;
(statearr_46976_46981[(5)] = ex__39173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46982 = state_46969;
state_46969 = G__46982;
continue;
} else {
return ret_value__39171__auto__;
}
break;
}
});
utimer$core$mixin_remove_timer_$_state_machine__39170__auto__ = function(state_46969){
switch(arguments.length){
case 0:
return utimer$core$mixin_remove_timer_$_state_machine__39170__auto____0.call(this);
case 1:
return utimer$core$mixin_remove_timer_$_state_machine__39170__auto____1.call(this,state_46969);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$core$mixin_remove_timer_$_state_machine__39170__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$core$mixin_remove_timer_$_state_machine__39170__auto____0;
utimer$core$mixin_remove_timer_$_state_machine__39170__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$core$mixin_remove_timer_$_state_machine__39170__auto____1;
return utimer$core$mixin_remove_timer_$_state_machine__39170__auto__;
})()
;})(switch__39169__auto__,c__39213__auto___46978))
})();
var state__39215__auto__ = (function (){var statearr_46977 = f__39214__auto__.call(null);
(statearr_46977[(6)] = c__39213__auto___46978);

return statearr_46977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39215__auto__);
});})(c__39213__auto___46978))
);


return state;
})], null);
});
utimer.core.broadcast_in_chan = cljs.core.async.chan.call(null);
utimer.core.broadcast_out_chan = cljs.core.async.chan.call(null);
utimer.core.broadcast_out_mult = cljs.core.async.mult.call(null,utimer.core.broadcast_out_chan);
utimer.core.mixin_broadcast_messenger = (function utimer$core$mixin_broadcast_messenger(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
cljs.core.async.pipe.call(null,utimer.core.broadcast_in_chan,utimer.core.broadcast_out_chan);

return state;
})], null);
});
utimer.core.test_broadcast = (function utimer$core$test_broadcast(){
return cljs.core.async.put_BANG_.call(null,utimer.core.broadcast_in_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"echo","echo",1461973457),new cljs.core.Keyword(null,"text","text",-1790561697),"Hello"], null));
});
utimer.core.main = rum.core.build_defc.call(null,(function (app_state){
var map__46984 = rum.core.react.call(null,app_state);
var map__46984__$1 = ((((!((map__46984 == null)))?((((map__46984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46984):map__46984);
var layout = cljs.core.get.call(null,map__46984__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var attrs46983 = utimer.components.header.c_header.call(null,app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs46983))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["main-body"], null)], null),attrs46983)):({"className": "main-body"})),((cljs.core.map_QMARK_.call(null,attrs46983))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",({"className": "main-container"}),cljs.core.into_array.call(null,(function (){var iter__35837__auto__ = ((function (attrs46983,map__46984,map__46984__$1,layout){
return (function utimer$core$iter__46986(s__46987){
return (new cljs.core.LazySeq(null,((function (attrs46983,map__46984,map__46984__$1,layout){
return (function (){
var s__46987__$1 = s__46987;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__46987__$1);
if(temp__4657__auto__){
var s__46987__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46987__$2)){
var c__35835__auto__ = cljs.core.chunk_first.call(null,s__46987__$2);
var size__35836__auto__ = cljs.core.count.call(null,c__35835__auto__);
var b__46989 = cljs.core.chunk_buffer.call(null,size__35836__auto__);
if((function (){var i__46988 = (0);
while(true){
if((i__46988 < size__35836__auto__)){
var elem_data = cljs.core._nth.call(null,c__35835__auto__,i__46988);
cljs.core.chunk_append.call(null,b__46989,sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(elem_data),new cljs.core.Keyword(null,"flat","flat",577594262)))?utimer.components.flat_timer.c_flat_timer.call(null,elem_data,utimer.core.remove_chan,utimer.title_updater.update_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [utimer.core.broadcast_in_chan,cljs.core.async.tap.call(null,utimer.core.broadcast_out_mult,cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(5))))], null)):null)));

var G__46994 = (i__46988 + (1));
i__46988 = G__46994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46989),utimer$core$iter__46986.call(null,cljs.core.chunk_rest.call(null,s__46987__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46989),null);
}
} else {
var elem_data = cljs.core.first.call(null,s__46987__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(elem_data),new cljs.core.Keyword(null,"flat","flat",577594262)))?utimer.components.flat_timer.c_flat_timer.call(null,elem_data,utimer.core.remove_chan,utimer.title_updater.update_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [utimer.core.broadcast_in_chan,cljs.core.async.tap.call(null,utimer.core.broadcast_out_mult,cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(5))))], null)):null)),utimer$core$iter__46986.call(null,cljs.core.rest.call(null,s__46987__$2)));
}
} else {
return null;
}
break;
}
});})(attrs46983,map__46984,map__46984__$1,layout))
,null,null));
});})(attrs46983,map__46984,map__46984__$1,layout))
;
return iter__35837__auto__.call(null,layout);
})()),sablono.interpreter.interpret.call(null,utimer.components.adder.c_adder.call(null,app_state)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46983),React.createElement("div",({"className": "main-container"}),cljs.core.into_array.call(null,(function (){var iter__35837__auto__ = ((function (attrs46983,map__46984,map__46984__$1,layout){
return (function utimer$core$iter__46990(s__46991){
return (new cljs.core.LazySeq(null,((function (attrs46983,map__46984,map__46984__$1,layout){
return (function (){
var s__46991__$1 = s__46991;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__46991__$1);
if(temp__4657__auto__){
var s__46991__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46991__$2)){
var c__35835__auto__ = cljs.core.chunk_first.call(null,s__46991__$2);
var size__35836__auto__ = cljs.core.count.call(null,c__35835__auto__);
var b__46993 = cljs.core.chunk_buffer.call(null,size__35836__auto__);
if((function (){var i__46992 = (0);
while(true){
if((i__46992 < size__35836__auto__)){
var elem_data = cljs.core._nth.call(null,c__35835__auto__,i__46992);
cljs.core.chunk_append.call(null,b__46993,sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(elem_data),new cljs.core.Keyword(null,"flat","flat",577594262)))?utimer.components.flat_timer.c_flat_timer.call(null,elem_data,utimer.core.remove_chan,utimer.title_updater.update_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [utimer.core.broadcast_in_chan,cljs.core.async.tap.call(null,utimer.core.broadcast_out_mult,cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(5))))], null)):null)));

var G__46995 = (i__46992 + (1));
i__46992 = G__46995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46993),utimer$core$iter__46990.call(null,cljs.core.chunk_rest.call(null,s__46991__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46993),null);
}
} else {
var elem_data = cljs.core.first.call(null,s__46991__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(elem_data),new cljs.core.Keyword(null,"flat","flat",577594262)))?utimer.components.flat_timer.c_flat_timer.call(null,elem_data,utimer.core.remove_chan,utimer.title_updater.update_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [utimer.core.broadcast_in_chan,cljs.core.async.tap.call(null,utimer.core.broadcast_out_mult,cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(5))))], null)):null)),utimer$core$iter__46990.call(null,cljs.core.rest.call(null,s__46991__$2)));
}
} else {
return null;
}
break;
}
});})(attrs46983,map__46984,map__46984__$1,layout))
,null,null));
});})(attrs46983,map__46984,map__46984__$1,layout))
;
return iter__35837__auto__.call(null,layout);
})()),sablono.interpreter.interpret.call(null,utimer.components.adder.c_adder.call(null,app_state)))], null)));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [utimer.core.mixin_remove_timer.call(null),utimer.title_updater.mixin_update_title.call(null),utimer.core.mixin_broadcast_messenger.call(null),rum.core.reactive], null),"main");
utimer.core.render = (function utimer$core$render(){
return rum.core.mount.call(null,utimer.core.main.call(null,utimer.core.app_state),document.getElementById("app"));
});
