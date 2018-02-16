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
var G__50901 = state;
var G__50901__$1 = (((G__50901 == null))?null:new cljs.core.Keyword(null,"alarm","alarm",2066206946).cljs$core$IFn$_invoke$arity$1(G__50901));
var G__50901__$2 = (((G__50901__$1 == null))?null:cljs.core.deref.call(null,G__50901__$1));
if((G__50901__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__50901__$2);
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
var vec__50902 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var element = cljs.core.nth.call(null,vec__50902,(0),null);
var alarm = utimer.components.utils.get_alarm.call(null,state);
return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var G__50905_50906 = utimer.components.utils.get_alarm.call(null,state);
if((G__50905_50906 == null)){
} else {
utimer.alarm.stop_BANG_.call(null,G__50905_50906);
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
utimer.clock.start_BANG_.call(null,clock);

var c__48318__auto___50945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto___50945,clock,progress_channel){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto___50945,clock,progress_channel){
return (function (state_50927){
var state_val_50928 = (state_50927[(1)]);
if((state_val_50928 === (7))){
var inst_50923 = (state_50927[(2)]);
var state_50927__$1 = state_50927;
var statearr_50929_50946 = state_50927__$1;
(statearr_50929_50946[(2)] = inst_50923);

(statearr_50929_50946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50928 === (1))){
var state_50927__$1 = state_50927;
var statearr_50930_50947 = state_50927__$1;
(statearr_50930_50947[(2)] = null);

(statearr_50930_50947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50928 === (4))){
var inst_50909 = (state_50927[(2)]);
var inst_50910 = new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(inst_50909);
var inst_50911 = new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(inst_50909);
var inst_50912 = (inst_50910 - inst_50911);
var state_50927__$1 = (function (){var statearr_50931 = state_50927;
(statearr_50931[(7)] = inst_50912);

return statearr_50931;
})();
if(cljs.core.truth_(inst_50909)){
var statearr_50932_50948 = state_50927__$1;
(statearr_50932_50948[(1)] = (5));

} else {
var statearr_50933_50949 = state_50927__$1;
(statearr_50933_50949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50928 === (6))){
var state_50927__$1 = state_50927;
var statearr_50934_50950 = state_50927__$1;
(statearr_50934_50950[(2)] = null);

(statearr_50934_50950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50928 === (3))){
var inst_50925 = (state_50927[(2)]);
var state_50927__$1 = state_50927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50927__$1,inst_50925);
} else {
if((state_val_50928 === (2))){
var state_50927__$1 = state_50927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50927__$1,(4),progress_channel);
} else {
if((state_val_50928 === (9))){
var state_50927__$1 = state_50927;
var statearr_50935_50951 = state_50927__$1;
(statearr_50935_50951[(2)] = null);

(statearr_50935_50951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50928 === (5))){
var inst_50912 = (state_50927[(7)]);
var inst_50914 = (inst_50912 <= (0));
var state_50927__$1 = state_50927;
if(cljs.core.truth_(inst_50914)){
var statearr_50936_50952 = state_50927__$1;
(statearr_50936_50952[(1)] = (8));

} else {
var statearr_50937_50953 = state_50927__$1;
(statearr_50937_50953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50928 === (10))){
var inst_50919 = (state_50927[(2)]);
var state_50927__$1 = (function (){var statearr_50938 = state_50927;
(statearr_50938[(8)] = inst_50919);

return statearr_50938;
})();
var statearr_50939_50954 = state_50927__$1;
(statearr_50939_50954[(2)] = null);

(statearr_50939_50954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50928 === (8))){
var inst_50916 = utimer.clock.stop_BANG_.call(null,clock);
var state_50927__$1 = state_50927;
var statearr_50940_50955 = state_50927__$1;
(statearr_50940_50955[(2)] = inst_50916);

(statearr_50940_50955[(1)] = (10));


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
});})(c__48318__auto___50945,clock,progress_channel))
;
return ((function (switch__48230__auto__,c__48318__auto___50945,clock,progress_channel){
return (function() {
var utimer$components$utils$mixin_clock_$_state_machine__48231__auto__ = null;
var utimer$components$utils$mixin_clock_$_state_machine__48231__auto____0 = (function (){
var statearr_50941 = [null,null,null,null,null,null,null,null,null];
(statearr_50941[(0)] = utimer$components$utils$mixin_clock_$_state_machine__48231__auto__);

(statearr_50941[(1)] = (1));

return statearr_50941;
});
var utimer$components$utils$mixin_clock_$_state_machine__48231__auto____1 = (function (state_50927){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_50927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e50942){if((e50942 instanceof Object)){
var ex__48234__auto__ = e50942;
var statearr_50943_50956 = state_50927;
(statearr_50943_50956[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50957 = state_50927;
state_50927 = G__50957;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
utimer$components$utils$mixin_clock_$_state_machine__48231__auto__ = function(state_50927){
switch(arguments.length){
case 0:
return utimer$components$utils$mixin_clock_$_state_machine__48231__auto____0.call(this);
case 1:
return utimer$components$utils$mixin_clock_$_state_machine__48231__auto____1.call(this,state_50927);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$components$utils$mixin_clock_$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$components$utils$mixin_clock_$_state_machine__48231__auto____0;
utimer$components$utils$mixin_clock_$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$components$utils$mixin_clock_$_state_machine__48231__auto____1;
return utimer$components$utils$mixin_clock_$_state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto___50945,clock,progress_channel))
})();
var state__48320__auto__ = (function (){var statearr_50944 = f__48319__auto__.call(null);
(statearr_50944[(6)] = c__48318__auto___50945);

return statearr_50944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto___50945,clock,progress_channel))
);


return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
return utimer.clock.quit_BANG_.call(null,new cljs.core.Keyword(null,"clock","clock",-894301127).cljs$core$IFn$_invoke$arity$1(state));
})], null);
});
