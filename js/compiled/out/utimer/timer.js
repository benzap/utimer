// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.timer');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
cljs.core.enable_console_print_BANG_.call(null);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.timer","ms","utimer.timer/ms",-792243724),new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",1710697810,null),cljs.core.integer_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.timer","datetime","utimer.timer/datetime",-336039763),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("goog","date.UtcDateTime","goog/date.UtcDateTime",1564919323,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__50655_SHARP_){
return (p1__50655_SHARP_ instanceof goog.date.UtcDateTime);
}));
utimer.timer.default_duration_ms = ((5) * (1000));

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
utimer.timer.Timer = (function (tick_time,progress,duration,__meta,__extmap,__hash){
this.tick_time = tick_time;
this.progress = progress;
this.duration = duration;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
utimer.timer.Timer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35674__auto__,k__35675__auto__){
var self__ = this;
var this__35674__auto____$1 = this;
return this__35674__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__35675__auto__,null);
});

utimer.timer.Timer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35676__auto__,k50657,else__35677__auto__){
var self__ = this;
var this__35676__auto____$1 = this;
var G__50661 = k50657;
var G__50661__$1 = (((G__50661 instanceof cljs.core.Keyword))?G__50661.fqn:null);
switch (G__50661__$1) {
case "tick-time":
return self__.tick_time;

break;
case "progress":
return self__.progress;

break;
case "duration":
return self__.duration;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50657,else__35677__auto__);

}
});

utimer.timer.Timer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35688__auto__,writer__35689__auto__,opts__35690__auto__){
var self__ = this;
var this__35688__auto____$1 = this;
var pr_pair__35691__auto__ = ((function (this__35688__auto____$1){
return (function (keyval__35692__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35689__auto__,cljs.core.pr_writer,""," ","",opts__35690__auto__,keyval__35692__auto__);
});})(this__35688__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35689__auto__,pr_pair__35691__auto__,"#utimer.timer.Timer{",", ","}",opts__35690__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tick-time","tick-time",-255591164),self__.tick_time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"progress","progress",244323547),self__.progress],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"duration","duration",1444101068),self__.duration],null))], null),self__.__extmap));
});

utimer.timer.Timer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50656){
var self__ = this;
var G__50656__$1 = this;
return (new cljs.core.RecordIter((0),G__50656__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick-time","tick-time",-255591164),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

utimer.timer.Timer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35672__auto__){
var self__ = this;
var this__35672__auto____$1 = this;
return self__.__meta;
});

utimer.timer.Timer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35669__auto__){
var self__ = this;
var this__35669__auto____$1 = this;
return (new utimer.timer.Timer(self__.tick_time,self__.progress,self__.duration,self__.__meta,self__.__extmap,self__.__hash));
});

utimer.timer.Timer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35678__auto__){
var self__ = this;
var this__35678__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

utimer.timer.Timer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35670__auto__){
var self__ = this;
var this__35670__auto____$1 = this;
var h__35488__auto__ = self__.__hash;
if(!((h__35488__auto__ == null))){
return h__35488__auto__;
} else {
var h__35488__auto____$1 = ((function (h__35488__auto__,this__35670__auto____$1){
return (function (coll__35671__auto__){
return (-2131218164 ^ cljs.core.hash_unordered_coll.call(null,coll__35671__auto__));
});})(h__35488__auto__,this__35670__auto____$1))
.call(null,this__35670__auto____$1);
self__.__hash = h__35488__auto____$1;

return h__35488__auto____$1;
}
});

utimer.timer.Timer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50658,other50659){
var self__ = this;
var this50658__$1 = this;
return (!((other50659 == null))) && ((this50658__$1.constructor === other50659.constructor)) && (cljs.core._EQ_.call(null,this50658__$1.tick_time,other50659.tick_time)) && (cljs.core._EQ_.call(null,this50658__$1.progress,other50659.progress)) && (cljs.core._EQ_.call(null,this50658__$1.duration,other50659.duration)) && (cljs.core._EQ_.call(null,this50658__$1.__extmap,other50659.__extmap));
});

utimer.timer.Timer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35683__auto__,k__35684__auto__){
var self__ = this;
var this__35683__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tick-time","tick-time",-255591164),null,new cljs.core.Keyword(null,"duration","duration",1444101068),null,new cljs.core.Keyword(null,"progress","progress",244323547),null], null), null),k__35684__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35683__auto____$1),self__.__meta),k__35684__auto__);
} else {
return (new utimer.timer.Timer(self__.tick_time,self__.progress,self__.duration,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35684__auto__)),null));
}
});

utimer.timer.Timer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35681__auto__,k__35682__auto__,G__50656){
var self__ = this;
var this__35681__auto____$1 = this;
var pred__50662 = cljs.core.keyword_identical_QMARK_;
var expr__50663 = k__35682__auto__;
if(cljs.core.truth_(pred__50662.call(null,new cljs.core.Keyword(null,"tick-time","tick-time",-255591164),expr__50663))){
return (new utimer.timer.Timer(G__50656,self__.progress,self__.duration,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50662.call(null,new cljs.core.Keyword(null,"progress","progress",244323547),expr__50663))){
return (new utimer.timer.Timer(self__.tick_time,G__50656,self__.duration,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50662.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068),expr__50663))){
return (new utimer.timer.Timer(self__.tick_time,self__.progress,G__50656,self__.__meta,self__.__extmap,null));
} else {
return (new utimer.timer.Timer(self__.tick_time,self__.progress,self__.duration,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35682__auto__,G__50656),null));
}
}
}
});

utimer.timer.Timer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35686__auto__){
var self__ = this;
var this__35686__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tick-time","tick-time",-255591164),self__.tick_time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"progress","progress",244323547),self__.progress],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"duration","duration",1444101068),self__.duration],null))], null),self__.__extmap));
});

utimer.timer.Timer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35673__auto__,G__50656){
var self__ = this;
var this__35673__auto____$1 = this;
return (new utimer.timer.Timer(self__.tick_time,self__.progress,self__.duration,G__50656,self__.__extmap,self__.__hash));
});

utimer.timer.Timer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35679__auto__,entry__35680__auto__){
var self__ = this;
var this__35679__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35680__auto__)){
return this__35679__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__35680__auto__,(0)),cljs.core._nth.call(null,entry__35680__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35679__auto____$1,entry__35680__auto__);
}
});

utimer.timer.Timer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tick-time","tick-time",1384940363,null),new cljs.core.Symbol(null,"progress","progress",1884855074,null),new cljs.core.Symbol(null,"duration","duration",-1210334701,null)], null);
});

utimer.timer.Timer.cljs$lang$type = true;

utimer.timer.Timer.cljs$lang$ctorPrSeq = (function (this__35710__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"utimer.timer/Timer");
});

utimer.timer.Timer.cljs$lang$ctorPrWriter = (function (this__35710__auto__,writer__35711__auto__){
return cljs.core._write.call(null,writer__35711__auto__,"utimer.timer/Timer");
});

utimer.timer.__GT_Timer = (function utimer$timer$__GT_Timer(tick_time,progress,duration){
return (new utimer.timer.Timer(tick_time,progress,duration,null,null,null));
});

utimer.timer.map__GT_Timer = (function utimer$timer$map__GT_Timer(G__50660){
return (new utimer.timer.Timer(new cljs.core.Keyword(null,"tick-time","tick-time",-255591164).cljs$core$IFn$_invoke$arity$1(G__50660),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(G__50660),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(G__50660),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50660,new cljs.core.Keyword(null,"tick-time","tick-time",-255591164),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"duration","duration",1444101068))),null));
});

cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.timer","started?","utimer.timer/started?",149398364),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.timer","tick-time","utimer.timer/tick-time",37766333),new cljs.core.Keyword("utimer.timer","datetime","utimer.timer/datetime",-336039763),new cljs.core.Keyword("utimer.timer","datetime","utimer.timer/datetime",-336039763));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.timer","progress","utimer.timer/progress",1108589876),new cljs.core.Keyword("utimer.timer","ms","utimer.timer/ms",-792243724),new cljs.core.Keyword("utimer.timer","ms","utimer.timer/ms",-792243724));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.timer","duration","utimer.timer/duration",614380563),new cljs.core.Keyword("utimer.timer","ms","utimer.timer/ms",-792243724),new cljs.core.Keyword("utimer.timer","ms","utimer.timer/ms",-792243724));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.timer","started?","utimer.timer/started?",149398364),new cljs.core.Keyword("utimer.timer","tick-time","utimer.timer/tick-time",37766333),new cljs.core.Keyword("utimer.timer","progress","utimer.timer/progress",1108589876),new cljs.core.Keyword("utimer.timer","duration","utimer.timer/duration",614380563)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.timer","started?","utimer.timer/started?",149398364),new cljs.core.Keyword("utimer.timer","tick-time","utimer.timer/tick-time",37766333),new cljs.core.Keyword("utimer.timer","progress","utimer.timer/progress",1108589876),new cljs.core.Keyword("utimer.timer","duration","utimer.timer/duration",614380563)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__50666){
return cljs.core.map_QMARK_.call(null,G__50666);
}),(function (G__50666){
return cljs.core.contains_QMARK_.call(null,G__50666,new cljs.core.Keyword(null,"started?","started?",-1301062863));
}),(function (G__50666){
return cljs.core.contains_QMARK_.call(null,G__50666,new cljs.core.Keyword(null,"tick-time","tick-time",-255591164));
}),(function (G__50666){
return cljs.core.contains_QMARK_.call(null,G__50666,new cljs.core.Keyword(null,"progress","progress",244323547));
}),(function (G__50666){
return cljs.core.contains_QMARK_.call(null,G__50666,new cljs.core.Keyword(null,"duration","duration",1444101068));
})], null),(function (G__50666){
return (cljs.core.map_QMARK_.call(null,G__50666)) && (cljs.core.contains_QMARK_.call(null,G__50666,new cljs.core.Keyword(null,"started?","started?",-1301062863))) && (cljs.core.contains_QMARK_.call(null,G__50666,new cljs.core.Keyword(null,"tick-time","tick-time",-255591164))) && (cljs.core.contains_QMARK_.call(null,G__50666,new cljs.core.Keyword(null,"progress","progress",244323547))) && (cljs.core.contains_QMARK_.call(null,G__50666,new cljs.core.Keyword(null,"duration","duration",1444101068)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.timer","started?","utimer.timer/started?",149398364),new cljs.core.Keyword("utimer.timer","tick-time","utimer.timer/tick-time",37766333),new cljs.core.Keyword("utimer.timer","progress","utimer.timer/progress",1108589876),new cljs.core.Keyword("utimer.timer","duration","utimer.timer/duration",614380563)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"started?","started?",-1301062863),new cljs.core.Keyword(null,"tick-time","tick-time",-255591164),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"started?","started?",-1301062863))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"tick-time","tick-time",-255591164))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"progress","progress",244323547))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"duration","duration",1444101068)))], null),null])));
utimer.timer.new_timer = (function utimer$timer$new_timer(duration){
return utimer.timer.map__GT_Timer.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"started?","started?",-1301062863),false,new cljs.core.Keyword(null,"tick-time","tick-time",-255591164),cljs_time.core.now.call(null),new cljs.core.Keyword(null,"progress","progress",244323547),(0),new cljs.core.Keyword(null,"duration","duration",1444101068),duration], null));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("utimer.timer","new-timer","utimer.timer/new-timer",1371860230,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)),cljs.spec.alpha.fspec_impl.call(null,null,null,cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),null,null),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),null,null,null));
utimer.timer.start = (function utimer$timer$start(timer){
return cljs.core.assoc.call(null,timer,new cljs.core.Keyword(null,"tick-time","tick-time",-255591164),cljs_time.core.now.call(null),new cljs.core.Keyword(null,"started?","started?",-1301062863),true);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("utimer.timer","start","utimer.timer/start",437833483,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),null,null),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),null,null,null));
utimer.timer.stop = (function utimer$timer$stop(timer){
return cljs.core.assoc.call(null,timer,new cljs.core.Keyword(null,"started?","started?",-1301062863),false);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("utimer.timer","stop","utimer.timer/stop",833128224,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),null,null),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),null,null,null));
utimer.timer.reset = (function utimer$timer$reset(timer){
return cljs.core.assoc.call(null,timer,new cljs.core.Keyword(null,"progress","progress",244323547),(0));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("utimer.timer","reset","utimer.timer/reset",1283950052,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),null,null),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),null,null,null));
utimer.timer.change_duration = (function utimer$timer$change_duration(timer,duration){
return cljs.core.assoc.call(null,timer,new cljs.core.Keyword(null,"duration","duration",1444101068),duration);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("utimer.timer","change-duration","utimer.timer/change-duration",-1184650960,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword("utimer.timer","duration","utimer.timer/duration",614380563)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword("utimer.timer","duration","utimer.timer/duration",614380563)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),new cljs.core.Keyword("utimer.timer","duration","utimer.timer/duration",614380563)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),new cljs.core.Keyword("utimer.timer","duration","utimer.timer/duration",614380563)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword("utimer.timer","duration","utimer.timer/duration",614380563)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),null,null),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),null,null,null));
utimer.timer.tick = (function utimer$timer$tick(p__50667){
var map__50668 = p__50667;
var map__50668__$1 = ((((!((map__50668 == null)))?((((map__50668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50668):map__50668);
var timer = map__50668__$1;
var started_QMARK_ = cljs.core.get.call(null,map__50668__$1,new cljs.core.Keyword(null,"started?","started?",-1301062863));
var tick_time = cljs.core.get.call(null,map__50668__$1,new cljs.core.Keyword(null,"tick-time","tick-time",-255591164));
var progress = cljs.core.get.call(null,map__50668__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
if(cljs.core.truth_(started_QMARK_)){
var now = cljs_time.core.now.call(null);
return cljs.core.assoc.call(null,timer,new cljs.core.Keyword(null,"tick-time","tick-time",-255591164),now,new cljs.core.Keyword(null,"progress","progress",244323547),(progress + (cljs_time.coerce.to_long.call(null,now) - cljs_time.coerce.to_long.call(null,tick_time))));
} else {
return timer;
}
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("utimer.timer","tick","utimer.timer/tick",-42881346,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),null,null),new cljs.core.Keyword("utimer.timer","timer","utimer.timer/timer",-969846226),null,null,null));
