// Compiled by ClojureScript 1.9.671 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__45315 = arguments.length;
switch (G__45315) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__45316 = opts;
var map__45316__$1 = ((((!((map__45316 == null)))?((((map__45316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45316):map__45316);
var ref = cljs.core.get.call(null,map__45316__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__45316__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__45318 = cljs.core.count.call(null,refs);
switch (G__45318) {
case (1):
var vec__45319 = refs;
var a = cljs.core.nth.call(null,vec__45319,(0),null);
return ((function (vec__45319,a,G__45318,map__45316,map__45316__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__45319,a,G__45318,map__45316,map__45316__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__45322 = refs;
var a = cljs.core.nth.call(null,vec__45322,(0),null);
var b = cljs.core.nth.call(null,vec__45322,(1),null);
return ((function (vec__45322,a,b,G__45318,map__45316,map__45316__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__45322,a,b,G__45318,map__45316,map__45316__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__45325 = refs;
var a = cljs.core.nth.call(null,vec__45325,(0),null);
var b = cljs.core.nth.call(null,vec__45325,(1),null);
var c = cljs.core.nth.call(null,vec__45325,(2),null);
return ((function (vec__45325,a,b,c,G__45318,map__45316,map__45316__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__45325,a,b,c,G__45318,map__45316,map__45316__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__45318,map__45316,map__45316__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__45318,map__45316,map__45316__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__45328 = ref;
cljs.core.reset_BANG_.call(null,G__45328,recalc.call(null));

return G__45328;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__45316,map__45316__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__45316,map__45316__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__45316,map__45316__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__45316,map__45316__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__45329_45335 = cljs.core.seq.call(null,refs);
var chunk__45330_45336 = null;
var count__45331_45337 = (0);
var i__45332_45338 = (0);
while(true){
if((i__45332_45338 < count__45331_45337)){
var ref_45339__$1 = cljs.core._nth.call(null,chunk__45330_45336,i__45332_45338);
cljs.core.add_watch.call(null,ref_45339__$1,key,watch);

var G__45340 = seq__45329_45335;
var G__45341 = chunk__45330_45336;
var G__45342 = count__45331_45337;
var G__45343 = (i__45332_45338 + (1));
seq__45329_45335 = G__45340;
chunk__45330_45336 = G__45341;
count__45331_45337 = G__45342;
i__45332_45338 = G__45343;
continue;
} else {
var temp__4657__auto___45344 = cljs.core.seq.call(null,seq__45329_45335);
if(temp__4657__auto___45344){
var seq__45329_45345__$1 = temp__4657__auto___45344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45329_45345__$1)){
var c__35868__auto___45346 = cljs.core.chunk_first.call(null,seq__45329_45345__$1);
var G__45347 = cljs.core.chunk_rest.call(null,seq__45329_45345__$1);
var G__45348 = c__35868__auto___45346;
var G__45349 = cljs.core.count.call(null,c__35868__auto___45346);
var G__45350 = (0);
seq__45329_45335 = G__45347;
chunk__45330_45336 = G__45348;
count__45331_45337 = G__45349;
i__45332_45338 = G__45350;
continue;
} else {
var ref_45351__$1 = cljs.core.first.call(null,seq__45329_45345__$1);
cljs.core.add_watch.call(null,ref_45351__$1,key,watch);

var G__45352 = cljs.core.next.call(null,seq__45329_45345__$1);
var G__45353 = null;
var G__45354 = (0);
var G__45355 = (0);
seq__45329_45335 = G__45352;
chunk__45330_45336 = G__45353;
count__45331_45337 = G__45354;
i__45332_45338 = G__45355;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;

