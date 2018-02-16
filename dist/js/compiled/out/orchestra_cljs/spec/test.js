// Compiled by ClojureScript 1.9.671 {}
goog.provide('orchestra_cljs.spec.test');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('goog.userAgent.product');
goog.require('clojure.string');
goog.require('cljs.stacktrace');
goog.require('cljs.pprint');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.gen.alpha');
orchestra_cljs.spec.test.distinct_by = (function orchestra_cljs$spec$test$distinct_by(f,coll){
var step = (function orchestra_cljs$spec$test$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__47227,seen__$1){
while(true){
var vec__47228 = p__47227;
var x = cljs.core.nth.call(null,vec__47228,(0),null);
var xs__$1 = vec__47228;
var temp__4657__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4657__auto__){
var s = temp__4657__auto__;
var v = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v)){
var G__47231 = cljs.core.rest.call(null,s);
var G__47232 = seen__$1;
p__47227 = G__47231;
seen__$1 = G__47232;
continue;
} else {
return cljs.core.cons.call(null,x,orchestra_cljs$spec$test$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
orchestra_cljs.spec.test.no_fspec = (function orchestra_cljs$spec$test$no_fspec(v,spec){
return cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Fn at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is not spec'ed.")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fspec","no-fspec",-1763393966)], null));
});
orchestra_cljs.spec.test.no_args_spec = (function orchestra_cljs$spec$test$no_args_spec(v,spec){
return cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Args for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" are not spec'ed.")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null));
});
/**
 * if false, instrumented fns call straight through
 */
orchestra_cljs.spec.test._STAR_instrument_enabled_STAR_ = true;
orchestra_cljs.spec.test.get_host_port = (function orchestra_cljs$spec$test$get_host_port(){
if(cljs.core.not_EQ_.call(null,"browser",cljs.core._STAR_target_STAR_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),window.location.host,new cljs.core.Keyword(null,"port","port",1534937262),window.location.port], null);
}
});
orchestra_cljs.spec.test.get_ua_product = (function orchestra_cljs$spec$test$get_ua_product(){
if(cljs.core.not_EQ_.call(null,"browser",cljs.core._STAR_target_STAR_)){
return cljs.core.keyword.call(null,cljs.core._STAR_target_STAR_);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
orchestra_cljs.spec.test.get_env = (function orchestra_cljs$spec$test$get_env(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ua-product","ua-product",938384227),orchestra_cljs.spec.test.get_ua_product.call(null)], null);
});
orchestra_cljs.spec.test.find_caller = (function orchestra_cljs$spec$test$find_caller(st){
var search_spec_fn = (function orchestra_cljs$spec$test$find_caller_$_search_spec_fn(frame){
if(cljs.core.truth_(frame)){
var s = new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(frame);
var and__35036__auto__ = typeof s === 'string';
if(and__35036__auto__){
var and__35036__auto____$1 = !(clojure.string.blank_QMARK_.call(null,s));
if(and__35036__auto____$1){
return cljs.core.re_find.call(null,/cljs\.spec\.test\.spec_checking_fn/,s);
} else {
return and__35036__auto____$1;
}
} else {
return and__35036__auto__;
}
} else {
return null;
}
});
return cljs.core.first.call(null,cljs.core.drop_while.call(null,search_spec_fn,cljs.core.drop_while.call(null,(function (p1__47233_SHARP_){
return cljs.core.not.call(null,search_spec_fn.call(null,p1__47233_SHARP_));
}),st)));
});
orchestra_cljs.spec.test.spec_checking_fn = (function orchestra_cljs$spec$test$spec_checking_fn(v,f,fn_spec){
var fn_spec__$1 = cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.spec.alpha.maybe_spec;},new cljs.core.Symbol("cljs.spec.alpha","maybe-spec","cljs.spec.alpha/maybe-spec",1954004993,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"maybe-spec","maybe-spec",-741366888,null),"dist\\js\\compiled\\out\\cljs\\spec\\alpha.cljs",18,1,105,105,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec-or-k","spec-or-k",1986391440,null)], null)),"spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.",(cljs.core.truth_(cljs.spec.alpha.maybe_spec)?cljs.spec.alpha.maybe_spec.cljs$lang$test:null)]))).call(null,fn_spec);
var conform_BANG_ = ((function (fn_spec__$1){
return (function (v__$1,role,spec,data,data_key){
var conformed = cljs.spec.alpha.conform.call(null,spec,data);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),conformed)){
var caller = orchestra_cljs.spec.test.find_caller.call(null,cljs.stacktrace.parse_stacktrace.call(null,orchestra_cljs.spec.test.get_host_port.call(null),(new Error()).stack,orchestra_cljs.spec.test.get_env.call(null),null));
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.alpha.explain_data_STAR_.call(null,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,data),data_key,data,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"instrument","instrument",-960698844)),(cljs.core.truth_(caller)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("orchestra-cljs.spec.test","caller","orchestra-cljs.spec.test/caller",-1310233030),caller], null):null));
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Call to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" did not conform to spec:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__36054__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_47234_47239 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_47235_47240 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_47234_47239,_STAR_print_fn_STAR_47235_47240,sb__36054__auto__,caller,ed,conformed,fn_spec__$1){
return (function (x__36055__auto__){
return sb__36054__auto__.append(x__36055__auto__);
});})(_STAR_print_newline_STAR_47234_47239,_STAR_print_fn_STAR_47235_47240,sb__36054__auto__,caller,ed,conformed,fn_spec__$1))
;

try{cljs.spec.alpha.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_47235_47240;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_47234_47239;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__36054__auto__)].join('');
})())].join(''),ed);
} else {
return conformed;
}
});})(fn_spec__$1))
;
var G__47236 = ((function (fn_spec__$1,conform_BANG_){
return (function() { 
var G__47241__delegate = function (args){
if(orchestra_cljs.spec.test._STAR_instrument_enabled_STAR_){
var _STAR_instrument_enabled_STAR_47237 = orchestra_cljs.spec.test._STAR_instrument_enabled_STAR_;
orchestra_cljs.spec.test._STAR_instrument_enabled_STAR_ = null;

try{var cargs = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fn_spec__$1))?conform_BANG_.call(null,v,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fn_spec__$1),args,new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783)):null);
var ret = (function (){var _STAR_instrument_enabled_STAR_47238 = orchestra_cljs.spec.test._STAR_instrument_enabled_STAR_;
orchestra_cljs.spec.test._STAR_instrument_enabled_STAR_ = true;

try{return cljs.core.apply.call(null,f,args);
}finally {orchestra_cljs.spec.test._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_47238;
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(fn_spec__$1))){
conform_BANG_.call(null,v,new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(fn_spec__$1),ret,new cljs.core.Keyword("cljs.spec.alpha","ret","cljs.spec.alpha/ret",1165997503));
} else {
}

var temp__4657__auto___47242 = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(fn_spec__$1);
if(cljs.core.truth_(temp__4657__auto___47242)){
var spec_47243 = temp__4657__auto___47242;
if((cargs == null)){
throw orchestra_cljs.spec.test.no_args_spec.call(null,v,fn_spec__$1);
} else {
conform_BANG_.call(null,v,new cljs.core.Keyword(null,"fn","fn",-1175266204),spec_47243,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"args","args",1315556576),cargs], null),new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
}
} else {
}

return ret;
}finally {orchestra_cljs.spec.test._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_47237;
}} else {
return cljs.core.apply.call(null,f,args);
}
};
var G__47241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47244__i = 0, G__47244__a = new Array(arguments.length -  0);
while (G__47244__i < G__47244__a.length) {G__47244__a[G__47244__i] = arguments[G__47244__i + 0]; ++G__47244__i;}
  args = new cljs.core.IndexedSeq(G__47244__a,0,null);
} 
return G__47241__delegate.call(this,args);};
G__47241.cljs$lang$maxFixedArity = 0;
G__47241.cljs$lang$applyTo = (function (arglist__47245){
var args = cljs.core.seq(arglist__47245);
return G__47241__delegate(args);
});
G__47241.cljs$core$IFn$_invoke$arity$variadic = G__47241__delegate;
return G__47241;
})()
;})(fn_spec__$1,conform_BANG_))
;
goog.object.extend(G__47236,f);

return G__47236;
});
if(typeof orchestra_cljs.spec.test.instrumented_vars !== 'undefined'){
} else {
orchestra_cljs.spec.test.instrumented_vars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Helper for instrument.
 */
orchestra_cljs.spec.test.instrument_choose_fn = (function orchestra_cljs$spec$test$instrument_choose_fn(f,spec,sym,p__47246){
var map__47247 = p__47246;
var map__47247__$1 = ((((!((map__47247 == null)))?((((map__47247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47247.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47247):map__47247);
var over = cljs.core.get.call(null,map__47247__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var stub = cljs.core.get.call(null,map__47247__$1,new cljs.core.Keyword(null,"stub","stub",1339145807));
var replace = cljs.core.get.call(null,map__47247__$1,new cljs.core.Keyword(null,"replace","replace",-786587770));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([sym]),stub))){
return cljs.spec.gen.alpha.generate.call(null,cljs.spec.alpha.gen.call(null,spec,over));
} else {
return cljs.core.get.call(null,replace,sym,f);
}
});
/**
 * Helper for instrument
 */
orchestra_cljs.spec.test.instrument_choose_spec = (function orchestra_cljs$spec$test$instrument_choose_spec(spec,sym,p__47249){
var map__47250 = p__47249;
var map__47250__$1 = ((((!((map__47250 == null)))?((((map__47250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47250):map__47250);
var overrides = cljs.core.get.call(null,map__47250__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
return cljs.core.get.call(null,overrides,sym,spec);
});
orchestra_cljs.spec.test.instrument_1_STAR_ = (function orchestra_cljs$spec$test$instrument_1_STAR_(s,v,opts){
var spec = cljs.spec.alpha.get_spec.call(null,v);
var map__47252 = cljs.core.get.call(null,cljs.core.deref.call(null,orchestra_cljs.spec.test.instrumented_vars),v);
var map__47252__$1 = ((((!((map__47252 == null)))?((((map__47252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47252):map__47252);
var raw = cljs.core.get.call(null,map__47252__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__47252__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref.call(null,v);
var to_wrap = ((cljs.core._EQ_.call(null,wrapped,current))?raw:current);
var ospec = (function (){var or__35048__auto__ = orchestra_cljs.spec.test.instrument_choose_spec.call(null,spec,s,opts);
if(cljs.core.truth_(or__35048__auto__)){
return or__35048__auto__;
} else {
throw orchestra_cljs.spec.test.no_fspec.call(null,v,spec);
}
})();
var ofn = orchestra_cljs.spec.test.instrument_choose_fn.call(null,to_wrap,ospec,s,opts);
var checked = orchestra_cljs.spec.test.spec_checking_fn.call(null,v,ofn,ospec);
cljs.core.swap_BANG_.call(null,orchestra_cljs.spec.test.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",1604651272),to_wrap,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),checked], null));

return checked;
});
orchestra_cljs.spec.test.unstrument_1_STAR_ = (function orchestra_cljs$spec$test$unstrument_1_STAR_(s,v){
if(cljs.core.truth_(v)){
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,orchestra_cljs.spec.test.instrumented_vars),v);
if(cljs.core.truth_(temp__4657__auto__)){
var map__47254 = temp__4657__auto__;
var map__47254__$1 = ((((!((map__47254 == null)))?((((map__47254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47254):map__47254);
var raw = cljs.core.get.call(null,map__47254__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__47254__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
cljs.core.swap_BANG_.call(null,orchestra_cljs.spec.test.instrumented_vars,cljs.core.dissoc,v);

var current = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped,current)){
return raw;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
orchestra_cljs.spec.test.fn_spec_name_QMARK_ = (function orchestra_cljs$spec$test$fn_spec_name_QMARK_(s){
return (s instanceof cljs.core.Symbol);
});
/**
 * Given an opts map as per instrument, returns the set of syms
 * that can be instrumented.
 */
orchestra_cljs.spec.test.instrumentable_syms = (function orchestra_cljs$spec$test$instrumentable_syms(var_args){
var G__47257 = arguments.length;
switch (G__47257) {
case 0:
return orchestra_cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return orchestra_cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

orchestra_cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$0 = (function (){
return orchestra_cljs.spec.test.instrumentable_syms.call(null,null);
});

orchestra_cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(cljs.core.every_QMARK_.call(null,cljs.core.ident_QMARK_,cljs.core.keys.call(null,new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(opts)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("instrument :gen expects ident keys"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(every? ident? (keys (:gen opts)))")].join('')));
}

return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,orchestra_cljs.spec.test.fn_spec_name_QMARK_,cljs.core.keys.call(null,cljs.spec.alpha.registry.call(null))),cljs.core.keys.call(null,new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(opts)),new cljs.core.Keyword(null,"stub","stub",1339145807).cljs$core$IFn$_invoke$arity$1(opts),cljs.core.keys.call(null,new cljs.core.Keyword(null,"replace","replace",-786587770).cljs$core$IFn$_invoke$arity$1(opts))], null));
});

orchestra_cljs.spec.test.instrumentable_syms.cljs$lang$maxFixedArity = 1;

