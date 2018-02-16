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
var G__42086 = state;
var G__42086__$1 = (((G__42086 == null))?null:new cljs.core.Keyword(null,"alarm","alarm",2066206946).cljs$core$IFn$_invoke$arity$1(G__42086));
var G__42086__$2 = (((G__42086__$1 == null))?null:cljs.core.deref.call(null,G__42086__$1));
if((G__42086__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__42086__$2);
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
var vec__42087 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var element = cljs.core.nth.call(null,vec__42087,(0),null);
var alarm = utimer.components.utils.get_alarm.call(null,state);
return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var G__42090_42091 = utimer.components.utils.get_alarm.call(null,state);
if((G__42090_42091 == null)){
} else {
utimer.alarm.stop_BANG_.call(null,G__42090_42091);
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

var c__38070__auto___42131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38070__auto___42131,clock,progress_channel){
return (function (){
var f__38071__auto__ = (function (){var switch__38026__auto__ = ((function (c__38070__auto___42131,clock,progress_channel){
return (function (state_42112){
var state_val_42113 = (state_42112[(1)]);
if((state_val_42113 === (7))){
var inst_42108 = (state_42112[(2)]);
var state_42112__$1 = state_42112;
var statearr_42114_42132 = state_42112__$1;
(statearr_42114_42132[(2)] = inst_42108);

(statearr_42114_42132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42113 === (1))){
var state_42112__$1 = state_42112;
var statearr_42115_42133 = state_42112__$1;
(statearr_42115_42133[(2)] = null);

(statearr_42115_42133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42113 === (4))){
var inst_42094 = (state_42112[(2)]);
var inst_42095 = new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(inst_42094);
var inst_42096 = new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(inst_42094);
var inst_42097 = (inst_42095 - inst_42096);
var state_42112__$1 = (function (){var statearr_42116 = state_42112;
(statearr_42116[(7)] = inst_42097);

return statearr_42116;
})();
if(cljs.core.truth_(inst_42094)){
var statearr_42117_42134 = state_42112__$1;
(statearr_42117_42134[(1)] = (5));

} else {
var statearr_42118_42135 = state_42112__$1;
(statearr_42118_42135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42113 === (6))){
var state_42112__$1 = state_42112;
var statearr_42119_42136 = state_42112__$1;
(statearr_42119_42136[(2)] = null);

(statearr_42119_42136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42113 === (3))){
var inst_42110 = (state_42112[(2)]);
var state_42112__$1 = state_42112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42112__$1,inst_42110);
} else {
if((state_val_42113 === (2))){
var state_42112__$1 = state_42112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42112__$1,(4),progress_channel);
} else {
if((state_val_42113 === (9))){
var state_42112__$1 = state_42112;
var statearr_42120_42137 = state_42112__$1;
(statearr_42120_42137[(2)] = null);

(statearr_42120_42137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42113 === (5))){
var inst_42097 = (state_42112[(7)]);
var inst_42099 = (inst_42097 <= (0));
var state_42112__$1 = state_42112;
if(cljs.core.truth_(inst_42099)){
var statearr_42121_42138 = state_42112__$1;
(statearr_42121_42138[(1)] = (8));

} else {
var statearr_42122_42139 = state_42112__$1;
(statearr_42122_42139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42113 === (10))){
var inst_42104 = (state_42112[(2)]);
var state_42112__$1 = (function (){var statearr_42123 = state_42112;
(statearr_42123[(8)] = inst_42104);

return statearr_42123;
})();
var statearr_42124_42140 = state_42112__$1;
(statearr_42124_42140[(2)] = null);

(statearr_42124_42140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42113 === (8))){
var inst_42101 = utimer.clock.stop_BANG_.call(null,clock);
var state_42112__$1 = state_42112;
var statearr_42125_42141 = state_42112__$1;
(statearr_42125_42141[(2)] = inst_42101);

(statearr_42125_42141[(1)] = (10));


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
});})(c__38070__auto___42131,clock,progress_channel))
;
return ((function (switch__38026__auto__,c__38070__auto___42131,clock,progress_channel){
return (function() {
var utimer$components$utils$mixin_clock_$_state_machine__38027__auto__ = null;
var utimer$components$utils$mixin_clock_$_state_machine__38027__auto____0 = (function (){
var statearr_42126 = [null,null,null,null,null,null,null,null,null];
(statearr_42126[(0)] = utimer$components$utils$mixin_clock_$_state_machine__38027__auto__);

(statearr_42126[(1)] = (1));

return statearr_42126;
});
var utimer$components$utils$mixin_clock_$_state_machine__38027__auto____1 = (function (state_42112){
while(true){
var ret_value__38028__auto__ = (function (){try{while(true){
var result__38029__auto__ = switch__38026__auto__.call(null,state_42112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38029__auto__;
}
break;
}
}catch (e42127){if((e42127 instanceof Object)){
var ex__38030__auto__ = e42127;
var statearr_42128_42142 = state_42112;
(statearr_42128_42142[(5)] = ex__38030__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42143 = state_42112;
state_42112 = G__42143;
continue;
} else {
return ret_value__38028__auto__;
}
break;
}
});
utimer$components$utils$mixin_clock_$_state_machine__38027__auto__ = function(state_42112){
switch(arguments.length){
case 0:
return utimer$components$utils$mixin_clock_$_state_machine__38027__auto____0.call(this);
case 1:
return utimer$components$utils$mixin_clock_$_state_machine__38027__auto____1.call(this,state_42112);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$components$utils$mixin_clock_$_state_machine__38027__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$components$utils$mixin_clock_$_state_machine__38027__auto____0;
utimer$components$utils$mixin_clock_$_state_machine__38027__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$components$utils$mixin_clock_$_state_machine__38027__auto____1;
return utimer$components$utils$mixin_clock_$_state_machine__38027__auto__;
})()
;})(switch__38026__auto__,c__38070__auto___42131,clock,progress_channel))
})();
var state__38072__auto__ = (function (){var statearr_42129 = f__38071__auto__.call(null);
(statearr_42129[(6)] = c__38070__auto___42131);

return statearr_42129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38072__auto__);
});})(c__38070__auto___42131,clock,progress_channel))
);


var temp__4657__auto___42144 = new cljs.core.Keyword(null,"alarm","alarm",2066206946).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__4657__auto___42144)){
var _STAR_alarm_42145 = temp__4657__auto___42144;
cljs.core.swap_BANG_.call(null,_STAR_alarm_42145,cljs.core.assoc,new cljs.core.Keyword(null,"interval-id","interval-id",79285360),setInterval(((function (_STAR_alarm_42145,temp__4657__auto___42144,clock,progress_channel){
return (function (){
if(cljs.core.truth_(utimer.clock.finished_QMARK_.call(null,clock))){
return utimer.alarm.play_BANG_.call(null,utimer.components.utils.get_alarm.call(null,state));
} else {
return utimer.alarm.stop_BANG_.call(null,utimer.components.utils.get_alarm.call(null,state));
}
});})(_STAR_alarm_42145,temp__4657__auto___42144,clock,progress_channel))
,(200)));
} else {
}

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
utimer.clock.quit_BANG_.call(null,new cljs.core.Keyword(null,"clock","clock",-894301127).cljs$core$IFn$_invoke$arity$1(state));

var temp__4657__auto___42146 = (function (){var G__42130 = state;
var G__42130__$1 = (((G__42130 == null))?null:new cljs.core.Keyword(null,"alarm","alarm",2066206946).cljs$core$IFn$_invoke$arity$1(G__42130));
var G__42130__$2 = (((G__42130__$1 == null))?null:cljs.core.deref.call(null,G__42130__$1));
if((G__42130__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"interval-id","interval-id",79285360).cljs$core$IFn$_invoke$arity$1(G__42130__$2);
}
})();
if(cljs.core.truth_(temp__4657__auto___42146)){
var interval_id_42147 = temp__4657__auto___42146;
clearTimeout(interval_id_42147);
} else {
}

return state;
})], null);
});
