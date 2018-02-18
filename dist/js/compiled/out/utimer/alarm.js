// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.alarm');
goog.require('cljs.core');
goog.require('rum.core');
utimer.alarm.default_audio_file_location = "audio/";
utimer.alarm.default_alarm_sound = "audio/analog_alarm.mp3";
utimer.alarm.audio_object = (function utimer$alarm$audio_object(){
var audio = (new Audio());
(audio["preload"] = "auto");

return audio;
});
utimer.alarm._STAR_tested_audio = cljs.core.atom.call(null,utimer.alarm.audio_object.call(null));
utimer.alarm.test_play_BANG_ = (function utimer$alarm$test_play_BANG_(alarm){
var temp__4657__auto___38308 = cljs.core.deref.call(null,utimer.alarm._STAR_tested_audio);
if(cljs.core.truth_(temp__4657__auto___38308)){
var old_audio_38309 = temp__4657__auto___38308;
old_audio_38309.pause();
} else {
}

cljs.core.reset_BANG_.call(null,utimer.alarm._STAR_tested_audio,new cljs.core.Keyword(null,"audio","audio",1819127321).cljs$core$IFn$_invoke$arity$1(alarm).cloneNode(true));

(cljs.core.deref.call(null,utimer.alarm._STAR_tested_audio)["loop"] = false);

return cljs.core.deref.call(null,utimer.alarm._STAR_tested_audio).play();
});
utimer.alarm.new_alarm = (function utimer$alarm$new_alarm(){
var audio = utimer.alarm.audio_object.call(null);
audio.setAttribute("src",utimer.alarm.default_alarm_sound);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio","audio",1819127321),audio,new cljs.core.Keyword(null,"*options","*options",-526557877),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"played-once?","played-once?",-1502127728),false], null))], null);
});
utimer.alarm.is_playing_QMARK_ = (function utimer$alarm$is_playing_QMARK_(p__38310){
var map__38311 = p__38310;
var map__38311__$1 = ((((!((map__38311 == null)))?((((map__38311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38311):map__38311);
var alarm = map__38311__$1;
var audio = cljs.core.get.call(null,map__38311__$1,new cljs.core.Keyword(null,"audio","audio",1819127321));
return cljs.core.not.call(null,audio.paused);
});
utimer.alarm.is_looping_QMARK_ = (function utimer$alarm$is_looping_QMARK_(p__38313){
var map__38314 = p__38313;
var map__38314__$1 = ((((!((map__38314 == null)))?((((map__38314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38314):map__38314);
var alarm = map__38314__$1;
var audio = cljs.core.get.call(null,map__38314__$1,new cljs.core.Keyword(null,"audio","audio",1819127321));
return cljs.core.boolean$.call(null,(audio["loop"]));
});
utimer.alarm.set_sound_BANG_ = (function utimer$alarm$set_sound_BANG_(p__38316,src){
var map__38317 = p__38316;
var map__38317__$1 = ((((!((map__38317 == null)))?((((map__38317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38317):map__38317);
var alarm = map__38317__$1;
var audio = cljs.core.get.call(null,map__38317__$1,new cljs.core.Keyword(null,"audio","audio",1819127321));
var old_src = audio.getAttribute("src");
var src__$1 = ((cljs.core._EQ_.call(null,src,"None"))?"":src);
if(cljs.core.not_EQ_.call(null,old_src,src__$1)){
audio.setAttribute("src",src__$1);

audio.load();
} else {
}

return alarm;
});
utimer.alarm.set_loop_BANG_ = (function utimer$alarm$set_loop_BANG_(p__38319,x){
var map__38320 = p__38319;
var map__38320__$1 = ((((!((map__38320 == null)))?((((map__38320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38320):map__38320);
var alarm = map__38320__$1;
var audio = cljs.core.get.call(null,map__38320__$1,new cljs.core.Keyword(null,"audio","audio",1819127321));
(audio["loop"] = cljs.core.boolean$.call(null,x));

return alarm;
});
utimer.alarm.play_BANG_ = (function utimer$alarm$play_BANG_(p__38322){
var map__38323 = p__38322;
var map__38323__$1 = ((((!((map__38323 == null)))?((((map__38323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38323):map__38323);
var alarm = map__38323__$1;
var audio = cljs.core.get.call(null,map__38323__$1,new cljs.core.Keyword(null,"audio","audio",1819127321));
var _STAR_options = cljs.core.get.call(null,map__38323__$1,new cljs.core.Keyword(null,"*options","*options",-526557877));
if(cljs.core.truth_((function (){var and__35036__auto__ = audio.paused;
if(cljs.core.truth_(and__35036__auto__)){
var or__35048__auto__ = utimer.alarm.is_looping_QMARK_.call(null,alarm);
if(cljs.core.truth_(or__35048__auto__)){
return or__35048__auto__;
} else {
return cljs.core.not.call(null,new cljs.core.Keyword(null,"played-once?","played-once?",-1502127728).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,_STAR_options)));
}
} else {
return and__35036__auto__;
}
})())){
(audio["currentTime"] = (0));

audio.play();

cljs.core.swap_BANG_.call(null,_STAR_options,cljs.core.assoc,new cljs.core.Keyword(null,"played-once?","played-once?",-1502127728),true);
} else {
}

return alarm;
});
utimer.alarm.stop_BANG_ = (function utimer$alarm$stop_BANG_(p__38325){
var map__38326 = p__38325;
var map__38326__$1 = ((((!((map__38326 == null)))?((((map__38326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38326):map__38326);
var alarm = map__38326__$1;
var audio = cljs.core.get.call(null,map__38326__$1,new cljs.core.Keyword(null,"audio","audio",1819127321));
var _STAR_options = cljs.core.get.call(null,map__38326__$1,new cljs.core.Keyword(null,"*options","*options",-526557877));
if(cljs.core.truth_(audio.paused)){
} else {
audio.pause();
}

cljs.core.swap_BANG_.call(null,_STAR_options,cljs.core.assoc,new cljs.core.Keyword(null,"played-once?","played-once?",-1502127728),false);

(audio["currentTime"] = (0));

return alarm;
});
