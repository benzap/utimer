// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.components.utils');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('cljs.spec.alpha');
goog.require('utimer.alarm');
goog.require('utimer.clock');
goog.require('utimer.input_timer_parser');
utimer.components.utils.get_alarm = (function utimer$components$utils$get_alarm(state){
var G__50904 = state;
var G__50904__$1 = (((G__50904 == null))?null:new cljs.core.Keyword(null,"alarm","alarm",2066206946).cljs$core$IFn$_invoke$arity$1(G__50904));
var G__50904__$2 = (((G__50904__$1 == null))?null:cljs.core.deref.call(null,G__50904__$1));
if((G__50904__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__50904__$2);
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
var vec__50905 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var element = cljs.core.nth.call(null,vec__50905,(0),null);
var alarm = utimer.components.utils.get_alarm.call(null,state);
return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var G__50908_50909 = utimer.components.utils.get_alarm.call(null,state);
if((G__50908_50909 == null)){
} else {
utimer.alarm.stop_BANG_.call(null,G__50908_50909);
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"alarm","alarm",2066206946));
})], null);
});
utimer.components.utils.mixin_clock = (function utimer$components$utils$mixin_clock(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var element = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var initial_value = utimer.input_timer_parser.parse__GT_duration.call(null,cljs.core.get.call(null,element,new cljs.core.Keyword(null,"initial","initial",1854648214),"5 Minutes"));
var clock = utimer.clock.new_clock.call(null,initial_value);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"*timer","*timer",-637700106).cljs$core$IFn$_invoke$arity$1(clock),new cljs.core.Keyword("utimer.components.utils","timer","utimer.components.utils/timer",-657552034),((function (element,initial_value,clock,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(element,initial_value,clock,component))
);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"clock","clock",-894301127),clock);
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var clock = new cljs.core.Keyword(null,"clock","clock",-894301127).cljs$core$IFn$_invoke$arity$1(state);
var progress_channel = new cljs.core.Keyword(null,"progress-channel","progress-channel",746024311).cljs$core$IFn$_invoke$arity$1(clock);
utimer.clock.init_BANG_.call(null,clock);

var c__48318__auto___50949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto___50949,clock,progress_channel){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto___50949,clock,progress_channel){
return (function (state_50930){
var state_val_50931 = (state_50930[(1)]);
if((state_val_50931 === (7))){
var inst_50926 = (state_50930[(2)]);
var state_50930__$1 = state_50930;
var statearr_50932_50950 = state_50930__$1;
(statearr_50932_50950[(2)] = inst_50926);

(statearr_50932_50950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50931 === (1))){
var state_50930__$1 = state_50930;
var statearr_50933_50951 = state_50930__$1;
(statearr_50933_50951[(2)] = null);

(statearr_50933_50951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50931 === (4))){
var inst_50912 = (state_50930[(2)]);
var inst_50913 = new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(inst_50912);
var inst_50914 = new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(inst_50912);
var inst_50915 = (inst_50913 - inst_50914);
var state_50930__$1 = (function (){var statearr_50934 = state_50930;
(statearr_50934[(7)] = inst_50915);

return statearr_50934;
})();
if(cljs.core.truth_(inst_50912)){
var statearr_50935_50952 = state_50930__$1;
(statearr_50935_50952[(1)] = (5));

} else {
var statearr_50936_50953 = state_50930__$1;
(statearr_50936_50953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50931 === (6))){
var state_50930__$1 = state_50930;
var statearr_50937_50954 = state_50930__$1;
(statearr_50937_50954[(2)] = null);

(statearr_50937_50954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50931 === (3))){
var inst_50928 = (state_50930[(2)]);
var state_50930__$1 = state_50930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50930__$1,inst_50928);
} else {
if((state_val_50931 === (2))){
var state_50930__$1 = state_50930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50930__$1,(4),progress_channel);
} else {
if((state_val_50931 === (9))){
var state_50930__$1 = state_50930;
var statearr_50938_50955 = state_50930__$1;
(statearr_50938_50955[(2)] = null);

(statearr_50938_50955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50931 === (5))){
var inst_50915 = (state_50930[(7)]);
var inst_50917 = (inst_50915 <= (0));
var state_50930__$1 = state_50930;
if(cljs.core.truth_(inst_50917)){
var statearr_50939_50956 = state_50930__$1;
(statearr_50939_50956[(1)] = (8));

} else {
var statearr_50940_50957 = state_50930__$1;
(statearr_50940_50957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50931 === (10))){
var inst_50922 = (state_50930[(2)]);
var state_50930__$1 = (function (){var statearr_50941 = state_50930;
(statearr_50941[(8)] = inst_50922);

return statearr_50941;
})();
var statearr_50942_50958 = state_50930__$1;
(statearr_50942_50958[(2)] = null);

(statearr_50942_50958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50931 === (8))){
var inst_50919 = utimer.clock.stop_BANG_.call(null,clock);
var state_50930__$1 = state_50930;
var statearr_50943_50959 = state_50930__$1;
(statearr_50943_50959[(2)] = inst_50919);

(statearr_50943_50959[(1)] = (10));


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
});})(c__48318__auto___50949,clock,progress_channel))
;
return ((function (switch__48230__auto__,c__48318__auto___50949,clock,progress_channel){
return (function() {
var utimer$components$utils$mixin_clock_$_state_machine__48231__auto__ = null;
var utimer$components$utils$mixin_clock_$_state_machine__48231__auto____0 = (function (){
var statearr_50944 = [null,null,null,null,null,null,null,null,null];
(statearr_50944[(0)] = utimer$components$utils$mixin_clock_$_state_machine__48231__auto__);

(statearr_50944[(1)] = (1));

return statearr_50944;
});
var utimer$components$utils$mixin_clock_$_state_machine__48231__auto____1 = (function (state_50930){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_50930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e50945){if((e50945 instanceof Object)){
var ex__48234__auto__ = e50945;
var statearr_50946_50960 = state_50930;
(statearr_50946_50960[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50961 = state_50930;
state_50930 = G__50961;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
utimer$components$utils$mixin_clock_$_state_machine__48231__auto__ = function(state_50930){
switch(arguments.length){
case 0:
return utimer$components$utils$mixin_clock_$_state_machine__48231__auto____0.call(this);
case 1:
return utimer$components$utils$mixin_clock_$_state_machine__48231__auto____1.call(this,state_50930);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$components$utils$mixin_clock_$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$components$utils$mixin_clock_$_state_machine__48231__auto____0;
utimer$components$utils$mixin_clock_$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$components$utils$mixin_clock_$_state_machine__48231__auto____1;
return utimer$components$utils$mixin_clock_$_state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto___50949,clock,progress_channel))
})();
var state__48320__auto__ = (function (){var statearr_50947 = f__48319__auto__.call(null);
(statearr_50947[(6)] = c__48318__auto___50949);

return statearr_50947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto___50949,clock,progress_channel))
);


var temp__4657__auto___50962 = new cljs.core.Keyword(null,"alarm","alarm",2066206946).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__4657__auto___50962)){
var _STAR_alarm_50963 = temp__4657__auto___50962;
cljs.core.swap_BANG_.call(null,_STAR_alarm_50963,cljs.core.assoc,new cljs.core.Keyword(null,"interval-id","interval-id",79285360),setInterval(((function (_STAR_alarm_50963,temp__4657__auto___50962,clock,progress_channel){
return (function (){
if(cljs.core.truth_(utimer.clock.finished_QMARK_.call(null,clock))){
return utimer.alarm.play_BANG_.call(null,utimer.components.utils.get_alarm.call(null,state));
} else {
return utimer.alarm.stop_BANG_.call(null,utimer.components.utils.get_alarm.call(null,state));
}
});})(_STAR_alarm_50963,temp__4657__auto___50962,clock,progress_channel))
,(200)));
} else {
}

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
utimer.clock.quit_BANG_.call(null,new cljs.core.Keyword(null,"clock","clock",-894301127).cljs$core$IFn$_invoke$arity$1(state));

var temp__4657__auto___50964 = (function (){var G__50948 = state;
var G__50948__$1 = (((G__50948 == null))?null:new cljs.core.Keyword(null,"alarm","alarm",2066206946).cljs$core$IFn$_invoke$arity$1(G__50948));
var G__50948__$2 = (((G__50948__$1 == null))?null:cljs.core.deref.call(null,G__50948__$1));
if((G__50948__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"interval-id","interval-id",79285360).cljs$core$IFn$_invoke$arity$1(G__50948__$2);
}
})();
if(cljs.core.truth_(temp__4657__auto___50964)){
var interval_id_50965 = temp__4657__auto___50964;
clearTimeout(interval_id_50965);
} else {
}

return state;
})], null);
});
