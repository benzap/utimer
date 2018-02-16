// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__48364 = arguments.length;
switch (G__48364) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async48365 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48365 = (function (f,blockable,meta48366){
this.f = f;
this.blockable = blockable;
this.meta48366 = meta48366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48367,meta48366__$1){
var self__ = this;
var _48367__$1 = this;
return (new cljs.core.async.t_cljs$core$async48365(self__.f,self__.blockable,meta48366__$1));
});

cljs.core.async.t_cljs$core$async48365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48367){
var self__ = this;
var _48367__$1 = this;
return self__.meta48366;
});

cljs.core.async.t_cljs$core$async48365.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async48365.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async48365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async48365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48366","meta48366",-57007343,null)], null);
});

cljs.core.async.t_cljs$core$async48365.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48365";

cljs.core.async.t_cljs$core$async48365.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"cljs.core.async/t_cljs$core$async48365");
});

cljs.core.async.__GT_t_cljs$core$async48365 = (function cljs$core$async$__GT_t_cljs$core$async48365(f__$1,blockable__$1,meta48366){
return (new cljs.core.async.t_cljs$core$async48365(f__$1,blockable__$1,meta48366));
});

}

return (new cljs.core.async.t_cljs$core$async48365(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__48371 = arguments.length;
switch (G__48371) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__48374 = arguments.length;
switch (G__48374) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__48377 = arguments.length;
switch (G__48377) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_48379 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_48379);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_48379,ret){
return (function (){
return fn1.call(null,val_48379);
});})(val_48379,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__48381 = arguments.length;
switch (G__48381) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__35972__auto___48383 = n;
var x_48384 = (0);
while(true){
if((x_48384 < n__35972__auto___48383)){
(a[x_48384] = (0));

var G__48385 = (x_48384 + (1));
x_48384 = G__48385;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__48386 = (i + (1));
i = G__48386;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async48387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48387 = (function (flag,meta48388){
this.flag = flag;
this.meta48388 = meta48388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_48389,meta48388__$1){
var self__ = this;
var _48389__$1 = this;
return (new cljs.core.async.t_cljs$core$async48387(self__.flag,meta48388__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async48387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_48389){
var self__ = this;
var _48389__$1 = this;
return self__.meta48388;
});})(flag))
;

cljs.core.async.t_cljs$core$async48387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async48387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async48387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async48387.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48388","meta48388",571434327,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async48387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48387";

cljs.core.async.t_cljs$core$async48387.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"cljs.core.async/t_cljs$core$async48387");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async48387 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async48387(flag__$1,meta48388){
return (new cljs.core.async.t_cljs$core$async48387(flag__$1,meta48388));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async48387(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async48390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48390 = (function (flag,cb,meta48391){
this.flag = flag;
this.cb = cb;
this.meta48391 = meta48391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48392,meta48391__$1){
var self__ = this;
var _48392__$1 = this;
return (new cljs.core.async.t_cljs$core$async48390(self__.flag,self__.cb,meta48391__$1));
});

cljs.core.async.t_cljs$core$async48390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48392){
var self__ = this;
var _48392__$1 = this;
return self__.meta48391;
});

cljs.core.async.t_cljs$core$async48390.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48390.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async48390.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async48390.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async48390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48391","meta48391",-1155643946,null)], null);
});

cljs.core.async.t_cljs$core$async48390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48390";

cljs.core.async.t_cljs$core$async48390.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"cljs.core.async/t_cljs$core$async48390");
});

cljs.core.async.__GT_t_cljs$core$async48390 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async48390(flag__$1,cb__$1,meta48391){
return (new cljs.core.async.t_cljs$core$async48390(flag__$1,cb__$1,meta48391));
});

}

return (new cljs.core.async.t_cljs$core$async48390(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48393_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48393_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48394_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48394_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__35048__auto__ = wport;
if(cljs.core.truth_(or__35048__auto__)){
return or__35048__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48395 = (i + (1));
i = G__48395;
continue;
}
} else {
return null;
}
break;
}
})();
var or__35048__auto__ = ret;
if(cljs.core.truth_(or__35048__auto__)){
return or__35048__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__35036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__35036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__35036__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__36180__auto__ = [];
var len__36173__auto___48401 = arguments.length;
var i__36174__auto___48402 = (0);
while(true){
if((i__36174__auto___48402 < len__36173__auto___48401)){
args__36180__auto__.push((arguments[i__36174__auto___48402]));

var G__48403 = (i__36174__auto___48402 + (1));
i__36174__auto___48402 = G__48403;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((1) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36181__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48398){
var map__48399 = p__48398;
var map__48399__$1 = ((((!((map__48399 == null)))?((((map__48399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48399):map__48399);
var opts = map__48399__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48396){
var G__48397 = cljs.core.first.call(null,seq48396);
var seq48396__$1 = cljs.core.next.call(null,seq48396);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48397,seq48396__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__48405 = arguments.length;
switch (G__48405) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__48318__auto___48451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto___48451){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto___48451){
return (function (state_48429){
var state_val_48430 = (state_48429[(1)]);
if((state_val_48430 === (7))){
var inst_48425 = (state_48429[(2)]);
var state_48429__$1 = state_48429;
var statearr_48431_48452 = state_48429__$1;
(statearr_48431_48452[(2)] = inst_48425);

(statearr_48431_48452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48430 === (1))){
var state_48429__$1 = state_48429;
var statearr_48432_48453 = state_48429__$1;
(statearr_48432_48453[(2)] = null);

(statearr_48432_48453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48430 === (4))){
var inst_48408 = (state_48429[(7)]);
var inst_48408__$1 = (state_48429[(2)]);
var inst_48409 = (inst_48408__$1 == null);
var state_48429__$1 = (function (){var statearr_48433 = state_48429;
(statearr_48433[(7)] = inst_48408__$1);

return statearr_48433;
})();
if(cljs.core.truth_(inst_48409)){
var statearr_48434_48454 = state_48429__$1;
(statearr_48434_48454[(1)] = (5));

} else {
var statearr_48435_48455 = state_48429__$1;
(statearr_48435_48455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48430 === (13))){
var state_48429__$1 = state_48429;
var statearr_48436_48456 = state_48429__$1;
(statearr_48436_48456[(2)] = null);

(statearr_48436_48456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48430 === (6))){
var inst_48408 = (state_48429[(7)]);
var state_48429__$1 = state_48429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48429__$1,(11),to,inst_48408);
} else {
if((state_val_48430 === (3))){
var inst_48427 = (state_48429[(2)]);
var state_48429__$1 = state_48429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48429__$1,inst_48427);
} else {
if((state_val_48430 === (12))){
var state_48429__$1 = state_48429;
var statearr_48437_48457 = state_48429__$1;
(statearr_48437_48457[(2)] = null);

(statearr_48437_48457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48430 === (2))){
var state_48429__$1 = state_48429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48429__$1,(4),from);
} else {
if((state_val_48430 === (11))){
var inst_48418 = (state_48429[(2)]);
var state_48429__$1 = state_48429;
if(cljs.core.truth_(inst_48418)){
var statearr_48438_48458 = state_48429__$1;
(statearr_48438_48458[(1)] = (12));

} else {
var statearr_48439_48459 = state_48429__$1;
(statearr_48439_48459[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48430 === (9))){
var state_48429__$1 = state_48429;
var statearr_48440_48460 = state_48429__$1;
(statearr_48440_48460[(2)] = null);

(statearr_48440_48460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48430 === (5))){
var state_48429__$1 = state_48429;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48441_48461 = state_48429__$1;
(statearr_48441_48461[(1)] = (8));

} else {
var statearr_48442_48462 = state_48429__$1;
(statearr_48442_48462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48430 === (14))){
var inst_48423 = (state_48429[(2)]);
var state_48429__$1 = state_48429;
var statearr_48443_48463 = state_48429__$1;
(statearr_48443_48463[(2)] = inst_48423);

(statearr_48443_48463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48430 === (10))){
var inst_48415 = (state_48429[(2)]);
var state_48429__$1 = state_48429;
var statearr_48444_48464 = state_48429__$1;
(statearr_48444_48464[(2)] = inst_48415);

(statearr_48444_48464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48430 === (8))){
var inst_48412 = cljs.core.async.close_BANG_.call(null,to);
var state_48429__$1 = state_48429;
var statearr_48445_48465 = state_48429__$1;
(statearr_48445_48465[(2)] = inst_48412);

(statearr_48445_48465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48318__auto___48451))
;
return ((function (switch__48230__auto__,c__48318__auto___48451){
return (function() {
var cljs$core$async$state_machine__48231__auto__ = null;
var cljs$core$async$state_machine__48231__auto____0 = (function (){
var statearr_48446 = [null,null,null,null,null,null,null,null];
(statearr_48446[(0)] = cljs$core$async$state_machine__48231__auto__);

(statearr_48446[(1)] = (1));

return statearr_48446;
});
var cljs$core$async$state_machine__48231__auto____1 = (function (state_48429){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_48429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e48447){if((e48447 instanceof Object)){
var ex__48234__auto__ = e48447;
var statearr_48448_48466 = state_48429;
(statearr_48448_48466[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48467 = state_48429;
state_48429 = G__48467;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$state_machine__48231__auto__ = function(state_48429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48231__auto____1.call(this,state_48429);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48231__auto____0;
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48231__auto____1;
return cljs$core$async$state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto___48451))
})();
var state__48320__auto__ = (function (){var statearr_48449 = f__48319__auto__.call(null);
(statearr_48449[(6)] = c__48318__auto___48451);

return statearr_48449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto___48451))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__48468){
var vec__48469 = p__48468;
var v = cljs.core.nth.call(null,vec__48469,(0),null);
var p = cljs.core.nth.call(null,vec__48469,(1),null);
var job = vec__48469;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__48318__auto___48640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto___48640,res,vec__48469,v,p,job,jobs,results){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto___48640,res,vec__48469,v,p,job,jobs,results){
return (function (state_48476){
var state_val_48477 = (state_48476[(1)]);
if((state_val_48477 === (1))){
var state_48476__$1 = state_48476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48476__$1,(2),res,v);
} else {
if((state_val_48477 === (2))){
var inst_48473 = (state_48476[(2)]);
var inst_48474 = cljs.core.async.close_BANG_.call(null,res);
var state_48476__$1 = (function (){var statearr_48478 = state_48476;
(statearr_48478[(7)] = inst_48473);

return statearr_48478;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48476__$1,inst_48474);
} else {
return null;
}
}
});})(c__48318__auto___48640,res,vec__48469,v,p,job,jobs,results))
;
return ((function (switch__48230__auto__,c__48318__auto___48640,res,vec__48469,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____0 = (function (){
var statearr_48479 = [null,null,null,null,null,null,null,null];
(statearr_48479[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__);

(statearr_48479[(1)] = (1));

return statearr_48479;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____1 = (function (state_48476){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_48476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e48480){if((e48480 instanceof Object)){
var ex__48234__auto__ = e48480;
var statearr_48481_48641 = state_48476;
(statearr_48481_48641[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48642 = state_48476;
state_48476 = G__48642;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__ = function(state_48476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____1.call(this,state_48476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto___48640,res,vec__48469,v,p,job,jobs,results))
})();
var state__48320__auto__ = (function (){var statearr_48482 = f__48319__auto__.call(null);
(statearr_48482[(6)] = c__48318__auto___48640);

return statearr_48482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto___48640,res,vec__48469,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__48483){
var vec__48484 = p__48483;
var v = cljs.core.nth.call(null,vec__48484,(0),null);
var p = cljs.core.nth.call(null,vec__48484,(1),null);
var job = vec__48484;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__35972__auto___48643 = n;
var __48644 = (0);
while(true){
if((__48644 < n__35972__auto___48643)){
var G__48487_48645 = type;
var G__48487_48646__$1 = (((G__48487_48645 instanceof cljs.core.Keyword))?G__48487_48645.fqn:null);
switch (G__48487_48646__$1) {
case "compute":
var c__48318__auto___48648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48644,c__48318__auto___48648,G__48487_48645,G__48487_48646__$1,n__35972__auto___48643,jobs,results,process,async){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (__48644,c__48318__auto___48648,G__48487_48645,G__48487_48646__$1,n__35972__auto___48643,jobs,results,process,async){
return (function (state_48500){
var state_val_48501 = (state_48500[(1)]);
if((state_val_48501 === (1))){
var state_48500__$1 = state_48500;
var statearr_48502_48649 = state_48500__$1;
(statearr_48502_48649[(2)] = null);

(statearr_48502_48649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48501 === (2))){
var state_48500__$1 = state_48500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48500__$1,(4),jobs);
} else {
if((state_val_48501 === (3))){
var inst_48498 = (state_48500[(2)]);
var state_48500__$1 = state_48500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48500__$1,inst_48498);
} else {
if((state_val_48501 === (4))){
var inst_48490 = (state_48500[(2)]);
var inst_48491 = process.call(null,inst_48490);
var state_48500__$1 = state_48500;
if(cljs.core.truth_(inst_48491)){
var statearr_48503_48650 = state_48500__$1;
(statearr_48503_48650[(1)] = (5));

} else {
var statearr_48504_48651 = state_48500__$1;
(statearr_48504_48651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48501 === (5))){
var state_48500__$1 = state_48500;
var statearr_48505_48652 = state_48500__$1;
(statearr_48505_48652[(2)] = null);

(statearr_48505_48652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48501 === (6))){
var state_48500__$1 = state_48500;
var statearr_48506_48653 = state_48500__$1;
(statearr_48506_48653[(2)] = null);

(statearr_48506_48653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48501 === (7))){
var inst_48496 = (state_48500[(2)]);
var state_48500__$1 = state_48500;
var statearr_48507_48654 = state_48500__$1;
(statearr_48507_48654[(2)] = inst_48496);

(statearr_48507_48654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48644,c__48318__auto___48648,G__48487_48645,G__48487_48646__$1,n__35972__auto___48643,jobs,results,process,async))
;
return ((function (__48644,switch__48230__auto__,c__48318__auto___48648,G__48487_48645,G__48487_48646__$1,n__35972__auto___48643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____0 = (function (){
var statearr_48508 = [null,null,null,null,null,null,null];
(statearr_48508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__);

(statearr_48508[(1)] = (1));

return statearr_48508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____1 = (function (state_48500){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_48500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e48509){if((e48509 instanceof Object)){
var ex__48234__auto__ = e48509;
var statearr_48510_48655 = state_48500;
(statearr_48510_48655[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48656 = state_48500;
state_48500 = G__48656;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__ = function(state_48500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____1.call(this,state_48500);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__;
})()
;})(__48644,switch__48230__auto__,c__48318__auto___48648,G__48487_48645,G__48487_48646__$1,n__35972__auto___48643,jobs,results,process,async))
})();
var state__48320__auto__ = (function (){var statearr_48511 = f__48319__auto__.call(null);
(statearr_48511[(6)] = c__48318__auto___48648);

return statearr_48511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(__48644,c__48318__auto___48648,G__48487_48645,G__48487_48646__$1,n__35972__auto___48643,jobs,results,process,async))
);


break;
case "async":
var c__48318__auto___48657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48644,c__48318__auto___48657,G__48487_48645,G__48487_48646__$1,n__35972__auto___48643,jobs,results,process,async){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (__48644,c__48318__auto___48657,G__48487_48645,G__48487_48646__$1,n__35972__auto___48643,jobs,results,process,async){
return (function (state_48524){
var state_val_48525 = (state_48524[(1)]);
if((state_val_48525 === (1))){
var state_48524__$1 = state_48524;
var statearr_48526_48658 = state_48524__$1;
(statearr_48526_48658[(2)] = null);

(statearr_48526_48658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48525 === (2))){
var state_48524__$1 = state_48524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48524__$1,(4),jobs);
} else {
if((state_val_48525 === (3))){
var inst_48522 = (state_48524[(2)]);
var state_48524__$1 = state_48524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48524__$1,inst_48522);
} else {
if((state_val_48525 === (4))){
var inst_48514 = (state_48524[(2)]);
var inst_48515 = async.call(null,inst_48514);
var state_48524__$1 = state_48524;
if(cljs.core.truth_(inst_48515)){
var statearr_48527_48659 = state_48524__$1;
(statearr_48527_48659[(1)] = (5));

} else {
var statearr_48528_48660 = state_48524__$1;
(statearr_48528_48660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48525 === (5))){
var state_48524__$1 = state_48524;
var statearr_48529_48661 = state_48524__$1;
(statearr_48529_48661[(2)] = null);

(statearr_48529_48661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48525 === (6))){
var state_48524__$1 = state_48524;
var statearr_48530_48662 = state_48524__$1;
(statearr_48530_48662[(2)] = null);

(statearr_48530_48662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48525 === (7))){
var inst_48520 = (state_48524[(2)]);
var state_48524__$1 = state_48524;
var statearr_48531_48663 = state_48524__$1;
(statearr_48531_48663[(2)] = inst_48520);

(statearr_48531_48663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48644,c__48318__auto___48657,G__48487_48645,G__48487_48646__$1,n__35972__auto___48643,jobs,results,process,async))
;
return ((function (__48644,switch__48230__auto__,c__48318__auto___48657,G__48487_48645,G__48487_48646__$1,n__35972__auto___48643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____0 = (function (){
var statearr_48532 = [null,null,null,null,null,null,null];
(statearr_48532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__);

(statearr_48532[(1)] = (1));

return statearr_48532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____1 = (function (state_48524){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_48524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e48533){if((e48533 instanceof Object)){
var ex__48234__auto__ = e48533;
var statearr_48534_48664 = state_48524;
(statearr_48534_48664[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48665 = state_48524;
state_48524 = G__48665;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__ = function(state_48524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____1.call(this,state_48524);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__;
})()
;})(__48644,switch__48230__auto__,c__48318__auto___48657,G__48487_48645,G__48487_48646__$1,n__35972__auto___48643,jobs,results,process,async))
})();
var state__48320__auto__ = (function (){var statearr_48535 = f__48319__auto__.call(null);
(statearr_48535[(6)] = c__48318__auto___48657);

return statearr_48535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(__48644,c__48318__auto___48657,G__48487_48645,G__48487_48646__$1,n__35972__auto___48643,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48487_48646__$1)].join('')));

}

var G__48666 = (__48644 + (1));
__48644 = G__48666;
continue;
} else {
}
break;
}

var c__48318__auto___48667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto___48667,jobs,results,process,async){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto___48667,jobs,results,process,async){
return (function (state_48557){
var state_val_48558 = (state_48557[(1)]);
if((state_val_48558 === (1))){
var state_48557__$1 = state_48557;
var statearr_48559_48668 = state_48557__$1;
(statearr_48559_48668[(2)] = null);

(statearr_48559_48668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48558 === (2))){
var state_48557__$1 = state_48557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48557__$1,(4),from);
} else {
if((state_val_48558 === (3))){
var inst_48555 = (state_48557[(2)]);
var state_48557__$1 = state_48557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48557__$1,inst_48555);
} else {
if((state_val_48558 === (4))){
var inst_48538 = (state_48557[(7)]);
var inst_48538__$1 = (state_48557[(2)]);
var inst_48539 = (inst_48538__$1 == null);
var state_48557__$1 = (function (){var statearr_48560 = state_48557;
(statearr_48560[(7)] = inst_48538__$1);

return statearr_48560;
})();
if(cljs.core.truth_(inst_48539)){
var statearr_48561_48669 = state_48557__$1;
(statearr_48561_48669[(1)] = (5));

} else {
var statearr_48562_48670 = state_48557__$1;
(statearr_48562_48670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48558 === (5))){
var inst_48541 = cljs.core.async.close_BANG_.call(null,jobs);
var state_48557__$1 = state_48557;
var statearr_48563_48671 = state_48557__$1;
(statearr_48563_48671[(2)] = inst_48541);

(statearr_48563_48671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48558 === (6))){
var inst_48538 = (state_48557[(7)]);
var inst_48543 = (state_48557[(8)]);
var inst_48543__$1 = cljs.core.async.chan.call(null,(1));
var inst_48544 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48545 = [inst_48538,inst_48543__$1];
var inst_48546 = (new cljs.core.PersistentVector(null,2,(5),inst_48544,inst_48545,null));
var state_48557__$1 = (function (){var statearr_48564 = state_48557;
(statearr_48564[(8)] = inst_48543__$1);

return statearr_48564;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48557__$1,(8),jobs,inst_48546);
} else {
if((state_val_48558 === (7))){
var inst_48553 = (state_48557[(2)]);
var state_48557__$1 = state_48557;
var statearr_48565_48672 = state_48557__$1;
(statearr_48565_48672[(2)] = inst_48553);

(statearr_48565_48672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48558 === (8))){
var inst_48543 = (state_48557[(8)]);
var inst_48548 = (state_48557[(2)]);
var state_48557__$1 = (function (){var statearr_48566 = state_48557;
(statearr_48566[(9)] = inst_48548);

return statearr_48566;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48557__$1,(9),results,inst_48543);
} else {
if((state_val_48558 === (9))){
var inst_48550 = (state_48557[(2)]);
var state_48557__$1 = (function (){var statearr_48567 = state_48557;
(statearr_48567[(10)] = inst_48550);

return statearr_48567;
})();
var statearr_48568_48673 = state_48557__$1;
(statearr_48568_48673[(2)] = null);

(statearr_48568_48673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__48318__auto___48667,jobs,results,process,async))
;
return ((function (switch__48230__auto__,c__48318__auto___48667,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____0 = (function (){
var statearr_48569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__);

(statearr_48569[(1)] = (1));

return statearr_48569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____1 = (function (state_48557){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_48557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e48570){if((e48570 instanceof Object)){
var ex__48234__auto__ = e48570;
var statearr_48571_48674 = state_48557;
(statearr_48571_48674[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48675 = state_48557;
state_48557 = G__48675;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__ = function(state_48557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____1.call(this,state_48557);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto___48667,jobs,results,process,async))
})();
var state__48320__auto__ = (function (){var statearr_48572 = f__48319__auto__.call(null);
(statearr_48572[(6)] = c__48318__auto___48667);

return statearr_48572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto___48667,jobs,results,process,async))
);


var c__48318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto__,jobs,results,process,async){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto__,jobs,results,process,async){
return (function (state_48610){
var state_val_48611 = (state_48610[(1)]);
if((state_val_48611 === (7))){
var inst_48606 = (state_48610[(2)]);
var state_48610__$1 = state_48610;
var statearr_48612_48676 = state_48610__$1;
(statearr_48612_48676[(2)] = inst_48606);

(statearr_48612_48676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48611 === (20))){
var state_48610__$1 = state_48610;
var statearr_48613_48677 = state_48610__$1;
(statearr_48613_48677[(2)] = null);

(statearr_48613_48677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48611 === (1))){
var state_48610__$1 = state_48610;
var statearr_48614_48678 = state_48610__$1;
(statearr_48614_48678[(2)] = null);

(statearr_48614_48678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48611 === (4))){
var inst_48575 = (state_48610[(7)]);
var inst_48575__$1 = (state_48610[(2)]);
var inst_48576 = (inst_48575__$1 == null);
var state_48610__$1 = (function (){var statearr_48615 = state_48610;
(statearr_48615[(7)] = inst_48575__$1);

return statearr_48615;
})();
if(cljs.core.truth_(inst_48576)){
var statearr_48616_48679 = state_48610__$1;
(statearr_48616_48679[(1)] = (5));

} else {
var statearr_48617_48680 = state_48610__$1;
(statearr_48617_48680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48611 === (15))){
var inst_48588 = (state_48610[(8)]);
var state_48610__$1 = state_48610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48610__$1,(18),to,inst_48588);
} else {
if((state_val_48611 === (21))){
var inst_48601 = (state_48610[(2)]);
var state_48610__$1 = state_48610;
var statearr_48618_48681 = state_48610__$1;
(statearr_48618_48681[(2)] = inst_48601);

(statearr_48618_48681[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48611 === (13))){
var inst_48603 = (state_48610[(2)]);
var state_48610__$1 = (function (){var statearr_48619 = state_48610;
(statearr_48619[(9)] = inst_48603);

return statearr_48619;
})();
var statearr_48620_48682 = state_48610__$1;
(statearr_48620_48682[(2)] = null);

(statearr_48620_48682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48611 === (6))){
var inst_48575 = (state_48610[(7)]);
var state_48610__$1 = state_48610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48610__$1,(11),inst_48575);
} else {
if((state_val_48611 === (17))){
var inst_48596 = (state_48610[(2)]);
var state_48610__$1 = state_48610;
if(cljs.core.truth_(inst_48596)){
var statearr_48621_48683 = state_48610__$1;
(statearr_48621_48683[(1)] = (19));

} else {
var statearr_48622_48684 = state_48610__$1;
(statearr_48622_48684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48611 === (3))){
var inst_48608 = (state_48610[(2)]);
var state_48610__$1 = state_48610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48610__$1,inst_48608);
} else {
if((state_val_48611 === (12))){
var inst_48585 = (state_48610[(10)]);
var state_48610__$1 = state_48610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48610__$1,(14),inst_48585);
} else {
if((state_val_48611 === (2))){
var state_48610__$1 = state_48610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48610__$1,(4),results);
} else {
if((state_val_48611 === (19))){
var state_48610__$1 = state_48610;
var statearr_48623_48685 = state_48610__$1;
(statearr_48623_48685[(2)] = null);

(statearr_48623_48685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48611 === (11))){
var inst_48585 = (state_48610[(2)]);
var state_48610__$1 = (function (){var statearr_48624 = state_48610;
(statearr_48624[(10)] = inst_48585);

return statearr_48624;
})();
var statearr_48625_48686 = state_48610__$1;
(statearr_48625_48686[(2)] = null);

(statearr_48625_48686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48611 === (9))){
var state_48610__$1 = state_48610;
var statearr_48626_48687 = state_48610__$1;
(statearr_48626_48687[(2)] = null);

(statearr_48626_48687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48611 === (5))){
var state_48610__$1 = state_48610;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48627_48688 = state_48610__$1;
(statearr_48627_48688[(1)] = (8));

} else {
var statearr_48628_48689 = state_48610__$1;
(statearr_48628_48689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48611 === (14))){
var inst_48588 = (state_48610[(8)]);
var inst_48590 = (state_48610[(11)]);
var inst_48588__$1 = (state_48610[(2)]);
var inst_48589 = (inst_48588__$1 == null);
var inst_48590__$1 = cljs.core.not.call(null,inst_48589);
var state_48610__$1 = (function (){var statearr_48629 = state_48610;
(statearr_48629[(8)] = inst_48588__$1);

(statearr_48629[(11)] = inst_48590__$1);

return statearr_48629;
})();
if(inst_48590__$1){
var statearr_48630_48690 = state_48610__$1;
(statearr_48630_48690[(1)] = (15));

} else {
var statearr_48631_48691 = state_48610__$1;
(statearr_48631_48691[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48611 === (16))){
var inst_48590 = (state_48610[(11)]);
var state_48610__$1 = state_48610;
var statearr_48632_48692 = state_48610__$1;
(statearr_48632_48692[(2)] = inst_48590);

(statearr_48632_48692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48611 === (10))){
var inst_48582 = (state_48610[(2)]);
var state_48610__$1 = state_48610;
var statearr_48633_48693 = state_48610__$1;
(statearr_48633_48693[(2)] = inst_48582);

(statearr_48633_48693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48611 === (18))){
var inst_48593 = (state_48610[(2)]);
var state_48610__$1 = state_48610;
var statearr_48634_48694 = state_48610__$1;
(statearr_48634_48694[(2)] = inst_48593);

(statearr_48634_48694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48611 === (8))){
var inst_48579 = cljs.core.async.close_BANG_.call(null,to);
var state_48610__$1 = state_48610;
var statearr_48635_48695 = state_48610__$1;
(statearr_48635_48695[(2)] = inst_48579);

(statearr_48635_48695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48318__auto__,jobs,results,process,async))
;
return ((function (switch__48230__auto__,c__48318__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____0 = (function (){
var statearr_48636 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__);

(statearr_48636[(1)] = (1));

return statearr_48636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____1 = (function (state_48610){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_48610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e48637){if((e48637 instanceof Object)){
var ex__48234__auto__ = e48637;
var statearr_48638_48696 = state_48610;
(statearr_48638_48696[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48697 = state_48610;
state_48610 = G__48697;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__ = function(state_48610){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____1.call(this,state_48610);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto__,jobs,results,process,async))
})();
var state__48320__auto__ = (function (){var statearr_48639 = f__48319__auto__.call(null);
(statearr_48639[(6)] = c__48318__auto__);

return statearr_48639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto__,jobs,results,process,async))
);

return c__48318__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__48699 = arguments.length;
switch (G__48699) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__48702 = arguments.length;
switch (G__48702) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__48705 = arguments.length;
switch (G__48705) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__48318__auto___48754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto___48754,tc,fc){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto___48754,tc,fc){
return (function (state_48731){
var state_val_48732 = (state_48731[(1)]);
if((state_val_48732 === (7))){
var inst_48727 = (state_48731[(2)]);
var state_48731__$1 = state_48731;
var statearr_48733_48755 = state_48731__$1;
(statearr_48733_48755[(2)] = inst_48727);

(statearr_48733_48755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48732 === (1))){
var state_48731__$1 = state_48731;
var statearr_48734_48756 = state_48731__$1;
(statearr_48734_48756[(2)] = null);

(statearr_48734_48756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48732 === (4))){
var inst_48708 = (state_48731[(7)]);
var inst_48708__$1 = (state_48731[(2)]);
var inst_48709 = (inst_48708__$1 == null);
var state_48731__$1 = (function (){var statearr_48735 = state_48731;
(statearr_48735[(7)] = inst_48708__$1);

return statearr_48735;
})();
if(cljs.core.truth_(inst_48709)){
var statearr_48736_48757 = state_48731__$1;
(statearr_48736_48757[(1)] = (5));

} else {
var statearr_48737_48758 = state_48731__$1;
(statearr_48737_48758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48732 === (13))){
var state_48731__$1 = state_48731;
var statearr_48738_48759 = state_48731__$1;
(statearr_48738_48759[(2)] = null);

(statearr_48738_48759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48732 === (6))){
var inst_48708 = (state_48731[(7)]);
var inst_48714 = p.call(null,inst_48708);
var state_48731__$1 = state_48731;
if(cljs.core.truth_(inst_48714)){
var statearr_48739_48760 = state_48731__$1;
(statearr_48739_48760[(1)] = (9));

} else {
var statearr_48740_48761 = state_48731__$1;
(statearr_48740_48761[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48732 === (3))){
var inst_48729 = (state_48731[(2)]);
var state_48731__$1 = state_48731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48731__$1,inst_48729);
} else {
if((state_val_48732 === (12))){
var state_48731__$1 = state_48731;
var statearr_48741_48762 = state_48731__$1;
(statearr_48741_48762[(2)] = null);

(statearr_48741_48762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48732 === (2))){
var state_48731__$1 = state_48731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48731__$1,(4),ch);
} else {
if((state_val_48732 === (11))){
var inst_48708 = (state_48731[(7)]);
var inst_48718 = (state_48731[(2)]);
var state_48731__$1 = state_48731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48731__$1,(8),inst_48718,inst_48708);
} else {
if((state_val_48732 === (9))){
var state_48731__$1 = state_48731;
var statearr_48742_48763 = state_48731__$1;
(statearr_48742_48763[(2)] = tc);

(statearr_48742_48763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48732 === (5))){
var inst_48711 = cljs.core.async.close_BANG_.call(null,tc);
var inst_48712 = cljs.core.async.close_BANG_.call(null,fc);
var state_48731__$1 = (function (){var statearr_48743 = state_48731;
(statearr_48743[(8)] = inst_48711);

return statearr_48743;
})();
var statearr_48744_48764 = state_48731__$1;
(statearr_48744_48764[(2)] = inst_48712);

(statearr_48744_48764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48732 === (14))){
var inst_48725 = (state_48731[(2)]);
var state_48731__$1 = state_48731;
var statearr_48745_48765 = state_48731__$1;
(statearr_48745_48765[(2)] = inst_48725);

(statearr_48745_48765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48732 === (10))){
var state_48731__$1 = state_48731;
var statearr_48746_48766 = state_48731__$1;
(statearr_48746_48766[(2)] = fc);

(statearr_48746_48766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48732 === (8))){
var inst_48720 = (state_48731[(2)]);
var state_48731__$1 = state_48731;
if(cljs.core.truth_(inst_48720)){
var statearr_48747_48767 = state_48731__$1;
(statearr_48747_48767[(1)] = (12));

} else {
var statearr_48748_48768 = state_48731__$1;
(statearr_48748_48768[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48318__auto___48754,tc,fc))
;
return ((function (switch__48230__auto__,c__48318__auto___48754,tc,fc){
return (function() {
var cljs$core$async$state_machine__48231__auto__ = null;
var cljs$core$async$state_machine__48231__auto____0 = (function (){
var statearr_48749 = [null,null,null,null,null,null,null,null,null];
(statearr_48749[(0)] = cljs$core$async$state_machine__48231__auto__);

(statearr_48749[(1)] = (1));

return statearr_48749;
});
var cljs$core$async$state_machine__48231__auto____1 = (function (state_48731){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_48731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e48750){if((e48750 instanceof Object)){
var ex__48234__auto__ = e48750;
var statearr_48751_48769 = state_48731;
(statearr_48751_48769[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48770 = state_48731;
state_48731 = G__48770;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$state_machine__48231__auto__ = function(state_48731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48231__auto____1.call(this,state_48731);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48231__auto____0;
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48231__auto____1;
return cljs$core$async$state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto___48754,tc,fc))
})();
var state__48320__auto__ = (function (){var statearr_48752 = f__48319__auto__.call(null);
(statearr_48752[(6)] = c__48318__auto___48754);

return statearr_48752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto___48754,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__48318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto__){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto__){
return (function (state_48791){
var state_val_48792 = (state_48791[(1)]);
if((state_val_48792 === (7))){
var inst_48787 = (state_48791[(2)]);
var state_48791__$1 = state_48791;
var statearr_48793_48811 = state_48791__$1;
(statearr_48793_48811[(2)] = inst_48787);

(statearr_48793_48811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (1))){
var inst_48771 = init;
var state_48791__$1 = (function (){var statearr_48794 = state_48791;
(statearr_48794[(7)] = inst_48771);

return statearr_48794;
})();
var statearr_48795_48812 = state_48791__$1;
(statearr_48795_48812[(2)] = null);

(statearr_48795_48812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (4))){
var inst_48774 = (state_48791[(8)]);
var inst_48774__$1 = (state_48791[(2)]);
var inst_48775 = (inst_48774__$1 == null);
var state_48791__$1 = (function (){var statearr_48796 = state_48791;
(statearr_48796[(8)] = inst_48774__$1);

return statearr_48796;
})();
if(cljs.core.truth_(inst_48775)){
var statearr_48797_48813 = state_48791__$1;
(statearr_48797_48813[(1)] = (5));

} else {
var statearr_48798_48814 = state_48791__$1;
(statearr_48798_48814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (6))){
var inst_48774 = (state_48791[(8)]);
var inst_48778 = (state_48791[(9)]);
var inst_48771 = (state_48791[(7)]);
var inst_48778__$1 = f.call(null,inst_48771,inst_48774);
var inst_48779 = cljs.core.reduced_QMARK_.call(null,inst_48778__$1);
var state_48791__$1 = (function (){var statearr_48799 = state_48791;
(statearr_48799[(9)] = inst_48778__$1);

return statearr_48799;
})();
if(inst_48779){
var statearr_48800_48815 = state_48791__$1;
(statearr_48800_48815[(1)] = (8));

} else {
var statearr_48801_48816 = state_48791__$1;
(statearr_48801_48816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (3))){
var inst_48789 = (state_48791[(2)]);
var state_48791__$1 = state_48791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48791__$1,inst_48789);
} else {
if((state_val_48792 === (2))){
var state_48791__$1 = state_48791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48791__$1,(4),ch);
} else {
if((state_val_48792 === (9))){
var inst_48778 = (state_48791[(9)]);
var inst_48771 = inst_48778;
var state_48791__$1 = (function (){var statearr_48802 = state_48791;
(statearr_48802[(7)] = inst_48771);

return statearr_48802;
})();
var statearr_48803_48817 = state_48791__$1;
(statearr_48803_48817[(2)] = null);

(statearr_48803_48817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (5))){
var inst_48771 = (state_48791[(7)]);
var state_48791__$1 = state_48791;
var statearr_48804_48818 = state_48791__$1;
(statearr_48804_48818[(2)] = inst_48771);

(statearr_48804_48818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (10))){
var inst_48785 = (state_48791[(2)]);
var state_48791__$1 = state_48791;
var statearr_48805_48819 = state_48791__$1;
(statearr_48805_48819[(2)] = inst_48785);

(statearr_48805_48819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (8))){
var inst_48778 = (state_48791[(9)]);
var inst_48781 = cljs.core.deref.call(null,inst_48778);
var state_48791__$1 = state_48791;
var statearr_48806_48820 = state_48791__$1;
(statearr_48806_48820[(2)] = inst_48781);

(statearr_48806_48820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__48318__auto__))
;
return ((function (switch__48230__auto__,c__48318__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__48231__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48231__auto____0 = (function (){
var statearr_48807 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48807[(0)] = cljs$core$async$reduce_$_state_machine__48231__auto__);

(statearr_48807[(1)] = (1));

return statearr_48807;
});
var cljs$core$async$reduce_$_state_machine__48231__auto____1 = (function (state_48791){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_48791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e48808){if((e48808 instanceof Object)){
var ex__48234__auto__ = e48808;
var statearr_48809_48821 = state_48791;
(statearr_48809_48821[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48822 = state_48791;
state_48791 = G__48822;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48231__auto__ = function(state_48791){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48231__auto____1.call(this,state_48791);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48231__auto____0;
cljs$core$async$reduce_$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48231__auto____1;
return cljs$core$async$reduce_$_state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto__))
})();
var state__48320__auto__ = (function (){var statearr_48810 = f__48319__auto__.call(null);
(statearr_48810[(6)] = c__48318__auto__);

return statearr_48810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto__))
);

return c__48318__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__48318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto__,f__$1){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto__,f__$1){
return (function (state_48828){
var state_val_48829 = (state_48828[(1)]);
if((state_val_48829 === (1))){
var inst_48823 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_48828__$1 = state_48828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48828__$1,(2),inst_48823);
} else {
if((state_val_48829 === (2))){
var inst_48825 = (state_48828[(2)]);
var inst_48826 = f__$1.call(null,inst_48825);
var state_48828__$1 = state_48828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48828__$1,inst_48826);
} else {
return null;
}
}
});})(c__48318__auto__,f__$1))
;
return ((function (switch__48230__auto__,c__48318__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__48231__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48231__auto____0 = (function (){
var statearr_48830 = [null,null,null,null,null,null,null];
(statearr_48830[(0)] = cljs$core$async$transduce_$_state_machine__48231__auto__);

(statearr_48830[(1)] = (1));

return statearr_48830;
});
var cljs$core$async$transduce_$_state_machine__48231__auto____1 = (function (state_48828){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_48828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e48831){if((e48831 instanceof Object)){
var ex__48234__auto__ = e48831;
var statearr_48832_48834 = state_48828;
(statearr_48832_48834[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48835 = state_48828;
state_48828 = G__48835;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48231__auto__ = function(state_48828){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48231__auto____1.call(this,state_48828);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48231__auto____0;
cljs$core$async$transduce_$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48231__auto____1;
return cljs$core$async$transduce_$_state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto__,f__$1))
})();
var state__48320__auto__ = (function (){var statearr_48833 = f__48319__auto__.call(null);
(statearr_48833[(6)] = c__48318__auto__);

return statearr_48833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto__,f__$1))
);

return c__48318__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__48837 = arguments.length;
switch (G__48837) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__48318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto__){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto__){
return (function (state_48862){
var state_val_48863 = (state_48862[(1)]);
if((state_val_48863 === (7))){
var inst_48844 = (state_48862[(2)]);
var state_48862__$1 = state_48862;
var statearr_48864_48885 = state_48862__$1;
(statearr_48864_48885[(2)] = inst_48844);

(statearr_48864_48885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48863 === (1))){
var inst_48838 = cljs.core.seq.call(null,coll);
var inst_48839 = inst_48838;
var state_48862__$1 = (function (){var statearr_48865 = state_48862;
(statearr_48865[(7)] = inst_48839);

return statearr_48865;
})();
var statearr_48866_48886 = state_48862__$1;
(statearr_48866_48886[(2)] = null);

(statearr_48866_48886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48863 === (4))){
var inst_48839 = (state_48862[(7)]);
var inst_48842 = cljs.core.first.call(null,inst_48839);
var state_48862__$1 = state_48862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48862__$1,(7),ch,inst_48842);
} else {
if((state_val_48863 === (13))){
var inst_48856 = (state_48862[(2)]);
var state_48862__$1 = state_48862;
var statearr_48867_48887 = state_48862__$1;
(statearr_48867_48887[(2)] = inst_48856);

(statearr_48867_48887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48863 === (6))){
var inst_48847 = (state_48862[(2)]);
var state_48862__$1 = state_48862;
if(cljs.core.truth_(inst_48847)){
var statearr_48868_48888 = state_48862__$1;
(statearr_48868_48888[(1)] = (8));

} else {
var statearr_48869_48889 = state_48862__$1;
(statearr_48869_48889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48863 === (3))){
var inst_48860 = (state_48862[(2)]);
var state_48862__$1 = state_48862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48862__$1,inst_48860);
} else {
if((state_val_48863 === (12))){
var state_48862__$1 = state_48862;
var statearr_48870_48890 = state_48862__$1;
(statearr_48870_48890[(2)] = null);

(statearr_48870_48890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48863 === (2))){
var inst_48839 = (state_48862[(7)]);
var state_48862__$1 = state_48862;
if(cljs.core.truth_(inst_48839)){
var statearr_48871_48891 = state_48862__$1;
(statearr_48871_48891[(1)] = (4));

} else {
var statearr_48872_48892 = state_48862__$1;
(statearr_48872_48892[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48863 === (11))){
var inst_48853 = cljs.core.async.close_BANG_.call(null,ch);
var state_48862__$1 = state_48862;
var statearr_48873_48893 = state_48862__$1;
(statearr_48873_48893[(2)] = inst_48853);

(statearr_48873_48893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48863 === (9))){
var state_48862__$1 = state_48862;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48874_48894 = state_48862__$1;
(statearr_48874_48894[(1)] = (11));

} else {
var statearr_48875_48895 = state_48862__$1;
(statearr_48875_48895[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48863 === (5))){
var inst_48839 = (state_48862[(7)]);
var state_48862__$1 = state_48862;
var statearr_48876_48896 = state_48862__$1;
(statearr_48876_48896[(2)] = inst_48839);

(statearr_48876_48896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48863 === (10))){
var inst_48858 = (state_48862[(2)]);
var state_48862__$1 = state_48862;
var statearr_48877_48897 = state_48862__$1;
(statearr_48877_48897[(2)] = inst_48858);

(statearr_48877_48897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48863 === (8))){
var inst_48839 = (state_48862[(7)]);
var inst_48849 = cljs.core.next.call(null,inst_48839);
var inst_48839__$1 = inst_48849;
var state_48862__$1 = (function (){var statearr_48878 = state_48862;
(statearr_48878[(7)] = inst_48839__$1);

return statearr_48878;
})();
var statearr_48879_48898 = state_48862__$1;
(statearr_48879_48898[(2)] = null);

(statearr_48879_48898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48318__auto__))
;
return ((function (switch__48230__auto__,c__48318__auto__){
return (function() {
var cljs$core$async$state_machine__48231__auto__ = null;
var cljs$core$async$state_machine__48231__auto____0 = (function (){
var statearr_48880 = [null,null,null,null,null,null,null,null];
(statearr_48880[(0)] = cljs$core$async$state_machine__48231__auto__);

(statearr_48880[(1)] = (1));

return statearr_48880;
});
var cljs$core$async$state_machine__48231__auto____1 = (function (state_48862){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_48862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e48881){if((e48881 instanceof Object)){
var ex__48234__auto__ = e48881;
var statearr_48882_48899 = state_48862;
(statearr_48882_48899[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48900 = state_48862;
state_48862 = G__48900;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$state_machine__48231__auto__ = function(state_48862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48231__auto____1.call(this,state_48862);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48231__auto____0;
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48231__auto____1;
return cljs$core$async$state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto__))
})();
var state__48320__auto__ = (function (){var statearr_48883 = f__48319__auto__.call(null);
(statearr_48883[(6)] = c__48318__auto__);

return statearr_48883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto__))
);

return c__48318__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__35717__auto__ = (((_ == null))?null:_);
var m__35718__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,_);
} else {
var m__35718__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__35717__auto__ = (((m == null))?null:m);
var m__35718__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__35718__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__35717__auto__ = (((m == null))?null:m);
var m__35718__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,m,ch);
} else {
var m__35718__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__35717__auto__ = (((m == null))?null:m);
var m__35718__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,m);
} else {
var m__35718__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async48901 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48901 = (function (ch,cs,meta48902){
this.ch = ch;
this.cs = cs;
this.meta48902 = meta48902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48903,meta48902__$1){
var self__ = this;
var _48903__$1 = this;
return (new cljs.core.async.t_cljs$core$async48901(self__.ch,self__.cs,meta48902__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async48901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48903){
var self__ = this;
var _48903__$1 = this;
return self__.meta48902;
});})(cs))
;

cljs.core.async.t_cljs$core$async48901.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48901.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async48901.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48901.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48901.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48901.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48901.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48902","meta48902",736624404,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async48901.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48901";

cljs.core.async.t_cljs$core$async48901.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"cljs.core.async/t_cljs$core$async48901");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async48901 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async48901(ch__$1,cs__$1,meta48902){
return (new cljs.core.async.t_cljs$core$async48901(ch__$1,cs__$1,meta48902));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async48901(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__48318__auto___49123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto___49123,cs,m,dchan,dctr,done){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto___49123,cs,m,dchan,dctr,done){
return (function (state_49038){
var state_val_49039 = (state_49038[(1)]);
if((state_val_49039 === (7))){
var inst_49034 = (state_49038[(2)]);
var state_49038__$1 = state_49038;
var statearr_49040_49124 = state_49038__$1;
(statearr_49040_49124[(2)] = inst_49034);

(statearr_49040_49124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (20))){
var inst_48937 = (state_49038[(7)]);
var inst_48949 = cljs.core.first.call(null,inst_48937);
var inst_48950 = cljs.core.nth.call(null,inst_48949,(0),null);
var inst_48951 = cljs.core.nth.call(null,inst_48949,(1),null);
var state_49038__$1 = (function (){var statearr_49041 = state_49038;
(statearr_49041[(8)] = inst_48950);

return statearr_49041;
})();
if(cljs.core.truth_(inst_48951)){
var statearr_49042_49125 = state_49038__$1;
(statearr_49042_49125[(1)] = (22));

} else {
var statearr_49043_49126 = state_49038__$1;
(statearr_49043_49126[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (27))){
var inst_48979 = (state_49038[(9)]);
var inst_48906 = (state_49038[(10)]);
var inst_48986 = (state_49038[(11)]);
var inst_48981 = (state_49038[(12)]);
var inst_48986__$1 = cljs.core._nth.call(null,inst_48979,inst_48981);
var inst_48987 = cljs.core.async.put_BANG_.call(null,inst_48986__$1,inst_48906,done);
var state_49038__$1 = (function (){var statearr_49044 = state_49038;
(statearr_49044[(11)] = inst_48986__$1);

return statearr_49044;
})();
if(cljs.core.truth_(inst_48987)){
var statearr_49045_49127 = state_49038__$1;
(statearr_49045_49127[(1)] = (30));

} else {
var statearr_49046_49128 = state_49038__$1;
(statearr_49046_49128[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (1))){
var state_49038__$1 = state_49038;
var statearr_49047_49129 = state_49038__$1;
(statearr_49047_49129[(2)] = null);

(statearr_49047_49129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (24))){
var inst_48937 = (state_49038[(7)]);
var inst_48956 = (state_49038[(2)]);
var inst_48957 = cljs.core.next.call(null,inst_48937);
var inst_48915 = inst_48957;
var inst_48916 = null;
var inst_48917 = (0);
var inst_48918 = (0);
var state_49038__$1 = (function (){var statearr_49048 = state_49038;
(statearr_49048[(13)] = inst_48956);

(statearr_49048[(14)] = inst_48916);

(statearr_49048[(15)] = inst_48915);

(statearr_49048[(16)] = inst_48918);

(statearr_49048[(17)] = inst_48917);

return statearr_49048;
})();
var statearr_49049_49130 = state_49038__$1;
(statearr_49049_49130[(2)] = null);

(statearr_49049_49130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (39))){
var state_49038__$1 = state_49038;
var statearr_49053_49131 = state_49038__$1;
(statearr_49053_49131[(2)] = null);

(statearr_49053_49131[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (4))){
var inst_48906 = (state_49038[(10)]);
var inst_48906__$1 = (state_49038[(2)]);
var inst_48907 = (inst_48906__$1 == null);
var state_49038__$1 = (function (){var statearr_49054 = state_49038;
(statearr_49054[(10)] = inst_48906__$1);

return statearr_49054;
})();
if(cljs.core.truth_(inst_48907)){
var statearr_49055_49132 = state_49038__$1;
(statearr_49055_49132[(1)] = (5));

} else {
var statearr_49056_49133 = state_49038__$1;
(statearr_49056_49133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (15))){
var inst_48916 = (state_49038[(14)]);
var inst_48915 = (state_49038[(15)]);
var inst_48918 = (state_49038[(16)]);
var inst_48917 = (state_49038[(17)]);
var inst_48933 = (state_49038[(2)]);
var inst_48934 = (inst_48918 + (1));
var tmp49050 = inst_48916;
var tmp49051 = inst_48915;
var tmp49052 = inst_48917;
var inst_48915__$1 = tmp49051;
var inst_48916__$1 = tmp49050;
var inst_48917__$1 = tmp49052;
var inst_48918__$1 = inst_48934;
var state_49038__$1 = (function (){var statearr_49057 = state_49038;
(statearr_49057[(18)] = inst_48933);

(statearr_49057[(14)] = inst_48916__$1);

(statearr_49057[(15)] = inst_48915__$1);

(statearr_49057[(16)] = inst_48918__$1);

(statearr_49057[(17)] = inst_48917__$1);

return statearr_49057;
})();
var statearr_49058_49134 = state_49038__$1;
(statearr_49058_49134[(2)] = null);

(statearr_49058_49134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (21))){
var inst_48960 = (state_49038[(2)]);
var state_49038__$1 = state_49038;
var statearr_49062_49135 = state_49038__$1;
(statearr_49062_49135[(2)] = inst_48960);

(statearr_49062_49135[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (31))){
var inst_48986 = (state_49038[(11)]);
var inst_48990 = done.call(null,null);
var inst_48991 = cljs.core.async.untap_STAR_.call(null,m,inst_48986);
var state_49038__$1 = (function (){var statearr_49063 = state_49038;
(statearr_49063[(19)] = inst_48990);

return statearr_49063;
})();
var statearr_49064_49136 = state_49038__$1;
(statearr_49064_49136[(2)] = inst_48991);

(statearr_49064_49136[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (32))){
var inst_48978 = (state_49038[(20)]);
var inst_48979 = (state_49038[(9)]);
var inst_48980 = (state_49038[(21)]);
var inst_48981 = (state_49038[(12)]);
var inst_48993 = (state_49038[(2)]);
var inst_48994 = (inst_48981 + (1));
var tmp49059 = inst_48978;
var tmp49060 = inst_48979;
var tmp49061 = inst_48980;
var inst_48978__$1 = tmp49059;
var inst_48979__$1 = tmp49060;
var inst_48980__$1 = tmp49061;
var inst_48981__$1 = inst_48994;
var state_49038__$1 = (function (){var statearr_49065 = state_49038;
(statearr_49065[(20)] = inst_48978__$1);

(statearr_49065[(9)] = inst_48979__$1);

(statearr_49065[(22)] = inst_48993);

(statearr_49065[(21)] = inst_48980__$1);

(statearr_49065[(12)] = inst_48981__$1);

return statearr_49065;
})();
var statearr_49066_49137 = state_49038__$1;
(statearr_49066_49137[(2)] = null);

(statearr_49066_49137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (40))){
var inst_49006 = (state_49038[(23)]);
var inst_49010 = done.call(null,null);
var inst_49011 = cljs.core.async.untap_STAR_.call(null,m,inst_49006);
var state_49038__$1 = (function (){var statearr_49067 = state_49038;
(statearr_49067[(24)] = inst_49010);

return statearr_49067;
})();
var statearr_49068_49138 = state_49038__$1;
(statearr_49068_49138[(2)] = inst_49011);

(statearr_49068_49138[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (33))){
var inst_48997 = (state_49038[(25)]);
var inst_48999 = cljs.core.chunked_seq_QMARK_.call(null,inst_48997);
var state_49038__$1 = state_49038;
if(inst_48999){
var statearr_49069_49139 = state_49038__$1;
(statearr_49069_49139[(1)] = (36));

} else {
var statearr_49070_49140 = state_49038__$1;
(statearr_49070_49140[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (13))){
var inst_48927 = (state_49038[(26)]);
var inst_48930 = cljs.core.async.close_BANG_.call(null,inst_48927);
var state_49038__$1 = state_49038;
var statearr_49071_49141 = state_49038__$1;
(statearr_49071_49141[(2)] = inst_48930);

(statearr_49071_49141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (22))){
var inst_48950 = (state_49038[(8)]);
var inst_48953 = cljs.core.async.close_BANG_.call(null,inst_48950);
var state_49038__$1 = state_49038;
var statearr_49072_49142 = state_49038__$1;
(statearr_49072_49142[(2)] = inst_48953);

(statearr_49072_49142[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (36))){
var inst_48997 = (state_49038[(25)]);
var inst_49001 = cljs.core.chunk_first.call(null,inst_48997);
var inst_49002 = cljs.core.chunk_rest.call(null,inst_48997);
var inst_49003 = cljs.core.count.call(null,inst_49001);
var inst_48978 = inst_49002;
var inst_48979 = inst_49001;
var inst_48980 = inst_49003;
var inst_48981 = (0);
var state_49038__$1 = (function (){var statearr_49073 = state_49038;
(statearr_49073[(20)] = inst_48978);

(statearr_49073[(9)] = inst_48979);

(statearr_49073[(21)] = inst_48980);

(statearr_49073[(12)] = inst_48981);

return statearr_49073;
})();
var statearr_49074_49143 = state_49038__$1;
(statearr_49074_49143[(2)] = null);

(statearr_49074_49143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (41))){
var inst_48997 = (state_49038[(25)]);
var inst_49013 = (state_49038[(2)]);
var inst_49014 = cljs.core.next.call(null,inst_48997);
var inst_48978 = inst_49014;
var inst_48979 = null;
var inst_48980 = (0);
var inst_48981 = (0);
var state_49038__$1 = (function (){var statearr_49075 = state_49038;
(statearr_49075[(20)] = inst_48978);

(statearr_49075[(9)] = inst_48979);

(statearr_49075[(21)] = inst_48980);

(statearr_49075[(12)] = inst_48981);

(statearr_49075[(27)] = inst_49013);

return statearr_49075;
})();
var statearr_49076_49144 = state_49038__$1;
(statearr_49076_49144[(2)] = null);

(statearr_49076_49144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (43))){
var state_49038__$1 = state_49038;
var statearr_49077_49145 = state_49038__$1;
(statearr_49077_49145[(2)] = null);

(statearr_49077_49145[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (29))){
var inst_49022 = (state_49038[(2)]);
var state_49038__$1 = state_49038;
var statearr_49078_49146 = state_49038__$1;
(statearr_49078_49146[(2)] = inst_49022);

(statearr_49078_49146[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (44))){
var inst_49031 = (state_49038[(2)]);
var state_49038__$1 = (function (){var statearr_49079 = state_49038;
(statearr_49079[(28)] = inst_49031);

return statearr_49079;
})();
var statearr_49080_49147 = state_49038__$1;
(statearr_49080_49147[(2)] = null);

(statearr_49080_49147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (6))){
var inst_48970 = (state_49038[(29)]);
var inst_48969 = cljs.core.deref.call(null,cs);
var inst_48970__$1 = cljs.core.keys.call(null,inst_48969);
var inst_48971 = cljs.core.count.call(null,inst_48970__$1);
var inst_48972 = cljs.core.reset_BANG_.call(null,dctr,inst_48971);
var inst_48977 = cljs.core.seq.call(null,inst_48970__$1);
var inst_48978 = inst_48977;
var inst_48979 = null;
var inst_48980 = (0);
var inst_48981 = (0);
var state_49038__$1 = (function (){var statearr_49081 = state_49038;
(statearr_49081[(29)] = inst_48970__$1);

(statearr_49081[(20)] = inst_48978);

(statearr_49081[(9)] = inst_48979);

(statearr_49081[(30)] = inst_48972);

(statearr_49081[(21)] = inst_48980);

(statearr_49081[(12)] = inst_48981);

return statearr_49081;
})();
var statearr_49082_49148 = state_49038__$1;
(statearr_49082_49148[(2)] = null);

(statearr_49082_49148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (28))){
var inst_48978 = (state_49038[(20)]);
var inst_48997 = (state_49038[(25)]);
var inst_48997__$1 = cljs.core.seq.call(null,inst_48978);
var state_49038__$1 = (function (){var statearr_49083 = state_49038;
(statearr_49083[(25)] = inst_48997__$1);

return statearr_49083;
})();
if(inst_48997__$1){
var statearr_49084_49149 = state_49038__$1;
(statearr_49084_49149[(1)] = (33));

} else {
var statearr_49085_49150 = state_49038__$1;
(statearr_49085_49150[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (25))){
var inst_48980 = (state_49038[(21)]);
var inst_48981 = (state_49038[(12)]);
var inst_48983 = (inst_48981 < inst_48980);
var inst_48984 = inst_48983;
var state_49038__$1 = state_49038;
if(cljs.core.truth_(inst_48984)){
var statearr_49086_49151 = state_49038__$1;
(statearr_49086_49151[(1)] = (27));

} else {
var statearr_49087_49152 = state_49038__$1;
(statearr_49087_49152[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (34))){
var state_49038__$1 = state_49038;
var statearr_49088_49153 = state_49038__$1;
(statearr_49088_49153[(2)] = null);

(statearr_49088_49153[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (17))){
var state_49038__$1 = state_49038;
var statearr_49089_49154 = state_49038__$1;
(statearr_49089_49154[(2)] = null);

(statearr_49089_49154[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (3))){
var inst_49036 = (state_49038[(2)]);
var state_49038__$1 = state_49038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49038__$1,inst_49036);
} else {
if((state_val_49039 === (12))){
var inst_48965 = (state_49038[(2)]);
var state_49038__$1 = state_49038;
var statearr_49090_49155 = state_49038__$1;
(statearr_49090_49155[(2)] = inst_48965);

(statearr_49090_49155[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (2))){
var state_49038__$1 = state_49038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49038__$1,(4),ch);
} else {
if((state_val_49039 === (23))){
var state_49038__$1 = state_49038;
var statearr_49091_49156 = state_49038__$1;
(statearr_49091_49156[(2)] = null);

(statearr_49091_49156[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (35))){
var inst_49020 = (state_49038[(2)]);
var state_49038__$1 = state_49038;
var statearr_49092_49157 = state_49038__$1;
(statearr_49092_49157[(2)] = inst_49020);

(statearr_49092_49157[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (19))){
var inst_48937 = (state_49038[(7)]);
var inst_48941 = cljs.core.chunk_first.call(null,inst_48937);
var inst_48942 = cljs.core.chunk_rest.call(null,inst_48937);
var inst_48943 = cljs.core.count.call(null,inst_48941);
var inst_48915 = inst_48942;
var inst_48916 = inst_48941;
var inst_48917 = inst_48943;
var inst_48918 = (0);
var state_49038__$1 = (function (){var statearr_49093 = state_49038;
(statearr_49093[(14)] = inst_48916);

(statearr_49093[(15)] = inst_48915);

(statearr_49093[(16)] = inst_48918);

(statearr_49093[(17)] = inst_48917);

return statearr_49093;
})();
var statearr_49094_49158 = state_49038__$1;
(statearr_49094_49158[(2)] = null);

(statearr_49094_49158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (11))){
var inst_48937 = (state_49038[(7)]);
var inst_48915 = (state_49038[(15)]);
var inst_48937__$1 = cljs.core.seq.call(null,inst_48915);
var state_49038__$1 = (function (){var statearr_49095 = state_49038;
(statearr_49095[(7)] = inst_48937__$1);

return statearr_49095;
})();
if(inst_48937__$1){
var statearr_49096_49159 = state_49038__$1;
(statearr_49096_49159[(1)] = (16));

} else {
var statearr_49097_49160 = state_49038__$1;
(statearr_49097_49160[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (9))){
var inst_48967 = (state_49038[(2)]);
var state_49038__$1 = state_49038;
var statearr_49098_49161 = state_49038__$1;
(statearr_49098_49161[(2)] = inst_48967);

(statearr_49098_49161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (5))){
var inst_48913 = cljs.core.deref.call(null,cs);
var inst_48914 = cljs.core.seq.call(null,inst_48913);
var inst_48915 = inst_48914;
var inst_48916 = null;
var inst_48917 = (0);
var inst_48918 = (0);
var state_49038__$1 = (function (){var statearr_49099 = state_49038;
(statearr_49099[(14)] = inst_48916);

(statearr_49099[(15)] = inst_48915);

(statearr_49099[(16)] = inst_48918);

(statearr_49099[(17)] = inst_48917);

return statearr_49099;
})();
var statearr_49100_49162 = state_49038__$1;
(statearr_49100_49162[(2)] = null);

(statearr_49100_49162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (14))){
var state_49038__$1 = state_49038;
var statearr_49101_49163 = state_49038__$1;
(statearr_49101_49163[(2)] = null);

(statearr_49101_49163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (45))){
var inst_49028 = (state_49038[(2)]);
var state_49038__$1 = state_49038;
var statearr_49102_49164 = state_49038__$1;
(statearr_49102_49164[(2)] = inst_49028);

(statearr_49102_49164[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (26))){
var inst_48970 = (state_49038[(29)]);
var inst_49024 = (state_49038[(2)]);
var inst_49025 = cljs.core.seq.call(null,inst_48970);
var state_49038__$1 = (function (){var statearr_49103 = state_49038;
(statearr_49103[(31)] = inst_49024);

return statearr_49103;
})();
if(inst_49025){
var statearr_49104_49165 = state_49038__$1;
(statearr_49104_49165[(1)] = (42));

} else {
var statearr_49105_49166 = state_49038__$1;
(statearr_49105_49166[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (16))){
var inst_48937 = (state_49038[(7)]);
var inst_48939 = cljs.core.chunked_seq_QMARK_.call(null,inst_48937);
var state_49038__$1 = state_49038;
if(inst_48939){
var statearr_49106_49167 = state_49038__$1;
(statearr_49106_49167[(1)] = (19));

} else {
var statearr_49107_49168 = state_49038__$1;
(statearr_49107_49168[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (38))){
var inst_49017 = (state_49038[(2)]);
var state_49038__$1 = state_49038;
var statearr_49108_49169 = state_49038__$1;
(statearr_49108_49169[(2)] = inst_49017);

(statearr_49108_49169[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (30))){
var state_49038__$1 = state_49038;
var statearr_49109_49170 = state_49038__$1;
(statearr_49109_49170[(2)] = null);

(statearr_49109_49170[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (10))){
var inst_48916 = (state_49038[(14)]);
var inst_48918 = (state_49038[(16)]);
var inst_48926 = cljs.core._nth.call(null,inst_48916,inst_48918);
var inst_48927 = cljs.core.nth.call(null,inst_48926,(0),null);
var inst_48928 = cljs.core.nth.call(null,inst_48926,(1),null);
var state_49038__$1 = (function (){var statearr_49110 = state_49038;
(statearr_49110[(26)] = inst_48927);

return statearr_49110;
})();
if(cljs.core.truth_(inst_48928)){
var statearr_49111_49171 = state_49038__$1;
(statearr_49111_49171[(1)] = (13));

} else {
var statearr_49112_49172 = state_49038__$1;
(statearr_49112_49172[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (18))){
var inst_48963 = (state_49038[(2)]);
var state_49038__$1 = state_49038;
var statearr_49113_49173 = state_49038__$1;
(statearr_49113_49173[(2)] = inst_48963);

(statearr_49113_49173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (42))){
var state_49038__$1 = state_49038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49038__$1,(45),dchan);
} else {
if((state_val_49039 === (37))){
var inst_48906 = (state_49038[(10)]);
var inst_48997 = (state_49038[(25)]);
var inst_49006 = (state_49038[(23)]);
var inst_49006__$1 = cljs.core.first.call(null,inst_48997);
var inst_49007 = cljs.core.async.put_BANG_.call(null,inst_49006__$1,inst_48906,done);
var state_49038__$1 = (function (){var statearr_49114 = state_49038;
(statearr_49114[(23)] = inst_49006__$1);

return statearr_49114;
})();
if(cljs.core.truth_(inst_49007)){
var statearr_49115_49174 = state_49038__$1;
(statearr_49115_49174[(1)] = (39));

} else {
var statearr_49116_49175 = state_49038__$1;
(statearr_49116_49175[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49039 === (8))){
var inst_48918 = (state_49038[(16)]);
var inst_48917 = (state_49038[(17)]);
var inst_48920 = (inst_48918 < inst_48917);
var inst_48921 = inst_48920;
var state_49038__$1 = state_49038;
if(cljs.core.truth_(inst_48921)){
var statearr_49117_49176 = state_49038__$1;
(statearr_49117_49176[(1)] = (10));

} else {
var statearr_49118_49177 = state_49038__$1;
(statearr_49118_49177[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48318__auto___49123,cs,m,dchan,dctr,done))
;
return ((function (switch__48230__auto__,c__48318__auto___49123,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__48231__auto__ = null;
var cljs$core$async$mult_$_state_machine__48231__auto____0 = (function (){
var statearr_49119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49119[(0)] = cljs$core$async$mult_$_state_machine__48231__auto__);

(statearr_49119[(1)] = (1));

return statearr_49119;
});
var cljs$core$async$mult_$_state_machine__48231__auto____1 = (function (state_49038){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_49038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e49120){if((e49120 instanceof Object)){
var ex__48234__auto__ = e49120;
var statearr_49121_49178 = state_49038;
(statearr_49121_49178[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49179 = state_49038;
state_49038 = G__49179;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48231__auto__ = function(state_49038){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48231__auto____1.call(this,state_49038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48231__auto____0;
cljs$core$async$mult_$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48231__auto____1;
return cljs$core$async$mult_$_state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto___49123,cs,m,dchan,dctr,done))
})();
var state__48320__auto__ = (function (){var statearr_49122 = f__48319__auto__.call(null);
(statearr_49122[(6)] = c__48318__auto___49123);

return statearr_49122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto___49123,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__49181 = arguments.length;
switch (G__49181) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__35717__auto__ = (((m == null))?null:m);
var m__35718__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,m,ch);
} else {
var m__35718__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__35717__auto__ = (((m == null))?null:m);
var m__35718__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,m,ch);
} else {
var m__35718__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__35717__auto__ = (((m == null))?null:m);
var m__35718__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,m);
} else {
var m__35718__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__35717__auto__ = (((m == null))?null:m);
var m__35718__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,m,state_map);
} else {
var m__35718__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__35717__auto__ = (((m == null))?null:m);
var m__35718__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,m,mode);
} else {
var m__35718__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__36180__auto__ = [];
var len__36173__auto___49193 = arguments.length;
var i__36174__auto___49194 = (0);
while(true){
if((i__36174__auto___49194 < len__36173__auto___49193)){
args__36180__auto__.push((arguments[i__36174__auto___49194]));

var G__49195 = (i__36174__auto___49194 + (1));
i__36174__auto___49194 = G__49195;
continue;
} else {
}
break;
}

var argseq__36181__auto__ = ((((3) < args__36180__auto__.length))?(new cljs.core.IndexedSeq(args__36180__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36181__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__49187){
var map__49188 = p__49187;
var map__49188__$1 = ((((!((map__49188 == null)))?((((map__49188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49188):map__49188);
var opts = map__49188__$1;
var statearr_49190_49196 = state;
(statearr_49190_49196[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__49188,map__49188__$1,opts){
return (function (val){
var statearr_49191_49197 = state;
(statearr_49191_49197[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__49188,map__49188__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_49192_49198 = state;
(statearr_49192_49198[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq49183){
var G__49184 = cljs.core.first.call(null,seq49183);
var seq49183__$1 = cljs.core.next.call(null,seq49183);
var G__49185 = cljs.core.first.call(null,seq49183__$1);
var seq49183__$2 = cljs.core.next.call(null,seq49183__$1);
var G__49186 = cljs.core.first.call(null,seq49183__$2);
var seq49183__$3 = cljs.core.next.call(null,seq49183__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49184,G__49185,G__49186,seq49183__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async49199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49199 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta49200){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta49200 = meta49200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49201,meta49200__$1){
var self__ = this;
var _49201__$1 = this;
return (new cljs.core.async.t_cljs$core$async49199(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta49200__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49201){
var self__ = this;
var _49201__$1 = this;
return self__.meta49200;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49199.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49199.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49199.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49199.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49199.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49199.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49199.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49199.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49199.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta49200","meta49200",-2063546688,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49199";

cljs.core.async.t_cljs$core$async49199.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"cljs.core.async/t_cljs$core$async49199");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async49199 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async49199(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta49200){
return (new cljs.core.async.t_cljs$core$async49199(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta49200));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async49199(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48318__auto___49363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto___49363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto___49363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_49303){
var state_val_49304 = (state_49303[(1)]);
if((state_val_49304 === (7))){
var inst_49218 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49305_49364 = state_49303__$1;
(statearr_49305_49364[(2)] = inst_49218);

(statearr_49305_49364[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (20))){
var inst_49230 = (state_49303[(7)]);
var state_49303__$1 = state_49303;
var statearr_49306_49365 = state_49303__$1;
(statearr_49306_49365[(2)] = inst_49230);

(statearr_49306_49365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (27))){
var state_49303__$1 = state_49303;
var statearr_49307_49366 = state_49303__$1;
(statearr_49307_49366[(2)] = null);

(statearr_49307_49366[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (1))){
var inst_49205 = (state_49303[(8)]);
var inst_49205__$1 = calc_state.call(null);
var inst_49207 = (inst_49205__$1 == null);
var inst_49208 = cljs.core.not.call(null,inst_49207);
var state_49303__$1 = (function (){var statearr_49308 = state_49303;
(statearr_49308[(8)] = inst_49205__$1);

return statearr_49308;
})();
if(inst_49208){
var statearr_49309_49367 = state_49303__$1;
(statearr_49309_49367[(1)] = (2));

} else {
var statearr_49310_49368 = state_49303__$1;
(statearr_49310_49368[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (24))){
var inst_49254 = (state_49303[(9)]);
var inst_49263 = (state_49303[(10)]);
var inst_49277 = (state_49303[(11)]);
var inst_49277__$1 = inst_49254.call(null,inst_49263);
var state_49303__$1 = (function (){var statearr_49311 = state_49303;
(statearr_49311[(11)] = inst_49277__$1);

return statearr_49311;
})();
if(cljs.core.truth_(inst_49277__$1)){
var statearr_49312_49369 = state_49303__$1;
(statearr_49312_49369[(1)] = (29));

} else {
var statearr_49313_49370 = state_49303__$1;
(statearr_49313_49370[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (4))){
var inst_49221 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
if(cljs.core.truth_(inst_49221)){
var statearr_49314_49371 = state_49303__$1;
(statearr_49314_49371[(1)] = (8));

} else {
var statearr_49315_49372 = state_49303__$1;
(statearr_49315_49372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (15))){
var inst_49248 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
if(cljs.core.truth_(inst_49248)){
var statearr_49316_49373 = state_49303__$1;
(statearr_49316_49373[(1)] = (19));

} else {
var statearr_49317_49374 = state_49303__$1;
(statearr_49317_49374[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (21))){
var inst_49253 = (state_49303[(12)]);
var inst_49253__$1 = (state_49303[(2)]);
var inst_49254 = cljs.core.get.call(null,inst_49253__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49255 = cljs.core.get.call(null,inst_49253__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49256 = cljs.core.get.call(null,inst_49253__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49303__$1 = (function (){var statearr_49318 = state_49303;
(statearr_49318[(9)] = inst_49254);

(statearr_49318[(12)] = inst_49253__$1);

(statearr_49318[(13)] = inst_49255);

return statearr_49318;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_49303__$1,(22),inst_49256);
} else {
if((state_val_49304 === (31))){
var inst_49285 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
if(cljs.core.truth_(inst_49285)){
var statearr_49319_49375 = state_49303__$1;
(statearr_49319_49375[(1)] = (32));

} else {
var statearr_49320_49376 = state_49303__$1;
(statearr_49320_49376[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (32))){
var inst_49262 = (state_49303[(14)]);
var state_49303__$1 = state_49303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49303__$1,(35),out,inst_49262);
} else {
if((state_val_49304 === (33))){
var inst_49253 = (state_49303[(12)]);
var inst_49230 = inst_49253;
var state_49303__$1 = (function (){var statearr_49321 = state_49303;
(statearr_49321[(7)] = inst_49230);

return statearr_49321;
})();
var statearr_49322_49377 = state_49303__$1;
(statearr_49322_49377[(2)] = null);

(statearr_49322_49377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (13))){
var inst_49230 = (state_49303[(7)]);
var inst_49237 = inst_49230.cljs$lang$protocol_mask$partition0$;
var inst_49238 = (inst_49237 & (64));
var inst_49239 = inst_49230.cljs$core$ISeq$;
var inst_49240 = (cljs.core.PROTOCOL_SENTINEL === inst_49239);
var inst_49241 = (inst_49238) || (inst_49240);
var state_49303__$1 = state_49303;
if(cljs.core.truth_(inst_49241)){
var statearr_49323_49378 = state_49303__$1;
(statearr_49323_49378[(1)] = (16));

} else {
var statearr_49324_49379 = state_49303__$1;
(statearr_49324_49379[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (22))){
var inst_49262 = (state_49303[(14)]);
var inst_49263 = (state_49303[(10)]);
var inst_49261 = (state_49303[(2)]);
var inst_49262__$1 = cljs.core.nth.call(null,inst_49261,(0),null);
var inst_49263__$1 = cljs.core.nth.call(null,inst_49261,(1),null);
var inst_49264 = (inst_49262__$1 == null);
var inst_49265 = cljs.core._EQ_.call(null,inst_49263__$1,change);
var inst_49266 = (inst_49264) || (inst_49265);
var state_49303__$1 = (function (){var statearr_49325 = state_49303;
(statearr_49325[(14)] = inst_49262__$1);

(statearr_49325[(10)] = inst_49263__$1);

return statearr_49325;
})();
if(cljs.core.truth_(inst_49266)){
var statearr_49326_49380 = state_49303__$1;
(statearr_49326_49380[(1)] = (23));

} else {
var statearr_49327_49381 = state_49303__$1;
(statearr_49327_49381[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (36))){
var inst_49253 = (state_49303[(12)]);
var inst_49230 = inst_49253;
var state_49303__$1 = (function (){var statearr_49328 = state_49303;
(statearr_49328[(7)] = inst_49230);

return statearr_49328;
})();
var statearr_49329_49382 = state_49303__$1;
(statearr_49329_49382[(2)] = null);

(statearr_49329_49382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (29))){
var inst_49277 = (state_49303[(11)]);
var state_49303__$1 = state_49303;
var statearr_49330_49383 = state_49303__$1;
(statearr_49330_49383[(2)] = inst_49277);

(statearr_49330_49383[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (6))){
var state_49303__$1 = state_49303;
var statearr_49331_49384 = state_49303__$1;
(statearr_49331_49384[(2)] = false);

(statearr_49331_49384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (28))){
var inst_49273 = (state_49303[(2)]);
var inst_49274 = calc_state.call(null);
var inst_49230 = inst_49274;
var state_49303__$1 = (function (){var statearr_49332 = state_49303;
(statearr_49332[(15)] = inst_49273);

(statearr_49332[(7)] = inst_49230);

return statearr_49332;
})();
var statearr_49333_49385 = state_49303__$1;
(statearr_49333_49385[(2)] = null);

(statearr_49333_49385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (25))){
var inst_49299 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49334_49386 = state_49303__$1;
(statearr_49334_49386[(2)] = inst_49299);

(statearr_49334_49386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (34))){
var inst_49297 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49335_49387 = state_49303__$1;
(statearr_49335_49387[(2)] = inst_49297);

(statearr_49335_49387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (17))){
var state_49303__$1 = state_49303;
var statearr_49336_49388 = state_49303__$1;
(statearr_49336_49388[(2)] = false);

(statearr_49336_49388[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (3))){
var state_49303__$1 = state_49303;
var statearr_49337_49389 = state_49303__$1;
(statearr_49337_49389[(2)] = false);

(statearr_49337_49389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (12))){
var inst_49301 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49303__$1,inst_49301);
} else {
if((state_val_49304 === (2))){
var inst_49205 = (state_49303[(8)]);
var inst_49210 = inst_49205.cljs$lang$protocol_mask$partition0$;
var inst_49211 = (inst_49210 & (64));
var inst_49212 = inst_49205.cljs$core$ISeq$;
var inst_49213 = (cljs.core.PROTOCOL_SENTINEL === inst_49212);
var inst_49214 = (inst_49211) || (inst_49213);
var state_49303__$1 = state_49303;
if(cljs.core.truth_(inst_49214)){
var statearr_49338_49390 = state_49303__$1;
(statearr_49338_49390[(1)] = (5));

} else {
var statearr_49339_49391 = state_49303__$1;
(statearr_49339_49391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (23))){
var inst_49262 = (state_49303[(14)]);
var inst_49268 = (inst_49262 == null);
var state_49303__$1 = state_49303;
if(cljs.core.truth_(inst_49268)){
var statearr_49340_49392 = state_49303__$1;
(statearr_49340_49392[(1)] = (26));

} else {
var statearr_49341_49393 = state_49303__$1;
(statearr_49341_49393[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (35))){
var inst_49288 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
if(cljs.core.truth_(inst_49288)){
var statearr_49342_49394 = state_49303__$1;
(statearr_49342_49394[(1)] = (36));

} else {
var statearr_49343_49395 = state_49303__$1;
(statearr_49343_49395[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (19))){
var inst_49230 = (state_49303[(7)]);
var inst_49250 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49230);
var state_49303__$1 = state_49303;
var statearr_49344_49396 = state_49303__$1;
(statearr_49344_49396[(2)] = inst_49250);

(statearr_49344_49396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (11))){
var inst_49230 = (state_49303[(7)]);
var inst_49234 = (inst_49230 == null);
var inst_49235 = cljs.core.not.call(null,inst_49234);
var state_49303__$1 = state_49303;
if(inst_49235){
var statearr_49345_49397 = state_49303__$1;
(statearr_49345_49397[(1)] = (13));

} else {
var statearr_49346_49398 = state_49303__$1;
(statearr_49346_49398[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (9))){
var inst_49205 = (state_49303[(8)]);
var state_49303__$1 = state_49303;
var statearr_49347_49399 = state_49303__$1;
(statearr_49347_49399[(2)] = inst_49205);

(statearr_49347_49399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (5))){
var state_49303__$1 = state_49303;
var statearr_49348_49400 = state_49303__$1;
(statearr_49348_49400[(2)] = true);

(statearr_49348_49400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (14))){
var state_49303__$1 = state_49303;
var statearr_49349_49401 = state_49303__$1;
(statearr_49349_49401[(2)] = false);

(statearr_49349_49401[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (26))){
var inst_49263 = (state_49303[(10)]);
var inst_49270 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_49263);
var state_49303__$1 = state_49303;
var statearr_49350_49402 = state_49303__$1;
(statearr_49350_49402[(2)] = inst_49270);

(statearr_49350_49402[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (16))){
var state_49303__$1 = state_49303;
var statearr_49351_49403 = state_49303__$1;
(statearr_49351_49403[(2)] = true);

(statearr_49351_49403[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (38))){
var inst_49293 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49352_49404 = state_49303__$1;
(statearr_49352_49404[(2)] = inst_49293);

(statearr_49352_49404[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (30))){
var inst_49254 = (state_49303[(9)]);
var inst_49263 = (state_49303[(10)]);
var inst_49255 = (state_49303[(13)]);
var inst_49280 = cljs.core.empty_QMARK_.call(null,inst_49254);
var inst_49281 = inst_49255.call(null,inst_49263);
var inst_49282 = cljs.core.not.call(null,inst_49281);
var inst_49283 = (inst_49280) && (inst_49282);
var state_49303__$1 = state_49303;
var statearr_49353_49405 = state_49303__$1;
(statearr_49353_49405[(2)] = inst_49283);

(statearr_49353_49405[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (10))){
var inst_49205 = (state_49303[(8)]);
var inst_49226 = (state_49303[(2)]);
var inst_49227 = cljs.core.get.call(null,inst_49226,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49228 = cljs.core.get.call(null,inst_49226,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49229 = cljs.core.get.call(null,inst_49226,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49230 = inst_49205;
var state_49303__$1 = (function (){var statearr_49354 = state_49303;
(statearr_49354[(16)] = inst_49228);

(statearr_49354[(17)] = inst_49229);

(statearr_49354[(18)] = inst_49227);

(statearr_49354[(7)] = inst_49230);

return statearr_49354;
})();
var statearr_49355_49406 = state_49303__$1;
(statearr_49355_49406[(2)] = null);

(statearr_49355_49406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (18))){
var inst_49245 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49356_49407 = state_49303__$1;
(statearr_49356_49407[(2)] = inst_49245);

(statearr_49356_49407[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (37))){
var state_49303__$1 = state_49303;
var statearr_49357_49408 = state_49303__$1;
(statearr_49357_49408[(2)] = null);

(statearr_49357_49408[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (8))){
var inst_49205 = (state_49303[(8)]);
var inst_49223 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49205);
var state_49303__$1 = state_49303;
var statearr_49358_49409 = state_49303__$1;
(statearr_49358_49409[(2)] = inst_49223);

(statearr_49358_49409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48318__auto___49363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__48230__auto__,c__48318__auto___49363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__48231__auto__ = null;
var cljs$core$async$mix_$_state_machine__48231__auto____0 = (function (){
var statearr_49359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49359[(0)] = cljs$core$async$mix_$_state_machine__48231__auto__);

(statearr_49359[(1)] = (1));

return statearr_49359;
});
var cljs$core$async$mix_$_state_machine__48231__auto____1 = (function (state_49303){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_49303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e49360){if((e49360 instanceof Object)){
var ex__48234__auto__ = e49360;
var statearr_49361_49410 = state_49303;
(statearr_49361_49410[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49411 = state_49303;
state_49303 = G__49411;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48231__auto__ = function(state_49303){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48231__auto____1.call(this,state_49303);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48231__auto____0;
cljs$core$async$mix_$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48231__auto____1;
return cljs$core$async$mix_$_state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto___49363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__48320__auto__ = (function (){var statearr_49362 = f__48319__auto__.call(null);
(statearr_49362[(6)] = c__48318__auto___49363);

return statearr_49362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto___49363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__35717__auto__ = (((p == null))?null:p);
var m__35718__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__35718__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__35717__auto__ = (((p == null))?null:p);
var m__35718__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,p,v,ch);
} else {
var m__35718__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__49413 = arguments.length;
switch (G__49413) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__35717__auto__ = (((p == null))?null:p);
var m__35718__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,p);
} else {
var m__35718__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__35717__auto__ = (((p == null))?null:p);
var m__35718__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__35717__auto__)]);
if(!((m__35718__auto__ == null))){
return m__35718__auto__.call(null,p,v);
} else {
var m__35718__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__35718__auto____$1 == null))){
return m__35718__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__49417 = arguments.length;
switch (G__49417) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__35048__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__35048__auto__)){
return or__35048__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__35048__auto__,mults){
return (function (p1__49415_SHARP_){
if(cljs.core.truth_(p1__49415_SHARP_.call(null,topic))){
return p1__49415_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__49415_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35048__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async49418 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49418 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49419){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49419 = meta49419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_49420,meta49419__$1){
var self__ = this;
var _49420__$1 = this;
return (new cljs.core.async.t_cljs$core$async49418(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49419__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_49420){
var self__ = this;
var _49420__$1 = this;
return self__.meta49419;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49418.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49418.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49418.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49418.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49418.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49418.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49418.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49419","meta49419",-455103457,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49418";

cljs.core.async.t_cljs$core$async49418.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"cljs.core.async/t_cljs$core$async49418");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async49418 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async49418(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49419){
return (new cljs.core.async.t_cljs$core$async49418(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49419));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async49418(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48318__auto___49538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto___49538,mults,ensure_mult,p){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto___49538,mults,ensure_mult,p){
return (function (state_49492){
var state_val_49493 = (state_49492[(1)]);
if((state_val_49493 === (7))){
var inst_49488 = (state_49492[(2)]);
var state_49492__$1 = state_49492;
var statearr_49494_49539 = state_49492__$1;
(statearr_49494_49539[(2)] = inst_49488);

(statearr_49494_49539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (20))){
var state_49492__$1 = state_49492;
var statearr_49495_49540 = state_49492__$1;
(statearr_49495_49540[(2)] = null);

(statearr_49495_49540[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (1))){
var state_49492__$1 = state_49492;
var statearr_49496_49541 = state_49492__$1;
(statearr_49496_49541[(2)] = null);

(statearr_49496_49541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (24))){
var inst_49471 = (state_49492[(7)]);
var inst_49480 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_49471);
var state_49492__$1 = state_49492;
var statearr_49497_49542 = state_49492__$1;
(statearr_49497_49542[(2)] = inst_49480);

(statearr_49497_49542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (4))){
var inst_49423 = (state_49492[(8)]);
var inst_49423__$1 = (state_49492[(2)]);
var inst_49424 = (inst_49423__$1 == null);
var state_49492__$1 = (function (){var statearr_49498 = state_49492;
(statearr_49498[(8)] = inst_49423__$1);

return statearr_49498;
})();
if(cljs.core.truth_(inst_49424)){
var statearr_49499_49543 = state_49492__$1;
(statearr_49499_49543[(1)] = (5));

} else {
var statearr_49500_49544 = state_49492__$1;
(statearr_49500_49544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (15))){
var inst_49465 = (state_49492[(2)]);
var state_49492__$1 = state_49492;
var statearr_49501_49545 = state_49492__$1;
(statearr_49501_49545[(2)] = inst_49465);

(statearr_49501_49545[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (21))){
var inst_49485 = (state_49492[(2)]);
var state_49492__$1 = (function (){var statearr_49502 = state_49492;
(statearr_49502[(9)] = inst_49485);

return statearr_49502;
})();
var statearr_49503_49546 = state_49492__$1;
(statearr_49503_49546[(2)] = null);

(statearr_49503_49546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (13))){
var inst_49447 = (state_49492[(10)]);
var inst_49449 = cljs.core.chunked_seq_QMARK_.call(null,inst_49447);
var state_49492__$1 = state_49492;
if(inst_49449){
var statearr_49504_49547 = state_49492__$1;
(statearr_49504_49547[(1)] = (16));

} else {
var statearr_49505_49548 = state_49492__$1;
(statearr_49505_49548[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (22))){
var inst_49477 = (state_49492[(2)]);
var state_49492__$1 = state_49492;
if(cljs.core.truth_(inst_49477)){
var statearr_49506_49549 = state_49492__$1;
(statearr_49506_49549[(1)] = (23));

} else {
var statearr_49507_49550 = state_49492__$1;
(statearr_49507_49550[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (6))){
var inst_49471 = (state_49492[(7)]);
var inst_49473 = (state_49492[(11)]);
var inst_49423 = (state_49492[(8)]);
var inst_49471__$1 = topic_fn.call(null,inst_49423);
var inst_49472 = cljs.core.deref.call(null,mults);
var inst_49473__$1 = cljs.core.get.call(null,inst_49472,inst_49471__$1);
var state_49492__$1 = (function (){var statearr_49508 = state_49492;
(statearr_49508[(7)] = inst_49471__$1);

(statearr_49508[(11)] = inst_49473__$1);

return statearr_49508;
})();
if(cljs.core.truth_(inst_49473__$1)){
var statearr_49509_49551 = state_49492__$1;
(statearr_49509_49551[(1)] = (19));

} else {
var statearr_49510_49552 = state_49492__$1;
(statearr_49510_49552[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (25))){
var inst_49482 = (state_49492[(2)]);
var state_49492__$1 = state_49492;
var statearr_49511_49553 = state_49492__$1;
(statearr_49511_49553[(2)] = inst_49482);

(statearr_49511_49553[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (17))){
var inst_49447 = (state_49492[(10)]);
var inst_49456 = cljs.core.first.call(null,inst_49447);
var inst_49457 = cljs.core.async.muxch_STAR_.call(null,inst_49456);
var inst_49458 = cljs.core.async.close_BANG_.call(null,inst_49457);
var inst_49459 = cljs.core.next.call(null,inst_49447);
var inst_49433 = inst_49459;
var inst_49434 = null;
var inst_49435 = (0);
var inst_49436 = (0);
var state_49492__$1 = (function (){var statearr_49512 = state_49492;
(statearr_49512[(12)] = inst_49436);

(statearr_49512[(13)] = inst_49458);

(statearr_49512[(14)] = inst_49434);

(statearr_49512[(15)] = inst_49435);

(statearr_49512[(16)] = inst_49433);

return statearr_49512;
})();
var statearr_49513_49554 = state_49492__$1;
(statearr_49513_49554[(2)] = null);

(statearr_49513_49554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (3))){
var inst_49490 = (state_49492[(2)]);
var state_49492__$1 = state_49492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49492__$1,inst_49490);
} else {
if((state_val_49493 === (12))){
var inst_49467 = (state_49492[(2)]);
var state_49492__$1 = state_49492;
var statearr_49514_49555 = state_49492__$1;
(statearr_49514_49555[(2)] = inst_49467);

(statearr_49514_49555[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (2))){
var state_49492__$1 = state_49492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49492__$1,(4),ch);
} else {
if((state_val_49493 === (23))){
var state_49492__$1 = state_49492;
var statearr_49515_49556 = state_49492__$1;
(statearr_49515_49556[(2)] = null);

(statearr_49515_49556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (19))){
var inst_49473 = (state_49492[(11)]);
var inst_49423 = (state_49492[(8)]);
var inst_49475 = cljs.core.async.muxch_STAR_.call(null,inst_49473);
var state_49492__$1 = state_49492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49492__$1,(22),inst_49475,inst_49423);
} else {
if((state_val_49493 === (11))){
var inst_49447 = (state_49492[(10)]);
var inst_49433 = (state_49492[(16)]);
var inst_49447__$1 = cljs.core.seq.call(null,inst_49433);
var state_49492__$1 = (function (){var statearr_49516 = state_49492;
(statearr_49516[(10)] = inst_49447__$1);

return statearr_49516;
})();
if(inst_49447__$1){
var statearr_49517_49557 = state_49492__$1;
(statearr_49517_49557[(1)] = (13));

} else {
var statearr_49518_49558 = state_49492__$1;
(statearr_49518_49558[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (9))){
var inst_49469 = (state_49492[(2)]);
var state_49492__$1 = state_49492;
var statearr_49519_49559 = state_49492__$1;
(statearr_49519_49559[(2)] = inst_49469);

(statearr_49519_49559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (5))){
var inst_49430 = cljs.core.deref.call(null,mults);
var inst_49431 = cljs.core.vals.call(null,inst_49430);
var inst_49432 = cljs.core.seq.call(null,inst_49431);
var inst_49433 = inst_49432;
var inst_49434 = null;
var inst_49435 = (0);
var inst_49436 = (0);
var state_49492__$1 = (function (){var statearr_49520 = state_49492;
(statearr_49520[(12)] = inst_49436);

(statearr_49520[(14)] = inst_49434);

(statearr_49520[(15)] = inst_49435);

(statearr_49520[(16)] = inst_49433);

return statearr_49520;
})();
var statearr_49521_49560 = state_49492__$1;
(statearr_49521_49560[(2)] = null);

(statearr_49521_49560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (14))){
var state_49492__$1 = state_49492;
var statearr_49525_49561 = state_49492__$1;
(statearr_49525_49561[(2)] = null);

(statearr_49525_49561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (16))){
var inst_49447 = (state_49492[(10)]);
var inst_49451 = cljs.core.chunk_first.call(null,inst_49447);
var inst_49452 = cljs.core.chunk_rest.call(null,inst_49447);
var inst_49453 = cljs.core.count.call(null,inst_49451);
var inst_49433 = inst_49452;
var inst_49434 = inst_49451;
var inst_49435 = inst_49453;
var inst_49436 = (0);
var state_49492__$1 = (function (){var statearr_49526 = state_49492;
(statearr_49526[(12)] = inst_49436);

(statearr_49526[(14)] = inst_49434);

(statearr_49526[(15)] = inst_49435);

(statearr_49526[(16)] = inst_49433);

return statearr_49526;
})();
var statearr_49527_49562 = state_49492__$1;
(statearr_49527_49562[(2)] = null);

(statearr_49527_49562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (10))){
var inst_49436 = (state_49492[(12)]);
var inst_49434 = (state_49492[(14)]);
var inst_49435 = (state_49492[(15)]);
var inst_49433 = (state_49492[(16)]);
var inst_49441 = cljs.core._nth.call(null,inst_49434,inst_49436);
var inst_49442 = cljs.core.async.muxch_STAR_.call(null,inst_49441);
var inst_49443 = cljs.core.async.close_BANG_.call(null,inst_49442);
var inst_49444 = (inst_49436 + (1));
var tmp49522 = inst_49434;
var tmp49523 = inst_49435;
var tmp49524 = inst_49433;
var inst_49433__$1 = tmp49524;
var inst_49434__$1 = tmp49522;
var inst_49435__$1 = tmp49523;
var inst_49436__$1 = inst_49444;
var state_49492__$1 = (function (){var statearr_49528 = state_49492;
(statearr_49528[(12)] = inst_49436__$1);

(statearr_49528[(14)] = inst_49434__$1);

(statearr_49528[(17)] = inst_49443);

(statearr_49528[(15)] = inst_49435__$1);

(statearr_49528[(16)] = inst_49433__$1);

return statearr_49528;
})();
var statearr_49529_49563 = state_49492__$1;
(statearr_49529_49563[(2)] = null);

(statearr_49529_49563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (18))){
var inst_49462 = (state_49492[(2)]);
var state_49492__$1 = state_49492;
var statearr_49530_49564 = state_49492__$1;
(statearr_49530_49564[(2)] = inst_49462);

(statearr_49530_49564[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (8))){
var inst_49436 = (state_49492[(12)]);
var inst_49435 = (state_49492[(15)]);
var inst_49438 = (inst_49436 < inst_49435);
var inst_49439 = inst_49438;
var state_49492__$1 = state_49492;
if(cljs.core.truth_(inst_49439)){
var statearr_49531_49565 = state_49492__$1;
(statearr_49531_49565[(1)] = (10));

} else {
var statearr_49532_49566 = state_49492__$1;
(statearr_49532_49566[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48318__auto___49538,mults,ensure_mult,p))
;
return ((function (switch__48230__auto__,c__48318__auto___49538,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__48231__auto__ = null;
var cljs$core$async$state_machine__48231__auto____0 = (function (){
var statearr_49533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49533[(0)] = cljs$core$async$state_machine__48231__auto__);

(statearr_49533[(1)] = (1));

return statearr_49533;
});
var cljs$core$async$state_machine__48231__auto____1 = (function (state_49492){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_49492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e49534){if((e49534 instanceof Object)){
var ex__48234__auto__ = e49534;
var statearr_49535_49567 = state_49492;
(statearr_49535_49567[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49568 = state_49492;
state_49492 = G__49568;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$state_machine__48231__auto__ = function(state_49492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48231__auto____1.call(this,state_49492);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48231__auto____0;
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48231__auto____1;
return cljs$core$async$state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto___49538,mults,ensure_mult,p))
})();
var state__48320__auto__ = (function (){var statearr_49536 = f__48319__auto__.call(null);
(statearr_49536[(6)] = c__48318__auto___49538);

return statearr_49536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto___49538,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__49570 = arguments.length;
switch (G__49570) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__49573 = arguments.length;
switch (G__49573) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__49576 = arguments.length;
switch (G__49576) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__48318__auto___49643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto___49643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto___49643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_49615){
var state_val_49616 = (state_49615[(1)]);
if((state_val_49616 === (7))){
var state_49615__$1 = state_49615;
var statearr_49617_49644 = state_49615__$1;
(statearr_49617_49644[(2)] = null);

(statearr_49617_49644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49616 === (1))){
var state_49615__$1 = state_49615;
var statearr_49618_49645 = state_49615__$1;
(statearr_49618_49645[(2)] = null);

(statearr_49618_49645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49616 === (4))){
var inst_49579 = (state_49615[(7)]);
var inst_49581 = (inst_49579 < cnt);
var state_49615__$1 = state_49615;
if(cljs.core.truth_(inst_49581)){
var statearr_49619_49646 = state_49615__$1;
(statearr_49619_49646[(1)] = (6));

} else {
var statearr_49620_49647 = state_49615__$1;
(statearr_49620_49647[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49616 === (15))){
var inst_49611 = (state_49615[(2)]);
var state_49615__$1 = state_49615;
var statearr_49621_49648 = state_49615__$1;
(statearr_49621_49648[(2)] = inst_49611);

(statearr_49621_49648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49616 === (13))){
var inst_49604 = cljs.core.async.close_BANG_.call(null,out);
var state_49615__$1 = state_49615;
var statearr_49622_49649 = state_49615__$1;
(statearr_49622_49649[(2)] = inst_49604);

(statearr_49622_49649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49616 === (6))){
var state_49615__$1 = state_49615;
var statearr_49623_49650 = state_49615__$1;
(statearr_49623_49650[(2)] = null);

(statearr_49623_49650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49616 === (3))){
var inst_49613 = (state_49615[(2)]);
var state_49615__$1 = state_49615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49615__$1,inst_49613);
} else {
if((state_val_49616 === (12))){
var inst_49601 = (state_49615[(8)]);
var inst_49601__$1 = (state_49615[(2)]);
var inst_49602 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_49601__$1);
var state_49615__$1 = (function (){var statearr_49624 = state_49615;
(statearr_49624[(8)] = inst_49601__$1);

return statearr_49624;
})();
if(cljs.core.truth_(inst_49602)){
var statearr_49625_49651 = state_49615__$1;
(statearr_49625_49651[(1)] = (13));

} else {
var statearr_49626_49652 = state_49615__$1;
(statearr_49626_49652[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49616 === (2))){
var inst_49578 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_49579 = (0);
var state_49615__$1 = (function (){var statearr_49627 = state_49615;
(statearr_49627[(9)] = inst_49578);

(statearr_49627[(7)] = inst_49579);

return statearr_49627;
})();
var statearr_49628_49653 = state_49615__$1;
(statearr_49628_49653[(2)] = null);

(statearr_49628_49653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49616 === (11))){
var inst_49579 = (state_49615[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49615,(10),Object,null,(9));
var inst_49588 = chs__$1.call(null,inst_49579);
var inst_49589 = done.call(null,inst_49579);
var inst_49590 = cljs.core.async.take_BANG_.call(null,inst_49588,inst_49589);
var state_49615__$1 = state_49615;
var statearr_49629_49654 = state_49615__$1;
(statearr_49629_49654[(2)] = inst_49590);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49615__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49616 === (9))){
var inst_49579 = (state_49615[(7)]);
var inst_49592 = (state_49615[(2)]);
var inst_49593 = (inst_49579 + (1));
var inst_49579__$1 = inst_49593;
var state_49615__$1 = (function (){var statearr_49630 = state_49615;
(statearr_49630[(10)] = inst_49592);

(statearr_49630[(7)] = inst_49579__$1);

return statearr_49630;
})();
var statearr_49631_49655 = state_49615__$1;
(statearr_49631_49655[(2)] = null);

(statearr_49631_49655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49616 === (5))){
var inst_49599 = (state_49615[(2)]);
var state_49615__$1 = (function (){var statearr_49632 = state_49615;
(statearr_49632[(11)] = inst_49599);

return statearr_49632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49615__$1,(12),dchan);
} else {
if((state_val_49616 === (14))){
var inst_49601 = (state_49615[(8)]);
var inst_49606 = cljs.core.apply.call(null,f,inst_49601);
var state_49615__$1 = state_49615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49615__$1,(16),out,inst_49606);
} else {
if((state_val_49616 === (16))){
var inst_49608 = (state_49615[(2)]);
var state_49615__$1 = (function (){var statearr_49633 = state_49615;
(statearr_49633[(12)] = inst_49608);

return statearr_49633;
})();
var statearr_49634_49656 = state_49615__$1;
(statearr_49634_49656[(2)] = null);

(statearr_49634_49656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49616 === (10))){
var inst_49583 = (state_49615[(2)]);
var inst_49584 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_49615__$1 = (function (){var statearr_49635 = state_49615;
(statearr_49635[(13)] = inst_49583);

return statearr_49635;
})();
var statearr_49636_49657 = state_49615__$1;
(statearr_49636_49657[(2)] = inst_49584);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49615__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49616 === (8))){
var inst_49597 = (state_49615[(2)]);
var state_49615__$1 = state_49615;
var statearr_49637_49658 = state_49615__$1;
(statearr_49637_49658[(2)] = inst_49597);

(statearr_49637_49658[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48318__auto___49643,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__48230__auto__,c__48318__auto___49643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__48231__auto__ = null;
var cljs$core$async$state_machine__48231__auto____0 = (function (){
var statearr_49638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49638[(0)] = cljs$core$async$state_machine__48231__auto__);

(statearr_49638[(1)] = (1));

return statearr_49638;
});
var cljs$core$async$state_machine__48231__auto____1 = (function (state_49615){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_49615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e49639){if((e49639 instanceof Object)){
var ex__48234__auto__ = e49639;
var statearr_49640_49659 = state_49615;
(statearr_49640_49659[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49660 = state_49615;
state_49615 = G__49660;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$state_machine__48231__auto__ = function(state_49615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48231__auto____1.call(this,state_49615);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48231__auto____0;
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48231__auto____1;
return cljs$core$async$state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto___49643,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__48320__auto__ = (function (){var statearr_49641 = f__48319__auto__.call(null);
(statearr_49641[(6)] = c__48318__auto___49643);

return statearr_49641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto___49643,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__49663 = arguments.length;
switch (G__49663) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48318__auto___49717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto___49717,out){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto___49717,out){
return (function (state_49695){
var state_val_49696 = (state_49695[(1)]);
if((state_val_49696 === (7))){
var inst_49674 = (state_49695[(7)]);
var inst_49675 = (state_49695[(8)]);
var inst_49674__$1 = (state_49695[(2)]);
var inst_49675__$1 = cljs.core.nth.call(null,inst_49674__$1,(0),null);
var inst_49676 = cljs.core.nth.call(null,inst_49674__$1,(1),null);
var inst_49677 = (inst_49675__$1 == null);
var state_49695__$1 = (function (){var statearr_49697 = state_49695;
(statearr_49697[(9)] = inst_49676);

(statearr_49697[(7)] = inst_49674__$1);

(statearr_49697[(8)] = inst_49675__$1);

return statearr_49697;
})();
if(cljs.core.truth_(inst_49677)){
var statearr_49698_49718 = state_49695__$1;
(statearr_49698_49718[(1)] = (8));

} else {
var statearr_49699_49719 = state_49695__$1;
(statearr_49699_49719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49696 === (1))){
var inst_49664 = cljs.core.vec.call(null,chs);
var inst_49665 = inst_49664;
var state_49695__$1 = (function (){var statearr_49700 = state_49695;
(statearr_49700[(10)] = inst_49665);

return statearr_49700;
})();
var statearr_49701_49720 = state_49695__$1;
(statearr_49701_49720[(2)] = null);

(statearr_49701_49720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49696 === (4))){
var inst_49665 = (state_49695[(10)]);
var state_49695__$1 = state_49695;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49695__$1,(7),inst_49665);
} else {
if((state_val_49696 === (6))){
var inst_49691 = (state_49695[(2)]);
var state_49695__$1 = state_49695;
var statearr_49702_49721 = state_49695__$1;
(statearr_49702_49721[(2)] = inst_49691);

(statearr_49702_49721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49696 === (3))){
var inst_49693 = (state_49695[(2)]);
var state_49695__$1 = state_49695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49695__$1,inst_49693);
} else {
if((state_val_49696 === (2))){
var inst_49665 = (state_49695[(10)]);
var inst_49667 = cljs.core.count.call(null,inst_49665);
var inst_49668 = (inst_49667 > (0));
var state_49695__$1 = state_49695;
if(cljs.core.truth_(inst_49668)){
var statearr_49704_49722 = state_49695__$1;
(statearr_49704_49722[(1)] = (4));

} else {
var statearr_49705_49723 = state_49695__$1;
(statearr_49705_49723[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49696 === (11))){
var inst_49665 = (state_49695[(10)]);
var inst_49684 = (state_49695[(2)]);
var tmp49703 = inst_49665;
var inst_49665__$1 = tmp49703;
var state_49695__$1 = (function (){var statearr_49706 = state_49695;
(statearr_49706[(11)] = inst_49684);

(statearr_49706[(10)] = inst_49665__$1);

return statearr_49706;
})();
var statearr_49707_49724 = state_49695__$1;
(statearr_49707_49724[(2)] = null);

(statearr_49707_49724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49696 === (9))){
var inst_49675 = (state_49695[(8)]);
var state_49695__$1 = state_49695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49695__$1,(11),out,inst_49675);
} else {
if((state_val_49696 === (5))){
var inst_49689 = cljs.core.async.close_BANG_.call(null,out);
var state_49695__$1 = state_49695;
var statearr_49708_49725 = state_49695__$1;
(statearr_49708_49725[(2)] = inst_49689);

(statearr_49708_49725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49696 === (10))){
var inst_49687 = (state_49695[(2)]);
var state_49695__$1 = state_49695;
var statearr_49709_49726 = state_49695__$1;
(statearr_49709_49726[(2)] = inst_49687);

(statearr_49709_49726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49696 === (8))){
var inst_49676 = (state_49695[(9)]);
var inst_49674 = (state_49695[(7)]);
var inst_49665 = (state_49695[(10)]);
var inst_49675 = (state_49695[(8)]);
var inst_49679 = (function (){var cs = inst_49665;
var vec__49670 = inst_49674;
var v = inst_49675;
var c = inst_49676;
return ((function (cs,vec__49670,v,c,inst_49676,inst_49674,inst_49665,inst_49675,state_val_49696,c__48318__auto___49717,out){
return (function (p1__49661_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__49661_SHARP_);
});
;})(cs,vec__49670,v,c,inst_49676,inst_49674,inst_49665,inst_49675,state_val_49696,c__48318__auto___49717,out))
})();
var inst_49680 = cljs.core.filterv.call(null,inst_49679,inst_49665);
var inst_49665__$1 = inst_49680;
var state_49695__$1 = (function (){var statearr_49710 = state_49695;
(statearr_49710[(10)] = inst_49665__$1);

return statearr_49710;
})();
var statearr_49711_49727 = state_49695__$1;
(statearr_49711_49727[(2)] = null);

(statearr_49711_49727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__48318__auto___49717,out))
;
return ((function (switch__48230__auto__,c__48318__auto___49717,out){
return (function() {
var cljs$core$async$state_machine__48231__auto__ = null;
var cljs$core$async$state_machine__48231__auto____0 = (function (){
var statearr_49712 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49712[(0)] = cljs$core$async$state_machine__48231__auto__);

(statearr_49712[(1)] = (1));

return statearr_49712;
});
var cljs$core$async$state_machine__48231__auto____1 = (function (state_49695){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_49695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e49713){if((e49713 instanceof Object)){
var ex__48234__auto__ = e49713;
var statearr_49714_49728 = state_49695;
(statearr_49714_49728[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49729 = state_49695;
state_49695 = G__49729;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$state_machine__48231__auto__ = function(state_49695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48231__auto____1.call(this,state_49695);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48231__auto____0;
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48231__auto____1;
return cljs$core$async$state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto___49717,out))
})();
var state__48320__auto__ = (function (){var statearr_49715 = f__48319__auto__.call(null);
(statearr_49715[(6)] = c__48318__auto___49717);

return statearr_49715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto___49717,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__49731 = arguments.length;
switch (G__49731) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48318__auto___49776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto___49776,out){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto___49776,out){
return (function (state_49755){
var state_val_49756 = (state_49755[(1)]);
if((state_val_49756 === (7))){
var inst_49737 = (state_49755[(7)]);
var inst_49737__$1 = (state_49755[(2)]);
var inst_49738 = (inst_49737__$1 == null);
var inst_49739 = cljs.core.not.call(null,inst_49738);
var state_49755__$1 = (function (){var statearr_49757 = state_49755;
(statearr_49757[(7)] = inst_49737__$1);

return statearr_49757;
})();
if(inst_49739){
var statearr_49758_49777 = state_49755__$1;
(statearr_49758_49777[(1)] = (8));

} else {
var statearr_49759_49778 = state_49755__$1;
(statearr_49759_49778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49756 === (1))){
var inst_49732 = (0);
var state_49755__$1 = (function (){var statearr_49760 = state_49755;
(statearr_49760[(8)] = inst_49732);

return statearr_49760;
})();
var statearr_49761_49779 = state_49755__$1;
(statearr_49761_49779[(2)] = null);

(statearr_49761_49779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49756 === (4))){
var state_49755__$1 = state_49755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49755__$1,(7),ch);
} else {
if((state_val_49756 === (6))){
var inst_49750 = (state_49755[(2)]);
var state_49755__$1 = state_49755;
var statearr_49762_49780 = state_49755__$1;
(statearr_49762_49780[(2)] = inst_49750);

(statearr_49762_49780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49756 === (3))){
var inst_49752 = (state_49755[(2)]);
var inst_49753 = cljs.core.async.close_BANG_.call(null,out);
var state_49755__$1 = (function (){var statearr_49763 = state_49755;
(statearr_49763[(9)] = inst_49752);

return statearr_49763;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49755__$1,inst_49753);
} else {
if((state_val_49756 === (2))){
var inst_49732 = (state_49755[(8)]);
var inst_49734 = (inst_49732 < n);
var state_49755__$1 = state_49755;
if(cljs.core.truth_(inst_49734)){
var statearr_49764_49781 = state_49755__$1;
(statearr_49764_49781[(1)] = (4));

} else {
var statearr_49765_49782 = state_49755__$1;
(statearr_49765_49782[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49756 === (11))){
var inst_49732 = (state_49755[(8)]);
var inst_49742 = (state_49755[(2)]);
var inst_49743 = (inst_49732 + (1));
var inst_49732__$1 = inst_49743;
var state_49755__$1 = (function (){var statearr_49766 = state_49755;
(statearr_49766[(10)] = inst_49742);

(statearr_49766[(8)] = inst_49732__$1);

return statearr_49766;
})();
var statearr_49767_49783 = state_49755__$1;
(statearr_49767_49783[(2)] = null);

(statearr_49767_49783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49756 === (9))){
var state_49755__$1 = state_49755;
var statearr_49768_49784 = state_49755__$1;
(statearr_49768_49784[(2)] = null);

(statearr_49768_49784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49756 === (5))){
var state_49755__$1 = state_49755;
var statearr_49769_49785 = state_49755__$1;
(statearr_49769_49785[(2)] = null);

(statearr_49769_49785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49756 === (10))){
var inst_49747 = (state_49755[(2)]);
var state_49755__$1 = state_49755;
var statearr_49770_49786 = state_49755__$1;
(statearr_49770_49786[(2)] = inst_49747);

(statearr_49770_49786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49756 === (8))){
var inst_49737 = (state_49755[(7)]);
var state_49755__$1 = state_49755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49755__$1,(11),out,inst_49737);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__48318__auto___49776,out))
;
return ((function (switch__48230__auto__,c__48318__auto___49776,out){
return (function() {
var cljs$core$async$state_machine__48231__auto__ = null;
var cljs$core$async$state_machine__48231__auto____0 = (function (){
var statearr_49771 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49771[(0)] = cljs$core$async$state_machine__48231__auto__);

(statearr_49771[(1)] = (1));

return statearr_49771;
});
var cljs$core$async$state_machine__48231__auto____1 = (function (state_49755){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_49755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e49772){if((e49772 instanceof Object)){
var ex__48234__auto__ = e49772;
var statearr_49773_49787 = state_49755;
(statearr_49773_49787[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49788 = state_49755;
state_49755 = G__49788;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$state_machine__48231__auto__ = function(state_49755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48231__auto____1.call(this,state_49755);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48231__auto____0;
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48231__auto____1;
return cljs$core$async$state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto___49776,out))
})();
var state__48320__auto__ = (function (){var statearr_49774 = f__48319__auto__.call(null);
(statearr_49774[(6)] = c__48318__auto___49776);

return statearr_49774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto___49776,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49790 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49790 = (function (f,ch,meta49791){
this.f = f;
this.ch = ch;
this.meta49791 = meta49791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49792,meta49791__$1){
var self__ = this;
var _49792__$1 = this;
return (new cljs.core.async.t_cljs$core$async49790(self__.f,self__.ch,meta49791__$1));
});

cljs.core.async.t_cljs$core$async49790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49792){
var self__ = this;
var _49792__$1 = this;
return self__.meta49791;
});

cljs.core.async.t_cljs$core$async49790.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49790.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49790.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49790.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49790.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async49793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49793 = (function (f,ch,meta49791,_,fn1,meta49794){
this.f = f;
this.ch = ch;
this.meta49791 = meta49791;
this._ = _;
this.fn1 = fn1;
this.meta49794 = meta49794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_49795,meta49794__$1){
var self__ = this;
var _49795__$1 = this;
return (new cljs.core.async.t_cljs$core$async49793(self__.f,self__.ch,self__.meta49791,self__._,self__.fn1,meta49794__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async49793.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_49795){
var self__ = this;
var _49795__$1 = this;
return self__.meta49794;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49793.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49793.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49793.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49793.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__49789_SHARP_){
return f1.call(null,(((p1__49789_SHARP_ == null))?null:self__.f.call(null,p1__49789_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async49793.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49791","meta49791",-627292529,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49790","cljs.core.async/t_cljs$core$async49790",1650344964,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49794","meta49794",1449973973,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49793";

cljs.core.async.t_cljs$core$async49793.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"cljs.core.async/t_cljs$core$async49793");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async49793 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49793(f__$1,ch__$1,meta49791__$1,___$2,fn1__$1,meta49794){
return (new cljs.core.async.t_cljs$core$async49793(f__$1,ch__$1,meta49791__$1,___$2,fn1__$1,meta49794));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async49793(self__.f,self__.ch,self__.meta49791,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__35036__auto__ = ret;
if(cljs.core.truth_(and__35036__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__35036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async49790.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49790.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async49790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49791","meta49791",-627292529,null)], null);
});

cljs.core.async.t_cljs$core$async49790.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49790";

cljs.core.async.t_cljs$core$async49790.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"cljs.core.async/t_cljs$core$async49790");
});

cljs.core.async.__GT_t_cljs$core$async49790 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49790(f__$1,ch__$1,meta49791){
return (new cljs.core.async.t_cljs$core$async49790(f__$1,ch__$1,meta49791));
});

}

return (new cljs.core.async.t_cljs$core$async49790(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49796 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49796 = (function (f,ch,meta49797){
this.f = f;
this.ch = ch;
this.meta49797 = meta49797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49798,meta49797__$1){
var self__ = this;
var _49798__$1 = this;
return (new cljs.core.async.t_cljs$core$async49796(self__.f,self__.ch,meta49797__$1));
});

cljs.core.async.t_cljs$core$async49796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49798){
var self__ = this;
var _49798__$1 = this;
return self__.meta49797;
});

cljs.core.async.t_cljs$core$async49796.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49796.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49796.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async49796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49797","meta49797",-1259889556,null)], null);
});

cljs.core.async.t_cljs$core$async49796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49796";

cljs.core.async.t_cljs$core$async49796.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"cljs.core.async/t_cljs$core$async49796");
});

cljs.core.async.__GT_t_cljs$core$async49796 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49796(f__$1,ch__$1,meta49797){
return (new cljs.core.async.t_cljs$core$async49796(f__$1,ch__$1,meta49797));
});

}

return (new cljs.core.async.t_cljs$core$async49796(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async49799 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49799 = (function (p,ch,meta49800){
this.p = p;
this.ch = ch;
this.meta49800 = meta49800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49801,meta49800__$1){
var self__ = this;
var _49801__$1 = this;
return (new cljs.core.async.t_cljs$core$async49799(self__.p,self__.ch,meta49800__$1));
});

cljs.core.async.t_cljs$core$async49799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49801){
var self__ = this;
var _49801__$1 = this;
return self__.meta49800;
});

cljs.core.async.t_cljs$core$async49799.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49799.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49799.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49799.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49799.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49799.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49799.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async49799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49800","meta49800",-1885449727,null)], null);
});

cljs.core.async.t_cljs$core$async49799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49799";

cljs.core.async.t_cljs$core$async49799.cljs$lang$ctorPrWriter = (function (this__35659__auto__,writer__35660__auto__,opt__35661__auto__){
return cljs.core._write.call(null,writer__35660__auto__,"cljs.core.async/t_cljs$core$async49799");
});

cljs.core.async.__GT_t_cljs$core$async49799 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49799(p__$1,ch__$1,meta49800){
return (new cljs.core.async.t_cljs$core$async49799(p__$1,ch__$1,meta49800));
});

}

return (new cljs.core.async.t_cljs$core$async49799(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__49803 = arguments.length;
switch (G__49803) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48318__auto___49843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto___49843,out){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto___49843,out){
return (function (state_49824){
var state_val_49825 = (state_49824[(1)]);
if((state_val_49825 === (7))){
var inst_49820 = (state_49824[(2)]);
var state_49824__$1 = state_49824;
var statearr_49826_49844 = state_49824__$1;
(statearr_49826_49844[(2)] = inst_49820);

(statearr_49826_49844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49825 === (1))){
var state_49824__$1 = state_49824;
var statearr_49827_49845 = state_49824__$1;
(statearr_49827_49845[(2)] = null);

(statearr_49827_49845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49825 === (4))){
var inst_49806 = (state_49824[(7)]);
var inst_49806__$1 = (state_49824[(2)]);
var inst_49807 = (inst_49806__$1 == null);
var state_49824__$1 = (function (){var statearr_49828 = state_49824;
(statearr_49828[(7)] = inst_49806__$1);

return statearr_49828;
})();
if(cljs.core.truth_(inst_49807)){
var statearr_49829_49846 = state_49824__$1;
(statearr_49829_49846[(1)] = (5));

} else {
var statearr_49830_49847 = state_49824__$1;
(statearr_49830_49847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49825 === (6))){
var inst_49806 = (state_49824[(7)]);
var inst_49811 = p.call(null,inst_49806);
var state_49824__$1 = state_49824;
if(cljs.core.truth_(inst_49811)){
var statearr_49831_49848 = state_49824__$1;
(statearr_49831_49848[(1)] = (8));

} else {
var statearr_49832_49849 = state_49824__$1;
(statearr_49832_49849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49825 === (3))){
var inst_49822 = (state_49824[(2)]);
var state_49824__$1 = state_49824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49824__$1,inst_49822);
} else {
if((state_val_49825 === (2))){
var state_49824__$1 = state_49824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49824__$1,(4),ch);
} else {
if((state_val_49825 === (11))){
var inst_49814 = (state_49824[(2)]);
var state_49824__$1 = state_49824;
var statearr_49833_49850 = state_49824__$1;
(statearr_49833_49850[(2)] = inst_49814);

(statearr_49833_49850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49825 === (9))){
var state_49824__$1 = state_49824;
var statearr_49834_49851 = state_49824__$1;
(statearr_49834_49851[(2)] = null);

(statearr_49834_49851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49825 === (5))){
var inst_49809 = cljs.core.async.close_BANG_.call(null,out);
var state_49824__$1 = state_49824;
var statearr_49835_49852 = state_49824__$1;
(statearr_49835_49852[(2)] = inst_49809);

(statearr_49835_49852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49825 === (10))){
var inst_49817 = (state_49824[(2)]);
var state_49824__$1 = (function (){var statearr_49836 = state_49824;
(statearr_49836[(8)] = inst_49817);

return statearr_49836;
})();
var statearr_49837_49853 = state_49824__$1;
(statearr_49837_49853[(2)] = null);

(statearr_49837_49853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49825 === (8))){
var inst_49806 = (state_49824[(7)]);
var state_49824__$1 = state_49824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49824__$1,(11),out,inst_49806);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__48318__auto___49843,out))
;
return ((function (switch__48230__auto__,c__48318__auto___49843,out){
return (function() {
var cljs$core$async$state_machine__48231__auto__ = null;
var cljs$core$async$state_machine__48231__auto____0 = (function (){
var statearr_49838 = [null,null,null,null,null,null,null,null,null];
(statearr_49838[(0)] = cljs$core$async$state_machine__48231__auto__);

(statearr_49838[(1)] = (1));

return statearr_49838;
});
var cljs$core$async$state_machine__48231__auto____1 = (function (state_49824){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_49824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e49839){if((e49839 instanceof Object)){
var ex__48234__auto__ = e49839;
var statearr_49840_49854 = state_49824;
(statearr_49840_49854[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49855 = state_49824;
state_49824 = G__49855;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$state_machine__48231__auto__ = function(state_49824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48231__auto____1.call(this,state_49824);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48231__auto____0;
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48231__auto____1;
return cljs$core$async$state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto___49843,out))
})();
var state__48320__auto__ = (function (){var statearr_49841 = f__48319__auto__.call(null);
(statearr_49841[(6)] = c__48318__auto___49843);

return statearr_49841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto___49843,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49857 = arguments.length;
switch (G__49857) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__48318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto__){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto__){
return (function (state_49920){
var state_val_49921 = (state_49920[(1)]);
if((state_val_49921 === (7))){
var inst_49916 = (state_49920[(2)]);
var state_49920__$1 = state_49920;
var statearr_49922_49960 = state_49920__$1;
(statearr_49922_49960[(2)] = inst_49916);

(statearr_49922_49960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49921 === (20))){
var inst_49886 = (state_49920[(7)]);
var inst_49897 = (state_49920[(2)]);
var inst_49898 = cljs.core.next.call(null,inst_49886);
var inst_49872 = inst_49898;
var inst_49873 = null;
var inst_49874 = (0);
var inst_49875 = (0);
var state_49920__$1 = (function (){var statearr_49923 = state_49920;
(statearr_49923[(8)] = inst_49875);

(statearr_49923[(9)] = inst_49874);

(statearr_49923[(10)] = inst_49897);

(statearr_49923[(11)] = inst_49872);

(statearr_49923[(12)] = inst_49873);

return statearr_49923;
})();
var statearr_49924_49961 = state_49920__$1;
(statearr_49924_49961[(2)] = null);

(statearr_49924_49961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49921 === (1))){
var state_49920__$1 = state_49920;
var statearr_49925_49962 = state_49920__$1;
(statearr_49925_49962[(2)] = null);

(statearr_49925_49962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49921 === (4))){
var inst_49861 = (state_49920[(13)]);
var inst_49861__$1 = (state_49920[(2)]);
var inst_49862 = (inst_49861__$1 == null);
var state_49920__$1 = (function (){var statearr_49926 = state_49920;
(statearr_49926[(13)] = inst_49861__$1);

return statearr_49926;
})();
if(cljs.core.truth_(inst_49862)){
var statearr_49927_49963 = state_49920__$1;
(statearr_49927_49963[(1)] = (5));

} else {
var statearr_49928_49964 = state_49920__$1;
(statearr_49928_49964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49921 === (15))){
var state_49920__$1 = state_49920;
var statearr_49932_49965 = state_49920__$1;
(statearr_49932_49965[(2)] = null);

(statearr_49932_49965[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49921 === (21))){
var state_49920__$1 = state_49920;
var statearr_49933_49966 = state_49920__$1;
(statearr_49933_49966[(2)] = null);

(statearr_49933_49966[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49921 === (13))){
var inst_49875 = (state_49920[(8)]);
var inst_49874 = (state_49920[(9)]);
var inst_49872 = (state_49920[(11)]);
var inst_49873 = (state_49920[(12)]);
var inst_49882 = (state_49920[(2)]);
var inst_49883 = (inst_49875 + (1));
var tmp49929 = inst_49874;
var tmp49930 = inst_49872;
var tmp49931 = inst_49873;
var inst_49872__$1 = tmp49930;
var inst_49873__$1 = tmp49931;
var inst_49874__$1 = tmp49929;
var inst_49875__$1 = inst_49883;
var state_49920__$1 = (function (){var statearr_49934 = state_49920;
(statearr_49934[(8)] = inst_49875__$1);

(statearr_49934[(9)] = inst_49874__$1);

(statearr_49934[(11)] = inst_49872__$1);

(statearr_49934[(14)] = inst_49882);

(statearr_49934[(12)] = inst_49873__$1);

return statearr_49934;
})();
var statearr_49935_49967 = state_49920__$1;
(statearr_49935_49967[(2)] = null);

(statearr_49935_49967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49921 === (22))){
var state_49920__$1 = state_49920;
var statearr_49936_49968 = state_49920__$1;
(statearr_49936_49968[(2)] = null);

(statearr_49936_49968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49921 === (6))){
var inst_49861 = (state_49920[(13)]);
var inst_49870 = f.call(null,inst_49861);
var inst_49871 = cljs.core.seq.call(null,inst_49870);
var inst_49872 = inst_49871;
var inst_49873 = null;
var inst_49874 = (0);
var inst_49875 = (0);
var state_49920__$1 = (function (){var statearr_49937 = state_49920;
(statearr_49937[(8)] = inst_49875);

(statearr_49937[(9)] = inst_49874);

(statearr_49937[(11)] = inst_49872);

(statearr_49937[(12)] = inst_49873);

return statearr_49937;
})();
var statearr_49938_49969 = state_49920__$1;
(statearr_49938_49969[(2)] = null);

(statearr_49938_49969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49921 === (17))){
var inst_49886 = (state_49920[(7)]);
var inst_49890 = cljs.core.chunk_first.call(null,inst_49886);
var inst_49891 = cljs.core.chunk_rest.call(null,inst_49886);
var inst_49892 = cljs.core.count.call(null,inst_49890);
var inst_49872 = inst_49891;
var inst_49873 = inst_49890;
var inst_49874 = inst_49892;
var inst_49875 = (0);
var state_49920__$1 = (function (){var statearr_49939 = state_49920;
(statearr_49939[(8)] = inst_49875);

(statearr_49939[(9)] = inst_49874);

(statearr_49939[(11)] = inst_49872);

(statearr_49939[(12)] = inst_49873);

return statearr_49939;
})();
var statearr_49940_49970 = state_49920__$1;
(statearr_49940_49970[(2)] = null);

(statearr_49940_49970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49921 === (3))){
var inst_49918 = (state_49920[(2)]);
var state_49920__$1 = state_49920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49920__$1,inst_49918);
} else {
if((state_val_49921 === (12))){
var inst_49906 = (state_49920[(2)]);
var state_49920__$1 = state_49920;
var statearr_49941_49971 = state_49920__$1;
(statearr_49941_49971[(2)] = inst_49906);

(statearr_49941_49971[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49921 === (2))){
var state_49920__$1 = state_49920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49920__$1,(4),in$);
} else {
if((state_val_49921 === (23))){
var inst_49914 = (state_49920[(2)]);
var state_49920__$1 = state_49920;
var statearr_49942_49972 = state_49920__$1;
(statearr_49942_49972[(2)] = inst_49914);

(statearr_49942_49972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49921 === (19))){
var inst_49901 = (state_49920[(2)]);
var state_49920__$1 = state_49920;
var statearr_49943_49973 = state_49920__$1;
(statearr_49943_49973[(2)] = inst_49901);

(statearr_49943_49973[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49921 === (11))){
var inst_49872 = (state_49920[(11)]);
var inst_49886 = (state_49920[(7)]);
var inst_49886__$1 = cljs.core.seq.call(null,inst_49872);
var state_49920__$1 = (function (){var statearr_49944 = state_49920;
(statearr_49944[(7)] = inst_49886__$1);

return statearr_49944;
})();
if(inst_49886__$1){
var statearr_49945_49974 = state_49920__$1;
(statearr_49945_49974[(1)] = (14));

} else {
var statearr_49946_49975 = state_49920__$1;
(statearr_49946_49975[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49921 === (9))){
var inst_49908 = (state_49920[(2)]);
var inst_49909 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_49920__$1 = (function (){var statearr_49947 = state_49920;
(statearr_49947[(15)] = inst_49908);

return statearr_49947;
})();
if(cljs.core.truth_(inst_49909)){
var statearr_49948_49976 = state_49920__$1;
(statearr_49948_49976[(1)] = (21));

} else {
var statearr_49949_49977 = state_49920__$1;
(statearr_49949_49977[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49921 === (5))){
var inst_49864 = cljs.core.async.close_BANG_.call(null,out);
var state_49920__$1 = state_49920;
var statearr_49950_49978 = state_49920__$1;
(statearr_49950_49978[(2)] = inst_49864);

(statearr_49950_49978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49921 === (14))){
var inst_49886 = (state_49920[(7)]);
var inst_49888 = cljs.core.chunked_seq_QMARK_.call(null,inst_49886);
var state_49920__$1 = state_49920;
if(inst_49888){
var statearr_49951_49979 = state_49920__$1;
(statearr_49951_49979[(1)] = (17));

} else {
var statearr_49952_49980 = state_49920__$1;
(statearr_49952_49980[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49921 === (16))){
var inst_49904 = (state_49920[(2)]);
var state_49920__$1 = state_49920;
var statearr_49953_49981 = state_49920__$1;
(statearr_49953_49981[(2)] = inst_49904);

(statearr_49953_49981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49921 === (10))){
var inst_49875 = (state_49920[(8)]);
var inst_49873 = (state_49920[(12)]);
var inst_49880 = cljs.core._nth.call(null,inst_49873,inst_49875);
var state_49920__$1 = state_49920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49920__$1,(13),out,inst_49880);
} else {
if((state_val_49921 === (18))){
var inst_49886 = (state_49920[(7)]);
var inst_49895 = cljs.core.first.call(null,inst_49886);
var state_49920__$1 = state_49920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49920__$1,(20),out,inst_49895);
} else {
if((state_val_49921 === (8))){
var inst_49875 = (state_49920[(8)]);
var inst_49874 = (state_49920[(9)]);
var inst_49877 = (inst_49875 < inst_49874);
var inst_49878 = inst_49877;
var state_49920__$1 = state_49920;
if(cljs.core.truth_(inst_49878)){
var statearr_49954_49982 = state_49920__$1;
(statearr_49954_49982[(1)] = (10));

} else {
var statearr_49955_49983 = state_49920__$1;
(statearr_49955_49983[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48318__auto__))
;
return ((function (switch__48230__auto__,c__48318__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__48231__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48231__auto____0 = (function (){
var statearr_49956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49956[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48231__auto__);

(statearr_49956[(1)] = (1));

return statearr_49956;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48231__auto____1 = (function (state_49920){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_49920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e49957){if((e49957 instanceof Object)){
var ex__48234__auto__ = e49957;
var statearr_49958_49984 = state_49920;
(statearr_49958_49984[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49985 = state_49920;
state_49920 = G__49985;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48231__auto__ = function(state_49920){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48231__auto____1.call(this,state_49920);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48231__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48231__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto__))
})();
var state__48320__auto__ = (function (){var statearr_49959 = f__48319__auto__.call(null);
(statearr_49959[(6)] = c__48318__auto__);

return statearr_49959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto__))
);

return c__48318__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49987 = arguments.length;
switch (G__49987) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__49990 = arguments.length;
switch (G__49990) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__49993 = arguments.length;
switch (G__49993) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48318__auto___50040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto___50040,out){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto___50040,out){
return (function (state_50017){
var state_val_50018 = (state_50017[(1)]);
if((state_val_50018 === (7))){
var inst_50012 = (state_50017[(2)]);
var state_50017__$1 = state_50017;
var statearr_50019_50041 = state_50017__$1;
(statearr_50019_50041[(2)] = inst_50012);

(statearr_50019_50041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50018 === (1))){
var inst_49994 = null;
var state_50017__$1 = (function (){var statearr_50020 = state_50017;
(statearr_50020[(7)] = inst_49994);

return statearr_50020;
})();
var statearr_50021_50042 = state_50017__$1;
(statearr_50021_50042[(2)] = null);

(statearr_50021_50042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50018 === (4))){
var inst_49997 = (state_50017[(8)]);
var inst_49997__$1 = (state_50017[(2)]);
var inst_49998 = (inst_49997__$1 == null);
var inst_49999 = cljs.core.not.call(null,inst_49998);
var state_50017__$1 = (function (){var statearr_50022 = state_50017;
(statearr_50022[(8)] = inst_49997__$1);

return statearr_50022;
})();
if(inst_49999){
var statearr_50023_50043 = state_50017__$1;
(statearr_50023_50043[(1)] = (5));

} else {
var statearr_50024_50044 = state_50017__$1;
(statearr_50024_50044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50018 === (6))){
var state_50017__$1 = state_50017;
var statearr_50025_50045 = state_50017__$1;
(statearr_50025_50045[(2)] = null);

(statearr_50025_50045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50018 === (3))){
var inst_50014 = (state_50017[(2)]);
var inst_50015 = cljs.core.async.close_BANG_.call(null,out);
var state_50017__$1 = (function (){var statearr_50026 = state_50017;
(statearr_50026[(9)] = inst_50014);

return statearr_50026;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50017__$1,inst_50015);
} else {
if((state_val_50018 === (2))){
var state_50017__$1 = state_50017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50017__$1,(4),ch);
} else {
if((state_val_50018 === (11))){
var inst_49997 = (state_50017[(8)]);
var inst_50006 = (state_50017[(2)]);
var inst_49994 = inst_49997;
var state_50017__$1 = (function (){var statearr_50027 = state_50017;
(statearr_50027[(10)] = inst_50006);

(statearr_50027[(7)] = inst_49994);

return statearr_50027;
})();
var statearr_50028_50046 = state_50017__$1;
(statearr_50028_50046[(2)] = null);

(statearr_50028_50046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50018 === (9))){
var inst_49997 = (state_50017[(8)]);
var state_50017__$1 = state_50017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50017__$1,(11),out,inst_49997);
} else {
if((state_val_50018 === (5))){
var inst_49994 = (state_50017[(7)]);
var inst_49997 = (state_50017[(8)]);
var inst_50001 = cljs.core._EQ_.call(null,inst_49997,inst_49994);
var state_50017__$1 = state_50017;
if(inst_50001){
var statearr_50030_50047 = state_50017__$1;
(statearr_50030_50047[(1)] = (8));

} else {
var statearr_50031_50048 = state_50017__$1;
(statearr_50031_50048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50018 === (10))){
var inst_50009 = (state_50017[(2)]);
var state_50017__$1 = state_50017;
var statearr_50032_50049 = state_50017__$1;
(statearr_50032_50049[(2)] = inst_50009);

(statearr_50032_50049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50018 === (8))){
var inst_49994 = (state_50017[(7)]);
var tmp50029 = inst_49994;
var inst_49994__$1 = tmp50029;
var state_50017__$1 = (function (){var statearr_50033 = state_50017;
(statearr_50033[(7)] = inst_49994__$1);

return statearr_50033;
})();
var statearr_50034_50050 = state_50017__$1;
(statearr_50034_50050[(2)] = null);

(statearr_50034_50050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__48318__auto___50040,out))
;
return ((function (switch__48230__auto__,c__48318__auto___50040,out){
return (function() {
var cljs$core$async$state_machine__48231__auto__ = null;
var cljs$core$async$state_machine__48231__auto____0 = (function (){
var statearr_50035 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50035[(0)] = cljs$core$async$state_machine__48231__auto__);

(statearr_50035[(1)] = (1));

return statearr_50035;
});
var cljs$core$async$state_machine__48231__auto____1 = (function (state_50017){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_50017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e50036){if((e50036 instanceof Object)){
var ex__48234__auto__ = e50036;
var statearr_50037_50051 = state_50017;
(statearr_50037_50051[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50052 = state_50017;
state_50017 = G__50052;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$state_machine__48231__auto__ = function(state_50017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48231__auto____1.call(this,state_50017);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48231__auto____0;
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48231__auto____1;
return cljs$core$async$state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto___50040,out))
})();
var state__48320__auto__ = (function (){var statearr_50038 = f__48319__auto__.call(null);
(statearr_50038[(6)] = c__48318__auto___50040);

return statearr_50038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto___50040,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__50054 = arguments.length;
switch (G__50054) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48318__auto___50120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto___50120,out){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto___50120,out){
return (function (state_50092){
var state_val_50093 = (state_50092[(1)]);
if((state_val_50093 === (7))){
var inst_50088 = (state_50092[(2)]);
var state_50092__$1 = state_50092;
var statearr_50094_50121 = state_50092__$1;
(statearr_50094_50121[(2)] = inst_50088);

(statearr_50094_50121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (1))){
var inst_50055 = (new Array(n));
var inst_50056 = inst_50055;
var inst_50057 = (0);
var state_50092__$1 = (function (){var statearr_50095 = state_50092;
(statearr_50095[(7)] = inst_50057);

(statearr_50095[(8)] = inst_50056);

return statearr_50095;
})();
var statearr_50096_50122 = state_50092__$1;
(statearr_50096_50122[(2)] = null);

(statearr_50096_50122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (4))){
var inst_50060 = (state_50092[(9)]);
var inst_50060__$1 = (state_50092[(2)]);
var inst_50061 = (inst_50060__$1 == null);
var inst_50062 = cljs.core.not.call(null,inst_50061);
var state_50092__$1 = (function (){var statearr_50097 = state_50092;
(statearr_50097[(9)] = inst_50060__$1);

return statearr_50097;
})();
if(inst_50062){
var statearr_50098_50123 = state_50092__$1;
(statearr_50098_50123[(1)] = (5));

} else {
var statearr_50099_50124 = state_50092__$1;
(statearr_50099_50124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (15))){
var inst_50082 = (state_50092[(2)]);
var state_50092__$1 = state_50092;
var statearr_50100_50125 = state_50092__$1;
(statearr_50100_50125[(2)] = inst_50082);

(statearr_50100_50125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (13))){
var state_50092__$1 = state_50092;
var statearr_50101_50126 = state_50092__$1;
(statearr_50101_50126[(2)] = null);

(statearr_50101_50126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (6))){
var inst_50057 = (state_50092[(7)]);
var inst_50078 = (inst_50057 > (0));
var state_50092__$1 = state_50092;
if(cljs.core.truth_(inst_50078)){
var statearr_50102_50127 = state_50092__$1;
(statearr_50102_50127[(1)] = (12));

} else {
var statearr_50103_50128 = state_50092__$1;
(statearr_50103_50128[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (3))){
var inst_50090 = (state_50092[(2)]);
var state_50092__$1 = state_50092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50092__$1,inst_50090);
} else {
if((state_val_50093 === (12))){
var inst_50056 = (state_50092[(8)]);
var inst_50080 = cljs.core.vec.call(null,inst_50056);
var state_50092__$1 = state_50092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50092__$1,(15),out,inst_50080);
} else {
if((state_val_50093 === (2))){
var state_50092__$1 = state_50092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50092__$1,(4),ch);
} else {
if((state_val_50093 === (11))){
var inst_50072 = (state_50092[(2)]);
var inst_50073 = (new Array(n));
var inst_50056 = inst_50073;
var inst_50057 = (0);
var state_50092__$1 = (function (){var statearr_50104 = state_50092;
(statearr_50104[(10)] = inst_50072);

(statearr_50104[(7)] = inst_50057);

(statearr_50104[(8)] = inst_50056);

return statearr_50104;
})();
var statearr_50105_50129 = state_50092__$1;
(statearr_50105_50129[(2)] = null);

(statearr_50105_50129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (9))){
var inst_50056 = (state_50092[(8)]);
var inst_50070 = cljs.core.vec.call(null,inst_50056);
var state_50092__$1 = state_50092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50092__$1,(11),out,inst_50070);
} else {
if((state_val_50093 === (5))){
var inst_50057 = (state_50092[(7)]);
var inst_50056 = (state_50092[(8)]);
var inst_50065 = (state_50092[(11)]);
var inst_50060 = (state_50092[(9)]);
var inst_50064 = (inst_50056[inst_50057] = inst_50060);
var inst_50065__$1 = (inst_50057 + (1));
var inst_50066 = (inst_50065__$1 < n);
var state_50092__$1 = (function (){var statearr_50106 = state_50092;
(statearr_50106[(12)] = inst_50064);

(statearr_50106[(11)] = inst_50065__$1);

return statearr_50106;
})();
if(cljs.core.truth_(inst_50066)){
var statearr_50107_50130 = state_50092__$1;
(statearr_50107_50130[(1)] = (8));

} else {
var statearr_50108_50131 = state_50092__$1;
(statearr_50108_50131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (14))){
var inst_50085 = (state_50092[(2)]);
var inst_50086 = cljs.core.async.close_BANG_.call(null,out);
var state_50092__$1 = (function (){var statearr_50110 = state_50092;
(statearr_50110[(13)] = inst_50085);

return statearr_50110;
})();
var statearr_50111_50132 = state_50092__$1;
(statearr_50111_50132[(2)] = inst_50086);

(statearr_50111_50132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (10))){
var inst_50076 = (state_50092[(2)]);
var state_50092__$1 = state_50092;
var statearr_50112_50133 = state_50092__$1;
(statearr_50112_50133[(2)] = inst_50076);

(statearr_50112_50133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (8))){
var inst_50056 = (state_50092[(8)]);
var inst_50065 = (state_50092[(11)]);
var tmp50109 = inst_50056;
var inst_50056__$1 = tmp50109;
var inst_50057 = inst_50065;
var state_50092__$1 = (function (){var statearr_50113 = state_50092;
(statearr_50113[(7)] = inst_50057);

(statearr_50113[(8)] = inst_50056__$1);

return statearr_50113;
})();
var statearr_50114_50134 = state_50092__$1;
(statearr_50114_50134[(2)] = null);

(statearr_50114_50134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48318__auto___50120,out))
;
return ((function (switch__48230__auto__,c__48318__auto___50120,out){
return (function() {
var cljs$core$async$state_machine__48231__auto__ = null;
var cljs$core$async$state_machine__48231__auto____0 = (function (){
var statearr_50115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50115[(0)] = cljs$core$async$state_machine__48231__auto__);

(statearr_50115[(1)] = (1));

return statearr_50115;
});
var cljs$core$async$state_machine__48231__auto____1 = (function (state_50092){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_50092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e50116){if((e50116 instanceof Object)){
var ex__48234__auto__ = e50116;
var statearr_50117_50135 = state_50092;
(statearr_50117_50135[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50136 = state_50092;
state_50092 = G__50136;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$state_machine__48231__auto__ = function(state_50092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48231__auto____1.call(this,state_50092);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48231__auto____0;
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48231__auto____1;
return cljs$core$async$state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto___50120,out))
})();
var state__48320__auto__ = (function (){var statearr_50118 = f__48319__auto__.call(null);
(statearr_50118[(6)] = c__48318__auto___50120);

return statearr_50118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto___50120,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__50138 = arguments.length;
switch (G__50138) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48318__auto___50208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48318__auto___50208,out){
return (function (){
var f__48319__auto__ = (function (){var switch__48230__auto__ = ((function (c__48318__auto___50208,out){
return (function (state_50180){
var state_val_50181 = (state_50180[(1)]);
if((state_val_50181 === (7))){
var inst_50176 = (state_50180[(2)]);
var state_50180__$1 = state_50180;
var statearr_50182_50209 = state_50180__$1;
(statearr_50182_50209[(2)] = inst_50176);

(statearr_50182_50209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50181 === (1))){
var inst_50139 = [];
var inst_50140 = inst_50139;
var inst_50141 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50180__$1 = (function (){var statearr_50183 = state_50180;
(statearr_50183[(7)] = inst_50140);

(statearr_50183[(8)] = inst_50141);

return statearr_50183;
})();
var statearr_50184_50210 = state_50180__$1;
(statearr_50184_50210[(2)] = null);

(statearr_50184_50210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50181 === (4))){
var inst_50144 = (state_50180[(9)]);
var inst_50144__$1 = (state_50180[(2)]);
var inst_50145 = (inst_50144__$1 == null);
var inst_50146 = cljs.core.not.call(null,inst_50145);
var state_50180__$1 = (function (){var statearr_50185 = state_50180;
(statearr_50185[(9)] = inst_50144__$1);

return statearr_50185;
})();
if(inst_50146){
var statearr_50186_50211 = state_50180__$1;
(statearr_50186_50211[(1)] = (5));

} else {
var statearr_50187_50212 = state_50180__$1;
(statearr_50187_50212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50181 === (15))){
var inst_50170 = (state_50180[(2)]);
var state_50180__$1 = state_50180;
var statearr_50188_50213 = state_50180__$1;
(statearr_50188_50213[(2)] = inst_50170);

(statearr_50188_50213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50181 === (13))){
var state_50180__$1 = state_50180;
var statearr_50189_50214 = state_50180__$1;
(statearr_50189_50214[(2)] = null);

(statearr_50189_50214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50181 === (6))){
var inst_50140 = (state_50180[(7)]);
var inst_50165 = inst_50140.length;
var inst_50166 = (inst_50165 > (0));
var state_50180__$1 = state_50180;
if(cljs.core.truth_(inst_50166)){
var statearr_50190_50215 = state_50180__$1;
(statearr_50190_50215[(1)] = (12));

} else {
var statearr_50191_50216 = state_50180__$1;
(statearr_50191_50216[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50181 === (3))){
var inst_50178 = (state_50180[(2)]);
var state_50180__$1 = state_50180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50180__$1,inst_50178);
} else {
if((state_val_50181 === (12))){
var inst_50140 = (state_50180[(7)]);
var inst_50168 = cljs.core.vec.call(null,inst_50140);
var state_50180__$1 = state_50180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50180__$1,(15),out,inst_50168);
} else {
if((state_val_50181 === (2))){
var state_50180__$1 = state_50180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50180__$1,(4),ch);
} else {
if((state_val_50181 === (11))){
var inst_50144 = (state_50180[(9)]);
var inst_50148 = (state_50180[(10)]);
var inst_50158 = (state_50180[(2)]);
var inst_50159 = [];
var inst_50160 = inst_50159.push(inst_50144);
var inst_50140 = inst_50159;
var inst_50141 = inst_50148;
var state_50180__$1 = (function (){var statearr_50192 = state_50180;
(statearr_50192[(7)] = inst_50140);

(statearr_50192[(11)] = inst_50160);

(statearr_50192[(8)] = inst_50141);

(statearr_50192[(12)] = inst_50158);

return statearr_50192;
})();
var statearr_50193_50217 = state_50180__$1;
(statearr_50193_50217[(2)] = null);

(statearr_50193_50217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50181 === (9))){
var inst_50140 = (state_50180[(7)]);
var inst_50156 = cljs.core.vec.call(null,inst_50140);
var state_50180__$1 = state_50180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50180__$1,(11),out,inst_50156);
} else {
if((state_val_50181 === (5))){
var inst_50144 = (state_50180[(9)]);
var inst_50148 = (state_50180[(10)]);
var inst_50141 = (state_50180[(8)]);
var inst_50148__$1 = f.call(null,inst_50144);
var inst_50149 = cljs.core._EQ_.call(null,inst_50148__$1,inst_50141);
var inst_50150 = cljs.core.keyword_identical_QMARK_.call(null,inst_50141,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_50151 = (inst_50149) || (inst_50150);
var state_50180__$1 = (function (){var statearr_50194 = state_50180;
(statearr_50194[(10)] = inst_50148__$1);

return statearr_50194;
})();
if(cljs.core.truth_(inst_50151)){
var statearr_50195_50218 = state_50180__$1;
(statearr_50195_50218[(1)] = (8));

} else {
var statearr_50196_50219 = state_50180__$1;
(statearr_50196_50219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50181 === (14))){
var inst_50173 = (state_50180[(2)]);
var inst_50174 = cljs.core.async.close_BANG_.call(null,out);
var state_50180__$1 = (function (){var statearr_50198 = state_50180;
(statearr_50198[(13)] = inst_50173);

return statearr_50198;
})();
var statearr_50199_50220 = state_50180__$1;
(statearr_50199_50220[(2)] = inst_50174);

(statearr_50199_50220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50181 === (10))){
var inst_50163 = (state_50180[(2)]);
var state_50180__$1 = state_50180;
var statearr_50200_50221 = state_50180__$1;
(statearr_50200_50221[(2)] = inst_50163);

(statearr_50200_50221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50181 === (8))){
var inst_50144 = (state_50180[(9)]);
var inst_50140 = (state_50180[(7)]);
var inst_50148 = (state_50180[(10)]);
var inst_50153 = inst_50140.push(inst_50144);
var tmp50197 = inst_50140;
var inst_50140__$1 = tmp50197;
var inst_50141 = inst_50148;
var state_50180__$1 = (function (){var statearr_50201 = state_50180;
(statearr_50201[(7)] = inst_50140__$1);

(statearr_50201[(14)] = inst_50153);

(statearr_50201[(8)] = inst_50141);

return statearr_50201;
})();
var statearr_50202_50222 = state_50180__$1;
(statearr_50202_50222[(2)] = null);

(statearr_50202_50222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48318__auto___50208,out))
;
return ((function (switch__48230__auto__,c__48318__auto___50208,out){
return (function() {
var cljs$core$async$state_machine__48231__auto__ = null;
var cljs$core$async$state_machine__48231__auto____0 = (function (){
var statearr_50203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50203[(0)] = cljs$core$async$state_machine__48231__auto__);

(statearr_50203[(1)] = (1));

return statearr_50203;
});
var cljs$core$async$state_machine__48231__auto____1 = (function (state_50180){
while(true){
var ret_value__48232__auto__ = (function (){try{while(true){
var result__48233__auto__ = switch__48230__auto__.call(null,state_50180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48233__auto__;
}
break;
}
}catch (e50204){if((e50204 instanceof Object)){
var ex__48234__auto__ = e50204;
var statearr_50205_50223 = state_50180;
(statearr_50205_50223[(5)] = ex__48234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50224 = state_50180;
state_50180 = G__50224;
continue;
} else {
return ret_value__48232__auto__;
}
break;
}
});
cljs$core$async$state_machine__48231__auto__ = function(state_50180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48231__auto____1.call(this,state_50180);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48231__auto____0;
cljs$core$async$state_machine__48231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48231__auto____1;
return cljs$core$async$state_machine__48231__auto__;
})()
;})(switch__48230__auto__,c__48318__auto___50208,out))
})();
var state__48320__auto__ = (function (){var statearr_50206 = f__48319__auto__.call(null);
(statearr_50206[(6)] = c__48318__auto___50208);

return statearr_50206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48320__auto__);
});})(c__48318__auto___50208,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

