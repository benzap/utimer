// Compiled by ClojureScript 1.9.671 {}
goog.provide('com.rpl.specter.navs');
goog.require('cljs.core');
goog.require('com.rpl.specter.impl');
com.rpl.specter.navs.not_selected_QMARK__STAR_ = (function com$rpl$specter$navs$not_selected_QMARK__STAR_(compiled_path,vals,structure){
return (com.rpl.specter.impl.NONE === com.rpl.specter.impl.compiled_select_any_STAR_.call(null,compiled_path,vals,structure));
});
com.rpl.specter.navs.selected_QMARK__STAR_ = (function com$rpl$specter$navs$selected_QMARK__STAR_(compiled_path,vals,structure){
return cljs.core.not.call(null,com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,compiled_path,vals,structure));
});
com.rpl.specter.navs.all_select = (function com$rpl$specter$navs$all_select(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__41496__auto__,e){
var ret__41497__auto__ = next_fn.call(null,e);
if((ret__41497__auto__ === com.rpl.specter.impl.NONE)){
return curr__41496__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__41497__auto__)){
return cljs.core.reduced.call(null,ret__41497__auto__);
} else {
return ret__41497__auto__;
}
}
}),com.rpl.specter.impl.NONE,structure);
});
com.rpl.specter.navs.queue_QMARK_ = (function com$rpl$specter$navs$queue_QMARK_(coll){
return cljs.core._EQ_.call(null,cljs.core.type.call(null,coll),cljs.core.type.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY)));
});

/**
 * @interface
 */
com.rpl.specter.navs.AllTransformProtocol = function(){};

com.rpl.specter.navs.all_transform = (function com$rpl$specter$navs$all_transform(structure,next_fn){
if((!((structure == null))) && (!((structure.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 == null)))){
return structure.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2(structure,next_fn);
} else {
var x__35717__auto__ = (((structure == null))?null:structure);
var m__35718__auto__ = (com.rpl.specter.navs.all_transform[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,structure,next_fn);
} else {
var m__35718__auto____$1 = (com.rpl.specter.navs.all_transform["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"AllTransformProtocol.all-transform",structure);
}
}
}
});

com.rpl.specter.navs.void_transformed_kv_pair_QMARK_ = (function com$rpl$specter$navs$void_transformed_kv_pair_QMARK_(newkv){
return ((newkv === com.rpl.specter.impl.NONE)) || ((cljs.core.count.call(null,newkv) < (2)));
});
com.rpl.specter.navs.non_transient_map_all_transform = (function com$rpl$specter$navs$non_transient_map_all_transform(structure,next_fn,empty_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var newkv = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
if(cljs.core.truth_(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_.call(null,newkv))){
return m;
} else {
return cljs.core.assoc.call(null,m,cljs.core.nth.call(null,newkv,(0)),cljs.core.nth.call(null,newkv,(1)));
}
}),empty_map,structure);
});
com.rpl.specter.navs.not_NONE_QMARK_ = (function com$rpl$specter$navs$not_NONE_QMARK_(v){
return !((v === com.rpl.specter.impl.NONE));
});
com.rpl.specter.navs.all_transform_list = (function com$rpl$specter$navs$all_transform_list(structure,next_fn){
return cljs.core.doall.call(null,cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.map.call(null,next_fn),cljs.core.filter.call(null,com.rpl.specter.navs.not_NONE_QMARK_)),structure));
});
com.rpl.specter.navs.all_transform_record = (function com$rpl$specter$navs$all_transform_record(structure,next_fn){
return cljs.core.reduce.call(null,(function (res,kv){
return cljs.core.conj.call(null,res,next_fn.call(null,kv));
}),structure,structure);
});
(com.rpl.specter.navs.AllTransformProtocol["null"] = true);

(com.rpl.specter.navs.all_transform["null"] = (function (structure,next_fn){
return null;
}));

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,next_fn),cljs.core.filter.call(null,com.rpl.specter.navs.not_NONE_QMARK_)),structure__$1);
});

cljs.core.PersistentHashSet.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,next_fn),cljs.core.filter.call(null,com.rpl.specter.navs.not_NONE_QMARK_)),structure__$1);
});

cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.non_transient_map_all_transform.call(null,structure__$1,next_fn,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.non_transient_map_all_transform.call(null,structure__$1,next_fn,cljs.core.empty.call(null,structure__$1));
});

cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (structure__$1){
return (function (m,k,v){
var newkv = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
if(cljs.core.truth_(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_.call(null,newkv))){
return m;
} else {
return cljs.core.assoc_BANG_.call(null,m,cljs.core.nth.call(null,newkv,(0)),cljs.core.nth.call(null,newkv,(1)));
}
});})(structure__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY),structure__$1));
});

(com.rpl.specter.navs.AllTransformProtocol["_"] = true);

(com.rpl.specter.navs.all_transform["_"] = (function (structure,next_fn){
if(cljs.core.record_QMARK_.call(null,structure)){
return com.rpl.specter.navs.all_transform_record.call(null,structure,next_fn);
} else {
var empty_structure = cljs.core.empty.call(null,structure);
if((cljs.core.list_QMARK_.call(null,empty_structure)) && (cljs.core.not.call(null,com.rpl.specter.navs.queue_QMARK_.call(null,empty_structure)))){
return com.rpl.specter.navs.all_transform_list.call(null,structure,next_fn);
} else {
if(cljs.core.map_QMARK_.call(null,structure)){
return cljs.core.reduce_kv.call(null,((function (empty_structure){
return (function (m,k,v){
var newkv = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
if(cljs.core.truth_(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_.call(null,newkv))){
return m;
} else {
return cljs.core.assoc.call(null,m,cljs.core.nth.call(null,newkv,(0)),cljs.core.nth.call(null,newkv,(1)));
}
});})(empty_structure))
,empty_structure,structure);
} else {
return cljs.core.into.call(null,empty_structure,cljs.core.comp.call(null,cljs.core.map.call(null,next_fn),cljs.core.filter.call(null,com.rpl.specter.navs.not_NONE_QMARK_)),structure);

}
}
}
}));

/**
 * @interface
 */
com.rpl.specter.navs.MapTransformProtocol = function(){};

com.rpl.specter.navs.map_vals_transform = (function com$rpl$specter$navs$map_vals_transform(structure,next_fn){
if((!((structure == null))) && (!((structure.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 == null)))){
return structure.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2(structure,next_fn);
} else {
var x__35717__auto__ = (((structure == null))?null:structure);
var m__35718__auto__ = (com.rpl.specter.navs.map_vals_transform[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,structure,next_fn);
} else {
var m__35718__auto____$1 = (com.rpl.specter.navs.map_vals_transform["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"MapTransformProtocol.map-vals-transform",structure);
}
}
}
});

com.rpl.specter.navs.map_keys_transform = (function com$rpl$specter$navs$map_keys_transform(structure,next_fn){
if((!((structure == null))) && (!((structure.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 == null)))){
return structure.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2(structure,next_fn);
} else {
var x__35717__auto__ = (((structure == null))?null:structure);
var m__35718__auto__ = (com.rpl.specter.navs.map_keys_transform[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,structure,next_fn);
} else {
var m__35718__auto____$1 = (com.rpl.specter.navs.map_keys_transform["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"MapTransformProtocol.map-keys-transform",structure);
}
}
}
});

com.rpl.specter.navs.map_vals_non_transient_transform = (function com$rpl$specter$navs$map_vals_non_transient_transform(structure,empty_map,next_fn){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var newv = next_fn.call(null,v);
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.call(null,m,k,newv);
}
}),empty_map,structure);
});
com.rpl.specter.navs.map_keys_non_transient_transform = (function com$rpl$specter$navs$map_keys_non_transient_transform(structure,empty_map,next_fn){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var newk = next_fn.call(null,k);
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.call(null,m,newk,v);
}
}),empty_map,structure);
});
(com.rpl.specter.navs.MapTransformProtocol["null"] = true);

(com.rpl.specter.navs.map_vals_transform["null"] = (function (structure,next_fn){
return null;
}));

(com.rpl.specter.navs.map_keys_transform["null"] = (function (structure,next_fn){
return null;
}));

cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_vals_non_transient_transform.call(null,structure__$1,cljs.core.PersistentArrayMap.EMPTY,next_fn);
});

cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_keys_non_transient_transform.call(null,structure__$1,cljs.core.PersistentArrayMap.EMPTY,next_fn);
});

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_vals_non_transient_transform.call(null,structure__$1,cljs.core.empty.call(null,structure__$1),next_fn);
});

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_keys_non_transient_transform.call(null,structure__$1,cljs.core.empty.call(null,structure__$1),next_fn);
});

cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (structure__$1){
return (function (m,k,v){
var newv = next_fn.call(null,v);
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc_BANG_.call(null,m,k,newv);
}
});})(structure__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY),structure__$1));
});

cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (structure__$1){
return (function (m,k,v){
var newk = next_fn.call(null,k);
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc_BANG_.call(null,m,newk,v);
}
});})(structure__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY),structure__$1));
});

(com.rpl.specter.navs.MapTransformProtocol["_"] = true);

(com.rpl.specter.navs.map_vals_transform["_"] = (function (structure,next_fn){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var newv = next_fn.call(null,v);
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.call(null,m,k,newv);
}
}),cljs.core.empty.call(null,structure),structure);
}));

(com.rpl.specter.navs.map_keys_transform["_"] = (function (structure,next_fn){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var newk = next_fn.call(null,k);
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.call(null,m,newk,v);
}
}),cljs.core.empty.call(null,structure),structure);
}));
com.rpl.specter.navs.srange_select = (function com$rpl$specter$navs$srange_select(structure,start,end,next_fn){
return next_fn.call(null,((typeof structure === 'string')?cljs.core.subs.call(null,structure,start,end):cljs.core.subvec.call(null,cljs.core.vec.call(null,structure),start,end)));
});
com.rpl.specter.navs.srange_transform = com.rpl.specter.impl.srange_transform_STAR_;
com.rpl.specter.navs.extract_basic_filter_fn = (function com$rpl$specter$navs$extract_basic_filter_fn(path){
if(cljs.core.fn_QMARK_.call(null,path)){
return path;
} else {
if((cljs.core.coll_QMARK_.call(null,path)) && (cljs.core.every_QMARK_.call(null,cljs.core.fn_QMARK_,path))){
return cljs.core.reduce.call(null,(function (combined,afn){
return (function (structure){
var and__35036__auto__ = combined.call(null,structure);
if(cljs.core.truth_(and__35036__auto__)){
return afn.call(null,structure);
} else {
return and__35036__auto__;
}
});
}),path);
} else {
return null;
}
}
});
com.rpl.specter.navs.if_select = (function com$rpl$specter$navs$if_select(vals,structure,next_fn,then_tester,then_nav,else_nav){
return com.rpl.specter.protocols.select_STAR_.call(null,(cljs.core.truth_(then_tester.call(null,structure))?then_nav:else_nav),vals,structure,next_fn);
});
com.rpl.specter.navs.if_transform = (function com$rpl$specter$navs$if_transform(vals,structure,next_fn,then_tester,then_nav,else_nav){
return com.rpl.specter.protocols.transform_STAR_.call(null,(cljs.core.truth_(then_tester.call(null,structure))?then_nav:else_nav),vals,structure,next_fn);
});

/**
 * @interface
 */
com.rpl.specter.navs.AddExtremes = function(){};

com.rpl.specter.navs.append_all = (function com$rpl$specter$navs$append_all(structure,elements){
if((!((structure == null))) && (!((structure.com$rpl$specter$navs$AddExtremes$append_all$arity$2 == null)))){
return structure.com$rpl$specter$navs$AddExtremes$append_all$arity$2(structure,elements);
} else {
var x__35717__auto__ = (((structure == null))?null:structure);
var m__35718__auto__ = (com.rpl.specter.navs.append_all[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,structure,elements);
} else {
var m__35718__auto____$1 = (com.rpl.specter.navs.append_all["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,structure,elements);
} else {
throw cljs.core.missing_protocol.call(null,"AddExtremes.append-all",structure);
}
}
}
});

com.rpl.specter.navs.prepend_all = (function com$rpl$specter$navs$prepend_all(structure,elements){
if((!((structure == null))) && (!((structure.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2 == null)))){
return structure.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2(structure,elements);
} else {
var x__35717__auto__ = (((structure == null))?null:structure);
var m__35718__auto__ = (com.rpl.specter.navs.prepend_all[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,structure,elements);
} else {
var m__35718__auto____$1 = (com.rpl.specter.navs.prepend_all["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,structure,elements);
} else {
throw cljs.core.missing_protocol.call(null,"AddExtremes.prepend-all",structure);
}
}
}
});

com.rpl.specter.navs.append_one = (function com$rpl$specter$navs$append_one(structure,elem){
if((!((structure == null))) && (!((structure.com$rpl$specter$navs$AddExtremes$append_one$arity$2 == null)))){
return structure.com$rpl$specter$navs$AddExtremes$append_one$arity$2(structure,elem);
} else {
var x__35717__auto__ = (((structure == null))?null:structure);
var m__35718__auto__ = (com.rpl.specter.navs.append_one[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,structure,elem);
} else {
var m__35718__auto____$1 = (com.rpl.specter.navs.append_one["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,structure,elem);
} else {
throw cljs.core.missing_protocol.call(null,"AddExtremes.append-one",structure);
}
}
}
});

com.rpl.specter.navs.prepend_one = (function com$rpl$specter$navs$prepend_one(structure,elem){
if((!((structure == null))) && (!((structure.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2 == null)))){
return structure.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2(structure,elem);
} else {
var x__35717__auto__ = (((structure == null))?null:structure);
var m__35718__auto__ = (com.rpl.specter.navs.prepend_one[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,structure,elem);
} else {
var m__35718__auto____$1 = (com.rpl.specter.navs.prepend_one["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,structure,elem);
} else {
throw cljs.core.missing_protocol.call(null,"AddExtremes.prepend-one",structure);
}
}
}
});

(com.rpl.specter.navs.AddExtremes["null"] = true);

(com.rpl.specter.navs.append_all["null"] = (function (_,elements){
return elements;
}));

(com.rpl.specter.navs.prepend_all["null"] = (function (_,elements){
return elements;
}));

(com.rpl.specter.navs.append_one["null"] = (function (_,elem){
var x__35891__auto__ = elem;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35891__auto__);
}));

(com.rpl.specter.navs.prepend_one["null"] = (function (_,elem){
var x__35891__auto__ = elem;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35891__auto__);
}));

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$append_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
return cljs.core.reduce.call(null,cljs.core.conj,structure__$1,elements);
});

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var _LT__GT_ = ret;
var _LT__GT___$1 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,_LT__GT_,elements);
var _LT__GT___$2 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,_LT__GT___$1,structure__$1);
return cljs.core.persistent_BANG_.call(null,_LT__GT___$2);
});

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$append_one$arity$2 = (function (structure,elem){
var structure__$1 = this;
return cljs.core.conj.call(null,structure__$1,elem);
});

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2 = (function (structure,elem){
var structure__$1 = this;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null),structure__$1);
});

(com.rpl.specter.navs.AddExtremes["_"] = true);

(com.rpl.specter.navs.append_all["_"] = (function (structure,elements){
return cljs.core.concat.call(null,structure,elements);
}));

(com.rpl.specter.navs.prepend_all["_"] = (function (structure,elements){
return cljs.core.concat.call(null,elements,structure);
}));

(com.rpl.specter.navs.append_one["_"] = (function (structure,elem){
return cljs.core.concat.call(null,structure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null));
}));

(com.rpl.specter.navs.prepend_one["_"] = (function (structure,elem){
return cljs.core.cons.call(null,elem,structure);
}));

/**
 * @interface
 */
com.rpl.specter.navs.UpdateExtremes = function(){};

com.rpl.specter.navs.update_first = (function com$rpl$specter$navs$update_first(s,afn){
if((!((s == null))) && (!((s.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 == null)))){
return s.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2(s,afn);
} else {
var x__35717__auto__ = (((s == null))?null:s);
var m__35718__auto__ = (com.rpl.specter.navs.update_first[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,s,afn);
} else {
var m__35718__auto____$1 = (com.rpl.specter.navs.update_first["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,s,afn);
} else {
throw cljs.core.missing_protocol.call(null,"UpdateExtremes.update-first",s);
}
}
}
});

com.rpl.specter.navs.update_last = (function com$rpl$specter$navs$update_last(s,afn){
if((!((s == null))) && (!((s.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 == null)))){
return s.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2(s,afn);
} else {
var x__35717__auto__ = (((s == null))?null:s);
var m__35718__auto__ = (com.rpl.specter.navs.update_last[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,s,afn);
} else {
var m__35718__auto____$1 = (com.rpl.specter.navs.update_last["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,s,afn);
} else {
throw cljs.core.missing_protocol.call(null,"UpdateExtremes.update-last",s);
}
}
}
});


/**
 * @interface
 */
com.rpl.specter.navs.GetExtremes = function(){};

com.rpl.specter.navs.get_first = (function com$rpl$specter$navs$get_first(s){
if((!((s == null))) && (!((s.com$rpl$specter$navs$GetExtremes$get_first$arity$1 == null)))){
return s.com$rpl$specter$navs$GetExtremes$get_first$arity$1(s);
} else {
var x__35717__auto__ = (((s == null))?null:s);
var m__35718__auto__ = (com.rpl.specter.navs.get_first[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,s);
} else {
var m__35718__auto____$1 = (com.rpl.specter.navs.get_first["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"GetExtremes.get-first",s);
}
}
}
});

com.rpl.specter.navs.get_last = (function com$rpl$specter$navs$get_last(s){
if((!((s == null))) && (!((s.com$rpl$specter$navs$GetExtremes$get_last$arity$1 == null)))){
return s.com$rpl$specter$navs$GetExtremes$get_last$arity$1(s);
} else {
var x__35717__auto__ = (((s == null))?null:s);
var m__35718__auto__ = (com.rpl.specter.navs.get_last[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,s);
} else {
var m__35718__auto____$1 = (com.rpl.specter.navs.get_last["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"GetExtremes.get-last",s);
}
}
}
});


/**
 * @interface
 */
com.rpl.specter.navs.FastEmpty = function(){};

com.rpl.specter.navs.fast_empty_QMARK_ = (function com$rpl$specter$navs$fast_empty_QMARK_(s){
if((!((s == null))) && (!((s.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 == null)))){
return s.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1(s);
} else {
var x__35717__auto__ = (((s == null))?null:s);
var m__35718__auto__ = (com.rpl.specter.navs.fast_empty_QMARK_[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,s);
} else {
var m__35718__auto____$1 = (com.rpl.specter.navs.fast_empty_QMARK_["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"FastEmpty.fast-empty?",s);
}
}
}
});



com.rpl.specter.navs.PosNavigator_select_STAR_ = (function com$rpl$specter$navs$PosNavigator_select_STAR_(getter,updater,structure,next_fn){
if(cljs.core.not.call(null,com.rpl.specter.navs.fast_empty_QMARK_.call(null,structure))){
return next_fn.call(null,getter.call(null,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.navs.PosNavigator_transform_STAR_ = (function com$rpl$specter$navs$PosNavigator_transform_STAR_(getter,updater,structure,next_fn){
if(cljs.core.truth_(com.rpl.specter.navs.fast_empty_QMARK_.call(null,structure))){
return structure;
} else {
return updater.call(null,structure,next_fn);
}
});

com.rpl.specter.navs.PosNavigator = com.rpl.specter.impl.direct_nav_obj.call(null,(function (getter,updater){
if(typeof com.rpl.specter.navs.t_com$rpl$specter$navs44838 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs44838 = (function (getter,updater,meta44839){
this.getter = getter;
this.updater = updater;
this.meta44839 = meta44839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.navs.t_com$rpl$specter$navs44838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44840,meta44839__$1){
var self__ = this;
var _44840__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs44838(self__.getter,self__.updater,meta44839__$1));
});

com.rpl.specter.navs.t_com$rpl$specter$navs44838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44840){
var self__ = this;
var _44840__$1 = this;
return self__.meta44839;
});

com.rpl.specter.navs.t_com$rpl$specter$navs44838.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.navs.t_com$rpl$specter$navs44838.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
if(cljs.core.not.call(null,com.rpl.specter.navs.fast_empty_QMARK_.call(null,structure))){
return next_fn.call(null,self__.getter.call(null,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs44838.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__43282__auto__,vals__43283__auto__,structure,next_fn__43284__auto__){
var self__ = this;
var this__43282__auto____$1 = this;
var next_fn = ((function (this__43282__auto____$1){
return (function (s__43285__auto__){
return next_fn__43284__auto__.call(null,vals__43283__auto__,s__43285__auto__);
});})(this__43282__auto____$1))
;
if(cljs.core.truth_(com.rpl.specter.navs.fast_empty_QMARK_.call(null,structure))){
return structure;
} else {
return self__.updater.call(null,structure,next_fn);
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs44838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"updater","updater",2107748764,null),new cljs.core.Symbol(null,"meta44839","meta44839",1961270766,null)], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs44838.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs44838.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs44838";

com.rpl.specter.navs.t_com$rpl$specter$navs44838.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs44838");
});

com.rpl.specter.navs.__GT_t_com$rpl$specter$navs44838 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs44838(getter__$1,updater__$1,meta44839){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs44838(getter__$1,updater__$1,meta44839));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs44838(getter,updater,null));
}));
com.rpl.specter.navs.update_first_list = (function com$rpl$specter$navs$update_first_list(l,afn){
var newf = afn.call(null,cljs.core.first.call(null,l));
var restl = cljs.core.rest.call(null,l);
if((com.rpl.specter.impl.NONE === newf)){
return restl;
} else {
return cljs.core.cons.call(null,newf,restl);
}
});
com.rpl.specter.navs.update_last_list = (function com$rpl$specter$navs$update_last_list(l,afn){
var lastl = afn.call(null,cljs.core.last.call(null,l));
var bl = cljs.core.butlast.call(null,l);
if((com.rpl.specter.impl.NONE === lastl)){
if((bl == null)){
return cljs.core.List.EMPTY;
} else {
return bl;
}
} else {
return cljs.core.concat.call(null,bl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lastl], null));
}
});
com.rpl.specter.navs.vec_count = (function com$rpl$specter$navs$vec_count(v){
return cljs.core.count.call(null,v);
});
com.rpl.specter.navs.transient_vec_count = (function com$rpl$specter$navs$transient_vec_count(v){
return cljs.core.count.call(null,v);
});
cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 = (function (v,afn){
var v__$1 = this;
var val = cljs.core.nth.call(null,v__$1,(0));
var newv = afn.call(null,val);
if((com.rpl.specter.impl.NONE === newv)){
return cljs.core.subvec.call(null,v__$1,(1));
} else {
return cljs.core.assoc.call(null,v__$1,(0),newv);
}
});

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 = (function (v,afn){
var v__$1 = this;
var c = (com.rpl.specter.navs.vec_count.call(null,v__$1) | (0));
var G__44841 = c;
switch (G__44841) {
case (1):
var vec__44842 = v__$1;
var e = cljs.core.nth.call(null,vec__44842,(0),null);
var newe = afn.call(null,e);
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [newe], null);
}

break;
case (2):
var vec__44845 = v__$1;
var e1 = cljs.core.nth.call(null,vec__44845,(0),null);
var e2 = cljs.core.nth.call(null,vec__44845,(1),null);
var newe = afn.call(null,e2);
if((com.rpl.specter.impl.NONE === newe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,newe], null);
}

break;
default:
var i = (c - (1));
var newe = afn.call(null,cljs.core.nth.call(null,v__$1,i));
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.pop.call(null,v__$1);
} else {
return cljs.core.assoc.call(null,v__$1,i,newe);
}

}
});

(com.rpl.specter.navs.UpdateExtremes["string"] = true);

(com.rpl.specter.navs.update_first["string"] = (function (s,afn){
var rests = cljs.core.subs.call(null,s,(1),cljs.core.count.call(null,s));
var newb = afn.call(null,cljs.core.nth.call(null,s,(0)));
if((com.rpl.specter.impl.NONE === newb)){
return rests;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(newb),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rests)].join('');
}
}));

(com.rpl.specter.navs.update_last["string"] = (function (s,afn){
var last_idx = (cljs.core.count.call(null,s) - (1));
var newl = afn.call(null,cljs.core.nth.call(null,s,last_idx));
var begins = cljs.core.subs.call(null,s,(0),last_idx);
if((com.rpl.specter.impl.NONE === newl)){
return begins;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(begins),cljs.core.str.cljs$core$IFn$_invoke$arity$1(newl)].join('');
}
}));

(com.rpl.specter.navs.UpdateExtremes["_"] = true);

(com.rpl.specter.navs.update_first["_"] = (function (l,val){
return com.rpl.specter.navs.update_first_list.call(null,l,val);
}));

(com.rpl.specter.navs.update_last["_"] = (function (l,val){
return com.rpl.specter.navs.update_last_list.call(null,l,val);
}));
cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$get_first$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.nth.call(null,v__$1,(0));
});

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$get_last$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.peek.call(null,v__$1);
});

(com.rpl.specter.navs.GetExtremes["_"] = true);

(com.rpl.specter.navs.get_first["_"] = (function (s){
return cljs.core.first.call(null,s);
}));

(com.rpl.specter.navs.get_last["_"] = (function (s){
return cljs.core.last.call(null,s);
}));

(com.rpl.specter.navs.GetExtremes["string"] = true);

(com.rpl.specter.navs.get_first["string"] = (function (s){
return cljs.core.nth.call(null,s,(0));
}));

(com.rpl.specter.navs.get_last["string"] = (function (s){
return cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)));
}));
(com.rpl.specter.navs.FastEmpty["null"] = true);

(com.rpl.specter.navs.fast_empty_QMARK_["null"] = (function (_){
return true;
}));

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$FastEmpty$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 = (function (v){
var v__$1 = this;
return cljs.core._EQ_.call(null,(0),com.rpl.specter.navs.vec_count.call(null,v__$1));
});

cljs.core.TransientVector.prototype.com$rpl$specter$navs$FastEmpty$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.TransientVector.prototype.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 = (function (v){
var v__$1 = this;
return cljs.core._EQ_.call(null,(0),com.rpl.specter.navs.transient_vec_count.call(null,v__$1));
});

(com.rpl.specter.navs.FastEmpty["_"] = true);

(com.rpl.specter.navs.fast_empty_QMARK_["_"] = (function (s){
return cljs.core.empty_QMARK_.call(null,s);
}));
com.rpl.specter.navs.do_keypath_transform = (function com$rpl$specter$navs$do_keypath_transform(vals,structure,key,next_fn){
var newv = next_fn.call(null,vals,cljs.core.get.call(null,structure,key));
if((newv === com.rpl.specter.impl.NONE)){
if(cljs.core.sequential_QMARK_.call(null,structure)){
return com.rpl.specter.impl.srange_transform_STAR_.call(null,structure,key,(key + (1)),((function (newv){
return (function (_){
return cljs.core.PersistentVector.EMPTY;
});})(newv))
);
} else {
return cljs.core.dissoc.call(null,structure,key);
}
} else {
return cljs.core.assoc.call(null,structure,key,newv);
}
});
/**
 * Navigates to the specified key, navigating to nil if it does not exist.
 *        Setting the value to NONE will remove it from the collection.
 */
com.rpl.specter.navs.keypath_STAR_ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (key){
if(typeof com.rpl.specter.navs.t_com$rpl$specter$navs44849 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs44849 = (function (key,meta44850){
this.key = key;
this.meta44850 = meta44850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.navs.t_com$rpl$specter$navs44849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44851,meta44850__$1){
var self__ = this;
var _44851__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs44849(self__.key,meta44850__$1));
});

com.rpl.specter.navs.t_com$rpl$specter$navs44849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44851){
var self__ = this;
var _44851__$1 = this;
return self__.meta44850;
});

com.rpl.specter.navs.t_com$rpl$specter$navs44849.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.navs.t_com$rpl$specter$navs44849.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,cljs.core.get.call(null,structure,self__.key));
});

com.rpl.specter.navs.t_com$rpl$specter$navs44849.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.do_keypath_transform.call(null,vals,structure,self__.key,next_fn);
});

com.rpl.specter.navs.t_com$rpl$specter$navs44849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta44850","meta44850",1499694094,null)], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs44849.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs44849.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs44849";

com.rpl.specter.navs.t_com$rpl$specter$navs44849.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs44849");
});

com.rpl.specter.navs.__GT_t_com$rpl$specter$navs44849 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs44849(key__$1,meta44850){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs44849(key__$1,meta44850));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs44849(key,null));
}));
/**
 * Navigates to the key only if it exists in the map. Setting the value to NONE
 *        will remove it from the collection.
 */
com.rpl.specter.navs.must_STAR_ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (k){
if(typeof com.rpl.specter.navs.t_com$rpl$specter$navs44852 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs44852 = (function (k,meta44853){
this.k = k;
this.meta44853 = meta44853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.navs.t_com$rpl$specter$navs44852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44854,meta44853__$1){
var self__ = this;
var _44854__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs44852(self__.k,meta44853__$1));
});

com.rpl.specter.navs.t_com$rpl$specter$navs44852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44854){
var self__ = this;
var _44854__$1 = this;
return self__.meta44853;
});

com.rpl.specter.navs.t_com$rpl$specter$navs44852.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.navs.t_com$rpl$specter$navs44852.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.k)){
return next_fn.call(null,vals,cljs.core.get.call(null,structure,self__.k));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs44852.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.k)){
return com.rpl.specter.navs.do_keypath_transform.call(null,vals,structure,self__.k,next_fn);
} else {
return structure;
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs44852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta44853","meta44853",-1948964888,null)], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs44852.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs44852.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs44852";

com.rpl.specter.navs.t_com$rpl$specter$navs44852.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs44852");
});

com.rpl.specter.navs.__GT_t_com$rpl$specter$navs44852 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs44852(k__$1,meta44853){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs44852(k__$1,meta44853));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs44852(k,null));
}));
com.rpl.specter.navs.nthpath_STAR_ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (i){
if(typeof com.rpl.specter.navs.t_com$rpl$specter$navs44855 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs44855 = (function (i,meta44856){
this.i = i;
this.meta44856 = meta44856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.navs.t_com$rpl$specter$navs44855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44857,meta44856__$1){
var self__ = this;
var _44857__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs44855(self__.i,meta44856__$1));
});

com.rpl.specter.navs.t_com$rpl$specter$navs44855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44857){
var self__ = this;
var _44857__$1 = this;
return self__.meta44856;
});

com.rpl.specter.navs.t_com$rpl$specter$navs44855.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.navs.t_com$rpl$specter$navs44855.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,cljs.core.nth.call(null,structure,self__.i));
});

com.rpl.specter.navs.t_com$rpl$specter$navs44855.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_.call(null,structure)){
var newv = next_fn.call(null,vals,cljs.core.nth.call(null,structure,self__.i));
if((newv === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.srange_transform_STAR_.call(null,structure,self__.i,(self__.i + (1)),((function (newv,this$__$1){
return (function (_){
return cljs.core.PersistentVector.EMPTY;
});})(newv,this$__$1))
);
} else {
return cljs.core.assoc.call(null,structure,self__.i,newv);
}
} else {
return com.rpl.specter.impl.srange_transform_STAR_.call(null,structure,self__.i,(self__.i + (1)),((function (this$__$1){
return (function (p__44858){
var vec__44859 = p__44858;
var e = cljs.core.nth.call(null,vec__44859,(0),null);
var v = next_fn.call(null,vals,e);
if((v === com.rpl.specter.impl.NONE)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
});})(this$__$1))
);
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs44855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta44856","meta44856",3839515,null)], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs44855.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs44855.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs44855";

com.rpl.specter.navs.t_com$rpl$specter$navs44855.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs44855");
});

com.rpl.specter.navs.__GT_t_com$rpl$specter$navs44855 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs44855(i__$1,meta44856){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs44855(i__$1,meta44856));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs44855(i,null));
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.navs.SrangeEndFunction = (function (end_fn,__meta,__extmap,__hash){
this.end_fn = end_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35674__auto__,k__35675__auto__){
var self__ = this;
var this__35674__auto____$1 = this;
return this__35674__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__35675__auto__,null);
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35676__auto__,k44863,else__35677__auto__){
var self__ = this;
var this__35676__auto____$1 = this;
var G__44867 = k44863;
var G__44867__$1 = (((G__44867 instanceof cljs.core.Keyword))?G__44867.fqn:null);
switch (G__44867__$1) {
case "end-fn":
return self__.end_fn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44863,else__35677__auto__);

}
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35688__auto__,writer__35689__auto__,opts__35690__auto__){
var self__ = this;
var this__35688__auto____$1 = this;
var pr_pair__35691__auto__ = ((function (this__35688__auto____$1){
return (function (keyval__35692__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35689__auto__,cljs.core.pr_writer,""," ","",opts__35690__auto__,keyval__35692__auto__);
});})(this__35688__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35689__auto__,pr_pair__35691__auto__,"#com.rpl.specter.navs.SrangeEndFunction{",", ","}",opts__35690__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-fn","end-fn",54055684),self__.end_fn],null))], null),self__.__extmap));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44862){
var self__ = this;
var G__44862__$1 = this;
return (new cljs.core.RecordIter((0),G__44862__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-fn","end-fn",54055684)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35672__auto__){
var self__ = this;
var this__35672__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35669__auto__){
var self__ = this;
var this__35669__auto____$1 = this;
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35678__auto__){
var self__ = this;
var this__35678__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35670__auto__){
var self__ = this;
var this__35670__auto____$1 = this;
var h__35488__auto__ = self__.__hash;
if(!((h__35488__auto__ == null))){
return h__35488__auto__;
} else {
var h__35488__auto____$1 = ((function (h__35488__auto__,this__35670__auto____$1){
return (function (coll__35671__auto__){
return (-674086206 ^ cljs.core.hash_unordered_coll.call(null,coll__35671__auto__));
});})(h__35488__auto__,this__35670__auto____$1))
.call(null,this__35670__auto____$1);
self__.__hash = h__35488__auto____$1;

return h__35488__auto____$1;
}
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44864,other44865){
var self__ = this;
var this44864__$1 = this;
return (!((other44865 == null))) && ((this44864__$1.constructor === other44865.constructor)) && (cljs.core._EQ_.call(null,this44864__$1.end_fn,other44865.end_fn)) && (cljs.core._EQ_.call(null,this44864__$1.__extmap,other44865.__extmap));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35683__auto__,k__35684__auto__){
var self__ = this;
var this__35683__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end-fn","end-fn",54055684),null], null), null),k__35684__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35683__auto____$1),self__.__meta),k__35684__auto__);
} else {
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35684__auto__)),null));
}
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35681__auto__,k__35682__auto__,G__44862){
var self__ = this;
var this__35681__auto____$1 = this;
var pred__44868 = cljs.core.keyword_identical_QMARK_;
var expr__44869 = k__35682__auto__;
if(cljs.core.truth_(pred__44868.call(null,new cljs.core.Keyword(null,"end-fn","end-fn",54055684),expr__44869))){
return (new com.rpl.specter.navs.SrangeEndFunction(G__44862,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35682__auto__,G__44862),null));
}
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35686__auto__){
var self__ = this;
var this__35686__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-fn","end-fn",54055684),self__.end_fn],null))], null),self__.__extmap));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35673__auto__,G__44862){
var self__ = this;
var this__35673__auto____$1 = this;
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,G__44862,self__.__extmap,self__.__hash));
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35679__auto__,entry__35680__auto__){
var self__ = this;
var this__35679__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35680__auto__)){
return this__35679__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__35680__auto__,(0)),cljs.core._nth.call(null,entry__35680__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35679__auto____$1,entry__35680__auto__);
}
});

com.rpl.specter.navs.SrangeEndFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end-fn","end-fn",1694587211,null)], null);
});

com.rpl.specter.navs.SrangeEndFunction.cljs$lang$type = true;

com.rpl.specter.navs.SrangeEndFunction.cljs$lang$ctorPrSeq = (function (this__35710__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.navs/SrangeEndFunction");
});

com.rpl.specter.navs.SrangeEndFunction.cljs$lang$ctorPrWriter = (function (this__35710__auto__,writer__35711__auto__){
return cljs.core._write.call(null,writer__35711__auto__,"com.rpl.specter.navs/SrangeEndFunction");
});

com.rpl.specter.navs.__GT_SrangeEndFunction = (function com$rpl$specter$navs$__GT_SrangeEndFunction(end_fn){
return (new com.rpl.specter.navs.SrangeEndFunction(end_fn,null,null,null));
});

com.rpl.specter.navs.map__GT_SrangeEndFunction = (function com$rpl$specter$navs$map__GT_SrangeEndFunction(G__44866){
return (new com.rpl.specter.navs.SrangeEndFunction(new cljs.core.Keyword(null,"end-fn","end-fn",54055684).cljs$core$IFn$_invoke$arity$1(G__44866),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__44866,new cljs.core.Keyword(null,"end-fn","end-fn",54055684))),null));
});

com.rpl.specter.navs.invoke_end_fn = (function com$rpl$specter$navs$invoke_end_fn(end_fn,structure,start){
if((end_fn instanceof com.rpl.specter.navs.SrangeEndFunction)){
return new cljs.core.Keyword(null,"end-fn","end-fn",54055684).cljs$core$IFn$_invoke$arity$1(end_fn).call(null,structure,start);
} else {
return end_fn.call(null,structure);
}
});
