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
goog.require('utimer.events');
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
var react_component_42379 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var dom_node_42380 = ReactDOM.findDOMNode(react_component_42379);
var temp__4657__auto___42381 = document.querySelector(".flat-timer-edit-mode>input");
if(cljs.core.truth_(temp__4657__auto___42381)){
var elem_42382 = temp__4657__auto___42381;
elem_42382.focus();
} else {
}

var temp__4657__auto___42383 = document.querySelector(".flat-timer-input>input");
if(cljs.core.truth_(temp__4657__auto___42383)){
var elem_42384 = temp__4657__auto___42383;
elem_42384.focus();
} else {
}

return state;
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var element = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var update_chan = cljs.core.nth.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(2));
var _STAR_label_text = new cljs.core.Keyword(null,"*label-text","*label-text",446530944).cljs$core$IFn$_invoke$arity$1(state);
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
utimer.components.flat_timer.c_flat_timer = rum.core.build_defcs.call(null,(function (state,element,remove_chan,update_chan,p__42386){
var vec__42387 = p__42386;
var bcast_out = cljs.core.nth.call(null,vec__42387,(0),null);
var _ = cljs.core.nth.call(null,vec__42387,(1),null);
var clock = new cljs.core.Keyword(null,"clock","clock",-894301127).cljs$core$IFn$_invoke$arity$1(state);
var alarm = utimer.components.flat_timer.get_alarm.call(null,state);
var progress_s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.clock.percent_progress.call(null,clock)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('');
var _STAR_label_text = new cljs.core.Keyword(null,"*label-text","*label-text",446530944).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_time_text = new cljs.core.Keyword("utimer.components.flat-timer","*time-text","utimer.components.flat-timer/*time-text",2111142535).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_finished_once_QMARK_ = new cljs.core.Keyword("utimer.components.flat-timer","*finished-once?","utimer.components.flat-timer/*finished-once?",-952791737).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_extended_options = new cljs.core.Keyword("utimer.components.flat-timer","*extended-options","utimer.components.flat-timer/*extended-options",1837396324).cljs$core$IFn$_invoke$arity$1(state);
var alarm_42633__$1 = utimer.components.flat_timer.get_alarm.call(null,state);
utimer.alarm.set_loop_BANG_.call(null,alarm_42633__$1,new cljs.core.Keyword(null,"loop?","loop?",457687798).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)));

utimer.alarm.set_sound_BANG_.call(null,alarm_42633__$1,new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)));

if(cljs.core.truth_(utimer.clock.finished_QMARK_.call(null,clock))){
utimer.alarm.play_BANG_.call(null,alarm);
} else {
utimer.alarm.stop_BANG_.call(null,alarm);

cljs.core.reset_BANG_.call(null,_STAR_finished_once_QMARK_,false);
}

return React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ut-timer","flat-timer",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("timer-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element))].join('')], null))}),React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flat-timer-main",(cljs.core.truth_(utimer.clock.finished_QMARK_.call(null,clock))?"anim-color-reversal-normal":null)], null))}),React.createElement("svg",({"width": "100%", "height": "100%", "className": "flat-timer-progress"}),React.createElement("rect",({"width": "100%", "height": "100%", "fill": "rgb(196,198,166)", "className": "flat-background"})),React.createElement("rect",({"width": progress_s, "height": "100%", "fill": "rgb(215,194,157)", "className": "svg-timer-progress"})),React.createElement("rect",({"x": progress_s, "width": "1", "height": "100%", "fill": "rgba(0,0,0,0.1)", "className": "svg-timer-progress-tick"}))),React.createElement("div",({"className": "flat-timer-container"}),React.createElement("div",({"className": "flat-timer-left-pane"}),React.createElement("div",({"className": "flat-timer-button play-pause"}),React.createElement("div",({"onClick": ((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
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
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
, "className": "material-icons noselect"}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(utimer.clock.started_QMARK_.call(null,clock))?"pause":(cljs.core.truth_(utimer.clock.finished_QMARK_.call(null,clock))?"stop":"play_arrow"
)))))),React.createElement("div",({"className": "flat-timer-middle-pane"}),(function (){var attrs42392 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_label_text))))?(function (){var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_label_text));
var has_text_QMARK_ = (cljs.core.count.call(null,text) > (0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flat-timer-label","div.flat-timer-label",2056356862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((has_text_QMARK_)?null:"no-label"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (text,has_text_QMARK_,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (){
return cljs.core.swap_BANG_.call(null,_STAR_label_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),true);
});})(text,has_text_QMARK_,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
], null),((!(has_text_QMARK_))?"No Label":text)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.material-icons.noselect","div.material-icons.noselect",519407819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (text,has_text_QMARK_,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (){
return cljs.core.swap_BANG_.call(null,_STAR_label_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),true);
});})(text,has_text_QMARK_,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
], null),"edit"], null)], null);
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flat-timer-edit-mode.noselect","div.flat-timer-edit-mode.noselect",2053657454),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_label_text)),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (e){
var this$ = e.target;
return setTimeout(((function (this$,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (){
return (this$["selectionStart"] = (10000));
});})(this$,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
,(0));
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (e){
return cljs.core.swap_BANG_.call(null,_STAR_label_text,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),e.target.value);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (e){
var key = e.key;
if((cljs.core._EQ_.call(null,key,"Enter")) || (cljs.core._EQ_.call(null,key,"Escape"))){
return cljs.core.swap_BANG_.call(null,_STAR_label_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),false);
} else {
return null;
}
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.material-icons","div.material-icons",227325836),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (){
return cljs.core.swap_BANG_.call(null,_STAR_label_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),false);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
], null),"check"], null)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42392))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flat-timer-middle-container","noselect"], null)], null),attrs42392)):({"className": "flat-timer-middle-container noselect"})),((cljs.core.map_QMARK_.call(null,attrs42392))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42392)], null)));
})(),(function (){var attrs42393 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_time_text))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flat-timer-display-container","div.flat-timer-display-container",-1631106901),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (){
return cljs.core.swap_BANG_.call(null,_STAR_time_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),true);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not.call(null,utimer.clock.finished_QMARK_.call(null,clock)))?utimer.components.flat_timer.display_timeleft_class.call(null,clock):utimer.components.flat_timer.display_duration_class.call(null,clock))], null),((cljs.core.not.call(null,utimer.clock.finished_QMARK_.call(null,clock)))?utimer.components.flat_timer.display_timeleft.call(null,clock):utimer.components.flat_timer.display_duration.call(null,clock))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_time_text)),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (e){
var this$ = e.target;
return setTimeout(((function (this$,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (){
return (this$["selectionStart"] = (10000));
});})(this$,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
,(10));
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (e){
var val = e.target.value;
return cljs.core.swap_BANG_.call(null,_STAR_time_text,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),val);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (e){
var key = e.key;
var G__42394 = key;
switch (G__42394) {
case "Enter":
cljs.core.swap_BANG_.call(null,_STAR_time_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),false);

var G__42395 = clock;
var G__42395__$1 = ((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_time_text)))))?utimer.clock.change_BANG_.call(null,G__42395,utimer.input_timer_parser.parse__GT_duration.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_time_text)))):G__42395);
var G__42395__$2 = utimer.clock.restart_BANG_.call(null,G__42395__$1)
;
return utimer.clock.stop_BANG_.call(null,G__42395__$2);


break;
case "Escape":
return cljs.core.swap_BANG_.call(null,_STAR_time_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),false);

break;
default:
return null;

}
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
], null)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42393))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flat-timer-input"], null)], null),attrs42393)):({"className": "flat-timer-input"})),((cljs.core.map_QMARK_.call(null,attrs42393))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42393)], null)));
})(),React.createElement("div",({"className": "flat-timer-middle-container noselect extended-options-button"}),React.createElement("div",({"className": "flat-timer-label"}),React.createElement("div",({"onClick": ((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (){
return cljs.core.swap_BANG_.call(null,_STAR_extended_options,cljs.core.update,new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.not);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
, "title": (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)))?"Hide Options":"Show Options"), "className": "material-icons noselect"}),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)))?"expand_less":"dehaze"))))),React.createElement("div",({"className": "flat-timer-right-pane"}),React.createElement("div",({"onClick": ((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (){
return cljs.core.async.put_BANG_.call(null,remove_chan,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element));
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
, "title": "Close Timer", "className": "flat-timer-button close"}),React.createElement("div",({"className": "material-icons noselect"}),"close")),React.createElement("div",({"onClick": ((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (){
return utimer.clock.restart_BANG_.call(null,utimer.clock.stop_BANG_.call(null,clock));
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
, "title": (cljs.core.truth_(utimer.clock.progressed_QMARK_.call(null,clock))?"Restart Timer":null), "className": "flat-timer-button restart"}),React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["material-icons","noselect",(cljs.core.truth_(utimer.clock.progressed_QMARK_.call(null,clock))?null:"button-fade")], null))}),"repeat"))))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flat-timer-extended-options.anim-expand-vertical-normal","div.flat-timer-extended-options.anim-expand-vertical-normal",-1181375580),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flat-timer-extended-options-container","div.flat-timer-extended-options-container",91718390),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Alarm Settings"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".alarm-sound-setting",".alarm-sound-setting",-1430141014),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Sound: "], null),new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (e){
return cljs.core.swap_BANG_.call(null,_STAR_extended_options,cljs.core.assoc,new cljs.core.Keyword(null,"sound","sound",-2127407070),e.target.value);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),"None"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/analog_alarm.mp3"], null),"Analog Alarm"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/boxing_bell.mp3"], null),"Boxing Bell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/chinese_gong.mp3"], null),"Chinese Gong"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/dixie_horn.mp3"], null),"Dixie Horn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/fog_horn.mp3"], null),"Fog Horn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/front_desk_bell.mp3"], null),"Front Desk Bell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/metal_gong.mp3"], null),"Metal Gong"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/missle_alert.mp3"], null),"Missle Alert"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/news_intro.mp3"], null),"News Intro"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/police_whistle.mp3"], null),"Police Whistle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/railroad_crossing.mp3"], null),"Railroad Crossing"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/school_bell.mp3"], null),"School Bell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/shotgun.mp3"], null),"Shotgun"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/speaker_pulse.mp3"], null),"Speaker Pulse"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/train_whistle.mp3"], null),"Train Whistle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/war_alarm.mp3"], null),"War Alarm"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/z_ultimate_alarm.mp3"], null),"Z-Ultimate Alarm"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.mat-button","button.mat-button",1967151257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (){
return utimer.alarm.test_play_BANG_.call(null,alarm);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
], null),"Test Alarm"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".alarm-sound-setting",".alarm-sound-setting",-1430141014),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Repeat?"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"loop?","loop?",457687798).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (p1__42385_SHARP_){
return cljs.core.swap_BANG_.call(null,_STAR_extended_options,cljs.core.assoc,new cljs.core.Keyword(null,"loop?","loop?",457687798),(function (){var G__42398 = p1__42385_SHARP_.target.value;
switch (G__42398) {
case "true":
return true;

break;
case "false":
return false;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42398)].join('')));

}
})());
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"false"], null),"No"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"true"], null),"Yes"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Programmable Settings"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"On Finish"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".programmable-setting",".programmable-setting",714735333),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Start Timer with Label: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Label Name",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"prog-start-label","prog-start-label",-373437096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (e){
return cljs.core.swap_BANG_.call(null,_STAR_extended_options,cljs.core.assoc,new cljs.core.Keyword(null,"prog-start-label","prog-start-label",-373437096),e.target.value);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.mat-button","button.mat-button",1967151257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (){
return cljs.core.async.put_BANG_.call(null,bcast_out,utimer.events.event_start_timer_with_label.call(null,new cljs.core.Keyword(null,"prog-start-label","prog-start-label",-373437096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options))));
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
], null),"Test Label"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".programmable-setting",".programmable-setting",714735333),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Close this Timer: "], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"prog-close-after-msec","prog-close-after-msec",-1789566241).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (e){
return cljs.core.swap_BANG_.call(null,_STAR_extended_options,cljs.core.assoc,new cljs.core.Keyword(null,"prog-close-after-msec","prog-close-after-msec",-1789566241),e.target.value);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(-1)], null),"Never"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(5000)], null),"After 5 Seconds"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(10000)], null),"After 10 Seconds"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(30000)], null),"After 30 Seconds"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".programmable-setting",".programmable-setting",714735333),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Reset this Timer: "], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"prog-reset-after-msec","prog-reset-after-msec",368109610).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_){
return (function (e){
return cljs.core.swap_BANG_.call(null,_STAR_extended_options,cljs.core.assoc,new cljs.core.Keyword(null,"prog-reset-after-msec","prog-reset-after-msec",368109610),e.target.value);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_finished_once_QMARK_,_STAR_extended_options,vec__42387,bcast_out,_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(-1)], null),"Never"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(5000)], null),"After 5 Seconds"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(10000)], null),"After 10 Seconds"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(30000)], null),"After 30 Seconds"], null)], null)], null)], null)], null):null)));
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (element){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element);
})], null),rum.core.reactive,utimer.components.utils.mixin_alarm.call(null),utimer.components.utils.mixin_clock.call(null),utimer.components.flat_timer.mixin_flat_timer.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var element = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var _STAR_time_text = cljs.core.atom.call(null,utimer.components.flat_timer.editable_time.call(null,cljs.core.get.call(null,element,new cljs.core.Keyword(null,"initial","initial",1854648214),"")));
var _STAR_label_text = cljs.core.atom.call(null,utimer.components.flat_timer.editable_label.call(null,cljs.core.get.call(null,element,new cljs.core.Keyword(null,"label","label",1718410804),"")));
var _STAR_finished_once_QMARK_ = cljs.core.atom.call(null,false);
var _STAR_extended_options = cljs.core.atom.call(null,cljs.core.get.call(null,element,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"loop?","loop?",457687798),false,new cljs.core.Keyword(null,"sound","sound",-2127407070),utimer.alarm.default_alarm_sound,new cljs.core.Keyword(null,"test?","test?",-1078989737),false,new cljs.core.Keyword(null,"prog-start-label","prog-start-label",-373437096),"",new cljs.core.Keyword(null,"prog-close-after-msec","prog-close-after-msec",-1789566241),null,new cljs.core.Keyword(null,"prog-reset-after-msec","prog-reset-after-msec",368109610),null], null)));
cljs.core.add_watch.call(null,_STAR_time_text,new cljs.core.Keyword("utimer.components.flat-timer","*time-text","utimer.components.flat-timer/*time-text",2111142535),((function (component,element,_STAR_time_text,_STAR_label_text,_STAR_finished_once_QMARK_,_STAR_extended_options){
return (function (){
return rum.core.request_render.call(null,component);
});})(component,element,_STAR_time_text,_STAR_label_text,_STAR_finished_once_QMARK_,_STAR_extended_options))
);

cljs.core.add_watch.call(null,_STAR_label_text,new cljs.core.Keyword(null,"*label-text","*label-text",446530944),((function (component,element,_STAR_time_text,_STAR_label_text,_STAR_finished_once_QMARK_,_STAR_extended_options){
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

return cljs.core.assoc.call(null,state,new cljs.core.Keyword("utimer.components.flat-timer","*time-text","utimer.components.flat-timer/*time-text",2111142535),_STAR_time_text,new cljs.core.Keyword(null,"*label-text","*label-text",446530944),_STAR_label_text,new cljs.core.Keyword("utimer.components.flat-timer","*finished-once?","utimer.components.flat-timer/*finished-once?",-952791737),_STAR_finished_once_QMARK_,new cljs.core.Keyword("utimer.components.flat-timer","*extended-options","utimer.components.flat-timer/*extended-options",1837396324),_STAR_extended_options);
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var vec__42399_42636 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var element_42637 = cljs.core.nth.call(null,vec__42399_42636,(0),null);
var remove_chan_42638 = cljs.core.nth.call(null,vec__42399_42636,(1),null);
var update_chan_42639 = cljs.core.nth.call(null,vec__42399_42636,(2),null);
var vec__42402_42640 = cljs.core.nth.call(null,vec__42399_42636,(3),null);
var bcast_out_42641 = cljs.core.nth.call(null,vec__42402_42640,(0),null);
var bcast_in_42642 = cljs.core.nth.call(null,vec__42402_42640,(1),null);
var clock_42643 = new cljs.core.Keyword(null,"clock","clock",-894301127).cljs$core$IFn$_invoke$arity$1(state);
var alarm_42644 = utimer.components.flat_timer.get_alarm.call(null,state);
var _STAR_label_text_42645 = new cljs.core.Keyword(null,"*label-text","*label-text",446530944).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_extended_options_42646 = new cljs.core.Keyword("utimer.components.flat-timer","*extended-options","utimer.components.flat-timer/*extended-options",1837396324).cljs$core$IFn$_invoke$arity$1(state);
var c__38837__auto___42647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38837__auto___42647,vec__42399_42636,element_42637,remove_chan_42638,update_chan_42639,vec__42402_42640,bcast_out_42641,bcast_in_42642,clock_42643,alarm_42644,_STAR_label_text_42645,_STAR_extended_options_42646){
return (function (){
var f__38838__auto__ = (function (){var switch__38793__auto__ = ((function (c__38837__auto___42647,vec__42399_42636,element_42637,remove_chan_42638,update_chan_42639,vec__42402_42640,bcast_out_42641,bcast_in_42642,clock_42643,alarm_42644,_STAR_label_text_42645,_STAR_extended_options_42646){
return (function (state_42538){
var state_val_42539 = (state_42538[(1)]);
if((state_val_42539 === (7))){
var inst_42534 = (state_42538[(2)]);
var state_42538__$1 = state_42538;
var statearr_42540_42648 = state_42538__$1;
(statearr_42540_42648[(2)] = inst_42534);

(statearr_42540_42648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (20))){
var inst_42407 = (state_42538[(7)]);
var inst_42435 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_42407);
var inst_42436 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element_42637);
var inst_42437 = cljs.core._EQ_.call(null,inst_42435,inst_42436);
var state_42538__$1 = state_42538;
var statearr_42541_42649 = state_42538__$1;
(statearr_42541_42649[(2)] = inst_42437);

(statearr_42541_42649[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (27))){
var state_42538__$1 = state_42538;
var statearr_42542_42650 = state_42538__$1;
(statearr_42542_42650[(2)] = null);

(statearr_42542_42650[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (1))){
var state_42538__$1 = state_42538;
var statearr_42543_42651 = state_42538__$1;
(statearr_42543_42651[(2)] = null);

(statearr_42543_42651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (24))){
var inst_42407 = (state_42538[(7)]);
var inst_42505 = utimer.events.is_event_echo_QMARK_.call(null,inst_42407);
var state_42538__$1 = state_42538;
if(cljs.core.truth_(inst_42505)){
var statearr_42544_42652 = state_42538__$1;
(statearr_42544_42652[(1)] = (44));

} else {
var statearr_42545_42653 = state_42538__$1;
(statearr_42545_42653[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (39))){
var state_42538__$1 = state_42538;
var statearr_42546_42654 = state_42538__$1;
(statearr_42546_42654[(2)] = null);

(statearr_42546_42654[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (46))){
var inst_42512 = (state_42538[(2)]);
var state_42538__$1 = state_42538;
var statearr_42547_42655 = state_42538__$1;
(statearr_42547_42655[(2)] = inst_42512);

(statearr_42547_42655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (4))){
var inst_42407 = (state_42538[(7)]);
var inst_42407__$1 = (state_42538[(2)]);
var state_42538__$1 = (function (){var statearr_42548 = state_42538;
(statearr_42548[(7)] = inst_42407__$1);

return statearr_42548;
})();
if(cljs.core.truth_(inst_42407__$1)){
var statearr_42549_42656 = state_42538__$1;
(statearr_42549_42656[(1)] = (5));

} else {
var statearr_42550_42657 = state_42538__$1;
(statearr_42550_42657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (15))){
var inst_42420 = (state_42538[(8)]);
var state_42538__$1 = state_42538;
var statearr_42551_42658 = state_42538__$1;
(statearr_42551_42658[(2)] = inst_42420);

(statearr_42551_42658[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (48))){
var inst_42519 = (state_42538[(9)]);
var state_42538__$1 = state_42538;
var statearr_42552_42659 = state_42538__$1;
(statearr_42552_42659[(2)] = inst_42519);

(statearr_42552_42659[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (50))){
var state_42538__$1 = state_42538;
var statearr_42553_42660 = state_42538__$1;
(statearr_42553_42660[(2)] = null);

(statearr_42553_42660[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (21))){
var inst_42433 = (state_42538[(10)]);
var state_42538__$1 = state_42538;
var statearr_42554_42661 = state_42538__$1;
(statearr_42554_42661[(2)] = inst_42433);

(statearr_42554_42661[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (31))){
var inst_42451 = (state_42538[(2)]);
var state_42538__$1 = state_42538;
var statearr_42555_42662 = state_42538__$1;
(statearr_42555_42662[(2)] = inst_42451);

(statearr_42555_42662[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (32))){
var inst_42456 = (state_42538[(11)]);
var inst_42458 = (inst_42456 <= (0));
var state_42538__$1 = state_42538;
if(cljs.core.truth_(inst_42458)){
var statearr_42556_42663 = state_42538__$1;
(statearr_42556_42663[(1)] = (35));

} else {
var statearr_42557_42664 = state_42538__$1;
(statearr_42557_42664[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (40))){
var inst_42503 = (state_42538[(2)]);
var state_42538__$1 = state_42538;
var statearr_42558_42665 = state_42538__$1;
(statearr_42558_42665[(2)] = inst_42503);

(statearr_42558_42665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (33))){
var state_42538__$1 = state_42538;
var statearr_42559_42666 = state_42538__$1;
(statearr_42559_42666[(2)] = null);

(statearr_42559_42666[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (13))){
var inst_42407 = (state_42538[(7)]);
var inst_42519 = (state_42538[(9)]);
var inst_42518 = (state_42538[(2)]);
var inst_42519__$1 = utimer.events.is_event_timer_unmount_QMARK_.call(null,inst_42407);
var state_42538__$1 = (function (){var statearr_42560 = state_42538;
(statearr_42560[(12)] = inst_42518);

(statearr_42560[(9)] = inst_42519__$1);

return statearr_42560;
})();
if(cljs.core.truth_(inst_42519__$1)){
var statearr_42561_42667 = state_42538__$1;
(statearr_42561_42667[(1)] = (47));

} else {
var statearr_42562_42668 = state_42538__$1;
(statearr_42562_42668[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (22))){
var inst_42440 = (state_42538[(2)]);
var state_42538__$1 = state_42538;
if(cljs.core.truth_(inst_42440)){
var statearr_42563_42669 = state_42538__$1;
(statearr_42563_42669[(1)] = (23));

} else {
var statearr_42564_42670 = state_42538__$1;
(statearr_42564_42670[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (36))){
var inst_42456 = (state_42538[(11)]);
var inst_42407 = (state_42538[(7)]);
var inst_42473 = cljs.core.async.chan.call(null,(1));
var inst_42474 = (function (){var temp__4657__auto__ = inst_42456;
var event = inst_42407;
var prog_close_after_msec = inst_42456;
var c__38837__auto____$1 = inst_42473;
return ((function (temp__4657__auto__,event,prog_close_after_msec,c__38837__auto____$1,inst_42456,inst_42407,inst_42473,state_val_42539,c__38837__auto___42647,vec__42399_42636,element_42637,remove_chan_42638,update_chan_42639,vec__42402_42640,bcast_out_42641,bcast_in_42642,clock_42643,alarm_42644,_STAR_label_text_42645,_STAR_extended_options_42646){
return (function (){
var f__38838__auto__ = (function (){var switch__38793__auto__ = ((function (temp__4657__auto__,event,prog_close_after_msec,c__38837__auto____$1,inst_42456,inst_42407,inst_42473,state_val_42539,c__38837__auto___42647,vec__42399_42636,element_42637,remove_chan_42638,update_chan_42639,vec__42402_42640,bcast_out_42641,bcast_in_42642,clock_42643,alarm_42644,_STAR_label_text_42645,_STAR_extended_options_42646){
return (function (state_42471){
var state_val_42472 = (state_42471[(1)]);
if((state_val_42472 === (1))){
var inst_42461 = cljs.core.async.timeout.call(null,prog_close_after_msec);
var state_42471__$1 = state_42471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42471__$1,(2),inst_42461);
} else {
if((state_val_42472 === (2))){
var inst_42463 = (state_42471[(2)]);
var inst_42464 = utimer.alarm.stop_BANG_.call(null,alarm_42644);
var inst_42465 = utimer.clock.stop_BANG_.call(null,clock_42643);
var inst_42466 = utimer.clock.restart_BANG_.call(null,inst_42465);
var inst_42467 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element_42637);
var state_42471__$1 = (function (){var statearr_42565 = state_42471;
(statearr_42565[(7)] = inst_42466);

(statearr_42565[(8)] = inst_42464);

(statearr_42565[(9)] = inst_42463);

return statearr_42565;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42471__$1,(3),remove_chan_42638,inst_42467);
} else {
if((state_val_42472 === (3))){
var inst_42469 = (state_42471[(2)]);
var state_42471__$1 = state_42471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42471__$1,inst_42469);
} else {
return null;
}
}
}
});})(temp__4657__auto__,event,prog_close_after_msec,c__38837__auto____$1,inst_42456,inst_42407,inst_42473,state_val_42539,c__38837__auto___42647,vec__42399_42636,element_42637,remove_chan_42638,update_chan_42639,vec__42402_42640,bcast_out_42641,bcast_in_42642,clock_42643,alarm_42644,_STAR_label_text_42645,_STAR_extended_options_42646))
;
return ((function (switch__38793__auto__,temp__4657__auto__,event,prog_close_after_msec,c__38837__auto____$1,inst_42456,inst_42407,inst_42473,state_val_42539,c__38837__auto___42647,vec__42399_42636,element_42637,remove_chan_42638,update_chan_42639,vec__42402_42640,bcast_out_42641,bcast_in_42642,clock_42643,alarm_42644,_STAR_label_text_42645,_STAR_extended_options_42646){
return (function() {
var utimer$components$flat_timer$state_machine__38794__auto__ = null;
var utimer$components$flat_timer$state_machine__38794__auto____0 = (function (){
var statearr_42566 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42566[(0)] = utimer$components$flat_timer$state_machine__38794__auto__);

(statearr_42566[(1)] = (1));

return statearr_42566;
});
var utimer$components$flat_timer$state_machine__38794__auto____1 = (function (state_42471){
while(true){
var ret_value__38795__auto__ = (function (){try{while(true){
var result__38796__auto__ = switch__38793__auto__.call(null,state_42471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38796__auto__;
}
break;
}
}catch (e42567){if((e42567 instanceof Object)){
var ex__38797__auto__ = e42567;
var statearr_42568_42671 = state_42471;
(statearr_42568_42671[(5)] = ex__38797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42672 = state_42471;
state_42471 = G__42672;
continue;
} else {
return ret_value__38795__auto__;
}
break;
}
});
utimer$components$flat_timer$state_machine__38794__auto__ = function(state_42471){
switch(arguments.length){
case 0:
return utimer$components$flat_timer$state_machine__38794__auto____0.call(this);
case 1:
return utimer$components$flat_timer$state_machine__38794__auto____1.call(this,state_42471);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$components$flat_timer$state_machine__38794__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$components$flat_timer$state_machine__38794__auto____0;
utimer$components$flat_timer$state_machine__38794__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$components$flat_timer$state_machine__38794__auto____1;
return utimer$components$flat_timer$state_machine__38794__auto__;
})()
;})(switch__38793__auto__,temp__4657__auto__,event,prog_close_after_msec,c__38837__auto____$1,inst_42456,inst_42407,inst_42473,state_val_42539,c__38837__auto___42647,vec__42399_42636,element_42637,remove_chan_42638,update_chan_42639,vec__42402_42640,bcast_out_42641,bcast_in_42642,clock_42643,alarm_42644,_STAR_label_text_42645,_STAR_extended_options_42646))
})();
var state__38839__auto__ = (function (){var statearr_42569 = f__38838__auto__.call(null);
(statearr_42569[(6)] = c__38837__auto____$1);

return statearr_42569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38839__auto__);
});
;})(temp__4657__auto__,event,prog_close_after_msec,c__38837__auto____$1,inst_42456,inst_42407,inst_42473,state_val_42539,c__38837__auto___42647,vec__42399_42636,element_42637,remove_chan_42638,update_chan_42639,vec__42402_42640,bcast_out_42641,bcast_in_42642,clock_42643,alarm_42644,_STAR_label_text_42645,_STAR_extended_options_42646))
})();
var inst_42475 = cljs.core.async.impl.dispatch.run.call(null,inst_42474);
var state_42538__$1 = (function (){var statearr_42570 = state_42538;
(statearr_42570[(13)] = inst_42475);

return statearr_42570;
})();
var statearr_42571_42673 = state_42538__$1;
(statearr_42571_42673[(2)] = inst_42473);

(statearr_42571_42673[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (41))){
var state_42538__$1 = state_42538;
var statearr_42572_42674 = state_42538__$1;
(statearr_42572_42674[(2)] = null);

(statearr_42572_42674[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (43))){
var inst_42500 = (state_42538[(2)]);
var state_42538__$1 = state_42538;
var statearr_42573_42675 = state_42538__$1;
(statearr_42573_42675[(2)] = inst_42500);

(statearr_42573_42675[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (29))){
var state_42538__$1 = state_42538;
var statearr_42574_42676 = state_42538__$1;
(statearr_42574_42676[(2)] = null);

(statearr_42574_42676[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (44))){
var inst_42407 = (state_42538[(7)]);
var inst_42507 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element_42637);
var inst_42508 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inst_42407);
var inst_42509 = cljs.core.println.call(null,inst_42507," - Echo - ",inst_42508);
var state_42538__$1 = state_42538;
var statearr_42575_42677 = state_42538__$1;
(statearr_42575_42677[(2)] = inst_42509);

(statearr_42575_42677[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (6))){
var state_42538__$1 = state_42538;
var statearr_42576_42678 = state_42538__$1;
(statearr_42576_42678[(2)] = null);

(statearr_42576_42678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (28))){
var inst_42456 = (state_42538[(11)]);
var inst_42454 = (state_42538[(2)]);
var inst_42455 = cljs.core.deref.call(null,_STAR_extended_options_42646);
var inst_42456__$1 = new cljs.core.Keyword(null,"prog-close-after-msec","prog-close-after-msec",-1789566241).cljs$core$IFn$_invoke$arity$1(inst_42455);
var state_42538__$1 = (function (){var statearr_42577 = state_42538;
(statearr_42577[(14)] = inst_42454);

(statearr_42577[(11)] = inst_42456__$1);

return statearr_42577;
})();
if(cljs.core.truth_(inst_42456__$1)){
var statearr_42578_42679 = state_42538__$1;
(statearr_42578_42679[(1)] = (32));

} else {
var statearr_42579_42680 = state_42538__$1;
(statearr_42579_42680[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (51))){
var state_42538__$1 = state_42538;
var statearr_42580_42681 = state_42538__$1;
(statearr_42580_42681[(2)] = null);

(statearr_42580_42681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (25))){
var inst_42514 = (state_42538[(2)]);
var state_42538__$1 = state_42538;
var statearr_42581_42682 = state_42538__$1;
(statearr_42581_42682[(2)] = inst_42514);

(statearr_42581_42682[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (34))){
var inst_42482 = (state_42538[(15)]);
var inst_42480 = (state_42538[(2)]);
var inst_42481 = cljs.core.deref.call(null,_STAR_extended_options_42646);
var inst_42482__$1 = new cljs.core.Keyword(null,"prog-reset-after-msec","prog-reset-after-msec",368109610).cljs$core$IFn$_invoke$arity$1(inst_42481);
var state_42538__$1 = (function (){var statearr_42582 = state_42538;
(statearr_42582[(15)] = inst_42482__$1);

(statearr_42582[(16)] = inst_42480);

return statearr_42582;
})();
if(cljs.core.truth_(inst_42482__$1)){
var statearr_42583_42683 = state_42538__$1;
(statearr_42583_42683[(1)] = (38));

} else {
var statearr_42584_42684 = state_42538__$1;
(statearr_42584_42684[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (17))){
var inst_42430 = utimer.clock.restart_BANG_.call(null,clock_42643);
var inst_42431 = utimer.clock.start_BANG_.call(null,inst_42430);
var state_42538__$1 = state_42538;
var statearr_42585_42685 = state_42538__$1;
(statearr_42585_42685[(2)] = inst_42431);

(statearr_42585_42685[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (3))){
var inst_42536 = (state_42538[(2)]);
var state_42538__$1 = state_42538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42538__$1,inst_42536);
} else {
if((state_val_42539 === (12))){
var inst_42420 = (state_42538[(8)]);
var inst_42407 = (state_42538[(7)]);
var inst_42420__$1 = utimer.events.is_event_start_timer_with_label_QMARK_.call(null,inst_42407);
var state_42538__$1 = (function (){var statearr_42586 = state_42538;
(statearr_42586[(8)] = inst_42420__$1);

return statearr_42586;
})();
if(cljs.core.truth_(inst_42420__$1)){
var statearr_42587_42686 = state_42538__$1;
(statearr_42587_42686[(1)] = (14));

} else {
var statearr_42588_42687 = state_42538__$1;
(statearr_42588_42687[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (2))){
var state_42538__$1 = state_42538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42538__$1,(4),bcast_in_42642);
} else {
if((state_val_42539 === (23))){
var inst_42443 = (state_42538[(17)]);
var inst_42442 = cljs.core.deref.call(null,_STAR_extended_options_42646);
var inst_42443__$1 = new cljs.core.Keyword(null,"prog-start-label","prog-start-label",-373437096).cljs$core$IFn$_invoke$arity$1(inst_42442);
var state_42538__$1 = (function (){var statearr_42589 = state_42538;
(statearr_42589[(17)] = inst_42443__$1);

return statearr_42589;
})();
if(cljs.core.truth_(inst_42443__$1)){
var statearr_42590_42688 = state_42538__$1;
(statearr_42590_42688[(1)] = (26));

} else {
var statearr_42591_42689 = state_42538__$1;
(statearr_42591_42689[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (47))){
var inst_42407 = (state_42538[(7)]);
var inst_42521 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element_42637);
var inst_42522 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_42407);
var inst_42523 = cljs.core._EQ_.call(null,inst_42521,inst_42522);
var state_42538__$1 = state_42538;
var statearr_42592_42690 = state_42538__$1;
(statearr_42592_42690[(2)] = inst_42523);

(statearr_42592_42690[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (35))){
var state_42538__$1 = state_42538;
var statearr_42593_42691 = state_42538__$1;
(statearr_42593_42691[(2)] = null);

(statearr_42593_42691[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (19))){
var inst_42516 = (state_42538[(2)]);
var state_42538__$1 = state_42538;
var statearr_42594_42692 = state_42538__$1;
(statearr_42594_42692[(2)] = inst_42516);

(statearr_42594_42692[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (11))){
var inst_42418 = cljs.core.async.close_BANG_.call(null,bcast_in_42642);
var state_42538__$1 = state_42538;
var statearr_42595_42693 = state_42538__$1;
(statearr_42595_42693[(2)] = inst_42418);

(statearr_42595_42693[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (9))){
var inst_42409 = (state_42538[(18)]);
var state_42538__$1 = state_42538;
var statearr_42596_42694 = state_42538__$1;
(statearr_42596_42694[(2)] = inst_42409);

(statearr_42596_42694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (5))){
var inst_42409 = (state_42538[(18)]);
var inst_42407 = (state_42538[(7)]);
var inst_42409__$1 = utimer.events.is_event_timer_unmount_QMARK_.call(null,inst_42407);
var state_42538__$1 = (function (){var statearr_42597 = state_42538;
(statearr_42597[(18)] = inst_42409__$1);

return statearr_42597;
})();
if(cljs.core.truth_(inst_42409__$1)){
var statearr_42598_42695 = state_42538__$1;
(statearr_42598_42695[(1)] = (8));

} else {
var statearr_42599_42696 = state_42538__$1;
(statearr_42599_42696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (14))){
var inst_42407 = (state_42538[(7)]);
var inst_42422 = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(inst_42407);
var inst_42423 = cljs.core.deref.call(null,_STAR_label_text_42645);
var inst_42424 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inst_42423);
var inst_42425 = cljs.core._EQ_.call(null,inst_42422,inst_42424);
var state_42538__$1 = state_42538;
var statearr_42600_42697 = state_42538__$1;
(statearr_42600_42697[(2)] = inst_42425);

(statearr_42600_42697[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (45))){
var state_42538__$1 = state_42538;
var statearr_42601_42698 = state_42538__$1;
(statearr_42601_42698[(2)] = null);

(statearr_42601_42698[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (26))){
var inst_42443 = (state_42538[(17)]);
var inst_42445 = cljs.core.empty_QMARK_.call(null,inst_42443);
var state_42538__$1 = state_42538;
if(inst_42445){
var statearr_42602_42699 = state_42538__$1;
(statearr_42602_42699[(1)] = (29));

} else {
var statearr_42603_42700 = state_42538__$1;
(statearr_42603_42700[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (16))){
var inst_42428 = (state_42538[(2)]);
var state_42538__$1 = state_42538;
if(cljs.core.truth_(inst_42428)){
var statearr_42604_42701 = state_42538__$1;
(statearr_42604_42701[(1)] = (17));

} else {
var statearr_42605_42702 = state_42538__$1;
(statearr_42605_42702[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (38))){
var inst_42482 = (state_42538[(15)]);
var inst_42484 = (inst_42482 <= (0));
var state_42538__$1 = state_42538;
if(cljs.core.truth_(inst_42484)){
var statearr_42606_42703 = state_42538__$1;
(statearr_42606_42703[(1)] = (41));

} else {
var statearr_42607_42704 = state_42538__$1;
(statearr_42607_42704[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (30))){
var inst_42443 = (state_42538[(17)]);
var inst_42448 = utimer.events.event_start_timer_with_label.call(null,inst_42443);
var inst_42449 = cljs.core.async.put_BANG_.call(null,bcast_out_42641,inst_42448);
var state_42538__$1 = state_42538;
var statearr_42608_42705 = state_42538__$1;
(statearr_42608_42705[(2)] = inst_42449);

(statearr_42608_42705[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (10))){
var inst_42416 = (state_42538[(2)]);
var state_42538__$1 = state_42538;
if(cljs.core.truth_(inst_42416)){
var statearr_42609_42706 = state_42538__$1;
(statearr_42609_42706[(1)] = (11));

} else {
var statearr_42610_42707 = state_42538__$1;
(statearr_42610_42707[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (18))){
var inst_42433 = (state_42538[(10)]);
var inst_42407 = (state_42538[(7)]);
var inst_42433__$1 = utimer.events.is_event_finished_timer_QMARK_.call(null,inst_42407);
var state_42538__$1 = (function (){var statearr_42611 = state_42538;
(statearr_42611[(10)] = inst_42433__$1);

return statearr_42611;
})();
if(cljs.core.truth_(inst_42433__$1)){
var statearr_42612_42708 = state_42538__$1;
(statearr_42612_42708[(1)] = (20));

} else {
var statearr_42613_42709 = state_42538__$1;
(statearr_42613_42709[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (52))){
var inst_42531 = (state_42538[(2)]);
var state_42538__$1 = state_42538;
var statearr_42614_42710 = state_42538__$1;
(statearr_42614_42710[(2)] = inst_42531);

(statearr_42614_42710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (42))){
var inst_42482 = (state_42538[(15)]);
var inst_42407 = (state_42538[(7)]);
var inst_42496 = cljs.core.async.chan.call(null,(1));
var inst_42497 = (function (){var temp__4657__auto__ = inst_42482;
var event = inst_42407;
var prog_reset_after_msec = inst_42482;
var c__38837__auto____$1 = inst_42496;
return ((function (temp__4657__auto__,event,prog_reset_after_msec,c__38837__auto____$1,inst_42482,inst_42407,inst_42496,state_val_42539,c__38837__auto___42647,vec__42399_42636,element_42637,remove_chan_42638,update_chan_42639,vec__42402_42640,bcast_out_42641,bcast_in_42642,clock_42643,alarm_42644,_STAR_label_text_42645,_STAR_extended_options_42646){
return (function (){
var f__38838__auto__ = (function (){var switch__38793__auto__ = ((function (temp__4657__auto__,event,prog_reset_after_msec,c__38837__auto____$1,inst_42482,inst_42407,inst_42496,state_val_42539,c__38837__auto___42647,vec__42399_42636,element_42637,remove_chan_42638,update_chan_42639,vec__42402_42640,bcast_out_42641,bcast_in_42642,clock_42643,alarm_42644,_STAR_label_text_42645,_STAR_extended_options_42646){
return (function (state_42494){
var state_val_42495 = (state_42494[(1)]);
if((state_val_42495 === (1))){
var inst_42487 = cljs.core.async.timeout.call(null,prog_reset_after_msec);
var state_42494__$1 = state_42494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42494__$1,(2),inst_42487);
} else {
if((state_val_42495 === (2))){
var inst_42489 = (state_42494[(2)]);
var inst_42490 = utimer.alarm.stop_BANG_.call(null,alarm_42644);
var inst_42491 = utimer.clock.stop_BANG_.call(null,clock_42643);
var inst_42492 = utimer.clock.restart_BANG_.call(null,inst_42491);
var state_42494__$1 = (function (){var statearr_42615 = state_42494;
(statearr_42615[(7)] = inst_42489);

(statearr_42615[(8)] = inst_42490);

return statearr_42615;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42494__$1,inst_42492);
} else {
return null;
}
}
});})(temp__4657__auto__,event,prog_reset_after_msec,c__38837__auto____$1,inst_42482,inst_42407,inst_42496,state_val_42539,c__38837__auto___42647,vec__42399_42636,element_42637,remove_chan_42638,update_chan_42639,vec__42402_42640,bcast_out_42641,bcast_in_42642,clock_42643,alarm_42644,_STAR_label_text_42645,_STAR_extended_options_42646))
;
return ((function (switch__38793__auto__,temp__4657__auto__,event,prog_reset_after_msec,c__38837__auto____$1,inst_42482,inst_42407,inst_42496,state_val_42539,c__38837__auto___42647,vec__42399_42636,element_42637,remove_chan_42638,update_chan_42639,vec__42402_42640,bcast_out_42641,bcast_in_42642,clock_42643,alarm_42644,_STAR_label_text_42645,_STAR_extended_options_42646){
return (function() {
var utimer$components$flat_timer$state_machine__38794__auto__ = null;
var utimer$components$flat_timer$state_machine__38794__auto____0 = (function (){
var statearr_42616 = [null,null,null,null,null,null,null,null,null];
(statearr_42616[(0)] = utimer$components$flat_timer$state_machine__38794__auto__);

(statearr_42616[(1)] = (1));

return statearr_42616;
});
var utimer$components$flat_timer$state_machine__38794__auto____1 = (function (state_42494){
while(true){
var ret_value__38795__auto__ = (function (){try{while(true){
var result__38796__auto__ = switch__38793__auto__.call(null,state_42494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38796__auto__;
}
break;
}
}catch (e42617){if((e42617 instanceof Object)){
var ex__38797__auto__ = e42617;
var statearr_42618_42711 = state_42494;
(statearr_42618_42711[(5)] = ex__38797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42712 = state_42494;
state_42494 = G__42712;
continue;
} else {
return ret_value__38795__auto__;
}
break;
}
});
utimer$components$flat_timer$state_machine__38794__auto__ = function(state_42494){
switch(arguments.length){
case 0:
return utimer$components$flat_timer$state_machine__38794__auto____0.call(this);
case 1:
return utimer$components$flat_timer$state_machine__38794__auto____1.call(this,state_42494);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$components$flat_timer$state_machine__38794__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$components$flat_timer$state_machine__38794__auto____0;
utimer$components$flat_timer$state_machine__38794__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$components$flat_timer$state_machine__38794__auto____1;
return utimer$components$flat_timer$state_machine__38794__auto__;
})()
;})(switch__38793__auto__,temp__4657__auto__,event,prog_reset_after_msec,c__38837__auto____$1,inst_42482,inst_42407,inst_42496,state_val_42539,c__38837__auto___42647,vec__42399_42636,element_42637,remove_chan_42638,update_chan_42639,vec__42402_42640,bcast_out_42641,bcast_in_42642,clock_42643,alarm_42644,_STAR_label_text_42645,_STAR_extended_options_42646))
})();
var state__38839__auto__ = (function (){var statearr_42619 = f__38838__auto__.call(null);
(statearr_42619[(6)] = c__38837__auto____$1);

return statearr_42619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38839__auto__);
});
;})(temp__4657__auto__,event,prog_reset_after_msec,c__38837__auto____$1,inst_42482,inst_42407,inst_42496,state_val_42539,c__38837__auto___42647,vec__42399_42636,element_42637,remove_chan_42638,update_chan_42639,vec__42402_42640,bcast_out_42641,bcast_in_42642,clock_42643,alarm_42644,_STAR_label_text_42645,_STAR_extended_options_42646))
})();
var inst_42498 = cljs.core.async.impl.dispatch.run.call(null,inst_42497);
var state_42538__$1 = (function (){var statearr_42620 = state_42538;
(statearr_42620[(19)] = inst_42498);

return statearr_42620;
})();
var statearr_42621_42713 = state_42538__$1;
(statearr_42621_42713[(2)] = inst_42496);

(statearr_42621_42713[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (37))){
var inst_42477 = (state_42538[(2)]);
var state_42538__$1 = state_42538;
var statearr_42622_42714 = state_42538__$1;
(statearr_42622_42714[(2)] = inst_42477);

(statearr_42622_42714[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (8))){
var inst_42407 = (state_42538[(7)]);
var inst_42411 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element_42637);
var inst_42412 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_42407);
var inst_42413 = cljs.core._EQ_.call(null,inst_42411,inst_42412);
var state_42538__$1 = state_42538;
var statearr_42623_42715 = state_42538__$1;
(statearr_42623_42715[(2)] = inst_42413);

(statearr_42623_42715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (49))){
var inst_42526 = (state_42538[(2)]);
var state_42538__$1 = state_42538;
if(cljs.core.truth_(inst_42526)){
var statearr_42624_42716 = state_42538__$1;
(statearr_42624_42716[(1)] = (50));

} else {
var statearr_42625_42717 = state_42538__$1;
(statearr_42625_42717[(1)] = (51));

}

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
});})(c__38837__auto___42647,vec__42399_42636,element_42637,remove_chan_42638,update_chan_42639,vec__42402_42640,bcast_out_42641,bcast_in_42642,clock_42643,alarm_42644,_STAR_label_text_42645,_STAR_extended_options_42646))
;
return ((function (switch__38793__auto__,c__38837__auto___42647,vec__42399_42636,element_42637,remove_chan_42638,update_chan_42639,vec__42402_42640,bcast_out_42641,bcast_in_42642,clock_42643,alarm_42644,_STAR_label_text_42645,_STAR_extended_options_42646){
return (function() {
var utimer$components$flat_timer$state_machine__38794__auto__ = null;
var utimer$components$flat_timer$state_machine__38794__auto____0 = (function (){
var statearr_42626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42626[(0)] = utimer$components$flat_timer$state_machine__38794__auto__);

(statearr_42626[(1)] = (1));

return statearr_42626;
});
var utimer$components$flat_timer$state_machine__38794__auto____1 = (function (state_42538){
while(true){
var ret_value__38795__auto__ = (function (){try{while(true){
var result__38796__auto__ = switch__38793__auto__.call(null,state_42538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38796__auto__;
}
break;
}
}catch (e42627){if((e42627 instanceof Object)){
var ex__38797__auto__ = e42627;
var statearr_42628_42718 = state_42538;
(statearr_42628_42718[(5)] = ex__38797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42719 = state_42538;
state_42538 = G__42719;
continue;
} else {
return ret_value__38795__auto__;
}
break;
}
});
utimer$components$flat_timer$state_machine__38794__auto__ = function(state_42538){
switch(arguments.length){
case 0:
return utimer$components$flat_timer$state_machine__38794__auto____0.call(this);
case 1:
return utimer$components$flat_timer$state_machine__38794__auto____1.call(this,state_42538);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$components$flat_timer$state_machine__38794__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$components$flat_timer$state_machine__38794__auto____0;
utimer$components$flat_timer$state_machine__38794__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$components$flat_timer$state_machine__38794__auto____1;
return utimer$components$flat_timer$state_machine__38794__auto__;
})()
;})(switch__38793__auto__,c__38837__auto___42647,vec__42399_42636,element_42637,remove_chan_42638,update_chan_42639,vec__42402_42640,bcast_out_42641,bcast_in_42642,clock_42643,alarm_42644,_STAR_label_text_42645,_STAR_extended_options_42646))
})();
var state__38839__auto__ = (function (){var statearr_42629 = f__38838__auto__.call(null);
(statearr_42629[(6)] = c__38837__auto___42647);

return statearr_42629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38839__auto__);
});})(c__38837__auto___42647,vec__42399_42636,element_42637,remove_chan_42638,update_chan_42639,vec__42402_42640,bcast_out_42641,bcast_in_42642,clock_42643,alarm_42644,_STAR_label_text_42645,_STAR_extended_options_42646))
);


return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var vec__42630_42720 = cljs.core.nth.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(3));
var bcast_out_42721 = cljs.core.nth.call(null,vec__42630_42720,(0),null);
var __42722 = cljs.core.nth.call(null,vec__42630_42720,(1),null);
var element_42723 = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
cljs.core.async.put_BANG_.call(null,bcast_out_42721,utimer.events.event_timer_unmount.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element_42723)));

return state;
})], null)], null),"c-flat-timer");
