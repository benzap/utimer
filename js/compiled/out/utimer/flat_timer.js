// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.flat_timer');
goog.require('cljs.core');
goog.require('utimer.utils');
goog.require('utimer.alarm');
utimer.flat_timer.default_options = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"loop?","loop?",457687798),false,new cljs.core.Keyword(null,"sound","sound",-2127407070),utimer.alarm.default_alarm_sound,new cljs.core.Keyword(null,"prog-start-label","prog-start-label",-373437096),"",new cljs.core.Keyword(null,"prog-close-after-msec","prog-close-after-msec",-1789566241),null,new cljs.core.Keyword(null,"prog-reset-after-msec","prog-reset-after-msec",368109610),null], null);
utimer.flat_timer.new_flat_timer = (function utimer$flat_timer$new_flat_timer(var_args){
var args__36180__auto__ = [];
var len__36173__auto___42490 = arguments.length;
var i__36174__auto___42491 = (0);
while(true){
if((i__36174__auto___42491 < len__36173__auto___42490)){
args__36180__auto__.push((arguments[i__36174__auto___42491]));

var G__42492 = (i__36174__auto___42491 + (1));
i__36174__auto___42491 = G__42492;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return utimer.flat_timer.new_flat_timer.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});

utimer.flat_timer.new_flat_timer.cljs$core$IFn$_invoke$arity$variadic = (function (p__42487){
var map__42488 = p__42487;
var map__42488__$1 = ((((!((map__42488 == null)))?((((map__42488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42488):map__42488);
var initial = cljs.core.get.call(null,map__42488__$1,new cljs.core.Keyword(null,"initial","initial",1854648214),"5 Minutes");
var label = cljs.core.get.call(null,map__42488__$1,new cljs.core.Keyword(null,"label","label",1718410804),"");
var options = cljs.core.get.call(null,map__42488__$1,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),utimer.utils.create_uuid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"flat","flat",577594262),new cljs.core.Keyword(null,"initial","initial",1854648214),initial,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,utimer.flat_timer.default_options,options)], null);
});

utimer.flat_timer.new_flat_timer.cljs$lang$maxFixedArity = (0);

utimer.flat_timer.new_flat_timer.cljs$lang$applyTo = (function (seq42486){
return utimer.flat_timer.new_flat_timer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42486));
});

