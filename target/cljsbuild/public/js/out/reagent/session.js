// Compiled by ClojureScript 1.9.473 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__31364__auto__ = [];
var len__31357__auto___32344 = arguments.length;
var i__31358__auto___32345 = (0);
while(true){
if((i__31358__auto___32345 < len__31357__auto___32344)){
args__31364__auto__.push((arguments[i__31358__auto___32345]));

var G__32346 = (i__31358__auto___32345 + (1));
i__31358__auto___32345 = G__32346;
continue;
} else {
}
break;
}

var argseq__31365__auto__ = ((((1) < args__31364__auto__.length))?(new cljs.core.IndexedSeq(args__31364__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31365__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__32340){
var vec__32341 = p__32340;
var default$ = cljs.core.nth.call(null,vec__32341,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq32338){
var G__32339 = cljs.core.first.call(null,seq32338);
var seq32338__$1 = cljs.core.next.call(null,seq32338);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__32339,seq32338__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__31364__auto__ = [];
var len__31357__auto___32353 = arguments.length;
var i__31358__auto___32354 = (0);
while(true){
if((i__31358__auto___32354 < len__31357__auto___32353)){
args__31364__auto__.push((arguments[i__31358__auto___32354]));

var G__32355 = (i__31358__auto___32354 + (1));
i__31358__auto___32354 = G__32355;
continue;
} else {
}
break;
}

var argseq__31365__auto__ = ((((1) < args__31364__auto__.length))?(new cljs.core.IndexedSeq(args__31364__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31365__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__32349){
var vec__32350 = p__32349;
var default$ = cljs.core.nth.call(null,vec__32350,(0),null);
var or__30244__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__30244__auto__)){
return or__30244__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq32347){
var G__32348 = cljs.core.first.call(null,seq32347);
var seq32347__$1 = cljs.core.next.call(null,seq32347);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__32348,seq32347__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__31364__auto__ = [];
var len__31357__auto___32358 = arguments.length;
var i__31358__auto___32359 = (0);
while(true){
if((i__31358__auto___32359 < len__31357__auto___32358)){
args__31364__auto__.push((arguments[i__31358__auto___32359]));

var G__32360 = (i__31358__auto___32359 + (1));
i__31358__auto___32359 = G__32360;
continue;
} else {
}
break;
}

var argseq__31365__auto__ = ((((1) < args__31364__auto__.length))?(new cljs.core.IndexedSeq(args__31364__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31365__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq32356){
var G__32357 = cljs.core.first.call(null,seq32356);
var seq32356__$1 = cljs.core.next.call(null,seq32356);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32357,seq32356__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__31364__auto__ = [];
var len__31357__auto___32367 = arguments.length;
var i__31358__auto___32368 = (0);
while(true){
if((i__31358__auto___32368 < len__31357__auto___32367)){
args__31364__auto__.push((arguments[i__31358__auto___32368]));

var G__32369 = (i__31358__auto___32368 + (1));
i__31358__auto___32368 = G__32369;
continue;
} else {
}
break;
}

var argseq__31365__auto__ = ((((1) < args__31364__auto__.length))?(new cljs.core.IndexedSeq(args__31364__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31365__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__32363){
var vec__32364 = p__32363;
var default$ = cljs.core.nth.call(null,vec__32364,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq32361){
var G__32362 = cljs.core.first.call(null,seq32361);
var seq32361__$1 = cljs.core.next.call(null,seq32361);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32362,seq32361__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__31364__auto__ = [];
var len__31357__auto___32376 = arguments.length;
var i__31358__auto___32377 = (0);
while(true){
if((i__31358__auto___32377 < len__31357__auto___32376)){
args__31364__auto__.push((arguments[i__31358__auto___32377]));

var G__32378 = (i__31358__auto___32377 + (1));
i__31358__auto___32377 = G__32378;
continue;
} else {
}
break;
}

var argseq__31365__auto__ = ((((1) < args__31364__auto__.length))?(new cljs.core.IndexedSeq(args__31364__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31365__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__32372){
var vec__32373 = p__32372;
var default$ = cljs.core.nth.call(null,vec__32373,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq32370){
var G__32371 = cljs.core.first.call(null,seq32370);
var seq32370__$1 = cljs.core.next.call(null,seq32370);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32371,seq32370__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__31364__auto__ = [];
var len__31357__auto___32383 = arguments.length;
var i__31358__auto___32384 = (0);
while(true){
if((i__31358__auto___32384 < len__31357__auto___32383)){
args__31364__auto__.push((arguments[i__31358__auto___32384]));

var G__32385 = (i__31358__auto___32384 + (1));
i__31358__auto___32384 = G__32385;
continue;
} else {
}
break;
}

var argseq__31365__auto__ = ((((2) < args__31364__auto__.length))?(new cljs.core.IndexedSeq(args__31364__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31365__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__32379_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__32379_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq32380){
var G__32381 = cljs.core.first.call(null,seq32380);
var seq32380__$1 = cljs.core.next.call(null,seq32380);
var G__32382 = cljs.core.first.call(null,seq32380__$1);
var seq32380__$2 = cljs.core.next.call(null,seq32380__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32381,G__32382,seq32380__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__31364__auto__ = [];
var len__31357__auto___32390 = arguments.length;
var i__31358__auto___32391 = (0);
while(true){
if((i__31358__auto___32391 < len__31357__auto___32390)){
args__31364__auto__.push((arguments[i__31358__auto___32391]));

var G__32392 = (i__31358__auto___32391 + (1));
i__31358__auto___32391 = G__32392;
continue;
} else {
}
break;
}

var argseq__31365__auto__ = ((((2) < args__31364__auto__.length))?(new cljs.core.IndexedSeq(args__31364__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31365__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__32386_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__32386_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq32387){
var G__32388 = cljs.core.first.call(null,seq32387);
var seq32387__$1 = cljs.core.next.call(null,seq32387);
var G__32389 = cljs.core.first.call(null,seq32387__$1);
var seq32387__$2 = cljs.core.next.call(null,seq32387__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32388,G__32389,seq32387__$2);
});


//# sourceMappingURL=session.js.map