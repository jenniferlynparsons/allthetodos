// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38953){
var map__38978 = p__38953;
var map__38978__$1 = ((((!((map__38978 == null)))?((((map__38978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38978):map__38978);
var m = map__38978__$1;
var n = cljs.core.get.call(null,map__38978__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38978__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38980_39002 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38981_39003 = null;
var count__38982_39004 = (0);
var i__38983_39005 = (0);
while(true){
if((i__38983_39005 < count__38982_39004)){
var f_39006 = cljs.core._nth.call(null,chunk__38981_39003,i__38983_39005);
cljs.core.println.call(null,"  ",f_39006);

var G__39007 = seq__38980_39002;
var G__39008 = chunk__38981_39003;
var G__39009 = count__38982_39004;
var G__39010 = (i__38983_39005 + (1));
seq__38980_39002 = G__39007;
chunk__38981_39003 = G__39008;
count__38982_39004 = G__39009;
i__38983_39005 = G__39010;
continue;
} else {
var temp__4657__auto___39011 = cljs.core.seq.call(null,seq__38980_39002);
if(temp__4657__auto___39011){
var seq__38980_39012__$1 = temp__4657__auto___39011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38980_39012__$1)){
var c__31063__auto___39013 = cljs.core.chunk_first.call(null,seq__38980_39012__$1);
var G__39014 = cljs.core.chunk_rest.call(null,seq__38980_39012__$1);
var G__39015 = c__31063__auto___39013;
var G__39016 = cljs.core.count.call(null,c__31063__auto___39013);
var G__39017 = (0);
seq__38980_39002 = G__39014;
chunk__38981_39003 = G__39015;
count__38982_39004 = G__39016;
i__38983_39005 = G__39017;
continue;
} else {
var f_39018 = cljs.core.first.call(null,seq__38980_39012__$1);
cljs.core.println.call(null,"  ",f_39018);

var G__39019 = cljs.core.next.call(null,seq__38980_39012__$1);
var G__39020 = null;
var G__39021 = (0);
var G__39022 = (0);
seq__38980_39002 = G__39019;
chunk__38981_39003 = G__39020;
count__38982_39004 = G__39021;
i__38983_39005 = G__39022;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39023 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30244__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30244__auto__)){
return or__30244__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39023);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39023)))?cljs.core.second.call(null,arglists_39023):arglists_39023));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38984_39024 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38985_39025 = null;
var count__38986_39026 = (0);
var i__38987_39027 = (0);
while(true){
if((i__38987_39027 < count__38986_39026)){
var vec__38988_39028 = cljs.core._nth.call(null,chunk__38985_39025,i__38987_39027);
var name_39029 = cljs.core.nth.call(null,vec__38988_39028,(0),null);
var map__38991_39030 = cljs.core.nth.call(null,vec__38988_39028,(1),null);
var map__38991_39031__$1 = ((((!((map__38991_39030 == null)))?((((map__38991_39030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38991_39030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38991_39030):map__38991_39030);
var doc_39032 = cljs.core.get.call(null,map__38991_39031__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39033 = cljs.core.get.call(null,map__38991_39031__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39029);

cljs.core.println.call(null," ",arglists_39033);

if(cljs.core.truth_(doc_39032)){
cljs.core.println.call(null," ",doc_39032);
} else {
}

var G__39034 = seq__38984_39024;
var G__39035 = chunk__38985_39025;
var G__39036 = count__38986_39026;
var G__39037 = (i__38987_39027 + (1));
seq__38984_39024 = G__39034;
chunk__38985_39025 = G__39035;
count__38986_39026 = G__39036;
i__38987_39027 = G__39037;
continue;
} else {
var temp__4657__auto___39038 = cljs.core.seq.call(null,seq__38984_39024);
if(temp__4657__auto___39038){
var seq__38984_39039__$1 = temp__4657__auto___39038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38984_39039__$1)){
var c__31063__auto___39040 = cljs.core.chunk_first.call(null,seq__38984_39039__$1);
var G__39041 = cljs.core.chunk_rest.call(null,seq__38984_39039__$1);
var G__39042 = c__31063__auto___39040;
var G__39043 = cljs.core.count.call(null,c__31063__auto___39040);
var G__39044 = (0);
seq__38984_39024 = G__39041;
chunk__38985_39025 = G__39042;
count__38986_39026 = G__39043;
i__38987_39027 = G__39044;
continue;
} else {
var vec__38993_39045 = cljs.core.first.call(null,seq__38984_39039__$1);
var name_39046 = cljs.core.nth.call(null,vec__38993_39045,(0),null);
var map__38996_39047 = cljs.core.nth.call(null,vec__38993_39045,(1),null);
var map__38996_39048__$1 = ((((!((map__38996_39047 == null)))?((((map__38996_39047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38996_39047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38996_39047):map__38996_39047);
var doc_39049 = cljs.core.get.call(null,map__38996_39048__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39050 = cljs.core.get.call(null,map__38996_39048__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39046);

cljs.core.println.call(null," ",arglists_39050);

if(cljs.core.truth_(doc_39049)){
cljs.core.println.call(null," ",doc_39049);
} else {
}

var G__39051 = cljs.core.next.call(null,seq__38984_39039__$1);
var G__39052 = null;
var G__39053 = (0);
var G__39054 = (0);
seq__38984_39024 = G__39051;
chunk__38985_39025 = G__39052;
count__38986_39026 = G__39053;
i__38987_39027 = G__39054;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__38998 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38999 = null;
var count__39000 = (0);
var i__39001 = (0);
while(true){
if((i__39001 < count__39000)){
var role = cljs.core._nth.call(null,chunk__38999,i__39001);
var temp__4657__auto___39055__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39055__$1)){
var spec_39056 = temp__4657__auto___39055__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_39056));
} else {
}

var G__39057 = seq__38998;
var G__39058 = chunk__38999;
var G__39059 = count__39000;
var G__39060 = (i__39001 + (1));
seq__38998 = G__39057;
chunk__38999 = G__39058;
count__39000 = G__39059;
i__39001 = G__39060;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38998);
if(temp__4657__auto____$1){
var seq__38998__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38998__$1)){
var c__31063__auto__ = cljs.core.chunk_first.call(null,seq__38998__$1);
var G__39061 = cljs.core.chunk_rest.call(null,seq__38998__$1);
var G__39062 = c__31063__auto__;
var G__39063 = cljs.core.count.call(null,c__31063__auto__);
var G__39064 = (0);
seq__38998 = G__39061;
chunk__38999 = G__39062;
count__39000 = G__39063;
i__39001 = G__39064;
continue;
} else {
var role = cljs.core.first.call(null,seq__38998__$1);
var temp__4657__auto___39065__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39065__$2)){
var spec_39066 = temp__4657__auto___39065__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_39066));
} else {
}

var G__39067 = cljs.core.next.call(null,seq__38998__$1);
var G__39068 = null;
var G__39069 = (0);
var G__39070 = (0);
seq__38998 = G__39067;
chunk__38999 = G__39068;
count__39000 = G__39069;
i__39001 = G__39070;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map