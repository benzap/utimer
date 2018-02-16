// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46104 = arguments.length;
var i__36174__auto___46105 = (0);
while(true){
if((i__36174__auto___46105 < len__36173__auto___46104)){
args__36180__auto__.push((arguments[i__36174__auto___46105]));

var G__46106 = (i__36174__auto___46105 + (1));
i__36174__auto___46105 = G__46106;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq46103){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46103));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46108 = arguments.length;
var i__36174__auto___46109 = (0);
while(true){
if((i__36174__auto___46109 < len__36173__auto___46108)){
args__36180__auto__.push((arguments[i__36174__auto___46109]));

var G__46110 = (i__36174__auto___46109 + (1));
i__36174__auto___46109 = G__46110;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq46107){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46107));
});

var g_QMARK__46111 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_46112 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__46111){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__46111))
,null));
var mkg_46113 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__46111,g_46112){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__46111,g_46112))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__46111,g_46112,mkg_46113){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__46111).call(null,x);
});})(g_QMARK__46111,g_46112,mkg_46113))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__46111,g_46112,mkg_46113){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_46113).call(null,gfn);
});})(g_QMARK__46111,g_46112,mkg_46113))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__46111,g_46112,mkg_46113){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_46112).call(null,generator);
});})(g_QMARK__46111,g_46112,mkg_46113))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__46075__auto___46133 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__46075__auto___46133){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46134 = arguments.length;
var i__36174__auto___46135 = (0);
while(true){
if((i__36174__auto___46135 < len__36173__auto___46134)){
args__36180__auto__.push((arguments[i__36174__auto___46135]));

var G__46136 = (i__36174__auto___46135 + (1));
i__36174__auto___46135 = G__46136;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46075__auto___46133))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46075__auto___46133){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46075__auto___46133),args);
});})(g__46075__auto___46133))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__46075__auto___46133){
return (function (seq46114){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46114));
});})(g__46075__auto___46133))
;


var g__46075__auto___46137 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__46075__auto___46137){
return (function cljs$spec$gen$alpha$list(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46138 = arguments.length;
var i__36174__auto___46139 = (0);
while(true){
if((i__36174__auto___46139 < len__36173__auto___46138)){
args__36180__auto__.push((arguments[i__36174__auto___46139]));

var G__46140 = (i__36174__auto___46139 + (1));
i__36174__auto___46139 = G__46140;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46075__auto___46137))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46075__auto___46137){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46075__auto___46137),args);
});})(g__46075__auto___46137))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__46075__auto___46137){
return (function (seq46115){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46115));
});})(g__46075__auto___46137))
;


var g__46075__auto___46141 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__46075__auto___46141){
return (function cljs$spec$gen$alpha$map(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46142 = arguments.length;
var i__36174__auto___46143 = (0);
while(true){
if((i__36174__auto___46143 < len__36173__auto___46142)){
args__36180__auto__.push((arguments[i__36174__auto___46143]));

var G__46144 = (i__36174__auto___46143 + (1));
i__36174__auto___46143 = G__46144;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46075__auto___46141))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46075__auto___46141){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46075__auto___46141),args);
});})(g__46075__auto___46141))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__46075__auto___46141){
return (function (seq46116){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46116));
});})(g__46075__auto___46141))
;


var g__46075__auto___46145 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__46075__auto___46145){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46146 = arguments.length;
var i__36174__auto___46147 = (0);
while(true){
if((i__36174__auto___46147 < len__36173__auto___46146)){
args__36180__auto__.push((arguments[i__36174__auto___46147]));

var G__46148 = (i__36174__auto___46147 + (1));
i__36174__auto___46147 = G__46148;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46075__auto___46145))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46075__auto___46145){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46075__auto___46145),args);
});})(g__46075__auto___46145))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__46075__auto___46145){
return (function (seq46117){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46117));
});})(g__46075__auto___46145))
;


var g__46075__auto___46149 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__46075__auto___46149){
return (function cljs$spec$gen$alpha$set(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46150 = arguments.length;
var i__36174__auto___46151 = (0);
while(true){
if((i__36174__auto___46151 < len__36173__auto___46150)){
args__36180__auto__.push((arguments[i__36174__auto___46151]));

var G__46152 = (i__36174__auto___46151 + (1));
i__36174__auto___46151 = G__46152;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46075__auto___46149))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46075__auto___46149){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46075__auto___46149),args);
});})(g__46075__auto___46149))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__46075__auto___46149){
return (function (seq46118){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46118));
});})(g__46075__auto___46149))
;


var g__46075__auto___46153 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__46075__auto___46153){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46154 = arguments.length;
var i__36174__auto___46155 = (0);
while(true){
if((i__36174__auto___46155 < len__36173__auto___46154)){
args__36180__auto__.push((arguments[i__36174__auto___46155]));

var G__46156 = (i__36174__auto___46155 + (1));
i__36174__auto___46155 = G__46156;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46075__auto___46153))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46075__auto___46153){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46075__auto___46153),args);
});})(g__46075__auto___46153))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__46075__auto___46153){
return (function (seq46119){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46119));
});})(g__46075__auto___46153))
;


var g__46075__auto___46157 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__46075__auto___46157){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46158 = arguments.length;
var i__36174__auto___46159 = (0);
while(true){
if((i__36174__auto___46159 < len__36173__auto___46158)){
args__36180__auto__.push((arguments[i__36174__auto___46159]));

var G__46160 = (i__36174__auto___46159 + (1));
i__36174__auto___46159 = G__46160;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46075__auto___46157))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46075__auto___46157){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46075__auto___46157),args);
});})(g__46075__auto___46157))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__46075__auto___46157){
return (function (seq46120){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46120));
});})(g__46075__auto___46157))
;


var g__46075__auto___46161 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__46075__auto___46161){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46162 = arguments.length;
var i__36174__auto___46163 = (0);
while(true){
if((i__36174__auto___46163 < len__36173__auto___46162)){
args__36180__auto__.push((arguments[i__36174__auto___46163]));

var G__46164 = (i__36174__auto___46163 + (1));
i__36174__auto___46163 = G__46164;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46075__auto___46161))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46075__auto___46161){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46075__auto___46161),args);
});})(g__46075__auto___46161))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__46075__auto___46161){
return (function (seq46121){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46121));
});})(g__46075__auto___46161))
;


var g__46075__auto___46165 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__46075__auto___46165){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46166 = arguments.length;
var i__36174__auto___46167 = (0);
while(true){
if((i__36174__auto___46167 < len__36173__auto___46166)){
args__36180__auto__.push((arguments[i__36174__auto___46167]));

var G__46168 = (i__36174__auto___46167 + (1));
i__36174__auto___46167 = G__46168;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46075__auto___46165))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46075__auto___46165){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46075__auto___46165),args);
});})(g__46075__auto___46165))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__46075__auto___46165){
return (function (seq46122){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46122));
});})(g__46075__auto___46165))
;


var g__46075__auto___46169 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__46075__auto___46169){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46170 = arguments.length;
var i__36174__auto___46171 = (0);
while(true){
if((i__36174__auto___46171 < len__36173__auto___46170)){
args__36180__auto__.push((arguments[i__36174__auto___46171]));

var G__46172 = (i__36174__auto___46171 + (1));
i__36174__auto___46171 = G__46172;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46075__auto___46169))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46075__auto___46169){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46075__auto___46169),args);
});})(g__46075__auto___46169))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__46075__auto___46169){
return (function (seq46123){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46123));
});})(g__46075__auto___46169))
;


var g__46075__auto___46173 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__46075__auto___46173){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46174 = arguments.length;
var i__36174__auto___46175 = (0);
while(true){
if((i__36174__auto___46175 < len__36173__auto___46174)){
args__36180__auto__.push((arguments[i__36174__auto___46175]));

var G__46176 = (i__36174__auto___46175 + (1));
i__36174__auto___46175 = G__46176;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46075__auto___46173))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46075__auto___46173){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46075__auto___46173),args);
});})(g__46075__auto___46173))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__46075__auto___46173){
return (function (seq46124){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46124));
});})(g__46075__auto___46173))
;


var g__46075__auto___46177 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__46075__auto___46177){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46178 = arguments.length;
var i__36174__auto___46179 = (0);
while(true){
if((i__36174__auto___46179 < len__36173__auto___46178)){
args__36180__auto__.push((arguments[i__36174__auto___46179]));

var G__46180 = (i__36174__auto___46179 + (1));
i__36174__auto___46179 = G__46180;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46075__auto___46177))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46075__auto___46177){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46075__auto___46177),args);
});})(g__46075__auto___46177))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__46075__auto___46177){
return (function (seq46125){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46125));
});})(g__46075__auto___46177))
;


var g__46075__auto___46181 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__46075__auto___46181){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46182 = arguments.length;
var i__36174__auto___46183 = (0);
while(true){
if((i__36174__auto___46183 < len__36173__auto___46182)){
args__36180__auto__.push((arguments[i__36174__auto___46183]));

var G__46184 = (i__36174__auto___46183 + (1));
i__36174__auto___46183 = G__46184;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46075__auto___46181))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46075__auto___46181){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46075__auto___46181),args);
});})(g__46075__auto___46181))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__46075__auto___46181){
return (function (seq46126){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46126));
});})(g__46075__auto___46181))
;


var g__46075__auto___46185 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__46075__auto___46185){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46186 = arguments.length;
var i__36174__auto___46187 = (0);
while(true){
if((i__36174__auto___46187 < len__36173__auto___46186)){
args__36180__auto__.push((arguments[i__36174__auto___46187]));

var G__46188 = (i__36174__auto___46187 + (1));
i__36174__auto___46187 = G__46188;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46075__auto___46185))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46075__auto___46185){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46075__auto___46185),args);
});})(g__46075__auto___46185))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__46075__auto___46185){
return (function (seq46127){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46127));
});})(g__46075__auto___46185))
;


var g__46075__auto___46189 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__46075__auto___46189){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46190 = arguments.length;
var i__36174__auto___46191 = (0);
while(true){
if((i__36174__auto___46191 < len__36173__auto___46190)){
args__36180__auto__.push((arguments[i__36174__auto___46191]));

var G__46192 = (i__36174__auto___46191 + (1));
i__36174__auto___46191 = G__46192;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46075__auto___46189))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46075__auto___46189){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46075__auto___46189),args);
});})(g__46075__auto___46189))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__46075__auto___46189){
return (function (seq46128){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46128));
});})(g__46075__auto___46189))
;


var g__46075__auto___46193 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__46075__auto___46193){
return (function cljs$spec$gen$alpha$return(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46194 = arguments.length;
var i__36174__auto___46195 = (0);
while(true){
if((i__36174__auto___46195 < len__36173__auto___46194)){
args__36180__auto__.push((arguments[i__36174__auto___46195]));

var G__46196 = (i__36174__auto___46195 + (1));
i__36174__auto___46195 = G__46196;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46075__auto___46193))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46075__auto___46193){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46075__auto___46193),args);
});})(g__46075__auto___46193))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__46075__auto___46193){
return (function (seq46129){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46129));
});})(g__46075__auto___46193))
;


var g__46075__auto___46197 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__46075__auto___46197){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46198 = arguments.length;
var i__36174__auto___46199 = (0);
while(true){
if((i__36174__auto___46199 < len__36173__auto___46198)){
args__36180__auto__.push((arguments[i__36174__auto___46199]));

var G__46200 = (i__36174__auto___46199 + (1));
i__36174__auto___46199 = G__46200;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46075__auto___46197))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46075__auto___46197){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46075__auto___46197),args);
});})(g__46075__auto___46197))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__46075__auto___46197){
return (function (seq46130){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46130));
});})(g__46075__auto___46197))
;


var g__46075__auto___46201 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__46075__auto___46201){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46202 = arguments.length;
var i__36174__auto___46203 = (0);
while(true){
if((i__36174__auto___46203 < len__36173__auto___46202)){
args__36180__auto__.push((arguments[i__36174__auto___46203]));

var G__46204 = (i__36174__auto___46203 + (1));
i__36174__auto___46203 = G__46204;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46075__auto___46201))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46075__auto___46201){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46075__auto___46201),args);
});})(g__46075__auto___46201))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__46075__auto___46201){
return (function (seq46131){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46131));
});})(g__46075__auto___46201))
;


var g__46075__auto___46205 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__46075__auto___46205){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46206 = arguments.length;
var i__36174__auto___46207 = (0);
while(true){
if((i__36174__auto___46207 < len__36173__auto___46206)){
args__36180__auto__.push((arguments[i__36174__auto___46207]));

var G__46208 = (i__36174__auto___46207 + (1));
i__36174__auto___46207 = G__46208;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46075__auto___46205))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46075__auto___46205){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46075__auto___46205),args);
});})(g__46075__auto___46205))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__46075__auto___46205){
return (function (seq46132){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46132));
});})(g__46075__auto___46205))
;

var g__46088__auto___46230 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__46088__auto___46230){
return (function cljs$spec$gen$alpha$any(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46231 = arguments.length;
var i__36174__auto___46232 = (0);
while(true){
if((i__36174__auto___46232 < len__36173__auto___46231)){
args__36180__auto__.push((arguments[i__36174__auto___46232]));

var G__46233 = (i__36174__auto___46232 + (1));
i__36174__auto___46232 = G__46233;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46230))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46230){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46230);
});})(g__46088__auto___46230))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__46088__auto___46230){
return (function (seq46209){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46209));
});})(g__46088__auto___46230))
;


var g__46088__auto___46234 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__46088__auto___46234){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46235 = arguments.length;
var i__36174__auto___46236 = (0);
while(true){
if((i__36174__auto___46236 < len__36173__auto___46235)){
args__36180__auto__.push((arguments[i__36174__auto___46236]));

var G__46237 = (i__36174__auto___46236 + (1));
i__36174__auto___46236 = G__46237;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46234))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46234){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46234);
});})(g__46088__auto___46234))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__46088__auto___46234){
return (function (seq46210){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46210));
});})(g__46088__auto___46234))
;


var g__46088__auto___46238 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__46088__auto___46238){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46239 = arguments.length;
var i__36174__auto___46240 = (0);
while(true){
if((i__36174__auto___46240 < len__36173__auto___46239)){
args__36180__auto__.push((arguments[i__36174__auto___46240]));

var G__46241 = (i__36174__auto___46240 + (1));
i__36174__auto___46240 = G__46241;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46238))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46238){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46238);
});})(g__46088__auto___46238))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__46088__auto___46238){
return (function (seq46211){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46211));
});})(g__46088__auto___46238))
;


var g__46088__auto___46242 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__46088__auto___46242){
return (function cljs$spec$gen$alpha$char(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46243 = arguments.length;
var i__36174__auto___46244 = (0);
while(true){
if((i__36174__auto___46244 < len__36173__auto___46243)){
args__36180__auto__.push((arguments[i__36174__auto___46244]));

var G__46245 = (i__36174__auto___46244 + (1));
i__36174__auto___46244 = G__46245;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46242))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46242){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46242);
});})(g__46088__auto___46242))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__46088__auto___46242){
return (function (seq46212){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46212));
});})(g__46088__auto___46242))
;


var g__46088__auto___46246 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__46088__auto___46246){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46247 = arguments.length;
var i__36174__auto___46248 = (0);
while(true){
if((i__36174__auto___46248 < len__36173__auto___46247)){
args__36180__auto__.push((arguments[i__36174__auto___46248]));

var G__46249 = (i__36174__auto___46248 + (1));
i__36174__auto___46248 = G__46249;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46246))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46246){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46246);
});})(g__46088__auto___46246))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__46088__auto___46246){
return (function (seq46213){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46213));
});})(g__46088__auto___46246))
;


var g__46088__auto___46250 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__46088__auto___46250){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46251 = arguments.length;
var i__36174__auto___46252 = (0);
while(true){
if((i__36174__auto___46252 < len__36173__auto___46251)){
args__36180__auto__.push((arguments[i__36174__auto___46252]));

var G__46253 = (i__36174__auto___46252 + (1));
i__36174__auto___46252 = G__46253;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46250))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46250){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46250);
});})(g__46088__auto___46250))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__46088__auto___46250){
return (function (seq46214){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46214));
});})(g__46088__auto___46250))
;


var g__46088__auto___46254 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__46088__auto___46254){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46255 = arguments.length;
var i__36174__auto___46256 = (0);
while(true){
if((i__36174__auto___46256 < len__36173__auto___46255)){
args__36180__auto__.push((arguments[i__36174__auto___46256]));

var G__46257 = (i__36174__auto___46256 + (1));
i__36174__auto___46256 = G__46257;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46254))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46254){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46254);
});})(g__46088__auto___46254))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__46088__auto___46254){
return (function (seq46215){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46215));
});})(g__46088__auto___46254))
;


var g__46088__auto___46258 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__46088__auto___46258){
return (function cljs$spec$gen$alpha$double(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46259 = arguments.length;
var i__36174__auto___46260 = (0);
while(true){
if((i__36174__auto___46260 < len__36173__auto___46259)){
args__36180__auto__.push((arguments[i__36174__auto___46260]));

var G__46261 = (i__36174__auto___46260 + (1));
i__36174__auto___46260 = G__46261;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46258))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46258){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46258);
});})(g__46088__auto___46258))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__46088__auto___46258){
return (function (seq46216){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46216));
});})(g__46088__auto___46258))
;


var g__46088__auto___46262 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__46088__auto___46262){
return (function cljs$spec$gen$alpha$int(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46263 = arguments.length;
var i__36174__auto___46264 = (0);
while(true){
if((i__36174__auto___46264 < len__36173__auto___46263)){
args__36180__auto__.push((arguments[i__36174__auto___46264]));

var G__46265 = (i__36174__auto___46264 + (1));
i__36174__auto___46264 = G__46265;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46262))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46262){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46262);
});})(g__46088__auto___46262))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__46088__auto___46262){
return (function (seq46217){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46217));
});})(g__46088__auto___46262))
;


var g__46088__auto___46266 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__46088__auto___46266){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46267 = arguments.length;
var i__36174__auto___46268 = (0);
while(true){
if((i__36174__auto___46268 < len__36173__auto___46267)){
args__36180__auto__.push((arguments[i__36174__auto___46268]));

var G__46269 = (i__36174__auto___46268 + (1));
i__36174__auto___46268 = G__46269;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46266))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46266){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46266);
});})(g__46088__auto___46266))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__46088__auto___46266){
return (function (seq46218){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46218));
});})(g__46088__auto___46266))
;


var g__46088__auto___46270 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__46088__auto___46270){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46271 = arguments.length;
var i__36174__auto___46272 = (0);
while(true){
if((i__36174__auto___46272 < len__36173__auto___46271)){
args__36180__auto__.push((arguments[i__36174__auto___46272]));

var G__46273 = (i__36174__auto___46272 + (1));
i__36174__auto___46272 = G__46273;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46270))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46270){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46270);
});})(g__46088__auto___46270))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__46088__auto___46270){
return (function (seq46219){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46219));
});})(g__46088__auto___46270))
;


var g__46088__auto___46274 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__46088__auto___46274){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46275 = arguments.length;
var i__36174__auto___46276 = (0);
while(true){
if((i__36174__auto___46276 < len__36173__auto___46275)){
args__36180__auto__.push((arguments[i__36174__auto___46276]));

var G__46277 = (i__36174__auto___46276 + (1));
i__36174__auto___46276 = G__46277;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46274))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46274){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46274);
});})(g__46088__auto___46274))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__46088__auto___46274){
return (function (seq46220){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46220));
});})(g__46088__auto___46274))
;


var g__46088__auto___46278 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__46088__auto___46278){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46279 = arguments.length;
var i__36174__auto___46280 = (0);
while(true){
if((i__36174__auto___46280 < len__36173__auto___46279)){
args__36180__auto__.push((arguments[i__36174__auto___46280]));

var G__46281 = (i__36174__auto___46280 + (1));
i__36174__auto___46280 = G__46281;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46278))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46278){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46278);
});})(g__46088__auto___46278))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__46088__auto___46278){
return (function (seq46221){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46221));
});})(g__46088__auto___46278))
;


var g__46088__auto___46282 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__46088__auto___46282){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46283 = arguments.length;
var i__36174__auto___46284 = (0);
while(true){
if((i__36174__auto___46284 < len__36173__auto___46283)){
args__36180__auto__.push((arguments[i__36174__auto___46284]));

var G__46285 = (i__36174__auto___46284 + (1));
i__36174__auto___46284 = G__46285;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46282))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46282){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46282);
});})(g__46088__auto___46282))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__46088__auto___46282){
return (function (seq46222){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46222));
});})(g__46088__auto___46282))
;


var g__46088__auto___46286 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__46088__auto___46286){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46287 = arguments.length;
var i__36174__auto___46288 = (0);
while(true){
if((i__36174__auto___46288 < len__36173__auto___46287)){
args__36180__auto__.push((arguments[i__36174__auto___46288]));

var G__46289 = (i__36174__auto___46288 + (1));
i__36174__auto___46288 = G__46289;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46286))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46286){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46286);
});})(g__46088__auto___46286))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__46088__auto___46286){
return (function (seq46223){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46223));
});})(g__46088__auto___46286))
;


var g__46088__auto___46290 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__46088__auto___46290){
return (function cljs$spec$gen$alpha$string(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46291 = arguments.length;
var i__36174__auto___46292 = (0);
while(true){
if((i__36174__auto___46292 < len__36173__auto___46291)){
args__36180__auto__.push((arguments[i__36174__auto___46292]));

var G__46293 = (i__36174__auto___46292 + (1));
i__36174__auto___46292 = G__46293;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46290))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46290){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46290);
});})(g__46088__auto___46290))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__46088__auto___46290){
return (function (seq46224){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46224));
});})(g__46088__auto___46290))
;


var g__46088__auto___46294 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__46088__auto___46294){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46295 = arguments.length;
var i__36174__auto___46296 = (0);
while(true){
if((i__36174__auto___46296 < len__36173__auto___46295)){
args__36180__auto__.push((arguments[i__36174__auto___46296]));

var G__46297 = (i__36174__auto___46296 + (1));
i__36174__auto___46296 = G__46297;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46294))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46294){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46294);
});})(g__46088__auto___46294))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__46088__auto___46294){
return (function (seq46225){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46225));
});})(g__46088__auto___46294))
;


var g__46088__auto___46298 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__46088__auto___46298){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46299 = arguments.length;
var i__36174__auto___46300 = (0);
while(true){
if((i__36174__auto___46300 < len__36173__auto___46299)){
args__36180__auto__.push((arguments[i__36174__auto___46300]));

var G__46301 = (i__36174__auto___46300 + (1));
i__36174__auto___46300 = G__46301;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46298))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46298){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46298);
});})(g__46088__auto___46298))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__46088__auto___46298){
return (function (seq46226){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46226));
});})(g__46088__auto___46298))
;


var g__46088__auto___46302 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__46088__auto___46302){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46303 = arguments.length;
var i__36174__auto___46304 = (0);
while(true){
if((i__36174__auto___46304 < len__36173__auto___46303)){
args__36180__auto__.push((arguments[i__36174__auto___46304]));

var G__46305 = (i__36174__auto___46304 + (1));
i__36174__auto___46304 = G__46305;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46302))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46302){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46302);
});})(g__46088__auto___46302))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__46088__auto___46302){
return (function (seq46227){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46227));
});})(g__46088__auto___46302))
;


var g__46088__auto___46306 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__46088__auto___46306){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46307 = arguments.length;
var i__36174__auto___46308 = (0);
while(true){
if((i__36174__auto___46308 < len__36173__auto___46307)){
args__36180__auto__.push((arguments[i__36174__auto___46308]));

var G__46309 = (i__36174__auto___46308 + (1));
i__36174__auto___46308 = G__46309;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46306))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46306){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46306);
});})(g__46088__auto___46306))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__46088__auto___46306){
return (function (seq46228){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46228));
});})(g__46088__auto___46306))
;


var g__46088__auto___46310 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__46088__auto___46310){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46311 = arguments.length;
var i__36174__auto___46312 = (0);
while(true){
if((i__36174__auto___46312 < len__36173__auto___46311)){
args__36180__auto__.push((arguments[i__36174__auto___46312]));

var G__46313 = (i__36174__auto___46312 + (1));
i__36174__auto___46312 = G__46313;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});})(g__46088__auto___46310))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46088__auto___46310){
return (function (args){
return cljs.core.deref.call(null,g__46088__auto___46310);
});})(g__46088__auto___46310))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__46088__auto___46310){
return (function (seq46229){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46229));
});})(g__46088__auto___46310))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__36180__auto__ = [];
var len__36173__auto___46316 = arguments.length;
var i__36174__auto___46317 = (0);
while(true){
if((i__36174__auto___46317 < len__36173__auto___46316)){
args__36180__auto__.push((arguments[i__36174__auto___46317]));

var G__46318 = (i__36174__auto___46317 + (1));
i__36174__auto___46317 = G__46318;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__46314_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__46314_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq46315){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46315));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__46319_SHARP_){
return (new Date(p1__46319_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});
