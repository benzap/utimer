// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.title_updater');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('utimer.display');
goog.require('utimer.input_timer_parser');
utimer.title_updater.duration__GT_display = (function utimer$title_updater$duration__GT_display(ms){
return utimer.display.display_title_timeleft.call(null,utimer.input_timer_parser.duration__GT_time.call(null,ms));
});
utimer.title_updater.set_title_BANG_ = (function utimer$title_updater$set_title_BANG_(title){
return (document["title"] = title);
});
utimer.title_updater.remove_not_started_QMARK_ = (function utimer$title_updater$remove_not_started_QMARK_(time_events){
return cljs.core.filter.call(null,(function (p__42164){
var map__42165 = p__42164;
var map__42165__$1 = ((((!((map__42165 == null)))?((((map__42165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42165):map__42165);
var started_QMARK_ = cljs.core.get.call(null,map__42165__$1,new cljs.core.Keyword(null,"started?","started?",-1301062863));
return started_QMARK_;
}),time_events);
});
utimer.title_updater.sort_by_closest_end_time = (function utimer$title_updater$sort_by_closest_end_time(time_events){
return cljs.core.sort_by.call(null,(function (p__42167){
var map__42168 = p__42167;
var map__42168__$1 = ((((!((map__42168 == null)))?((((map__42168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42168):map__42168);
var progress = cljs.core.get.call(null,map__42168__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var duration = cljs.core.get.call(null,map__42168__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return (duration - progress);
}),time_events);
});
utimer.title_updater.get_closest_time_event = (function utimer$title_updater$get_closest_time_event(time_events){
return cljs.core.first.call(null,utimer.title_updater.sort_by_closest_end_time.call(null,utimer.title_updater.remove_not_started_QMARK_.call(null,time_events)));
});
utimer.title_updater.timer_updater_interval = (50);
utimer.title_updater.update_chan = cljs.core.async.chan.call(null);
utimer.title_updater._STAR_update_listing = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
utimer.title_updater.mixin_update_title = (function utimer$title_updater$mixin_update_title(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var c__39280__auto___42321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39280__auto___42321){
return (function (){
var f__39281__auto__ = (function (){var switch__39236__auto__ = ((function (c__39280__auto___42321){
return (function (state_42211){
var state_val_42212 = (state_42211[(1)]);
if((state_val_42212 === (7))){
var inst_42207 = (state_42211[(2)]);
var state_42211__$1 = state_42211;
var statearr_42213_42322 = state_42211__$1;
(statearr_42213_42322[(2)] = inst_42207);

(statearr_42213_42322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42212 === (1))){
var state_42211__$1 = state_42211;
var statearr_42214_42323 = state_42211__$1;
(statearr_42214_42323[(2)] = null);

(statearr_42214_42323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42212 === (4))){
var inst_42172 = (state_42211[(7)]);
var inst_42172__$1 = (state_42211[(2)]);
var state_42211__$1 = (function (){var statearr_42215 = state_42211;
(statearr_42215[(7)] = inst_42172__$1);

return statearr_42215;
})();
if(cljs.core.truth_(inst_42172__$1)){
var statearr_42216_42324 = state_42211__$1;
(statearr_42216_42324[(1)] = (5));

} else {
var statearr_42217_42325 = state_42211__$1;
(statearr_42217_42325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42212 === (15))){
var inst_42172 = (state_42211[(7)]);
var state_42211__$1 = state_42211;
var statearr_42218_42326 = state_42211__$1;
(statearr_42218_42326[(2)] = inst_42172);

(statearr_42218_42326[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42212 === (13))){
var inst_42187 = (state_42211[(2)]);
var state_42211__$1 = state_42211;
var statearr_42219_42327 = state_42211__$1;
(statearr_42219_42327[(2)] = inst_42187);

(statearr_42219_42327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42212 === (6))){
var state_42211__$1 = state_42211;
var statearr_42220_42328 = state_42211__$1;
(statearr_42220_42328[(2)] = null);

(statearr_42220_42328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42212 === (3))){
var inst_42209 = (state_42211[(2)]);
var state_42211__$1 = state_42211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42211__$1,inst_42209);
} else {
if((state_val_42212 === (12))){
var state_42211__$1 = state_42211;
var statearr_42221_42329 = state_42211__$1;
(statearr_42221_42329[(2)] = false);

(statearr_42221_42329[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42212 === (2))){
var state_42211__$1 = state_42211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42211__$1,(4),utimer.title_updater.update_chan);
} else {
if((state_val_42212 === (11))){
var state_42211__$1 = state_42211;
var statearr_42222_42330 = state_42211__$1;
(statearr_42222_42330[(2)] = true);

(statearr_42222_42330[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42212 === (9))){
var state_42211__$1 = state_42211;
var statearr_42223_42331 = state_42211__$1;
(statearr_42223_42331[(2)] = false);

(statearr_42223_42331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42212 === (5))){
var inst_42172 = (state_42211[(7)]);
var inst_42176 = (inst_42172 == null);
var inst_42177 = cljs.core.not.call(null,inst_42176);
var state_42211__$1 = state_42211;
if(inst_42177){
var statearr_42224_42332 = state_42211__$1;
(statearr_42224_42332[(1)] = (8));

} else {
var statearr_42225_42333 = state_42211__$1;
(statearr_42225_42333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42212 === (14))){
var inst_42172 = (state_42211[(7)]);
var inst_42192 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42172);
var state_42211__$1 = state_42211;
var statearr_42226_42334 = state_42211__$1;
(statearr_42226_42334[(2)] = inst_42192);

(statearr_42226_42334[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42212 === (16))){
var inst_42195 = (state_42211[(2)]);
var inst_42196 = cljs.core.get.call(null,inst_42195,new cljs.core.Keyword(null,"id","id",-1388402092));
var inst_42197 = cljs.core.get.call(null,inst_42195,new cljs.core.Keyword(null,"label","label",1718410804));
var inst_42198 = cljs.core.get.call(null,inst_42195,new cljs.core.Keyword(null,"progress","progress",244323547));
var inst_42199 = cljs.core.get.call(null,inst_42195,new cljs.core.Keyword(null,"duration","duration",1444101068));
var inst_42200 = cljs.core.get.call(null,inst_42195,new cljs.core.Keyword(null,"started?","started?",-1301062863));
var inst_42201 = cljs.core.get.call(null,inst_42195,new cljs.core.Keyword(null,"finished?","finished?",2067288119));
var inst_42202 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_42195);
var inst_42203 = cljs.core.swap_BANG_.call(null,utimer.title_updater._STAR_update_listing,cljs.core.assoc,inst_42202,inst_42195);
var state_42211__$1 = (function (){var statearr_42227 = state_42211;
(statearr_42227[(8)] = inst_42203);

(statearr_42227[(9)] = inst_42201);

(statearr_42227[(10)] = inst_42199);

(statearr_42227[(11)] = inst_42198);

(statearr_42227[(12)] = inst_42196);

(statearr_42227[(13)] = inst_42197);

(statearr_42227[(14)] = inst_42200);

return statearr_42227;
})();
var statearr_42228_42335 = state_42211__$1;
(statearr_42228_42335[(2)] = null);

(statearr_42228_42335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42212 === (10))){
var inst_42190 = (state_42211[(2)]);
var state_42211__$1 = state_42211;
if(cljs.core.truth_(inst_42190)){
var statearr_42229_42336 = state_42211__$1;
(statearr_42229_42336[(1)] = (14));

} else {
var statearr_42230_42337 = state_42211__$1;
(statearr_42230_42337[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42212 === (8))){
var inst_42172 = (state_42211[(7)]);
var inst_42179 = inst_42172.cljs$lang$protocol_mask$partition0$;
var inst_42180 = (inst_42179 & (64));
var inst_42181 = inst_42172.cljs$core$ISeq$;
var inst_42182 = (cljs.core.PROTOCOL_SENTINEL === inst_42181);
var inst_42183 = (inst_42180) || (inst_42182);
var state_42211__$1 = state_42211;
if(cljs.core.truth_(inst_42183)){
var statearr_42231_42338 = state_42211__$1;
(statearr_42231_42338[(1)] = (11));

} else {
var statearr_42232_42339 = state_42211__$1;
(statearr_42232_42339[(1)] = (12));

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
});})(c__39280__auto___42321))
;
return ((function (switch__39236__auto__,c__39280__auto___42321){
return (function() {
var utimer$title_updater$mixin_update_title_$_state_machine__39237__auto__ = null;
var utimer$title_updater$mixin_update_title_$_state_machine__39237__auto____0 = (function (){
var statearr_42233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42233[(0)] = utimer$title_updater$mixin_update_title_$_state_machine__39237__auto__);

(statearr_42233[(1)] = (1));

return statearr_42233;
});
var utimer$title_updater$mixin_update_title_$_state_machine__39237__auto____1 = (function (state_42211){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_42211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e42234){if((e42234 instanceof Object)){
var ex__39240__auto__ = e42234;
var statearr_42235_42340 = state_42211;
(statearr_42235_42340[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42341 = state_42211;
state_42211 = G__42341;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
utimer$title_updater$mixin_update_title_$_state_machine__39237__auto__ = function(state_42211){
switch(arguments.length){
case 0:
return utimer$title_updater$mixin_update_title_$_state_machine__39237__auto____0.call(this);
case 1:
return utimer$title_updater$mixin_update_title_$_state_machine__39237__auto____1.call(this,state_42211);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$title_updater$mixin_update_title_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$title_updater$mixin_update_title_$_state_machine__39237__auto____0;
utimer$title_updater$mixin_update_title_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$title_updater$mixin_update_title_$_state_machine__39237__auto____1;
return utimer$title_updater$mixin_update_title_$_state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39280__auto___42321))
})();
var state__39282__auto__ = (function (){var statearr_42236 = f__39281__auto__.call(null);
(statearr_42236[(6)] = c__39280__auto___42321);

return statearr_42236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39282__auto__);
});})(c__39280__auto___42321))
);


var c__39280__auto___42342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39280__auto___42342){
return (function (){
var f__39281__auto__ = (function (){var switch__39236__auto__ = ((function (c__39280__auto___42342){
return (function (state_42289){
var state_val_42290 = (state_42289[(1)]);
if((state_val_42290 === (7))){
var inst_42240 = (state_42289[(7)]);
var inst_42247 = inst_42240.cljs$lang$protocol_mask$partition0$;
var inst_42248 = (inst_42247 & (64));
var inst_42249 = inst_42240.cljs$core$ISeq$;
var inst_42250 = (cljs.core.PROTOCOL_SENTINEL === inst_42249);
var inst_42251 = (inst_42248) || (inst_42250);
var state_42289__$1 = state_42289;
if(cljs.core.truth_(inst_42251)){
var statearr_42291_42343 = state_42289__$1;
(statearr_42291_42343[(1)] = (10));

} else {
var statearr_42292_42344 = state_42289__$1;
(statearr_42292_42344[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (1))){
var state_42289__$1 = state_42289;
var statearr_42293_42345 = state_42289__$1;
(statearr_42293_42345[(2)] = null);

(statearr_42293_42345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (4))){
var inst_42240 = (state_42289[(7)]);
var inst_42244 = (inst_42240 == null);
var inst_42245 = cljs.core.not.call(null,inst_42244);
var state_42289__$1 = state_42289;
if(inst_42245){
var statearr_42294_42346 = state_42289__$1;
(statearr_42294_42346[(1)] = (7));

} else {
var statearr_42295_42347 = state_42289__$1;
(statearr_42295_42347[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (15))){
var inst_42264 = (state_42289[(8)]);
var inst_42263 = (state_42289[(2)]);
var inst_42264__$1 = cljs.core.get.call(null,inst_42263,new cljs.core.Keyword(null,"label","label",1718410804));
var inst_42265 = cljs.core.get.call(null,inst_42263,new cljs.core.Keyword(null,"progress","progress",244323547));
var inst_42266 = cljs.core.get.call(null,inst_42263,new cljs.core.Keyword(null,"duration","duration",1444101068));
var inst_42267 = (inst_42266 - inst_42265);
var inst_42268 = utimer.title_updater.duration__GT_display.call(null,inst_42267);
var inst_42269 = cljs.core.empty_QMARK_.call(null,inst_42264__$1);
var state_42289__$1 = (function (){var statearr_42296 = state_42289;
(statearr_42296[(8)] = inst_42264__$1);

(statearr_42296[(9)] = inst_42268);

return statearr_42296;
})();
if(inst_42269){
var statearr_42297_42348 = state_42289__$1;
(statearr_42297_42348[(1)] = (16));

} else {
var statearr_42298_42349 = state_42289__$1;
(statearr_42298_42349[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (13))){
var inst_42240 = (state_42289[(7)]);
var inst_42260 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42240);
var state_42289__$1 = state_42289;
var statearr_42299_42350 = state_42289__$1;
(statearr_42299_42350[(2)] = inst_42260);

(statearr_42299_42350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (6))){
var inst_42281 = (state_42289[(2)]);
var inst_42282 = cljs.core.async.timeout.call(null,utimer.title_updater.timer_updater_interval);
var state_42289__$1 = (function (){var statearr_42300 = state_42289;
(statearr_42300[(10)] = inst_42281);

return statearr_42300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42289__$1,(19),inst_42282);
} else {
if((state_val_42290 === (17))){
var inst_42264 = (state_42289[(8)]);
var inst_42272 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(" - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42264)].join('');
var state_42289__$1 = state_42289;
var statearr_42301_42351 = state_42289__$1;
(statearr_42301_42351[(2)] = inst_42272);

(statearr_42301_42351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (3))){
var inst_42287 = (state_42289[(2)]);
var state_42289__$1 = state_42289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42289__$1,inst_42287);
} else {
if((state_val_42290 === (12))){
var inst_42255 = (state_42289[(2)]);
var state_42289__$1 = state_42289;
var statearr_42302_42352 = state_42289__$1;
(statearr_42302_42352[(2)] = inst_42255);

(statearr_42302_42352[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (2))){
var inst_42240 = (state_42289[(7)]);
var inst_42238 = cljs.core.deref.call(null,utimer.title_updater._STAR_update_listing);
var inst_42239 = cljs.core.vals.call(null,inst_42238);
var inst_42240__$1 = utimer.title_updater.get_closest_time_event.call(null,inst_42239);
var state_42289__$1 = (function (){var statearr_42303 = state_42289;
(statearr_42303[(7)] = inst_42240__$1);

return statearr_42303;
})();
if(cljs.core.truth_(inst_42240__$1)){
var statearr_42304_42353 = state_42289__$1;
(statearr_42304_42353[(1)] = (4));

} else {
var statearr_42305_42354 = state_42289__$1;
(statearr_42305_42354[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (19))){
var inst_42284 = (state_42289[(2)]);
var state_42289__$1 = (function (){var statearr_42306 = state_42289;
(statearr_42306[(11)] = inst_42284);

return statearr_42306;
})();
var statearr_42307_42355 = state_42289__$1;
(statearr_42307_42355[(2)] = null);

(statearr_42307_42355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (11))){
var state_42289__$1 = state_42289;
var statearr_42308_42356 = state_42289__$1;
(statearr_42308_42356[(2)] = false);

(statearr_42308_42356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (9))){
var inst_42258 = (state_42289[(2)]);
var state_42289__$1 = state_42289;
if(cljs.core.truth_(inst_42258)){
var statearr_42309_42357 = state_42289__$1;
(statearr_42309_42357[(1)] = (13));

} else {
var statearr_42310_42358 = state_42289__$1;
(statearr_42310_42358[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (5))){
var inst_42278 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("uTimer")].join('');
var inst_42279 = utimer.title_updater.set_title_BANG_.call(null,inst_42278);
var state_42289__$1 = state_42289;
var statearr_42311_42359 = state_42289__$1;
(statearr_42311_42359[(2)] = inst_42279);

(statearr_42311_42359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (14))){
var inst_42240 = (state_42289[(7)]);
var state_42289__$1 = state_42289;
var statearr_42312_42360 = state_42289__$1;
(statearr_42312_42360[(2)] = inst_42240);

(statearr_42312_42360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (16))){
var state_42289__$1 = state_42289;
var statearr_42313_42361 = state_42289__$1;
(statearr_42313_42361[(2)] = null);

(statearr_42313_42361[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (10))){
var state_42289__$1 = state_42289;
var statearr_42314_42362 = state_42289__$1;
(statearr_42314_42362[(2)] = true);

(statearr_42314_42362[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (18))){
var inst_42268 = (state_42289[(9)]);
var inst_42274 = (state_42289[(2)]);
var inst_42275 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42268),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42274)].join('');
var inst_42276 = utimer.title_updater.set_title_BANG_.call(null,inst_42275);
var state_42289__$1 = state_42289;
var statearr_42315_42363 = state_42289__$1;
(statearr_42315_42363[(2)] = inst_42276);

(statearr_42315_42363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (8))){
var state_42289__$1 = state_42289;
var statearr_42316_42364 = state_42289__$1;
(statearr_42316_42364[(2)] = false);

(statearr_42316_42364[(1)] = (9));


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
});})(c__39280__auto___42342))
;
return ((function (switch__39236__auto__,c__39280__auto___42342){
return (function() {
var utimer$title_updater$mixin_update_title_$_state_machine__39237__auto__ = null;
var utimer$title_updater$mixin_update_title_$_state_machine__39237__auto____0 = (function (){
var statearr_42317 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42317[(0)] = utimer$title_updater$mixin_update_title_$_state_machine__39237__auto__);

(statearr_42317[(1)] = (1));

return statearr_42317;
});
var utimer$title_updater$mixin_update_title_$_state_machine__39237__auto____1 = (function (state_42289){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_42289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e42318){if((e42318 instanceof Object)){
var ex__39240__auto__ = e42318;
var statearr_42319_42365 = state_42289;
(statearr_42319_42365[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42366 = state_42289;
state_42289 = G__42366;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
utimer$title_updater$mixin_update_title_$_state_machine__39237__auto__ = function(state_42289){
switch(arguments.length){
case 0:
return utimer$title_updater$mixin_update_title_$_state_machine__39237__auto____0.call(this);
case 1:
return utimer$title_updater$mixin_update_title_$_state_machine__39237__auto____1.call(this,state_42289);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
utimer$title_updater$mixin_update_title_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = utimer$title_updater$mixin_update_title_$_state_machine__39237__auto____0;
utimer$title_updater$mixin_update_title_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = utimer$title_updater$mixin_update_title_$_state_machine__39237__auto____1;
return utimer$title_updater$mixin_update_title_$_state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39280__auto___42342))
})();
var state__39282__auto__ = (function (){var statearr_42320 = f__39281__auto__.call(null);
(statearr_42320[(6)] = c__39280__auto___42342);

return statearr_42320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39282__auto__);
});})(c__39280__auto___42342))
);


return state;
})], null);
});
