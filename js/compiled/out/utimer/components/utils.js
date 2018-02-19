// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.components.utils');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('cljs.spec.alpha');
goog.require('utimer.alarm');
goog.require('utimer.clock');
goog.require('utimer.events');
goog.require('utimer.input_timer_parser');
utimer.components.utils.get_alarm = (function utimer$components$utils$get_alarm(state){
var G__42111 = state;
var G__42111__$1 = (((G__42111 == null))?null:new cljs.core.Keyword(null,"alarm","alarm",2066206946).cljs$core$IFn$_invoke$arity$1(G__42111));
var G__42111__$2 = (((G__42111__$1 == null))?null:cljs.core.deref.call(null,G__42111__$1));
if((G__42111__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__42111__$2);
}
});
utimer.components.utils.force_render_alarm_BANG_ = (function utimer$components$utils$force_render_alarm_BANG_(state){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946).cljs$core$IFn$_invoke$arity$1(state),cljs.core.update,new cljs.core.Keyword(null,"force-render","force-render",-632344775),cljs.core.inc);
});
utimer.components.utils.mixin_alarm = (function utimer$components$utils$mixin_alarm(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var alarm = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",-830191113),utimer.alarm.new_alarm.call(null),new cljs.core.Keyword(null,"force-render","force-render",-632344775),(0)], null));
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,alarm,new cljs.core.Keyword("utimer.components.utils","alarm","utimer.components.utils/alarm",-1889881361),((function (alarm,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(alarm,component))
);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"alarm","alarm",2066206946),alarm);
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var vec__42112 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var element = cljs.core.nth.call(null,vec__42112,(0),null);
var alarm = utimer.components.utils.get_alarm.call(null,state);
return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var G__42115_42116 = utimer.components.utils.get_alarm.call(null,state);
if((G__42115_42116 == null)){
} else {
utimer.alarm.stop_BANG_.call(null,G__42115_42116);
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"alarm","alarm",2066206946));
})], null);
});
utimer.components.utils.mixin_clock = (function utimer$components$utils$mixin_clock(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var element = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var vec__42117 = cljs.core.nth.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(3));
var bcast_out = cljs.core.nth.call(null,vec__42117,(0),null);
var _ = cljs.core.nth.call(null,vec__42117,(1),null);
var initial_value = utimer.input_timer_parser.parse__GT_duration.call(null,cljs.core.get.call(null,element,new cljs.core.Keyword(null,"initial","initial",1854648214),"5 Minutes"));
var clock = utimer.clock.new_clock.call(null,initial_value);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"clock","clock",-894301127),clock);
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var element = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var vec__42120 = cljs.core.nth.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(3));
var bcast_out = cljs.core.nth.call(null,vec__42120,(0),null);
var _ = cljs.core.nth.call(null,vec__42120,(1),null);
var clock = new cljs.core.Keyword(null,"clock","clock",-894301127).cljs$core$IFn$_invoke$arity$1(state);
var progress_channel = new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311).cljs$core$IFn$_invoke$arity$1(clock);
utimer.clock.init_BANG_.call(null,clock);

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"*timer","*timer",-637700106).cljs$core$IFn$_invoke$arity$1(clock),new cljs.core.Keyword("utimer.components.utils","timer","utimer.components.utils/timer",-657552034),((function (component,element,vec__42120,bcast_out,_,clock,progress_channel){
return (function (___$1,___$2,old,new$){
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"finished?","finished?",2067288119).cljs$core$IFn$_invoke$arity$1(old),false)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"finished?","finished?",2067288119).cljs$core$IFn$_invoke$arity$1(new$),true))){
cljs.core.async.put_BANG_.call(null,bcast_out,utimer.events.event_finished_timer.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"*label-text","*label-text",446530944).cljs$core$IFn$_invoke$arity$1(state)))));
} else {
}

return rum.core.request_render.call(null,component);
});})(component,element,vec__42120,bcast_out,_,clock,progress_channel))
);

var c__38837__auto___42162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38837__auto___42162,component,element,vec__42120,bcast_out,_,clock,progress_channel){
return (function (){
var f__38838__auto__ = (function (){var switch__38793__auto__ = ((function (c__38837__auto___42162,component,element,vec__42120,bcast_out,_,clock,progress_channel){
return (function (state_42143){
var state_val_42144 = (state_42143[(1)]);
if((state_val_42144 === (7))){
var inst_42139 = (state_42143[(2)]);
var state_42143__$1 = state_42143;
var statearr_42145_42163 = state_42143__$1;
(statearr_42145_42163[(2)] = inst_42139);

(statearr_42145_42163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (1))){
var state_42143__$1 = state_42143;
var statearr_42146_42164 = state_42143__$1;
(statearr_42146_42164[(2)] = null);

(statearr_42146_42164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (4))){
var inst_42125 = (state_42143[(2)]);
var inst_42126 = new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(inst_42125);
var inst_42127 = new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(inst_42125);
var inst_42128 = (inst_42126 - inst_42127);
var state_42143__$1 = (function (){var statearr_42147 = state_42143;
(statearr_42147[(7)] = inst_42128);

return statearr_42147;
})();
if(cljs.core.truth_(inst_42125)){
var statearr_42148_42165 = state_42143__$1;
(statearr_42148_42165[(1)] = (5));

} else {
var statearr_42149_42166 = state_42143__$1;
(statearr_42149_42166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (6))){
var state_42143__$1 = state_42143;
var statearr_42150_42167 = state_42143__$1;
(statearr_42150_42167[(2)] = null);

(statearr_42150_42167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (3))){
var inst_42141 = (state_42143[(2)]);
var state_42143__$1 = state_42143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42143__$1,inst_42141);
} else {
if((state_val_42144 === (2))){
var state_42143__$1 = state_42143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42143__$1,(4),progress_channel);
} else {
if((state_val_42144 === (9))){
var state_42143__$1 = state_42143;
var statearr_42151_42168 = state_42143__$1;
(statearr_42151_42168[(2)] = null);

(statearr_42151_42168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (5))){
var inst_42128 = (state_42143[(7)]);
var inst_42130 = (inst_42128 <= (0));
var state_42143__$1 = state_42143;
if(cljs.core.truth_(inst_42130)){
var statearr_42152_42169 = state_42143__$1;
(statearr_42152_42169[(1)] = (8));

} else {
var statearr_42153_42170 = state_42143__$1;
(statearr_42153_42170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (10))){
var inst_42135 = (state_42143[(2)]);
var state_42143__$1 = (function (){var statearr_42154 = state_42143;
(statearr_42154[(8)] = inst_42135);

return statearr_42154;
})();
var statearr_42155_42171 = state_42143__$1;
(statearr_42155_42171[(2)] = null);

(statearr_42155_42171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (8))){
var inst_42132 = utimer.clock.stop_BANG_.call(null,clock);
var state_42143__$1 = state_42143;
var statearr_42156_42172 = state_42143__$1;
(statearr_42156_42172[(2)] = inst_42132);

(statearr_42156_42172[(1)] = (10));


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
});})(c__38837__auto___42162,component,element,vec__42120,bcast_out,_,clock,progress_channel))
;
return ((function (switch__38793__auto__,c__38837__auto___42162,component,element,vec__42120,bcast_out,_,clock,progress_channel){
return (function() {
var utimer$components$utils$mixin_clock_$_state_machine__38794__auto__ = null;
var utimer$components$utils$mixin_clock_$_state_machine__38794__auto____0 = (function (){
var statearr_42157 = [null,null,null,null,null,null,null,null,null];
(statearr_42157[(0)] = utimer$components$utils$mixin_clock_$_state_machine__38794__auto__);

(statearr_42157[(1)] = (1));

return statearr_42157;
});
var utimer$components$utils$mixin_clock_$_state_machine__38794__auto____1 = (function (state_42143){
while(true){
var ret_value__38795__auto__ = (function (){try{while(true){
var result__38796__auto__ = switch__38793__auto__.call(null,state_42143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38796__auto__;
}
break;
}
}catch (e42158){if((e42158 instanceof Object)){
var ex__38797__auto__ = e42158;
var statearr_42159_42173 = state_42143;
(statearr_42159_42173[(5)] = ex__38797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42174 = state_42143;
state_42143 = G__42174;
continue;
} else {
return ret_value__38795__auto__;
}
break;
}
});
utimer$components$utils$mixin_clock_$_state_machine__38794__auto__ = function(state_42143){
switch(arguments.length){
case 0:
return utimer$components$utils$mixin_clock_$_state_machine__38794__auto____0.call(this);
case 1:
return utimer$components$utils$mixin_clock_$_state_machine__38794__auto____1.call(this,state_42143);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$components$utils$mixin_clock_$_state_machine__38794__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$components$utils$mixin_clock_$_state_machine__38794__auto____0;
utimer$components$utils$mixin_clock_$_state_machine__38794__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$components$utils$mixin_clock_$_state_machine__38794__auto____1;
return utimer$components$utils$mixin_clock_$_state_machine__38794__auto__;
})()
;})(switch__38793__auto__,c__38837__auto___42162,component,element,vec__42120,bcast_out,_,clock,progress_channel))
})();
var state__38839__auto__ = (function (){var statearr_42160 = f__38838__auto__.call(null);
(statearr_42160[(6)] = c__38837__auto___42162);

return statearr_42160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38839__auto__);
});})(c__38837__auto___42162,component,element,vec__42120,bcast_out,_,clock,progress_channel))
);


var temp__4657__auto___42175 = new cljs.core.Keyword(null,"alarm","alarm",2066206946).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__4657__auto___42175)){
var _STAR_alarm_42176 = temp__4657__auto___42175;
cljs.core.swap_BANG_.call(null,_STAR_alarm_42176,cljs.core.assoc,new cljs.core.Keyword(null,"interval-id","interval-id",79285360),setInterval(((function (_STAR_alarm_42176,temp__4657__auto___42175,component,element,vec__42120,bcast_out,_,clock,progress_channel){
return (function (){
if(cljs.core.truth_(utimer.clock.finished_QMARK_.call(null,clock))){
return utimer.alarm.play_BANG_.call(null,utimer.components.utils.get_alarm.call(null,state));
} else {
return utimer.alarm.stop_BANG_.call(null,utimer.components.utils.get_alarm.call(null,state));
}
});})(_STAR_alarm_42176,temp__4657__auto___42175,component,element,vec__42120,bcast_out,_,clock,progress_channel))
,(200)));
} else {
}

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
utimer.clock.quit_BANG_.call(null,new cljs.core.Keyword(null,"clock","clock",-894301127).cljs$core$IFn$_invoke$arity$1(state));

var temp__4657__auto___42177 = (function (){var G__42161 = state;
var G__42161__$1 = (((G__42161 == null))?null:new cljs.core.Keyword(null,"alarm","alarm",2066206946).cljs$core$IFn$_invoke$arity$1(G__42161));
var G__42161__$2 = (((G__42161__$1 == null))?null:cljs.core.deref.call(null,G__42161__$1));
if((G__42161__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"interval-id","interval-id",79285360).cljs$core$IFn$_invoke$arity$1(G__42161__$2);
}
})();
if(cljs.core.truth_(temp__4657__auto___42177)){
var interval_id_42178 = temp__4657__auto___42177;
clearTimeout(interval_id_42178);
} else {
}

return state;
})], null);
});
