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
goog.require('utimer.components.header');
goog.require('utimer.components.layout');
goog.require('utimer.components.flat_timer');
goog.require('utimer.components.adder');
var opts51010_51016 = null;
cljs.core.reduce.call(null,((function (opts51010_51016){
return (function (ret__47203__auto__,p__51011){
var vec__51012 = p__51011;
var ___47204__auto__ = cljs.core.nth.call(null,vec__51012,(0),null);
var f__47205__auto__ = cljs.core.nth.call(null,vec__51012,(1),null);
var sym__47206__auto__ = f__47205__auto__.call(null);
var G__51015 = ret__47203__auto__;
if(cljs.core.truth_(sym__47206__auto__)){
return cljs.core.conj.call(null,G__51015,sym__47206__auto__);
} else {
return G__51015;
}
});})(opts51010_51016))
,cljs.core.PersistentVector.EMPTY,orchestra_cljs.spec.test.distinct_by.call(null,cljs.core.first,cljs.core.filter.call(null,((function (opts51010_51016){
return (function (p1__47202__47207__auto__){
return orchestra_cljs.spec.test.instrumentable_syms.call(null,opts51010_51016).call(null,cljs.core.first.call(null,p1__47202__47207__auto__));
});})(opts51010_51016))
,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("utimer.timer","stop","utimer.timer/stop",833128224,null),new cljs.core.Symbol("utimer.timer","reset","utimer.timer/reset",1283950052,null),new cljs.core.Symbol("utimer.timer","new-timer","utimer.timer/new-timer",1371860230,null),new cljs.core.Symbol("utimer.timer","start","utimer.timer/start",437833483,null),new cljs.core.Symbol("utimer.timer","change-duration","utimer.timer/change-duration",-1184650960,null),new cljs.core.Symbol("utimer.timer","tick","utimer.timer/tick",-42881346,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts51010_51016){
return (function (){
var checked__47175__auto__ = orchestra_cljs.spec.test.instrument_1_STAR_.call(null,utimer.timer.stop,new cljs.core.Var(function(){return utimer.timer.stop;},new cljs.core.Symbol("utimer.timer","stop","utimer.timer/stop",833128224,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utimer.timer","utimer.timer",-220714435,null),new cljs.core.Symbol(null,"stop","stop",-500379815,null),"C:\\Users\\benzap\\projects\\utimer\\src\\cljs\\utimer\\timer.cljs",11,1,53,53,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timer","timer",373563788,null)], null)),null,(cljs.core.truth_(utimer.timer.stop)?utimer.timer.stop.cljs$lang$test:null)])),opts51010_51016);
if(cljs.core.truth_(checked__47175__auto__)){
utimer.timer.stop = checked__47175__auto__;
} else {
}

return new cljs.core.Symbol("utimer.timer","stop","utimer.timer/stop",833128224,null);
});})(opts51010_51016))
,((function (opts51010_51016){
return (function (){
var checked__47175__auto__ = orchestra_cljs.spec.test.instrument_1_STAR_.call(null,utimer.timer.reset,new cljs.core.Var(function(){return utimer.timer.reset;},new cljs.core.Symbol("utimer.timer","reset","utimer.timer/reset",1283950052,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utimer.timer","utimer.timer",-220714435,null),new cljs.core.Symbol(null,"reset","reset",839601581,null),"C:\\Users\\benzap\\projects\\utimer\\src\\cljs\\utimer\\timer.cljs",12,1,61,61,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timer","timer",373563788,null)], null)),null,(cljs.core.truth_(utimer.timer.reset)?utimer.timer.reset.cljs$lang$test:null)])),opts51010_51016);
if(cljs.core.truth_(checked__47175__auto__)){
utimer.timer.reset = checked__47175__auto__;
} else {
}

return new cljs.core.Symbol("utimer.timer","reset","utimer.timer/reset",1283950052,null);
});})(opts51010_51016))
,((function (opts51010_51016){
return (function (){
var checked__47175__auto__ = orchestra_cljs.spec.test.instrument_1_STAR_.call(null,utimer.timer.new_timer,new cljs.core.Var(function(){return utimer.timer.new_timer;},new cljs.core.Symbol("utimer.timer","new-timer","utimer.timer/new-timer",1371860230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utimer.timer","utimer.timer",-220714435,null),new cljs.core.Symbol(null,"new-timer","new-timer",576234703,null),"C:\\Users\\benzap\\projects\\utimer\\src\\cljs\\utimer\\timer.cljs",16,1,32,32,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null)], null)),null,(cljs.core.truth_(utimer.timer.new_timer)?utimer.timer.new_timer.cljs$lang$test:null)])),opts51010_51016);
if(cljs.core.truth_(checked__47175__auto__)){
utimer.timer.new_timer = checked__47175__auto__;
} else {
}

return new cljs.core.Symbol("utimer.timer","new-timer","utimer.timer/new-timer",1371860230,null);
});})(opts51010_51016))
,((function (opts51010_51016){
return (function (){
var checked__47175__auto__ = orchestra_cljs.spec.test.instrument_1_STAR_.call(null,utimer.timer.start,new cljs.core.Var(function(){return utimer.timer.start;},new cljs.core.Symbol("utimer.timer","start","utimer.timer/start",437833483,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utimer.timer","utimer.timer",-220714435,null),new cljs.core.Symbol(null,"start","start",1285322546,null),"C:\\Users\\benzap\\projects\\utimer\\src\\cljs\\utimer\\timer.cljs",12,1,43,43,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timer","timer",373563788,null)], null)),null,(cljs.core.truth_(utimer.timer.start)?utimer.timer.start.cljs$lang$test:null)])),opts51010_51016);
if(cljs.core.truth_(checked__47175__auto__)){
utimer.timer.start = checked__47175__auto__;
} else {
}

return new cljs.core.Symbol("utimer.timer","start","utimer.timer/start",437833483,null);
});})(opts51010_51016))
,((function (opts51010_51016){
return (function (){
var checked__47175__auto__ = orchestra_cljs.spec.test.instrument_1_STAR_.call(null,utimer.timer.change_duration,new cljs.core.Var(function(){return utimer.timer.change_duration;},new cljs.core.Symbol("utimer.timer","change-duration","utimer.timer/change-duration",-1184650960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utimer.timer","utimer.timer",-220714435,null),new cljs.core.Symbol(null,"change-duration","change-duration",-2031623687,null),"C:\\Users\\benzap\\projects\\utimer\\src\\cljs\\utimer\\timer.cljs",22,1,69,69,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timer","timer",373563788,null),new cljs.core.Symbol(null,"duration","duration",-1210334701,null)], null)),null,(cljs.core.truth_(utimer.timer.change_duration)?utimer.timer.change_duration.cljs$lang$test:null)])),opts51010_51016);
if(cljs.core.truth_(checked__47175__auto__)){
utimer.timer.change_duration = checked__47175__auto__;
} else {
}

return new cljs.core.Symbol("utimer.timer","change-duration","utimer.timer/change-duration",-1184650960,null);
});})(opts51010_51016))
,((function (opts51010_51016){
return (function (){
var checked__47175__auto__ = orchestra_cljs.spec.test.instrument_1_STAR_.call(null,utimer.timer.tick,new cljs.core.Var(function(){return utimer.timer.tick;},new cljs.core.Symbol("utimer.timer","tick","utimer.timer/tick",-42881346,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utimer.timer","utimer.timer",-220714435,null),new cljs.core.Symbol(null,"tick","tick",804644551,null),"C:\\Users\\benzap\\projects\\utimer\\src\\cljs\\utimer\\timer.cljs",11,1,77,77,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"started?","started?",339468664,null),new cljs.core.Symbol(null,"tick-time","tick-time",1384940363,null),new cljs.core.Symbol(null,"progress","progress",1884855074,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"timer","timer",373563788,null)], null)], null)),null,(cljs.core.truth_(utimer.timer.tick)?utimer.timer.tick.cljs$lang$test:null)])),opts51010_51016);
if(cljs.core.truth_(checked__47175__auto__)){
utimer.timer.tick = checked__47175__auto__;
} else {
}

return new cljs.core.Symbol("utimer.timer","tick","utimer.timer/tick",-42881346,null);
});})(opts51010_51016))
], null)))));
cljs.core.enable_console_print_BANG_.call(null);
if(typeof utimer.core.app_state !== 'undefined'){
} else {
utimer.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),false,new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"flat","flat",577594262),new cljs.core.Keyword(null,"initial","initial",1854648214),"10 Minutes",new cljs.core.Keyword(null,"id","id",-1388402092),utimer.utils.create_uuid.call(null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"flat","flat",577594262),new cljs.core.Keyword(null,"initial","initial",1854648214),"5 Hours",new cljs.core.Keyword(null,"id","id",-1388402092),utimer.utils.create_uuid.call(null)], null)], null)], null));
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
var c__48318__auto___51038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto___51038){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto___51038){
return (function (state_51029){
var state_val_51030 = (state_51029[(1)]);
if((state_val_51030 === (1))){
var state_51029__$1 = state_51029;
var statearr_51031_51039 = state_51029__$1;
(statearr_51031_51039[(2)] = null);

(statearr_51031_51039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51030 === (2))){
var state_51029__$1 = state_51029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51029__$1,(4),utimer.core.remove_chan);
} else {
if((state_val_51030 === (3))){
var inst_51027 = (state_51029[(2)]);
var state_51029__$1 = state_51029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51029__$1,inst_51027);
} else {
if((state_val_51030 === (4))){
var inst_51019 = (state_51029[(2)]);
var inst_51020 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51021 = [new cljs.core.Keyword(null,"layout","layout",-2120940921)];
var inst_51022 = (new cljs.core.PersistentVector(null,1,(5),inst_51020,inst_51021,null));
var inst_51023 = cljs.core.partial.call(null,utimer.core.remove_by_id,inst_51019);
var inst_51024 = cljs.core.swap_BANG_.call(null,utimer.core.app_state,cljs.core.update_in,inst_51022,inst_51023);
var state_51029__$1 = (function (){var statearr_51032 = state_51029;
(statearr_51032[(7)] = inst_51024);

return statearr_51032;
})();
var statearr_51033_51040 = state_51029__$1;
(statearr_51033_51040[(2)] = null);

(statearr_51033_51040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__48318__auto___51038))
;
return ((function (switch__48230__auto__,c__48318__auto___51038){
return (function() {
var utimer$core$mixin_remove_timer_$_state_machine__48231__auto__ = null;
var utimer$core$mixin_remove_timer_$_state_machine__48231__auto____0 = (function (){
var statearr_51034 = [null,null,null,null,null,null,null,null];
(statearr_51034[(0)] = utimer$core$mixin_remove_timer_$_state_machine__48231__auto__);

(statearr_51034[(1)] = (1));

return statearr_51034;
});
var utimer$core$mixin_remove_timer_$_state_machine__48231__auto____1 = (function (state_51029){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_51029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e51035){if((e51035 instanceof Object)){
var ex__48234__auto__ = e51035;
var statearr_51036_51041 = state_51029;
(statearr_51036_51041[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51042 = state_51029;
state_51029 = G__51042;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
utimer$core$mixin_remove_timer_$_state_machine__48231__auto__ = function(state_51029){
switch(arguments.length){
case 0:
return utimer$core$mixin_remove_timer_$_state_machine__48231__auto____0.call(this);
case 1:
return utimer$core$mixin_remove_timer_$_state_machine__48231__auto____1.call(this,state_51029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$core$mixin_remove_timer_$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$core$mixin_remove_timer_$_state_machine__48231__auto____0;
utimer$core$mixin_remove_timer_$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$core$mixin_remove_timer_$_state_machine__48231__auto____1;
return utimer$core$mixin_remove_timer_$_state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto___51038))
})();
var state__48320__auto__ = (function (){var statearr_51037 = f__48319__auto__.call(null);
(statearr_51037[(6)] = c__48318__auto___51038);

return statearr_51037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto___51038))
);


return state;
})], null);
});
utimer.core.main = rum.core.build_defc.call(null,(function (app_state){
var map__51044 = rum.core.react.call(null,app_state);
var map__51044__$1 = ((((!((map__51044 == null)))?((((map__51044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51044):map__51044);
var layout = cljs.core.get.call(null,map__51044__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var attrs51043 = utimer.components.header.c_header.call(null,app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs51043))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["main-body"], null)], null),attrs51043)):({"className": "main-body"})),((cljs.core.map_QMARK_.call(null,attrs51043))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",({"className": "main-container"}),cljs.core.into_array.call(null,(function (){var iter__35837__auto__ = ((function (attrs51043,map__51044,map__51044__$1,layout){
return (function utimer$core$iter__51046(s__51047){
return (new cljs.core.LazySeq(null,((function (attrs51043,map__51044,map__51044__$1,layout){
return (function (){
var s__51047__$1 = s__51047;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__51047__$1);
if(temp__4657__auto__){
var s__51047__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51047__$2)){
var c__35835__auto__ = cljs.core.chunk_first.call(null,s__51047__$2);
var size__35836__auto__ = cljs.core.count.call(null,c__35835__auto__);
var b__51049 = cljs.core.chunk_buffer.call(null,size__35836__auto__);
if((function (){var i__51048 = (0);
while(true){
if((i__51048 < size__35836__auto__)){
var elem_data = cljs.core._nth.call(null,c__35835__auto__,i__51048);
cljs.core.chunk_append.call(null,b__51049,sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(elem_data),new cljs.core.Keyword(null,"flat","flat",577594262)))?utimer.components.flat_timer.c_flat_timer.call(null,elem_data,utimer.core.remove_chan):null)));

var G__51054 = (i__51048 + (1));
i__51048 = G__51054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51049),utimer$core$iter__51046.call(null,cljs.core.chunk_rest.call(null,s__51047__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51049),null);
}
} else {
var elem_data = cljs.core.first.call(null,s__51047__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(elem_data),new cljs.core.Keyword(null,"flat","flat",577594262)))?utimer.components.flat_timer.c_flat_timer.call(null,elem_data,utimer.core.remove_chan):null)),utimer$core$iter__51046.call(null,cljs.core.rest.call(null,s__51047__$2)));
}
} else {
return null;
}
break;
}
});})(attrs51043,map__51044,map__51044__$1,layout))
,null,null));
});})(attrs51043,map__51044,map__51044__$1,layout))
;
return iter__35837__auto__.call(null,layout);
})()),sablono.interpreter.interpret.call(null,utimer.components.adder.c_adder.call(null,app_state)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51043),React.createElement("div",({"className": "main-container"}),cljs.core.into_array.call(null,(function (){var iter__35837__auto__ = ((function (attrs51043,map__51044,map__51044__$1,layout){
return (function utimer$core$iter__51050(s__51051){
return (new cljs.core.LazySeq(null,((function (attrs51043,map__51044,map__51044__$1,layout){
return (function (){
var s__51051__$1 = s__51051;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__51051__$1);
if(temp__4657__auto__){
var s__51051__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51051__$2)){
var c__35835__auto__ = cljs.core.chunk_first.call(null,s__51051__$2);
var size__35836__auto__ = cljs.core.count.call(null,c__35835__auto__);
var b__51053 = cljs.core.chunk_buffer.call(null,size__35836__auto__);
if((function (){var i__51052 = (0);
while(true){
if((i__51052 < size__35836__auto__)){
var elem_data = cljs.core._nth.call(null,c__35835__auto__,i__51052);
cljs.core.chunk_append.call(null,b__51053,sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(elem_data),new cljs.core.Keyword(null,"flat","flat",577594262)))?utimer.components.flat_timer.c_flat_timer.call(null,elem_data,utimer.core.remove_chan):null)));

var G__51055 = (i__51052 + (1));
i__51052 = G__51055;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51053),utimer$core$iter__51050.call(null,cljs.core.chunk_rest.call(null,s__51051__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51053),null);
}
} else {
var elem_data = cljs.core.first.call(null,s__51051__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(elem_data),new cljs.core.Keyword(null,"flat","flat",577594262)))?utimer.components.flat_timer.c_flat_timer.call(null,elem_data,utimer.core.remove_chan):null)),utimer$core$iter__51050.call(null,cljs.core.rest.call(null,s__51051__$2)));
}
} else {
return null;
}
break;
}
});})(attrs51043,map__51044,map__51044__$1,layout))
,null,null));
});})(attrs51043,map__51044,map__51044__$1,layout))
;
return iter__35837__auto__.call(null,layout);
})()),sablono.interpreter.interpret.call(null,utimer.components.adder.c_adder.call(null,app_state)))], null)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [utimer.core.mixin_remove_timer.call(null),rum.core.reactive], null),"main");
utimer.core.render = (function utimer$core$render(){
return rum.core.mount.call(null,utimer.core.main.call(null,utimer.core.app_state),document.getElementById("app"));
});
