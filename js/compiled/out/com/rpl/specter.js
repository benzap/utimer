// Compiled by ClojureScript 1.9.671 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('com.rpl.specter.navs');
goog.require('clojure.set');
com.rpl.specter.static_path_QMARK_ = (function com$rpl$specter$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_.call(null,path)){
return cljs.core.every_QMARK_.call(null,com.rpl.specter.static_path_QMARK_,path);
} else {
return cljs.core.not.call(null,com.rpl.specter.impl.dynamic_param_QMARK_.call(null,path));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__44874__delegate = function (args){
var ret = cljs.core.apply.call(null,f,args);
if(cljs.core.truth_((function (){var and__35036__auto__ = cljs.core.sequential_QMARK_.call(null,ret);
if(and__35036__auto__){
return com.rpl.specter.static_path_QMARK_.call(null,ret);
} else {
return and__35036__auto__;
}
})())){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,ret);
} else {
if((cljs.core.sequential_QMARK_.call(null,ret)) && (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,ret)))){
return cljs.core.first.call(null,ret);
} else {
return ret;

}
}
};
var G__44874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44875__i = 0, G__44875__a = new Array(arguments.length -  0);
while (G__44875__i < G__44875__a.length) {G__44875__a[G__44875__i] = arguments[G__44875__i + 0]; ++G__44875__i;}
  args = new cljs.core.IndexedSeq(G__44875__a,0,null);
} 
return G__44874__delegate.call(this,args);};
G__44874.cljs$lang$maxFixedArity = 0;
G__44874.cljs$lang$applyTo = (function (arglist__44876){
var args = cljs.core.seq(arglist__44876);
return G__44874__delegate(args);
});
G__44874.cljs$core$IFn$_invoke$arity$variadic = G__44874__delegate;
return G__44874;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__36180__auto__ = [];
var len__36173__auto___44893 = arguments.length;
var i__36174__auto___44894 = (0);
while(true){
if((i__36174__auto___44894 < len__36173__auto___44893)){
args__36180__auto__.push((arguments[i__36174__auto___44894]));

var G__44895 = (i__36174__auto___44894 + (1));
i__36174__auto___44894 = G__44895;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,apath));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq44892){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44892));
});

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
return com.rpl.specter.compiled_select.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
return com.rpl.specter.compiled_select_one.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
return com.rpl.specter.compiled_select_one_BANG_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
return com.rpl.specter.compiled_select_first.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
return com.rpl.specter.compiled_select_any.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
return com.rpl.specter.compiled_selected_any_QMARK_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
return com.rpl.specter.compiled_traverse.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,apath),structure);
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
return com.rpl.specter.compiled_traverse_all.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,apath));
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
return com.rpl.specter.compiled_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure);
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal`. Error is thrown if navigation finishes
 * at a non-`terminal` navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
return com.rpl.specter.compiled_multi_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
return com.rpl.specter.compiled_setval.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),val,structure);
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__36180__auto__ = [];
var len__36173__auto___44903 = arguments.length;
var i__36174__auto___44904 = (0);
while(true){
if((i__36174__auto___44904 < len__36173__auto___44903)){
args__36180__auto__.push((arguments[i__36174__auto___44904]));

var G__44905 = (i__36174__auto___44904 + (1));
i__36174__auto___44904 = G__44905;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((3) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36181__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__44900){
var map__44901 = p__44900;
var map__44901__$1 = ((((!((map__44901 == null)))?((((map__44901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44901):map__44901);
var merge_fn = cljs.core.get.call(null,map__44901__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq44896){
var G__44897 = cljs.core.first.call(null,seq44896);
var seq44896__$1 = cljs.core.next.call(null,seq44896);
var G__44898 = cljs.core.first.call(null,seq44896__$1);
var seq44896__$2 = cljs.core.next.call(null,seq44896__$1);
var G__44899 = cljs.core.first.call(null,seq44896__$2);
var seq44896__$3 = cljs.core.next.call(null,seq44896__$2);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__44897,G__44898,G__44899,seq44896__$3);
});

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
/**
 * Turns a navigator that takes one argument into a navigator that takes
 *        many arguments and uses the same navigator with each argument. There
 *        is no performance cost to using this. See implementation of `keypath`
 */
com.rpl.specter.eachnav = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (navfn){
var latenavfn = com.rpl.specter.late_resolved_fn.call(null,navfn);
return cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,((function (latenavfn){
return (function() { 
var G__44906__delegate = function (args){
return cljs.core.map.call(null,latenavfn,args);
};
var G__44906 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44907__i = 0, G__44907__a = new Array(arguments.length -  0);
while (G__44907__i < G__44907__a.length) {G__44907__a[G__44907__i] = arguments[G__44907__i + 0]; ++G__44907__i;}
  args = new cljs.core.IndexedSeq(G__44907__a,0,null);
} 
return G__44906__delegate.call(this,args);};
G__44906.cljs$lang$maxFixedArity = 0;
G__44906.cljs$lang$applyTo = (function (arglist__44908){
var args = cljs.core.seq(arglist__44908);
return G__44906__delegate(args);
});
G__44906.cljs$core$IFn$_invoke$arity$variadic = G__44906__delegate;
return G__44906;
})()
;})(latenavfn))
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;


com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter44909 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44909 = (function (meta44910){
this.meta44910 = meta44910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44911,meta44910__$1){
var self__ = this;
var _44911__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44909(meta44910__$1));
});

com.rpl.specter.t_com$rpl$specter44909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44911){
var self__ = this;
var _44911__$1 = this;
return self__.meta44910;
});

com.rpl.specter.t_com$rpl$specter44909.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44909.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter44909.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return structure;
});

com.rpl.specter.t_com$rpl$specter44909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44910","meta44910",1721599324,null)], null);
});

com.rpl.specter.t_com$rpl$specter44909.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44909.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44909";

com.rpl.specter.t_com$rpl$specter44909.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44909");
});

com.rpl.specter.__GT_t_com$rpl$specter44909 = (function com$rpl$specter$__GT_t_com$rpl$specter44909(meta44910){
return (new com.rpl.specter.t_com$rpl$specter44909(meta44910));
});

}

return (new com.rpl.specter.t_com$rpl$specter44909(null));
})()
;
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;
/**
 * For usage with `multi-transform`, defines an endpoint in the navigation
 *        that will have the parameterized transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter44912 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44912 = (function (afn,meta44913){
this.afn = afn;
this.meta44913 = meta44913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44914,meta44913__$1){
var self__ = this;
var _44914__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44912(self__.afn,meta44913__$1));
});

com.rpl.specter.t_com$rpl$specter44912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44914){
var self__ = this;
var _44914__$1 = this;
return self__.meta44913;
});

com.rpl.specter.t_com$rpl$specter44912.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44912.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"'terminal' should only be used in multi-transform")));
});

com.rpl.specter.t_com$rpl$specter44912.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_.call(null,self__.afn,vals,structure);
});

com.rpl.specter.t_com$rpl$specter44912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta44913","meta44913",377500021,null)], null);
});

com.rpl.specter.t_com$rpl$specter44912.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44912.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44912";

com.rpl.specter.t_com$rpl$specter44912.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44912");
});

com.rpl.specter.__GT_t_com$rpl$specter44912 = (function com$rpl$specter$__GT_t_com$rpl$specter44912(afn__$1,meta44913){
return (new com.rpl.specter.t_com$rpl$specter44912(afn__$1,meta44913));
});

}

return (new com.rpl.specter.t_com$rpl$specter44912(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
return com.rpl.specter.terminal.call(null,com.rpl.specter.impl.fast_constantly.call(null,v));
});


com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter44915 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44915 = (function (meta44916){
this.meta44916 = meta44916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44917,meta44916__$1){
var self__ = this;
var _44917__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44915(meta44916__$1));
});

com.rpl.specter.t_com$rpl$specter44915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44917){
var self__ = this;
var _44917__$1 = this;
return self__.meta44916;
});

com.rpl.specter.t_com$rpl$specter44915.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44915.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter44915.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter44915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44916","meta44916",-704931142,null)], null);
});

com.rpl.specter.t_com$rpl$specter44915.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44915.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44915";

com.rpl.specter.t_com$rpl$specter44915.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44915");
});

com.rpl.specter.__GT_t_com$rpl$specter44915 = (function com$rpl$specter$__GT_t_com$rpl$specter44915(meta44916){
return (new com.rpl.specter.t_com$rpl$specter44915(meta44916));
});

}

return (new com.rpl.specter.t_com$rpl$specter44915(null));
})()
;


com.rpl.specter.ALL_WITH_META_select_STAR_ = (function com$rpl$specter$ALL_WITH_META_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.ALL_WITH_META_transform_STAR_ = (function com$rpl$specter$ALL_WITH_META_transform_STAR_(structure,next_fn){
var m = cljs.core.meta.call(null,structure);
var res = com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
if(!((res == null))){
return cljs.core.with_meta.call(null,res,m);
} else {
return null;
}
});

/**
 * Same as ALL, except maintains metadata on the structure.
 */
com.rpl.specter.ALL_WITH_META = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter44918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44918 = (function (meta44919){
this.meta44919 = meta44919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44920,meta44919__$1){
var self__ = this;
var _44920__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44918(meta44919__$1));
});

com.rpl.specter.t_com$rpl$specter44918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44920){
var self__ = this;
var _44920__$1 = this;
return self__.meta44919;
});

com.rpl.specter.t_com$rpl$specter44918.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44918.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter44918.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
var m = cljs.core.meta.call(null,structure);
var res = com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
if(!((res == null))){
return cljs.core.with_meta.call(null,res,m);
} else {
return null;
}
});

com.rpl.specter.t_com$rpl$specter44918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44919","meta44919",-2091208958,null)], null);
});

com.rpl.specter.t_com$rpl$specter44918.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44918.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44918";

com.rpl.specter.t_com$rpl$specter44918.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44918");
});

com.rpl.specter.__GT_t_com$rpl$specter44918 = (function com$rpl$specter$__GT_t_com$rpl$specter44918(meta44919){
return (new com.rpl.specter.t_com$rpl$specter44918(meta44919));
});

}

return (new com.rpl.specter.t_com$rpl$specter44918(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__41496__auto__,v){
var ret__41497__auto__ = next_fn.call(null,v);
if((ret__41497__auto__ === com.rpl.specter.NONE)){
return curr__41496__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__41497__auto__)){
return cljs.core.reduced.call(null,ret__41497__auto__);
} else {
return ret__41497__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter44921 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44921 = (function (meta44922){
this.meta44922 = meta44922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44923,meta44922__$1){
var self__ = this;
var _44923__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44921(meta44922__$1));
});

com.rpl.specter.t_com$rpl$specter44921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44923){
var self__ = this;
var _44923__$1 = this;
return self__.meta44922;
});

com.rpl.specter.t_com$rpl$specter44921.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44921.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return cljs.core.reduce.call(null,((function (next_fn,this__43282__auto____$1){
return (function (curr__41496__auto__,v){
var ret__41497__auto__ = next_fn.call(null,v);
if((ret__41497__auto__ === com.rpl.specter.NONE)){
return curr__41496__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__41497__auto__)){
return cljs.core.reduced.call(null,ret__41497__auto__);
} else {
return ret__41497__auto__;
}
}
});})(next_fn,this__43282__auto____$1))
,com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter44921.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter44921.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44922","meta44922",-1435713912,null)], null);
});

com.rpl.specter.t_com$rpl$specter44921.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44921.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44921";

com.rpl.specter.t_com$rpl$specter44921.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44921");
});

com.rpl.specter.__GT_t_com$rpl$specter44921 = (function com$rpl$specter$__GT_t_com$rpl$specter44921(meta44922){
return (new com.rpl.specter.t_com$rpl$specter44921(meta44922));
});

}

return (new com.rpl.specter.t_com$rpl$specter44921(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__41496__auto__,k){
var ret__41497__auto__ = next_fn.call(null,k);
if((ret__41497__auto__ === com.rpl.specter.NONE)){
return curr__41496__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__41497__auto__)){
return cljs.core.reduced.call(null,ret__41497__auto__);
} else {
return ret__41497__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys.call(null,structure));
});

com.rpl.specter.MAP_KEYS_transform_STAR_ = (function com$rpl$specter$MAP_KEYS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_keys_transform.call(null,structure,next_fn);
});

/**
 * Navigate to each key of the map. This is more efficient than
 *        navigating via [ALL FIRST]
 */
com.rpl.specter.MAP_KEYS = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter44924 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44924 = (function (meta44925){
this.meta44925 = meta44925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44926,meta44925__$1){
var self__ = this;
var _44926__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44924(meta44925__$1));
});

com.rpl.specter.t_com$rpl$specter44924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44926){
var self__ = this;
var _44926__$1 = this;
return self__.meta44925;
});

com.rpl.specter.t_com$rpl$specter44924.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44924.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return cljs.core.reduce.call(null,((function (next_fn,this__43282__auto____$1){
return (function (curr__41496__auto__,k){
var ret__41497__auto__ = next_fn.call(null,k);
if((ret__41497__auto__ === com.rpl.specter.NONE)){
return curr__41496__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__41497__auto__)){
return cljs.core.reduced.call(null,ret__41497__auto__);
} else {
return ret__41497__auto__;
}
}
});})(next_fn,this__43282__auto____$1))
,com.rpl.specter.NONE,cljs.core.keys.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter44924.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return com.rpl.specter.navs.map_keys_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter44924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44925","meta44925",-773245586,null)], null);
});

com.rpl.specter.t_com$rpl$specter44924.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44924.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44924";

com.rpl.specter.t_com$rpl$specter44924.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44924");
});

com.rpl.specter.__GT_t_com$rpl$specter44924 = (function com$rpl$specter$__GT_t_com$rpl$specter44924(meta44925){
return (new com.rpl.specter.t_com$rpl$specter44924(meta44925));
});

}

return (new com.rpl.specter.t_com$rpl$specter44924(null));
})()
;
com.rpl.specter.VAL = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter44927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44927 = (function (meta44928){
this.meta44928 = meta44928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44929,meta44928__$1){
var self__ = this;
var _44929__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44927(meta44928__$1));
});

com.rpl.specter.t_com$rpl$specter44927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44929){
var self__ = this;
var _44929__$1 = this;
return self__.meta44928;
});

com.rpl.specter.t_com$rpl$specter44927.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44927.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__44043__auto__,vals__44044__auto__,structure,next_fn__44045__auto__){
var self__ = this;
var this__44043__auto____$1 = this;
return next_fn__44045__auto__.call(null,cljs.core.conj.call(null,vals__44044__auto__,structure),structure);
});

com.rpl.specter.t_com$rpl$specter44927.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__44043__auto__,vals__44044__auto__,structure,next_fn__44045__auto__){
var self__ = this;
var this__44043__auto____$1 = this;
return next_fn__44045__auto__.call(null,cljs.core.conj.call(null,vals__44044__auto__,structure),structure);
});

com.rpl.specter.t_com$rpl$specter44927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44928","meta44928",1591995093,null)], null);
});

com.rpl.specter.t_com$rpl$specter44927.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44927.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44927";

com.rpl.specter.t_com$rpl$specter44927.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44927");
});

com.rpl.specter.__GT_t_com$rpl$specter44927 = (function com$rpl$specter$__GT_t_com$rpl$specter44927(meta44928){
return (new com.rpl.specter.t_com$rpl$specter44927(meta44928));
});

}

return (new com.rpl.specter.t_com$rpl$specter44927(null));
})()
;
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last);
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first);


com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_select.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_transform.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,end_index_fn,structure,s),next_fn);
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start_index_fn,end_index_fn){
if(typeof com.rpl.specter.t_com$rpl$specter44930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44930 = (function (start_index_fn,end_index_fn,meta44931){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta44931 = meta44931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44932,meta44931__$1){
var self__ = this;
var _44932__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44930(self__.start_index_fn,self__.end_index_fn,meta44931__$1));
});

com.rpl.specter.t_com$rpl$specter44930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44932){
var self__ = this;
var _44932__$1 = this;
return self__.meta44931;
});

com.rpl.specter.t_com$rpl$specter44930.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44930.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
var s = self__.start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_select.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,self__.end_index_fn,structure,s),next_fn);
});

com.rpl.specter.t_com$rpl$specter44930.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
var s = self__.start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_transform.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,self__.end_index_fn,structure,s),next_fn);
});

com.rpl.specter.t_com$rpl$specter44930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta44931","meta44931",741316210,null)], null);
});

com.rpl.specter.t_com$rpl$specter44930.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44930.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44930";

com.rpl.specter.t_com$rpl$specter44930.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44930");
});

com.rpl.specter.__GT_t_com$rpl$specter44930 = (function com$rpl$specter$__GT_t_com$rpl$specter44930(start_index_fn__$1,end_index_fn__$1,meta44931){
return (new com.rpl.specter.t_com$rpl$specter44930(start_index_fn__$1,end_index_fn__$1,meta44931));
});

}

return (new com.rpl.specter.t_com$rpl$specter44930(start_index_fn,end_index_fn,null));
}));


com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select.call(null,structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn);
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start,end){
if(typeof com.rpl.specter.t_com$rpl$specter44933 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44933 = (function (start,end,meta44934){
this.start = start;
this.end = end;
this.meta44934 = meta44934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44935,meta44934__$1){
var self__ = this;
var _44935__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44933(self__.start,self__.end,meta44934__$1));
});

com.rpl.specter.t_com$rpl$specter44933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44935){
var self__ = this;
var _44935__$1 = this;
return self__.meta44934;
});

com.rpl.specter.t_com$rpl$specter44933.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44933.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter44933.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter44933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta44934","meta44934",968588611,null)], null);
});

com.rpl.specter.t_com$rpl$specter44933.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44933.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44933";

com.rpl.specter.t_com$rpl$specter44933.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44933");
});

com.rpl.specter.__GT_t_com$rpl$specter44933 = (function com$rpl$specter$__GT_t_com$rpl$specter44933(start__$1,end__$1,meta44934){
return (new com.rpl.specter.t_com$rpl$specter44933(start__$1,end__$1,meta44934));
});

}

return (new com.rpl.specter.t_com$rpl$specter44933(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__41496__auto__,p__44936){
var vec__44937 = p__44936;
var s = cljs.core.nth.call(null,vec__44937,(0),null);
var e = cljs.core.nth.call(null,vec__44937,(1),null);
var ret__41497__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__41497__auto__ === com.rpl.specter.NONE)){
return curr__41496__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__41497__auto__)){
return cljs.core.reduced.call(null,ret__41497__auto__);
} else {
return ret__41497__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj.call(null,(function (pred){
if(typeof com.rpl.specter.t_com$rpl$specter44940 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44940 = (function (pred,meta44941){
this.pred = pred;
this.meta44941 = meta44941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44942,meta44941__$1){
var self__ = this;
var _44942__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44940(self__.pred,meta44941__$1));
});

com.rpl.specter.t_com$rpl$specter44940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44942){
var self__ = this;
var _44942__$1 = this;
return self__.meta44941;
});

com.rpl.specter.t_com$rpl$specter44940.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44940.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return cljs.core.reduce.call(null,((function (next_fn,this__43282__auto____$1){
return (function (curr__41496__auto__,p__44943){
var vec__44944 = p__44943;
var s = cljs.core.nth.call(null,vec__44944,(0),null);
var e = cljs.core.nth.call(null,vec__44944,(1),null);
var ret__41497__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__41497__auto__ === com.rpl.specter.NONE)){
return curr__41496__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__41497__auto__)){
return cljs.core.reduced.call(null,ret__41497__auto__);
} else {
return ret__41497__auto__;
}
}
});})(next_fn,this__43282__auto____$1))
,com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,self__.pred));
});

com.rpl.specter.t_com$rpl$specter44940.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,self__.pred,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter44940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta44941","meta44941",1260961042,null)], null);
});

com.rpl.specter.t_com$rpl$specter44940.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44940.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44940";

com.rpl.specter.t_com$rpl$specter44940.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44940");
});

com.rpl.specter.__GT_t_com$rpl$specter44940 = (function com$rpl$specter$__GT_t_com$rpl$specter44940(pred__$1,meta44941){
return (new com.rpl.specter.t_com$rpl$specter44940(pred__$1,meta44941));
});

}

return (new com.rpl.specter.t_com$rpl$specter44940(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure)].join('');
} else {
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter44947 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44947 = (function (meta44948){
this.meta44948 = meta44948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44949,meta44948__$1){
var self__ = this;
var _44949__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44947(meta44948__$1));
});

com.rpl.specter.t_com$rpl$specter44947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44949){
var self__ = this;
var _44949__$1 = this;
return self__.meta44948;
});

com.rpl.specter.t_com$rpl$specter44947.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44947.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.t_com$rpl$specter44947.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure)].join('');
} else {
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
}
});

com.rpl.specter.t_com$rpl$specter44947.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44948","meta44948",-1591586658,null)], null);
});

com.rpl.specter.t_com$rpl$specter44947.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44947.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44947";

com.rpl.specter.t_com$rpl$specter44947.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44947");
});

com.rpl.specter.__GT_t_com$rpl$specter44947 = (function com$rpl$specter$__GT_t_com$rpl$specter44947(meta44948){
return (new com.rpl.specter.t_com$rpl$specter44947(meta44948));
});

}

return (new com.rpl.specter.t_com$rpl$specter44947(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,""))].join('');
} else {
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter44950 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44950 = (function (meta44951){
this.meta44951 = meta44951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44952,meta44951__$1){
var self__ = this;
var _44952__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44950(meta44951__$1));
});

com.rpl.specter.t_com$rpl$specter44950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44952){
var self__ = this;
var _44952__$1 = this;
return self__.meta44951;
});

com.rpl.specter.t_com$rpl$specter44950.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44950.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.t_com$rpl$specter44950.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,""))].join('');
} else {
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
}
});

com.rpl.specter.t_com$rpl$specter44950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44951","meta44951",-480887226,null)], null);
});

com.rpl.specter.t_com$rpl$specter44950.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44950.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44950";

com.rpl.specter.t_com$rpl$specter44950.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44950");
});

com.rpl.specter.__GT_t_com$rpl$specter44950 = (function com$rpl$specter$__GT_t_com$rpl$specter44950(meta44951){
return (new com.rpl.specter.t_com$rpl$specter44950(meta44951));
});

}

return (new com.rpl.specter.t_com$rpl$specter44950(null));
})()
;


com.rpl.specter.NONE_ELEM_select_STAR_ = (function com$rpl$specter$NONE_ELEM_select_STAR_(structure,next_fn){
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.NONE_ELEM_transform_STAR_ = (function com$rpl$specter$NONE_ELEM_transform_STAR_(structure,next_fn){
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.call(null,structure,newe);
}
}
});

/**
 * Navigate to 'void' elem in the set.
 *        For transformations - if result is not `NONE`,
 *        then add that value to the set.
 */
com.rpl.specter.NONE_ELEM = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter44953 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44953 = (function (meta44954){
this.meta44954 = meta44954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44955,meta44954__$1){
var self__ = this;
var _44955__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44953(meta44954__$1));
});

com.rpl.specter.t_com$rpl$specter44953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44955){
var self__ = this;
var _44955__$1 = this;
return self__.meta44954;
});

com.rpl.specter.t_com$rpl$specter44953.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44953.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter44953.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.call(null,structure,newe);
}
}
});

com.rpl.specter.t_com$rpl$specter44953.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44954","meta44954",1355654351,null)], null);
});

com.rpl.specter.t_com$rpl$specter44953.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44953.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44953";

com.rpl.specter.t_com$rpl$specter44953.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44953");
});

com.rpl.specter.__GT_t_com$rpl$specter44953 = (function com$rpl$specter$__GT_t_com$rpl$specter44953(meta44954){
return (new com.rpl.specter.t_com$rpl$specter44953(meta44954));
});

}

return (new com.rpl.specter.t_com$rpl$specter44953(null));
})()
;


com.rpl.specter.BEFORE_ELEM_select_STAR_ = (function com$rpl$specter$BEFORE_ELEM_select_STAR_(structure,next_fn){
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.BEFORE_ELEM_transform_STAR_ = (function com$rpl$specter$BEFORE_ELEM_transform_STAR_(structure,next_fn){
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one.call(null,structure,newe);
}
});

/**
 * Navigate to 'void' element before the sequence.
 *        For transformations – if result is not `NONE`,
 *        then prepend that value.
 */
com.rpl.specter.BEFORE_ELEM = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter44956 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44956 = (function (meta44957){
this.meta44957 = meta44957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44958,meta44957__$1){
var self__ = this;
var _44958__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44956(meta44957__$1));
});

com.rpl.specter.t_com$rpl$specter44956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44958){
var self__ = this;
var _44958__$1 = this;
return self__.meta44957;
});

com.rpl.specter.t_com$rpl$specter44956.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44956.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter44956.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one.call(null,structure,newe);
}
});

com.rpl.specter.t_com$rpl$specter44956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44957","meta44957",1527109819,null)], null);
});

com.rpl.specter.t_com$rpl$specter44956.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44956.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44956";

com.rpl.specter.t_com$rpl$specter44956.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44956");
});

com.rpl.specter.__GT_t_com$rpl$specter44956 = (function com$rpl$specter$__GT_t_com$rpl$specter44956(meta44957){
return (new com.rpl.specter.t_com$rpl$specter44956(meta44957));
});

}

return (new com.rpl.specter.t_com$rpl$specter44956(null));
})()
;


com.rpl.specter.AFTER_ELEM_select_STAR_ = (function com$rpl$specter$AFTER_ELEM_select_STAR_(structure,next_fn){
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.AFTER_ELEM_transform_STAR_ = (function com$rpl$specter$AFTER_ELEM_transform_STAR_(structure,next_fn){
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one.call(null,structure,newe);
}
});

/**
 * Navigate to 'void' element after the sequence.
 *        For transformations – if result is not `NONE`,
 *        then append that value.
 */
com.rpl.specter.AFTER_ELEM = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter44959 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44959 = (function (meta44960){
this.meta44960 = meta44960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44961,meta44960__$1){
var self__ = this;
var _44961__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44959(meta44960__$1));
});

com.rpl.specter.t_com$rpl$specter44959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44961){
var self__ = this;
var _44961__$1 = this;
return self__.meta44960;
});

com.rpl.specter.t_com$rpl$specter44959.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44959.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.t_com$rpl$specter44959.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one.call(null,structure,newe);
}
});

com.rpl.specter.t_com$rpl$specter44959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44960","meta44960",404881052,null)], null);
});

com.rpl.specter.t_com$rpl$specter44959.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44959.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44959";

com.rpl.specter.t_com$rpl$specter44959.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44959");
});

com.rpl.specter.__GT_t_com$rpl$specter44959 = (function com$rpl$specter$__GT_t_com$rpl$specter44959(meta44960){
return (new com.rpl.specter.t_com$rpl$specter44959(meta44960));
});

}

return (new com.rpl.specter.t_com$rpl$specter44959(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj.call(null,(function (aset){
if(typeof com.rpl.specter.t_com$rpl$specter44962 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44962 = (function (aset,meta44963){
this.aset = aset;
this.meta44963 = meta44963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44964,meta44963__$1){
var self__ = this;
var _44964__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44962(self__.aset,meta44963__$1));
});

com.rpl.specter.t_com$rpl$specter44962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44964){
var self__ = this;
var _44964__$1 = this;
return self__.meta44963;
});

com.rpl.specter.t_com$rpl$specter44962.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44962.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return next_fn.call(null,clojure.set.intersection.call(null,structure,self__.aset));
});

com.rpl.specter.t_com$rpl$specter44962.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
var subset = clojure.set.intersection.call(null,structure,self__.aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
});

com.rpl.specter.t_com$rpl$specter44962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta44963","meta44963",-1705225389,null)], null);
});

com.rpl.specter.t_com$rpl$specter44962.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44962.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44962";

com.rpl.specter.t_com$rpl$specter44962.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44962");
});

com.rpl.specter.__GT_t_com$rpl$specter44962 = (function com$rpl$specter$__GT_t_com$rpl$specter44962(aset__$1,meta44963){
return (new com.rpl.specter.t_com$rpl$specter44962(aset__$1,meta44963));
});

}

return (new com.rpl.specter.t_com$rpl$specter44962(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
return next_fn.call(null,cljs.core.select_keys.call(null,structure,m_keys));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys.call(null,structure,m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,m_keys),newmap);
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj.call(null,(function (m_keys){
if(typeof com.rpl.specter.t_com$rpl$specter44965 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44965 = (function (m_keys,meta44966){
this.m_keys = m_keys;
this.meta44966 = meta44966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44967,meta44966__$1){
var self__ = this;
var _44967__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44965(self__.m_keys,meta44966__$1));
});

com.rpl.specter.t_com$rpl$specter44965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44967){
var self__ = this;
var _44967__$1 = this;
return self__.meta44966;
});

com.rpl.specter.t_com$rpl$specter44965.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44965.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return next_fn.call(null,cljs.core.select_keys.call(null,structure,self__.m_keys));
});

com.rpl.specter.t_com$rpl$specter44965.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
var submap = cljs.core.select_keys.call(null,structure,self__.m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,self__.m_keys),newmap);
});

com.rpl.specter.t_com$rpl$specter44965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta44966","meta44966",1832283787,null)], null);
});

com.rpl.specter.t_com$rpl$specter44965.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44965.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44965";

com.rpl.specter.t_com$rpl$specter44965.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44965");
});

com.rpl.specter.__GT_t_com$rpl$specter44965 = (function com$rpl$specter$__GT_t_com$rpl$specter44965(m_keys__$1,meta44966){
return (new com.rpl.specter.t_com$rpl$specter44965(m_keys__$1,meta44966));
});

}

return (new com.rpl.specter.t_com$rpl$specter44965(m_keys,null));
}));
/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 * 
 *   If transformed sequence is smaller than input sequence, missing entries
 *   will be filled in with NONE, triggering removal if supported by that navigator.
 * 
 *   Value collection (e.g. collect, collect-one) may not be used in the subpath.
 */
com.rpl.specter.subselect = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__44971__delegate = function (path){
var builder__44046__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter44968 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44968 = (function (path,late,meta44969){
this.path = path;
this.late = late;
this.meta44969 = meta44969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44970,meta44969__$1){
var self__ = this;
var _44970__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44968(self__.path,self__.late,meta44969__$1));
});

com.rpl.specter.t_com$rpl$specter44968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44970){
var self__ = this;
var _44970__$1 = this;
return self__.meta44969;
});

com.rpl.specter.t_com$rpl$specter44968.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44968.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,self__.late,structure));
});

com.rpl.specter.t_com$rpl$specter44968.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
var select_result = com.rpl.specter.compiled_select.call(null,self__.late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,transformed);
return com.rpl.specter.compiled_transform.call(null,self__.late,((function (select_result,transformed,values_to_insert,next_fn,this__43282__auto____$1){
return (function (_){
var vs = com.rpl.specter.impl.get_cell.call(null,values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.next);

return cljs.core.first.call(null,vs);
} else {
return com.rpl.specter.NONE;
}
});})(select_result,transformed,values_to_insert,next_fn,this__43282__auto____$1))
,structure);
});

com.rpl.specter.t_com$rpl$specter44968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta44969","meta44969",-1577693314,null)], null);
});

com.rpl.specter.t_com$rpl$specter44968.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44968.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44968";

com.rpl.specter.t_com$rpl$specter44968.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44968");
});

com.rpl.specter.__GT_t_com$rpl$specter44968 = (function com$rpl$specter$__GT_t_com$rpl$specter44968(path__$1,late__$1,meta44969){
return (new com.rpl.specter.t_com$rpl$specter44968(path__$1,late__$1,meta44969));
});

}

return (new com.rpl.specter.t_com$rpl$specter44968(path,late,null));
}));
var curr_params__44047__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__44047__auto__)){
return cljs.core.apply.call(null,builder__44046__auto__,curr_params__44047__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__44046__auto__,curr_params__44047__auto__,null);
}
};
var G__44971 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__44972__i = 0, G__44972__a = new Array(arguments.length -  0);
while (G__44972__i < G__44972__a.length) {G__44972__a[G__44972__i] = arguments[G__44972__i + 0]; ++G__44972__i;}
  path = new cljs.core.IndexedSeq(G__44972__a,0,null);
} 
return G__44971__delegate.call(this,path);};
G__44971.cljs$lang$maxFixedArity = 0;
G__44971.cljs$lang$applyTo = (function (arglist__44973){
var path = cljs.core.seq(arglist__44973);
return G__44971__delegate(path);
});
G__44971.cljs$core$IFn$_invoke$arity$variadic = G__44971__delegate;
return G__44971;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj.call(null,(function (key){
if(typeof com.rpl.specter.t_com$rpl$specter44974 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44974 = (function (key,meta44975){
this.key = key;
this.meta44975 = meta44975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44976,meta44975__$1){
var self__ = this;
var _44976__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44974(self__.key,meta44975__$1));
});

com.rpl.specter.t_com$rpl$specter44974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44976){
var self__ = this;
var _44976__$1 = this;
return self__.meta44975;
});

com.rpl.specter.t_com$rpl$specter44974.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44974.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.key)){
return next_fn.call(null,vals,self__.key);
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter44974.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.key)){
var newkey = next_fn.call(null,vals,self__.key);
var dissoced = cljs.core.dissoc.call(null,structure,self__.key);
if((com.rpl.specter.NONE === newkey)){
return dissoced;
} else {
return cljs.core.assoc.call(null,dissoced,newkey,cljs.core.get.call(null,structure,self__.key));
}
} else {
return structure;
}
});

com.rpl.specter.t_com$rpl$specter44974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta44975","meta44975",1080004652,null)], null);
});

com.rpl.specter.t_com$rpl$specter44974.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44974.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44974";

com.rpl.specter.t_com$rpl$specter44974.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44974");
});

com.rpl.specter.__GT_t_com$rpl$specter44974 = (function com$rpl$specter$__GT_t_com$rpl$specter44974(key__$1,meta44975){
return (new com.rpl.specter.t_com$rpl$specter44974(key__$1,meta44975));
});

}

return (new com.rpl.specter.t_com$rpl$specter44974(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj.call(null,(function (elem){
if(typeof com.rpl.specter.t_com$rpl$specter44977 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44977 = (function (elem,meta44978){
this.elem = elem;
this.meta44978 = meta44978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44979,meta44978__$1){
var self__ = this;
var _44979__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44977(self__.elem,meta44978__$1));
});

com.rpl.specter.t_com$rpl$specter44977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44979){
var self__ = this;
var _44979__$1 = this;
return self__.meta44978;
});

com.rpl.specter.t_com$rpl$specter44977.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44977.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.elem)){
return next_fn.call(null,vals,self__.elem);
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter44977.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.elem)){
var newelem = next_fn.call(null,vals,self__.elem);
var removed = cljs.core.disj.call(null,structure,self__.elem);
if((com.rpl.specter.NONE === newelem)){
return removed;
} else {
return cljs.core.conj.call(null,removed,newelem);
}
} else {
return structure;
}
});

com.rpl.specter.t_com$rpl$specter44977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta44978","meta44978",-375091704,null)], null);
});

com.rpl.specter.t_com$rpl$specter44977.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44977.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44977";

com.rpl.specter.t_com$rpl$specter44977.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44977");
});

com.rpl.specter.__GT_t_com$rpl$specter44977 = (function com$rpl$specter$__GT_t_com$rpl$specter44977(elem__$1,meta44978){
return (new com.rpl.specter.t_com$rpl$specter44977(elem__$1,meta44978));
});

}

return (new com.rpl.specter.t_com$rpl$specter44977(elem,null));
}));
/**
 * Navigate to the specified keys one after another. If navigate to NONE,
 *           that element is removed from the map or vector.
 */
com.rpl.specter.keypath = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_);
/**
 * Navigate to the specified keys one after another, only if they exist
 *           in the data structure. If navigate to NONE, that element is removed
 *           from the map or vector.
 */
com.rpl.specter.must = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_);
/**
 * Navigate to the specified indices one after another.If navigate to
 *          NONE, that element is removed from the sequence.
 */
com.rpl.specter.nthpath = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.nthpath_STAR_);
/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj.call(null,(function (index){
if(typeof com.rpl.specter.t_com$rpl$specter44980 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44980 = (function (index,meta44981){
this.index = index;
this.meta44981 = meta44981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44982,meta44981__$1){
var self__ = this;
var _44982__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44980(self__.index,meta44981__$1));
});

com.rpl.specter.t_com$rpl$specter44980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44982){
var self__ = this;
var _44982__$1 = this;
return self__.meta44981;
});

com.rpl.specter.t_com$rpl$specter44980.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44980.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter44980.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = next_fn.call(null,vals,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__44053__auto__ = com.rpl.specter.pathcache44983;
var info__44053__auto____$1 = (((info__44053__auto__ == null))?(function (){var info44984 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.srange,new cljs.core.Var(function(){return com.rpl.specter.srange;},new cljs.core.Symbol("com.rpl.specter","srange","com.rpl.specter/srange",-978851939,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"srange","srange",-1324254972,null),"dist\\js\\compiled\\out\\com\\rpl\\specter.cljc",9,1,730,733,cljs.core.List.EMPTY,"Navigates to the subsequence bound by the indexes start (inclusive)\n          and end (exclusive)",(cljs.core.truth_(com.rpl.specter.srange)?com.rpl.specter.srange.cljs$lang$test:null)])),new cljs.core.Symbol(null,"srange","srange",-1324254972,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,self__.index,new cljs.core.Symbol(null,"index","index",108845612,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,self__.index,new cljs.core.Symbol(null,"index","index",108845612,null))], null),cljs.core.list(new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null));
com.rpl.specter.pathcache44983 = info44984;

return info44984;
})():info__44053__auto__);
var precompiled44985 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__44053__auto____$1);
var dynamic_QMARK___44054__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__44053__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___44054__auto__)){
return precompiled44985.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.srange,self__.index,self__.index], null));
} else {
return precompiled44985;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),structure);
}
});

com.rpl.specter.t_com$rpl$specter44980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta44981","meta44981",-106228521,null)], null);
});

com.rpl.specter.t_com$rpl$specter44980.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44980.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44980";

com.rpl.specter.t_com$rpl$specter44980.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44980");
});

com.rpl.specter.__GT_t_com$rpl$specter44980 = (function com$rpl$specter$__GT_t_com$rpl$specter44980(index__$1,meta44981){
return (new com.rpl.specter.t_com$rpl$specter44980(index__$1,meta44981));
});

}

return (new com.rpl.specter.t_com$rpl$specter44980(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj.call(null,(function (i){
if(typeof com.rpl.specter.t_com$rpl$specter44986 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter44986 = (function (i,meta44987){
this.i = i;
this.meta44987 = meta44987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter44986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44988,meta44987__$1){
var self__ = this;
var _44988__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter44986(self__.i,meta44987__$1));
});

com.rpl.specter.t_com$rpl$specter44986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44988){
var self__ = this;
var _44988__$1 = this;
return self__.meta44987;
});

com.rpl.specter.t_com$rpl$specter44986.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter44986.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(((self__.i >= (0))) && ((self__.i < cljs.core.count.call(null,structure)))){
return next_fn.call(null,vals,self__.i);
} else {
return com.rpl.specter.NONE;
}
});

com.rpl.specter.t_com$rpl$specter44986.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(((self__.i >= (0))) && ((self__.i < cljs.core.count.call(null,structure)))){
var newi = next_fn.call(null,vals,self__.i);
if(cljs.core._EQ_.call(null,newi,self__.i)){
return structure;
} else {
var v = cljs.core.nth.call(null,structure,self__.i);
if(cljs.core.vector_QMARK_.call(null,structure)){
var shifted = (((newi < self__.i))?(function (){var j = (self__.i - (1));
var s = structure;
while(true){
if((j < newi)){
return s;
} else {
var G__44995 = (j - (1));
var G__44996 = cljs.core.assoc.call(null,s,(j + (1)),cljs.core.nth.call(null,s,j));
j = G__44995;
s = G__44996;
continue;
}
break;
}
})():(function (){var j = (self__.i + (1));
var s = structure;
while(true){
if((j > newi)){
return s;
} else {
var G__44997 = (j + (1));
var G__44998 = cljs.core.assoc.call(null,s,(j - (1)),cljs.core.nth.call(null,s,j));
j = G__44997;
s = G__44998;
continue;
}
break;
}
})());
return cljs.core.assoc.call(null,shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__44053__auto__ = com.rpl.specter.pathcache44989;
var info__44053__auto____$1 = (((info__44053__auto__ == null))?(function (){var info44990 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"dist\\js\\compiled\\out\\com\\rpl\\specter.cljc",15,1,943,946,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache44989 = info44990;

return info44990;
})():info__44053__auto__);
var precompiled44991 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__44053__auto____$1);
var dynamic_QMARK___44054__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__44053__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___44054__auto__)){
return precompiled44991.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null));
} else {
return precompiled44991;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__44053__auto__ = com.rpl.specter.pathcache44992;
var info__44053__auto____$1 = (((info__44053__auto__ == null))?(function (){var info44993 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"dist\\js\\compiled\\out\\com\\rpl\\specter.cljc",10,1,938,940,cljs.core.List.EMPTY,"Navigate to the specified indices one after another.If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache44992 = info44993;

return info44993;
})():info__44053__auto__);
var precompiled44994 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__44053__auto____$1);
var dynamic_QMARK___44054__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__44053__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___44054__auto__)){
return precompiled44994.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null));
} else {
return precompiled44994;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
});

com.rpl.specter.t_com$rpl$specter44986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta44987","meta44987",-910855851,null)], null);
});

com.rpl.specter.t_com$rpl$specter44986.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter44986.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter44986";

com.rpl.specter.t_com$rpl$specter44986.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter44986");
});

com.rpl.specter.__GT_t_com$rpl$specter44986 = (function com$rpl$specter$__GT_t_com$rpl$specter44986(i__$1,meta44987){
return (new com.rpl.specter.t_com$rpl$specter44986(i__$1,meta44987));
});

}

return (new com.rpl.specter.t_com$rpl$specter44986(i,null));
}));


com.rpl.specter.INDEXED_VALS_select_STAR_ = (function com$rpl$specter$INDEXED_VALS_select_STAR_(structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.call(null,(-1));
return cljs.core.reduce.call(null,((function (i){
return (function (curr__41496__auto__,e){
var ret__41497__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_.call(null,i,cljs.core.inc);

return next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell.call(null,i),e], null));
})()
;
if((ret__41497__auto__ === com.rpl.specter.NONE)){
return curr__41496__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__41497__auto__)){
return cljs.core.reduced.call(null,ret__41497__auto__);
} else {
return ret__41497__auto__;
}
}
});})(i))
,com.rpl.specter.NONE,structure);
});

com.rpl.specter.INDEXED_VALS_transform_STAR_ = (function com$rpl$specter$INDEXED_VALS_transform_STAR_(structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.call(null,(0));
var indices = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.vec.call(null,cljs.core.range.call(null,cljs.core.count.call(null,structure))));
return cljs.core.reduce.call(null,((function (i,indices){
return (function (s,e){
var curri = cljs.core.nth.call(null,com.rpl.specter.impl.get_cell.call(null,indices),com.rpl.specter.impl.get_cell.call(null,i));
var vec__44999 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curri,e], null));
var newi = cljs.core.nth.call(null,vec__44999,(0),null);
var newe = cljs.core.nth.call(null,vec__44999,(1),null);
if((newi > curri)){
com.rpl.specter.impl.update_cell_BANG_.call(null,indices,((function (curri,vec__44999,newi,newe,i,indices){
return (function (ii){
var j = (curri + (1));
var s__$1 = ii;
while(true){
var news = cljs.core.update.call(null,s__$1,j,cljs.core.dec);
if((j < newi)){
var G__45020 = (j + (1));
var G__45021 = news;
j = G__45020;
s__$1 = G__45021;
continue;
} else {
return news;
}
break;
}
});})(curri,vec__44999,newi,newe,i,indices))
);
} else {
}

com.rpl.specter.impl.update_cell_BANG_.call(null,i,cljs.core.inc);

return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__44053__auto__ = com.rpl.specter.pathcache45002;
var info__44053__auto____$1 = (((info__44053__auto__ == null))?(function (){var info45003 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"dist\\js\\compiled\\out\\com\\rpl\\specter.cljc",12,1,958,961,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache45002 = info45003;

return info45003;
})():info__44053__auto__);
var precompiled45004 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__44053__auto____$1);
var dynamic_QMARK___44054__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__44053__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___44054__auto__)){
return precompiled45004.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null));
} else {
return precompiled45004;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__44053__auto__ = com.rpl.specter.pathcache45005;
var info__44053__auto____$1 = (((info__44053__auto__ == null))?(function (){var info45006 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"dist\\js\\compiled\\out\\com\\rpl\\specter.cljc",10,1,938,940,cljs.core.List.EMPTY,"Navigate to the specified indices one after another.If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache45005 = info45006;

return info45006;
})():info__44053__auto__);
var precompiled45007 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__44053__auto____$1);
var dynamic_QMARK___44054__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__44053__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___44054__auto__)){
return precompiled45007.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null));
} else {
return precompiled45007;
}
})(),newe,s));
});})(i,indices))
,structure,structure);
});

/**
 * Navigate to [index elem] pairs for each element in a sequence. Changing index in transform
 *        has same effect as `index-nav`. Indices seen during transform take into account any shifting
 *        from prior sequence elements changing indices.
 */
com.rpl.specter.INDEXED_VALS = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter45008 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45008 = (function (meta45009){
this.meta45009 = meta45009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45010,meta45009__$1){
var self__ = this;
var _45010__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45008(meta45009__$1));
});

com.rpl.specter.t_com$rpl$specter45008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45010){
var self__ = this;
var _45010__$1 = this;
return self__.meta45009;
});

com.rpl.specter.t_com$rpl$specter45008.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45008.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
var i = com.rpl.specter.impl.mutable_cell.call(null,(-1));
return cljs.core.reduce.call(null,((function (i,next_fn,this__43282__auto____$1){
return (function (curr__41496__auto__,e){
var ret__41497__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_.call(null,i,cljs.core.inc);

return next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell.call(null,i),e], null));
})()
;
if((ret__41497__auto__ === com.rpl.specter.NONE)){
return curr__41496__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__41497__auto__)){
return cljs.core.reduced.call(null,ret__41497__auto__);
} else {
return ret__41497__auto__;
}
}
});})(i,next_fn,this__43282__auto____$1))
,com.rpl.specter.NONE,structure);
});

com.rpl.specter.t_com$rpl$specter45008.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
var i = com.rpl.specter.impl.mutable_cell.call(null,(0));
var indices = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.vec.call(null,cljs.core.range.call(null,cljs.core.count.call(null,structure))));
return cljs.core.reduce.call(null,((function (i,indices,next_fn,this__43282__auto____$1){
return (function (s,e){
var curri = cljs.core.nth.call(null,com.rpl.specter.impl.get_cell.call(null,indices),com.rpl.specter.impl.get_cell.call(null,i));
var vec__45011 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curri,e], null));
var newi = cljs.core.nth.call(null,vec__45011,(0),null);
var newe = cljs.core.nth.call(null,vec__45011,(1),null);
if((newi > curri)){
com.rpl.specter.impl.update_cell_BANG_.call(null,indices,((function (curri,vec__45011,newi,newe,i,indices,next_fn,this__43282__auto____$1){
return (function (ii){
var j = (curri + (1));
var s__$1 = ii;
while(true){
var news = cljs.core.update.call(null,s__$1,j,cljs.core.dec);
if((j < newi)){
var G__45022 = (j + (1));
var G__45023 = news;
j = G__45022;
s__$1 = G__45023;
continue;
} else {
return news;
}
break;
}
});})(curri,vec__45011,newi,newe,i,indices,next_fn,this__43282__auto____$1))
);
} else {
}

com.rpl.specter.impl.update_cell_BANG_.call(null,i,cljs.core.inc);

return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__44053__auto__ = com.rpl.specter.pathcache45014;
var info__44053__auto____$1 = (((info__44053__auto__ == null))?(function (){var info45015 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"dist\\js\\compiled\\out\\com\\rpl\\specter.cljc",12,1,958,961,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache45014 = info45015;

return info45015;
})():info__44053__auto__);
var precompiled45016 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__44053__auto____$1);
var dynamic_QMARK___44054__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__44053__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___44054__auto__)){
return precompiled45016.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null));
} else {
return precompiled45016;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__44053__auto__ = com.rpl.specter.pathcache45017;
var info__44053__auto____$1 = (((info__44053__auto__ == null))?(function (){var info45018 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"dist\\js\\compiled\\out\\com\\rpl\\specter.cljc",10,1,938,940,cljs.core.List.EMPTY,"Navigate to the specified indices one after another.If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache45017 = info45018;

return info45018;
})():info__44053__auto__);
var precompiled45019 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__44053__auto____$1);
var dynamic_QMARK___44054__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__44053__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___44054__auto__)){
return precompiled45019.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null));
} else {
return precompiled45019;
}
})(),newe,s));
});})(i,indices,next_fn,this__43282__auto____$1))
,structure,structure);
});

com.rpl.specter.t_com$rpl$specter45008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45009","meta45009",773712018,null)], null);
});

com.rpl.specter.t_com$rpl$specter45008.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45008.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45008";

com.rpl.specter.t_com$rpl$specter45008.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45008");
});

com.rpl.specter.__GT_t_com$rpl$specter45008 = (function com$rpl$specter$__GT_t_com$rpl$specter45008(meta45009){
return (new com.rpl.specter.t_com$rpl$specter45008(meta45009));
});

}

return (new com.rpl.specter.t_com$rpl$specter45008(null));
})()
;
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter45024 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45024 = (function (afn,meta45025){
this.afn = afn;
this.meta45025 = meta45025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45026,meta45025__$1){
var self__ = this;
var _45026__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45024(self__.afn,meta45025__$1));
});

com.rpl.specter.t_com$rpl$specter45024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45026){
var self__ = this;
var _45026__$1 = this;
return self__.meta45025;
});

com.rpl.specter.t_com$rpl$specter45024.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45024.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter45024.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter45024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta45025","meta45025",-876169461,null)], null);
});

com.rpl.specter.t_com$rpl$specter45024.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45024.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45024";

com.rpl.specter.t_com$rpl$specter45024.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45024");
});

com.rpl.specter.__GT_t_com$rpl$specter45024 = (function com$rpl$specter$__GT_t_com$rpl$specter45024(afn__$1,meta45025){
return (new com.rpl.specter.t_com$rpl$specter45024(afn__$1,meta45025));
});

}

return (new com.rpl.specter.t_com$rpl$specter45024(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
return next_fn.call(null,parse_fn.call(null,structure));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
return unparse_fn.call(null,next_fn.call(null,parse_fn.call(null,structure)));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj.call(null,(function (parse_fn,unparse_fn){
if(typeof com.rpl.specter.t_com$rpl$specter45027 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45027 = (function (parse_fn,unparse_fn,meta45028){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta45028 = meta45028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45029,meta45028__$1){
var self__ = this;
var _45029__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45027(self__.parse_fn,self__.unparse_fn,meta45028__$1));
});

com.rpl.specter.t_com$rpl$specter45027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45029){
var self__ = this;
var _45029__$1 = this;
return self__.meta45028;
});

com.rpl.specter.t_com$rpl$specter45027.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45027.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return next_fn.call(null,self__.parse_fn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter45027.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return self__.unparse_fn.call(null,next_fn.call(null,self__.parse_fn.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter45027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta45028","meta45028",-694107258,null)], null);
});

com.rpl.specter.t_com$rpl$specter45027.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45027.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45027";

com.rpl.specter.t_com$rpl$specter45027.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45027");
});

com.rpl.specter.__GT_t_com$rpl$specter45027 = (function com$rpl$specter$__GT_t_com$rpl$specter45027(parse_fn__$1,unparse_fn__$1,meta45028){
return (new com.rpl.specter.t_com$rpl$specter45027(parse_fn__$1,unparse_fn__$1,meta45028));
});

}

return (new com.rpl.specter.t_com$rpl$specter45027(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.deref.call(null,structure));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter45030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45030 = (function (meta45031){
this.meta45031 = meta45031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45032,meta45031__$1){
var self__ = this;
var _45032__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45030(meta45031__$1));
});

com.rpl.specter.t_com$rpl$specter45030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45032){
var self__ = this;
var _45032__$1 = this;
return self__.meta45031;
});

com.rpl.specter.t_com$rpl$specter45030.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45030.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return next_fn.call(null,cljs.core.deref.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter45030.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
});

com.rpl.specter.t_com$rpl$specter45030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45031","meta45031",-84554606,null)], null);
});

com.rpl.specter.t_com$rpl$specter45030.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45030.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45030";

com.rpl.specter.t_com$rpl$specter45030.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45030");
});

com.rpl.specter.__GT_t_com$rpl$specter45030 = (function com$rpl$specter$__GT_t_com$rpl$specter45030(meta45031){
return (new com.rpl.specter.t_com$rpl$specter45030(meta45031));
});

}

return (new com.rpl.specter.t_com$rpl$specter45030(null));
})()
;
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__45038__delegate = function (path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
return afn;
} else {
var builder__44046__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__4655__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter45035 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45035 = (function (path,temp__4655__auto__,late,meta45036){
this.path = path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late = late;
this.meta45036 = meta45036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_45037,meta45036__$1){
var self__ = this;
var _45037__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45035(self__.path,self__.temp__4655__auto__,self__.late,meta45036__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45035.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_45037){
var self__ = this;
var _45037__$1 = this;
return self__.meta45036;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45035.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45035.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,((function (this$__$1,temp__4655__auto__){
return (function (p1__45033_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,vals,p1__45033_SHARP_);
});})(this$__$1,temp__4655__auto__))
,vals,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45035.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,((function (this$__$1,temp__4655__auto__){
return (function (p1__45034_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,vals,p1__45034_SHARP_);
});})(this$__$1,temp__4655__auto__))
,vals,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45035.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta45036","meta45036",1743571101,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45035.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45035.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45035";

com.rpl.specter.t_com$rpl$specter45035.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45035");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter45035 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter45035(path__$1,temp__4655__auto____$1,late__$1,meta45036){
return (new com.rpl.specter.t_com$rpl$specter45035(path__$1,temp__4655__auto____$1,late__$1,meta45036));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter45035(path,temp__4655__auto__,late,null));
});})(temp__4655__auto__))
);
var curr_params__44047__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__44047__auto__)){
return cljs.core.apply.call(null,builder__44046__auto__,curr_params__44047__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__44046__auto__,curr_params__44047__auto__,null);
}
}
};
var G__45038 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__45039__i = 0, G__45039__a = new Array(arguments.length -  0);
while (G__45039__i < G__45039__a.length) {G__45039__a[G__45039__i] = arguments[G__45039__i + 0]; ++G__45039__i;}
  path = new cljs.core.IndexedSeq(G__45039__a,0,null);
} 
return G__45038__delegate.call(this,path);};
G__45038.cljs$lang$maxFixedArity = 0;
G__45038.cljs$lang$applyTo = (function (arglist__45040){
var path = cljs.core.seq(arglist__45040);
return G__45038__delegate(path);
});
G__45038.cljs$core$IFn$_invoke$arity$variadic = G__45038__delegate;
return G__45038;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__45046__delegate = function (path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
return ((function (afn,temp__4655__auto__){
return (function (s){
return cljs.core.not.call(null,afn.call(null,s));
});
;})(afn,temp__4655__auto__))
} else {
var builder__44046__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__4655__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter45043 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45043 = (function (path,temp__4655__auto__,late,meta45044){
this.path = path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late = late;
this.meta45044 = meta45044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_45045,meta45044__$1){
var self__ = this;
var _45045__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45043(self__.path,self__.temp__4655__auto__,self__.late,meta45044__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_45045){
var self__ = this;
var _45045__$1 = this;
return self__.meta45044;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45043.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45043.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,((function (this$__$1,temp__4655__auto__){
return (function (p1__45041_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,vals,p1__45041_SHARP_);
});})(this$__$1,temp__4655__auto__))
,vals,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45043.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,((function (this$__$1,temp__4655__auto__){
return (function (p1__45042_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,vals,p1__45042_SHARP_);
});})(this$__$1,temp__4655__auto__))
,vals,structure,next_fn);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45043.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta45044","meta45044",1629395402,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45043.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45043.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45043";

com.rpl.specter.t_com$rpl$specter45043.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45043");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter45043 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter45043(path__$1,temp__4655__auto____$1,late__$1,meta45044){
return (new com.rpl.specter.t_com$rpl$specter45043(path__$1,temp__4655__auto____$1,late__$1,meta45044));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter45043(path,temp__4655__auto__,late,null));
});})(temp__4655__auto__))
);
var curr_params__44047__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__44047__auto__)){
return cljs.core.apply.call(null,builder__44046__auto__,curr_params__44047__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__44046__auto__,curr_params__44047__auto__,null);
}
}
};
var G__45046 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__45047__i = 0, G__45047__a = new Array(arguments.length -  0);
while (G__45047__i < G__45047__a.length) {G__45047__a[G__45047__i] = arguments[G__45047__i + 0]; ++G__45047__i;}
  path = new cljs.core.IndexedSeq(G__45047__a,0,null);
} 
return G__45046__delegate.call(this,path);};
G__45046.cljs$lang$maxFixedArity = 0;
G__45046.cljs$lang$applyTo = (function (arglist__45048){
var path = cljs.core.seq(arglist__45048);
return G__45046__delegate(path);
});
G__45046.cljs$core$IFn$_invoke$arity$variadic = G__45046__delegate;
return G__45046;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 *   For transformation: `NONE` entries in the result sequence cause corresponding entries in
 *   input to be removed. A result sequence smaller than the input sequence is equivalent to
 *   padding the result sequence with `NONE` at the end until the same size as the input.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__45049__delegate = function (path){
return com.rpl.specter.subselect.call(null,com.rpl.specter.ALL,com.rpl.specter.selected_QMARK_.call(null,path));
};
var G__45049 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__45050__i = 0, G__45050__a = new Array(arguments.length -  0);
while (G__45050__i < G__45050__a.length) {G__45050__a[G__45050__i] = arguments[G__45050__i + 0]; ++G__45050__i;}
  path = new cljs.core.IndexedSeq(G__45050__a,0,null);
} 
return G__45049__delegate.call(this,path);};
G__45049.cljs$lang$maxFixedArity = 0;
G__45049.cljs$lang$applyTo = (function (arglist__45051){
var path = cljs.core.seq(arglist__45051);
return G__45049__delegate(path);
});
G__45049.cljs$core$IFn$_invoke$arity$variadic = G__45049__delegate;
return G__45049;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (path,update_fn){
var builder__44046__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter45052 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45052 = (function (path,update_fn,late,late_fn,meta45053){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta45053 = meta45053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45054,meta45053__$1){
var self__ = this;
var _45054__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45052(self__.path,self__.update_fn,self__.late,self__.late_fn,meta45053__$1));
});

com.rpl.specter.t_com$rpl$specter45052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45054){
var self__ = this;
var _45054__$1 = this;
return self__.meta45053;
});

com.rpl.specter.t_com$rpl$specter45052.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45052.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
});

com.rpl.specter.t_com$rpl$specter45052.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
});

com.rpl.specter.t_com$rpl$specter45052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta45053","meta45053",-930169149,null)], null);
});

com.rpl.specter.t_com$rpl$specter45052.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45052.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45052";

com.rpl.specter.t_com$rpl$specter45052.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45052");
});

com.rpl.specter.__GT_t_com$rpl$specter45052 = (function com$rpl$specter$__GT_t_com$rpl$specter45052(path__$1,update_fn__$1,late__$1,late_fn__$1,meta45053){
return (new com.rpl.specter.t_com$rpl$specter45052(path__$1,update_fn__$1,late__$1,late_fn__$1,meta45053));
});

}

return (new com.rpl.specter.t_com$rpl$specter45052(path,update_fn,late,late_fn,null));
}));
var curr_params__44047__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),update_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__44047__auto__)){
return cljs.core.apply.call(null,builder__44046__auto__,curr_params__44047__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__44046__auto__,curr_params__44047__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (path,reduce_fn){
var builder__44046__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter45055 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45055 = (function (path,reduce_fn,late,late_fn,meta45056){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta45056 = meta45056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45057,meta45056__$1){
var self__ = this;
var _45057__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45055(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta45056__$1));
});

com.rpl.specter.t_com$rpl$specter45055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45057){
var self__ = this;
var _45057__$1 = this;
return self__.meta45056;
});

com.rpl.specter.t_com$rpl$specter45055.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45055.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter45055.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter45055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta45056","meta45056",-677074257,null)], null);
});

com.rpl.specter.t_com$rpl$specter45055.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45055.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45055";

com.rpl.specter.t_com$rpl$specter45055.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45055");
});

com.rpl.specter.__GT_t_com$rpl$specter45055 = (function com$rpl$specter$__GT_t_com$rpl$specter45055(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta45056){
return (new com.rpl.specter.t_com$rpl$specter45055(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta45056));
});

}

return (new com.rpl.specter.t_com$rpl$specter45055(path,reduce_fn,late,late_fn,null));
}));
var curr_params__44047__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),reduce_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__44047__auto__)){
return cljs.core.apply.call(null,builder__44046__auto__,curr_params__44047__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__44046__auto__,curr_params__44047__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
return com.rpl.specter.pred.call(null,(function (p1__45058_SHARP_){
return cljs.core._EQ_.call(null,p1__45058_SHARP_,v);
}));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
return com.rpl.specter.pred.call(null,(function (p1__45059_SHARP_){
return (p1__45059_SHARP_ < v);
}));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
return com.rpl.specter.pred.call(null,(function (p1__45060_SHARP_){
return (p1__45060_SHARP_ > v);
}));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
return com.rpl.specter.pred.call(null,(function (p1__45061_SHARP_){
return (p1__45061_SHARP_ <= v);
}));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
return com.rpl.specter.pred.call(null,(function (p1__45062_SHARP_){
return (p1__45062_SHARP_ >= v);
}));
});
(com.rpl.specter.protocols.ImplicitNav["null"] = true);

(com.rpl.specter.protocols.implicit_nav["null"] = (function (this$){
return com.rpl.specter.STAY;
}));
cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1);
});
(com.rpl.specter.protocols.ImplicitNav["function"] = true);

(com.rpl.specter.protocols.implicit_nav["function"] = (function (this$){
return com.rpl.specter.pred.call(null,this$);
}));
cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.pred.call(null,this$__$1);
});


com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
return next_fn.call(null,(((structure == null))?v:structure));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
return next_fn.call(null,(((structure == null))?v:structure));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj.call(null,(function (v){
if(typeof com.rpl.specter.t_com$rpl$specter45063 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45063 = (function (v,meta45064){
this.v = v;
this.meta45064 = meta45064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45065,meta45064__$1){
var self__ = this;
var _45065__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45063(self__.v,meta45064__$1));
});

com.rpl.specter.t_com$rpl$specter45063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45065){
var self__ = this;
var _45065__$1 = this;
return self__.meta45064;
});

com.rpl.specter.t_com$rpl$specter45063.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45063.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return next_fn.call(null,(((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter45063.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return next_fn.call(null,(((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter45063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta45064","meta45064",1265745444,null)], null);
});

com.rpl.specter.t_com$rpl$specter45063.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45063.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45063";

com.rpl.specter.t_com$rpl$specter45063.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45063");
});

com.rpl.specter.__GT_t_com$rpl$specter45063 = (function com$rpl$specter$__GT_t_com$rpl$specter45063(v__$1,meta45064){
return (new com.rpl.specter.t_com$rpl$specter45063(v__$1,meta45064));
});

}

return (new com.rpl.specter.t_com$rpl$specter45063(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.meta.call(null,structure));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter45066 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45066 = (function (meta45067){
this.meta45067 = meta45067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45068,meta45067__$1){
var self__ = this;
var _45068__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45066(meta45067__$1));
});

com.rpl.specter.t_com$rpl$specter45066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45068){
var self__ = this;
var _45068__$1 = this;
return self__.meta45067;
});

com.rpl.specter.t_com$rpl$specter45066.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45066.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return next_fn.call(null,cljs.core.meta.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter45066.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter45066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45067","meta45067",1960579347,null)], null);
});

com.rpl.specter.t_com$rpl$specter45066.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45066.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45066";

com.rpl.specter.t_com$rpl$specter45066.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45066");
});

com.rpl.specter.__GT_t_com$rpl$specter45066 = (function com$rpl$specter$__GT_t_com$rpl$specter45066(meta45067){
return (new com.rpl.specter.t_com$rpl$specter45066(meta45067));
});

}

return (new com.rpl.specter.t_com$rpl$specter45066(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.name.call(null,structure));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = next_fn.call(null,cljs.core.name.call(null,structure));
var ns = cljs.core.namespace.call(null,structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ns,new_name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"NAME can only be used on symbols or keywords - ",structure)));

}
}
});

/**
 * Navigates to the name portion of the keyword or symbol
 */
com.rpl.specter.NAME = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter45069 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45069 = (function (meta45070){
this.meta45070 = meta45070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45071,meta45070__$1){
var self__ = this;
var _45071__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45069(meta45070__$1));
});

com.rpl.specter.t_com$rpl$specter45069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45071){
var self__ = this;
var _45071__$1 = this;
return self__.meta45070;
});

com.rpl.specter.t_com$rpl$specter45069.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45069.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return next_fn.call(null,cljs.core.name.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter45069.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
var new_name = next_fn.call(null,cljs.core.name.call(null,structure));
var ns = cljs.core.namespace.call(null,structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ns,new_name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"NAME can only be used on symbols or keywords - ",structure)));

}
}
});

com.rpl.specter.t_com$rpl$specter45069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45070","meta45070",670635321,null)], null);
});

com.rpl.specter.t_com$rpl$specter45069.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45069.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45069";

com.rpl.specter.t_com$rpl$specter45069.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45069");
});

com.rpl.specter.__GT_t_com$rpl$specter45069 = (function com$rpl$specter$__GT_t_com$rpl$specter45069(meta45070){
return (new com.rpl.specter.t_com$rpl$specter45069(meta45070));
});

}

return (new com.rpl.specter.t_com$rpl$specter45069(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.namespace.call(null,structure));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name.call(null,structure);
var new_ns = next_fn.call(null,cljs.core.namespace.call(null,structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,new_ns,name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"NAMESPACE can only be used on symbols or keywords - ",structure)));

}
}
});

/**
 * Navigates to the namespace portion of the keyword or symbol
 */
com.rpl.specter.NAMESPACE = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter45072 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45072 = (function (meta45073){
this.meta45073 = meta45073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45074,meta45073__$1){
var self__ = this;
var _45074__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45072(meta45073__$1));
});

com.rpl.specter.t_com$rpl$specter45072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45074){
var self__ = this;
var _45074__$1 = this;
return self__.meta45073;
});

com.rpl.specter.t_com$rpl$specter45072.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45072.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
return next_fn.call(null,cljs.core.namespace.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter45072.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
var name = cljs.core.name.call(null,structure);
var new_ns = next_fn.call(null,cljs.core.namespace.call(null,structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,new_ns,name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"NAMESPACE can only be used on symbols or keywords - ",structure)));

}
}
});

com.rpl.specter.t_com$rpl$specter45072.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45073","meta45073",1702867686,null)], null);
});

com.rpl.specter.t_com$rpl$specter45072.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45072.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45072";

com.rpl.specter.t_com$rpl$specter45072.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45072");
});

com.rpl.specter.__GT_t_com$rpl$specter45072 = (function com$rpl$specter$__GT_t_com$rpl$specter45072(meta45073){
return (new com.rpl.specter.t_com$rpl$specter45072(meta45073));
});

}

return (new com.rpl.specter.t_com$rpl$specter45072(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__45078__delegate = function (path){
var builder__44046__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter45075 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45075 = (function (path,late,meta45076){
this.path = path;
this.late = late;
this.meta45076 = meta45076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45077,meta45076__$1){
var self__ = this;
var _45077__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45075(self__.path,self__.late,meta45076__$1));
});

com.rpl.specter.t_com$rpl$specter45075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45077){
var self__ = this;
var _45077__$1 = this;
return self__.meta45076;
});

com.rpl.specter.t_com$rpl$specter45075.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45075.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__44043__auto__,vals__44044__auto__,structure,next_fn__44045__auto__){
var self__ = this;
var this__44043__auto____$1 = this;
return next_fn__44045__auto__.call(null,cljs.core.conj.call(null,vals__44044__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter45075.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__44043__auto__,vals__44044__auto__,structure,next_fn__44045__auto__){
var self__ = this;
var this__44043__auto____$1 = this;
return next_fn__44045__auto__.call(null,cljs.core.conj.call(null,vals__44044__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter45075.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta45076","meta45076",1015051144,null)], null);
});

com.rpl.specter.t_com$rpl$specter45075.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45075.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45075";

com.rpl.specter.t_com$rpl$specter45075.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45075");
});

com.rpl.specter.__GT_t_com$rpl$specter45075 = (function com$rpl$specter$__GT_t_com$rpl$specter45075(path__$1,late__$1,meta45076){
return (new com.rpl.specter.t_com$rpl$specter45075(path__$1,late__$1,meta45076));
});

}

return (new com.rpl.specter.t_com$rpl$specter45075(path,late,null));
}));
var curr_params__44047__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__44047__auto__)){
return cljs.core.apply.call(null,builder__44046__auto__,curr_params__44047__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__44046__auto__,curr_params__44047__auto__,null);
}
};
var G__45078 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__45079__i = 0, G__45079__a = new Array(arguments.length -  0);
while (G__45079__i < G__45079__a.length) {G__45079__a[G__45079__i] = arguments[G__45079__i + 0]; ++G__45079__i;}
  path = new cljs.core.IndexedSeq(G__45079__a,0,null);
} 
return G__45078__delegate.call(this,path);};
G__45078.cljs$lang$maxFixedArity = 0;
G__45078.cljs$lang$applyTo = (function (arglist__45080){
var path = cljs.core.seq(arglist__45080);
return G__45078__delegate(path);
});
G__45078.cljs$core$IFn$_invoke$arity$variadic = G__45078__delegate;
return G__45078;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__45084__delegate = function (path){
var builder__44046__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter45081 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45081 = (function (path,late,meta45082){
this.path = path;
this.late = late;
this.meta45082 = meta45082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45083,meta45082__$1){
var self__ = this;
var _45083__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45081(self__.path,self__.late,meta45082__$1));
});

com.rpl.specter.t_com$rpl$specter45081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45083){
var self__ = this;
var _45083__$1 = this;
return self__.meta45082;
});

com.rpl.specter.t_com$rpl$specter45081.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45081.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__44043__auto__,vals__44044__auto__,structure,next_fn__44045__auto__){
var self__ = this;
var this__44043__auto____$1 = this;
return next_fn__44045__auto__.call(null,cljs.core.conj.call(null,vals__44044__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter45081.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__44043__auto__,vals__44044__auto__,structure,next_fn__44045__auto__){
var self__ = this;
var this__44043__auto____$1 = this;
return next_fn__44045__auto__.call(null,cljs.core.conj.call(null,vals__44044__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter45081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta45082","meta45082",-51169814,null)], null);
});

com.rpl.specter.t_com$rpl$specter45081.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45081.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45081";

com.rpl.specter.t_com$rpl$specter45081.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45081");
});

com.rpl.specter.__GT_t_com$rpl$specter45081 = (function com$rpl$specter$__GT_t_com$rpl$specter45081(path__$1,late__$1,meta45082){
return (new com.rpl.specter.t_com$rpl$specter45081(path__$1,late__$1,meta45082));
});

}

return (new com.rpl.specter.t_com$rpl$specter45081(path,late,null));
}));
var curr_params__44047__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__44047__auto__)){
return cljs.core.apply.call(null,builder__44046__auto__,curr_params__44047__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__44046__auto__,curr_params__44047__auto__,null);
}
};
var G__45084 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__45085__i = 0, G__45085__a = new Array(arguments.length -  0);
while (G__45085__i < G__45085__a.length) {G__45085__a[G__45085__i] = arguments[G__45085__i + 0]; ++G__45085__i;}
  path = new cljs.core.IndexedSeq(G__45085__a,0,null);
} 
return G__45084__delegate.call(this,path);};
G__45084.cljs$lang$maxFixedArity = 0;
G__45084.cljs$lang$applyTo = (function (arglist__45086){
var path = cljs.core.seq(arglist__45086);
return G__45084__delegate(path);
});
G__45084.cljs$core$IFn$_invoke$arity$variadic = G__45084__delegate;
return G__45084;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj.call(null,(function (val){
if(typeof com.rpl.specter.t_com$rpl$specter45087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45087 = (function (val,meta45088){
this.val = val;
this.meta45088 = meta45088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45089,meta45088__$1){
var self__ = this;
var _45089__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45087(self__.val,meta45088__$1));
});

com.rpl.specter.t_com$rpl$specter45087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45089){
var self__ = this;
var _45089__$1 = this;
return self__.meta45088;
});

com.rpl.specter.t_com$rpl$specter45087.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45087.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__44043__auto__,vals__44044__auto__,structure,next_fn__44045__auto__){
var self__ = this;
var this__44043__auto____$1 = this;
return next_fn__44045__auto__.call(null,cljs.core.conj.call(null,vals__44044__auto__,self__.val),structure);
});

com.rpl.specter.t_com$rpl$specter45087.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__44043__auto__,vals__44044__auto__,structure,next_fn__44045__auto__){
var self__ = this;
var this__44043__auto____$1 = this;
return next_fn__44045__auto__.call(null,cljs.core.conj.call(null,vals__44044__auto__,self__.val),structure);
});

com.rpl.specter.t_com$rpl$specter45087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta45088","meta45088",-1372526939,null)], null);
});

com.rpl.specter.t_com$rpl$specter45087.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45087.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45087";

com.rpl.specter.t_com$rpl$specter45087.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45087");
});

com.rpl.specter.__GT_t_com$rpl$specter45087 = (function com$rpl$specter$__GT_t_com$rpl$specter45087(val__$1,meta45088){
return (new com.rpl.specter.t_com$rpl$specter45087(val__$1,meta45088));
});

}

return (new com.rpl.specter.t_com$rpl$specter45087(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__45095__delegate = function (path){
var builder__44046__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter45090 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45090 = (function (path,late,meta45091){
this.path = path;
this.late = late;
this.meta45091 = meta45091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45092,meta45091__$1){
var self__ = this;
var _45092__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45090(self__.path,self__.late,meta45091__$1));
});

com.rpl.specter.t_com$rpl$specter45090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45092){
var self__ = this;
var _45092__$1 = this;
return self__.meta45091;
});

com.rpl.specter.t_com$rpl$specter45090.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45090.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_.call(null,self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return next_fn.call(null,vals,structure__$1);
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter45090.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return next_fn.call(null,vals,structure__$1);
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter45090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta45091","meta45091",-1077731783,null)], null);
});

com.rpl.specter.t_com$rpl$specter45090.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45090.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45090";

com.rpl.specter.t_com$rpl$specter45090.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45090");
});

com.rpl.specter.__GT_t_com$rpl$specter45090 = (function com$rpl$specter$__GT_t_com$rpl$specter45090(path__$1,late__$1,meta45091){
return (new com.rpl.specter.t_com$rpl$specter45090(path__$1,late__$1,meta45091));
});

}

return (new com.rpl.specter.t_com$rpl$specter45090(path,late,null));
}));
var curr_params__44047__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__44047__auto__)){
return cljs.core.apply.call(null,builder__44046__auto__,curr_params__44047__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__44046__auto__,curr_params__44047__auto__,null);
}
};
var G__45095 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__45096__i = 0, G__45096__a = new Array(arguments.length -  0);
while (G__45096__i < G__45096__a.length) {G__45096__a[G__45096__i] = arguments[G__45096__i + 0]; ++G__45096__i;}
  path = new cljs.core.IndexedSeq(G__45096__a,0,null);
} 
return G__45095__delegate.call(this,path);};
G__45095.cljs$lang$maxFixedArity = 0;
G__45095.cljs$lang$applyTo = (function (arglist__45097){
var path = cljs.core.seq(arglist__45097);
return G__45095__delegate(path);
});
G__45095.cljs$core$IFn$_invoke$arity$variadic = G__45095__delegate;
return G__45095;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter45098 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45098 = (function (meta45099){
this.meta45099 = meta45099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45100,meta45099__$1){
var self__ = this;
var _45100__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45098(meta45099__$1));
});

com.rpl.specter.t_com$rpl$specter45098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45100){
var self__ = this;
var _45100__$1 = this;
return self__.meta45099;
});

com.rpl.specter.t_com$rpl$specter45098.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45098.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.t_com$rpl$specter45098.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.t_com$rpl$specter45098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45099","meta45099",-1082577626,null)], null);
});

com.rpl.specter.t_com$rpl$specter45098.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45098.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45098";

com.rpl.specter.t_com$rpl$specter45098.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45098");
});

com.rpl.specter.__GT_t_com$rpl$specter45098 = (function com$rpl$specter$__GT_t_com$rpl$specter45098(meta45099){
return (new com.rpl.specter.t_com$rpl$specter45098(meta45099));
});

}

return (new com.rpl.specter.t_com$rpl$specter45098(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() {
var G__45109 = null;
var G__45109__2 = (function (cond_p,then_path){
return com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP);
});
var G__45109__3 = (function (cond_p,then_path,else_path){
var temp__4655__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,cond_p);
if(cljs.core.truth_(temp__4655__auto__)){
var afn = temp__4655__auto__;
var builder__44046__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (afn,temp__4655__auto__){
return (function (late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter45103 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45103 = (function (cond_p,then_path,else_path,temp__4655__auto__,afn,late_then,late_else,meta45104){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__4655__auto__ = temp__4655__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta45104 = meta45104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (afn,temp__4655__auto__){
return (function (_45105,meta45104__$1){
var self__ = this;
var _45105__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45103(self__.cond_p,self__.then_path,self__.else_path,self__.temp__4655__auto__,self__.afn,self__.late_then,self__.late_else,meta45104__$1));
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45103.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (afn,temp__4655__auto__){
return (function (_45105){
var self__ = this;
var _45105__$1 = this;
return self__.meta45104;
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45103.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45103.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (afn,temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45103.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (afn,temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45103.getBasis = ((function (afn,temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta45104","meta45104",949804820,null)], null);
});})(afn,temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45103.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45103.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45103";

com.rpl.specter.t_com$rpl$specter45103.cljs$lang$ctorPrWriter = ((function (afn,temp__4655__auto__){
return (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45103");
});})(afn,temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter45103 = ((function (afn,temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter45103(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,afn__$1,late_then__$1,late_else__$1,meta45104){
return (new com.rpl.specter.t_com$rpl$specter45103(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,afn__$1,late_then__$1,late_else__$1,meta45104));
});})(afn,temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter45103(cond_p,then_path,else_path,temp__4655__auto__,afn,late_then,late_else,null));
});})(afn,temp__4655__auto__))
);
var curr_params__44047__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__44047__auto__)){
return cljs.core.apply.call(null,builder__44046__auto__,curr_params__44047__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__44046__auto__,curr_params__44047__auto__,null);
}
} else {
var builder__44046__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__4655__auto__){
return (function (late_cond,late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter45106 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45106 = (function (cond_p,then_path,else_path,temp__4655__auto__,late_cond,late_then,late_else,meta45107){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__4655__auto__ = temp__4655__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta45107 = meta45107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__4655__auto__){
return (function (_45108,meta45107__$1){
var self__ = this;
var _45108__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45106(self__.cond_p,self__.then_path,self__.else_path,self__.temp__4655__auto__,self__.late_cond,self__.late_then,self__.late_else,meta45107__$1));
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45106.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__4655__auto__){
return (function (_45108){
var self__ = this;
var _45108__$1 = this;
return self__.meta45107;
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45106.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45106.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,((function (this$__$1,temp__4655__auto__){
return (function (p1__45101_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,vals,p1__45101_SHARP_);
});})(this$__$1,temp__4655__auto__))
,self__.late_then,self__.late_else);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45106.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__4655__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,((function (this$__$1,temp__4655__auto__){
return (function (p1__45102_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,vals,p1__45102_SHARP_);
});})(this$__$1,temp__4655__auto__))
,self__.late_then,self__.late_else);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45106.getBasis = ((function (temp__4655__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__4655__auto__","temp__4655__auto__",-1826162292,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta45107","meta45107",-1180106065,null)], null);
});})(temp__4655__auto__))
;

com.rpl.specter.t_com$rpl$specter45106.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45106.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45106";

com.rpl.specter.t_com$rpl$specter45106.cljs$lang$ctorPrWriter = ((function (temp__4655__auto__){
return (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45106");
});})(temp__4655__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter45106 = ((function (temp__4655__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter45106(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta45107){
return (new com.rpl.specter.t_com$rpl$specter45106(cond_p__$1,then_path__$1,else_path__$1,temp__4655__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta45107));
});})(temp__4655__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter45106(cond_p,then_path,else_path,temp__4655__auto__,late_cond,late_then,late_else,null));
});})(temp__4655__auto__))
);
var curr_params__44047__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,cond_p),com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__44047__auto__)){
return cljs.core.apply.call(null,builder__44046__auto__,curr_params__44047__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__44046__auto__,curr_params__44047__auto__,null);
}
}
});
G__45109 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__45109__2.call(this,cond_p,then_path);
case 3:
return G__45109__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__45109.cljs$core$IFn$_invoke$arity$2 = G__45109__2;
G__45109.cljs$core$IFn$_invoke$arity$3 = G__45109__3;
return G__45109;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__45114__delegate = function (conds){
var pairs = cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),conds));
return cljs.core.reduce.call(null,((function (pairs){
return (function (p,p__45110){
var vec__45111 = p__45110;
var tester = cljs.core.nth.call(null,vec__45111,(0),null);
var apath = cljs.core.nth.call(null,vec__45111,(1),null);
return com.rpl.specter.if_path.call(null,tester,apath,p);
});})(pairs))
,com.rpl.specter.STOP,pairs);
};
var G__45114 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__45115__i = 0, G__45115__a = new Array(arguments.length -  0);
while (G__45115__i < G__45115__a.length) {G__45115__a[G__45115__i] = arguments[G__45115__i + 0]; ++G__45115__i;}
  conds = new cljs.core.IndexedSeq(G__45115__a,0,null);
} 
return G__45114__delegate.call(this,conds);};
G__45114.cljs$lang$maxFixedArity = 0;
G__45114.cljs$lang$applyTo = (function (arglist__45116){
var conds = cljs.core.seq(arglist__45116);
return G__45114__delegate(conds);
});
G__45114.cljs$core$IFn$_invoke$arity$variadic = G__45114__delegate;
return G__45114;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() {
var G__45124 = null;
var G__45124__0 = (function (){
return com.rpl.specter.STAY;
});
var G__45124__1 = (function (path){
return path;
});
var G__45124__2 = (function (path1,path2){
var builder__44046__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late1,late2){
if(typeof com.rpl.specter.t_com$rpl$specter45117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter45117 = (function (path1,path2,late1,late2,meta45118){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta45118 = meta45118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.t_com$rpl$specter45117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45119,meta45118__$1){
var self__ = this;
var _45119__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter45117(self__.path1,self__.path2,self__.late1,self__.late2,meta45118__$1));
});

com.rpl.specter.t_com$rpl$specter45117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45119){
var self__ = this;
var _45119__$1 = this;
return self__.meta45118;
});

com.rpl.specter.t_com$rpl$specter45117.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter45117.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_.call(null,self__.late1,vals,structure,next_fn);
if(cljs.core.reduced_QMARK_.call(null,res1)){
return res1;
} else {
var res2 = com.rpl.specter.protocols.select_STAR_.call(null,self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res1)){
return res2;
} else {
return res1;
}
}
});

com.rpl.specter.t_com$rpl$specter45117.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_.call(null,self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late2,vals,s1,next_fn);
});

com.rpl.specter.t_com$rpl$specter45117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta45118","meta45118",-705300651,null)], null);
});

com.rpl.specter.t_com$rpl$specter45117.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter45117.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter45117";

com.rpl.specter.t_com$rpl$specter45117.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter/t_com$rpl$specter45117");
});

com.rpl.specter.__GT_t_com$rpl$specter45117 = (function com$rpl$specter$__GT_t_com$rpl$specter45117(path1__$1,path2__$1,late1__$1,late2__$1,meta45118){
return (new com.rpl.specter.t_com$rpl$specter45117(path1__$1,path2__$1,late1__$1,late2__$1,meta45118));
});

}

return (new com.rpl.specter.t_com$rpl$specter45117(path1,path2,late1,late2,null));
}));
var curr_params__44047__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path1),com.rpl.specter.late_path.call(null,path2)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__44047__auto__)){
return cljs.core.apply.call(null,builder__44046__auto__,curr_params__44047__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__44046__auto__,curr_params__44047__auto__,null);
}
});
var G__45124__3 = (function() { 
var G__45125__delegate = function (path1,path2,paths){
return cljs.core.reduce.call(null,com.rpl.specter.multi_path,com.rpl.specter.multi_path.call(null,path1,path2),paths);
};
var G__45125 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__45126__i = 0, G__45126__a = new Array(arguments.length -  2);
while (G__45126__i < G__45126__a.length) {G__45126__a[G__45126__i] = arguments[G__45126__i + 2]; ++G__45126__i;}
  paths = new cljs.core.IndexedSeq(G__45126__a,0,null);
} 
return G__45125__delegate.call(this,path1,path2,paths);};
G__45125.cljs$lang$maxFixedArity = 2;
G__45125.cljs$lang$applyTo = (function (arglist__45127){
var path1 = cljs.core.first(arglist__45127);
arglist__45127 = cljs.core.next(arglist__45127);
var path2 = cljs.core.first(arglist__45127);
var paths = cljs.core.rest(arglist__45127);
return G__45125__delegate(path1,path2,paths);
});
G__45125.cljs$core$IFn$_invoke$arity$variadic = G__45125__delegate;
return G__45125;
})()
;
G__45124 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__45124__0.call(this);
case 1:
return G__45124__1.call(this,path1);
case 2:
return G__45124__2.call(this,path1,path2);
default:
var G__45128 = null;
if (arguments.length > 2) {
var G__45129__i = 0, G__45129__a = new Array(arguments.length -  2);
while (G__45129__i < G__45129__a.length) {G__45129__a[G__45129__i] = arguments[G__45129__i + 2]; ++G__45129__i;}
G__45128 = new cljs.core.IndexedSeq(G__45129__a,0,null);
}
return G__45124__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__45128);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__45124.cljs$lang$maxFixedArity = 2;
G__45124.cljs$lang$applyTo = G__45124__3.cljs$lang$applyTo;
G__45124.cljs$core$IFn$_invoke$arity$0 = G__45124__0;
G__45124.cljs$core$IFn$_invoke$arity$1 = G__45124__1;
G__45124.cljs$core$IFn$_invoke$arity$2 = G__45124__2;
G__45124.cljs$core$IFn$_invoke$arity$variadic = G__45124__3.cljs$core$IFn$_invoke$arity$variadic;
return G__45124;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__45130__delegate = function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
};
var G__45130 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__45131__i = 0, G__45131__a = new Array(arguments.length -  0);
while (G__45131__i < G__45131__a.length) {G__45131__a[G__45131__i] = arguments[G__45131__i + 0]; ++G__45131__i;}
  path = new cljs.core.IndexedSeq(G__45131__a,0,null);
} 
return G__45130__delegate.call(this,path);};
G__45130.cljs$lang$maxFixedArity = 0;
G__45130.cljs$lang$applyTo = (function (arglist__45132){
var path = cljs.core.seq(arglist__45132);
return G__45130__delegate(path);
});
G__45130.cljs$core$IFn$_invoke$arity$variadic = G__45130__delegate;
return G__45130;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__45133__delegate = function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
};
var G__45133 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__45134__i = 0, G__45134__a = new Array(arguments.length -  0);
while (G__45134__i < G__45134__a.length) {G__45134__a[G__45134__i] = arguments[G__45134__i + 0]; ++G__45134__i;}
  path = new cljs.core.IndexedSeq(G__45134__a,0,null);
} 
return G__45133__delegate.call(this,path);};
G__45133.cljs$lang$maxFixedArity = 0;
G__45133.cljs$lang$applyTo = (function (arglist__45135){
var path = cljs.core.seq(arglist__45135);
return G__45133__delegate(path);
});
G__45133.cljs$core$IFn$_invoke$arity$variadic = G__45133__delegate;
return G__45133;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__44053__auto__ = com.rpl.specter.pathcache45136;
var info__44053__auto____$1 = (((info__44053__auto__ == null))?(function (){var info45137 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"dist\\js\\compiled\\out\\com\\rpl\\specter.cljc",25,1,1336,1336,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"dist\\js\\compiled\\out\\com\\rpl\\specter.cljc",7,1,true,1141,1145,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"dist\\js\\compiled\\out\\com\\rpl\\specter.cljc",7,1,630,632,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",21,1,2012,2012,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",((cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"dist\\js\\compiled\\out\\com\\rpl\\specter.cljc",6,1,654,657,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache45136 = info45137;

return info45137;
})():info__44053__auto__);
var precompiled45138 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__44053__auto____$1);
var dynamic_QMARK___44054__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__44053__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___44054__auto__)){
return precompiled45138.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null));
} else {
return precompiled45138;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__44053__auto__ = com.rpl.specter.pathcache45139;
var info__44053__auto____$1 = (((info__44053__auto__ == null))?(function (){var info45140 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"dist\\js\\compiled\\out\\com\\rpl\\specter.cljc",25,1,1336,1336,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"dist\\js\\compiled\\out\\com\\rpl\\specter.cljc",7,1,true,1141,1145,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"dist\\js\\compiled\\out\\com\\rpl\\specter.cljc",7,1,630,632,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",21,1,2012,2012,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",((cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"dist\\js\\compiled\\out\\com\\rpl\\specter.cljc",16,1,664,666,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache45139 = info45140;

return info45140;
})():info__44053__auto__);
var precompiled45141 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__44053__auto____$1);
var dynamic_QMARK___44054__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__44053__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___44054__auto__)){
return precompiled45141.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null));
} else {
return precompiled45141;
}
})());

return p;
}));
