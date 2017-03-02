// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args33432 = [];
var len__31357__auto___33438 = arguments.length;
var i__31358__auto___33439 = (0);
while(true){
if((i__31358__auto___33439 < len__31357__auto___33438)){
args33432.push((arguments[i__31358__auto___33439]));

var G__33440 = (i__31358__auto___33439 + (1));
i__31358__auto___33439 = G__33440;
continue;
} else {
}
break;
}

var G__33434 = args33432.length;
switch (G__33434) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33432.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33435 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33435 = (function (f,blockable,meta33436){
this.f = f;
this.blockable = blockable;
this.meta33436 = meta33436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33437,meta33436__$1){
var self__ = this;
var _33437__$1 = this;
return (new cljs.core.async.t_cljs$core$async33435(self__.f,self__.blockable,meta33436__$1));
});

cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33437){
var self__ = this;
var _33437__$1 = this;
return self__.meta33436;
});

cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33436","meta33436",-853821444,null)], null);
});

cljs.core.async.t_cljs$core$async33435.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33435";

cljs.core.async.t_cljs$core$async33435.cljs$lang$ctorPrWriter = (function (this__30855__auto__,writer__30856__auto__,opt__30857__auto__){
return cljs.core._write.call(null,writer__30856__auto__,"cljs.core.async/t_cljs$core$async33435");
});

cljs.core.async.__GT_t_cljs$core$async33435 = (function cljs$core$async$__GT_t_cljs$core$async33435(f__$1,blockable__$1,meta33436){
return (new cljs.core.async.t_cljs$core$async33435(f__$1,blockable__$1,meta33436));
});

}

return (new cljs.core.async.t_cljs$core$async33435(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args33444 = [];
var len__31357__auto___33447 = arguments.length;
var i__31358__auto___33448 = (0);
while(true){
if((i__31358__auto___33448 < len__31357__auto___33447)){
args33444.push((arguments[i__31358__auto___33448]));

var G__33449 = (i__31358__auto___33448 + (1));
i__31358__auto___33448 = G__33449;
continue;
} else {
}
break;
}

var G__33446 = args33444.length;
switch (G__33446) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33444.length)].join('')));

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
var args33451 = [];
var len__31357__auto___33454 = arguments.length;
var i__31358__auto___33455 = (0);
while(true){
if((i__31358__auto___33455 < len__31357__auto___33454)){
args33451.push((arguments[i__31358__auto___33455]));

var G__33456 = (i__31358__auto___33455 + (1));
i__31358__auto___33455 = G__33456;
continue;
} else {
}
break;
}

var G__33453 = args33451.length;
switch (G__33453) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33451.length)].join('')));

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
var args33458 = [];
var len__31357__auto___33461 = arguments.length;
var i__31358__auto___33462 = (0);
while(true){
if((i__31358__auto___33462 < len__31357__auto___33461)){
args33458.push((arguments[i__31358__auto___33462]));

var G__33463 = (i__31358__auto___33462 + (1));
i__31358__auto___33462 = G__33463;
continue;
} else {
}
break;
}

var G__33460 = args33458.length;
switch (G__33460) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33458.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33465 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33465);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33465,ret){
return (function (){
return fn1.call(null,val_33465);
});})(val_33465,ret))
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
var args33466 = [];
var len__31357__auto___33469 = arguments.length;
var i__31358__auto___33470 = (0);
while(true){
if((i__31358__auto___33470 < len__31357__auto___33469)){
args33466.push((arguments[i__31358__auto___33470]));

var G__33471 = (i__31358__auto___33470 + (1));
i__31358__auto___33470 = G__33471;
continue;
} else {
}
break;
}

var G__33468 = args33466.length;
switch (G__33468) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33466.length)].join('')));

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
var n__31167__auto___33473 = n;
var x_33474 = (0);
while(true){
if((x_33474 < n__31167__auto___33473)){
(a[x_33474] = (0));

var G__33475 = (x_33474 + (1));
x_33474 = G__33475;
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

var G__33476 = (i + (1));
i = G__33476;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33480 = (function (flag,meta33481){
this.flag = flag;
this.meta33481 = meta33481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33482,meta33481__$1){
var self__ = this;
var _33482__$1 = this;
return (new cljs.core.async.t_cljs$core$async33480(self__.flag,meta33481__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33482){
var self__ = this;
var _33482__$1 = this;
return self__.meta33481;
});})(flag))
;

cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33480.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33481","meta33481",1909387096,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33480";

cljs.core.async.t_cljs$core$async33480.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30855__auto__,writer__30856__auto__,opt__30857__auto__){
return cljs.core._write.call(null,writer__30856__auto__,"cljs.core.async/t_cljs$core$async33480");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33480 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33480(flag__$1,meta33481){
return (new cljs.core.async.t_cljs$core$async33480(flag__$1,meta33481));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33480(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33486 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33486 = (function (flag,cb,meta33487){
this.flag = flag;
this.cb = cb;
this.meta33487 = meta33487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33488,meta33487__$1){
var self__ = this;
var _33488__$1 = this;
return (new cljs.core.async.t_cljs$core$async33486(self__.flag,self__.cb,meta33487__$1));
});

cljs.core.async.t_cljs$core$async33486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33488){
var self__ = this;
var _33488__$1 = this;
return self__.meta33487;
});

cljs.core.async.t_cljs$core$async33486.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33486.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33486.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33486.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33487","meta33487",-1510508704,null)], null);
});

cljs.core.async.t_cljs$core$async33486.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33486";

cljs.core.async.t_cljs$core$async33486.cljs$lang$ctorPrWriter = (function (this__30855__auto__,writer__30856__auto__,opt__30857__auto__){
return cljs.core._write.call(null,writer__30856__auto__,"cljs.core.async/t_cljs$core$async33486");
});

cljs.core.async.__GT_t_cljs$core$async33486 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33486(flag__$1,cb__$1,meta33487){
return (new cljs.core.async.t_cljs$core$async33486(flag__$1,cb__$1,meta33487));
});

}

return (new cljs.core.async.t_cljs$core$async33486(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33489_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33489_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33490_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33490_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30244__auto__ = wport;
if(cljs.core.truth_(or__30244__auto__)){
return or__30244__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33491 = (i + (1));
i = G__33491;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30244__auto__ = ret;
if(cljs.core.truth_(or__30244__auto__)){
return or__30244__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__30232__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30232__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30232__auto__;
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
var args__31364__auto__ = [];
var len__31357__auto___33497 = arguments.length;
var i__31358__auto___33498 = (0);
while(true){
if((i__31358__auto___33498 < len__31357__auto___33497)){
args__31364__auto__.push((arguments[i__31358__auto___33498]));

var G__33499 = (i__31358__auto___33498 + (1));
i__31358__auto___33498 = G__33499;
continue;
} else {
}
break;
}

var argseq__31365__auto__ = ((((1) < args__31364__auto__.length))?(new cljs.core.IndexedSeq(args__31364__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31365__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33494){
var map__33495 = p__33494;
var map__33495__$1 = ((((!((map__33495 == null)))?((((map__33495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33495):map__33495);
var opts = map__33495__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33492){
var G__33493 = cljs.core.first.call(null,seq33492);
var seq33492__$1 = cljs.core.next.call(null,seq33492);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33493,seq33492__$1);
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
var args33500 = [];
var len__31357__auto___33550 = arguments.length;
var i__31358__auto___33551 = (0);
while(true){
if((i__31358__auto___33551 < len__31357__auto___33550)){
args33500.push((arguments[i__31358__auto___33551]));

var G__33552 = (i__31358__auto___33551 + (1));
i__31358__auto___33551 = G__33552;
continue;
} else {
}
break;
}

var G__33502 = args33500.length;
switch (G__33502) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33500.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33387__auto___33554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto___33554){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto___33554){
return (function (state_33526){
var state_val_33527 = (state_33526[(1)]);
if((state_val_33527 === (7))){
var inst_33522 = (state_33526[(2)]);
var state_33526__$1 = state_33526;
var statearr_33528_33555 = state_33526__$1;
(statearr_33528_33555[(2)] = inst_33522);

(statearr_33528_33555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (1))){
var state_33526__$1 = state_33526;
var statearr_33529_33556 = state_33526__$1;
(statearr_33529_33556[(2)] = null);

(statearr_33529_33556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (4))){
var inst_33505 = (state_33526[(7)]);
var inst_33505__$1 = (state_33526[(2)]);
var inst_33506 = (inst_33505__$1 == null);
var state_33526__$1 = (function (){var statearr_33530 = state_33526;
(statearr_33530[(7)] = inst_33505__$1);

return statearr_33530;
})();
if(cljs.core.truth_(inst_33506)){
var statearr_33531_33557 = state_33526__$1;
(statearr_33531_33557[(1)] = (5));

} else {
var statearr_33532_33558 = state_33526__$1;
(statearr_33532_33558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (13))){
var state_33526__$1 = state_33526;
var statearr_33533_33559 = state_33526__$1;
(statearr_33533_33559[(2)] = null);

(statearr_33533_33559[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (6))){
var inst_33505 = (state_33526[(7)]);
var state_33526__$1 = state_33526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33526__$1,(11),to,inst_33505);
} else {
if((state_val_33527 === (3))){
var inst_33524 = (state_33526[(2)]);
var state_33526__$1 = state_33526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33526__$1,inst_33524);
} else {
if((state_val_33527 === (12))){
var state_33526__$1 = state_33526;
var statearr_33534_33560 = state_33526__$1;
(statearr_33534_33560[(2)] = null);

(statearr_33534_33560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (2))){
var state_33526__$1 = state_33526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33526__$1,(4),from);
} else {
if((state_val_33527 === (11))){
var inst_33515 = (state_33526[(2)]);
var state_33526__$1 = state_33526;
if(cljs.core.truth_(inst_33515)){
var statearr_33535_33561 = state_33526__$1;
(statearr_33535_33561[(1)] = (12));

} else {
var statearr_33536_33562 = state_33526__$1;
(statearr_33536_33562[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (9))){
var state_33526__$1 = state_33526;
var statearr_33537_33563 = state_33526__$1;
(statearr_33537_33563[(2)] = null);

(statearr_33537_33563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (5))){
var state_33526__$1 = state_33526;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33538_33564 = state_33526__$1;
(statearr_33538_33564[(1)] = (8));

} else {
var statearr_33539_33565 = state_33526__$1;
(statearr_33539_33565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (14))){
var inst_33520 = (state_33526[(2)]);
var state_33526__$1 = state_33526;
var statearr_33540_33566 = state_33526__$1;
(statearr_33540_33566[(2)] = inst_33520);

(statearr_33540_33566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (10))){
var inst_33512 = (state_33526[(2)]);
var state_33526__$1 = state_33526;
var statearr_33541_33567 = state_33526__$1;
(statearr_33541_33567[(2)] = inst_33512);

(statearr_33541_33567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (8))){
var inst_33509 = cljs.core.async.close_BANG_.call(null,to);
var state_33526__$1 = state_33526;
var statearr_33542_33568 = state_33526__$1;
(statearr_33542_33568[(2)] = inst_33509);

(statearr_33542_33568[(1)] = (10));


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
});})(c__33387__auto___33554))
;
return ((function (switch__33275__auto__,c__33387__auto___33554){
return (function() {
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_33546 = [null,null,null,null,null,null,null,null];
(statearr_33546[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_33546[(1)] = (1));

return statearr_33546;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_33526){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_33526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e33547){if((e33547 instanceof Object)){
var ex__33279__auto__ = e33547;
var statearr_33548_33569 = state_33526;
(statearr_33548_33569[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33570 = state_33526;
state_33526 = G__33570;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_33526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_33526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto___33554))
})();
var state__33389__auto__ = (function (){var statearr_33549 = f__33388__auto__.call(null);
(statearr_33549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto___33554);

return statearr_33549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto___33554))
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
return (function (p__33758){
var vec__33759 = p__33758;
var v = cljs.core.nth.call(null,vec__33759,(0),null);
var p = cljs.core.nth.call(null,vec__33759,(1),null);
var job = vec__33759;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33387__auto___33945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto___33945,res,vec__33759,v,p,job,jobs,results){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto___33945,res,vec__33759,v,p,job,jobs,results){
return (function (state_33766){
var state_val_33767 = (state_33766[(1)]);
if((state_val_33767 === (1))){
var state_33766__$1 = state_33766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33766__$1,(2),res,v);
} else {
if((state_val_33767 === (2))){
var inst_33763 = (state_33766[(2)]);
var inst_33764 = cljs.core.async.close_BANG_.call(null,res);
var state_33766__$1 = (function (){var statearr_33768 = state_33766;
(statearr_33768[(7)] = inst_33763);

return statearr_33768;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33766__$1,inst_33764);
} else {
return null;
}
}
});})(c__33387__auto___33945,res,vec__33759,v,p,job,jobs,results))
;
return ((function (switch__33275__auto__,c__33387__auto___33945,res,vec__33759,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0 = (function (){
var statearr_33772 = [null,null,null,null,null,null,null,null];
(statearr_33772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__);

(statearr_33772[(1)] = (1));

return statearr_33772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1 = (function (state_33766){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_33766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e33773){if((e33773 instanceof Object)){
var ex__33279__auto__ = e33773;
var statearr_33774_33946 = state_33766;
(statearr_33774_33946[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33947 = state_33766;
state_33766 = G__33947;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = function(state_33766){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1.call(this,state_33766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto___33945,res,vec__33759,v,p,job,jobs,results))
})();
var state__33389__auto__ = (function (){var statearr_33775 = f__33388__auto__.call(null);
(statearr_33775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto___33945);

return statearr_33775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto___33945,res,vec__33759,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33776){
var vec__33777 = p__33776;
var v = cljs.core.nth.call(null,vec__33777,(0),null);
var p = cljs.core.nth.call(null,vec__33777,(1),null);
var job = vec__33777;
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
var n__31167__auto___33948 = n;
var __33949 = (0);
while(true){
if((__33949 < n__31167__auto___33948)){
var G__33780_33950 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33780_33950) {
case "compute":
var c__33387__auto___33952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33949,c__33387__auto___33952,G__33780_33950,n__31167__auto___33948,jobs,results,process,async){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (__33949,c__33387__auto___33952,G__33780_33950,n__31167__auto___33948,jobs,results,process,async){
return (function (state_33793){
var state_val_33794 = (state_33793[(1)]);
if((state_val_33794 === (1))){
var state_33793__$1 = state_33793;
var statearr_33795_33953 = state_33793__$1;
(statearr_33795_33953[(2)] = null);

(statearr_33795_33953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (2))){
var state_33793__$1 = state_33793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33793__$1,(4),jobs);
} else {
if((state_val_33794 === (3))){
var inst_33791 = (state_33793[(2)]);
var state_33793__$1 = state_33793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33793__$1,inst_33791);
} else {
if((state_val_33794 === (4))){
var inst_33783 = (state_33793[(2)]);
var inst_33784 = process.call(null,inst_33783);
var state_33793__$1 = state_33793;
if(cljs.core.truth_(inst_33784)){
var statearr_33796_33954 = state_33793__$1;
(statearr_33796_33954[(1)] = (5));

} else {
var statearr_33797_33955 = state_33793__$1;
(statearr_33797_33955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (5))){
var state_33793__$1 = state_33793;
var statearr_33798_33956 = state_33793__$1;
(statearr_33798_33956[(2)] = null);

(statearr_33798_33956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (6))){
var state_33793__$1 = state_33793;
var statearr_33799_33957 = state_33793__$1;
(statearr_33799_33957[(2)] = null);

(statearr_33799_33957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (7))){
var inst_33789 = (state_33793[(2)]);
var state_33793__$1 = state_33793;
var statearr_33800_33958 = state_33793__$1;
(statearr_33800_33958[(2)] = inst_33789);

(statearr_33800_33958[(1)] = (3));


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
});})(__33949,c__33387__auto___33952,G__33780_33950,n__31167__auto___33948,jobs,results,process,async))
;
return ((function (__33949,switch__33275__auto__,c__33387__auto___33952,G__33780_33950,n__31167__auto___33948,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0 = (function (){
var statearr_33804 = [null,null,null,null,null,null,null];
(statearr_33804[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__);

(statearr_33804[(1)] = (1));

return statearr_33804;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1 = (function (state_33793){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_33793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e33805){if((e33805 instanceof Object)){
var ex__33279__auto__ = e33805;
var statearr_33806_33959 = state_33793;
(statearr_33806_33959[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33960 = state_33793;
state_33793 = G__33960;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = function(state_33793){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1.call(this,state_33793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__;
})()
;})(__33949,switch__33275__auto__,c__33387__auto___33952,G__33780_33950,n__31167__auto___33948,jobs,results,process,async))
})();
var state__33389__auto__ = (function (){var statearr_33807 = f__33388__auto__.call(null);
(statearr_33807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto___33952);

return statearr_33807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(__33949,c__33387__auto___33952,G__33780_33950,n__31167__auto___33948,jobs,results,process,async))
);


break;
case "async":
var c__33387__auto___33961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33949,c__33387__auto___33961,G__33780_33950,n__31167__auto___33948,jobs,results,process,async){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (__33949,c__33387__auto___33961,G__33780_33950,n__31167__auto___33948,jobs,results,process,async){
return (function (state_33820){
var state_val_33821 = (state_33820[(1)]);
if((state_val_33821 === (1))){
var state_33820__$1 = state_33820;
var statearr_33822_33962 = state_33820__$1;
(statearr_33822_33962[(2)] = null);

(statearr_33822_33962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (2))){
var state_33820__$1 = state_33820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33820__$1,(4),jobs);
} else {
if((state_val_33821 === (3))){
var inst_33818 = (state_33820[(2)]);
var state_33820__$1 = state_33820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33820__$1,inst_33818);
} else {
if((state_val_33821 === (4))){
var inst_33810 = (state_33820[(2)]);
var inst_33811 = async.call(null,inst_33810);
var state_33820__$1 = state_33820;
if(cljs.core.truth_(inst_33811)){
var statearr_33823_33963 = state_33820__$1;
(statearr_33823_33963[(1)] = (5));

} else {
var statearr_33824_33964 = state_33820__$1;
(statearr_33824_33964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (5))){
var state_33820__$1 = state_33820;
var statearr_33825_33965 = state_33820__$1;
(statearr_33825_33965[(2)] = null);

(statearr_33825_33965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (6))){
var state_33820__$1 = state_33820;
var statearr_33826_33966 = state_33820__$1;
(statearr_33826_33966[(2)] = null);

(statearr_33826_33966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (7))){
var inst_33816 = (state_33820[(2)]);
var state_33820__$1 = state_33820;
var statearr_33827_33967 = state_33820__$1;
(statearr_33827_33967[(2)] = inst_33816);

(statearr_33827_33967[(1)] = (3));


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
});})(__33949,c__33387__auto___33961,G__33780_33950,n__31167__auto___33948,jobs,results,process,async))
;
return ((function (__33949,switch__33275__auto__,c__33387__auto___33961,G__33780_33950,n__31167__auto___33948,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0 = (function (){
var statearr_33831 = [null,null,null,null,null,null,null];
(statearr_33831[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__);

(statearr_33831[(1)] = (1));

return statearr_33831;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1 = (function (state_33820){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_33820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e33832){if((e33832 instanceof Object)){
var ex__33279__auto__ = e33832;
var statearr_33833_33968 = state_33820;
(statearr_33833_33968[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33969 = state_33820;
state_33820 = G__33969;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = function(state_33820){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1.call(this,state_33820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__;
})()
;})(__33949,switch__33275__auto__,c__33387__auto___33961,G__33780_33950,n__31167__auto___33948,jobs,results,process,async))
})();
var state__33389__auto__ = (function (){var statearr_33834 = f__33388__auto__.call(null);
(statearr_33834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto___33961);

return statearr_33834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(__33949,c__33387__auto___33961,G__33780_33950,n__31167__auto___33948,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__33970 = (__33949 + (1));
__33949 = G__33970;
continue;
} else {
}
break;
}

var c__33387__auto___33971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto___33971,jobs,results,process,async){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto___33971,jobs,results,process,async){
return (function (state_33856){
var state_val_33857 = (state_33856[(1)]);
if((state_val_33857 === (1))){
var state_33856__$1 = state_33856;
var statearr_33858_33972 = state_33856__$1;
(statearr_33858_33972[(2)] = null);

(statearr_33858_33972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33857 === (2))){
var state_33856__$1 = state_33856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33856__$1,(4),from);
} else {
if((state_val_33857 === (3))){
var inst_33854 = (state_33856[(2)]);
var state_33856__$1 = state_33856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33856__$1,inst_33854);
} else {
if((state_val_33857 === (4))){
var inst_33837 = (state_33856[(7)]);
var inst_33837__$1 = (state_33856[(2)]);
var inst_33838 = (inst_33837__$1 == null);
var state_33856__$1 = (function (){var statearr_33859 = state_33856;
(statearr_33859[(7)] = inst_33837__$1);

return statearr_33859;
})();
if(cljs.core.truth_(inst_33838)){
var statearr_33860_33973 = state_33856__$1;
(statearr_33860_33973[(1)] = (5));

} else {
var statearr_33861_33974 = state_33856__$1;
(statearr_33861_33974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33857 === (5))){
var inst_33840 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33856__$1 = state_33856;
var statearr_33862_33975 = state_33856__$1;
(statearr_33862_33975[(2)] = inst_33840);

(statearr_33862_33975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33857 === (6))){
var inst_33837 = (state_33856[(7)]);
var inst_33842 = (state_33856[(8)]);
var inst_33842__$1 = cljs.core.async.chan.call(null,(1));
var inst_33843 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33844 = [inst_33837,inst_33842__$1];
var inst_33845 = (new cljs.core.PersistentVector(null,2,(5),inst_33843,inst_33844,null));
var state_33856__$1 = (function (){var statearr_33863 = state_33856;
(statearr_33863[(8)] = inst_33842__$1);

return statearr_33863;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33856__$1,(8),jobs,inst_33845);
} else {
if((state_val_33857 === (7))){
var inst_33852 = (state_33856[(2)]);
var state_33856__$1 = state_33856;
var statearr_33864_33976 = state_33856__$1;
(statearr_33864_33976[(2)] = inst_33852);

(statearr_33864_33976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33857 === (8))){
var inst_33842 = (state_33856[(8)]);
var inst_33847 = (state_33856[(2)]);
var state_33856__$1 = (function (){var statearr_33865 = state_33856;
(statearr_33865[(9)] = inst_33847);

return statearr_33865;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33856__$1,(9),results,inst_33842);
} else {
if((state_val_33857 === (9))){
var inst_33849 = (state_33856[(2)]);
var state_33856__$1 = (function (){var statearr_33866 = state_33856;
(statearr_33866[(10)] = inst_33849);

return statearr_33866;
})();
var statearr_33867_33977 = state_33856__$1;
(statearr_33867_33977[(2)] = null);

(statearr_33867_33977[(1)] = (2));


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
});})(c__33387__auto___33971,jobs,results,process,async))
;
return ((function (switch__33275__auto__,c__33387__auto___33971,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0 = (function (){
var statearr_33871 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__);

(statearr_33871[(1)] = (1));

return statearr_33871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1 = (function (state_33856){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_33856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e33872){if((e33872 instanceof Object)){
var ex__33279__auto__ = e33872;
var statearr_33873_33978 = state_33856;
(statearr_33873_33978[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33979 = state_33856;
state_33856 = G__33979;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = function(state_33856){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1.call(this,state_33856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto___33971,jobs,results,process,async))
})();
var state__33389__auto__ = (function (){var statearr_33874 = f__33388__auto__.call(null);
(statearr_33874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto___33971);

return statearr_33874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto___33971,jobs,results,process,async))
);


var c__33387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto__,jobs,results,process,async){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto__,jobs,results,process,async){
return (function (state_33912){
var state_val_33913 = (state_33912[(1)]);
if((state_val_33913 === (7))){
var inst_33908 = (state_33912[(2)]);
var state_33912__$1 = state_33912;
var statearr_33914_33980 = state_33912__$1;
(statearr_33914_33980[(2)] = inst_33908);

(statearr_33914_33980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (20))){
var state_33912__$1 = state_33912;
var statearr_33915_33981 = state_33912__$1;
(statearr_33915_33981[(2)] = null);

(statearr_33915_33981[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (1))){
var state_33912__$1 = state_33912;
var statearr_33916_33982 = state_33912__$1;
(statearr_33916_33982[(2)] = null);

(statearr_33916_33982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (4))){
var inst_33877 = (state_33912[(7)]);
var inst_33877__$1 = (state_33912[(2)]);
var inst_33878 = (inst_33877__$1 == null);
var state_33912__$1 = (function (){var statearr_33917 = state_33912;
(statearr_33917[(7)] = inst_33877__$1);

return statearr_33917;
})();
if(cljs.core.truth_(inst_33878)){
var statearr_33918_33983 = state_33912__$1;
(statearr_33918_33983[(1)] = (5));

} else {
var statearr_33919_33984 = state_33912__$1;
(statearr_33919_33984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (15))){
var inst_33890 = (state_33912[(8)]);
var state_33912__$1 = state_33912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33912__$1,(18),to,inst_33890);
} else {
if((state_val_33913 === (21))){
var inst_33903 = (state_33912[(2)]);
var state_33912__$1 = state_33912;
var statearr_33920_33985 = state_33912__$1;
(statearr_33920_33985[(2)] = inst_33903);

(statearr_33920_33985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (13))){
var inst_33905 = (state_33912[(2)]);
var state_33912__$1 = (function (){var statearr_33921 = state_33912;
(statearr_33921[(9)] = inst_33905);

return statearr_33921;
})();
var statearr_33922_33986 = state_33912__$1;
(statearr_33922_33986[(2)] = null);

(statearr_33922_33986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (6))){
var inst_33877 = (state_33912[(7)]);
var state_33912__$1 = state_33912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33912__$1,(11),inst_33877);
} else {
if((state_val_33913 === (17))){
var inst_33898 = (state_33912[(2)]);
var state_33912__$1 = state_33912;
if(cljs.core.truth_(inst_33898)){
var statearr_33923_33987 = state_33912__$1;
(statearr_33923_33987[(1)] = (19));

} else {
var statearr_33924_33988 = state_33912__$1;
(statearr_33924_33988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (3))){
var inst_33910 = (state_33912[(2)]);
var state_33912__$1 = state_33912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33912__$1,inst_33910);
} else {
if((state_val_33913 === (12))){
var inst_33887 = (state_33912[(10)]);
var state_33912__$1 = state_33912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33912__$1,(14),inst_33887);
} else {
if((state_val_33913 === (2))){
var state_33912__$1 = state_33912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33912__$1,(4),results);
} else {
if((state_val_33913 === (19))){
var state_33912__$1 = state_33912;
var statearr_33925_33989 = state_33912__$1;
(statearr_33925_33989[(2)] = null);

(statearr_33925_33989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (11))){
var inst_33887 = (state_33912[(2)]);
var state_33912__$1 = (function (){var statearr_33926 = state_33912;
(statearr_33926[(10)] = inst_33887);

return statearr_33926;
})();
var statearr_33927_33990 = state_33912__$1;
(statearr_33927_33990[(2)] = null);

(statearr_33927_33990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (9))){
var state_33912__$1 = state_33912;
var statearr_33928_33991 = state_33912__$1;
(statearr_33928_33991[(2)] = null);

(statearr_33928_33991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (5))){
var state_33912__$1 = state_33912;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33929_33992 = state_33912__$1;
(statearr_33929_33992[(1)] = (8));

} else {
var statearr_33930_33993 = state_33912__$1;
(statearr_33930_33993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (14))){
var inst_33890 = (state_33912[(8)]);
var inst_33892 = (state_33912[(11)]);
var inst_33890__$1 = (state_33912[(2)]);
var inst_33891 = (inst_33890__$1 == null);
var inst_33892__$1 = cljs.core.not.call(null,inst_33891);
var state_33912__$1 = (function (){var statearr_33931 = state_33912;
(statearr_33931[(8)] = inst_33890__$1);

(statearr_33931[(11)] = inst_33892__$1);

return statearr_33931;
})();
if(inst_33892__$1){
var statearr_33932_33994 = state_33912__$1;
(statearr_33932_33994[(1)] = (15));

} else {
var statearr_33933_33995 = state_33912__$1;
(statearr_33933_33995[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (16))){
var inst_33892 = (state_33912[(11)]);
var state_33912__$1 = state_33912;
var statearr_33934_33996 = state_33912__$1;
(statearr_33934_33996[(2)] = inst_33892);

(statearr_33934_33996[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (10))){
var inst_33884 = (state_33912[(2)]);
var state_33912__$1 = state_33912;
var statearr_33935_33997 = state_33912__$1;
(statearr_33935_33997[(2)] = inst_33884);

(statearr_33935_33997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (18))){
var inst_33895 = (state_33912[(2)]);
var state_33912__$1 = state_33912;
var statearr_33936_33998 = state_33912__$1;
(statearr_33936_33998[(2)] = inst_33895);

(statearr_33936_33998[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33913 === (8))){
var inst_33881 = cljs.core.async.close_BANG_.call(null,to);
var state_33912__$1 = state_33912;
var statearr_33937_33999 = state_33912__$1;
(statearr_33937_33999[(2)] = inst_33881);

(statearr_33937_33999[(1)] = (10));


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
});})(c__33387__auto__,jobs,results,process,async))
;
return ((function (switch__33275__auto__,c__33387__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0 = (function (){
var statearr_33941 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33941[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__);

(statearr_33941[(1)] = (1));

return statearr_33941;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1 = (function (state_33912){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_33912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e33942){if((e33942 instanceof Object)){
var ex__33279__auto__ = e33942;
var statearr_33943_34000 = state_33912;
(statearr_33943_34000[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34001 = state_33912;
state_33912 = G__34001;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = function(state_33912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1.call(this,state_33912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto__,jobs,results,process,async))
})();
var state__33389__auto__ = (function (){var statearr_33944 = f__33388__auto__.call(null);
(statearr_33944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto__);

return statearr_33944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto__,jobs,results,process,async))
);

return c__33387__auto__;
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
var args34002 = [];
var len__31357__auto___34005 = arguments.length;
var i__31358__auto___34006 = (0);
while(true){
if((i__31358__auto___34006 < len__31357__auto___34005)){
args34002.push((arguments[i__31358__auto___34006]));

var G__34007 = (i__31358__auto___34006 + (1));
i__31358__auto___34006 = G__34007;
continue;
} else {
}
break;
}

var G__34004 = args34002.length;
switch (G__34004) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34002.length)].join('')));

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
var args34009 = [];
var len__31357__auto___34012 = arguments.length;
var i__31358__auto___34013 = (0);
while(true){
if((i__31358__auto___34013 < len__31357__auto___34012)){
args34009.push((arguments[i__31358__auto___34013]));

var G__34014 = (i__31358__auto___34013 + (1));
i__31358__auto___34013 = G__34014;
continue;
} else {
}
break;
}

var G__34011 = args34009.length;
switch (G__34011) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34009.length)].join('')));

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
var args34016 = [];
var len__31357__auto___34069 = arguments.length;
var i__31358__auto___34070 = (0);
while(true){
if((i__31358__auto___34070 < len__31357__auto___34069)){
args34016.push((arguments[i__31358__auto___34070]));

var G__34071 = (i__31358__auto___34070 + (1));
i__31358__auto___34070 = G__34071;
continue;
} else {
}
break;
}

var G__34018 = args34016.length;
switch (G__34018) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34016.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33387__auto___34073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto___34073,tc,fc){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto___34073,tc,fc){
return (function (state_34044){
var state_val_34045 = (state_34044[(1)]);
if((state_val_34045 === (7))){
var inst_34040 = (state_34044[(2)]);
var state_34044__$1 = state_34044;
var statearr_34046_34074 = state_34044__$1;
(statearr_34046_34074[(2)] = inst_34040);

(statearr_34046_34074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34045 === (1))){
var state_34044__$1 = state_34044;
var statearr_34047_34075 = state_34044__$1;
(statearr_34047_34075[(2)] = null);

(statearr_34047_34075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34045 === (4))){
var inst_34021 = (state_34044[(7)]);
var inst_34021__$1 = (state_34044[(2)]);
var inst_34022 = (inst_34021__$1 == null);
var state_34044__$1 = (function (){var statearr_34048 = state_34044;
(statearr_34048[(7)] = inst_34021__$1);

return statearr_34048;
})();
if(cljs.core.truth_(inst_34022)){
var statearr_34049_34076 = state_34044__$1;
(statearr_34049_34076[(1)] = (5));

} else {
var statearr_34050_34077 = state_34044__$1;
(statearr_34050_34077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34045 === (13))){
var state_34044__$1 = state_34044;
var statearr_34051_34078 = state_34044__$1;
(statearr_34051_34078[(2)] = null);

(statearr_34051_34078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34045 === (6))){
var inst_34021 = (state_34044[(7)]);
var inst_34027 = p.call(null,inst_34021);
var state_34044__$1 = state_34044;
if(cljs.core.truth_(inst_34027)){
var statearr_34052_34079 = state_34044__$1;
(statearr_34052_34079[(1)] = (9));

} else {
var statearr_34053_34080 = state_34044__$1;
(statearr_34053_34080[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34045 === (3))){
var inst_34042 = (state_34044[(2)]);
var state_34044__$1 = state_34044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34044__$1,inst_34042);
} else {
if((state_val_34045 === (12))){
var state_34044__$1 = state_34044;
var statearr_34054_34081 = state_34044__$1;
(statearr_34054_34081[(2)] = null);

(statearr_34054_34081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34045 === (2))){
var state_34044__$1 = state_34044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34044__$1,(4),ch);
} else {
if((state_val_34045 === (11))){
var inst_34021 = (state_34044[(7)]);
var inst_34031 = (state_34044[(2)]);
var state_34044__$1 = state_34044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34044__$1,(8),inst_34031,inst_34021);
} else {
if((state_val_34045 === (9))){
var state_34044__$1 = state_34044;
var statearr_34055_34082 = state_34044__$1;
(statearr_34055_34082[(2)] = tc);

(statearr_34055_34082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34045 === (5))){
var inst_34024 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34025 = cljs.core.async.close_BANG_.call(null,fc);
var state_34044__$1 = (function (){var statearr_34056 = state_34044;
(statearr_34056[(8)] = inst_34024);

return statearr_34056;
})();
var statearr_34057_34083 = state_34044__$1;
(statearr_34057_34083[(2)] = inst_34025);

(statearr_34057_34083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34045 === (14))){
var inst_34038 = (state_34044[(2)]);
var state_34044__$1 = state_34044;
var statearr_34058_34084 = state_34044__$1;
(statearr_34058_34084[(2)] = inst_34038);

(statearr_34058_34084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34045 === (10))){
var state_34044__$1 = state_34044;
var statearr_34059_34085 = state_34044__$1;
(statearr_34059_34085[(2)] = fc);

(statearr_34059_34085[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34045 === (8))){
var inst_34033 = (state_34044[(2)]);
var state_34044__$1 = state_34044;
if(cljs.core.truth_(inst_34033)){
var statearr_34060_34086 = state_34044__$1;
(statearr_34060_34086[(1)] = (12));

} else {
var statearr_34061_34087 = state_34044__$1;
(statearr_34061_34087[(1)] = (13));

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
});})(c__33387__auto___34073,tc,fc))
;
return ((function (switch__33275__auto__,c__33387__auto___34073,tc,fc){
return (function() {
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_34065 = [null,null,null,null,null,null,null,null,null];
(statearr_34065[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_34065[(1)] = (1));

return statearr_34065;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_34044){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_34044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e34066){if((e34066 instanceof Object)){
var ex__33279__auto__ = e34066;
var statearr_34067_34088 = state_34044;
(statearr_34067_34088[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34089 = state_34044;
state_34044 = G__34089;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_34044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_34044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto___34073,tc,fc))
})();
var state__33389__auto__ = (function (){var statearr_34068 = f__33388__auto__.call(null);
(statearr_34068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto___34073);

return statearr_34068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto___34073,tc,fc))
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
var c__33387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto__){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto__){
return (function (state_34153){
var state_val_34154 = (state_34153[(1)]);
if((state_val_34154 === (7))){
var inst_34149 = (state_34153[(2)]);
var state_34153__$1 = state_34153;
var statearr_34155_34176 = state_34153__$1;
(statearr_34155_34176[(2)] = inst_34149);

(statearr_34155_34176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34154 === (1))){
var inst_34133 = init;
var state_34153__$1 = (function (){var statearr_34156 = state_34153;
(statearr_34156[(7)] = inst_34133);

return statearr_34156;
})();
var statearr_34157_34177 = state_34153__$1;
(statearr_34157_34177[(2)] = null);

(statearr_34157_34177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34154 === (4))){
var inst_34136 = (state_34153[(8)]);
var inst_34136__$1 = (state_34153[(2)]);
var inst_34137 = (inst_34136__$1 == null);
var state_34153__$1 = (function (){var statearr_34158 = state_34153;
(statearr_34158[(8)] = inst_34136__$1);

return statearr_34158;
})();
if(cljs.core.truth_(inst_34137)){
var statearr_34159_34178 = state_34153__$1;
(statearr_34159_34178[(1)] = (5));

} else {
var statearr_34160_34179 = state_34153__$1;
(statearr_34160_34179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34154 === (6))){
var inst_34136 = (state_34153[(8)]);
var inst_34140 = (state_34153[(9)]);
var inst_34133 = (state_34153[(7)]);
var inst_34140__$1 = f.call(null,inst_34133,inst_34136);
var inst_34141 = cljs.core.reduced_QMARK_.call(null,inst_34140__$1);
var state_34153__$1 = (function (){var statearr_34161 = state_34153;
(statearr_34161[(9)] = inst_34140__$1);

return statearr_34161;
})();
if(inst_34141){
var statearr_34162_34180 = state_34153__$1;
(statearr_34162_34180[(1)] = (8));

} else {
var statearr_34163_34181 = state_34153__$1;
(statearr_34163_34181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34154 === (3))){
var inst_34151 = (state_34153[(2)]);
var state_34153__$1 = state_34153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34153__$1,inst_34151);
} else {
if((state_val_34154 === (2))){
var state_34153__$1 = state_34153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34153__$1,(4),ch);
} else {
if((state_val_34154 === (9))){
var inst_34140 = (state_34153[(9)]);
var inst_34133 = inst_34140;
var state_34153__$1 = (function (){var statearr_34164 = state_34153;
(statearr_34164[(7)] = inst_34133);

return statearr_34164;
})();
var statearr_34165_34182 = state_34153__$1;
(statearr_34165_34182[(2)] = null);

(statearr_34165_34182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34154 === (5))){
var inst_34133 = (state_34153[(7)]);
var state_34153__$1 = state_34153;
var statearr_34166_34183 = state_34153__$1;
(statearr_34166_34183[(2)] = inst_34133);

(statearr_34166_34183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34154 === (10))){
var inst_34147 = (state_34153[(2)]);
var state_34153__$1 = state_34153;
var statearr_34167_34184 = state_34153__$1;
(statearr_34167_34184[(2)] = inst_34147);

(statearr_34167_34184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34154 === (8))){
var inst_34140 = (state_34153[(9)]);
var inst_34143 = cljs.core.deref.call(null,inst_34140);
var state_34153__$1 = state_34153;
var statearr_34168_34185 = state_34153__$1;
(statearr_34168_34185[(2)] = inst_34143);

(statearr_34168_34185[(1)] = (10));


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
});})(c__33387__auto__))
;
return ((function (switch__33275__auto__,c__33387__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33276__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33276__auto____0 = (function (){
var statearr_34172 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34172[(0)] = cljs$core$async$reduce_$_state_machine__33276__auto__);

(statearr_34172[(1)] = (1));

return statearr_34172;
});
var cljs$core$async$reduce_$_state_machine__33276__auto____1 = (function (state_34153){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_34153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e34173){if((e34173 instanceof Object)){
var ex__33279__auto__ = e34173;
var statearr_34174_34186 = state_34153;
(statearr_34174_34186[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34187 = state_34153;
state_34153 = G__34187;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33276__auto__ = function(state_34153){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33276__auto____1.call(this,state_34153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33276__auto____0;
cljs$core$async$reduce_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33276__auto____1;
return cljs$core$async$reduce_$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto__))
})();
var state__33389__auto__ = (function (){var statearr_34175 = f__33388__auto__.call(null);
(statearr_34175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto__);

return statearr_34175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto__))
);

return c__33387__auto__;
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
var args34188 = [];
var len__31357__auto___34240 = arguments.length;
var i__31358__auto___34241 = (0);
while(true){
if((i__31358__auto___34241 < len__31357__auto___34240)){
args34188.push((arguments[i__31358__auto___34241]));

var G__34242 = (i__31358__auto___34241 + (1));
i__31358__auto___34241 = G__34242;
continue;
} else {
}
break;
}

var G__34190 = args34188.length;
switch (G__34190) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34188.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto__){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto__){
return (function (state_34215){
var state_val_34216 = (state_34215[(1)]);
if((state_val_34216 === (7))){
var inst_34197 = (state_34215[(2)]);
var state_34215__$1 = state_34215;
var statearr_34217_34244 = state_34215__$1;
(statearr_34217_34244[(2)] = inst_34197);

(statearr_34217_34244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (1))){
var inst_34191 = cljs.core.seq.call(null,coll);
var inst_34192 = inst_34191;
var state_34215__$1 = (function (){var statearr_34218 = state_34215;
(statearr_34218[(7)] = inst_34192);

return statearr_34218;
})();
var statearr_34219_34245 = state_34215__$1;
(statearr_34219_34245[(2)] = null);

(statearr_34219_34245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (4))){
var inst_34192 = (state_34215[(7)]);
var inst_34195 = cljs.core.first.call(null,inst_34192);
var state_34215__$1 = state_34215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34215__$1,(7),ch,inst_34195);
} else {
if((state_val_34216 === (13))){
var inst_34209 = (state_34215[(2)]);
var state_34215__$1 = state_34215;
var statearr_34220_34246 = state_34215__$1;
(statearr_34220_34246[(2)] = inst_34209);

(statearr_34220_34246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (6))){
var inst_34200 = (state_34215[(2)]);
var state_34215__$1 = state_34215;
if(cljs.core.truth_(inst_34200)){
var statearr_34221_34247 = state_34215__$1;
(statearr_34221_34247[(1)] = (8));

} else {
var statearr_34222_34248 = state_34215__$1;
(statearr_34222_34248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (3))){
var inst_34213 = (state_34215[(2)]);
var state_34215__$1 = state_34215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34215__$1,inst_34213);
} else {
if((state_val_34216 === (12))){
var state_34215__$1 = state_34215;
var statearr_34223_34249 = state_34215__$1;
(statearr_34223_34249[(2)] = null);

(statearr_34223_34249[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (2))){
var inst_34192 = (state_34215[(7)]);
var state_34215__$1 = state_34215;
if(cljs.core.truth_(inst_34192)){
var statearr_34224_34250 = state_34215__$1;
(statearr_34224_34250[(1)] = (4));

} else {
var statearr_34225_34251 = state_34215__$1;
(statearr_34225_34251[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (11))){
var inst_34206 = cljs.core.async.close_BANG_.call(null,ch);
var state_34215__$1 = state_34215;
var statearr_34226_34252 = state_34215__$1;
(statearr_34226_34252[(2)] = inst_34206);

(statearr_34226_34252[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (9))){
var state_34215__$1 = state_34215;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34227_34253 = state_34215__$1;
(statearr_34227_34253[(1)] = (11));

} else {
var statearr_34228_34254 = state_34215__$1;
(statearr_34228_34254[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (5))){
var inst_34192 = (state_34215[(7)]);
var state_34215__$1 = state_34215;
var statearr_34229_34255 = state_34215__$1;
(statearr_34229_34255[(2)] = inst_34192);

(statearr_34229_34255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (10))){
var inst_34211 = (state_34215[(2)]);
var state_34215__$1 = state_34215;
var statearr_34230_34256 = state_34215__$1;
(statearr_34230_34256[(2)] = inst_34211);

(statearr_34230_34256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (8))){
var inst_34192 = (state_34215[(7)]);
var inst_34202 = cljs.core.next.call(null,inst_34192);
var inst_34192__$1 = inst_34202;
var state_34215__$1 = (function (){var statearr_34231 = state_34215;
(statearr_34231[(7)] = inst_34192__$1);

return statearr_34231;
})();
var statearr_34232_34257 = state_34215__$1;
(statearr_34232_34257[(2)] = null);

(statearr_34232_34257[(1)] = (2));


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
});})(c__33387__auto__))
;
return ((function (switch__33275__auto__,c__33387__auto__){
return (function() {
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_34236 = [null,null,null,null,null,null,null,null];
(statearr_34236[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_34236[(1)] = (1));

return statearr_34236;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_34215){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_34215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e34237){if((e34237 instanceof Object)){
var ex__33279__auto__ = e34237;
var statearr_34238_34258 = state_34215;
(statearr_34238_34258[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34259 = state_34215;
state_34215 = G__34259;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_34215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_34215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto__))
})();
var state__33389__auto__ = (function (){var statearr_34239 = f__33388__auto__.call(null);
(statearr_34239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto__);

return statearr_34239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto__))
);

return c__33387__auto__;
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
var x__30912__auto__ = (((_ == null))?null:_);
var m__30913__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,_);
} else {
var m__30913__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,_);
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
var x__30912__auto__ = (((m == null))?null:m);
var m__30913__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30913__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__30912__auto__ = (((m == null))?null:m);
var m__30913__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,m,ch);
} else {
var m__30913__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,m,ch);
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
var x__30912__auto__ = (((m == null))?null:m);
var m__30913__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,m);
} else {
var m__30913__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async34485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34485 = (function (ch,cs,meta34486){
this.ch = ch;
this.cs = cs;
this.meta34486 = meta34486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34487,meta34486__$1){
var self__ = this;
var _34487__$1 = this;
return (new cljs.core.async.t_cljs$core$async34485(self__.ch,self__.cs,meta34486__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34485.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34487){
var self__ = this;
var _34487__$1 = this;
return self__.meta34486;
});})(cs))
;

cljs.core.async.t_cljs$core$async34485.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34485.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34485.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34485.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34485.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34485.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34485.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34486","meta34486",576564756,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34485";

cljs.core.async.t_cljs$core$async34485.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30855__auto__,writer__30856__auto__,opt__30857__auto__){
return cljs.core._write.call(null,writer__30856__auto__,"cljs.core.async/t_cljs$core$async34485");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34485 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34485(ch__$1,cs__$1,meta34486){
return (new cljs.core.async.t_cljs$core$async34485(ch__$1,cs__$1,meta34486));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34485(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33387__auto___34710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto___34710,cs,m,dchan,dctr,done){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto___34710,cs,m,dchan,dctr,done){
return (function (state_34622){
var state_val_34623 = (state_34622[(1)]);
if((state_val_34623 === (7))){
var inst_34618 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34624_34711 = state_34622__$1;
(statearr_34624_34711[(2)] = inst_34618);

(statearr_34624_34711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (20))){
var inst_34521 = (state_34622[(7)]);
var inst_34533 = cljs.core.first.call(null,inst_34521);
var inst_34534 = cljs.core.nth.call(null,inst_34533,(0),null);
var inst_34535 = cljs.core.nth.call(null,inst_34533,(1),null);
var state_34622__$1 = (function (){var statearr_34625 = state_34622;
(statearr_34625[(8)] = inst_34534);

return statearr_34625;
})();
if(cljs.core.truth_(inst_34535)){
var statearr_34626_34712 = state_34622__$1;
(statearr_34626_34712[(1)] = (22));

} else {
var statearr_34627_34713 = state_34622__$1;
(statearr_34627_34713[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (27))){
var inst_34570 = (state_34622[(9)]);
var inst_34565 = (state_34622[(10)]);
var inst_34490 = (state_34622[(11)]);
var inst_34563 = (state_34622[(12)]);
var inst_34570__$1 = cljs.core._nth.call(null,inst_34563,inst_34565);
var inst_34571 = cljs.core.async.put_BANG_.call(null,inst_34570__$1,inst_34490,done);
var state_34622__$1 = (function (){var statearr_34628 = state_34622;
(statearr_34628[(9)] = inst_34570__$1);

return statearr_34628;
})();
if(cljs.core.truth_(inst_34571)){
var statearr_34629_34714 = state_34622__$1;
(statearr_34629_34714[(1)] = (30));

} else {
var statearr_34630_34715 = state_34622__$1;
(statearr_34630_34715[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (1))){
var state_34622__$1 = state_34622;
var statearr_34631_34716 = state_34622__$1;
(statearr_34631_34716[(2)] = null);

(statearr_34631_34716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (24))){
var inst_34521 = (state_34622[(7)]);
var inst_34540 = (state_34622[(2)]);
var inst_34541 = cljs.core.next.call(null,inst_34521);
var inst_34499 = inst_34541;
var inst_34500 = null;
var inst_34501 = (0);
var inst_34502 = (0);
var state_34622__$1 = (function (){var statearr_34632 = state_34622;
(statearr_34632[(13)] = inst_34540);

(statearr_34632[(14)] = inst_34499);

(statearr_34632[(15)] = inst_34501);

(statearr_34632[(16)] = inst_34502);

(statearr_34632[(17)] = inst_34500);

return statearr_34632;
})();
var statearr_34633_34717 = state_34622__$1;
(statearr_34633_34717[(2)] = null);

(statearr_34633_34717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (39))){
var state_34622__$1 = state_34622;
var statearr_34637_34718 = state_34622__$1;
(statearr_34637_34718[(2)] = null);

(statearr_34637_34718[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (4))){
var inst_34490 = (state_34622[(11)]);
var inst_34490__$1 = (state_34622[(2)]);
var inst_34491 = (inst_34490__$1 == null);
var state_34622__$1 = (function (){var statearr_34638 = state_34622;
(statearr_34638[(11)] = inst_34490__$1);

return statearr_34638;
})();
if(cljs.core.truth_(inst_34491)){
var statearr_34639_34719 = state_34622__$1;
(statearr_34639_34719[(1)] = (5));

} else {
var statearr_34640_34720 = state_34622__$1;
(statearr_34640_34720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (15))){
var inst_34499 = (state_34622[(14)]);
var inst_34501 = (state_34622[(15)]);
var inst_34502 = (state_34622[(16)]);
var inst_34500 = (state_34622[(17)]);
var inst_34517 = (state_34622[(2)]);
var inst_34518 = (inst_34502 + (1));
var tmp34634 = inst_34499;
var tmp34635 = inst_34501;
var tmp34636 = inst_34500;
var inst_34499__$1 = tmp34634;
var inst_34500__$1 = tmp34636;
var inst_34501__$1 = tmp34635;
var inst_34502__$1 = inst_34518;
var state_34622__$1 = (function (){var statearr_34641 = state_34622;
(statearr_34641[(14)] = inst_34499__$1);

(statearr_34641[(15)] = inst_34501__$1);

(statearr_34641[(18)] = inst_34517);

(statearr_34641[(16)] = inst_34502__$1);

(statearr_34641[(17)] = inst_34500__$1);

return statearr_34641;
})();
var statearr_34642_34721 = state_34622__$1;
(statearr_34642_34721[(2)] = null);

(statearr_34642_34721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (21))){
var inst_34544 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34646_34722 = state_34622__$1;
(statearr_34646_34722[(2)] = inst_34544);

(statearr_34646_34722[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (31))){
var inst_34570 = (state_34622[(9)]);
var inst_34574 = done.call(null,null);
var inst_34575 = cljs.core.async.untap_STAR_.call(null,m,inst_34570);
var state_34622__$1 = (function (){var statearr_34647 = state_34622;
(statearr_34647[(19)] = inst_34574);

return statearr_34647;
})();
var statearr_34648_34723 = state_34622__$1;
(statearr_34648_34723[(2)] = inst_34575);

(statearr_34648_34723[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (32))){
var inst_34565 = (state_34622[(10)]);
var inst_34564 = (state_34622[(20)]);
var inst_34562 = (state_34622[(21)]);
var inst_34563 = (state_34622[(12)]);
var inst_34577 = (state_34622[(2)]);
var inst_34578 = (inst_34565 + (1));
var tmp34643 = inst_34564;
var tmp34644 = inst_34562;
var tmp34645 = inst_34563;
var inst_34562__$1 = tmp34644;
var inst_34563__$1 = tmp34645;
var inst_34564__$1 = tmp34643;
var inst_34565__$1 = inst_34578;
var state_34622__$1 = (function (){var statearr_34649 = state_34622;
(statearr_34649[(22)] = inst_34577);

(statearr_34649[(10)] = inst_34565__$1);

(statearr_34649[(20)] = inst_34564__$1);

(statearr_34649[(21)] = inst_34562__$1);

(statearr_34649[(12)] = inst_34563__$1);

return statearr_34649;
})();
var statearr_34650_34724 = state_34622__$1;
(statearr_34650_34724[(2)] = null);

(statearr_34650_34724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (40))){
var inst_34590 = (state_34622[(23)]);
var inst_34594 = done.call(null,null);
var inst_34595 = cljs.core.async.untap_STAR_.call(null,m,inst_34590);
var state_34622__$1 = (function (){var statearr_34651 = state_34622;
(statearr_34651[(24)] = inst_34594);

return statearr_34651;
})();
var statearr_34652_34725 = state_34622__$1;
(statearr_34652_34725[(2)] = inst_34595);

(statearr_34652_34725[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (33))){
var inst_34581 = (state_34622[(25)]);
var inst_34583 = cljs.core.chunked_seq_QMARK_.call(null,inst_34581);
var state_34622__$1 = state_34622;
if(inst_34583){
var statearr_34653_34726 = state_34622__$1;
(statearr_34653_34726[(1)] = (36));

} else {
var statearr_34654_34727 = state_34622__$1;
(statearr_34654_34727[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (13))){
var inst_34511 = (state_34622[(26)]);
var inst_34514 = cljs.core.async.close_BANG_.call(null,inst_34511);
var state_34622__$1 = state_34622;
var statearr_34655_34728 = state_34622__$1;
(statearr_34655_34728[(2)] = inst_34514);

(statearr_34655_34728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (22))){
var inst_34534 = (state_34622[(8)]);
var inst_34537 = cljs.core.async.close_BANG_.call(null,inst_34534);
var state_34622__$1 = state_34622;
var statearr_34656_34729 = state_34622__$1;
(statearr_34656_34729[(2)] = inst_34537);

(statearr_34656_34729[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (36))){
var inst_34581 = (state_34622[(25)]);
var inst_34585 = cljs.core.chunk_first.call(null,inst_34581);
var inst_34586 = cljs.core.chunk_rest.call(null,inst_34581);
var inst_34587 = cljs.core.count.call(null,inst_34585);
var inst_34562 = inst_34586;
var inst_34563 = inst_34585;
var inst_34564 = inst_34587;
var inst_34565 = (0);
var state_34622__$1 = (function (){var statearr_34657 = state_34622;
(statearr_34657[(10)] = inst_34565);

(statearr_34657[(20)] = inst_34564);

(statearr_34657[(21)] = inst_34562);

(statearr_34657[(12)] = inst_34563);

return statearr_34657;
})();
var statearr_34658_34730 = state_34622__$1;
(statearr_34658_34730[(2)] = null);

(statearr_34658_34730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (41))){
var inst_34581 = (state_34622[(25)]);
var inst_34597 = (state_34622[(2)]);
var inst_34598 = cljs.core.next.call(null,inst_34581);
var inst_34562 = inst_34598;
var inst_34563 = null;
var inst_34564 = (0);
var inst_34565 = (0);
var state_34622__$1 = (function (){var statearr_34659 = state_34622;
(statearr_34659[(10)] = inst_34565);

(statearr_34659[(20)] = inst_34564);

(statearr_34659[(27)] = inst_34597);

(statearr_34659[(21)] = inst_34562);

(statearr_34659[(12)] = inst_34563);

return statearr_34659;
})();
var statearr_34660_34731 = state_34622__$1;
(statearr_34660_34731[(2)] = null);

(statearr_34660_34731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (43))){
var state_34622__$1 = state_34622;
var statearr_34661_34732 = state_34622__$1;
(statearr_34661_34732[(2)] = null);

(statearr_34661_34732[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (29))){
var inst_34606 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34662_34733 = state_34622__$1;
(statearr_34662_34733[(2)] = inst_34606);

(statearr_34662_34733[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (44))){
var inst_34615 = (state_34622[(2)]);
var state_34622__$1 = (function (){var statearr_34663 = state_34622;
(statearr_34663[(28)] = inst_34615);

return statearr_34663;
})();
var statearr_34664_34734 = state_34622__$1;
(statearr_34664_34734[(2)] = null);

(statearr_34664_34734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (6))){
var inst_34554 = (state_34622[(29)]);
var inst_34553 = cljs.core.deref.call(null,cs);
var inst_34554__$1 = cljs.core.keys.call(null,inst_34553);
var inst_34555 = cljs.core.count.call(null,inst_34554__$1);
var inst_34556 = cljs.core.reset_BANG_.call(null,dctr,inst_34555);
var inst_34561 = cljs.core.seq.call(null,inst_34554__$1);
var inst_34562 = inst_34561;
var inst_34563 = null;
var inst_34564 = (0);
var inst_34565 = (0);
var state_34622__$1 = (function (){var statearr_34665 = state_34622;
(statearr_34665[(29)] = inst_34554__$1);

(statearr_34665[(10)] = inst_34565);

(statearr_34665[(30)] = inst_34556);

(statearr_34665[(20)] = inst_34564);

(statearr_34665[(21)] = inst_34562);

(statearr_34665[(12)] = inst_34563);

return statearr_34665;
})();
var statearr_34666_34735 = state_34622__$1;
(statearr_34666_34735[(2)] = null);

(statearr_34666_34735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (28))){
var inst_34581 = (state_34622[(25)]);
var inst_34562 = (state_34622[(21)]);
var inst_34581__$1 = cljs.core.seq.call(null,inst_34562);
var state_34622__$1 = (function (){var statearr_34667 = state_34622;
(statearr_34667[(25)] = inst_34581__$1);

return statearr_34667;
})();
if(inst_34581__$1){
var statearr_34668_34736 = state_34622__$1;
(statearr_34668_34736[(1)] = (33));

} else {
var statearr_34669_34737 = state_34622__$1;
(statearr_34669_34737[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (25))){
var inst_34565 = (state_34622[(10)]);
var inst_34564 = (state_34622[(20)]);
var inst_34567 = (inst_34565 < inst_34564);
var inst_34568 = inst_34567;
var state_34622__$1 = state_34622;
if(cljs.core.truth_(inst_34568)){
var statearr_34670_34738 = state_34622__$1;
(statearr_34670_34738[(1)] = (27));

} else {
var statearr_34671_34739 = state_34622__$1;
(statearr_34671_34739[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (34))){
var state_34622__$1 = state_34622;
var statearr_34672_34740 = state_34622__$1;
(statearr_34672_34740[(2)] = null);

(statearr_34672_34740[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (17))){
var state_34622__$1 = state_34622;
var statearr_34673_34741 = state_34622__$1;
(statearr_34673_34741[(2)] = null);

(statearr_34673_34741[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (3))){
var inst_34620 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34622__$1,inst_34620);
} else {
if((state_val_34623 === (12))){
var inst_34549 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34674_34742 = state_34622__$1;
(statearr_34674_34742[(2)] = inst_34549);

(statearr_34674_34742[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (2))){
var state_34622__$1 = state_34622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34622__$1,(4),ch);
} else {
if((state_val_34623 === (23))){
var state_34622__$1 = state_34622;
var statearr_34675_34743 = state_34622__$1;
(statearr_34675_34743[(2)] = null);

(statearr_34675_34743[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (35))){
var inst_34604 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34676_34744 = state_34622__$1;
(statearr_34676_34744[(2)] = inst_34604);

(statearr_34676_34744[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (19))){
var inst_34521 = (state_34622[(7)]);
var inst_34525 = cljs.core.chunk_first.call(null,inst_34521);
var inst_34526 = cljs.core.chunk_rest.call(null,inst_34521);
var inst_34527 = cljs.core.count.call(null,inst_34525);
var inst_34499 = inst_34526;
var inst_34500 = inst_34525;
var inst_34501 = inst_34527;
var inst_34502 = (0);
var state_34622__$1 = (function (){var statearr_34677 = state_34622;
(statearr_34677[(14)] = inst_34499);

(statearr_34677[(15)] = inst_34501);

(statearr_34677[(16)] = inst_34502);

(statearr_34677[(17)] = inst_34500);

return statearr_34677;
})();
var statearr_34678_34745 = state_34622__$1;
(statearr_34678_34745[(2)] = null);

(statearr_34678_34745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (11))){
var inst_34499 = (state_34622[(14)]);
var inst_34521 = (state_34622[(7)]);
var inst_34521__$1 = cljs.core.seq.call(null,inst_34499);
var state_34622__$1 = (function (){var statearr_34679 = state_34622;
(statearr_34679[(7)] = inst_34521__$1);

return statearr_34679;
})();
if(inst_34521__$1){
var statearr_34680_34746 = state_34622__$1;
(statearr_34680_34746[(1)] = (16));

} else {
var statearr_34681_34747 = state_34622__$1;
(statearr_34681_34747[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (9))){
var inst_34551 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34682_34748 = state_34622__$1;
(statearr_34682_34748[(2)] = inst_34551);

(statearr_34682_34748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (5))){
var inst_34497 = cljs.core.deref.call(null,cs);
var inst_34498 = cljs.core.seq.call(null,inst_34497);
var inst_34499 = inst_34498;
var inst_34500 = null;
var inst_34501 = (0);
var inst_34502 = (0);
var state_34622__$1 = (function (){var statearr_34683 = state_34622;
(statearr_34683[(14)] = inst_34499);

(statearr_34683[(15)] = inst_34501);

(statearr_34683[(16)] = inst_34502);

(statearr_34683[(17)] = inst_34500);

return statearr_34683;
})();
var statearr_34684_34749 = state_34622__$1;
(statearr_34684_34749[(2)] = null);

(statearr_34684_34749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (14))){
var state_34622__$1 = state_34622;
var statearr_34685_34750 = state_34622__$1;
(statearr_34685_34750[(2)] = null);

(statearr_34685_34750[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (45))){
var inst_34612 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34686_34751 = state_34622__$1;
(statearr_34686_34751[(2)] = inst_34612);

(statearr_34686_34751[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (26))){
var inst_34554 = (state_34622[(29)]);
var inst_34608 = (state_34622[(2)]);
var inst_34609 = cljs.core.seq.call(null,inst_34554);
var state_34622__$1 = (function (){var statearr_34687 = state_34622;
(statearr_34687[(31)] = inst_34608);

return statearr_34687;
})();
if(inst_34609){
var statearr_34688_34752 = state_34622__$1;
(statearr_34688_34752[(1)] = (42));

} else {
var statearr_34689_34753 = state_34622__$1;
(statearr_34689_34753[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (16))){
var inst_34521 = (state_34622[(7)]);
var inst_34523 = cljs.core.chunked_seq_QMARK_.call(null,inst_34521);
var state_34622__$1 = state_34622;
if(inst_34523){
var statearr_34690_34754 = state_34622__$1;
(statearr_34690_34754[(1)] = (19));

} else {
var statearr_34691_34755 = state_34622__$1;
(statearr_34691_34755[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (38))){
var inst_34601 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34692_34756 = state_34622__$1;
(statearr_34692_34756[(2)] = inst_34601);

(statearr_34692_34756[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (30))){
var state_34622__$1 = state_34622;
var statearr_34693_34757 = state_34622__$1;
(statearr_34693_34757[(2)] = null);

(statearr_34693_34757[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (10))){
var inst_34502 = (state_34622[(16)]);
var inst_34500 = (state_34622[(17)]);
var inst_34510 = cljs.core._nth.call(null,inst_34500,inst_34502);
var inst_34511 = cljs.core.nth.call(null,inst_34510,(0),null);
var inst_34512 = cljs.core.nth.call(null,inst_34510,(1),null);
var state_34622__$1 = (function (){var statearr_34694 = state_34622;
(statearr_34694[(26)] = inst_34511);

return statearr_34694;
})();
if(cljs.core.truth_(inst_34512)){
var statearr_34695_34758 = state_34622__$1;
(statearr_34695_34758[(1)] = (13));

} else {
var statearr_34696_34759 = state_34622__$1;
(statearr_34696_34759[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (18))){
var inst_34547 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34697_34760 = state_34622__$1;
(statearr_34697_34760[(2)] = inst_34547);

(statearr_34697_34760[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (42))){
var state_34622__$1 = state_34622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34622__$1,(45),dchan);
} else {
if((state_val_34623 === (37))){
var inst_34590 = (state_34622[(23)]);
var inst_34581 = (state_34622[(25)]);
var inst_34490 = (state_34622[(11)]);
var inst_34590__$1 = cljs.core.first.call(null,inst_34581);
var inst_34591 = cljs.core.async.put_BANG_.call(null,inst_34590__$1,inst_34490,done);
var state_34622__$1 = (function (){var statearr_34698 = state_34622;
(statearr_34698[(23)] = inst_34590__$1);

return statearr_34698;
})();
if(cljs.core.truth_(inst_34591)){
var statearr_34699_34761 = state_34622__$1;
(statearr_34699_34761[(1)] = (39));

} else {
var statearr_34700_34762 = state_34622__$1;
(statearr_34700_34762[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (8))){
var inst_34501 = (state_34622[(15)]);
var inst_34502 = (state_34622[(16)]);
var inst_34504 = (inst_34502 < inst_34501);
var inst_34505 = inst_34504;
var state_34622__$1 = state_34622;
if(cljs.core.truth_(inst_34505)){
var statearr_34701_34763 = state_34622__$1;
(statearr_34701_34763[(1)] = (10));

} else {
var statearr_34702_34764 = state_34622__$1;
(statearr_34702_34764[(1)] = (11));

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
});})(c__33387__auto___34710,cs,m,dchan,dctr,done))
;
return ((function (switch__33275__auto__,c__33387__auto___34710,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33276__auto__ = null;
var cljs$core$async$mult_$_state_machine__33276__auto____0 = (function (){
var statearr_34706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34706[(0)] = cljs$core$async$mult_$_state_machine__33276__auto__);

(statearr_34706[(1)] = (1));

return statearr_34706;
});
var cljs$core$async$mult_$_state_machine__33276__auto____1 = (function (state_34622){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_34622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e34707){if((e34707 instanceof Object)){
var ex__33279__auto__ = e34707;
var statearr_34708_34765 = state_34622;
(statearr_34708_34765[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34766 = state_34622;
state_34622 = G__34766;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33276__auto__ = function(state_34622){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33276__auto____1.call(this,state_34622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33276__auto____0;
cljs$core$async$mult_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33276__auto____1;
return cljs$core$async$mult_$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto___34710,cs,m,dchan,dctr,done))
})();
var state__33389__auto__ = (function (){var statearr_34709 = f__33388__auto__.call(null);
(statearr_34709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto___34710);

return statearr_34709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto___34710,cs,m,dchan,dctr,done))
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
var args34767 = [];
var len__31357__auto___34770 = arguments.length;
var i__31358__auto___34771 = (0);
while(true){
if((i__31358__auto___34771 < len__31357__auto___34770)){
args34767.push((arguments[i__31358__auto___34771]));

var G__34772 = (i__31358__auto___34771 + (1));
i__31358__auto___34771 = G__34772;
continue;
} else {
}
break;
}

var G__34769 = args34767.length;
switch (G__34769) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34767.length)].join('')));

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
var x__30912__auto__ = (((m == null))?null:m);
var m__30913__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,m,ch);
} else {
var m__30913__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,m,ch);
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
var x__30912__auto__ = (((m == null))?null:m);
var m__30913__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,m,ch);
} else {
var m__30913__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,m,ch);
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
var x__30912__auto__ = (((m == null))?null:m);
var m__30913__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,m);
} else {
var m__30913__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,m);
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
var x__30912__auto__ = (((m == null))?null:m);
var m__30913__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,m,state_map);
} else {
var m__30913__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,m,state_map);
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
var x__30912__auto__ = (((m == null))?null:m);
var m__30913__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,m,mode);
} else {
var m__30913__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31364__auto__ = [];
var len__31357__auto___34784 = arguments.length;
var i__31358__auto___34785 = (0);
while(true){
if((i__31358__auto___34785 < len__31357__auto___34784)){
args__31364__auto__.push((arguments[i__31358__auto___34785]));

var G__34786 = (i__31358__auto___34785 + (1));
i__31358__auto___34785 = G__34786;
continue;
} else {
}
break;
}

var argseq__31365__auto__ = ((((3) < args__31364__auto__.length))?(new cljs.core.IndexedSeq(args__31364__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31365__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34778){
var map__34779 = p__34778;
var map__34779__$1 = ((((!((map__34779 == null)))?((((map__34779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34779):map__34779);
var opts = map__34779__$1;
var statearr_34781_34787 = state;
(statearr_34781_34787[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__34779,map__34779__$1,opts){
return (function (val){
var statearr_34782_34788 = state;
(statearr_34782_34788[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34779,map__34779__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_34783_34789 = state;
(statearr_34783_34789[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34774){
var G__34775 = cljs.core.first.call(null,seq34774);
var seq34774__$1 = cljs.core.next.call(null,seq34774);
var G__34776 = cljs.core.first.call(null,seq34774__$1);
var seq34774__$2 = cljs.core.next.call(null,seq34774__$1);
var G__34777 = cljs.core.first.call(null,seq34774__$2);
var seq34774__$3 = cljs.core.next.call(null,seq34774__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34775,G__34776,G__34777,seq34774__$3);
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
if(typeof cljs.core.async.t_cljs$core$async34957 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34957 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34958){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34958 = meta34958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34959,meta34958__$1){
var self__ = this;
var _34959__$1 = this;
return (new cljs.core.async.t_cljs$core$async34957(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34958__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34957.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34959){
var self__ = this;
var _34959__$1 = this;
return self__.meta34958;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34957.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34957.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34957.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34957.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34957.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34957.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34957.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34957.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async34957.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34958","meta34958",5445880,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34957.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34957";

cljs.core.async.t_cljs$core$async34957.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30855__auto__,writer__30856__auto__,opt__30857__auto__){
return cljs.core._write.call(null,writer__30856__auto__,"cljs.core.async/t_cljs$core$async34957");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34957 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34957(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34958){
return (new cljs.core.async.t_cljs$core$async34957(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34958));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34957(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33387__auto___35124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto___35124,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto___35124,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35061){
var state_val_35062 = (state_35061[(1)]);
if((state_val_35062 === (7))){
var inst_34976 = (state_35061[(2)]);
var state_35061__$1 = state_35061;
var statearr_35063_35125 = state_35061__$1;
(statearr_35063_35125[(2)] = inst_34976);

(statearr_35063_35125[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (20))){
var inst_34988 = (state_35061[(7)]);
var state_35061__$1 = state_35061;
var statearr_35064_35126 = state_35061__$1;
(statearr_35064_35126[(2)] = inst_34988);

(statearr_35064_35126[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (27))){
var state_35061__$1 = state_35061;
var statearr_35065_35127 = state_35061__$1;
(statearr_35065_35127[(2)] = null);

(statearr_35065_35127[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (1))){
var inst_34963 = (state_35061[(8)]);
var inst_34963__$1 = calc_state.call(null);
var inst_34965 = (inst_34963__$1 == null);
var inst_34966 = cljs.core.not.call(null,inst_34965);
var state_35061__$1 = (function (){var statearr_35066 = state_35061;
(statearr_35066[(8)] = inst_34963__$1);

return statearr_35066;
})();
if(inst_34966){
var statearr_35067_35128 = state_35061__$1;
(statearr_35067_35128[(1)] = (2));

} else {
var statearr_35068_35129 = state_35061__$1;
(statearr_35068_35129[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (24))){
var inst_35035 = (state_35061[(9)]);
var inst_35021 = (state_35061[(10)]);
var inst_35012 = (state_35061[(11)]);
var inst_35035__$1 = inst_35012.call(null,inst_35021);
var state_35061__$1 = (function (){var statearr_35069 = state_35061;
(statearr_35069[(9)] = inst_35035__$1);

return statearr_35069;
})();
if(cljs.core.truth_(inst_35035__$1)){
var statearr_35070_35130 = state_35061__$1;
(statearr_35070_35130[(1)] = (29));

} else {
var statearr_35071_35131 = state_35061__$1;
(statearr_35071_35131[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (4))){
var inst_34979 = (state_35061[(2)]);
var state_35061__$1 = state_35061;
if(cljs.core.truth_(inst_34979)){
var statearr_35072_35132 = state_35061__$1;
(statearr_35072_35132[(1)] = (8));

} else {
var statearr_35073_35133 = state_35061__$1;
(statearr_35073_35133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (15))){
var inst_35006 = (state_35061[(2)]);
var state_35061__$1 = state_35061;
if(cljs.core.truth_(inst_35006)){
var statearr_35074_35134 = state_35061__$1;
(statearr_35074_35134[(1)] = (19));

} else {
var statearr_35075_35135 = state_35061__$1;
(statearr_35075_35135[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (21))){
var inst_35011 = (state_35061[(12)]);
var inst_35011__$1 = (state_35061[(2)]);
var inst_35012 = cljs.core.get.call(null,inst_35011__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35013 = cljs.core.get.call(null,inst_35011__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35014 = cljs.core.get.call(null,inst_35011__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35061__$1 = (function (){var statearr_35076 = state_35061;
(statearr_35076[(13)] = inst_35013);

(statearr_35076[(11)] = inst_35012);

(statearr_35076[(12)] = inst_35011__$1);

return statearr_35076;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35061__$1,(22),inst_35014);
} else {
if((state_val_35062 === (31))){
var inst_35043 = (state_35061[(2)]);
var state_35061__$1 = state_35061;
if(cljs.core.truth_(inst_35043)){
var statearr_35077_35136 = state_35061__$1;
(statearr_35077_35136[(1)] = (32));

} else {
var statearr_35078_35137 = state_35061__$1;
(statearr_35078_35137[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (32))){
var inst_35020 = (state_35061[(14)]);
var state_35061__$1 = state_35061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35061__$1,(35),out,inst_35020);
} else {
if((state_val_35062 === (33))){
var inst_35011 = (state_35061[(12)]);
var inst_34988 = inst_35011;
var state_35061__$1 = (function (){var statearr_35079 = state_35061;
(statearr_35079[(7)] = inst_34988);

return statearr_35079;
})();
var statearr_35080_35138 = state_35061__$1;
(statearr_35080_35138[(2)] = null);

(statearr_35080_35138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (13))){
var inst_34988 = (state_35061[(7)]);
var inst_34995 = inst_34988.cljs$lang$protocol_mask$partition0$;
var inst_34996 = (inst_34995 & (64));
var inst_34997 = inst_34988.cljs$core$ISeq$;
var inst_34998 = (cljs.core.PROTOCOL_SENTINEL === inst_34997);
var inst_34999 = (inst_34996) || (inst_34998);
var state_35061__$1 = state_35061;
if(cljs.core.truth_(inst_34999)){
var statearr_35081_35139 = state_35061__$1;
(statearr_35081_35139[(1)] = (16));

} else {
var statearr_35082_35140 = state_35061__$1;
(statearr_35082_35140[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (22))){
var inst_35020 = (state_35061[(14)]);
var inst_35021 = (state_35061[(10)]);
var inst_35019 = (state_35061[(2)]);
var inst_35020__$1 = cljs.core.nth.call(null,inst_35019,(0),null);
var inst_35021__$1 = cljs.core.nth.call(null,inst_35019,(1),null);
var inst_35022 = (inst_35020__$1 == null);
var inst_35023 = cljs.core._EQ_.call(null,inst_35021__$1,change);
var inst_35024 = (inst_35022) || (inst_35023);
var state_35061__$1 = (function (){var statearr_35083 = state_35061;
(statearr_35083[(14)] = inst_35020__$1);

(statearr_35083[(10)] = inst_35021__$1);

return statearr_35083;
})();
if(cljs.core.truth_(inst_35024)){
var statearr_35084_35141 = state_35061__$1;
(statearr_35084_35141[(1)] = (23));

} else {
var statearr_35085_35142 = state_35061__$1;
(statearr_35085_35142[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (36))){
var inst_35011 = (state_35061[(12)]);
var inst_34988 = inst_35011;
var state_35061__$1 = (function (){var statearr_35086 = state_35061;
(statearr_35086[(7)] = inst_34988);

return statearr_35086;
})();
var statearr_35087_35143 = state_35061__$1;
(statearr_35087_35143[(2)] = null);

(statearr_35087_35143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (29))){
var inst_35035 = (state_35061[(9)]);
var state_35061__$1 = state_35061;
var statearr_35088_35144 = state_35061__$1;
(statearr_35088_35144[(2)] = inst_35035);

(statearr_35088_35144[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (6))){
var state_35061__$1 = state_35061;
var statearr_35089_35145 = state_35061__$1;
(statearr_35089_35145[(2)] = false);

(statearr_35089_35145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (28))){
var inst_35031 = (state_35061[(2)]);
var inst_35032 = calc_state.call(null);
var inst_34988 = inst_35032;
var state_35061__$1 = (function (){var statearr_35090 = state_35061;
(statearr_35090[(7)] = inst_34988);

(statearr_35090[(15)] = inst_35031);

return statearr_35090;
})();
var statearr_35091_35146 = state_35061__$1;
(statearr_35091_35146[(2)] = null);

(statearr_35091_35146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (25))){
var inst_35057 = (state_35061[(2)]);
var state_35061__$1 = state_35061;
var statearr_35092_35147 = state_35061__$1;
(statearr_35092_35147[(2)] = inst_35057);

(statearr_35092_35147[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (34))){
var inst_35055 = (state_35061[(2)]);
var state_35061__$1 = state_35061;
var statearr_35093_35148 = state_35061__$1;
(statearr_35093_35148[(2)] = inst_35055);

(statearr_35093_35148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (17))){
var state_35061__$1 = state_35061;
var statearr_35094_35149 = state_35061__$1;
(statearr_35094_35149[(2)] = false);

(statearr_35094_35149[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (3))){
var state_35061__$1 = state_35061;
var statearr_35095_35150 = state_35061__$1;
(statearr_35095_35150[(2)] = false);

(statearr_35095_35150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (12))){
var inst_35059 = (state_35061[(2)]);
var state_35061__$1 = state_35061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35061__$1,inst_35059);
} else {
if((state_val_35062 === (2))){
var inst_34963 = (state_35061[(8)]);
var inst_34968 = inst_34963.cljs$lang$protocol_mask$partition0$;
var inst_34969 = (inst_34968 & (64));
var inst_34970 = inst_34963.cljs$core$ISeq$;
var inst_34971 = (cljs.core.PROTOCOL_SENTINEL === inst_34970);
var inst_34972 = (inst_34969) || (inst_34971);
var state_35061__$1 = state_35061;
if(cljs.core.truth_(inst_34972)){
var statearr_35096_35151 = state_35061__$1;
(statearr_35096_35151[(1)] = (5));

} else {
var statearr_35097_35152 = state_35061__$1;
(statearr_35097_35152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (23))){
var inst_35020 = (state_35061[(14)]);
var inst_35026 = (inst_35020 == null);
var state_35061__$1 = state_35061;
if(cljs.core.truth_(inst_35026)){
var statearr_35098_35153 = state_35061__$1;
(statearr_35098_35153[(1)] = (26));

} else {
var statearr_35099_35154 = state_35061__$1;
(statearr_35099_35154[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (35))){
var inst_35046 = (state_35061[(2)]);
var state_35061__$1 = state_35061;
if(cljs.core.truth_(inst_35046)){
var statearr_35100_35155 = state_35061__$1;
(statearr_35100_35155[(1)] = (36));

} else {
var statearr_35101_35156 = state_35061__$1;
(statearr_35101_35156[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (19))){
var inst_34988 = (state_35061[(7)]);
var inst_35008 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34988);
var state_35061__$1 = state_35061;
var statearr_35102_35157 = state_35061__$1;
(statearr_35102_35157[(2)] = inst_35008);

(statearr_35102_35157[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (11))){
var inst_34988 = (state_35061[(7)]);
var inst_34992 = (inst_34988 == null);
var inst_34993 = cljs.core.not.call(null,inst_34992);
var state_35061__$1 = state_35061;
if(inst_34993){
var statearr_35103_35158 = state_35061__$1;
(statearr_35103_35158[(1)] = (13));

} else {
var statearr_35104_35159 = state_35061__$1;
(statearr_35104_35159[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (9))){
var inst_34963 = (state_35061[(8)]);
var state_35061__$1 = state_35061;
var statearr_35105_35160 = state_35061__$1;
(statearr_35105_35160[(2)] = inst_34963);

(statearr_35105_35160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (5))){
var state_35061__$1 = state_35061;
var statearr_35106_35161 = state_35061__$1;
(statearr_35106_35161[(2)] = true);

(statearr_35106_35161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (14))){
var state_35061__$1 = state_35061;
var statearr_35107_35162 = state_35061__$1;
(statearr_35107_35162[(2)] = false);

(statearr_35107_35162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (26))){
var inst_35021 = (state_35061[(10)]);
var inst_35028 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35021);
var state_35061__$1 = state_35061;
var statearr_35108_35163 = state_35061__$1;
(statearr_35108_35163[(2)] = inst_35028);

(statearr_35108_35163[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (16))){
var state_35061__$1 = state_35061;
var statearr_35109_35164 = state_35061__$1;
(statearr_35109_35164[(2)] = true);

(statearr_35109_35164[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (38))){
var inst_35051 = (state_35061[(2)]);
var state_35061__$1 = state_35061;
var statearr_35110_35165 = state_35061__$1;
(statearr_35110_35165[(2)] = inst_35051);

(statearr_35110_35165[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (30))){
var inst_35013 = (state_35061[(13)]);
var inst_35021 = (state_35061[(10)]);
var inst_35012 = (state_35061[(11)]);
var inst_35038 = cljs.core.empty_QMARK_.call(null,inst_35012);
var inst_35039 = inst_35013.call(null,inst_35021);
var inst_35040 = cljs.core.not.call(null,inst_35039);
var inst_35041 = (inst_35038) && (inst_35040);
var state_35061__$1 = state_35061;
var statearr_35111_35166 = state_35061__$1;
(statearr_35111_35166[(2)] = inst_35041);

(statearr_35111_35166[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (10))){
var inst_34963 = (state_35061[(8)]);
var inst_34984 = (state_35061[(2)]);
var inst_34985 = cljs.core.get.call(null,inst_34984,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34986 = cljs.core.get.call(null,inst_34984,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34987 = cljs.core.get.call(null,inst_34984,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34988 = inst_34963;
var state_35061__$1 = (function (){var statearr_35112 = state_35061;
(statearr_35112[(7)] = inst_34988);

(statearr_35112[(16)] = inst_34985);

(statearr_35112[(17)] = inst_34986);

(statearr_35112[(18)] = inst_34987);

return statearr_35112;
})();
var statearr_35113_35167 = state_35061__$1;
(statearr_35113_35167[(2)] = null);

(statearr_35113_35167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (18))){
var inst_35003 = (state_35061[(2)]);
var state_35061__$1 = state_35061;
var statearr_35114_35168 = state_35061__$1;
(statearr_35114_35168[(2)] = inst_35003);

(statearr_35114_35168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (37))){
var state_35061__$1 = state_35061;
var statearr_35115_35169 = state_35061__$1;
(statearr_35115_35169[(2)] = null);

(statearr_35115_35169[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35062 === (8))){
var inst_34963 = (state_35061[(8)]);
var inst_34981 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34963);
var state_35061__$1 = state_35061;
var statearr_35116_35170 = state_35061__$1;
(statearr_35116_35170[(2)] = inst_34981);

(statearr_35116_35170[(1)] = (10));


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
});})(c__33387__auto___35124,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33275__auto__,c__33387__auto___35124,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33276__auto__ = null;
var cljs$core$async$mix_$_state_machine__33276__auto____0 = (function (){
var statearr_35120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35120[(0)] = cljs$core$async$mix_$_state_machine__33276__auto__);

(statearr_35120[(1)] = (1));

return statearr_35120;
});
var cljs$core$async$mix_$_state_machine__33276__auto____1 = (function (state_35061){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_35061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e35121){if((e35121 instanceof Object)){
var ex__33279__auto__ = e35121;
var statearr_35122_35171 = state_35061;
(statearr_35122_35171[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35172 = state_35061;
state_35061 = G__35172;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33276__auto__ = function(state_35061){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33276__auto____1.call(this,state_35061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33276__auto____0;
cljs$core$async$mix_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33276__auto____1;
return cljs$core$async$mix_$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto___35124,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33389__auto__ = (function (){var statearr_35123 = f__33388__auto__.call(null);
(statearr_35123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto___35124);

return statearr_35123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto___35124,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__30912__auto__ = (((p == null))?null:p);
var m__30913__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30913__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__30912__auto__ = (((p == null))?null:p);
var m__30913__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,p,v,ch);
} else {
var m__30913__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args35173 = [];
var len__31357__auto___35176 = arguments.length;
var i__31358__auto___35177 = (0);
while(true){
if((i__31358__auto___35177 < len__31357__auto___35176)){
args35173.push((arguments[i__31358__auto___35177]));

var G__35178 = (i__31358__auto___35177 + (1));
i__31358__auto___35177 = G__35178;
continue;
} else {
}
break;
}

var G__35175 = args35173.length;
switch (G__35175) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35173.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30912__auto__ = (((p == null))?null:p);
var m__30913__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,p);
} else {
var m__30913__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,p);
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
var x__30912__auto__ = (((p == null))?null:p);
var m__30913__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,p,v);
} else {
var m__30913__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,p,v);
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
var args35181 = [];
var len__31357__auto___35306 = arguments.length;
var i__31358__auto___35307 = (0);
while(true){
if((i__31358__auto___35307 < len__31357__auto___35306)){
args35181.push((arguments[i__31358__auto___35307]));

var G__35308 = (i__31358__auto___35307 + (1));
i__31358__auto___35307 = G__35308;
continue;
} else {
}
break;
}

var G__35183 = args35181.length;
switch (G__35183) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35181.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30244__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30244__auto__)){
return or__30244__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30244__auto__,mults){
return (function (p1__35180_SHARP_){
if(cljs.core.truth_(p1__35180_SHARP_.call(null,topic))){
return p1__35180_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35180_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30244__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35184 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35184 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35185){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35185 = meta35185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35186,meta35185__$1){
var self__ = this;
var _35186__$1 = this;
return (new cljs.core.async.t_cljs$core$async35184(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35185__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35184.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35186){
var self__ = this;
var _35186__$1 = this;
return self__.meta35185;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35184.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35184.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35184.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35184.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35184.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35184.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35184.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35184.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35185","meta35185",1717165251,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35184";

cljs.core.async.t_cljs$core$async35184.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30855__auto__,writer__30856__auto__,opt__30857__auto__){
return cljs.core._write.call(null,writer__30856__auto__,"cljs.core.async/t_cljs$core$async35184");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35184 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35184(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35185){
return (new cljs.core.async.t_cljs$core$async35184(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35185));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35184(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33387__auto___35310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto___35310,mults,ensure_mult,p){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto___35310,mults,ensure_mult,p){
return (function (state_35258){
var state_val_35259 = (state_35258[(1)]);
if((state_val_35259 === (7))){
var inst_35254 = (state_35258[(2)]);
var state_35258__$1 = state_35258;
var statearr_35260_35311 = state_35258__$1;
(statearr_35260_35311[(2)] = inst_35254);

(statearr_35260_35311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (20))){
var state_35258__$1 = state_35258;
var statearr_35261_35312 = state_35258__$1;
(statearr_35261_35312[(2)] = null);

(statearr_35261_35312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (1))){
var state_35258__$1 = state_35258;
var statearr_35262_35313 = state_35258__$1;
(statearr_35262_35313[(2)] = null);

(statearr_35262_35313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (24))){
var inst_35237 = (state_35258[(7)]);
var inst_35246 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35237);
var state_35258__$1 = state_35258;
var statearr_35263_35314 = state_35258__$1;
(statearr_35263_35314[(2)] = inst_35246);

(statearr_35263_35314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (4))){
var inst_35189 = (state_35258[(8)]);
var inst_35189__$1 = (state_35258[(2)]);
var inst_35190 = (inst_35189__$1 == null);
var state_35258__$1 = (function (){var statearr_35264 = state_35258;
(statearr_35264[(8)] = inst_35189__$1);

return statearr_35264;
})();
if(cljs.core.truth_(inst_35190)){
var statearr_35265_35315 = state_35258__$1;
(statearr_35265_35315[(1)] = (5));

} else {
var statearr_35266_35316 = state_35258__$1;
(statearr_35266_35316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (15))){
var inst_35231 = (state_35258[(2)]);
var state_35258__$1 = state_35258;
var statearr_35267_35317 = state_35258__$1;
(statearr_35267_35317[(2)] = inst_35231);

(statearr_35267_35317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (21))){
var inst_35251 = (state_35258[(2)]);
var state_35258__$1 = (function (){var statearr_35268 = state_35258;
(statearr_35268[(9)] = inst_35251);

return statearr_35268;
})();
var statearr_35269_35318 = state_35258__$1;
(statearr_35269_35318[(2)] = null);

(statearr_35269_35318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (13))){
var inst_35213 = (state_35258[(10)]);
var inst_35215 = cljs.core.chunked_seq_QMARK_.call(null,inst_35213);
var state_35258__$1 = state_35258;
if(inst_35215){
var statearr_35270_35319 = state_35258__$1;
(statearr_35270_35319[(1)] = (16));

} else {
var statearr_35271_35320 = state_35258__$1;
(statearr_35271_35320[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (22))){
var inst_35243 = (state_35258[(2)]);
var state_35258__$1 = state_35258;
if(cljs.core.truth_(inst_35243)){
var statearr_35272_35321 = state_35258__$1;
(statearr_35272_35321[(1)] = (23));

} else {
var statearr_35273_35322 = state_35258__$1;
(statearr_35273_35322[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (6))){
var inst_35239 = (state_35258[(11)]);
var inst_35189 = (state_35258[(8)]);
var inst_35237 = (state_35258[(7)]);
var inst_35237__$1 = topic_fn.call(null,inst_35189);
var inst_35238 = cljs.core.deref.call(null,mults);
var inst_35239__$1 = cljs.core.get.call(null,inst_35238,inst_35237__$1);
var state_35258__$1 = (function (){var statearr_35274 = state_35258;
(statearr_35274[(11)] = inst_35239__$1);

(statearr_35274[(7)] = inst_35237__$1);

return statearr_35274;
})();
if(cljs.core.truth_(inst_35239__$1)){
var statearr_35275_35323 = state_35258__$1;
(statearr_35275_35323[(1)] = (19));

} else {
var statearr_35276_35324 = state_35258__$1;
(statearr_35276_35324[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (25))){
var inst_35248 = (state_35258[(2)]);
var state_35258__$1 = state_35258;
var statearr_35277_35325 = state_35258__$1;
(statearr_35277_35325[(2)] = inst_35248);

(statearr_35277_35325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (17))){
var inst_35213 = (state_35258[(10)]);
var inst_35222 = cljs.core.first.call(null,inst_35213);
var inst_35223 = cljs.core.async.muxch_STAR_.call(null,inst_35222);
var inst_35224 = cljs.core.async.close_BANG_.call(null,inst_35223);
var inst_35225 = cljs.core.next.call(null,inst_35213);
var inst_35199 = inst_35225;
var inst_35200 = null;
var inst_35201 = (0);
var inst_35202 = (0);
var state_35258__$1 = (function (){var statearr_35278 = state_35258;
(statearr_35278[(12)] = inst_35202);

(statearr_35278[(13)] = inst_35224);

(statearr_35278[(14)] = inst_35201);

(statearr_35278[(15)] = inst_35199);

(statearr_35278[(16)] = inst_35200);

return statearr_35278;
})();
var statearr_35279_35326 = state_35258__$1;
(statearr_35279_35326[(2)] = null);

(statearr_35279_35326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (3))){
var inst_35256 = (state_35258[(2)]);
var state_35258__$1 = state_35258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35258__$1,inst_35256);
} else {
if((state_val_35259 === (12))){
var inst_35233 = (state_35258[(2)]);
var state_35258__$1 = state_35258;
var statearr_35280_35327 = state_35258__$1;
(statearr_35280_35327[(2)] = inst_35233);

(statearr_35280_35327[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (2))){
var state_35258__$1 = state_35258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35258__$1,(4),ch);
} else {
if((state_val_35259 === (23))){
var state_35258__$1 = state_35258;
var statearr_35281_35328 = state_35258__$1;
(statearr_35281_35328[(2)] = null);

(statearr_35281_35328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (19))){
var inst_35239 = (state_35258[(11)]);
var inst_35189 = (state_35258[(8)]);
var inst_35241 = cljs.core.async.muxch_STAR_.call(null,inst_35239);
var state_35258__$1 = state_35258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35258__$1,(22),inst_35241,inst_35189);
} else {
if((state_val_35259 === (11))){
var inst_35213 = (state_35258[(10)]);
var inst_35199 = (state_35258[(15)]);
var inst_35213__$1 = cljs.core.seq.call(null,inst_35199);
var state_35258__$1 = (function (){var statearr_35282 = state_35258;
(statearr_35282[(10)] = inst_35213__$1);

return statearr_35282;
})();
if(inst_35213__$1){
var statearr_35283_35329 = state_35258__$1;
(statearr_35283_35329[(1)] = (13));

} else {
var statearr_35284_35330 = state_35258__$1;
(statearr_35284_35330[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (9))){
var inst_35235 = (state_35258[(2)]);
var state_35258__$1 = state_35258;
var statearr_35285_35331 = state_35258__$1;
(statearr_35285_35331[(2)] = inst_35235);

(statearr_35285_35331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (5))){
var inst_35196 = cljs.core.deref.call(null,mults);
var inst_35197 = cljs.core.vals.call(null,inst_35196);
var inst_35198 = cljs.core.seq.call(null,inst_35197);
var inst_35199 = inst_35198;
var inst_35200 = null;
var inst_35201 = (0);
var inst_35202 = (0);
var state_35258__$1 = (function (){var statearr_35286 = state_35258;
(statearr_35286[(12)] = inst_35202);

(statearr_35286[(14)] = inst_35201);

(statearr_35286[(15)] = inst_35199);

(statearr_35286[(16)] = inst_35200);

return statearr_35286;
})();
var statearr_35287_35332 = state_35258__$1;
(statearr_35287_35332[(2)] = null);

(statearr_35287_35332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (14))){
var state_35258__$1 = state_35258;
var statearr_35291_35333 = state_35258__$1;
(statearr_35291_35333[(2)] = null);

(statearr_35291_35333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (16))){
var inst_35213 = (state_35258[(10)]);
var inst_35217 = cljs.core.chunk_first.call(null,inst_35213);
var inst_35218 = cljs.core.chunk_rest.call(null,inst_35213);
var inst_35219 = cljs.core.count.call(null,inst_35217);
var inst_35199 = inst_35218;
var inst_35200 = inst_35217;
var inst_35201 = inst_35219;
var inst_35202 = (0);
var state_35258__$1 = (function (){var statearr_35292 = state_35258;
(statearr_35292[(12)] = inst_35202);

(statearr_35292[(14)] = inst_35201);

(statearr_35292[(15)] = inst_35199);

(statearr_35292[(16)] = inst_35200);

return statearr_35292;
})();
var statearr_35293_35334 = state_35258__$1;
(statearr_35293_35334[(2)] = null);

(statearr_35293_35334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (10))){
var inst_35202 = (state_35258[(12)]);
var inst_35201 = (state_35258[(14)]);
var inst_35199 = (state_35258[(15)]);
var inst_35200 = (state_35258[(16)]);
var inst_35207 = cljs.core._nth.call(null,inst_35200,inst_35202);
var inst_35208 = cljs.core.async.muxch_STAR_.call(null,inst_35207);
var inst_35209 = cljs.core.async.close_BANG_.call(null,inst_35208);
var inst_35210 = (inst_35202 + (1));
var tmp35288 = inst_35201;
var tmp35289 = inst_35199;
var tmp35290 = inst_35200;
var inst_35199__$1 = tmp35289;
var inst_35200__$1 = tmp35290;
var inst_35201__$1 = tmp35288;
var inst_35202__$1 = inst_35210;
var state_35258__$1 = (function (){var statearr_35294 = state_35258;
(statearr_35294[(12)] = inst_35202__$1);

(statearr_35294[(14)] = inst_35201__$1);

(statearr_35294[(15)] = inst_35199__$1);

(statearr_35294[(17)] = inst_35209);

(statearr_35294[(16)] = inst_35200__$1);

return statearr_35294;
})();
var statearr_35295_35335 = state_35258__$1;
(statearr_35295_35335[(2)] = null);

(statearr_35295_35335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (18))){
var inst_35228 = (state_35258[(2)]);
var state_35258__$1 = state_35258;
var statearr_35296_35336 = state_35258__$1;
(statearr_35296_35336[(2)] = inst_35228);

(statearr_35296_35336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (8))){
var inst_35202 = (state_35258[(12)]);
var inst_35201 = (state_35258[(14)]);
var inst_35204 = (inst_35202 < inst_35201);
var inst_35205 = inst_35204;
var state_35258__$1 = state_35258;
if(cljs.core.truth_(inst_35205)){
var statearr_35297_35337 = state_35258__$1;
(statearr_35297_35337[(1)] = (10));

} else {
var statearr_35298_35338 = state_35258__$1;
(statearr_35298_35338[(1)] = (11));

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
});})(c__33387__auto___35310,mults,ensure_mult,p))
;
return ((function (switch__33275__auto__,c__33387__auto___35310,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_35302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35302[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_35302[(1)] = (1));

return statearr_35302;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_35258){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_35258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e35303){if((e35303 instanceof Object)){
var ex__33279__auto__ = e35303;
var statearr_35304_35339 = state_35258;
(statearr_35304_35339[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35340 = state_35258;
state_35258 = G__35340;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_35258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_35258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto___35310,mults,ensure_mult,p))
})();
var state__33389__auto__ = (function (){var statearr_35305 = f__33388__auto__.call(null);
(statearr_35305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto___35310);

return statearr_35305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto___35310,mults,ensure_mult,p))
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
var args35341 = [];
var len__31357__auto___35344 = arguments.length;
var i__31358__auto___35345 = (0);
while(true){
if((i__31358__auto___35345 < len__31357__auto___35344)){
args35341.push((arguments[i__31358__auto___35345]));

var G__35346 = (i__31358__auto___35345 + (1));
i__31358__auto___35345 = G__35346;
continue;
} else {
}
break;
}

var G__35343 = args35341.length;
switch (G__35343) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35341.length)].join('')));

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
var args35348 = [];
var len__31357__auto___35351 = arguments.length;
var i__31358__auto___35352 = (0);
while(true){
if((i__31358__auto___35352 < len__31357__auto___35351)){
args35348.push((arguments[i__31358__auto___35352]));

var G__35353 = (i__31358__auto___35352 + (1));
i__31358__auto___35352 = G__35353;
continue;
} else {
}
break;
}

var G__35350 = args35348.length;
switch (G__35350) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35348.length)].join('')));

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
var args35355 = [];
var len__31357__auto___35426 = arguments.length;
var i__31358__auto___35427 = (0);
while(true){
if((i__31358__auto___35427 < len__31357__auto___35426)){
args35355.push((arguments[i__31358__auto___35427]));

var G__35428 = (i__31358__auto___35427 + (1));
i__31358__auto___35427 = G__35428;
continue;
} else {
}
break;
}

var G__35357 = args35355.length;
switch (G__35357) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35355.length)].join('')));

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
var c__33387__auto___35430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto___35430,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto___35430,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35396){
var state_val_35397 = (state_35396[(1)]);
if((state_val_35397 === (7))){
var state_35396__$1 = state_35396;
var statearr_35398_35431 = state_35396__$1;
(statearr_35398_35431[(2)] = null);

(statearr_35398_35431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (1))){
var state_35396__$1 = state_35396;
var statearr_35399_35432 = state_35396__$1;
(statearr_35399_35432[(2)] = null);

(statearr_35399_35432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (4))){
var inst_35360 = (state_35396[(7)]);
var inst_35362 = (inst_35360 < cnt);
var state_35396__$1 = state_35396;
if(cljs.core.truth_(inst_35362)){
var statearr_35400_35433 = state_35396__$1;
(statearr_35400_35433[(1)] = (6));

} else {
var statearr_35401_35434 = state_35396__$1;
(statearr_35401_35434[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (15))){
var inst_35392 = (state_35396[(2)]);
var state_35396__$1 = state_35396;
var statearr_35402_35435 = state_35396__$1;
(statearr_35402_35435[(2)] = inst_35392);

(statearr_35402_35435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (13))){
var inst_35385 = cljs.core.async.close_BANG_.call(null,out);
var state_35396__$1 = state_35396;
var statearr_35403_35436 = state_35396__$1;
(statearr_35403_35436[(2)] = inst_35385);

(statearr_35403_35436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (6))){
var state_35396__$1 = state_35396;
var statearr_35404_35437 = state_35396__$1;
(statearr_35404_35437[(2)] = null);

(statearr_35404_35437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (3))){
var inst_35394 = (state_35396[(2)]);
var state_35396__$1 = state_35396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35396__$1,inst_35394);
} else {
if((state_val_35397 === (12))){
var inst_35382 = (state_35396[(8)]);
var inst_35382__$1 = (state_35396[(2)]);
var inst_35383 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35382__$1);
var state_35396__$1 = (function (){var statearr_35405 = state_35396;
(statearr_35405[(8)] = inst_35382__$1);

return statearr_35405;
})();
if(cljs.core.truth_(inst_35383)){
var statearr_35406_35438 = state_35396__$1;
(statearr_35406_35438[(1)] = (13));

} else {
var statearr_35407_35439 = state_35396__$1;
(statearr_35407_35439[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (2))){
var inst_35359 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35360 = (0);
var state_35396__$1 = (function (){var statearr_35408 = state_35396;
(statearr_35408[(7)] = inst_35360);

(statearr_35408[(9)] = inst_35359);

return statearr_35408;
})();
var statearr_35409_35440 = state_35396__$1;
(statearr_35409_35440[(2)] = null);

(statearr_35409_35440[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (11))){
var inst_35360 = (state_35396[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35396,(10),Object,null,(9));
var inst_35369 = chs__$1.call(null,inst_35360);
var inst_35370 = done.call(null,inst_35360);
var inst_35371 = cljs.core.async.take_BANG_.call(null,inst_35369,inst_35370);
var state_35396__$1 = state_35396;
var statearr_35410_35441 = state_35396__$1;
(statearr_35410_35441[(2)] = inst_35371);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35396__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (9))){
var inst_35360 = (state_35396[(7)]);
var inst_35373 = (state_35396[(2)]);
var inst_35374 = (inst_35360 + (1));
var inst_35360__$1 = inst_35374;
var state_35396__$1 = (function (){var statearr_35411 = state_35396;
(statearr_35411[(7)] = inst_35360__$1);

(statearr_35411[(10)] = inst_35373);

return statearr_35411;
})();
var statearr_35412_35442 = state_35396__$1;
(statearr_35412_35442[(2)] = null);

(statearr_35412_35442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (5))){
var inst_35380 = (state_35396[(2)]);
var state_35396__$1 = (function (){var statearr_35413 = state_35396;
(statearr_35413[(11)] = inst_35380);

return statearr_35413;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35396__$1,(12),dchan);
} else {
if((state_val_35397 === (14))){
var inst_35382 = (state_35396[(8)]);
var inst_35387 = cljs.core.apply.call(null,f,inst_35382);
var state_35396__$1 = state_35396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35396__$1,(16),out,inst_35387);
} else {
if((state_val_35397 === (16))){
var inst_35389 = (state_35396[(2)]);
var state_35396__$1 = (function (){var statearr_35414 = state_35396;
(statearr_35414[(12)] = inst_35389);

return statearr_35414;
})();
var statearr_35415_35443 = state_35396__$1;
(statearr_35415_35443[(2)] = null);

(statearr_35415_35443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (10))){
var inst_35364 = (state_35396[(2)]);
var inst_35365 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35396__$1 = (function (){var statearr_35416 = state_35396;
(statearr_35416[(13)] = inst_35364);

return statearr_35416;
})();
var statearr_35417_35444 = state_35396__$1;
(statearr_35417_35444[(2)] = inst_35365);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35396__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (8))){
var inst_35378 = (state_35396[(2)]);
var state_35396__$1 = state_35396;
var statearr_35418_35445 = state_35396__$1;
(statearr_35418_35445[(2)] = inst_35378);

(statearr_35418_35445[(1)] = (5));


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
});})(c__33387__auto___35430,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33275__auto__,c__33387__auto___35430,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_35422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35422[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_35422[(1)] = (1));

return statearr_35422;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_35396){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_35396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e35423){if((e35423 instanceof Object)){
var ex__33279__auto__ = e35423;
var statearr_35424_35446 = state_35396;
(statearr_35424_35446[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35447 = state_35396;
state_35396 = G__35447;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_35396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_35396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto___35430,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33389__auto__ = (function (){var statearr_35425 = f__33388__auto__.call(null);
(statearr_35425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto___35430);

return statearr_35425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto___35430,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args35449 = [];
var len__31357__auto___35507 = arguments.length;
var i__31358__auto___35508 = (0);
while(true){
if((i__31358__auto___35508 < len__31357__auto___35507)){
args35449.push((arguments[i__31358__auto___35508]));

var G__35509 = (i__31358__auto___35508 + (1));
i__31358__auto___35508 = G__35509;
continue;
} else {
}
break;
}

var G__35451 = args35449.length;
switch (G__35451) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35449.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33387__auto___35511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto___35511,out){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto___35511,out){
return (function (state_35483){
var state_val_35484 = (state_35483[(1)]);
if((state_val_35484 === (7))){
var inst_35463 = (state_35483[(7)]);
var inst_35462 = (state_35483[(8)]);
var inst_35462__$1 = (state_35483[(2)]);
var inst_35463__$1 = cljs.core.nth.call(null,inst_35462__$1,(0),null);
var inst_35464 = cljs.core.nth.call(null,inst_35462__$1,(1),null);
var inst_35465 = (inst_35463__$1 == null);
var state_35483__$1 = (function (){var statearr_35485 = state_35483;
(statearr_35485[(9)] = inst_35464);

(statearr_35485[(7)] = inst_35463__$1);

(statearr_35485[(8)] = inst_35462__$1);

return statearr_35485;
})();
if(cljs.core.truth_(inst_35465)){
var statearr_35486_35512 = state_35483__$1;
(statearr_35486_35512[(1)] = (8));

} else {
var statearr_35487_35513 = state_35483__$1;
(statearr_35487_35513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35484 === (1))){
var inst_35452 = cljs.core.vec.call(null,chs);
var inst_35453 = inst_35452;
var state_35483__$1 = (function (){var statearr_35488 = state_35483;
(statearr_35488[(10)] = inst_35453);

return statearr_35488;
})();
var statearr_35489_35514 = state_35483__$1;
(statearr_35489_35514[(2)] = null);

(statearr_35489_35514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35484 === (4))){
var inst_35453 = (state_35483[(10)]);
var state_35483__$1 = state_35483;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35483__$1,(7),inst_35453);
} else {
if((state_val_35484 === (6))){
var inst_35479 = (state_35483[(2)]);
var state_35483__$1 = state_35483;
var statearr_35490_35515 = state_35483__$1;
(statearr_35490_35515[(2)] = inst_35479);

(statearr_35490_35515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35484 === (3))){
var inst_35481 = (state_35483[(2)]);
var state_35483__$1 = state_35483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35483__$1,inst_35481);
} else {
if((state_val_35484 === (2))){
var inst_35453 = (state_35483[(10)]);
var inst_35455 = cljs.core.count.call(null,inst_35453);
var inst_35456 = (inst_35455 > (0));
var state_35483__$1 = state_35483;
if(cljs.core.truth_(inst_35456)){
var statearr_35492_35516 = state_35483__$1;
(statearr_35492_35516[(1)] = (4));

} else {
var statearr_35493_35517 = state_35483__$1;
(statearr_35493_35517[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35484 === (11))){
var inst_35453 = (state_35483[(10)]);
var inst_35472 = (state_35483[(2)]);
var tmp35491 = inst_35453;
var inst_35453__$1 = tmp35491;
var state_35483__$1 = (function (){var statearr_35494 = state_35483;
(statearr_35494[(10)] = inst_35453__$1);

(statearr_35494[(11)] = inst_35472);

return statearr_35494;
})();
var statearr_35495_35518 = state_35483__$1;
(statearr_35495_35518[(2)] = null);

(statearr_35495_35518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35484 === (9))){
var inst_35463 = (state_35483[(7)]);
var state_35483__$1 = state_35483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35483__$1,(11),out,inst_35463);
} else {
if((state_val_35484 === (5))){
var inst_35477 = cljs.core.async.close_BANG_.call(null,out);
var state_35483__$1 = state_35483;
var statearr_35496_35519 = state_35483__$1;
(statearr_35496_35519[(2)] = inst_35477);

(statearr_35496_35519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35484 === (10))){
var inst_35475 = (state_35483[(2)]);
var state_35483__$1 = state_35483;
var statearr_35497_35520 = state_35483__$1;
(statearr_35497_35520[(2)] = inst_35475);

(statearr_35497_35520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35484 === (8))){
var inst_35464 = (state_35483[(9)]);
var inst_35453 = (state_35483[(10)]);
var inst_35463 = (state_35483[(7)]);
var inst_35462 = (state_35483[(8)]);
var inst_35467 = (function (){var cs = inst_35453;
var vec__35458 = inst_35462;
var v = inst_35463;
var c = inst_35464;
return ((function (cs,vec__35458,v,c,inst_35464,inst_35453,inst_35463,inst_35462,state_val_35484,c__33387__auto___35511,out){
return (function (p1__35448_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35448_SHARP_);
});
;})(cs,vec__35458,v,c,inst_35464,inst_35453,inst_35463,inst_35462,state_val_35484,c__33387__auto___35511,out))
})();
var inst_35468 = cljs.core.filterv.call(null,inst_35467,inst_35453);
var inst_35453__$1 = inst_35468;
var state_35483__$1 = (function (){var statearr_35498 = state_35483;
(statearr_35498[(10)] = inst_35453__$1);

return statearr_35498;
})();
var statearr_35499_35521 = state_35483__$1;
(statearr_35499_35521[(2)] = null);

(statearr_35499_35521[(1)] = (2));


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
});})(c__33387__auto___35511,out))
;
return ((function (switch__33275__auto__,c__33387__auto___35511,out){
return (function() {
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_35503 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35503[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_35503[(1)] = (1));

return statearr_35503;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_35483){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_35483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e35504){if((e35504 instanceof Object)){
var ex__33279__auto__ = e35504;
var statearr_35505_35522 = state_35483;
(statearr_35505_35522[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35523 = state_35483;
state_35483 = G__35523;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_35483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_35483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto___35511,out))
})();
var state__33389__auto__ = (function (){var statearr_35506 = f__33388__auto__.call(null);
(statearr_35506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto___35511);

return statearr_35506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto___35511,out))
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
var args35524 = [];
var len__31357__auto___35573 = arguments.length;
var i__31358__auto___35574 = (0);
while(true){
if((i__31358__auto___35574 < len__31357__auto___35573)){
args35524.push((arguments[i__31358__auto___35574]));

var G__35575 = (i__31358__auto___35574 + (1));
i__31358__auto___35574 = G__35575;
continue;
} else {
}
break;
}

var G__35526 = args35524.length;
switch (G__35526) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35524.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33387__auto___35577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto___35577,out){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto___35577,out){
return (function (state_35550){
var state_val_35551 = (state_35550[(1)]);
if((state_val_35551 === (7))){
var inst_35532 = (state_35550[(7)]);
var inst_35532__$1 = (state_35550[(2)]);
var inst_35533 = (inst_35532__$1 == null);
var inst_35534 = cljs.core.not.call(null,inst_35533);
var state_35550__$1 = (function (){var statearr_35552 = state_35550;
(statearr_35552[(7)] = inst_35532__$1);

return statearr_35552;
})();
if(inst_35534){
var statearr_35553_35578 = state_35550__$1;
(statearr_35553_35578[(1)] = (8));

} else {
var statearr_35554_35579 = state_35550__$1;
(statearr_35554_35579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (1))){
var inst_35527 = (0);
var state_35550__$1 = (function (){var statearr_35555 = state_35550;
(statearr_35555[(8)] = inst_35527);

return statearr_35555;
})();
var statearr_35556_35580 = state_35550__$1;
(statearr_35556_35580[(2)] = null);

(statearr_35556_35580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (4))){
var state_35550__$1 = state_35550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35550__$1,(7),ch);
} else {
if((state_val_35551 === (6))){
var inst_35545 = (state_35550[(2)]);
var state_35550__$1 = state_35550;
var statearr_35557_35581 = state_35550__$1;
(statearr_35557_35581[(2)] = inst_35545);

(statearr_35557_35581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (3))){
var inst_35547 = (state_35550[(2)]);
var inst_35548 = cljs.core.async.close_BANG_.call(null,out);
var state_35550__$1 = (function (){var statearr_35558 = state_35550;
(statearr_35558[(9)] = inst_35547);

return statearr_35558;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35550__$1,inst_35548);
} else {
if((state_val_35551 === (2))){
var inst_35527 = (state_35550[(8)]);
var inst_35529 = (inst_35527 < n);
var state_35550__$1 = state_35550;
if(cljs.core.truth_(inst_35529)){
var statearr_35559_35582 = state_35550__$1;
(statearr_35559_35582[(1)] = (4));

} else {
var statearr_35560_35583 = state_35550__$1;
(statearr_35560_35583[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (11))){
var inst_35527 = (state_35550[(8)]);
var inst_35537 = (state_35550[(2)]);
var inst_35538 = (inst_35527 + (1));
var inst_35527__$1 = inst_35538;
var state_35550__$1 = (function (){var statearr_35561 = state_35550;
(statearr_35561[(8)] = inst_35527__$1);

(statearr_35561[(10)] = inst_35537);

return statearr_35561;
})();
var statearr_35562_35584 = state_35550__$1;
(statearr_35562_35584[(2)] = null);

(statearr_35562_35584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (9))){
var state_35550__$1 = state_35550;
var statearr_35563_35585 = state_35550__$1;
(statearr_35563_35585[(2)] = null);

(statearr_35563_35585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (5))){
var state_35550__$1 = state_35550;
var statearr_35564_35586 = state_35550__$1;
(statearr_35564_35586[(2)] = null);

(statearr_35564_35586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (10))){
var inst_35542 = (state_35550[(2)]);
var state_35550__$1 = state_35550;
var statearr_35565_35587 = state_35550__$1;
(statearr_35565_35587[(2)] = inst_35542);

(statearr_35565_35587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (8))){
var inst_35532 = (state_35550[(7)]);
var state_35550__$1 = state_35550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35550__$1,(11),out,inst_35532);
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
});})(c__33387__auto___35577,out))
;
return ((function (switch__33275__auto__,c__33387__auto___35577,out){
return (function() {
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_35569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35569[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_35569[(1)] = (1));

return statearr_35569;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_35550){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_35550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e35570){if((e35570 instanceof Object)){
var ex__33279__auto__ = e35570;
var statearr_35571_35588 = state_35550;
(statearr_35571_35588[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35589 = state_35550;
state_35550 = G__35589;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_35550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_35550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto___35577,out))
})();
var state__33389__auto__ = (function (){var statearr_35572 = f__33388__auto__.call(null);
(statearr_35572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto___35577);

return statearr_35572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto___35577,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35597 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35597 = (function (f,ch,meta35598){
this.f = f;
this.ch = ch;
this.meta35598 = meta35598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35599,meta35598__$1){
var self__ = this;
var _35599__$1 = this;
return (new cljs.core.async.t_cljs$core$async35597(self__.f,self__.ch,meta35598__$1));
});

cljs.core.async.t_cljs$core$async35597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35599){
var self__ = this;
var _35599__$1 = this;
return self__.meta35598;
});

cljs.core.async.t_cljs$core$async35597.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35597.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35597.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35597.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35597.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35600 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35600 = (function (f,ch,meta35598,_,fn1,meta35601){
this.f = f;
this.ch = ch;
this.meta35598 = meta35598;
this._ = _;
this.fn1 = fn1;
this.meta35601 = meta35601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35602,meta35601__$1){
var self__ = this;
var _35602__$1 = this;
return (new cljs.core.async.t_cljs$core$async35600(self__.f,self__.ch,self__.meta35598,self__._,self__.fn1,meta35601__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35602){
var self__ = this;
var _35602__$1 = this;
return self__.meta35601;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35600.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35600.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35600.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35600.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35590_SHARP_){
return f1.call(null,(((p1__35590_SHARP_ == null))?null:self__.f.call(null,p1__35590_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35600.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35598","meta35598",1312814537,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35597","cljs.core.async/t_cljs$core$async35597",-1003780478,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35601","meta35601",-81039739,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35600";

cljs.core.async.t_cljs$core$async35600.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30855__auto__,writer__30856__auto__,opt__30857__auto__){
return cljs.core._write.call(null,writer__30856__auto__,"cljs.core.async/t_cljs$core$async35600");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35600 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35600(f__$1,ch__$1,meta35598__$1,___$2,fn1__$1,meta35601){
return (new cljs.core.async.t_cljs$core$async35600(f__$1,ch__$1,meta35598__$1,___$2,fn1__$1,meta35601));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35600(self__.f,self__.ch,self__.meta35598,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30232__auto__ = ret;
if(cljs.core.truth_(and__30232__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30232__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35597.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35597.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35598","meta35598",1312814537,null)], null);
});

cljs.core.async.t_cljs$core$async35597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35597";

cljs.core.async.t_cljs$core$async35597.cljs$lang$ctorPrWriter = (function (this__30855__auto__,writer__30856__auto__,opt__30857__auto__){
return cljs.core._write.call(null,writer__30856__auto__,"cljs.core.async/t_cljs$core$async35597");
});

cljs.core.async.__GT_t_cljs$core$async35597 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35597(f__$1,ch__$1,meta35598){
return (new cljs.core.async.t_cljs$core$async35597(f__$1,ch__$1,meta35598));
});

}

return (new cljs.core.async.t_cljs$core$async35597(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35606 = (function (f,ch,meta35607){
this.f = f;
this.ch = ch;
this.meta35607 = meta35607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35608,meta35607__$1){
var self__ = this;
var _35608__$1 = this;
return (new cljs.core.async.t_cljs$core$async35606(self__.f,self__.ch,meta35607__$1));
});

cljs.core.async.t_cljs$core$async35606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35608){
var self__ = this;
var _35608__$1 = this;
return self__.meta35607;
});

cljs.core.async.t_cljs$core$async35606.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35606.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35606.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35606.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35606.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35606.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35607","meta35607",1999953121,null)], null);
});

cljs.core.async.t_cljs$core$async35606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35606";

cljs.core.async.t_cljs$core$async35606.cljs$lang$ctorPrWriter = (function (this__30855__auto__,writer__30856__auto__,opt__30857__auto__){
return cljs.core._write.call(null,writer__30856__auto__,"cljs.core.async/t_cljs$core$async35606");
});

cljs.core.async.__GT_t_cljs$core$async35606 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35606(f__$1,ch__$1,meta35607){
return (new cljs.core.async.t_cljs$core$async35606(f__$1,ch__$1,meta35607));
});

}

return (new cljs.core.async.t_cljs$core$async35606(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35612 = (function (p,ch,meta35613){
this.p = p;
this.ch = ch;
this.meta35613 = meta35613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35614,meta35613__$1){
var self__ = this;
var _35614__$1 = this;
return (new cljs.core.async.t_cljs$core$async35612(self__.p,self__.ch,meta35613__$1));
});

cljs.core.async.t_cljs$core$async35612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35614){
var self__ = this;
var _35614__$1 = this;
return self__.meta35613;
});

cljs.core.async.t_cljs$core$async35612.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35612.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35612.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35612.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35612.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35612.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35612.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35613","meta35613",-536138059,null)], null);
});

cljs.core.async.t_cljs$core$async35612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35612";

cljs.core.async.t_cljs$core$async35612.cljs$lang$ctorPrWriter = (function (this__30855__auto__,writer__30856__auto__,opt__30857__auto__){
return cljs.core._write.call(null,writer__30856__auto__,"cljs.core.async/t_cljs$core$async35612");
});

cljs.core.async.__GT_t_cljs$core$async35612 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35612(p__$1,ch__$1,meta35613){
return (new cljs.core.async.t_cljs$core$async35612(p__$1,ch__$1,meta35613));
});

}

return (new cljs.core.async.t_cljs$core$async35612(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args35615 = [];
var len__31357__auto___35659 = arguments.length;
var i__31358__auto___35660 = (0);
while(true){
if((i__31358__auto___35660 < len__31357__auto___35659)){
args35615.push((arguments[i__31358__auto___35660]));

var G__35661 = (i__31358__auto___35660 + (1));
i__31358__auto___35660 = G__35661;
continue;
} else {
}
break;
}

var G__35617 = args35615.length;
switch (G__35617) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35615.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33387__auto___35663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto___35663,out){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto___35663,out){
return (function (state_35638){
var state_val_35639 = (state_35638[(1)]);
if((state_val_35639 === (7))){
var inst_35634 = (state_35638[(2)]);
var state_35638__$1 = state_35638;
var statearr_35640_35664 = state_35638__$1;
(statearr_35640_35664[(2)] = inst_35634);

(statearr_35640_35664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (1))){
var state_35638__$1 = state_35638;
var statearr_35641_35665 = state_35638__$1;
(statearr_35641_35665[(2)] = null);

(statearr_35641_35665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (4))){
var inst_35620 = (state_35638[(7)]);
var inst_35620__$1 = (state_35638[(2)]);
var inst_35621 = (inst_35620__$1 == null);
var state_35638__$1 = (function (){var statearr_35642 = state_35638;
(statearr_35642[(7)] = inst_35620__$1);

return statearr_35642;
})();
if(cljs.core.truth_(inst_35621)){
var statearr_35643_35666 = state_35638__$1;
(statearr_35643_35666[(1)] = (5));

} else {
var statearr_35644_35667 = state_35638__$1;
(statearr_35644_35667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (6))){
var inst_35620 = (state_35638[(7)]);
var inst_35625 = p.call(null,inst_35620);
var state_35638__$1 = state_35638;
if(cljs.core.truth_(inst_35625)){
var statearr_35645_35668 = state_35638__$1;
(statearr_35645_35668[(1)] = (8));

} else {
var statearr_35646_35669 = state_35638__$1;
(statearr_35646_35669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (3))){
var inst_35636 = (state_35638[(2)]);
var state_35638__$1 = state_35638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35638__$1,inst_35636);
} else {
if((state_val_35639 === (2))){
var state_35638__$1 = state_35638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35638__$1,(4),ch);
} else {
if((state_val_35639 === (11))){
var inst_35628 = (state_35638[(2)]);
var state_35638__$1 = state_35638;
var statearr_35647_35670 = state_35638__$1;
(statearr_35647_35670[(2)] = inst_35628);

(statearr_35647_35670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (9))){
var state_35638__$1 = state_35638;
var statearr_35648_35671 = state_35638__$1;
(statearr_35648_35671[(2)] = null);

(statearr_35648_35671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (5))){
var inst_35623 = cljs.core.async.close_BANG_.call(null,out);
var state_35638__$1 = state_35638;
var statearr_35649_35672 = state_35638__$1;
(statearr_35649_35672[(2)] = inst_35623);

(statearr_35649_35672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (10))){
var inst_35631 = (state_35638[(2)]);
var state_35638__$1 = (function (){var statearr_35650 = state_35638;
(statearr_35650[(8)] = inst_35631);

return statearr_35650;
})();
var statearr_35651_35673 = state_35638__$1;
(statearr_35651_35673[(2)] = null);

(statearr_35651_35673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (8))){
var inst_35620 = (state_35638[(7)]);
var state_35638__$1 = state_35638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35638__$1,(11),out,inst_35620);
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
});})(c__33387__auto___35663,out))
;
return ((function (switch__33275__auto__,c__33387__auto___35663,out){
return (function() {
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_35655 = [null,null,null,null,null,null,null,null,null];
(statearr_35655[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_35655[(1)] = (1));

return statearr_35655;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_35638){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_35638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e35656){if((e35656 instanceof Object)){
var ex__33279__auto__ = e35656;
var statearr_35657_35674 = state_35638;
(statearr_35657_35674[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35675 = state_35638;
state_35638 = G__35675;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_35638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_35638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto___35663,out))
})();
var state__33389__auto__ = (function (){var statearr_35658 = f__33388__auto__.call(null);
(statearr_35658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto___35663);

return statearr_35658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto___35663,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args35676 = [];
var len__31357__auto___35679 = arguments.length;
var i__31358__auto___35680 = (0);
while(true){
if((i__31358__auto___35680 < len__31357__auto___35679)){
args35676.push((arguments[i__31358__auto___35680]));

var G__35681 = (i__31358__auto___35680 + (1));
i__31358__auto___35680 = G__35681;
continue;
} else {
}
break;
}

var G__35678 = args35676.length;
switch (G__35678) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35676.length)].join('')));

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
var c__33387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto__){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto__){
return (function (state_35848){
var state_val_35849 = (state_35848[(1)]);
if((state_val_35849 === (7))){
var inst_35844 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
var statearr_35850_35891 = state_35848__$1;
(statearr_35850_35891[(2)] = inst_35844);

(statearr_35850_35891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (20))){
var inst_35814 = (state_35848[(7)]);
var inst_35825 = (state_35848[(2)]);
var inst_35826 = cljs.core.next.call(null,inst_35814);
var inst_35800 = inst_35826;
var inst_35801 = null;
var inst_35802 = (0);
var inst_35803 = (0);
var state_35848__$1 = (function (){var statearr_35851 = state_35848;
(statearr_35851[(8)] = inst_35802);

(statearr_35851[(9)] = inst_35803);

(statearr_35851[(10)] = inst_35801);

(statearr_35851[(11)] = inst_35825);

(statearr_35851[(12)] = inst_35800);

return statearr_35851;
})();
var statearr_35852_35892 = state_35848__$1;
(statearr_35852_35892[(2)] = null);

(statearr_35852_35892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (1))){
var state_35848__$1 = state_35848;
var statearr_35853_35893 = state_35848__$1;
(statearr_35853_35893[(2)] = null);

(statearr_35853_35893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (4))){
var inst_35789 = (state_35848[(13)]);
var inst_35789__$1 = (state_35848[(2)]);
var inst_35790 = (inst_35789__$1 == null);
var state_35848__$1 = (function (){var statearr_35854 = state_35848;
(statearr_35854[(13)] = inst_35789__$1);

return statearr_35854;
})();
if(cljs.core.truth_(inst_35790)){
var statearr_35855_35894 = state_35848__$1;
(statearr_35855_35894[(1)] = (5));

} else {
var statearr_35856_35895 = state_35848__$1;
(statearr_35856_35895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (15))){
var state_35848__$1 = state_35848;
var statearr_35860_35896 = state_35848__$1;
(statearr_35860_35896[(2)] = null);

(statearr_35860_35896[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (21))){
var state_35848__$1 = state_35848;
var statearr_35861_35897 = state_35848__$1;
(statearr_35861_35897[(2)] = null);

(statearr_35861_35897[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (13))){
var inst_35802 = (state_35848[(8)]);
var inst_35803 = (state_35848[(9)]);
var inst_35801 = (state_35848[(10)]);
var inst_35800 = (state_35848[(12)]);
var inst_35810 = (state_35848[(2)]);
var inst_35811 = (inst_35803 + (1));
var tmp35857 = inst_35802;
var tmp35858 = inst_35801;
var tmp35859 = inst_35800;
var inst_35800__$1 = tmp35859;
var inst_35801__$1 = tmp35858;
var inst_35802__$1 = tmp35857;
var inst_35803__$1 = inst_35811;
var state_35848__$1 = (function (){var statearr_35862 = state_35848;
(statearr_35862[(8)] = inst_35802__$1);

(statearr_35862[(9)] = inst_35803__$1);

(statearr_35862[(14)] = inst_35810);

(statearr_35862[(10)] = inst_35801__$1);

(statearr_35862[(12)] = inst_35800__$1);

return statearr_35862;
})();
var statearr_35863_35898 = state_35848__$1;
(statearr_35863_35898[(2)] = null);

(statearr_35863_35898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (22))){
var state_35848__$1 = state_35848;
var statearr_35864_35899 = state_35848__$1;
(statearr_35864_35899[(2)] = null);

(statearr_35864_35899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (6))){
var inst_35789 = (state_35848[(13)]);
var inst_35798 = f.call(null,inst_35789);
var inst_35799 = cljs.core.seq.call(null,inst_35798);
var inst_35800 = inst_35799;
var inst_35801 = null;
var inst_35802 = (0);
var inst_35803 = (0);
var state_35848__$1 = (function (){var statearr_35865 = state_35848;
(statearr_35865[(8)] = inst_35802);

(statearr_35865[(9)] = inst_35803);

(statearr_35865[(10)] = inst_35801);

(statearr_35865[(12)] = inst_35800);

return statearr_35865;
})();
var statearr_35866_35900 = state_35848__$1;
(statearr_35866_35900[(2)] = null);

(statearr_35866_35900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (17))){
var inst_35814 = (state_35848[(7)]);
var inst_35818 = cljs.core.chunk_first.call(null,inst_35814);
var inst_35819 = cljs.core.chunk_rest.call(null,inst_35814);
var inst_35820 = cljs.core.count.call(null,inst_35818);
var inst_35800 = inst_35819;
var inst_35801 = inst_35818;
var inst_35802 = inst_35820;
var inst_35803 = (0);
var state_35848__$1 = (function (){var statearr_35867 = state_35848;
(statearr_35867[(8)] = inst_35802);

(statearr_35867[(9)] = inst_35803);

(statearr_35867[(10)] = inst_35801);

(statearr_35867[(12)] = inst_35800);

return statearr_35867;
})();
var statearr_35868_35901 = state_35848__$1;
(statearr_35868_35901[(2)] = null);

(statearr_35868_35901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (3))){
var inst_35846 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35848__$1,inst_35846);
} else {
if((state_val_35849 === (12))){
var inst_35834 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
var statearr_35869_35902 = state_35848__$1;
(statearr_35869_35902[(2)] = inst_35834);

(statearr_35869_35902[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (2))){
var state_35848__$1 = state_35848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35848__$1,(4),in$);
} else {
if((state_val_35849 === (23))){
var inst_35842 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
var statearr_35870_35903 = state_35848__$1;
(statearr_35870_35903[(2)] = inst_35842);

(statearr_35870_35903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (19))){
var inst_35829 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
var statearr_35871_35904 = state_35848__$1;
(statearr_35871_35904[(2)] = inst_35829);

(statearr_35871_35904[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (11))){
var inst_35814 = (state_35848[(7)]);
var inst_35800 = (state_35848[(12)]);
var inst_35814__$1 = cljs.core.seq.call(null,inst_35800);
var state_35848__$1 = (function (){var statearr_35872 = state_35848;
(statearr_35872[(7)] = inst_35814__$1);

return statearr_35872;
})();
if(inst_35814__$1){
var statearr_35873_35905 = state_35848__$1;
(statearr_35873_35905[(1)] = (14));

} else {
var statearr_35874_35906 = state_35848__$1;
(statearr_35874_35906[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (9))){
var inst_35836 = (state_35848[(2)]);
var inst_35837 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35848__$1 = (function (){var statearr_35875 = state_35848;
(statearr_35875[(15)] = inst_35836);

return statearr_35875;
})();
if(cljs.core.truth_(inst_35837)){
var statearr_35876_35907 = state_35848__$1;
(statearr_35876_35907[(1)] = (21));

} else {
var statearr_35877_35908 = state_35848__$1;
(statearr_35877_35908[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (5))){
var inst_35792 = cljs.core.async.close_BANG_.call(null,out);
var state_35848__$1 = state_35848;
var statearr_35878_35909 = state_35848__$1;
(statearr_35878_35909[(2)] = inst_35792);

(statearr_35878_35909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (14))){
var inst_35814 = (state_35848[(7)]);
var inst_35816 = cljs.core.chunked_seq_QMARK_.call(null,inst_35814);
var state_35848__$1 = state_35848;
if(inst_35816){
var statearr_35879_35910 = state_35848__$1;
(statearr_35879_35910[(1)] = (17));

} else {
var statearr_35880_35911 = state_35848__$1;
(statearr_35880_35911[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (16))){
var inst_35832 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
var statearr_35881_35912 = state_35848__$1;
(statearr_35881_35912[(2)] = inst_35832);

(statearr_35881_35912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (10))){
var inst_35803 = (state_35848[(9)]);
var inst_35801 = (state_35848[(10)]);
var inst_35808 = cljs.core._nth.call(null,inst_35801,inst_35803);
var state_35848__$1 = state_35848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35848__$1,(13),out,inst_35808);
} else {
if((state_val_35849 === (18))){
var inst_35814 = (state_35848[(7)]);
var inst_35823 = cljs.core.first.call(null,inst_35814);
var state_35848__$1 = state_35848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35848__$1,(20),out,inst_35823);
} else {
if((state_val_35849 === (8))){
var inst_35802 = (state_35848[(8)]);
var inst_35803 = (state_35848[(9)]);
var inst_35805 = (inst_35803 < inst_35802);
var inst_35806 = inst_35805;
var state_35848__$1 = state_35848;
if(cljs.core.truth_(inst_35806)){
var statearr_35882_35913 = state_35848__$1;
(statearr_35882_35913[(1)] = (10));

} else {
var statearr_35883_35914 = state_35848__$1;
(statearr_35883_35914[(1)] = (11));

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
});})(c__33387__auto__))
;
return ((function (switch__33275__auto__,c__33387__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33276__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33276__auto____0 = (function (){
var statearr_35887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35887[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33276__auto__);

(statearr_35887[(1)] = (1));

return statearr_35887;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33276__auto____1 = (function (state_35848){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_35848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e35888){if((e35888 instanceof Object)){
var ex__33279__auto__ = e35888;
var statearr_35889_35915 = state_35848;
(statearr_35889_35915[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35916 = state_35848;
state_35848 = G__35916;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33276__auto__ = function(state_35848){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33276__auto____1.call(this,state_35848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33276__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33276__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto__))
})();
var state__33389__auto__ = (function (){var statearr_35890 = f__33388__auto__.call(null);
(statearr_35890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto__);

return statearr_35890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto__))
);

return c__33387__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args35917 = [];
var len__31357__auto___35920 = arguments.length;
var i__31358__auto___35921 = (0);
while(true){
if((i__31358__auto___35921 < len__31357__auto___35920)){
args35917.push((arguments[i__31358__auto___35921]));

var G__35922 = (i__31358__auto___35921 + (1));
i__31358__auto___35921 = G__35922;
continue;
} else {
}
break;
}

var G__35919 = args35917.length;
switch (G__35919) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35917.length)].join('')));

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
var args35924 = [];
var len__31357__auto___35927 = arguments.length;
var i__31358__auto___35928 = (0);
while(true){
if((i__31358__auto___35928 < len__31357__auto___35927)){
args35924.push((arguments[i__31358__auto___35928]));

var G__35929 = (i__31358__auto___35928 + (1));
i__31358__auto___35928 = G__35929;
continue;
} else {
}
break;
}

var G__35926 = args35924.length;
switch (G__35926) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35924.length)].join('')));

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
var args35931 = [];
var len__31357__auto___35982 = arguments.length;
var i__31358__auto___35983 = (0);
while(true){
if((i__31358__auto___35983 < len__31357__auto___35982)){
args35931.push((arguments[i__31358__auto___35983]));

var G__35984 = (i__31358__auto___35983 + (1));
i__31358__auto___35983 = G__35984;
continue;
} else {
}
break;
}

var G__35933 = args35931.length;
switch (G__35933) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35931.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33387__auto___35986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto___35986,out){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto___35986,out){
return (function (state_35957){
var state_val_35958 = (state_35957[(1)]);
if((state_val_35958 === (7))){
var inst_35952 = (state_35957[(2)]);
var state_35957__$1 = state_35957;
var statearr_35959_35987 = state_35957__$1;
(statearr_35959_35987[(2)] = inst_35952);

(statearr_35959_35987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (1))){
var inst_35934 = null;
var state_35957__$1 = (function (){var statearr_35960 = state_35957;
(statearr_35960[(7)] = inst_35934);

return statearr_35960;
})();
var statearr_35961_35988 = state_35957__$1;
(statearr_35961_35988[(2)] = null);

(statearr_35961_35988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (4))){
var inst_35937 = (state_35957[(8)]);
var inst_35937__$1 = (state_35957[(2)]);
var inst_35938 = (inst_35937__$1 == null);
var inst_35939 = cljs.core.not.call(null,inst_35938);
var state_35957__$1 = (function (){var statearr_35962 = state_35957;
(statearr_35962[(8)] = inst_35937__$1);

return statearr_35962;
})();
if(inst_35939){
var statearr_35963_35989 = state_35957__$1;
(statearr_35963_35989[(1)] = (5));

} else {
var statearr_35964_35990 = state_35957__$1;
(statearr_35964_35990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (6))){
var state_35957__$1 = state_35957;
var statearr_35965_35991 = state_35957__$1;
(statearr_35965_35991[(2)] = null);

(statearr_35965_35991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (3))){
var inst_35954 = (state_35957[(2)]);
var inst_35955 = cljs.core.async.close_BANG_.call(null,out);
var state_35957__$1 = (function (){var statearr_35966 = state_35957;
(statearr_35966[(9)] = inst_35954);

return statearr_35966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35957__$1,inst_35955);
} else {
if((state_val_35958 === (2))){
var state_35957__$1 = state_35957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35957__$1,(4),ch);
} else {
if((state_val_35958 === (11))){
var inst_35937 = (state_35957[(8)]);
var inst_35946 = (state_35957[(2)]);
var inst_35934 = inst_35937;
var state_35957__$1 = (function (){var statearr_35967 = state_35957;
(statearr_35967[(7)] = inst_35934);

(statearr_35967[(10)] = inst_35946);

return statearr_35967;
})();
var statearr_35968_35992 = state_35957__$1;
(statearr_35968_35992[(2)] = null);

(statearr_35968_35992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (9))){
var inst_35937 = (state_35957[(8)]);
var state_35957__$1 = state_35957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35957__$1,(11),out,inst_35937);
} else {
if((state_val_35958 === (5))){
var inst_35934 = (state_35957[(7)]);
var inst_35937 = (state_35957[(8)]);
var inst_35941 = cljs.core._EQ_.call(null,inst_35937,inst_35934);
var state_35957__$1 = state_35957;
if(inst_35941){
var statearr_35970_35993 = state_35957__$1;
(statearr_35970_35993[(1)] = (8));

} else {
var statearr_35971_35994 = state_35957__$1;
(statearr_35971_35994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (10))){
var inst_35949 = (state_35957[(2)]);
var state_35957__$1 = state_35957;
var statearr_35972_35995 = state_35957__$1;
(statearr_35972_35995[(2)] = inst_35949);

(statearr_35972_35995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (8))){
var inst_35934 = (state_35957[(7)]);
var tmp35969 = inst_35934;
var inst_35934__$1 = tmp35969;
var state_35957__$1 = (function (){var statearr_35973 = state_35957;
(statearr_35973[(7)] = inst_35934__$1);

return statearr_35973;
})();
var statearr_35974_35996 = state_35957__$1;
(statearr_35974_35996[(2)] = null);

(statearr_35974_35996[(1)] = (2));


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
});})(c__33387__auto___35986,out))
;
return ((function (switch__33275__auto__,c__33387__auto___35986,out){
return (function() {
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_35978 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35978[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_35978[(1)] = (1));

return statearr_35978;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_35957){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_35957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e35979){if((e35979 instanceof Object)){
var ex__33279__auto__ = e35979;
var statearr_35980_35997 = state_35957;
(statearr_35980_35997[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35998 = state_35957;
state_35957 = G__35998;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_35957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_35957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto___35986,out))
})();
var state__33389__auto__ = (function (){var statearr_35981 = f__33388__auto__.call(null);
(statearr_35981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto___35986);

return statearr_35981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto___35986,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args35999 = [];
var len__31357__auto___36069 = arguments.length;
var i__31358__auto___36070 = (0);
while(true){
if((i__31358__auto___36070 < len__31357__auto___36069)){
args35999.push((arguments[i__31358__auto___36070]));

var G__36071 = (i__31358__auto___36070 + (1));
i__31358__auto___36070 = G__36071;
continue;
} else {
}
break;
}

var G__36001 = args35999.length;
switch (G__36001) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35999.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33387__auto___36073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto___36073,out){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto___36073,out){
return (function (state_36039){
var state_val_36040 = (state_36039[(1)]);
if((state_val_36040 === (7))){
var inst_36035 = (state_36039[(2)]);
var state_36039__$1 = state_36039;
var statearr_36041_36074 = state_36039__$1;
(statearr_36041_36074[(2)] = inst_36035);

(statearr_36041_36074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36040 === (1))){
var inst_36002 = (new Array(n));
var inst_36003 = inst_36002;
var inst_36004 = (0);
var state_36039__$1 = (function (){var statearr_36042 = state_36039;
(statearr_36042[(7)] = inst_36004);

(statearr_36042[(8)] = inst_36003);

return statearr_36042;
})();
var statearr_36043_36075 = state_36039__$1;
(statearr_36043_36075[(2)] = null);

(statearr_36043_36075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36040 === (4))){
var inst_36007 = (state_36039[(9)]);
var inst_36007__$1 = (state_36039[(2)]);
var inst_36008 = (inst_36007__$1 == null);
var inst_36009 = cljs.core.not.call(null,inst_36008);
var state_36039__$1 = (function (){var statearr_36044 = state_36039;
(statearr_36044[(9)] = inst_36007__$1);

return statearr_36044;
})();
if(inst_36009){
var statearr_36045_36076 = state_36039__$1;
(statearr_36045_36076[(1)] = (5));

} else {
var statearr_36046_36077 = state_36039__$1;
(statearr_36046_36077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36040 === (15))){
var inst_36029 = (state_36039[(2)]);
var state_36039__$1 = state_36039;
var statearr_36047_36078 = state_36039__$1;
(statearr_36047_36078[(2)] = inst_36029);

(statearr_36047_36078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36040 === (13))){
var state_36039__$1 = state_36039;
var statearr_36048_36079 = state_36039__$1;
(statearr_36048_36079[(2)] = null);

(statearr_36048_36079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36040 === (6))){
var inst_36004 = (state_36039[(7)]);
var inst_36025 = (inst_36004 > (0));
var state_36039__$1 = state_36039;
if(cljs.core.truth_(inst_36025)){
var statearr_36049_36080 = state_36039__$1;
(statearr_36049_36080[(1)] = (12));

} else {
var statearr_36050_36081 = state_36039__$1;
(statearr_36050_36081[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36040 === (3))){
var inst_36037 = (state_36039[(2)]);
var state_36039__$1 = state_36039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36039__$1,inst_36037);
} else {
if((state_val_36040 === (12))){
var inst_36003 = (state_36039[(8)]);
var inst_36027 = cljs.core.vec.call(null,inst_36003);
var state_36039__$1 = state_36039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36039__$1,(15),out,inst_36027);
} else {
if((state_val_36040 === (2))){
var state_36039__$1 = state_36039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36039__$1,(4),ch);
} else {
if((state_val_36040 === (11))){
var inst_36019 = (state_36039[(2)]);
var inst_36020 = (new Array(n));
var inst_36003 = inst_36020;
var inst_36004 = (0);
var state_36039__$1 = (function (){var statearr_36051 = state_36039;
(statearr_36051[(7)] = inst_36004);

(statearr_36051[(10)] = inst_36019);

(statearr_36051[(8)] = inst_36003);

return statearr_36051;
})();
var statearr_36052_36082 = state_36039__$1;
(statearr_36052_36082[(2)] = null);

(statearr_36052_36082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36040 === (9))){
var inst_36003 = (state_36039[(8)]);
var inst_36017 = cljs.core.vec.call(null,inst_36003);
var state_36039__$1 = state_36039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36039__$1,(11),out,inst_36017);
} else {
if((state_val_36040 === (5))){
var inst_36012 = (state_36039[(11)]);
var inst_36007 = (state_36039[(9)]);
var inst_36004 = (state_36039[(7)]);
var inst_36003 = (state_36039[(8)]);
var inst_36011 = (inst_36003[inst_36004] = inst_36007);
var inst_36012__$1 = (inst_36004 + (1));
var inst_36013 = (inst_36012__$1 < n);
var state_36039__$1 = (function (){var statearr_36053 = state_36039;
(statearr_36053[(11)] = inst_36012__$1);

(statearr_36053[(12)] = inst_36011);

return statearr_36053;
})();
if(cljs.core.truth_(inst_36013)){
var statearr_36054_36083 = state_36039__$1;
(statearr_36054_36083[(1)] = (8));

} else {
var statearr_36055_36084 = state_36039__$1;
(statearr_36055_36084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36040 === (14))){
var inst_36032 = (state_36039[(2)]);
var inst_36033 = cljs.core.async.close_BANG_.call(null,out);
var state_36039__$1 = (function (){var statearr_36057 = state_36039;
(statearr_36057[(13)] = inst_36032);

return statearr_36057;
})();
var statearr_36058_36085 = state_36039__$1;
(statearr_36058_36085[(2)] = inst_36033);

(statearr_36058_36085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36040 === (10))){
var inst_36023 = (state_36039[(2)]);
var state_36039__$1 = state_36039;
var statearr_36059_36086 = state_36039__$1;
(statearr_36059_36086[(2)] = inst_36023);

(statearr_36059_36086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36040 === (8))){
var inst_36012 = (state_36039[(11)]);
var inst_36003 = (state_36039[(8)]);
var tmp36056 = inst_36003;
var inst_36003__$1 = tmp36056;
var inst_36004 = inst_36012;
var state_36039__$1 = (function (){var statearr_36060 = state_36039;
(statearr_36060[(7)] = inst_36004);

(statearr_36060[(8)] = inst_36003__$1);

return statearr_36060;
})();
var statearr_36061_36087 = state_36039__$1;
(statearr_36061_36087[(2)] = null);

(statearr_36061_36087[(1)] = (2));


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
});})(c__33387__auto___36073,out))
;
return ((function (switch__33275__auto__,c__33387__auto___36073,out){
return (function() {
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_36065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36065[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_36065[(1)] = (1));

return statearr_36065;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_36039){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_36039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e36066){if((e36066 instanceof Object)){
var ex__33279__auto__ = e36066;
var statearr_36067_36088 = state_36039;
(statearr_36067_36088[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36089 = state_36039;
state_36039 = G__36089;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_36039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_36039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto___36073,out))
})();
var state__33389__auto__ = (function (){var statearr_36068 = f__33388__auto__.call(null);
(statearr_36068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto___36073);

return statearr_36068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto___36073,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args36090 = [];
var len__31357__auto___36164 = arguments.length;
var i__31358__auto___36165 = (0);
while(true){
if((i__31358__auto___36165 < len__31357__auto___36164)){
args36090.push((arguments[i__31358__auto___36165]));

var G__36166 = (i__31358__auto___36165 + (1));
i__31358__auto___36165 = G__36166;
continue;
} else {
}
break;
}

var G__36092 = args36090.length;
switch (G__36092) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36090.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33387__auto___36168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto___36168,out){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto___36168,out){
return (function (state_36134){
var state_val_36135 = (state_36134[(1)]);
if((state_val_36135 === (7))){
var inst_36130 = (state_36134[(2)]);
var state_36134__$1 = state_36134;
var statearr_36136_36169 = state_36134__$1;
(statearr_36136_36169[(2)] = inst_36130);

(statearr_36136_36169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (1))){
var inst_36093 = [];
var inst_36094 = inst_36093;
var inst_36095 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36134__$1 = (function (){var statearr_36137 = state_36134;
(statearr_36137[(7)] = inst_36094);

(statearr_36137[(8)] = inst_36095);

return statearr_36137;
})();
var statearr_36138_36170 = state_36134__$1;
(statearr_36138_36170[(2)] = null);

(statearr_36138_36170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (4))){
var inst_36098 = (state_36134[(9)]);
var inst_36098__$1 = (state_36134[(2)]);
var inst_36099 = (inst_36098__$1 == null);
var inst_36100 = cljs.core.not.call(null,inst_36099);
var state_36134__$1 = (function (){var statearr_36139 = state_36134;
(statearr_36139[(9)] = inst_36098__$1);

return statearr_36139;
})();
if(inst_36100){
var statearr_36140_36171 = state_36134__$1;
(statearr_36140_36171[(1)] = (5));

} else {
var statearr_36141_36172 = state_36134__$1;
(statearr_36141_36172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (15))){
var inst_36124 = (state_36134[(2)]);
var state_36134__$1 = state_36134;
var statearr_36142_36173 = state_36134__$1;
(statearr_36142_36173[(2)] = inst_36124);

(statearr_36142_36173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (13))){
var state_36134__$1 = state_36134;
var statearr_36143_36174 = state_36134__$1;
(statearr_36143_36174[(2)] = null);

(statearr_36143_36174[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (6))){
var inst_36094 = (state_36134[(7)]);
var inst_36119 = inst_36094.length;
var inst_36120 = (inst_36119 > (0));
var state_36134__$1 = state_36134;
if(cljs.core.truth_(inst_36120)){
var statearr_36144_36175 = state_36134__$1;
(statearr_36144_36175[(1)] = (12));

} else {
var statearr_36145_36176 = state_36134__$1;
(statearr_36145_36176[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (3))){
var inst_36132 = (state_36134[(2)]);
var state_36134__$1 = state_36134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36134__$1,inst_36132);
} else {
if((state_val_36135 === (12))){
var inst_36094 = (state_36134[(7)]);
var inst_36122 = cljs.core.vec.call(null,inst_36094);
var state_36134__$1 = state_36134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36134__$1,(15),out,inst_36122);
} else {
if((state_val_36135 === (2))){
var state_36134__$1 = state_36134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36134__$1,(4),ch);
} else {
if((state_val_36135 === (11))){
var inst_36098 = (state_36134[(9)]);
var inst_36102 = (state_36134[(10)]);
var inst_36112 = (state_36134[(2)]);
var inst_36113 = [];
var inst_36114 = inst_36113.push(inst_36098);
var inst_36094 = inst_36113;
var inst_36095 = inst_36102;
var state_36134__$1 = (function (){var statearr_36146 = state_36134;
(statearr_36146[(11)] = inst_36112);

(statearr_36146[(12)] = inst_36114);

(statearr_36146[(7)] = inst_36094);

(statearr_36146[(8)] = inst_36095);

return statearr_36146;
})();
var statearr_36147_36177 = state_36134__$1;
(statearr_36147_36177[(2)] = null);

(statearr_36147_36177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (9))){
var inst_36094 = (state_36134[(7)]);
var inst_36110 = cljs.core.vec.call(null,inst_36094);
var state_36134__$1 = state_36134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36134__$1,(11),out,inst_36110);
} else {
if((state_val_36135 === (5))){
var inst_36098 = (state_36134[(9)]);
var inst_36102 = (state_36134[(10)]);
var inst_36095 = (state_36134[(8)]);
var inst_36102__$1 = f.call(null,inst_36098);
var inst_36103 = cljs.core._EQ_.call(null,inst_36102__$1,inst_36095);
var inst_36104 = cljs.core.keyword_identical_QMARK_.call(null,inst_36095,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36105 = (inst_36103) || (inst_36104);
var state_36134__$1 = (function (){var statearr_36148 = state_36134;
(statearr_36148[(10)] = inst_36102__$1);

return statearr_36148;
})();
if(cljs.core.truth_(inst_36105)){
var statearr_36149_36178 = state_36134__$1;
(statearr_36149_36178[(1)] = (8));

} else {
var statearr_36150_36179 = state_36134__$1;
(statearr_36150_36179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (14))){
var inst_36127 = (state_36134[(2)]);
var inst_36128 = cljs.core.async.close_BANG_.call(null,out);
var state_36134__$1 = (function (){var statearr_36152 = state_36134;
(statearr_36152[(13)] = inst_36127);

return statearr_36152;
})();
var statearr_36153_36180 = state_36134__$1;
(statearr_36153_36180[(2)] = inst_36128);

(statearr_36153_36180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (10))){
var inst_36117 = (state_36134[(2)]);
var state_36134__$1 = state_36134;
var statearr_36154_36181 = state_36134__$1;
(statearr_36154_36181[(2)] = inst_36117);

(statearr_36154_36181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36135 === (8))){
var inst_36098 = (state_36134[(9)]);
var inst_36102 = (state_36134[(10)]);
var inst_36094 = (state_36134[(7)]);
var inst_36107 = inst_36094.push(inst_36098);
var tmp36151 = inst_36094;
var inst_36094__$1 = tmp36151;
var inst_36095 = inst_36102;
var state_36134__$1 = (function (){var statearr_36155 = state_36134;
(statearr_36155[(14)] = inst_36107);

(statearr_36155[(7)] = inst_36094__$1);

(statearr_36155[(8)] = inst_36095);

return statearr_36155;
})();
var statearr_36156_36182 = state_36134__$1;
(statearr_36156_36182[(2)] = null);

(statearr_36156_36182[(1)] = (2));


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
});})(c__33387__auto___36168,out))
;
return ((function (switch__33275__auto__,c__33387__auto___36168,out){
return (function() {
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_36160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36160[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_36160[(1)] = (1));

return statearr_36160;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_36134){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_36134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e36161){if((e36161 instanceof Object)){
var ex__33279__auto__ = e36161;
var statearr_36162_36183 = state_36134;
(statearr_36162_36183[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36184 = state_36134;
state_36134 = G__36184;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_36134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_36134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto___36168,out))
})();
var state__33389__auto__ = (function (){var statearr_36163 = f__33388__auto__.call(null);
(statearr_36163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto___36168);

return statearr_36163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto___36168,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map