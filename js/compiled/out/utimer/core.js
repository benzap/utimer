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
var opts46663_46669 = null;
cljs.core.reduce.call(null,((function (opts46663_46669){
return (function (ret__43087__auto__,p__46664){
var vec__46665 = p__46664;
var ___43088__auto__ = cljs.core.nth.call(null,vec__46665,(0),null);
var f__43089__auto__ = cljs.core.nth.call(null,vec__46665,(1),null);
var sym__43090__auto__ = f__43089__auto__.call(null);
var G__46668 = ret__43087__auto__;
if(cljs.core.truth_(sym__43090__auto__)){
return cljs.core.conj.call(null,G__46668,sym__43090__auto__);
} else {
return G__46668;
}
});})(opts46663_46669))
,cljs.core.PersistentVector.EMPTY,orchestra_cljs.spec.test.distinct_by.call(null,cljs.core.first,cljs.core.filter.call(null,((function (opts46663_46669){
return (function (p1__43086__43091__auto__){
return orchestra_cljs.spec.test.instrumentable_syms.call(null,opts46663_46669).call(null,cljs.core.first.call(null,p1__43086__43091__auto__));
});})(opts46663_46669))
,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("utimer.timer","stop","utimer.timer/stop",833128224,null),new cljs.core.Symbol("utimer.timer","reset","utimer.timer/reset",1283950052,null),new cljs.core.Symbol("utimer.timer","new-timer","utimer.timer/new-timer",1371860230,null),new cljs.core.Symbol("utimer.timer","start","utimer.timer/start",437833483,null),new cljs.core.Symbol("utimer.timer","change-duration","utimer.timer/change-duration",-1184650960,null),new cljs.core.Symbol("utimer.timer","tick","utimer.timer/tick",-42881346,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts46663_46669){
return (function (){
var checked__43059__auto__ = orchestra_cljs.spec.test.instrument_1_STAR_.call(null,utimer.timer.stop,new cljs.core.Var(function(){return utimer.timer.stop;},new cljs.core.Symbol("utimer.timer","stop","utimer.timer/stop",833128224,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utimer.timer","utimer.timer",-220714435,null),new cljs.core.Symbol(null,"stop","stop",-500379815,null),"/C:/Users/benzap/projects/utimer/src/cljs/utimer/timer.cljs",11,1,53,53,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timer","timer",373563788,null)], null)),null,(cljs.core.truth_(utimer.timer.stop)?utimer.timer.stop.cljs$lang$test:null)])),opts46663_46669);
if(cljs.core.truth_(checked__43059__auto__)){
utimer.timer.stop = checked__43059__auto__;
} else {
}

return new cljs.core.Symbol("utimer.timer","stop","utimer.timer/stop",833128224,null);
});})(opts46663_46669))
,((function (opts46663_46669){
return (function (){
var checked__43059__auto__ = orchestra_cljs.spec.test.instrument_1_STAR_.call(null,utimer.timer.reset,new cljs.core.Var(function(){return utimer.timer.reset;},new cljs.core.Symbol("utimer.timer","reset","utimer.timer/reset",1283950052,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utimer.timer","utimer.timer",-220714435,null),new cljs.core.Symbol(null,"reset","reset",839601581,null),"/C:/Users/benzap/projects/utimer/src/cljs/utimer/timer.cljs",12,1,61,61,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timer","timer",373563788,null)], null)),null,(cljs.core.truth_(utimer.timer.reset)?utimer.timer.reset.cljs$lang$test:null)])),opts46663_46669);
if(cljs.core.truth_(checked__43059__auto__)){
utimer.timer.reset = checked__43059__auto__;
} else {
}

return new cljs.core.Symbol("utimer.timer","reset","utimer.timer/reset",1283950052,null);
});})(opts46663_46669))
,((function (opts46663_46669){
return (function (){
var checked__43059__auto__ = orchestra_cljs.spec.test.instrument_1_STAR_.call(null,utimer.timer.new_timer,new cljs.core.Var(function(){return utimer.timer.new_timer;},new cljs.core.Symbol("utimer.timer","new-timer","utimer.timer/new-timer",1371860230,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utimer.timer","utimer.timer",-220714435,null),new cljs.core.Symbol(null,"new-timer","new-timer",576234703,null),"/C:/Users/benzap/projects/utimer/src/cljs/utimer/timer.cljs",16,1,32,32,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null)], null)),null,(cljs.core.truth_(utimer.timer.new_timer)?utimer.timer.new_timer.cljs$lang$test:null)])),opts46663_46669);
if(cljs.core.truth_(checked__43059__auto__)){
utimer.timer.new_timer = checked__43059__auto__;
} else {
}

return new cljs.core.Symbol("utimer.timer","new-timer","utimer.timer/new-timer",1371860230,null);
});})(opts46663_46669))
,((function (opts46663_46669){
return (function (){
var checked__43059__auto__ = orchestra_cljs.spec.test.instrument_1_STAR_.call(null,utimer.timer.start,new cljs.core.Var(function(){return utimer.timer.start;},new cljs.core.Symbol("utimer.timer","start","utimer.timer/start",437833483,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utimer.timer","utimer.timer",-220714435,null),new cljs.core.Symbol(null,"start","start",1285322546,null),"/C:/Users/benzap/projects/utimer/src/cljs/utimer/timer.cljs",12,1,43,43,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timer","timer",373563788,null)], null)),null,(cljs.core.truth_(utimer.timer.start)?utimer.timer.start.cljs$lang$test:null)])),opts46663_46669);
if(cljs.core.truth_(checked__43059__auto__)){
utimer.timer.start = checked__43059__auto__;
} else {
}

return new cljs.core.Symbol("utimer.timer","start","utimer.timer/start",437833483,null);
});})(opts46663_46669))
,((function (opts46663_46669){
return (function (){
var checked__43059__auto__ = orchestra_cljs.spec.test.instrument_1_STAR_.call(null,utimer.timer.change_duration,new cljs.core.Var(function(){return utimer.timer.change_duration;},new cljs.core.Symbol("utimer.timer","change-duration","utimer.timer/change-duration",-1184650960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utimer.timer","utimer.timer",-220714435,null),new cljs.core.Symbol(null,"change-duration","change-duration",-2031623687,null),"/C:/Users/benzap/projects/utimer/src/cljs/utimer/timer.cljs",22,1,69,69,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timer","timer",373563788,null),new cljs.core.Symbol(null,"duration","duration",-1210334701,null)], null)),null,(cljs.core.truth_(utimer.timer.change_duration)?utimer.timer.change_duration.cljs$lang$test:null)])),opts46663_46669);
if(cljs.core.truth_(checked__43059__auto__)){
utimer.timer.change_duration = checked__43059__auto__;
} else {
}

return new cljs.core.Symbol("utimer.timer","change-duration","utimer.timer/change-duration",-1184650960,null);
});})(opts46663_46669))
,((function (opts46663_46669){
return (function (){
var checked__43059__auto__ = orchestra_cljs.spec.test.instrument_1_STAR_.call(null,utimer.timer.tick,new cljs.core.Var(function(){return utimer.timer.tick;},new cljs.core.Symbol("utimer.timer","tick","utimer.timer/tick",-42881346,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"utimer.timer","utimer.timer",-220714435,null),new cljs.core.Symbol(null,"tick","tick",804644551,null),"/C:/Users/benzap/projects/utimer/src/cljs/utimer/timer.cljs",11,1,77,77,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"started?","started?",339468664,null),new cljs.core.Symbol(null,"tick-time","tick-time",1384940363,null),new cljs.core.Symbol(null,"progress","progress",1884855074,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"timer","timer",373563788,null)], null)], null)),null,(cljs.core.truth_(utimer.timer.tick)?utimer.timer.tick.cljs$lang$test:null)])),opts46663_46669);
if(cljs.core.truth_(checked__43059__auto__)){
utimer.timer.tick = checked__43059__auto__;
} else {
}

return new cljs.core.Symbol("utimer.timer","tick","utimer.timer/tick",-42881346,null);
});})(opts46663_46669))
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
var c__38070__auto___46691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38070__auto___46691){
return (function (){
var f__38071__auto__ = (function (){var switch__38026__auto__ = ((function (c__38070__auto___46691){
return (function (state_46682){
var state_val_46683 = (state_46682[(1)]);
if((state_val_46683 === (1))){
var state_46682__$1 = state_46682;
var statearr_46684_46692 = state_46682__$1;
(statearr_46684_46692[(2)] = null);

(statearr_46684_46692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46683 === (2))){
var state_46682__$1 = state_46682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46682__$1,(4),utimer.core.remove_chan);
} else {
if((state_val_46683 === (3))){
var inst_46680 = (state_46682[(2)]);
var state_46682__$1 = state_46682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46682__$1,inst_46680);
} else {
if((state_val_46683 === (4))){
var inst_46672 = (state_46682[(2)]);
var inst_46673 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46674 = [new cljs.core.Keyword(null,"layout","layout",-2120940921)];
var inst_46675 = (new cljs.core.PersistentVector(null,1,(5),inst_46673,inst_46674,null));
var inst_46676 = cljs.core.partial.call(null,utimer.core.remove_by_id,inst_46672);
var inst_46677 = cljs.core.swap_BANG_.call(null,utimer.core.app_state,cljs.core.update_in,inst_46675,inst_46676);
var state_46682__$1 = (function (){var statearr_46685 = state_46682;
(statearr_46685[(7)] = inst_46677);

return statearr_46685;
})();
var statearr_46686_46693 = state_46682__$1;
(statearr_46686_46693[(2)] = null);

(statearr_46686_46693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__38070__auto___46691))
;
return ((function (switch__38026__auto__,c__38070__auto___46691){
return (function() {
var utimer$core$mixin_remove_timer_$_state_machine__38027__auto__ = null;
var utimer$core$mixin_remove_timer_$_state_machine__38027__auto____0 = (function (){
var statearr_46687 = [null,null,null,null,null,null,null,null];
(statearr_46687[(0)] = utimer$core$mixin_remove_timer_$_state_machine__38027__auto__);

(statearr_46687[(1)] = (1));

return statearr_46687;
});
var utimer$core$mixin_remove_timer_$_state_machine__38027__auto____1 = (function (state_46682){
while(true){
var ret_value__38028__auto__ = (function (){try{while(true){
var result__38029__auto__ = switch__38026__auto__.call(null,state_46682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38029__auto__;
}
break;
}
}catch (e46688){if((e46688 instanceof Object)){
var ex__38030__auto__ = e46688;
var statearr_46689_46694 = state_46682;
(statearr_46689_46694[(5)] = ex__38030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46695 = state_46682;
state_46682 = G__46695;
continue;
} else {
return ret_value__38028__auto__;
}
break;
}
});
utimer$core$mixin_remove_timer_$_state_machine__38027__auto__ = function(state_46682){
switch(arguments.length){
case 0:
return utimer$core$mixin_remove_timer_$_state_machine__38027__auto____0.call(this);
case 1:
return utimer$core$mixin_remove_timer_$_state_machine__38027__auto____1.call(this,state_46682);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$core$mixin_remove_timer_$_state_machine__38027__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$core$mixin_remove_timer_$_state_machine__38027__auto____0;
utimer$core$mixin_remove_timer_$_state_machine__38027__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$core$mixin_remove_timer_$_state_machine__38027__auto____1;
return utimer$core$mixin_remove_timer_$_state_machine__38027__auto__;
})()
;})(switch__38026__auto__,c__38070__auto___46691))
})();
var state__38072__auto__ = (function (){var statearr_46690 = f__38071__auto__.call(null);
(statearr_46690[(6)] = c__38070__auto___46691);

return statearr_46690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38072__auto__);
});})(c__38070__auto___46691))
);


return state;
})], null);
});
utimer.core.main = rum.core.build_defc.call(null,(function (app_state){
var map__46697 = rum.core.react.call(null,app_state);
var map__46697__$1 = ((((!((map__46697 == null)))?((((map__46697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46697):map__46697);
var layout = cljs.core.get.call(null,map__46697__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var attrs46696 = utimer.components.header.c_header.call(null,app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs46696))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["main-body"], null)], null),attrs46696)):({"className": "main-body"})),((cljs.core.map_QMARK_.call(null,attrs46696))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",({"className": "main-container"}),cljs.core.into_array.call(null,(function (){var iter__35837__auto__ = ((function (attrs46696,map__46697,map__46697__$1,layout){
return (function utimer$core$iter__46699(s__46700){
return (new cljs.core.LazySeq(null,((function (attrs46696,map__46697,map__46697__$1,layout){
return (function (){
var s__46700__$1 = s__46700;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__46700__$1);
if(temp__4657__auto__){
var s__46700__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46700__$2)){
var c__35835__auto__ = cljs.core.chunk_first.call(null,s__46700__$2);
var size__35836__auto__ = cljs.core.count.call(null,c__35835__auto__);
var b__46702 = cljs.core.chunk_buffer.call(null,size__35836__auto__);
if((function (){var i__46701 = (0);
while(true){
if((i__46701 < size__35836__auto__)){
var elem_data = cljs.core._nth.call(null,c__35835__auto__,i__46701);
cljs.core.chunk_append.call(null,b__46702,sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(elem_data),new cljs.core.Keyword(null,"flat","flat",577594262)))?utimer.components.flat_timer.c_flat_timer.call(null,elem_data,utimer.core.remove_chan):null)));

var G__46707 = (i__46701 + (1));
i__46701 = G__46707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46702),utimer$core$iter__46699.call(null,cljs.core.chunk_rest.call(null,s__46700__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46702),null);
}
} else {
var elem_data = cljs.core.first.call(null,s__46700__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(elem_data),new cljs.core.Keyword(null,"flat","flat",577594262)))?utimer.components.flat_timer.c_flat_timer.call(null,elem_data,utimer.core.remove_chan):null)),utimer$core$iter__46699.call(null,cljs.core.rest.call(null,s__46700__$2)));
}
} else {
return null;
}
break;
}
});})(attrs46696,map__46697,map__46697__$1,layout))
,null,null));
});})(attrs46696,map__46697,map__46697__$1,layout))
;
return iter__35837__auto__.call(null,layout);
})()),sablono.interpreter.interpret.call(null,utimer.components.adder.c_adder.call(null,app_state)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46696),React.createElement("div",({"className": "main-container"}),cljs.core.into_array.call(null,(function (){var iter__35837__auto__ = ((function (attrs46696,map__46697,map__46697__$1,layout){
return (function utimer$core$iter__46703(s__46704){
return (new cljs.core.LazySeq(null,((function (attrs46696,map__46697,map__46697__$1,layout){
return (function (){
var s__46704__$1 = s__46704;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__46704__$1);
if(temp__4657__auto__){
var s__46704__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46704__$2)){
var c__35835__auto__ = cljs.core.chunk_first.call(null,s__46704__$2);
var size__35836__auto__ = cljs.core.count.call(null,c__35835__auto__);
var b__46706 = cljs.core.chunk_buffer.call(null,size__35836__auto__);
if((function (){var i__46705 = (0);
while(true){
if((i__46705 < size__35836__auto__)){
var elem_data = cljs.core._nth.call(null,c__35835__auto__,i__46705);
cljs.core.chunk_append.call(null,b__46706,sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(elem_data),new cljs.core.Keyword(null,"flat","flat",577594262)))?utimer.components.flat_timer.c_flat_timer.call(null,elem_data,utimer.core.remove_chan):null)));

var G__46708 = (i__46705 + (1));
i__46705 = G__46708;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46706),utimer$core$iter__46703.call(null,cljs.core.chunk_rest.call(null,s__46704__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46706),null);
}
} else {
var elem_data = cljs.core.first.call(null,s__46704__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(elem_data),new cljs.core.Keyword(null,"flat","flat",577594262)))?utimer.components.flat_timer.c_flat_timer.call(null,elem_data,utimer.core.remove_chan):null)),utimer$core$iter__46703.call(null,cljs.core.rest.call(null,s__46704__$2)));
}
} else {
return null;
}
break;
}
});})(attrs46696,map__46697,map__46697__$1,layout))
,null,null));
});})(attrs46696,map__46697,map__46697__$1,layout))
;
return iter__35837__auto__.call(null,layout);
})()),sablono.interpreter.interpret.call(null,utimer.components.adder.c_adder.call(null,app_state)))], null)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [utimer.core.mixin_remove_timer.call(null),rum.core.reactive], null),"main");
utimer.core.render = (function utimer$core$render(){
return rum.core.mount.call(null,utimer.core.main.call(null,utimer.core.app_state),document.getElementById("app"));
});
