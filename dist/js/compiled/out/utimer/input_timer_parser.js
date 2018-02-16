// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.input_timer_parser');
goog.require('cljs.core');
goog.require('clojure.string');
utimer.input_timer_parser.re_year = /([0-9]+)\s*y|yr|yrs|year|years/;
utimer.input_timer_parser.re_month = /([0-9]+)\s*mon|month|months/;
utimer.input_timer_parser.re_week = /([0-9]+)\s*w|week|weeks/;
utimer.input_timer_parser.re_day = /([0-9]+)\s*d|day|days|night|nights/;
utimer.input_timer_parser.re_hour = /([0-9]+)\s*h|hr|hrs|hour|hours/;
utimer.input_timer_parser.re_minute = /([0-9]+)\s*m|min|minute|minutes/;
utimer.input_timer_parser.re_second = /([0-9]+)\s*s|sec|secs|second|seconds/;
utimer.input_timer_parser.parse_time_value = (function utimer$input_timer_parser$parse_time_value(re,s){
var vec__50227 = cljs.core.re_find.call(null,re,clojure.string.lower_case.call(null,s));
var _ = cljs.core.nth.call(null,vec__50227,(0),null);
var value = cljs.core.nth.call(null,vec__50227,(1),null);
if(cljs.core.truth_(value)){
return window.parseFloat(value);
} else {
return (0);
}
});
utimer.input_timer_parser.parse = (function utimer$input_timer_parser$parse(s){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"year","year",335913393),utimer.input_timer_parser.parse_time_value.call(null,utimer.input_timer_parser.re_year,s),new cljs.core.Keyword(null,"month","month",-1960248533),utimer.input_timer_parser.parse_time_value.call(null,utimer.input_timer_parser.re_month,s),new cljs.core.Keyword(null,"week","week",-1326473278),utimer.input_timer_parser.parse_time_value.call(null,utimer.input_timer_parser.re_week,s),new cljs.core.Keyword(null,"day","day",-274800446),utimer.input_timer_parser.parse_time_value.call(null,utimer.input_timer_parser.re_day,s),new cljs.core.Keyword(null,"hour","hour",-555989214),utimer.input_timer_parser.parse_time_value.call(null,utimer.input_timer_parser.re_hour,s),new cljs.core.Keyword(null,"minute","minute",-642875969),utimer.input_timer_parser.parse_time_value.call(null,utimer.input_timer_parser.re_minute,s),new cljs.core.Keyword(null,"second","second",-444702010),utimer.input_timer_parser.parse_time_value.call(null,utimer.input_timer_parser.re_second,s),new cljs.core.Keyword(null,"millisecond","millisecond",-540123566),(0)], null);
});
utimer.input_timer_parser.milli_duration = (1);
utimer.input_timer_parser.second_duration = (utimer.input_timer_parser.milli_duration * (1000));
utimer.input_timer_parser.minute_duration = (utimer.input_timer_parser.second_duration * (60));
utimer.input_timer_parser.hour_duration = (utimer.input_timer_parser.minute_duration * (60));
utimer.input_timer_parser.day_duration = (utimer.input_timer_parser.hour_duration * (24));
utimer.input_timer_parser.week_duration = (utimer.input_timer_parser.day_duration * (7));
utimer.input_timer_parser.month_duration = (utimer.input_timer_parser.day_duration * (30));
utimer.input_timer_parser.year_duration = (utimer.input_timer_parser.day_duration * (365));
utimer.input_timer_parser.parse__GT_duration = (function utimer$input_timer_parser$parse__GT_duration(s){
var map__50230 = utimer.input_timer_parser.parse.call(null,s);
var map__50230__$1 = ((((!((map__50230 == null)))?((((map__50230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50230):map__50230);
var year = cljs.core.get.call(null,map__50230__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.call(null,map__50230__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var week = cljs.core.get.call(null,map__50230__$1,new cljs.core.Keyword(null,"week","week",-1326473278));
var day = cljs.core.get.call(null,map__50230__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var hour = cljs.core.get.call(null,map__50230__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var minute = cljs.core.get.call(null,map__50230__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
var second = cljs.core.get.call(null,map__50230__$1,new cljs.core.Keyword(null,"second","second",-444702010));
var millisecond = cljs.core.get.call(null,map__50230__$1,new cljs.core.Keyword(null,"millisecond","millisecond",-540123566));
return ((((((((utimer.input_timer_parser.milli_duration * millisecond) + (utimer.input_timer_parser.second_duration * second)) + (utimer.input_timer_parser.minute_duration * minute)) + (utimer.input_timer_parser.hour_duration * hour)) + (utimer.input_timer_parser.day_duration * day)) + (utimer.input_timer_parser.week_duration * week)) + (utimer.input_timer_parser.month_duration * month)) + (utimer.input_timer_parser.year_duration * year));
});
utimer.input_timer_parser.__duration = (function utimer$input_timer_parser$__duration(duration,segment){
var val = Math.floor((duration / segment));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,(duration - (val * segment))], null);
});
utimer.input_timer_parser.duration__GT_time = (function utimer$input_timer_parser$duration__GT_time(duration){
var time = cljs.core.PersistentArrayMap.EMPTY;
var vec__50232 = utimer.input_timer_parser.__duration.call(null,duration,utimer.input_timer_parser.year_duration);
var years = cljs.core.nth.call(null,vec__50232,(0),null);
var duration__$1 = cljs.core.nth.call(null,vec__50232,(1),null);
var time__$1 = cljs.core.assoc.call(null,time,new cljs.core.Keyword(null,"year","year",335913393),years);
var vec__50235 = utimer.input_timer_parser.__duration.call(null,duration__$1,utimer.input_timer_parser.day_duration);
var days = cljs.core.nth.call(null,vec__50235,(0),null);
var duration__$2 = cljs.core.nth.call(null,vec__50235,(1),null);
var time__$2 = cljs.core.assoc.call(null,time__$1,new cljs.core.Keyword(null,"day","day",-274800446),days);
var vec__50238 = utimer.input_timer_parser.__duration.call(null,duration__$2,utimer.input_timer_parser.hour_duration);
var hours = cljs.core.nth.call(null,vec__50238,(0),null);
var duration__$3 = cljs.core.nth.call(null,vec__50238,(1),null);
var time__$3 = cljs.core.assoc.call(null,time__$2,new cljs.core.Keyword(null,"hour","hour",-555989214),hours);
var vec__50241 = utimer.input_timer_parser.__duration.call(null,duration__$3,utimer.input_timer_parser.minute_duration);
var minutes = cljs.core.nth.call(null,vec__50241,(0),null);
var duration__$4 = cljs.core.nth.call(null,vec__50241,(1),null);
var time__$4 = cljs.core.assoc.call(null,time__$3,new cljs.core.Keyword(null,"minute","minute",-642875969),minutes);
var vec__50244 = utimer.input_timer_parser.__duration.call(null,duration__$4,utimer.input_timer_parser.second_duration);
var seconds = cljs.core.nth.call(null,vec__50244,(0),null);
var duration__$5 = cljs.core.nth.call(null,vec__50244,(1),null);
var time__$5 = cljs.core.assoc.call(null,time__$4,new cljs.core.Keyword(null,"second","second",-444702010),seconds);
var vec__50247 = utimer.input_timer_parser.__duration.call(null,duration__$5,utimer.input_timer_parser.milli_duration);
var milliseconds = cljs.core.nth.call(null,vec__50247,(0),null);
var duration__$6 = cljs.core.nth.call(null,vec__50247,(1),null);
var time__$6 = cljs.core.assoc.call(null,time__$5,new cljs.core.Keyword(null,"millisecond","millisecond",-540123566),milliseconds);
return time__$6;
});
