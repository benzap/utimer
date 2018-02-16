// Compiled by ClojureScript 1.9.671 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__45744_SHARP_,p2__45743_SHARP_){
return p2__45743_SHARP_.call(null,p1__45744_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__45746_SHARP_,p2__45745_SHARP_){
return p2__45745_SHARP_.call(null,old_state,p1__45746_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__35048__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__45747_SHARP_){
return p1__45747_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__35048__auto__)){
return or__35048__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__45749 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__45749,(0),null);
var next_state = cljs.core.nth.call(null,vec__45749,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__45748_SHARP_){
return p1__45748_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return ({":rum/state": cljs.core.volatile_BANG_.call(null,state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__45752__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__45752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45753__i = 0, G__45753__a = new Array(arguments.length -  0);
while (G__45753__i < G__45753__a.length) {G__45753__a[G__45753__i] = arguments[G__45753__i + 0]; ++G__45753__i;}
  args = new cljs.core.IndexedSeq(G__45753__a,0,null);
} 
return G__45752__delegate.call(this,args);};
G__45752.cljs$lang$maxFixedArity = 0;
G__45752.cljs$lang$applyTo = (function (arglist__45754){
var args = cljs.core.seq(arglist__45754);
return G__45752__delegate(args);
});
G__45752.cljs$core$IFn$_invoke$arity$variadic = G__45752__delegate;
return G__45752;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__45755__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__45755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45756__i = 0, G__45756__a = new Array(arguments.length -  0);
while (G__45756__i < G__45756__a.length) {G__45756__a[G__45756__i] = arguments[G__45756__i + 0]; ++G__45756__i;}
  args = new cljs.core.IndexedSeq(G__45756__a,0,null);
} 
return G__45755__delegate.call(this,args);};
G__45755.cljs$lang$maxFixedArity = 0;
G__45755.cljs$lang$applyTo = (function (arglist__45757){
var args = cljs.core.seq(arglist__45757);
return G__45755__delegate(args);
});
G__45755.cljs$core$IFn$_invoke$arity$variadic = G__45755__delegate;
return G__45755;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__45758__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__45758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45759__i = 0, G__45759__a = new Array(arguments.length -  0);
while (G__45759__i < G__45759__a.length) {G__45759__a[G__45759__i] = arguments[G__45759__i + 0]; ++G__45759__i;}
  args = new cljs.core.IndexedSeq(G__45759__a,0,null);
} 
return G__45758__delegate.call(this,args);};
G__45758.cljs$lang$maxFixedArity = 0;
G__45758.cljs$lang$applyTo = (function (arglist__45760){
var args = cljs.core.seq(arglist__45760);
return G__45758__delegate(args);
});
G__45758.cljs$core$IFn$_invoke$arity$variadic = G__45758__delegate;
return G__45758;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__35048__auto__ = (function (){var and__35036__auto__ = typeof window !== 'undefined';
if(and__35036__auto__){
var or__35048__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__35048__auto__)){
return or__35048__auto__;
} else {
var or__35048__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__35048__auto____$1)){
return or__35048__auto____$1;
} else {
var or__35048__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__35048__auto____$2)){
return or__35048__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__35036__auto__;
}
})();
if(cljs.core.truth_(or__35048__auto__)){
return or__35048__auto__;
} else {
return ((function (or__35048__auto__){
return (function (p1__45761_SHARP_){
return setTimeout(p1__45761_SHARP_,(16));
});
;})(or__35048__auto__))
}
})();
rum.core.batch = (function (){var or__35048__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__35048__auto__)){
return or__35048__auto__;
} else {
var or__35048__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__35048__auto____$1)){
return or__35048__auto____$1;
} else {
return ((function (or__35048__auto____$1,or__35048__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__35048__auto____$1,or__35048__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__45762 = cljs.core.seq.call(null,queue);
var chunk__45764 = null;
var count__45765 = (0);
var i__45766 = (0);
while(true){
if((i__45766 < count__45765)){
var comp = cljs.core._nth.call(null,chunk__45764,i__45766);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__45768 = seq__45762;
var G__45769 = chunk__45764;
var G__45770 = count__45765;
var G__45771 = (i__45766 + (1));
seq__45762 = G__45768;
chunk__45764 = G__45769;
count__45765 = G__45770;
i__45766 = G__45771;
continue;
} else {
var G__45772 = seq__45762;
var G__45773 = chunk__45764;
var G__45774 = count__45765;
var G__45775 = (i__45766 + (1));
seq__45762 = G__45772;
chunk__45764 = G__45773;
count__45765 = G__45774;
i__45766 = G__45775;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45762);
if(temp__4657__auto__){
var seq__45762__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45762__$1)){
var c__35868__auto__ = cljs.core.chunk_first.call(null,seq__45762__$1);
var G__45776 = cljs.core.chunk_rest.call(null,seq__45762__$1);
var G__45777 = c__35868__auto__;
var G__45778 = cljs.core.count.call(null,c__35868__auto__);
var G__45779 = (0);
seq__45762 = G__45776;
chunk__45764 = G__45777;
count__45765 = G__45778;
i__45766 = G__45779;
continue;
} else {
var comp = cljs.core.first.call(null,seq__45762__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__45780 = cljs.core.next.call(null,seq__45762__$1);
var G__45781 = null;
var G__45782 = (0);
var G__45783 = (0);
seq__45762 = G__45780;
chunk__45764 = G__45781;
count__45765 = G__45782;
i__45766 = G__45783;
continue;
} else {
var G__45784 = cljs.core.next.call(null,seq__45762__$1);
var G__45785 = null;
var G__45786 = (0);
var G__45787 = (0);
seq__45762 = G__45784;
chunk__45764 = G__45785;
count__45765 = G__45786;
i__45766 = G__45787;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__45789 = arguments.length;
switch (G__45789) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_45791 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__45792 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__45792,(0),null);
var next_state = cljs.core.nth.call(null,vec__45792,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__45795_45807 = cljs.core.seq.call(null,old_reactions);
var chunk__45796_45808 = null;
var count__45797_45809 = (0);
var i__45798_45810 = (0);
while(true){
if((i__45798_45810 < count__45797_45809)){
var ref_45811 = cljs.core._nth.call(null,chunk__45796_45808,i__45798_45810);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_45811)){
} else {
cljs.core.remove_watch.call(null,ref_45811,key);
}

var G__45812 = seq__45795_45807;
var G__45813 = chunk__45796_45808;
var G__45814 = count__45797_45809;
var G__45815 = (i__45798_45810 + (1));
seq__45795_45807 = G__45812;
chunk__45796_45808 = G__45813;
count__45797_45809 = G__45814;
i__45798_45810 = G__45815;
continue;
} else {
var temp__4657__auto___45816 = cljs.core.seq.call(null,seq__45795_45807);
if(temp__4657__auto___45816){
var seq__45795_45817__$1 = temp__4657__auto___45816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45795_45817__$1)){
var c__35868__auto___45818 = cljs.core.chunk_first.call(null,seq__45795_45817__$1);
var G__45819 = cljs.core.chunk_rest.call(null,seq__45795_45817__$1);
var G__45820 = c__35868__auto___45818;
var G__45821 = cljs.core.count.call(null,c__35868__auto___45818);
var G__45822 = (0);
seq__45795_45807 = G__45819;
chunk__45796_45808 = G__45820;
count__45797_45809 = G__45821;
i__45798_45810 = G__45822;
continue;
} else {
var ref_45823 = cljs.core.first.call(null,seq__45795_45817__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_45823)){
} else {
cljs.core.remove_watch.call(null,ref_45823,key);
}

var G__45824 = cljs.core.next.call(null,seq__45795_45817__$1);
var G__45825 = null;
var G__45826 = (0);
var G__45827 = (0);
seq__45795_45807 = G__45824;
chunk__45796_45808 = G__45825;
count__45797_45809 = G__45826;
i__45798_45810 = G__45827;
continue;
}
} else {
}
}
break;
}

var seq__45799_45828 = cljs.core.seq.call(null,new_reactions);
var chunk__45800_45829 = null;
var count__45801_45830 = (0);
var i__45802_45831 = (0);
while(true){
if((i__45802_45831 < count__45801_45830)){
var ref_45832 = cljs.core._nth.call(null,chunk__45800_45829,i__45802_45831);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_45832)){
} else {
cljs.core.add_watch.call(null,ref_45832,key,((function (seq__45799_45828,chunk__45800_45829,count__45801_45830,i__45802_45831,ref_45832,comp,old_reactions,vec__45792,dom,next_state,new_reactions,key,_STAR_reactions_STAR_45791){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__45799_45828,chunk__45800_45829,count__45801_45830,i__45802_45831,ref_45832,comp,old_reactions,vec__45792,dom,next_state,new_reactions,key,_STAR_reactions_STAR_45791))
);
}

var G__45833 = seq__45799_45828;
var G__45834 = chunk__45800_45829;
var G__45835 = count__45801_45830;
var G__45836 = (i__45802_45831 + (1));
seq__45799_45828 = G__45833;
chunk__45800_45829 = G__45834;
count__45801_45830 = G__45835;
i__45802_45831 = G__45836;
continue;
} else {
var temp__4657__auto___45837 = cljs.core.seq.call(null,seq__45799_45828);
if(temp__4657__auto___45837){
var seq__45799_45838__$1 = temp__4657__auto___45837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45799_45838__$1)){
var c__35868__auto___45839 = cljs.core.chunk_first.call(null,seq__45799_45838__$1);
var G__45840 = cljs.core.chunk_rest.call(null,seq__45799_45838__$1);
var G__45841 = c__35868__auto___45839;
var G__45842 = cljs.core.count.call(null,c__35868__auto___45839);
var G__45843 = (0);
seq__45799_45828 = G__45840;
chunk__45800_45829 = G__45841;
count__45801_45830 = G__45842;
i__45802_45831 = G__45843;
continue;
} else {
var ref_45844 = cljs.core.first.call(null,seq__45799_45838__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_45844)){
} else {
cljs.core.add_watch.call(null,ref_45844,key,((function (seq__45799_45828,chunk__45800_45829,count__45801_45830,i__45802_45831,ref_45844,seq__45799_45838__$1,temp__4657__auto___45837,comp,old_reactions,vec__45792,dom,next_state,new_reactions,key,_STAR_reactions_STAR_45791){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__45799_45828,chunk__45800_45829,count__45801_45830,i__45802_45831,ref_45844,seq__45799_45838__$1,temp__4657__auto___45837,comp,old_reactions,vec__45792,dom,next_state,new_reactions,key,_STAR_reactions_STAR_45791))
);
}

var G__45845 = cljs.core.next.call(null,seq__45799_45838__$1);
var G__45846 = null;
var G__45847 = (0);
var G__45848 = (0);
seq__45799_45828 = G__45845;
chunk__45800_45829 = G__45846;
count__45801_45830 = G__45847;
i__45802_45831 = G__45848;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_45791;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_45849 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__45803_45850 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__45804_45851 = null;
var count__45805_45852 = (0);
var i__45806_45853 = (0);
while(true){
if((i__45806_45853 < count__45805_45852)){
var ref_45854 = cljs.core._nth.call(null,chunk__45804_45851,i__45806_45853);
cljs.core.remove_watch.call(null,ref_45854,key_45849);

var G__45855 = seq__45803_45850;
var G__45856 = chunk__45804_45851;
var G__45857 = count__45805_45852;
var G__45858 = (i__45806_45853 + (1));
seq__45803_45850 = G__45855;
chunk__45804_45851 = G__45856;
count__45805_45852 = G__45857;
i__45806_45853 = G__45858;
continue;
} else {
var temp__4657__auto___45859 = cljs.core.seq.call(null,seq__45803_45850);
if(temp__4657__auto___45859){
var seq__45803_45860__$1 = temp__4657__auto___45859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45803_45860__$1)){
var c__35868__auto___45861 = cljs.core.chunk_first.call(null,seq__45803_45860__$1);
var G__45862 = cljs.core.chunk_rest.call(null,seq__45803_45860__$1);
var G__45863 = c__35868__auto___45861;
var G__45864 = cljs.core.count.call(null,c__35868__auto___45861);
var G__45865 = (0);
seq__45803_45850 = G__45862;
chunk__45804_45851 = G__45863;
count__45805_45852 = G__45864;
i__45806_45853 = G__45865;
continue;
} else {
var ref_45866 = cljs.core.first.call(null,seq__45803_45860__$1);
cljs.core.remove_watch.call(null,ref_45866,key_45849);

var G__45867 = cljs.core.next.call(null,seq__45803_45860__$1);
var G__45868 = null;
var G__45869 = (0);
var G__45870 = (0);
seq__45803_45850 = G__45867;
chunk__45804_45851 = G__45868;
count__45805_45852 = G__45869;
i__45806_45853 = G__45870;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*reactions*")].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__36180__auto__ = [];
var len__36173__auto___45877 = arguments.length;
var i__36174__auto___45878 = (0);
while(true){
if((i__36174__auto___45878 < len__36173__auto___45877)){
args__36180__auto__.push((arguments[i__36174__auto___45878]));

var G__45879 = (i__36174__auto___45878 + (1));
i__36174__auto___45878 = G__45879;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((2) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36181__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__45874){
var map__45875 = p__45874;
var map__45875__$1 = ((((!((map__45875 == null)))?((((map__45875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45875.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45875):map__45875);
var options = map__45875__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq45871){
var G__45872 = cljs.core.first.call(null,seq45871);
var seq45871__$1 = cljs.core.next.call(null,seq45871);
var G__45873 = cljs.core.first.call(null,seq45871__$1);
var seq45871__$2 = cljs.core.next.call(null,seq45871__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__45872,G__45873,seq45871__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__36180__auto__ = [];
var len__36173__auto___45883 = arguments.length;
var i__36174__auto___45884 = (0);
while(true){
if((i__36174__auto___45884 < len__36173__auto___45883)){
args__36180__auto__.push((arguments[i__36174__auto___45884]));

var G__45885 = (i__36174__auto___45884 + (1));
i__36174__auto___45884 = G__45885;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((2) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36181__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq45880){
var G__45881 = cljs.core.first.call(null,seq45880);
var seq45880__$1 = cljs.core.next.call(null,seq45880);
var G__45882 = cljs.core.first.call(null,seq45880__$1);
var seq45880__$2 = cljs.core.next.call(null,seq45880__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__45881,G__45882,seq45880__$2);
});

