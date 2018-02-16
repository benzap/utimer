// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.display');
goog.require('cljs.core');
goog.require('clojure.string');
utimer.display._GT_0 = (function utimer$display$_GT_0(x){
return (x > (0));
});
utimer.display._GT_1 = (function utimer$display$_GT_1(x){
return (x > (1));
});
utimer.display.auto_plural = (function utimer$display$auto_plural(text,x){
if(cljs.core.truth_((function (){var or__35048__auto__ = cljs.core._EQ_.call(null,x,(0));
if(or__35048__auto__){
return or__35048__auto__;
} else {
return utimer.display._GT_1.call(null,x);
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('');
} else {
return text;
}
});
utimer.display.fixed_two = (function utimer$display$fixed_two(x){
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
var c = cljs.core.count.call(null,s);
var G__50852 = c;
switch (G__50852) {
case (0):
return "00";

break;
case (1):
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("0"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');

break;
case (2):
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');

break;
default:
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');

}
});
utimer.display.fixed_three = (function utimer$display$fixed_three(x){
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
var c = cljs.core.count.call(null,s);
var G__50854 = c;
switch (G__50854) {
case (0):
return "000";

break;
case (1):
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("00"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');

break;
case (2):
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("0"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');

break;
default:
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');

}
});
utimer.display.year_display_timer = (function utimer$display$year_display_timer(p__50856){
var map__50857 = p__50856;
var map__50857__$1 = ((((!((map__50857 == null)))?((((map__50857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50857.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50857):map__50857);
var year = cljs.core.get.call(null,map__50857__$1,new cljs.core.Keyword(null,"year","year",335913393));
var day = cljs.core.get.call(null,map__50857__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var hour = cljs.core.get.call(null,map__50857__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var minute = cljs.core.get.call(null,map__50857__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Year",year)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Day",day)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Hour",hour)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(minute),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Minute",minute))].join('');
});
utimer.display.day_display_timer = (function utimer$display$day_display_timer(p__50859){
var map__50860 = p__50859;
var map__50860__$1 = ((((!((map__50860 == null)))?((((map__50860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50860):map__50860);
var day = cljs.core.get.call(null,map__50860__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var hour = cljs.core.get.call(null,map__50860__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var minute = cljs.core.get.call(null,map__50860__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
var second = cljs.core.get.call(null,map__50860__$1,new cljs.core.Keyword(null,"second","second",-444702010));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Day",day)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Hour",hour)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(minute),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Minute",minute)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(second),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Second",second))].join('');
});
utimer.display.hour_display_timer = (function utimer$display$hour_display_timer(p__50862){
var map__50863 = p__50862;
var map__50863__$1 = ((((!((map__50863 == null)))?((((map__50863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50863):map__50863);
var hour = cljs.core.get.call(null,map__50863__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var minute = cljs.core.get.call(null,map__50863__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
var second = cljs.core.get.call(null,map__50863__$1,new cljs.core.Keyword(null,"second","second",-444702010));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.fixed_two.call(null,hour)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.fixed_two.call(null,minute)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.fixed_two.call(null,second))].join('');
});
utimer.display.minute_display_timer = (function utimer$display$minute_display_timer(p__50865){
var map__50866 = p__50865;
var map__50866__$1 = ((((!((map__50866 == null)))?((((map__50866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50866):map__50866);
var minute = cljs.core.get.call(null,map__50866__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
var second = cljs.core.get.call(null,map__50866__$1,new cljs.core.Keyword(null,"second","second",-444702010));
var millisecond = cljs.core.get.call(null,map__50866__$1,new cljs.core.Keyword(null,"millisecond","millisecond",-540123566));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.fixed_two.call(null,minute)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.fixed_two.call(null,second))].join('');
});
utimer.display.second_display_timer = (function utimer$display$second_display_timer(p__50868){
var map__50869 = p__50868;
var map__50869__$1 = ((((!((map__50869 == null)))?((((map__50869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50869):map__50869);
var second = cljs.core.get.call(null,map__50869__$1,new cljs.core.Keyword(null,"second","second",-444702010));
var millisecond = cljs.core.get.call(null,map__50869__$1,new cljs.core.Keyword(null,"millisecond","millisecond",-540123566));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(second),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.fixed_three.call(null,millisecond)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('');
});
utimer.display.display_timeleft = (function utimer$display$display_timeleft(p__50871){
var map__50872 = p__50871;
var map__50872__$1 = ((((!((map__50872 == null)))?((((map__50872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50872.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50872):map__50872);
var time = map__50872__$1;
var year = cljs.core.get.call(null,map__50872__$1,new cljs.core.Keyword(null,"year","year",335913393));
var day = cljs.core.get.call(null,map__50872__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var hour = cljs.core.get.call(null,map__50872__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var minute = cljs.core.get.call(null,map__50872__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
var second = cljs.core.get.call(null,map__50872__$1,new cljs.core.Keyword(null,"second","second",-444702010));
var millisecond = cljs.core.get.call(null,map__50872__$1,new cljs.core.Keyword(null,"millisecond","millisecond",-540123566));
if(cljs.core.truth_(utimer.display._GT_0.call(null,year))){
return utimer.display.year_display_timer.call(null,time);
} else {
if(cljs.core.truth_(utimer.display._GT_0.call(null,day))){
return utimer.display.day_display_timer.call(null,time);
} else {
if(cljs.core.truth_(utimer.display._GT_0.call(null,hour))){
return utimer.display.hour_display_timer.call(null,time);
} else {
if(cljs.core.truth_(utimer.display._GT_0.call(null,minute))){
return utimer.display.minute_display_timer.call(null,time);
} else {
if(cljs.core.truth_(utimer.display._GT_0.call(null,second))){
return utimer.display.second_display_timer.call(null,time);
} else {
return utimer.display.second_display_timer.call(null,time);

}
}
}
}
}
});
utimer.display.display_class = (function utimer$display$display_class(p__50874){
var map__50875 = p__50874;
var map__50875__$1 = ((((!((map__50875 == null)))?((((map__50875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50875.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50875):map__50875);
var year = cljs.core.get.call(null,map__50875__$1,new cljs.core.Keyword(null,"year","year",335913393));
var day = cljs.core.get.call(null,map__50875__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var hour = cljs.core.get.call(null,map__50875__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var minute = cljs.core.get.call(null,map__50875__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
var second = cljs.core.get.call(null,map__50875__$1,new cljs.core.Keyword(null,"second","second",-444702010));
var millisecond = cljs.core.get.call(null,map__50875__$1,new cljs.core.Keyword(null,"millisecond","millisecond",-540123566));
if(cljs.core.truth_(utimer.display._GT_0.call(null,year))){
return "display-timer-year";
} else {
if(cljs.core.truth_(utimer.display._GT_0.call(null,day))){
return "display-timer-day";
} else {
if(cljs.core.truth_(utimer.display._GT_0.call(null,hour))){
return "display-timer-hour";
} else {
if(cljs.core.truth_(utimer.display._GT_0.call(null,minute))){
return "display-timer-minute";
} else {
if(cljs.core.truth_(utimer.display._GT_0.call(null,second))){
return "display-timer-second";
} else {
return "display-timer-second";

}
}
}
}
}
});
