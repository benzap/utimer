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
var G__37132 = c;
switch (G__37132) {
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
var G__37134 = c;
switch (G__37134) {
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
utimer.display.year_display_timer = (function utimer$display$year_display_timer(p__37136){
var map__37137 = p__37136;
var map__37137__$1 = ((((!((map__37137 == null)))?((((map__37137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37137):map__37137);
var year = cljs.core.get.call(null,map__37137__$1,new cljs.core.Keyword(null,"year","year",335913393));
var day = cljs.core.get.call(null,map__37137__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var hour = cljs.core.get.call(null,map__37137__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var minute = cljs.core.get.call(null,map__37137__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Year",year)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Day",day)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Hour",hour)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(minute),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Minute",minute))].join('');
});
utimer.display.day_display_timer = (function utimer$display$day_display_timer(p__37139){
var map__37140 = p__37139;
var map__37140__$1 = ((((!((map__37140 == null)))?((((map__37140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37140):map__37140);
var day = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var hour = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var minute = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
var second = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"second","second",-444702010));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Day",day)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Hour",hour)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(minute),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Minute",minute)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(second),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Second",second))].join('');
});
utimer.display.hour_display_timer = (function utimer$display$hour_display_timer(p__37142){
var map__37143 = p__37142;
var map__37143__$1 = ((((!((map__37143 == null)))?((((map__37143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37143.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37143):map__37143);
var hour = cljs.core.get.call(null,map__37143__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var minute = cljs.core.get.call(null,map__37143__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
var second = cljs.core.get.call(null,map__37143__$1,new cljs.core.Keyword(null,"second","second",-444702010));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.fixed_two.call(null,hour)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.fixed_two.call(null,minute)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.fixed_two.call(null,second))].join('');
});
utimer.display.minute_display_timer = (function utimer$display$minute_display_timer(p__37145){
var map__37146 = p__37145;
var map__37146__$1 = ((((!((map__37146 == null)))?((((map__37146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37146):map__37146);
var minute = cljs.core.get.call(null,map__37146__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
var second = cljs.core.get.call(null,map__37146__$1,new cljs.core.Keyword(null,"second","second",-444702010));
var millisecond = cljs.core.get.call(null,map__37146__$1,new cljs.core.Keyword(null,"millisecond","millisecond",-540123566));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.fixed_two.call(null,minute)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.fixed_two.call(null,second))].join('');
});
utimer.display.second_display_timer = (function utimer$display$second_display_timer(p__37148){
var map__37149 = p__37148;
var map__37149__$1 = ((((!((map__37149 == null)))?((((map__37149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37149):map__37149);
var second = cljs.core.get.call(null,map__37149__$1,new cljs.core.Keyword(null,"second","second",-444702010));
var millisecond = cljs.core.get.call(null,map__37149__$1,new cljs.core.Keyword(null,"millisecond","millisecond",-540123566));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(second),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.fixed_three.call(null,millisecond)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('');
});
utimer.display.invalid_display_timer = (function utimer$display$invalid_display_timer(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Err")].join('');
});
utimer.display.display_timeleft = (function utimer$display$display_timeleft(p__37151){
var map__37152 = p__37151;
var map__37152__$1 = ((((!((map__37152 == null)))?((((map__37152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37152.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37152):map__37152);
var time = map__37152__$1;
var year = cljs.core.get.call(null,map__37152__$1,new cljs.core.Keyword(null,"year","year",335913393));
var day = cljs.core.get.call(null,map__37152__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var hour = cljs.core.get.call(null,map__37152__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var minute = cljs.core.get.call(null,map__37152__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
var second = cljs.core.get.call(null,map__37152__$1,new cljs.core.Keyword(null,"second","second",-444702010));
var millisecond = cljs.core.get.call(null,map__37152__$1,new cljs.core.Keyword(null,"millisecond","millisecond",-540123566));
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
if(cljs.core.truth_(utimer.display._GT_0.call(null,millisecond))){
return utimer.display.second_display_timer.call(null,time);
} else {
return utimer.display.invalid_display_timer.call(null);

}
}
}
}
}
}
});
utimer.display.display_class = (function utimer$display$display_class(p__37154){
var map__37155 = p__37154;
var map__37155__$1 = ((((!((map__37155 == null)))?((((map__37155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37155.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37155):map__37155);
var year = cljs.core.get.call(null,map__37155__$1,new cljs.core.Keyword(null,"year","year",335913393));
var day = cljs.core.get.call(null,map__37155__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var hour = cljs.core.get.call(null,map__37155__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var minute = cljs.core.get.call(null,map__37155__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
var second = cljs.core.get.call(null,map__37155__$1,new cljs.core.Keyword(null,"second","second",-444702010));
var millisecond = cljs.core.get.call(null,map__37155__$1,new cljs.core.Keyword(null,"millisecond","millisecond",-540123566));
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
utimer.display.float__GT_fix1 = (function utimer$display$float__GT_fix1(x){
var s = x.toFixed((1));
return clojure.string.replace.call(null,s,/\.0/,"");
});
utimer.display.shorthand_year_display_timer = (function utimer$display$shorthand_year_display_timer(p__37157){
var map__37158 = p__37157;
var map__37158__$1 = ((((!((map__37158 == null)))?((((map__37158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37158):map__37158);
var time = map__37158__$1;
var year = cljs.core.get.call(null,map__37158__$1,new cljs.core.Keyword(null,"year","year",335913393));
var day = cljs.core.get.call(null,map__37158__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var year__$1 = utimer.display.float__GT_fix1.call(null,(year + (day / (365))));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("~"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(year__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Year",year__$1))].join('');
});
utimer.display.shorthand_day_display_timer = (function utimer$display$shorthand_day_display_timer(p__37160){
var map__37161 = p__37160;
var map__37161__$1 = ((((!((map__37161 == null)))?((((map__37161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37161):map__37161);
var time = map__37161__$1;
var day = cljs.core.get.call(null,map__37161__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var hour = cljs.core.get.call(null,map__37161__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var day__$1 = utimer.display.float__GT_fix1.call(null,(day + (hour / (24))));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("~"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Day",day__$1))].join('');
});
utimer.display.shorthand_hour_display_timer = (function utimer$display$shorthand_hour_display_timer(p__37163){
var map__37164 = p__37163;
var map__37164__$1 = ((((!((map__37164 == null)))?((((map__37164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37164):map__37164);
var time = map__37164__$1;
var hour = cljs.core.get.call(null,map__37164__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var minute = cljs.core.get.call(null,map__37164__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
var hour__$1 = utimer.display.float__GT_fix1.call(null,(hour + (minute / (60))));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("~"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Hour",hour__$1))].join('');
});
utimer.display.shorthand_minute_display_timer = (function utimer$display$shorthand_minute_display_timer(p__37166){
var map__37167 = p__37166;
var map__37167__$1 = ((((!((map__37167 == null)))?((((map__37167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37167):map__37167);
var time = map__37167__$1;
var minute = cljs.core.get.call(null,map__37167__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
var second = cljs.core.get.call(null,map__37167__$1,new cljs.core.Keyword(null,"second","second",-444702010));
if((minute >= (10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("~"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(minute),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.auto_plural.call(null," Minute",minute))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(minute),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(utimer.display.fixed_two.call(null,second))].join('');
}
});
utimer.display.shorthand_second_display_timer = (function utimer$display$shorthand_second_display_timer(p__37169){
var map__37170 = p__37169;
var map__37170__$1 = ((((!((map__37170 == null)))?((((map__37170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37170.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37170):map__37170);
var time = map__37170__$1;
var second = cljs.core.get.call(null,map__37170__$1,new cljs.core.Keyword(null,"second","second",-444702010));
if((second >= (10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(second),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(second),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s!")].join('');
}
});
utimer.display.display_title_timeleft = (function utimer$display$display_title_timeleft(p__37172){
var map__37173 = p__37172;
var map__37173__$1 = ((((!((map__37173 == null)))?((((map__37173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37173):map__37173);
var time = map__37173__$1;
var year = cljs.core.get.call(null,map__37173__$1,new cljs.core.Keyword(null,"year","year",335913393));
var day = cljs.core.get.call(null,map__37173__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var hour = cljs.core.get.call(null,map__37173__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var minute = cljs.core.get.call(null,map__37173__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
var second = cljs.core.get.call(null,map__37173__$1,new cljs.core.Keyword(null,"second","second",-444702010));
var millisecond = cljs.core.get.call(null,map__37173__$1,new cljs.core.Keyword(null,"millisecond","millisecond",-540123566));
if(cljs.core.truth_(utimer.display._GT_0.call(null,year))){
return utimer.display.shorthand_year_display_timer.call(null,time);
} else {
if(cljs.core.truth_(utimer.display._GT_0.call(null,day))){
return utimer.display.shorthand_day_display_timer.call(null,time);
} else {
if(cljs.core.truth_(utimer.display._GT_0.call(null,hour))){
return utimer.display.shorthand_hour_display_timer.call(null,time);
} else {
if(cljs.core.truth_(utimer.display._GT_0.call(null,minute))){
return utimer.display.shorthand_minute_display_timer.call(null,time);
} else {
if(cljs.core.truth_(utimer.display._GT_0.call(null,second))){
return utimer.display.shorthand_second_display_timer.call(null,time);
} else {
if(cljs.core.truth_(utimer.display._GT_0.call(null,millisecond))){
return utimer.display.shorthand_second_display_timer.call(null,time);
} else {
return utimer.display.invalid_display_timer.call(null);

}
}
}
}
}
}
});
