// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.components.ui');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('utimer.core');

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
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
utimer.components.ui.UIComponent = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
utimer.components.ui.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35674__auto__,k__35675__auto__){
var self__ = this;
var this__35674__auto____$1 = this;
return this__35674__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__35675__auto__,null);
});

utimer.components.ui.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35676__auto__,k51140,else__35677__auto__){
var self__ = this;
var this__35676__auto____$1 = this;
var G__51144 = k51140;
switch (G__51144) {
default:
return cljs.core.get.call(null,self__.__extmap,k51140,else__35677__auto__);

}
});

utimer.components.ui.UIComponent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35688__auto__,writer__35689__auto__,opts__35690__auto__){
var self__ = this;
var this__35688__auto____$1 = this;
var pr_pair__35691__auto__ = ((function (this__35688__auto____$1){
return (function (keyval__35692__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35689__auto__,cljs.core.pr_writer,""," ","",opts__35690__auto__,keyval__35692__auto__);
});})(this__35688__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35689__auto__,pr_pair__35691__auto__,"#utimer.components.ui.UIComponent{",", ","}",opts__35690__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

utimer.components.ui.UIComponent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51139){
var self__ = this;
var G__51139__$1 = this;
return (new cljs.core.RecordIter((0),G__51139__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

utimer.components.ui.UIComponent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35672__auto__){
var self__ = this;
var this__35672__auto____$1 = this;
return self__.__meta;
});

utimer.components.ui.UIComponent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35669__auto__){
var self__ = this;
var this__35669__auto____$1 = this;
return (new utimer.components.ui.UIComponent(self__.__meta,self__.__extmap,self__.__hash));
});

utimer.components.ui.UIComponent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35678__auto__){
var self__ = this;
var this__35678__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

utimer.components.ui.UIComponent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35670__auto__){
var self__ = this;
var this__35670__auto____$1 = this;
var h__35488__auto__ = self__.__hash;
if(!((h__35488__auto__ == null))){
return h__35488__auto__;
} else {
var h__35488__auto____$1 = ((function (h__35488__auto__,this__35670__auto____$1){
return (function (coll__35671__auto__){
return (1063116413 ^ cljs.core.hash_unordered_coll.call(null,coll__35671__auto__));
});})(h__35488__auto__,this__35670__auto____$1))
.call(null,this__35670__auto____$1);
self__.__hash = h__35488__auto____$1;

return h__35488__auto____$1;
}
});

utimer.components.ui.UIComponent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51141,other51142){
var self__ = this;
var this51141__$1 = this;
return (!((other51142 == null))) && ((this51141__$1.constructor === other51142.constructor)) && (cljs.core._EQ_.call(null,this51141__$1.__extmap,other51142.__extmap));
});

utimer.components.ui.UIComponent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35683__auto__,k__35684__auto__){
var self__ = this;
var this__35683__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__35684__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35683__auto____$1),self__.__meta),k__35684__auto__);
} else {
return (new utimer.components.ui.UIComponent(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35684__auto__)),null));
}
});

utimer.components.ui.UIComponent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35681__auto__,k__35682__auto__,G__51139){
var self__ = this;
var this__35681__auto____$1 = this;
var pred__51145 = cljs.core.keyword_identical_QMARK_;
var expr__51146 = k__35682__auto__;
return (new utimer.components.ui.UIComponent(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35682__auto__,G__51139),null));
});

utimer.components.ui.UIComponent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35686__auto__){
var self__ = this;
var this__35686__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

utimer.components.ui.UIComponent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35673__auto__,G__51139){
var self__ = this;
var this__35673__auto____$1 = this;
return (new utimer.components.ui.UIComponent(G__51139,self__.__extmap,self__.__hash));
});

utimer.components.ui.UIComponent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35679__auto__,entry__35680__auto__){
var self__ = this;
var this__35679__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35680__auto__)){
return this__35679__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__35680__auto__,(0)),cljs.core._nth.call(null,entry__35680__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35679__auto____$1,entry__35680__auto__);
}
});

utimer.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

utimer.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
utimer.core.render.call(null);

return component__$1;
});

utimer.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return component__$1;
});

utimer.components.ui.UIComponent.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

utimer.components.ui.UIComponent.cljs$lang$type = true;

utimer.components.ui.UIComponent.cljs$lang$ctorPrSeq = (function (this__35710__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"utimer.components.ui/UIComponent");
});

utimer.components.ui.UIComponent.cljs$lang$ctorPrWriter = (function (this__35710__auto__,writer__35711__auto__){
return cljs.core._write.call(null,writer__35711__auto__,"utimer.components.ui/UIComponent");
});

utimer.components.ui.__GT_UIComponent = (function utimer$components$ui$__GT_UIComponent(){
return (new utimer.components.ui.UIComponent(null,null,null));
});

utimer.components.ui.map__GT_UIComponent = (function utimer$components$ui$map__GT_UIComponent(G__51143){
return (new utimer.components.ui.UIComponent(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__51143)),null));
});

utimer.components.ui.new_ui_component = (function utimer$components$ui$new_ui_component(){
return utimer.components.ui.map__GT_UIComponent.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
