// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.utils');
goog.require('cljs.core');
goog.require('clojure.string');
utimer.utils.create_uuid = (function utimer$utils$create_uuid(){
var f = (function utimer$utils$create_uuid_$_f(){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var fseq = (function utimer$utils$create_uuid_$_fseq(n){
return cljs.core.repeatedly.call(null,n,f);
});
var fstring = (function utimer$utils$create_uuid_$_fstring(n){
return cljs.core.apply.call(null,cljs.core.str,fseq.call(null,n));
});
var g = (function utimer$utils$create_uuid_$_g(){
return ((8) | ((3) & cljs.core.rand_int.call(null,(15)))).toString((16));
});
var gseq = (function utimer$utils$create_uuid_$_gseq(n){
return cljs.core.repeatedly.call(null,n,g);
});
var gstring = (function utimer$utils$create_uuid_$_gstring(n){
return cljs.core.apply.call(null,cljs.core.str,gseq.call(null,n));
});
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fstring.call(null,(8))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fstring.call(null,(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-4"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fstring.call(null,(3))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(gstring.call(null,(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(gstring.call(null,(3))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fstring.call(null,(12)))].join('');
});
