// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.components.layout');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('utimer.components.utils');
goog.require('utimer.components.flat_timer');
utimer.components.layout.c_layout = rum.core.build_defcs.call(null,(function (state,app_state,layout){
var map__50983 = rum.core.react.call(null,app_state);
var map__50983__$1 = ((((!((map__50983 == null)))?((((map__50983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50983):map__50983);
var layout__$1 = cljs.core.get.call(null,map__50983__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return cljs.core.into_array.call(null,(function (){var iter__35837__auto__ = ((function (map__50983,map__50983__$1,layout__$1){
return (function utimer$components$layout$iter__50985(s__50986){
return (new cljs.core.LazySeq(null,((function (map__50983,map__50983__$1,layout__$1){
return (function (){
var s__50986__$1 = s__50986;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50986__$1);
if(temp__4657__auto__){
var s__50986__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50986__$2)){
var c__35835__auto__ = cljs.core.chunk_first.call(null,s__50986__$2);
var size__35836__auto__ = cljs.core.count.call(null,c__35835__auto__);
var b__50988 = cljs.core.chunk_buffer.call(null,size__35836__auto__);
if((function (){var i__50987 = (0);
while(true){
if((i__50987 < size__35836__auto__)){
var elem = cljs.core._nth.call(null,c__35835__auto__,i__50987);
cljs.core.chunk_append.call(null,b__50988,sablono.interpreter.interpret.call(null,(function (){var G__50989 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(elem);
var G__50989__$1 = (((G__50989 instanceof cljs.core.Keyword))?G__50989.fqn:null);
switch (G__50989__$1) {
case "initial":
return utimer.components.flat_timer.c_flat_timer.call(null,app_state);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50989__$1)].join('')));

}
})()));

var G__50992 = (i__50987 + (1));
i__50987 = G__50992;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50988),utimer$components$layout$iter__50985.call(null,cljs.core.chunk_rest.call(null,s__50986__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50988),null);
}
} else {
var elem = cljs.core.first.call(null,s__50986__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var G__50990 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(elem);
var G__50990__$1 = (((G__50990 instanceof cljs.core.Keyword))?G__50990.fqn:null);
switch (G__50990__$1) {
case "initial":
return utimer.components.flat_timer.c_flat_timer.call(null,app_state);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50990__$1)].join('')));

}
})()),utimer$components$layout$iter__50985.call(null,cljs.core.rest.call(null,s__50986__$2)));
}
} else {
return null;
}
break;
}
});})(map__50983,map__50983__$1,layout__$1))
,null,null));
});})(map__50983,map__50983__$1,layout__$1))
;
return iter__35837__auto__.call(null,layout__$1);
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"c-layout");
