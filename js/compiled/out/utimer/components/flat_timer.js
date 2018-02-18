// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.components.flat_timer');
goog.require('cljs.core');
goog.require('goog.functions');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('utimer.clock');
goog.require('utimer.timer');
goog.require('utimer.display');
goog.require('utimer.alarm');
goog.require('utimer.input_timer_parser');
goog.require('utimer.components.utils');
goog.require('utimer.title_updater');
utimer.components.flat_timer.editable_label = (function utimer$components$flat_timer$editable_label(default_text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),default_text,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),false], null);
});
utimer.components.flat_timer.editable_time = (function utimer$components$flat_timer$editable_time(default_text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),default_text,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),false], null);
});
utimer.components.flat_timer.display_timeleft = (function utimer$components$flat_timer$display_timeleft(clock){
var time = utimer.input_timer_parser.duration__GT_time.call(null,utimer.clock.timeleft_ms.call(null,clock));
return utimer.display.display_timeleft.call(null,time);
});
utimer.components.flat_timer.display_duration = (function utimer$components$flat_timer$display_duration(clock){
var time = utimer.input_timer_parser.duration__GT_time.call(null,utimer.clock.duration.call(null,clock));
return utimer.display.display_timeleft.call(null,time);
});
utimer.components.flat_timer.display_timeleft_class = (function utimer$components$flat_timer$display_timeleft_class(clock){
var time = utimer.input_timer_parser.duration__GT_time.call(null,utimer.clock.timeleft_ms.call(null,clock));
return utimer.display.display_class.call(null,time);
});
utimer.components.flat_timer.display_duration_class = (function utimer$components$flat_timer$display_duration_class(clock){
var time = utimer.input_timer_parser.duration__GT_time.call(null,utimer.clock.duration.call(null,clock));
return utimer.display.display_class.call(null,time);
});
utimer.components.flat_timer.mixin_flat_timer = (function utimer$components$flat_timer$mixin_flat_timer(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
var react_component_42293 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var dom_node_42294 = ReactDOM.findDOMNode(react_component_42293);
var temp__4657__auto___42295 = document.querySelector(".flat-timer-edit-mode>input");
if(cljs.core.truth_(temp__4657__auto___42295)){
var elem_42296 = temp__4657__auto___42295;
elem_42296.focus();
} else {
}

var temp__4657__auto___42297 = document.querySelector(".flat-timer-input>input");
if(cljs.core.truth_(temp__4657__auto___42297)){
var elem_42298 = temp__4657__auto___42297;
elem_42298.focus();
} else {
}

return state;
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var element = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var update_chan = cljs.core.nth.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(2));
var _STAR_label_text = new cljs.core.Keyword("utimer.components.flat-timer","*label-text","utimer.components.flat-timer/*label-text",-895599819).cljs$core$IFn$_invoke$arity$1(state);
var clock = new cljs.core.Keyword(null,"clock","clock",-894301127).cljs$core$IFn$_invoke$arity$1(state);
var alarm = utimer.components.utils.get_alarm.call(null,state);
var updater_interval_id = setInterval(((function (element,update_chan,_STAR_label_text,clock,alarm){
return (function (){
return cljs.core.async.put_BANG_.call(null,update_chan,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_label_text)),new cljs.core.Keyword(null,"progress","progress",244323547),utimer.clock.progress.call(null,clock),new cljs.core.Keyword(null,"duration","duration",1444101068),utimer.clock.duration.call(null,clock),new cljs.core.Keyword(null,"started?","started?",-1301062863),utimer.clock.started_QMARK_.call(null,clock),new cljs.core.Keyword(null,"finished?","finished?",2067288119),utimer.clock.finished_QMARK_.call(null,clock)], null));
});})(element,update_chan,_STAR_label_text,clock,alarm))
,utimer.title_updater.timer_updater_interval);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("utimer.components.flat-timer","updater-interval-id","utimer.components.flat-timer/updater-interval-id",525521564),updater_interval_id);
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var element = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var update_chan = cljs.core.nth.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(2));
clearTimeout(new cljs.core.Keyword("utimer.components.flat-timer","updater-interval-id","utimer.components.flat-timer/updater-interval-id",525521564).cljs$core$IFn$_invoke$arity$1(state));

cljs.core.async.put_BANG_.call(null,update_chan,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.Keyword(null,"label","label",1718410804),"",new cljs.core.Keyword(null,"progress","progress",244323547),(100),new cljs.core.Keyword(null,"duration","duration",1444101068),(100),new cljs.core.Keyword(null,"started?","started?",-1301062863),false,new cljs.core.Keyword(null,"finished?","finished?",2067288119),true], null));

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("utimer.components.flat-timer","updater-interval-id","utimer.components.flat-timer/updater-interval-id",525521564));
})], null);
});
utimer.components.flat_timer.get_alarm = (function utimer$components$flat_timer$get_alarm(state){
return utimer.components.utils.get_alarm.call(null,state);
});
utimer.components.flat_timer.c_flat_timer = rum.core.build_defcs.call(null,(function (state,element,remove_chan,update_chan,p__42299){
var vec__42300 = p__42299;
var bcast_out = cljs.core.nth.call(null,vec__42300,(0),null);
var _ = cljs.core.nth.call(null,vec__42300,(1),null);
var clock = new cljs.core.Keyword(null,"clock","clock",-894301127).cljs$core$IFn$_invoke$arity$1(state);
var alarm = utimer.components.flat_timer.get_alarm.call(null,state);
var progress_s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.clock.percent_progress.call(null,clock)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('');
var _STAR_label_text = new cljs.core.Keyword("utimer.components.flat-timer","*label-text","utimer.components.flat-timer/*label-text",-895599819).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_time_text = new cljs.core.Keyword("utimer.components.flat-timer","*time-text","utimer.components.flat-timer/*time-text",2111142535).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_finished_once_QMARK_ = new cljs.core.Keyword("utimer.components.flat-timer","*finished-once?","utimer.components.flat-timer/*finished-once?",-952791737).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_extended_options = new cljs.core.Keyword("utimer.components.flat-timer","*extended-options","utimer.components.flat-timer/*extended-options",1837396324).cljs$core$IFn$_invoke$arity$1(state);
var alarm_42432__$1 = utimer.components.flat_timer.get_alarm.call(null,state);
utimer.alarm.set_loop_BANG_.call(null,alarm_42432__$1,new cljs.core.Keyword(null,"loop?","loop?",457687798).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)));

utimer.alarm.set_sound_BANG_.call(null,alarm_42432__$1,new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)));

if(cljs.core.truth_(utimer.clock.finished_QMARK_.call(null,clock))){
utimer.alarm.play_BANG_.call(null,alarm);
} else {
utimer.alarm.stop_BANG_.call(null,alarm);

cljs.core.reset_BANG_.call(null,_STAR_finished_once_QMARK_,false);
}

if(cljs.core.truth_((function (){var and__35036__auto__ = utimer.clock.finished_QMARK_.call(null,clock);
if(cljs.core.truth_(and__35036__auto__)){
return cljs.core.not.call(null,cljs.core.deref.call(null,_STAR_finished_once_QMARK_));
} else {
return and__35036__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,_STAR_finished_once_QMARK_,true);

var temp__4657__auto___42433 = new cljs.core.Keyword(null,"prog-start-label","prog-start-label",-373437096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options));
if(cljs.core.truth_(temp__4657__auto___42433)){
var prog_start_label_42434 = temp__4657__auto___42433;
if(cljs.core.empty_QMARK_.call(null,prog_start_label_42434)){
} else {
cljs.core.async.put_BANG_.call(null,bcast_out,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"start-timer-with-label","start-timer-with-label",-1613161304),new cljs.core.Keyword(null,"label","label",1718410804),prog_start_label_42434], null));
}
} else {
}

var temp__4657__auto___42435 = new cljs.core.Keyword(null,"prog-close-after-msec","prog-close-after-msec",-1789566241).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options));
if(cljs.core.truth_(temp__4657__auto___42435)){
var prog_close_after_msec_42436 = temp__4657__auto___42435;
var c__39213__auto___42437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39213__auto___42437,prog_close_after_msec_42436,temp__4657__auto___42435,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (){
var f__39214__auto__ = (function (){var switch__39169__auto__ = ((function (c__39213__auto___42437,prog_close_after_msec_42436,temp__4657__auto___42435,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (state_42313){
var state_val_42314 = (state_42313[(1)]);
if((state_val_42314 === (1))){
var inst_42303 = cljs.core.async.timeout.call(null,prog_close_after_msec_42436);
var state_42313__$1 = state_42313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42313__$1,(2),inst_42303);
} else {
if((state_val_42314 === (2))){
var inst_42305 = (state_42313[(2)]);
var inst_42306 = utimer.alarm.stop_BANG_.call(null,alarm);
var inst_42307 = utimer.clock.stop_BANG_.call(null,clock);
var inst_42308 = utimer.clock.restart_BANG_.call(null,inst_42307);
var inst_42309 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element);
var state_42313__$1 = (function (){var statearr_42315 = state_42313;
(statearr_42315[(7)] = inst_42308);

(statearr_42315[(8)] = inst_42306);

(statearr_42315[(9)] = inst_42305);

return statearr_42315;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42313__$1,(3),remove_chan,inst_42309);
} else {
if((state_val_42314 === (3))){
var inst_42311 = (state_42313[(2)]);
var state_42313__$1 = state_42313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42313__$1,inst_42311);
} else {
return null;
}
}
}
});})(c__39213__auto___42437,prog_close_after_msec_42436,temp__4657__auto___42435,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
;
return ((function (switch__39169__auto__,c__39213__auto___42437,prog_close_after_msec_42436,temp__4657__auto___42435,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function() {
var utimer$components$flat_timer$state_machine__39170__auto__ = null;
var utimer$components$flat_timer$state_machine__39170__auto____0 = (function (){
var statearr_42316 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42316[(0)] = utimer$components$flat_timer$state_machine__39170__auto__);

(statearr_42316[(1)] = (1));

return statearr_42316;
});
var utimer$components$flat_timer$state_machine__39170__auto____1 = (function (state_42313){
while(true){
var ret_value__39171__auto__ = (function (){try{while(true){
var result__39172__auto__ = switch__39169__auto__.call(null,state_42313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39172__auto__;
}
break;
}
}catch (e42317){if((e42317 instanceof Object)){
var ex__39173__auto__ = e42317;
var statearr_42318_42438 = state_42313;
(statearr_42318_42438[(5)] = ex__39173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42439 = state_42313;
state_42313 = G__42439;
continue;
} else {
return ret_value__39171__auto__;
}
break;
}
});
utimer$components$flat_timer$state_machine__39170__auto__ = function(state_42313){
switch(arguments.length){
case 0:
return utimer$components$flat_timer$state_machine__39170__auto____0.call(this);
case 1:
return utimer$components$flat_timer$state_machine__39170__auto____1.call(this,state_42313);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$components$flat_timer$state_machine__39170__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$components$flat_timer$state_machine__39170__auto____0;
utimer$components$flat_timer$state_machine__39170__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$components$flat_timer$state_machine__39170__auto____1;
return utimer$components$flat_timer$state_machine__39170__auto__;
})()
;})(switch__39169__auto__,c__39213__auto___42437,prog_close_after_msec_42436,temp__4657__auto___42435,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
})();
var state__39215__auto__ = (function (){var statearr_42319 = f__39214__auto__.call(null);
(statearr_42319[(6)] = c__39213__auto___42437);

return statearr_42319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39215__auto__);
});})(c__39213__auto___42437,prog_close_after_msec_42436,temp__4657__auto___42435,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
);

} else {
}

var temp__4657__auto___42440 = new cljs.core.Keyword(null,"prog-reset-after-msec","prog-reset-after-msec",368109610).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options));
if(cljs.core.truth_(temp__4657__auto___42440)){
var prog_reset_after_msec_42441 = temp__4657__auto___42440;
var c__39213__auto___42442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39213__auto___42442,prog_reset_after_msec_42441,temp__4657__auto___42440,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (){
var f__39214__auto__ = (function (){var switch__39169__auto__ = ((function (c__39213__auto___42442,prog_reset_after_msec_42441,temp__4657__auto___42440,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (state_42327){
var state_val_42328 = (state_42327[(1)]);
if((state_val_42328 === (1))){
var inst_42320 = cljs.core.async.timeout.call(null,prog_reset_after_msec_42441);
var state_42327__$1 = state_42327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42327__$1,(2),inst_42320);
} else {
if((state_val_42328 === (2))){
var inst_42322 = (state_42327[(2)]);
var inst_42323 = utimer.alarm.stop_BANG_.call(null,alarm);
var inst_42324 = utimer.clock.stop_BANG_.call(null,clock);
var inst_42325 = utimer.clock.restart_BANG_.call(null,inst_42324);
var state_42327__$1 = (function (){var statearr_42329 = state_42327;
(statearr_42329[(7)] = inst_42323);

(statearr_42329[(8)] = inst_42322);

return statearr_42329;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42327__$1,inst_42325);
} else {
return null;
}
}
});})(c__39213__auto___42442,prog_reset_after_msec_42441,temp__4657__auto___42440,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
;
return ((function (switch__39169__auto__,c__39213__auto___42442,prog_reset_after_msec_42441,temp__4657__auto___42440,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function() {
var utimer$components$flat_timer$state_machine__39170__auto__ = null;
var utimer$components$flat_timer$state_machine__39170__auto____0 = (function (){
var statearr_42330 = [null,null,null,null,null,null,null,null,null];
(statearr_42330[(0)] = utimer$components$flat_timer$state_machine__39170__auto__);

(statearr_42330[(1)] = (1));

return statearr_42330;
});
var utimer$components$flat_timer$state_machine__39170__auto____1 = (function (state_42327){
while(true){
var ret_value__39171__auto__ = (function (){try{while(true){
var result__39172__auto__ = switch__39169__auto__.call(null,state_42327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39172__auto__;
}
break;
}
}catch (e42331){if((e42331 instanceof Object)){
var ex__39173__auto__ = e42331;
var statearr_42332_42443 = state_42327;
(statearr_42332_42443[(5)] = ex__39173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42444 = state_42327;
state_42327 = G__42444;
continue;
} else {
return ret_value__39171__auto__;
}
break;
}
});
utimer$components$flat_timer$state_machine__39170__auto__ = function(state_42327){
switch(arguments.length){
case 0:
return utimer$components$flat_timer$state_machine__39170__auto____0.call(this);
case 1:
return utimer$components$flat_timer$state_machine__39170__auto____1.call(this,state_42327);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$components$flat_timer$state_machine__39170__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$components$flat_timer$state_machine__39170__auto____0;
utimer$components$flat_timer$state_machine__39170__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$components$flat_timer$state_machine__39170__auto____1;
return utimer$components$flat_timer$state_machine__39170__auto__;
})()
;})(switch__39169__auto__,c__39213__auto___42442,prog_reset_after_msec_42441,temp__4657__auto___42440,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
})();
var state__39215__auto__ = (function (){var statearr_42333 = f__39214__auto__.call(null);
(statearr_42333[(6)] = c__39213__auto___42442);

return statearr_42333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39215__auto__);
});})(c__39213__auto___42442,prog_reset_after_msec_42441,temp__4657__auto___42440,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
);

} else {
}
} else {
}

return React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ut-timer","flat-timer",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("timer-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element))].join('')], null))}),React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flat-timer-main",(cljs.core.truth_(utimer.clock.finished_QMARK_.call(null,clock))?"anim-color-reversal-normal":null)], null))}),React.createElement("svg",({"width": "100%", "height": "100%", "className": "flat-timer-progress"}),React.createElement("rect",({"width": "100%", "height": "100%", "fill": "rgb(196,198,166)", "className": "flat-background"})),React.createElement("rect",({"width": progress_s, "height": "100%", "fill": "rgb(215,194,157)", "className": "svg-timer-progress"})),React.createElement("rect",({"x": progress_s, "width": "1", "height": "100%", "fill": "rgba(0,0,0,0.1)", "className": "svg-timer-progress-tick"}))),React.createElement("div",({"className": "flat-timer-container"}),React.createElement("div",({"className": "flat-timer-left-pane"}),React.createElement("div",({"className": "flat-timer-button play-pause"}),React.createElement("div",({"onClick": ((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (){
if(cljs.core.truth_(utimer.clock.started_QMARK_.call(null,clock))){
return utimer.clock.stop_BANG_.call(null,clock);
} else {
if(cljs.core.truth_(utimer.clock.finished_QMARK_.call(null,clock))){
return utimer.clock.restart_BANG_.call(null,clock);
} else {
return utimer.clock.start_BANG_.call(null,clock);

}
}
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
, "className": "material-icons noselect"}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(utimer.clock.started_QMARK_.call(null,clock))?"pause":(cljs.core.truth_(utimer.clock.finished_QMARK_.call(null,clock))?"stop":"play_arrow"
)))))),React.createElement("div",({"className": "flat-timer-middle-pane"}),(function (){var attrs42336 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_label_text))))?(function (){var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_label_text));
var has_text_QMARK_ = (cljs.core.count.call(null,text) > (0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flat-timer-label","div.flat-timer-label",2056356862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((has_text_QMARK_)?null:"no-label"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (text,has_text_QMARK_,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (){
return cljs.core.swap_BANG_.call(null,_STAR_label_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),true);
});})(text,has_text_QMARK_,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
], null),((!(has_text_QMARK_))?"No Label":text)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.material-icons.noselect","div.material-icons.noselect",519407819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (text,has_text_QMARK_,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (){
return cljs.core.swap_BANG_.call(null,_STAR_label_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),true);
});})(text,has_text_QMARK_,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
], null),"edit"], null)], null);
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flat-timer-edit-mode.noselect","div.flat-timer-edit-mode.noselect",2053657454),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_label_text)),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (e){
var this$ = e.target;
return setTimeout(((function (this$,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (){
return (this$["selectionStart"] = (10000));
});})(this$,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
,(0));
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (e){
return cljs.core.swap_BANG_.call(null,_STAR_label_text,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),e.target.value);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (e){
var key = e.key;
if((cljs.core._EQ_.call(null,key,"Enter")) || (cljs.core._EQ_.call(null,key,"Escape"))){
return cljs.core.swap_BANG_.call(null,_STAR_label_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),false);
} else {
return null;
}
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.material-icons","div.material-icons",227325836),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (){
return cljs.core.swap_BANG_.call(null,_STAR_label_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),false);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
], null),"check"], null)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42336))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flat-timer-middle-container","noselect"], null)], null),attrs42336)):({"className": "flat-timer-middle-container noselect"})),((cljs.core.map_QMARK_.call(null,attrs42336))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42336)], null)));
})(),(function (){var attrs42337 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_time_text))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flat-timer-display-container","div.flat-timer-display-container",-1631106901),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (){
return cljs.core.swap_BANG_.call(null,_STAR_time_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),true);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not.call(null,utimer.clock.finished_QMARK_.call(null,clock)))?utimer.components.flat_timer.display_timeleft_class.call(null,clock):utimer.components.flat_timer.display_duration_class.call(null,clock))], null),((cljs.core.not.call(null,utimer.clock.finished_QMARK_.call(null,clock)))?utimer.components.flat_timer.display_timeleft.call(null,clock):utimer.components.flat_timer.display_duration.call(null,clock))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_time_text)),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (e){
var this$ = e.target;
return setTimeout(((function (this$,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (){
return (this$["selectionStart"] = (10000));
});})(this$,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
,(0));
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (e){
var val = e.target.value;
return cljs.core.swap_BANG_.call(null,_STAR_time_text,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),val);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (e){
var key = e.key;
var G__42338 = key;
switch (G__42338) {
case "Enter":
cljs.core.swap_BANG_.call(null,_STAR_time_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),false);

var G__42339 = clock;
var G__42339__$1 = ((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_time_text)))))?utimer.clock.change_BANG_.call(null,G__42339,utimer.input_timer_parser.parse__GT_duration.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_time_text)))):G__42339);
var G__42339__$2 = utimer.clock.restart_BANG_.call(null,G__42339__$1)
;
return utimer.clock.stop_BANG_.call(null,G__42339__$2);


break;
case "Escape":
return cljs.core.swap_BANG_.call(null,_STAR_time_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),false);

break;
default:
return null;

}
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
], null)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42337))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flat-timer-input"], null)], null),attrs42337)):({"className": "flat-timer-input"})),((cljs.core.map_QMARK_.call(null,attrs42337))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42337)], null)));
})(),React.createElement("div",({"className": "flat-timer-middle-container noselect extended-options-button"}),React.createElement("div",({"className": "flat-timer-label"}),React.createElement("div",({"onClick": ((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (){
return cljs.core.swap_BANG_.call(null,_STAR_extended_options,cljs.core.update,new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.not);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
, "title": (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)))?"Hide Options":"Show Options"), "className": "material-icons noselect"}),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)))?"expand_less":"dehaze"))))),React.createElement("div",({"className": "flat-timer-right-pane"}),React.createElement("div",({"onClick": ((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (){
return cljs.core.async.put_BANG_.call(null,remove_chan,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element));
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
, "title": "Close Timer", "className": "flat-timer-button close"}),React.createElement("div",({"className": "material-icons noselect"}),"close")),React.createElement("div",({"onClick": ((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (){
return utimer.clock.restart_BANG_.call(null,utimer.clock.stop_BANG_.call(null,clock));
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
, "title": (cljs.core.truth_(utimer.clock.progressed_QMARK_.call(null,clock))?"Restart Timer":null), "className": "flat-timer-button restart"}),React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["material-icons","noselect",(cljs.core.truth_(utimer.clock.progressed_QMARK_.call(null,clock))?null:"button-fade")], null))}),"repeat"))))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flat-timer-extended-options.anim-expand-vertical-normal","div.flat-timer-extended-options.anim-expand-vertical-normal",-1181375580),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flat-timer-extended-options-container","div.flat-timer-extended-options-container",91718390),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Alarm Settings"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".alarm-sound-setting",".alarm-sound-setting",-1430141014),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Alarm Sound: "], null),new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (e){
return cljs.core.swap_BANG_.call(null,_STAR_extended_options,cljs.core.assoc,new cljs.core.Keyword(null,"sound","sound",-2127407070),e.target.value);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),"None"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/analog_alarm.mp3"], null),"Analog Alarm"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/chinese_gong.mp3"], null),"Chinese Gong"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/dixie_horn.mp3"], null),"Dixie Horn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/fog_horn.mp3"], null),"Fog Horn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/front_desk_bell.mp3"], null),"Front Desk Bell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/metal_gong.mp3"], null),"Metal Gong"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/missle_alert.mp3"], null),"Missle Alert"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/news_intro.mp3"], null),"News Intro"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/police_whistle.mp3"], null),"Police Whistle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/railroad_crossing.mp3"], null),"Railroad Crossing"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/school_bell.mp3"], null),"School Bell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/shotgun.mp3"], null),"Shotgun"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/speaker_pulse.mp3"], null),"Speaker Pulse"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/train_whistle.mp3"], null),"Train Whistle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/war_alarm.mp3"], null),"War Alarm"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.mat-button","button.mat-button",1967151257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (){
return utimer.alarm.test_play_BANG_.call(null,alarm);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
], null),"Test Alarm"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".alarm-sound-setting",".alarm-sound-setting",-1430141014),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Alarm Repeat?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"defaultChecked","defaultChecked",-834047344),new cljs.core.Keyword(null,"loop?","loop?",457687798).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (e){
var val = e.target.checked;
return cljs.core.swap_BANG_.call(null,_STAR_extended_options,cljs.core.assoc,new cljs.core.Keyword(null,"loop?","loop?",457687798),val);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Programmable Settings"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".programmable-setting",".programmable-setting",714735333),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"On Finish - Start Timer with Label: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Label Name",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"prog-start-label","prog-start-label",-373437096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (e){
return cljs.core.swap_BANG_.call(null,_STAR_extended_options,cljs.core.assoc,new cljs.core.Keyword(null,"prog-start-label","prog-start-label",-373437096),e.target.value);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.mat-button","button.mat-button",1967151257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (){
return cljs.core.async.put_BANG_.call(null,bcast_out,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"start-timer-with-label","start-timer-with-label",-1613161304),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"prog-start-label","prog-start-label",-373437096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options))], null));
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
], null),"Test Label"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".programmable-setting",".programmable-setting",714735333),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"On Finish - Close this Timer: "], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"prog-close-after-msec","prog-close-after-msec",-1789566241).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (e){
return cljs.core.swap_BANG_.call(null,_STAR_extended_options,cljs.core.assoc,new cljs.core.Keyword(null,"prog-close-after-msec","prog-close-after-msec",-1789566241),e.target.value);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),"Never"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(5000)], null),"After 5 Seconds"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(10000)], null),"After 10 Seconds"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(30000)], null),"After 30 Seconds"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".programmable-setting",".programmable-setting",714735333),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"On Finish - Reset this Timer: "], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"prog-reset-after-msec","prog-reset-after-msec",368109610).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_){
return (function (e){
return cljs.core.swap_BANG_.call(null,_STAR_extended_options,cljs.core.assoc,new cljs.core.Keyword(null,"prog-reset-after-msec","prog-reset-after-msec",368109610),e.target.value);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42300,bcast_out,_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),"Never"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(5000)], null),"After 5 Seconds"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(10000)], null),"After 10 Seconds"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(30000)], null),"After 30 Seconds"], null)], null)], null)], null)], null):null)));
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (element){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element);
})], null),rum.core.reactive,utimer.components.utils.mixin_alarm.call(null),utimer.components.utils.mixin_clock.call(null),utimer.components.flat_timer.mixin_flat_timer.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var element = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var _STAR_time_text = cljs.core.atom.call(null,utimer.components.flat_timer.editable_time.call(null,cljs.core.get.call(null,element,new cljs.core.Keyword(null,"initial","initial",1854648214),"")));
var _STAR_label_text = cljs.core.atom.call(null,utimer.components.flat_timer.editable_label.call(null,cljs.core.get.call(null,element,new cljs.core.Keyword(null,"label","label",1718410804),"")));
var _STAR_finished_once_QMARK_ = cljs.core.atom.call(null,false);
var _STAR_extended_options = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"loop?","loop?",457687798),false,new cljs.core.Keyword(null,"sound","sound",-2127407070),utimer.alarm.default_alarm_sound,new cljs.core.Keyword(null,"test?","test?",-1078989737),false,new cljs.core.Keyword(null,"prog-start-label","prog-start-label",-373437096),"",new cljs.core.Keyword(null,"prog-close-after-msec","prog-close-after-msec",-1789566241),null,new cljs.core.Keyword(null,"prog-reset-after-msec","prog-reset-after-msec",368109610),null], null));
cljs.core.add_watch.call(null,_STAR_time_text,new cljs.core.Keyword("utimer.components.flat-timer","*time-text","utimer.components.flat-timer/*time-text",2111142535),((function (component,element,_STAR_time_text,_STAR_label_text,_STAR_finished_once_QMARK_,_STAR_extended_options){
return (function (){
return rum.core.request_render.call(null,component);
});})(component,element,_STAR_time_text,_STAR_label_text,_STAR_finished_once_QMARK_,_STAR_extended_options))
);

cljs.core.add_watch.call(null,_STAR_label_text,new cljs.core.Keyword("utimer.components.flat-timer","*label-text","utimer.components.flat-timer/*label-text",-895599819),((function (component,element,_STAR_time_text,_STAR_label_text,_STAR_finished_once_QMARK_,_STAR_extended_options){
return (function (){
return rum.core.request_render.call(null,component);
});})(component,element,_STAR_time_text,_STAR_label_text,_STAR_finished_once_QMARK_,_STAR_extended_options))
);

cljs.core.add_watch.call(null,_STAR_finished_once_QMARK_,new cljs.core.Keyword("utimer.components.flat-timer","*finished-once?","utimer.components.flat-timer/*finished-once?",-952791737),((function (component,element,_STAR_time_text,_STAR_label_text,_STAR_finished_once_QMARK_,_STAR_extended_options){
return (function (){
return rum.core.request_render.call(null,component);
});})(component,element,_STAR_time_text,_STAR_label_text,_STAR_finished_once_QMARK_,_STAR_extended_options))
);

cljs.core.add_watch.call(null,_STAR_extended_options,new cljs.core.Keyword("utimer.components.flat-timer","*extended-options","utimer.components.flat-timer/*extended-options",1837396324),((function (component,element,_STAR_time_text,_STAR_label_text,_STAR_finished_once_QMARK_,_STAR_extended_options){
return (function (){
return rum.core.request_render.call(null,component);
});})(component,element,_STAR_time_text,_STAR_label_text,_STAR_finished_once_QMARK_,_STAR_extended_options))
);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword("utimer.components.flat-timer","*time-text","utimer.components.flat-timer/*time-text",2111142535),_STAR_time_text,new cljs.core.Keyword("utimer.components.flat-timer","*label-text","utimer.components.flat-timer/*label-text",-895599819),_STAR_label_text,new cljs.core.Keyword("utimer.components.flat-timer","*finished-once?","utimer.components.flat-timer/*finished-once?",-952791737),_STAR_finished_once_QMARK_,new cljs.core.Keyword("utimer.components.flat-timer","*extended-options","utimer.components.flat-timer/*extended-options",1837396324),_STAR_extended_options);
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var vec__42342_42446 = cljs.core.nth.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(3));
var __42447 = cljs.core.nth.call(null,vec__42342_42446,(0),null);
var bcast_in_42448 = cljs.core.nth.call(null,vec__42342_42446,(1),null);
var element_42449 = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var clock_42450 = new cljs.core.Keyword(null,"clock","clock",-894301127).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_label_text_42451 = new cljs.core.Keyword("utimer.components.flat-timer","*label-text","utimer.components.flat-timer/*label-text",-895599819).cljs$core$IFn$_invoke$arity$1(state);
var c__39213__auto___42452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39213__auto___42452,vec__42342_42446,__42447,bcast_in_42448,element_42449,clock_42450,_STAR_label_text_42451){
return (function (){
var f__39214__auto__ = (function (){var switch__39169__auto__ = ((function (c__39213__auto___42452,vec__42342_42446,__42447,bcast_in_42448,element_42449,clock_42450,_STAR_label_text_42451){
return (function (state_42399){
var state_val_42400 = (state_42399[(1)]);
if((state_val_42400 === (7))){
var inst_42395 = (state_42399[(2)]);
var state_42399__$1 = state_42399;
var statearr_42401_42453 = state_42399__$1;
(statearr_42401_42453[(2)] = inst_42395);

(statearr_42401_42453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42400 === (1))){
var state_42399__$1 = state_42399;
var statearr_42402_42454 = state_42399__$1;
(statearr_42402_42454[(2)] = null);

(statearr_42402_42454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42400 === (4))){
var inst_42347 = (state_42399[(7)]);
var inst_42347__$1 = (state_42399[(2)]);
var state_42399__$1 = (function (){var statearr_42403 = state_42399;
(statearr_42403[(7)] = inst_42347__$1);

return statearr_42403;
})();
if(cljs.core.truth_(inst_42347__$1)){
var statearr_42404_42455 = state_42399__$1;
(statearr_42404_42455[(1)] = (5));

} else {
var statearr_42405_42456 = state_42399__$1;
(statearr_42405_42456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42400 === (15))){
var state_42399__$1 = state_42399;
var statearr_42406_42457 = state_42399__$1;
(statearr_42406_42457[(2)] = null);

(statearr_42406_42457[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42400 === (13))){
var inst_42379 = (state_42399[(2)]);
var state_42399__$1 = state_42399;
var statearr_42407_42458 = state_42399__$1;
(statearr_42407_42458[(2)] = inst_42379);

(statearr_42407_42458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42400 === (6))){
var state_42399__$1 = state_42399;
var statearr_42408_42459 = state_42399__$1;
(statearr_42408_42459[(2)] = null);

(statearr_42408_42459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42400 === (17))){
var state_42399__$1 = state_42399;
var statearr_42409_42460 = state_42399__$1;
(statearr_42409_42460[(2)] = null);

(statearr_42409_42460[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42400 === (3))){
var inst_42397 = (state_42399[(2)]);
var state_42399__$1 = state_42399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42399__$1,inst_42397);
} else {
if((state_val_42400 === (12))){
var inst_42347 = (state_42399[(7)]);
var inst_42369 = new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(inst_42347);
var inst_42370 = cljs.core._EQ_.call(null,inst_42369,new cljs.core.Keyword(null,"echo","echo",1461973457));
var state_42399__$1 = state_42399;
if(inst_42370){
var statearr_42410_42461 = state_42399__$1;
(statearr_42410_42461[(1)] = (14));

} else {
var statearr_42411_42462 = state_42399__$1;
(statearr_42411_42462[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42400 === (2))){
var state_42399__$1 = state_42399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42399__$1,(4),bcast_in_42448);
} else {
if((state_val_42400 === (19))){
var inst_42392 = (state_42399[(2)]);
var state_42399__$1 = state_42399;
var statearr_42412_42463 = state_42399__$1;
(statearr_42412_42463[(2)] = inst_42392);

(statearr_42412_42463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42400 === (11))){
var inst_42366 = utimer.clock.restart_BANG_.call(null,clock_42450);
var inst_42367 = utimer.clock.start_BANG_.call(null,inst_42366);
var state_42399__$1 = state_42399;
var statearr_42413_42464 = state_42399__$1;
(statearr_42413_42464[(2)] = inst_42367);

(statearr_42413_42464[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42400 === (9))){
var inst_42347 = (state_42399[(7)]);
var inst_42358 = new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(inst_42347);
var inst_42359 = cljs.core._EQ_.call(null,inst_42358,new cljs.core.Keyword(null,"start-timer-with-label","start-timer-with-label",-1613161304));
var inst_42360 = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(inst_42347);
var inst_42361 = cljs.core.deref.call(null,_STAR_label_text_42451);
var inst_42362 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inst_42361);
var inst_42363 = cljs.core._EQ_.call(null,inst_42360,inst_42362);
var inst_42364 = (inst_42359) && (inst_42363);
var state_42399__$1 = state_42399;
if(cljs.core.truth_(inst_42364)){
var statearr_42414_42465 = state_42399__$1;
(statearr_42414_42465[(1)] = (11));

} else {
var statearr_42415_42466 = state_42399__$1;
(statearr_42415_42466[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42400 === (5))){
var inst_42347 = (state_42399[(7)]);
var inst_42349 = new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(inst_42347);
var inst_42350 = cljs.core._EQ_.call(null,inst_42349,new cljs.core.Keyword(null,"unmount","unmount",-1779083333));
var inst_42351 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element_42449);
var inst_42352 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_42347);
var inst_42353 = cljs.core._EQ_.call(null,inst_42351,inst_42352);
var inst_42354 = (inst_42350) && (inst_42353);
var state_42399__$1 = state_42399;
if(cljs.core.truth_(inst_42354)){
var statearr_42416_42467 = state_42399__$1;
(statearr_42416_42467[(1)] = (8));

} else {
var statearr_42417_42468 = state_42399__$1;
(statearr_42417_42468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42400 === (14))){
var inst_42347 = (state_42399[(7)]);
var inst_42372 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element_42449);
var inst_42373 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inst_42347);
var inst_42374 = cljs.core.println.call(null,inst_42372," - Echo - ",inst_42373);
var state_42399__$1 = state_42399;
var statearr_42418_42469 = state_42399__$1;
(statearr_42418_42469[(2)] = inst_42374);

(statearr_42418_42469[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42400 === (16))){
var inst_42377 = (state_42399[(2)]);
var state_42399__$1 = state_42399;
var statearr_42419_42470 = state_42399__$1;
(statearr_42419_42470[(2)] = inst_42377);

(statearr_42419_42470[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42400 === (10))){
var inst_42347 = (state_42399[(7)]);
var inst_42381 = (state_42399[(2)]);
var inst_42382 = new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(inst_42347);
var inst_42383 = cljs.core._EQ_.call(null,inst_42382,new cljs.core.Keyword(null,"unmount","unmount",-1779083333));
var inst_42384 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element_42449);
var inst_42385 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_42347);
var inst_42386 = cljs.core._EQ_.call(null,inst_42384,inst_42385);
var inst_42387 = (inst_42383) && (inst_42386);
var state_42399__$1 = (function (){var statearr_42420 = state_42399;
(statearr_42420[(8)] = inst_42381);

return statearr_42420;
})();
if(cljs.core.truth_(inst_42387)){
var statearr_42421_42471 = state_42399__$1;
(statearr_42421_42471[(1)] = (17));

} else {
var statearr_42422_42472 = state_42399__$1;
(statearr_42422_42472[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42400 === (18))){
var state_42399__$1 = state_42399;
var statearr_42423_42473 = state_42399__$1;
(statearr_42423_42473[(2)] = null);

(statearr_42423_42473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42400 === (8))){
var inst_42356 = cljs.core.async.close_BANG_.call(null,bcast_in_42448);
var state_42399__$1 = state_42399;
var statearr_42424_42474 = state_42399__$1;
(statearr_42424_42474[(2)] = inst_42356);

(statearr_42424_42474[(1)] = (10));


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
}
}
}
}
});})(c__39213__auto___42452,vec__42342_42446,__42447,bcast_in_42448,element_42449,clock_42450,_STAR_label_text_42451))
;
return ((function (switch__39169__auto__,c__39213__auto___42452,vec__42342_42446,__42447,bcast_in_42448,element_42449,clock_42450,_STAR_label_text_42451){
return (function() {
var utimer$components$flat_timer$state_machine__39170__auto__ = null;
var utimer$components$flat_timer$state_machine__39170__auto____0 = (function (){
var statearr_42425 = [null,null,null,null,null,null,null,null,null];
(statearr_42425[(0)] = utimer$components$flat_timer$state_machine__39170__auto__);

(statearr_42425[(1)] = (1));

return statearr_42425;
});
var utimer$components$flat_timer$state_machine__39170__auto____1 = (function (state_42399){
while(true){
var ret_value__39171__auto__ = (function (){try{while(true){
var result__39172__auto__ = switch__39169__auto__.call(null,state_42399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39172__auto__;
}
break;
}
}catch (e42426){if((e42426 instanceof Object)){
var ex__39173__auto__ = e42426;
var statearr_42427_42475 = state_42399;
(statearr_42427_42475[(5)] = ex__39173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42476 = state_42399;
state_42399 = G__42476;
continue;
} else {
return ret_value__39171__auto__;
}
break;
}
});
utimer$components$flat_timer$state_machine__39170__auto__ = function(state_42399){
switch(arguments.length){
case 0:
return utimer$components$flat_timer$state_machine__39170__auto____0.call(this);
case 1:
return utimer$components$flat_timer$state_machine__39170__auto____1.call(this,state_42399);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$components$flat_timer$state_machine__39170__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$components$flat_timer$state_machine__39170__auto____0;
utimer$components$flat_timer$state_machine__39170__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$components$flat_timer$state_machine__39170__auto____1;
return utimer$components$flat_timer$state_machine__39170__auto__;
})()
;})(switch__39169__auto__,c__39213__auto___42452,vec__42342_42446,__42447,bcast_in_42448,element_42449,clock_42450,_STAR_label_text_42451))
})();
var state__39215__auto__ = (function (){var statearr_42428 = f__39214__auto__.call(null);
(statearr_42428[(6)] = c__39213__auto___42452);

return statearr_42428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39215__auto__);
});})(c__39213__auto___42452,vec__42342_42446,__42447,bcast_in_42448,element_42449,clock_42450,_STAR_label_text_42451))
);


return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var vec__42429_42477 = cljs.core.nth.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(3));
var bcast_out_42478 = cljs.core.nth.call(null,vec__42429_42477,(0),null);
var __42479 = cljs.core.nth.call(null,vec__42429_42477,(1),null);
var element_42480 = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
cljs.core.async.put_BANG_.call(null,bcast_out_42478,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"unmount","unmount",-1779083333),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element_42480)], null));

return state;
})], null)], null),"c-flat-timer");
