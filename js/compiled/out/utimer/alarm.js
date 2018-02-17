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
var temp__4657__auto___50882 = cljs.core.deref.call(null,utimer.alarm._STAR_tested_audio);
if(cljs.core.truth_(temp__4657__auto___50882)){
var old_audio_50883 = temp__4657__auto___50882;
old_audio_50883.pause();
} else {
}

cljs.core.reset_BANG_.call(null,utimer.alarm._STAR_tested_audio,new cljs.core.Keyword(null,"audio","audio",1819127321).cljs$core$IFn$_invoke$arity$1(alarm).cloneNode(true));

return cljs.core.deref.call(null,utimer.alarm._STAR_tested_audio).play();
});
utimer.alarm.new_alarm = (function utimer$alarm$new_alarm(){
var audio = utimer.alarm.audio_object.call(null);
audio.setAttribute("src",utimer.alarm.default_alarm_sound);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio","audio",1819127321),audio,new cljs.core.Keyword(null,"*options","*options",-526557877),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"played-once?","played-once?",-1502127728),false], null))], null);
});
utimer.alarm.is_playing_QMARK_ = (function utimer$alarm$is_playing_QMARK_(p__50884){
var map__50885 = p__50884;
var map__50885__$1 = ((((!((map__50885 == null)))?((((map__50885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50885):map__50885);
var alarm = map__50885__$1;
var audio = cljs.core.get.call(null,map__50885__$1,new cljs.core.Keyword(null,"audio","audio",1819127321));
return cljs.core.not.call(null,audio.paused);
});
utimer.alarm.is_looping_QMARK_ = (function utimer$alarm$is_looping_QMARK_(p__50887){
var map__50888 = p__50887;
var map__50888__$1 = ((((!((map__50888 == null)))?((((map__50888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50888):map__50888);
var alarm = map__50888__$1;
var audio = cljs.core.get.call(null,map__50888__$1,new cljs.core.Keyword(null,"audio","audio",1819127321));
return cljs.core.boolean$.call(null,(audio["loop"]));
});
utimer.alarm.set_sound_BANG_ = (function utimer$alarm$set_sound_BANG_(p__50890,src){
var map__50891 = p__50890;
var map__50891__$1 = ((((!((map__50891 == null)))?((((map__50891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50891):map__50891);
var alarm = map__50891__$1;
var audio = cljs.core.get.call(null,map__50891__$1,new cljs.core.Keyword(null,"audio","audio",1819127321));
var old_src = audio.getAttribute("src");
if(cljs.core.not_EQ_.call(null,old_src,src)){
audio.setAttribute("src",src);

audio.load();
} else {
}

return alarm;
});
utimer.alarm.set_loop_BANG_ = (function utimer$alarm$set_loop_BANG_(p__50893,x){
var map__50894 = p__50893;
var map__50894__$1 = ((((!((map__50894 == null)))?((((map__50894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50894.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50894):map__50894);
var alarm = map__50894__$1;
var audio = cljs.core.get.call(null,map__50894__$1,new cljs.core.Keyword(null,"audio","audio",1819127321));
(audio["loop"] = cljs.core.boolean$.call(null,x));

return alarm;
});
utimer.alarm.play_BANG_ = (function utimer$alarm$play_BANG_(p__50896){
var map__50897 = p__50896;
var map__50897__$1 = ((((!((map__50897 == null)))?((((map__50897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50897.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50897):map__50897);
var alarm = map__50897__$1;
var audio = cljs.core.get.call(null,map__50897__$1,new cljs.core.Keyword(null,"audio","audio",1819127321));
var _STAR_options = cljs.core.get.call(null,map__50897__$1,new cljs.core.Keyword(null,"*options","*options",-526557877));
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
utimer.alarm.stop_BANG_ = (function utimer$alarm$stop_BANG_(p__50899){
var map__50900 = p__50899;
var map__50900__$1 = ((((!((map__50900 == null)))?((((map__50900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50900):map__50900);
var alarm = map__50900__$1;
var audio = cljs.core.get.call(null,map__50900__$1,new cljs.core.Keyword(null,"audio","audio",1819127321));
var _STAR_options = cljs.core.get.call(null,map__50900__$1,new cljs.core.Keyword(null,"*options","*options",-526557877));
if(cljs.core.truth_(audio.paused)){
} else {
audio.pause();
}

cljs.core.swap_BANG_.call(null,_STAR_options,cljs.core.assoc,new cljs.core.Keyword(null,"played-once?","played-once?",-1502127728),false);

(audio["currentTime"] = (0));

return alarm;
});
