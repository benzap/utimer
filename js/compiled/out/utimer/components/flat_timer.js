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
utimer.components.flat_timer.editable_label = (function utimer$components$flat_timer$editable_label(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),false], null);
});
utimer.components.flat_timer.editable_time = (function utimer$components$flat_timer$editable_time(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),false], null);
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
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
var react_component_50960 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var dom_node_50961 = ReactDOM.findDOMNode(react_component_50960);
var temp__4657__auto___50962 = document.querySelector(".flat-timer-edit-mode>input");
if(cljs.core.truth_(temp__4657__auto___50962)){
var elem_50963 = temp__4657__auto___50962;
elem_50963.focus();
} else {
}

var temp__4657__auto___50964 = document.querySelector(".flat-timer-input>input");
if(cljs.core.truth_(temp__4657__auto___50964)){
var elem_50965 = temp__4657__auto___50964;
elem_50965.focus();
} else {
}

return state;
})], null);
});
utimer.components.flat_timer.get_alarm = (function utimer$components$flat_timer$get_alarm(state){
return utimer.components.utils.get_alarm.call(null,state);
});
utimer.components.flat_timer.c_flat_timer = rum.core.build_defcs.call(null,(function (state,element,remove_chan){
var clock = new cljs.core.Keyword(null,"clock","clock",-894301127).cljs$core$IFn$_invoke$arity$1(state);
var alarm = utimer.components.flat_timer.get_alarm.call(null,state);
var progress_s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.clock.percent_progress.call(null,clock)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('');
var _STAR_label_text = new cljs.core.Keyword("utimer.components.flat-timer","*label-text","utimer.components.flat-timer/*label-text",-895599819).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_time_text = new cljs.core.Keyword("utimer.components.flat-timer","*time-text","utimer.components.flat-timer/*time-text",2111142535).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_extended_options = new cljs.core.Keyword("utimer.components.flat-timer","*extended-options","utimer.components.flat-timer/*extended-options",1837396324).cljs$core$IFn$_invoke$arity$1(state);
var alarm_50975__$1 = utimer.components.flat_timer.get_alarm.call(null,state);
utimer.alarm.set_loop_BANG_.call(null,alarm_50975__$1,new cljs.core.Keyword(null,"loop?","loop?",457687798).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)));

utimer.alarm.set_sound_BANG_.call(null,alarm_50975__$1,new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)));

if(cljs.core.truth_(utimer.clock.finished_QMARK_.call(null,clock))){
utimer.alarm.play_BANG_.call(null,alarm);
} else {
utimer.alarm.stop_BANG_.call(null,alarm);
}

return React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ut-timer","flat-timer",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("timer-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element))].join('')], null))}),React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flat-timer-main",(cljs.core.truth_(utimer.clock.finished_QMARK_.call(null,clock))?"anim-color-reversal-normal":null)], null))}),React.createElement("svg",({"width": "100%", "height": "100%", "className": "flat-timer-progress"}),React.createElement("rect",({"width": "100%", "height": "100%", "fill": "rgb(196,198,166)", "className": "flat-background"})),React.createElement("rect",({"width": progress_s, "height": "100%", "fill": "rgb(215,194,157)", "className": "svg-timer-progress"})),React.createElement("rect",({"x": progress_s, "width": "1", "height": "100%", "fill": "rgba(0,0,0,0.1)", "className": "svg-timer-progress-tick"}))),React.createElement("div",({"className": "flat-timer-container"}),React.createElement("div",({"className": "flat-timer-left-pane"}),React.createElement("div",({"className": "flat-timer-button play-pause"}),React.createElement("div",({"onClick": ((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options){
return (function (){
if(cljs.core.truth_(utimer.clock.started_QMARK_.call(null,clock))){
return utimer.clock.stop_BANG_.call(null,clock);
} else {
if(cljs.core.truth_(utimer.clock.finished_QMARK_.call(null,clock))){
return utimer.clock.start_BANG_.call(null,utimer.clock.restart_BANG_.call(null,clock));
} else {
return utimer.clock.start_BANG_.call(null,clock);

}
}
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options))
, "className": "material-icons noselect"}),(cljs.core.truth_(utimer.clock.started_QMARK_.call(null,clock))?"pause":"play_arrow")))),React.createElement("div",({"className": "flat-timer-middle-pane"}),(function (){var attrs50968 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_label_text))))?(function (){var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_label_text));
var has_text_QMARK_ = (cljs.core.count.call(null,text) > (0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flat-timer-label","div.flat-timer-label",2056356862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((has_text_QMARK_)?null:"no-label"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (text,has_text_QMARK_,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options){
return (function (){
return cljs.core.swap_BANG_.call(null,_STAR_label_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),true);
});})(text,has_text_QMARK_,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options))
], null),((!(has_text_QMARK_))?"No Label":text)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.material-icons.noselect","div.material-icons.noselect",519407819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (text,has_text_QMARK_,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options){
return (function (){
return cljs.core.swap_BANG_.call(null,_STAR_label_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),true);
});})(text,has_text_QMARK_,clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options))
], null),"edit"], null)], null);
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flat-timer-edit-mode.noselect","div.flat-timer-edit-mode.noselect",2053657454),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_label_text)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options){
return (function (e){
return cljs.core.swap_BANG_.call(null,_STAR_label_text,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),e.target.value);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options){
return (function (e){
var key = e.key;
if((cljs.core._EQ_.call(null,key,"Enter")) || (cljs.core._EQ_.call(null,key,"Escape"))){
return cljs.core.swap_BANG_.call(null,_STAR_label_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),false);
} else {
return null;
}
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.material-icons","div.material-icons",227325836),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options){
return (function (){
return cljs.core.swap_BANG_.call(null,_STAR_label_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),false);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options))
], null),"check"], null)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs50968))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flat-timer-middle-container","noselect"], null)], null),attrs50968)):({"className": "flat-timer-middle-container noselect"})),((cljs.core.map_QMARK_.call(null,attrs50968))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50968)], null)));
})(),(function (){var attrs50969 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_time_text))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flat-timer-display-container","div.flat-timer-display-container",-1631106901),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options){
return (function (e){
return cljs.core.swap_BANG_.call(null,_STAR_time_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),true,new cljs.core.Keyword(null,"text","text",-1790561697),"");
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not.call(null,utimer.clock.finished_QMARK_.call(null,clock)))?utimer.components.flat_timer.display_timeleft_class.call(null,clock):utimer.components.flat_timer.display_duration_class.call(null,clock))], null),((cljs.core.not.call(null,utimer.clock.finished_QMARK_.call(null,clock)))?utimer.components.flat_timer.display_timeleft.call(null,clock):utimer.components.flat_timer.display_duration.call(null,clock))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_time_text)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options){
return (function (e){
return cljs.core.swap_BANG_.call(null,_STAR_time_text,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),e.target.value);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options){
return (function (e){
var key = e.key;
var G__50970 = key;
switch (G__50970) {
case "Enter":
cljs.core.swap_BANG_.call(null,_STAR_time_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),false);

utimer.clock.change_BANG_.call(null,clock,utimer.input_timer_parser.parse__GT_duration.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_time_text))));

return utimer.clock.restart_BANG_.call(null,clock);

break;
case "Escape":
return cljs.core.swap_BANG_.call(null,_STAR_time_text,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),false);

break;
default:
return null;

}
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options))
], null)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs50969))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flat-timer-input"], null)], null),attrs50969)):({"className": "flat-timer-input"})),((cljs.core.map_QMARK_.call(null,attrs50969))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50969)], null)));
})(),React.createElement("div",({"className": "flat-timer-middle-container noselect"}),React.createElement("div",({"className": "flat-timer-label"}),React.createElement("div",({"onClick": ((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options){
return (function (){
return cljs.core.swap_BANG_.call(null,_STAR_extended_options,cljs.core.update,new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.not);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options))
, "className": "material-icons noselect"}),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)))?"expand_less":"dehaze"))))),React.createElement("div",({"className": "flat-timer-right-pane"}),React.createElement("div",({"onClick": ((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options){
return (function (){
return cljs.core.async.put_BANG_.call(null,remove_chan,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element));
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options))
, "title": "Close Timer", "className": "flat-timer-button close"}),React.createElement("div",({"className": "material-icons noselect"}),"close")),React.createElement("div",({"onClick": ((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options){
return (function (){
return utimer.clock.restart_BANG_.call(null,utimer.clock.stop_BANG_.call(null,clock));
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options))
, "title": "Restart Timer", "className": "flat-timer-button restart"}),React.createElement("div",({"className": "material-icons noselect"}),"repeat"))))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flat-timer-extended-options.anim-expand-vertical-normal","div.flat-timer-extended-options.anim-expand-vertical-normal",-1181375580),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".alarm-sound-setting",".alarm-sound-setting",-1430141014),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Alarm Sound"], null),new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options){
return (function (e){
return cljs.core.swap_BANG_.call(null,_STAR_extended_options,cljs.core.assoc,new cljs.core.Keyword(null,"sound","sound",-2127407070),e.target.value);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),"None"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/analog_alarm.mp3"], null),"Analog Alarm"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/chinese_gong.mp3"], null),"Chinese Gong"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/dixie_horn.mp3"], null),"Dixie Horn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/fog_horn.mp3"], null),"Fog Horn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/front_desk_bell.mp3"], null),"Front Desk Bell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/metal_gong.mp3"], null),"Metal Gong"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/missle_alert.mp3"], null),"Missle Alert"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/news_intro.mp3"], null),"News Intro"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/police_whistle.mp3"], null),"Police Whistle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/railroad_crossing.mp3"], null),"Railroad Crossing"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/school_bell.mp3"], null),"School Bell"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/shotgun.mp3"], null),"Shotgun"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/speaker_pulse.mp3"], null),"Speaker Pulse"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/train_whistle.mp3"], null),"Train Whistle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"audio/war_alarm.mp3"], null),"War Alarm"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.mat-button","button.mat-button",1967151257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options){
return (function (){
return utimer.alarm.test_play_BANG_.call(null,alarm);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options))
], null),"Test Alarm"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".alarm-sound-setting",".alarm-sound-setting",-1430141014),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Alarm Repeat?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"defaultChecked","defaultChecked",-834047344),new cljs.core.Keyword(null,"loop?","loop?",457687798).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_extended_options)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options){
return (function (e){
var val = e.target.checked;
return cljs.core.swap_BANG_.call(null,_STAR_extended_options,cljs.core.assoc,new cljs.core.Keyword(null,"loop?","loop?",457687798),val);
});})(clock,alarm,progress_s,_STAR_label_text,_STAR_time_text,_STAR_extended_options))
], null)], null)], null)], null):null)));
}),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (element){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element);
})], null),rum.core.reactive,utimer.components.utils.mixin_clock.call(null),utimer.components.utils.mixin_alarm.call(null),utimer.components.flat_timer.mixin_flat_timer.call(null),rum.core.local.call(null,utimer.components.flat_timer.editable_label.call(null),new cljs.core.Keyword("utimer.components.flat-timer","*label-text","utimer.components.flat-timer/*label-text",-895599819)),rum.core.local.call(null,utimer.components.flat_timer.editable_time.call(null),new cljs.core.Keyword("utimer.components.flat-timer","*time-text","utimer.components.flat-timer/*time-text",2111142535)),rum.core.local.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"loop?","loop?",457687798),false,new cljs.core.Keyword(null,"sound","sound",-2127407070),utimer.alarm.default_alarm_sound,new cljs.core.Keyword(null,"test?","test?",-1078989737),false], null),new cljs.core.Keyword("utimer.components.flat-timer","*extended-options","utimer.components.flat-timer/*extended-options",1837396324))], null),"c-flat-timer");
