// Compiled by ClojureScript 1.9.671 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__40211__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__40208 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__40209 = cljs.core.seq.call(null,vec__40208);
var first__40210 = cljs.core.first.call(null,seq__40209);
var seq__40209__$1 = cljs.core.next.call(null,seq__40209);
var tag = first__40210;
var body = seq__40209__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__40211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40212__i = 0, G__40212__a = new Array(arguments.length -  0);
while (G__40212__i < G__40212__a.length) {G__40212__a[G__40212__i] = arguments[G__40212__i + 0]; ++G__40212__i;}
  args = new cljs.core.IndexedSeq(G__40212__a,0,null);
} 
return G__40211__delegate.call(this,args);};
G__40211.cljs$lang$maxFixedArity = 0;
G__40211.cljs$lang$applyTo = (function (arglist__40213){
var args = cljs.core.seq(arglist__40213);
return G__40211__delegate(args);
});
G__40211.cljs$core$IFn$_invoke$arity$variadic = G__40211__delegate;
return G__40211;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__35837__auto__ = (function sablono$core$update_arglists_$_iter__40214(s__40215){
return (new cljs.core.LazySeq(null,(function (){
var s__40215__$1 = s__40215;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40215__$1);
if(temp__4657__auto__){
var s__40215__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40215__$2)){
var c__35835__auto__ = cljs.core.chunk_first.call(null,s__40215__$2);
var size__35836__auto__ = cljs.core.count.call(null,c__35835__auto__);
var b__40217 = cljs.core.chunk_buffer.call(null,size__35836__auto__);
if((function (){var i__40216 = (0);
while(true){
if((i__40216 < size__35836__auto__)){
var args = cljs.core._nth.call(null,c__35835__auto__,i__40216);
cljs.core.chunk_append.call(null,b__40217,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__40218 = (i__40216 + (1));
i__40216 = G__40218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40217),sablono$core$update_arglists_$_iter__40214.call(null,cljs.core.chunk_rest.call(null,s__40215__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40217),null);
}
} else {
var args = cljs.core.first.call(null,s__40215__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__40214.call(null,cljs.core.rest.call(null,s__40215__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35837__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__36180__auto__ = [];
var len__36173__auto___40224 = arguments.length;
var i__36174__auto___40225 = (0);
while(true){
if((i__36174__auto___40225 < len__36173__auto___40224)){
args__36180__auto__.push((arguments[i__36174__auto___40225]));

var G__40226 = (i__36174__auto___40225 + (1));
i__36174__auto___40225 = G__40226;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((0) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__36181__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__35837__auto__ = (function sablono$core$iter__40220(s__40221){
return (new cljs.core.LazySeq(null,(function (){
var s__40221__$1 = s__40221;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40221__$1);
if(temp__4657__auto__){
var s__40221__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40221__$2)){
var c__35835__auto__ = cljs.core.chunk_first.call(null,s__40221__$2);
var size__35836__auto__ = cljs.core.count.call(null,c__35835__auto__);
var b__40223 = cljs.core.chunk_buffer.call(null,size__35836__auto__);
if((function (){var i__40222 = (0);
while(true){
if((i__40222 < size__35836__auto__)){
var style = cljs.core._nth.call(null,c__35835__auto__,i__40222);
cljs.core.chunk_append.call(null,b__40223,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__40227 = (i__40222 + (1));
i__40222 = G__40227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40223),sablono$core$iter__40220.call(null,cljs.core.chunk_rest.call(null,s__40221__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40223),null);
}
} else {
var style = cljs.core.first.call(null,s__40221__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__40220.call(null,cljs.core.rest.call(null,s__40221__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35837__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq40219){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40219));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to40228 = (function sablono$core$link_to40228(var_args){
var args__36180__auto__ = [];
var len__36173__auto___40231 = arguments.length;
var i__36174__auto___40232 = (0);
while(true){
if((i__36174__auto___40232 < len__36173__auto___40231)){
args__36180__auto__.push((arguments[i__36174__auto___40232]));

var G__40233 = (i__36174__auto___40232 + (1));
i__36174__auto___40232 = G__40233;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((1) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to40228.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36181__auto__);
});

sablono.core.link_to40228.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to40228.cljs$lang$maxFixedArity = (1);

sablono.core.link_to40228.cljs$lang$applyTo = (function (seq40229){
var G__40230 = cljs.core.first.call(null,seq40229);
var seq40229__$1 = cljs.core.next.call(null,seq40229);
return sablono.core.link_to40228.cljs$core$IFn$_invoke$arity$variadic(G__40230,seq40229__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to40228);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to40234 = (function sablono$core$mail_to40234(var_args){
var args__36180__auto__ = [];
var len__36173__auto___40241 = arguments.length;
var i__36174__auto___40242 = (0);
while(true){
if((i__36174__auto___40242 < len__36173__auto___40241)){
args__36180__auto__.push((arguments[i__36174__auto___40242]));

var G__40243 = (i__36174__auto___40242 + (1));
i__36174__auto___40242 = G__40243;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((1) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to40234.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36181__auto__);
});

sablono.core.mail_to40234.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__40237){
var vec__40238 = p__40237;
var content = cljs.core.nth.call(null,vec__40238,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__35048__auto__ = content;
if(cljs.core.truth_(or__35048__auto__)){
return or__35048__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to40234.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to40234.cljs$lang$applyTo = (function (seq40235){
var G__40236 = cljs.core.first.call(null,seq40235);
var seq40235__$1 = cljs.core.next.call(null,seq40235);
return sablono.core.mail_to40234.cljs$core$IFn$_invoke$arity$variadic(G__40236,seq40235__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to40234);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list40244 = (function sablono$core$unordered_list40244(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__35837__auto__ = (function sablono$core$unordered_list40244_$_iter__40245(s__40246){
return (new cljs.core.LazySeq(null,(function (){
var s__40246__$1 = s__40246;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40246__$1);
if(temp__4657__auto__){
var s__40246__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40246__$2)){
var c__35835__auto__ = cljs.core.chunk_first.call(null,s__40246__$2);
var size__35836__auto__ = cljs.core.count.call(null,c__35835__auto__);
var b__40248 = cljs.core.chunk_buffer.call(null,size__35836__auto__);
if((function (){var i__40247 = (0);
while(true){
if((i__40247 < size__35836__auto__)){
var x = cljs.core._nth.call(null,c__35835__auto__,i__40247);
cljs.core.chunk_append.call(null,b__40248,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__40249 = (i__40247 + (1));
i__40247 = G__40249;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40248),sablono$core$unordered_list40244_$_iter__40245.call(null,cljs.core.chunk_rest.call(null,s__40246__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40248),null);
}
} else {
var x = cljs.core.first.call(null,s__40246__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list40244_$_iter__40245.call(null,cljs.core.rest.call(null,s__40246__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35837__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list40244);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list40250 = (function sablono$core$ordered_list40250(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__35837__auto__ = (function sablono$core$ordered_list40250_$_iter__40251(s__40252){
return (new cljs.core.LazySeq(null,(function (){
var s__40252__$1 = s__40252;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40252__$1);
if(temp__4657__auto__){
var s__40252__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40252__$2)){
var c__35835__auto__ = cljs.core.chunk_first.call(null,s__40252__$2);
var size__35836__auto__ = cljs.core.count.call(null,c__35835__auto__);
var b__40254 = cljs.core.chunk_buffer.call(null,size__35836__auto__);
if((function (){var i__40253 = (0);
while(true){
if((i__40253 < size__35836__auto__)){
var x = cljs.core._nth.call(null,c__35835__auto__,i__40253);
cljs.core.chunk_append.call(null,b__40254,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__40255 = (i__40253 + (1));
i__40253 = G__40255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40254),sablono$core$ordered_list40250_$_iter__40251.call(null,cljs.core.chunk_rest.call(null,s__40252__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40254),null);
}
} else {
var x = cljs.core.first.call(null,s__40252__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list40250_$_iter__40251.call(null,cljs.core.rest.call(null,s__40252__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35837__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list40250);
/**
 * Create an image element.
 */
sablono.core.image40256 = (function sablono$core$image40256(var_args){
var G__40258 = arguments.length;
switch (G__40258) {
case 1:
return sablono.core.image40256.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image40256.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image40256.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image40256.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image40256.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image40256);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__40260_SHARP_,p2__40261_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40260_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__40261_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__40262_SHARP_,p2__40263_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40262_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__40263_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35048__auto__ = value;
if(cljs.core.truth_(or__35048__auto__)){
return or__35048__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field40264 = (function sablono$core$color_field40264(var_args){
var G__40266 = arguments.length;
switch (G__40266) {
case 1:
return sablono.core.color_field40264.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field40264.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field40264.cljs$core$IFn$_invoke$arity$1 = (function (name__40198__auto__){
return sablono.core.color_field40264.call(null,name__40198__auto__,null);
});

sablono.core.color_field40264.cljs$core$IFn$_invoke$arity$2 = (function (name__40198__auto__,value__40199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__40198__auto__,value__40199__auto__);
});

sablono.core.color_field40264.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field40264);

/**
 * Creates a date input field.
 */
sablono.core.date_field40267 = (function sablono$core$date_field40267(var_args){
var G__40269 = arguments.length;
switch (G__40269) {
case 1:
return sablono.core.date_field40267.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field40267.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field40267.cljs$core$IFn$_invoke$arity$1 = (function (name__40198__auto__){
return sablono.core.date_field40267.call(null,name__40198__auto__,null);
});

sablono.core.date_field40267.cljs$core$IFn$_invoke$arity$2 = (function (name__40198__auto__,value__40199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__40198__auto__,value__40199__auto__);
});

sablono.core.date_field40267.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field40267);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field40270 = (function sablono$core$datetime_field40270(var_args){
var G__40272 = arguments.length;
switch (G__40272) {
case 1:
return sablono.core.datetime_field40270.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field40270.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field40270.cljs$core$IFn$_invoke$arity$1 = (function (name__40198__auto__){
return sablono.core.datetime_field40270.call(null,name__40198__auto__,null);
});

sablono.core.datetime_field40270.cljs$core$IFn$_invoke$arity$2 = (function (name__40198__auto__,value__40199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__40198__auto__,value__40199__auto__);
});

sablono.core.datetime_field40270.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field40270);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field40273 = (function sablono$core$datetime_local_field40273(var_args){
var G__40275 = arguments.length;
switch (G__40275) {
case 1:
return sablono.core.datetime_local_field40273.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field40273.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field40273.cljs$core$IFn$_invoke$arity$1 = (function (name__40198__auto__){
return sablono.core.datetime_local_field40273.call(null,name__40198__auto__,null);
});

sablono.core.datetime_local_field40273.cljs$core$IFn$_invoke$arity$2 = (function (name__40198__auto__,value__40199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__40198__auto__,value__40199__auto__);
});

sablono.core.datetime_local_field40273.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field40273);

/**
 * Creates a email input field.
 */
sablono.core.email_field40276 = (function sablono$core$email_field40276(var_args){
var G__40278 = arguments.length;
switch (G__40278) {
case 1:
return sablono.core.email_field40276.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field40276.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field40276.cljs$core$IFn$_invoke$arity$1 = (function (name__40198__auto__){
return sablono.core.email_field40276.call(null,name__40198__auto__,null);
});

sablono.core.email_field40276.cljs$core$IFn$_invoke$arity$2 = (function (name__40198__auto__,value__40199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__40198__auto__,value__40199__auto__);
});

sablono.core.email_field40276.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field40276);

/**
 * Creates a file input field.
 */
sablono.core.file_field40279 = (function sablono$core$file_field40279(var_args){
var G__40281 = arguments.length;
switch (G__40281) {
case 1:
return sablono.core.file_field40279.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field40279.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field40279.cljs$core$IFn$_invoke$arity$1 = (function (name__40198__auto__){
return sablono.core.file_field40279.call(null,name__40198__auto__,null);
});

sablono.core.file_field40279.cljs$core$IFn$_invoke$arity$2 = (function (name__40198__auto__,value__40199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__40198__auto__,value__40199__auto__);
});

sablono.core.file_field40279.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field40279);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field40282 = (function sablono$core$hidden_field40282(var_args){
var G__40284 = arguments.length;
switch (G__40284) {
case 1:
return sablono.core.hidden_field40282.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field40282.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field40282.cljs$core$IFn$_invoke$arity$1 = (function (name__40198__auto__){
return sablono.core.hidden_field40282.call(null,name__40198__auto__,null);
});

sablono.core.hidden_field40282.cljs$core$IFn$_invoke$arity$2 = (function (name__40198__auto__,value__40199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__40198__auto__,value__40199__auto__);
});

sablono.core.hidden_field40282.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field40282);

/**
 * Creates a month input field.
 */
sablono.core.month_field40285 = (function sablono$core$month_field40285(var_args){
var G__40287 = arguments.length;
switch (G__40287) {
case 1:
return sablono.core.month_field40285.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field40285.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field40285.cljs$core$IFn$_invoke$arity$1 = (function (name__40198__auto__){
return sablono.core.month_field40285.call(null,name__40198__auto__,null);
});

sablono.core.month_field40285.cljs$core$IFn$_invoke$arity$2 = (function (name__40198__auto__,value__40199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__40198__auto__,value__40199__auto__);
});

sablono.core.month_field40285.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field40285);

/**
 * Creates a number input field.
 */
sablono.core.number_field40288 = (function sablono$core$number_field40288(var_args){
var G__40290 = arguments.length;
switch (G__40290) {
case 1:
return sablono.core.number_field40288.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field40288.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field40288.cljs$core$IFn$_invoke$arity$1 = (function (name__40198__auto__){
return sablono.core.number_field40288.call(null,name__40198__auto__,null);
});

sablono.core.number_field40288.cljs$core$IFn$_invoke$arity$2 = (function (name__40198__auto__,value__40199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__40198__auto__,value__40199__auto__);
});

sablono.core.number_field40288.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field40288);

/**
 * Creates a password input field.
 */
sablono.core.password_field40291 = (function sablono$core$password_field40291(var_args){
var G__40293 = arguments.length;
switch (G__40293) {
case 1:
return sablono.core.password_field40291.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field40291.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field40291.cljs$core$IFn$_invoke$arity$1 = (function (name__40198__auto__){
return sablono.core.password_field40291.call(null,name__40198__auto__,null);
});

sablono.core.password_field40291.cljs$core$IFn$_invoke$arity$2 = (function (name__40198__auto__,value__40199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__40198__auto__,value__40199__auto__);
});

sablono.core.password_field40291.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field40291);

/**
 * Creates a range input field.
 */
sablono.core.range_field40294 = (function sablono$core$range_field40294(var_args){
var G__40296 = arguments.length;
switch (G__40296) {
case 1:
return sablono.core.range_field40294.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field40294.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field40294.cljs$core$IFn$_invoke$arity$1 = (function (name__40198__auto__){
return sablono.core.range_field40294.call(null,name__40198__auto__,null);
});

sablono.core.range_field40294.cljs$core$IFn$_invoke$arity$2 = (function (name__40198__auto__,value__40199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__40198__auto__,value__40199__auto__);
});

sablono.core.range_field40294.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field40294);

/**
 * Creates a search input field.
 */
sablono.core.search_field40297 = (function sablono$core$search_field40297(var_args){
var G__40299 = arguments.length;
switch (G__40299) {
case 1:
return sablono.core.search_field40297.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field40297.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field40297.cljs$core$IFn$_invoke$arity$1 = (function (name__40198__auto__){
return sablono.core.search_field40297.call(null,name__40198__auto__,null);
});

sablono.core.search_field40297.cljs$core$IFn$_invoke$arity$2 = (function (name__40198__auto__,value__40199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__40198__auto__,value__40199__auto__);
});

sablono.core.search_field40297.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field40297);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field40300 = (function sablono$core$tel_field40300(var_args){
var G__40302 = arguments.length;
switch (G__40302) {
case 1:
return sablono.core.tel_field40300.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field40300.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field40300.cljs$core$IFn$_invoke$arity$1 = (function (name__40198__auto__){
return sablono.core.tel_field40300.call(null,name__40198__auto__,null);
});

sablono.core.tel_field40300.cljs$core$IFn$_invoke$arity$2 = (function (name__40198__auto__,value__40199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__40198__auto__,value__40199__auto__);
});

sablono.core.tel_field40300.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field40300);

/**
 * Creates a text input field.
 */
sablono.core.text_field40303 = (function sablono$core$text_field40303(var_args){
var G__40305 = arguments.length;
switch (G__40305) {
case 1:
return sablono.core.text_field40303.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field40303.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field40303.cljs$core$IFn$_invoke$arity$1 = (function (name__40198__auto__){
return sablono.core.text_field40303.call(null,name__40198__auto__,null);
});

sablono.core.text_field40303.cljs$core$IFn$_invoke$arity$2 = (function (name__40198__auto__,value__40199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__40198__auto__,value__40199__auto__);
});

sablono.core.text_field40303.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field40303);

/**
 * Creates a time input field.
 */
sablono.core.time_field40306 = (function sablono$core$time_field40306(var_args){
var G__40308 = arguments.length;
switch (G__40308) {
case 1:
return sablono.core.time_field40306.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field40306.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field40306.cljs$core$IFn$_invoke$arity$1 = (function (name__40198__auto__){
return sablono.core.time_field40306.call(null,name__40198__auto__,null);
});

sablono.core.time_field40306.cljs$core$IFn$_invoke$arity$2 = (function (name__40198__auto__,value__40199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__40198__auto__,value__40199__auto__);
});

sablono.core.time_field40306.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field40306);

/**
 * Creates a url input field.
 */
sablono.core.url_field40309 = (function sablono$core$url_field40309(var_args){
var G__40311 = arguments.length;
switch (G__40311) {
case 1:
return sablono.core.url_field40309.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field40309.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field40309.cljs$core$IFn$_invoke$arity$1 = (function (name__40198__auto__){
return sablono.core.url_field40309.call(null,name__40198__auto__,null);
});

sablono.core.url_field40309.cljs$core$IFn$_invoke$arity$2 = (function (name__40198__auto__,value__40199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__40198__auto__,value__40199__auto__);
});

sablono.core.url_field40309.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field40309);

/**
 * Creates a week input field.
 */
sablono.core.week_field40312 = (function sablono$core$week_field40312(var_args){
var G__40314 = arguments.length;
switch (G__40314) {
case 1:
return sablono.core.week_field40312.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field40312.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field40312.cljs$core$IFn$_invoke$arity$1 = (function (name__40198__auto__){
return sablono.core.week_field40312.call(null,name__40198__auto__,null);
});

sablono.core.week_field40312.cljs$core$IFn$_invoke$arity$2 = (function (name__40198__auto__,value__40199__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__40198__auto__,value__40199__auto__);
});

sablono.core.week_field40312.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field40312);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box40332 = (function sablono$core$check_box40332(var_args){
var G__40334 = arguments.length;
switch (G__40334) {
case 1:
return sablono.core.check_box40332.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box40332.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box40332.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box40332.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box40332.call(null,name,null);
});

sablono.core.check_box40332.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box40332.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box40332.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35048__auto__ = value;
if(cljs.core.truth_(or__35048__auto__)){
return or__35048__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box40332.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box40332);
/**
 * Creates a radio button.
 */
sablono.core.radio_button40336 = (function sablono$core$radio_button40336(var_args){
var G__40338 = arguments.length;
switch (G__40338) {
case 1:
return sablono.core.radio_button40336.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button40336.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button40336.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button40336.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button40336.call(null,group,null);
});

sablono.core.radio_button40336.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button40336.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button40336.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35048__auto__ = value;
if(cljs.core.truth_(or__35048__auto__)){
return or__35048__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button40336.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button40336);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options40340 = (function sablono$core$select_options40340(coll){
var iter__35837__auto__ = (function sablono$core$select_options40340_$_iter__40341(s__40342){
return (new cljs.core.LazySeq(null,(function (){
var s__40342__$1 = s__40342;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40342__$1);
if(temp__4657__auto__){
var s__40342__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40342__$2)){
var c__35835__auto__ = cljs.core.chunk_first.call(null,s__40342__$2);
var size__35836__auto__ = cljs.core.count.call(null,c__35835__auto__);
var b__40344 = cljs.core.chunk_buffer.call(null,size__35836__auto__);
if((function (){var i__40343 = (0);
while(true){
if((i__40343 < size__35836__auto__)){
var x = cljs.core._nth.call(null,c__35835__auto__,i__40343);
cljs.core.chunk_append.call(null,b__40344,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__40345 = x;
var text = cljs.core.nth.call(null,vec__40345,(0),null);
var val = cljs.core.nth.call(null,vec__40345,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__40345,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options40340.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__40351 = (i__40343 + (1));
i__40343 = G__40351;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40344),sablono$core$select_options40340_$_iter__40341.call(null,cljs.core.chunk_rest.call(null,s__40342__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40344),null);
}
} else {
var x = cljs.core.first.call(null,s__40342__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__40348 = x;
var text = cljs.core.nth.call(null,vec__40348,(0),null);
var val = cljs.core.nth.call(null,vec__40348,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__40348,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options40340.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options40340_$_iter__40341.call(null,cljs.core.rest.call(null,s__40342__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35837__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options40340);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down40352 = (function sablono$core$drop_down40352(var_args){
var G__40354 = arguments.length;
switch (G__40354) {
case 2:
return sablono.core.drop_down40352.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down40352.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down40352.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down40352.call(null,name,options,null);
});

sablono.core.drop_down40352.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down40352.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down40352);
/**
 * Creates a text area element.
 */
sablono.core.text_area40356 = (function sablono$core$text_area40356(var_args){
var G__40358 = arguments.length;
switch (G__40358) {
case 1:
return sablono.core.text_area40356.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area40356.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area40356.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area40356.call(null,name,null);
});

sablono.core.text_area40356.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35048__auto__ = value;
if(cljs.core.truth_(or__35048__auto__)){
return or__35048__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area40356.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area40356);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label40360 = (function sablono$core$label40360(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label40360);
/**
 * Creates a submit button.
 */
sablono.core.submit_button40361 = (function sablono$core$submit_button40361(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button40361);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button40362 = (function sablono$core$reset_button40362(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button40362);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to40363 = (function sablono$core$form_to40363(var_args){
var args__36180__auto__ = [];
var len__36173__auto___40370 = arguments.length;
var i__36174__auto___40371 = (0);
while(true){
if((i__36174__auto___40371 < len__36173__auto___40370)){
args__36180__auto__.push((arguments[i__36174__auto___40371]));

var G__40372 = (i__36174__auto___40371 + (1));
i__36174__auto___40371 = G__40372;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((1) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to40363.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36181__auto__);
});

sablono.core.form_to40363.cljs$core$IFn$_invoke$arity$variadic = (function (p__40366,body){
var vec__40367 = p__40366;
var method = cljs.core.nth.call(null,vec__40367,(0),null);
var action = cljs.core.nth.call(null,vec__40367,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to40363.cljs$lang$maxFixedArity = (1);

sablono.core.form_to40363.cljs$lang$applyTo = (function (seq40364){
var G__40365 = cljs.core.first.call(null,seq40364);
var seq40364__$1 = cljs.core.next.call(null,seq40364);
return sablono.core.form_to40363.cljs$core$IFn$_invoke$arity$variadic(G__40365,seq40364__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to40363);
