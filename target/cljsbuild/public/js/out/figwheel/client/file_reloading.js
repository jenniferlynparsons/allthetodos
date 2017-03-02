// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30244__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30244__auto__){
return or__30244__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("goog/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30244__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__30244__auto__)){
return or__30244__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36508_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36508_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36513 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36514 = null;
var count__36515 = (0);
var i__36516 = (0);
while(true){
if((i__36516 < count__36515)){
var n = cljs.core._nth.call(null,chunk__36514,i__36516);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36517 = seq__36513;
var G__36518 = chunk__36514;
var G__36519 = count__36515;
var G__36520 = (i__36516 + (1));
seq__36513 = G__36517;
chunk__36514 = G__36518;
count__36515 = G__36519;
i__36516 = G__36520;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36513);
if(temp__4657__auto__){
var seq__36513__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36513__$1)){
var c__31063__auto__ = cljs.core.chunk_first.call(null,seq__36513__$1);
var G__36521 = cljs.core.chunk_rest.call(null,seq__36513__$1);
var G__36522 = c__31063__auto__;
var G__36523 = cljs.core.count.call(null,c__31063__auto__);
var G__36524 = (0);
seq__36513 = G__36521;
chunk__36514 = G__36522;
count__36515 = G__36523;
i__36516 = G__36524;
continue;
} else {
var n = cljs.core.first.call(null,seq__36513__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36525 = cljs.core.next.call(null,seq__36513__$1);
var G__36526 = null;
var G__36527 = (0);
var G__36528 = (0);
seq__36513 = G__36525;
chunk__36514 = G__36526;
count__36515 = G__36527;
i__36516 = G__36528;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36579_36590 = cljs.core.seq.call(null,deps);
var chunk__36580_36591 = null;
var count__36581_36592 = (0);
var i__36582_36593 = (0);
while(true){
if((i__36582_36593 < count__36581_36592)){
var dep_36594 = cljs.core._nth.call(null,chunk__36580_36591,i__36582_36593);
topo_sort_helper_STAR_.call(null,dep_36594,(depth + (1)),state);

var G__36595 = seq__36579_36590;
var G__36596 = chunk__36580_36591;
var G__36597 = count__36581_36592;
var G__36598 = (i__36582_36593 + (1));
seq__36579_36590 = G__36595;
chunk__36580_36591 = G__36596;
count__36581_36592 = G__36597;
i__36582_36593 = G__36598;
continue;
} else {
var temp__4657__auto___36599 = cljs.core.seq.call(null,seq__36579_36590);
if(temp__4657__auto___36599){
var seq__36579_36600__$1 = temp__4657__auto___36599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36579_36600__$1)){
var c__31063__auto___36601 = cljs.core.chunk_first.call(null,seq__36579_36600__$1);
var G__36602 = cljs.core.chunk_rest.call(null,seq__36579_36600__$1);
var G__36603 = c__31063__auto___36601;
var G__36604 = cljs.core.count.call(null,c__31063__auto___36601);
var G__36605 = (0);
seq__36579_36590 = G__36602;
chunk__36580_36591 = G__36603;
count__36581_36592 = G__36604;
i__36582_36593 = G__36605;
continue;
} else {
var dep_36606 = cljs.core.first.call(null,seq__36579_36600__$1);
topo_sort_helper_STAR_.call(null,dep_36606,(depth + (1)),state);

var G__36607 = cljs.core.next.call(null,seq__36579_36600__$1);
var G__36608 = null;
var G__36609 = (0);
var G__36610 = (0);
seq__36579_36590 = G__36607;
chunk__36580_36591 = G__36608;
count__36581_36592 = G__36609;
i__36582_36593 = G__36610;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36583){
var vec__36587 = p__36583;
var seq__36588 = cljs.core.seq.call(null,vec__36587);
var first__36589 = cljs.core.first.call(null,seq__36588);
var seq__36588__$1 = cljs.core.next.call(null,seq__36588);
var x = first__36589;
var xs = seq__36588__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36587,seq__36588,first__36589,seq__36588__$1,x,xs,get_deps__$1){
return (function (p1__36529_SHARP_){
return clojure.set.difference.call(null,p1__36529_SHARP_,x);
});})(vec__36587,seq__36588,first__36589,seq__36588__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36623 = cljs.core.seq.call(null,provides);
var chunk__36624 = null;
var count__36625 = (0);
var i__36626 = (0);
while(true){
if((i__36626 < count__36625)){
var prov = cljs.core._nth.call(null,chunk__36624,i__36626);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36627_36635 = cljs.core.seq.call(null,requires);
var chunk__36628_36636 = null;
var count__36629_36637 = (0);
var i__36630_36638 = (0);
while(true){
if((i__36630_36638 < count__36629_36637)){
var req_36639 = cljs.core._nth.call(null,chunk__36628_36636,i__36630_36638);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36639,prov);

var G__36640 = seq__36627_36635;
var G__36641 = chunk__36628_36636;
var G__36642 = count__36629_36637;
var G__36643 = (i__36630_36638 + (1));
seq__36627_36635 = G__36640;
chunk__36628_36636 = G__36641;
count__36629_36637 = G__36642;
i__36630_36638 = G__36643;
continue;
} else {
var temp__4657__auto___36644 = cljs.core.seq.call(null,seq__36627_36635);
if(temp__4657__auto___36644){
var seq__36627_36645__$1 = temp__4657__auto___36644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36627_36645__$1)){
var c__31063__auto___36646 = cljs.core.chunk_first.call(null,seq__36627_36645__$1);
var G__36647 = cljs.core.chunk_rest.call(null,seq__36627_36645__$1);
var G__36648 = c__31063__auto___36646;
var G__36649 = cljs.core.count.call(null,c__31063__auto___36646);
var G__36650 = (0);
seq__36627_36635 = G__36647;
chunk__36628_36636 = G__36648;
count__36629_36637 = G__36649;
i__36630_36638 = G__36650;
continue;
} else {
var req_36651 = cljs.core.first.call(null,seq__36627_36645__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36651,prov);

var G__36652 = cljs.core.next.call(null,seq__36627_36645__$1);
var G__36653 = null;
var G__36654 = (0);
var G__36655 = (0);
seq__36627_36635 = G__36652;
chunk__36628_36636 = G__36653;
count__36629_36637 = G__36654;
i__36630_36638 = G__36655;
continue;
}
} else {
}
}
break;
}

var G__36656 = seq__36623;
var G__36657 = chunk__36624;
var G__36658 = count__36625;
var G__36659 = (i__36626 + (1));
seq__36623 = G__36656;
chunk__36624 = G__36657;
count__36625 = G__36658;
i__36626 = G__36659;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36623);
if(temp__4657__auto__){
var seq__36623__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36623__$1)){
var c__31063__auto__ = cljs.core.chunk_first.call(null,seq__36623__$1);
var G__36660 = cljs.core.chunk_rest.call(null,seq__36623__$1);
var G__36661 = c__31063__auto__;
var G__36662 = cljs.core.count.call(null,c__31063__auto__);
var G__36663 = (0);
seq__36623 = G__36660;
chunk__36624 = G__36661;
count__36625 = G__36662;
i__36626 = G__36663;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36623__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36631_36664 = cljs.core.seq.call(null,requires);
var chunk__36632_36665 = null;
var count__36633_36666 = (0);
var i__36634_36667 = (0);
while(true){
if((i__36634_36667 < count__36633_36666)){
var req_36668 = cljs.core._nth.call(null,chunk__36632_36665,i__36634_36667);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36668,prov);

var G__36669 = seq__36631_36664;
var G__36670 = chunk__36632_36665;
var G__36671 = count__36633_36666;
var G__36672 = (i__36634_36667 + (1));
seq__36631_36664 = G__36669;
chunk__36632_36665 = G__36670;
count__36633_36666 = G__36671;
i__36634_36667 = G__36672;
continue;
} else {
var temp__4657__auto___36673__$1 = cljs.core.seq.call(null,seq__36631_36664);
if(temp__4657__auto___36673__$1){
var seq__36631_36674__$1 = temp__4657__auto___36673__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36631_36674__$1)){
var c__31063__auto___36675 = cljs.core.chunk_first.call(null,seq__36631_36674__$1);
var G__36676 = cljs.core.chunk_rest.call(null,seq__36631_36674__$1);
var G__36677 = c__31063__auto___36675;
var G__36678 = cljs.core.count.call(null,c__31063__auto___36675);
var G__36679 = (0);
seq__36631_36664 = G__36676;
chunk__36632_36665 = G__36677;
count__36633_36666 = G__36678;
i__36634_36667 = G__36679;
continue;
} else {
var req_36680 = cljs.core.first.call(null,seq__36631_36674__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36680,prov);

var G__36681 = cljs.core.next.call(null,seq__36631_36674__$1);
var G__36682 = null;
var G__36683 = (0);
var G__36684 = (0);
seq__36631_36664 = G__36681;
chunk__36632_36665 = G__36682;
count__36633_36666 = G__36683;
i__36634_36667 = G__36684;
continue;
}
} else {
}
}
break;
}

var G__36685 = cljs.core.next.call(null,seq__36623__$1);
var G__36686 = null;
var G__36687 = (0);
var G__36688 = (0);
seq__36623 = G__36685;
chunk__36624 = G__36686;
count__36625 = G__36687;
i__36626 = G__36688;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36693_36697 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36694_36698 = null;
var count__36695_36699 = (0);
var i__36696_36700 = (0);
while(true){
if((i__36696_36700 < count__36695_36699)){
var ns_36701 = cljs.core._nth.call(null,chunk__36694_36698,i__36696_36700);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36701);

var G__36702 = seq__36693_36697;
var G__36703 = chunk__36694_36698;
var G__36704 = count__36695_36699;
var G__36705 = (i__36696_36700 + (1));
seq__36693_36697 = G__36702;
chunk__36694_36698 = G__36703;
count__36695_36699 = G__36704;
i__36696_36700 = G__36705;
continue;
} else {
var temp__4657__auto___36706 = cljs.core.seq.call(null,seq__36693_36697);
if(temp__4657__auto___36706){
var seq__36693_36707__$1 = temp__4657__auto___36706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36693_36707__$1)){
var c__31063__auto___36708 = cljs.core.chunk_first.call(null,seq__36693_36707__$1);
var G__36709 = cljs.core.chunk_rest.call(null,seq__36693_36707__$1);
var G__36710 = c__31063__auto___36708;
var G__36711 = cljs.core.count.call(null,c__31063__auto___36708);
var G__36712 = (0);
seq__36693_36697 = G__36709;
chunk__36694_36698 = G__36710;
count__36695_36699 = G__36711;
i__36696_36700 = G__36712;
continue;
} else {
var ns_36713 = cljs.core.first.call(null,seq__36693_36707__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36713);

var G__36714 = cljs.core.next.call(null,seq__36693_36707__$1);
var G__36715 = null;
var G__36716 = (0);
var G__36717 = (0);
seq__36693_36697 = G__36714;
chunk__36694_36698 = G__36715;
count__36695_36699 = G__36716;
i__36696_36700 = G__36717;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30244__auto__ = goog.require__;
if(cljs.core.truth_(or__30244__auto__)){
return or__30244__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__36718__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36719__i = 0, G__36719__a = new Array(arguments.length -  0);
while (G__36719__i < G__36719__a.length) {G__36719__a[G__36719__i] = arguments[G__36719__i + 0]; ++G__36719__i;}
  args = new cljs.core.IndexedSeq(G__36719__a,0);
} 
return G__36718__delegate.call(this,args);};
G__36718.cljs$lang$maxFixedArity = 0;
G__36718.cljs$lang$applyTo = (function (arglist__36720){
var args = cljs.core.seq(arglist__36720);
return G__36718__delegate(args);
});
G__36718.cljs$core$IFn$_invoke$arity$variadic = G__36718__delegate;
return G__36718;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36722 = cljs.core._EQ_;
var expr__36723 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36722.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36723))){
var path_parts = ((function (pred__36722,expr__36723){
return (function (p1__36721_SHARP_){
return clojure.string.split.call(null,p1__36721_SHARP_,/[\/\\]/);
});})(pred__36722,expr__36723))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__36722,expr__36723){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36725){if((e36725 instanceof Error)){
var e = e36725;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36725;

}
}})());
});
;})(path_parts,sep,root,pred__36722,expr__36723))
} else {
if(cljs.core.truth_(pred__36722.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36723))){
return ((function (pred__36722,expr__36723){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__36722,expr__36723){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__36722,expr__36723))
);

return deferred.addErrback(((function (deferred,pred__36722,expr__36723){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__36722,expr__36723))
);
});
;})(pred__36722,expr__36723))
} else {
return ((function (pred__36722,expr__36723){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36722,expr__36723))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36726,callback){
var map__36729 = p__36726;
var map__36729__$1 = ((((!((map__36729 == null)))?((((map__36729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36729):map__36729);
var file_msg = map__36729__$1;
var request_url = cljs.core.get.call(null,map__36729__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36729,map__36729__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36729,map__36729__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto__){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto__){
return (function (state_36753){
var state_val_36754 = (state_36753[(1)]);
if((state_val_36754 === (7))){
var inst_36749 = (state_36753[(2)]);
var state_36753__$1 = state_36753;
var statearr_36755_36775 = state_36753__$1;
(statearr_36755_36775[(2)] = inst_36749);

(statearr_36755_36775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (1))){
var state_36753__$1 = state_36753;
var statearr_36756_36776 = state_36753__$1;
(statearr_36756_36776[(2)] = null);

(statearr_36756_36776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (4))){
var inst_36733 = (state_36753[(7)]);
var inst_36733__$1 = (state_36753[(2)]);
var state_36753__$1 = (function (){var statearr_36757 = state_36753;
(statearr_36757[(7)] = inst_36733__$1);

return statearr_36757;
})();
if(cljs.core.truth_(inst_36733__$1)){
var statearr_36758_36777 = state_36753__$1;
(statearr_36758_36777[(1)] = (5));

} else {
var statearr_36759_36778 = state_36753__$1;
(statearr_36759_36778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (6))){
var state_36753__$1 = state_36753;
var statearr_36760_36779 = state_36753__$1;
(statearr_36760_36779[(2)] = null);

(statearr_36760_36779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (3))){
var inst_36751 = (state_36753[(2)]);
var state_36753__$1 = state_36753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36753__$1,inst_36751);
} else {
if((state_val_36754 === (2))){
var state_36753__$1 = state_36753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36753__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36754 === (11))){
var inst_36745 = (state_36753[(2)]);
var state_36753__$1 = (function (){var statearr_36761 = state_36753;
(statearr_36761[(8)] = inst_36745);

return statearr_36761;
})();
var statearr_36762_36780 = state_36753__$1;
(statearr_36762_36780[(2)] = null);

(statearr_36762_36780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (9))){
var inst_36737 = (state_36753[(9)]);
var inst_36739 = (state_36753[(10)]);
var inst_36741 = inst_36739.call(null,inst_36737);
var state_36753__$1 = state_36753;
var statearr_36763_36781 = state_36753__$1;
(statearr_36763_36781[(2)] = inst_36741);

(statearr_36763_36781[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (5))){
var inst_36733 = (state_36753[(7)]);
var inst_36735 = figwheel.client.file_reloading.blocking_load.call(null,inst_36733);
var state_36753__$1 = state_36753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36753__$1,(8),inst_36735);
} else {
if((state_val_36754 === (10))){
var inst_36737 = (state_36753[(9)]);
var inst_36743 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36737);
var state_36753__$1 = state_36753;
var statearr_36764_36782 = state_36753__$1;
(statearr_36764_36782[(2)] = inst_36743);

(statearr_36764_36782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (8))){
var inst_36739 = (state_36753[(10)]);
var inst_36733 = (state_36753[(7)]);
var inst_36737 = (state_36753[(2)]);
var inst_36738 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36739__$1 = cljs.core.get.call(null,inst_36738,inst_36733);
var state_36753__$1 = (function (){var statearr_36765 = state_36753;
(statearr_36765[(9)] = inst_36737);

(statearr_36765[(10)] = inst_36739__$1);

return statearr_36765;
})();
if(cljs.core.truth_(inst_36739__$1)){
var statearr_36766_36783 = state_36753__$1;
(statearr_36766_36783[(1)] = (9));

} else {
var statearr_36767_36784 = state_36753__$1;
(statearr_36767_36784[(1)] = (10));

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
});})(c__33387__auto__))
;
return ((function (switch__33275__auto__,c__33387__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33276__auto__ = null;
var figwheel$client$file_reloading$state_machine__33276__auto____0 = (function (){
var statearr_36771 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36771[(0)] = figwheel$client$file_reloading$state_machine__33276__auto__);

(statearr_36771[(1)] = (1));

return statearr_36771;
});
var figwheel$client$file_reloading$state_machine__33276__auto____1 = (function (state_36753){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_36753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e36772){if((e36772 instanceof Object)){
var ex__33279__auto__ = e36772;
var statearr_36773_36785 = state_36753;
(statearr_36773_36785[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36786 = state_36753;
state_36753 = G__36786;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33276__auto__ = function(state_36753){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33276__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33276__auto____1.call(this,state_36753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33276__auto____0;
figwheel$client$file_reloading$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33276__auto____1;
return figwheel$client$file_reloading$state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto__))
})();
var state__33389__auto__ = (function (){var statearr_36774 = f__33388__auto__.call(null);
(statearr_36774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto__);

return statearr_36774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto__))
);

return c__33387__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36787,callback){
var map__36790 = p__36787;
var map__36790__$1 = ((((!((map__36790 == null)))?((((map__36790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36790):map__36790);
var file_msg = map__36790__$1;
var namespace = cljs.core.get.call(null,map__36790__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36790,map__36790__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36790,map__36790__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36792){
var map__36795 = p__36792;
var map__36795__$1 = ((((!((map__36795 == null)))?((((map__36795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36795):map__36795);
var file_msg = map__36795__$1;
var namespace = cljs.core.get.call(null,map__36795__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30232__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__30232__auto__){
var or__30244__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30244__auto__)){
return or__30244__auto__;
} else {
var or__30244__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30244__auto____$1)){
return or__30244__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30232__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36797,callback){
var map__36800 = p__36797;
var map__36800__$1 = ((((!((map__36800 == null)))?((((map__36800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36800):map__36800);
var file_msg = map__36800__$1;
var request_url = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33387__auto___36904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto___36904,out){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto___36904,out){
return (function (state_36886){
var state_val_36887 = (state_36886[(1)]);
if((state_val_36887 === (1))){
var inst_36860 = cljs.core.seq.call(null,files);
var inst_36861 = cljs.core.first.call(null,inst_36860);
var inst_36862 = cljs.core.next.call(null,inst_36860);
var inst_36863 = files;
var state_36886__$1 = (function (){var statearr_36888 = state_36886;
(statearr_36888[(7)] = inst_36861);

(statearr_36888[(8)] = inst_36863);

(statearr_36888[(9)] = inst_36862);

return statearr_36888;
})();
var statearr_36889_36905 = state_36886__$1;
(statearr_36889_36905[(2)] = null);

(statearr_36889_36905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36887 === (2))){
var inst_36869 = (state_36886[(10)]);
var inst_36863 = (state_36886[(8)]);
var inst_36868 = cljs.core.seq.call(null,inst_36863);
var inst_36869__$1 = cljs.core.first.call(null,inst_36868);
var inst_36870 = cljs.core.next.call(null,inst_36868);
var inst_36871 = (inst_36869__$1 == null);
var inst_36872 = cljs.core.not.call(null,inst_36871);
var state_36886__$1 = (function (){var statearr_36890 = state_36886;
(statearr_36890[(10)] = inst_36869__$1);

(statearr_36890[(11)] = inst_36870);

return statearr_36890;
})();
if(inst_36872){
var statearr_36891_36906 = state_36886__$1;
(statearr_36891_36906[(1)] = (4));

} else {
var statearr_36892_36907 = state_36886__$1;
(statearr_36892_36907[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36887 === (3))){
var inst_36884 = (state_36886[(2)]);
var state_36886__$1 = state_36886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36886__$1,inst_36884);
} else {
if((state_val_36887 === (4))){
var inst_36869 = (state_36886[(10)]);
var inst_36874 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36869);
var state_36886__$1 = state_36886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36886__$1,(7),inst_36874);
} else {
if((state_val_36887 === (5))){
var inst_36880 = cljs.core.async.close_BANG_.call(null,out);
var state_36886__$1 = state_36886;
var statearr_36893_36908 = state_36886__$1;
(statearr_36893_36908[(2)] = inst_36880);

(statearr_36893_36908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36887 === (6))){
var inst_36882 = (state_36886[(2)]);
var state_36886__$1 = state_36886;
var statearr_36894_36909 = state_36886__$1;
(statearr_36894_36909[(2)] = inst_36882);

(statearr_36894_36909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36887 === (7))){
var inst_36870 = (state_36886[(11)]);
var inst_36876 = (state_36886[(2)]);
var inst_36877 = cljs.core.async.put_BANG_.call(null,out,inst_36876);
var inst_36863 = inst_36870;
var state_36886__$1 = (function (){var statearr_36895 = state_36886;
(statearr_36895[(12)] = inst_36877);

(statearr_36895[(8)] = inst_36863);

return statearr_36895;
})();
var statearr_36896_36910 = state_36886__$1;
(statearr_36896_36910[(2)] = null);

(statearr_36896_36910[(1)] = (2));


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
});})(c__33387__auto___36904,out))
;
return ((function (switch__33275__auto__,c__33387__auto___36904,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto____0 = (function (){
var statearr_36900 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36900[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto__);

(statearr_36900[(1)] = (1));

return statearr_36900;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto____1 = (function (state_36886){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_36886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e36901){if((e36901 instanceof Object)){
var ex__33279__auto__ = e36901;
var statearr_36902_36911 = state_36886;
(statearr_36902_36911[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36912 = state_36886;
state_36886 = G__36912;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto__ = function(state_36886){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto____1.call(this,state_36886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto___36904,out))
})();
var state__33389__auto__ = (function (){var statearr_36903 = f__33388__auto__.call(null);
(statearr_36903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto___36904);

return statearr_36903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto___36904,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36913,opts){
var map__36917 = p__36913;
var map__36917__$1 = ((((!((map__36917 == null)))?((((map__36917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36917):map__36917);
var eval_body = cljs.core.get.call(null,map__36917__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36917__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30232__auto__ = eval_body;
if(cljs.core.truth_(and__30232__auto__)){
return typeof eval_body === 'string';
} else {
return and__30232__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36919){var e = e36919;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36920_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36920_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36929){
var vec__36930 = p__36929;
var k = cljs.core.nth.call(null,vec__36930,(0),null);
var v = cljs.core.nth.call(null,vec__36930,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36933){
var vec__36934 = p__36933;
var k = cljs.core.nth.call(null,vec__36934,(0),null);
var v = cljs.core.nth.call(null,vec__36934,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36940,p__36941){
var map__37189 = p__36940;
var map__37189__$1 = ((((!((map__37189 == null)))?((((map__37189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37189):map__37189);
var opts = map__37189__$1;
var before_jsload = cljs.core.get.call(null,map__37189__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37189__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37189__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37190 = p__36941;
var map__37190__$1 = ((((!((map__37190 == null)))?((((map__37190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37190.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37190):map__37190);
var msg = map__37190__$1;
var files = cljs.core.get.call(null,map__37190__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37190__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37190__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37344){
var state_val_37345 = (state_37344[(1)]);
if((state_val_37345 === (7))){
var inst_37206 = (state_37344[(7)]);
var inst_37205 = (state_37344[(8)]);
var inst_37204 = (state_37344[(9)]);
var inst_37207 = (state_37344[(10)]);
var inst_37212 = cljs.core._nth.call(null,inst_37205,inst_37207);
var inst_37213 = figwheel.client.file_reloading.eval_body.call(null,inst_37212,opts);
var inst_37214 = (inst_37207 + (1));
var tmp37346 = inst_37206;
var tmp37347 = inst_37205;
var tmp37348 = inst_37204;
var inst_37204__$1 = tmp37348;
var inst_37205__$1 = tmp37347;
var inst_37206__$1 = tmp37346;
var inst_37207__$1 = inst_37214;
var state_37344__$1 = (function (){var statearr_37349 = state_37344;
(statearr_37349[(7)] = inst_37206__$1);

(statearr_37349[(8)] = inst_37205__$1);

(statearr_37349[(9)] = inst_37204__$1);

(statearr_37349[(10)] = inst_37207__$1);

(statearr_37349[(11)] = inst_37213);

return statearr_37349;
})();
var statearr_37350_37436 = state_37344__$1;
(statearr_37350_37436[(2)] = null);

(statearr_37350_37436[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (20))){
var inst_37247 = (state_37344[(12)]);
var inst_37255 = figwheel.client.file_reloading.sort_files.call(null,inst_37247);
var state_37344__$1 = state_37344;
var statearr_37351_37437 = state_37344__$1;
(statearr_37351_37437[(2)] = inst_37255);

(statearr_37351_37437[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (27))){
var state_37344__$1 = state_37344;
var statearr_37352_37438 = state_37344__$1;
(statearr_37352_37438[(2)] = null);

(statearr_37352_37438[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (1))){
var inst_37196 = (state_37344[(13)]);
var inst_37193 = before_jsload.call(null,files);
var inst_37194 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37195 = (function (){return ((function (inst_37196,inst_37193,inst_37194,state_val_37345,c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36937_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36937_SHARP_);
});
;})(inst_37196,inst_37193,inst_37194,state_val_37345,c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37196__$1 = cljs.core.filter.call(null,inst_37195,files);
var inst_37197 = cljs.core.not_empty.call(null,inst_37196__$1);
var state_37344__$1 = (function (){var statearr_37353 = state_37344;
(statearr_37353[(13)] = inst_37196__$1);

(statearr_37353[(14)] = inst_37194);

(statearr_37353[(15)] = inst_37193);

return statearr_37353;
})();
if(cljs.core.truth_(inst_37197)){
var statearr_37354_37439 = state_37344__$1;
(statearr_37354_37439[(1)] = (2));

} else {
var statearr_37355_37440 = state_37344__$1;
(statearr_37355_37440[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (24))){
var state_37344__$1 = state_37344;
var statearr_37356_37441 = state_37344__$1;
(statearr_37356_37441[(2)] = null);

(statearr_37356_37441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (39))){
var inst_37297 = (state_37344[(16)]);
var state_37344__$1 = state_37344;
var statearr_37357_37442 = state_37344__$1;
(statearr_37357_37442[(2)] = inst_37297);

(statearr_37357_37442[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (46))){
var inst_37339 = (state_37344[(2)]);
var state_37344__$1 = state_37344;
var statearr_37358_37443 = state_37344__$1;
(statearr_37358_37443[(2)] = inst_37339);

(statearr_37358_37443[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (4))){
var inst_37241 = (state_37344[(2)]);
var inst_37242 = cljs.core.List.EMPTY;
var inst_37243 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37242);
var inst_37244 = (function (){return ((function (inst_37241,inst_37242,inst_37243,state_val_37345,c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36938_SHARP_){
var and__30232__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36938_SHARP_);
if(cljs.core.truth_(and__30232__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36938_SHARP_));
} else {
return and__30232__auto__;
}
});
;})(inst_37241,inst_37242,inst_37243,state_val_37345,c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37245 = cljs.core.filter.call(null,inst_37244,files);
var inst_37246 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37247 = cljs.core.concat.call(null,inst_37245,inst_37246);
var state_37344__$1 = (function (){var statearr_37359 = state_37344;
(statearr_37359[(17)] = inst_37243);

(statearr_37359[(12)] = inst_37247);

(statearr_37359[(18)] = inst_37241);

return statearr_37359;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37360_37444 = state_37344__$1;
(statearr_37360_37444[(1)] = (16));

} else {
var statearr_37361_37445 = state_37344__$1;
(statearr_37361_37445[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (15))){
var inst_37231 = (state_37344[(2)]);
var state_37344__$1 = state_37344;
var statearr_37362_37446 = state_37344__$1;
(statearr_37362_37446[(2)] = inst_37231);

(statearr_37362_37446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (21))){
var inst_37257 = (state_37344[(19)]);
var inst_37257__$1 = (state_37344[(2)]);
var inst_37258 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37257__$1);
var state_37344__$1 = (function (){var statearr_37363 = state_37344;
(statearr_37363[(19)] = inst_37257__$1);

return statearr_37363;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37344__$1,(22),inst_37258);
} else {
if((state_val_37345 === (31))){
var inst_37342 = (state_37344[(2)]);
var state_37344__$1 = state_37344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37344__$1,inst_37342);
} else {
if((state_val_37345 === (32))){
var inst_37297 = (state_37344[(16)]);
var inst_37302 = inst_37297.cljs$lang$protocol_mask$partition0$;
var inst_37303 = (inst_37302 & (64));
var inst_37304 = inst_37297.cljs$core$ISeq$;
var inst_37305 = (cljs.core.PROTOCOL_SENTINEL === inst_37304);
var inst_37306 = (inst_37303) || (inst_37305);
var state_37344__$1 = state_37344;
if(cljs.core.truth_(inst_37306)){
var statearr_37364_37447 = state_37344__$1;
(statearr_37364_37447[(1)] = (35));

} else {
var statearr_37365_37448 = state_37344__$1;
(statearr_37365_37448[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (40))){
var inst_37319 = (state_37344[(20)]);
var inst_37318 = (state_37344[(2)]);
var inst_37319__$1 = cljs.core.get.call(null,inst_37318,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37320 = cljs.core.get.call(null,inst_37318,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37321 = cljs.core.not_empty.call(null,inst_37319__$1);
var state_37344__$1 = (function (){var statearr_37366 = state_37344;
(statearr_37366[(21)] = inst_37320);

(statearr_37366[(20)] = inst_37319__$1);

return statearr_37366;
})();
if(cljs.core.truth_(inst_37321)){
var statearr_37367_37449 = state_37344__$1;
(statearr_37367_37449[(1)] = (41));

} else {
var statearr_37368_37450 = state_37344__$1;
(statearr_37368_37450[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (33))){
var state_37344__$1 = state_37344;
var statearr_37369_37451 = state_37344__$1;
(statearr_37369_37451[(2)] = false);

(statearr_37369_37451[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (13))){
var inst_37217 = (state_37344[(22)]);
var inst_37221 = cljs.core.chunk_first.call(null,inst_37217);
var inst_37222 = cljs.core.chunk_rest.call(null,inst_37217);
var inst_37223 = cljs.core.count.call(null,inst_37221);
var inst_37204 = inst_37222;
var inst_37205 = inst_37221;
var inst_37206 = inst_37223;
var inst_37207 = (0);
var state_37344__$1 = (function (){var statearr_37370 = state_37344;
(statearr_37370[(7)] = inst_37206);

(statearr_37370[(8)] = inst_37205);

(statearr_37370[(9)] = inst_37204);

(statearr_37370[(10)] = inst_37207);

return statearr_37370;
})();
var statearr_37371_37452 = state_37344__$1;
(statearr_37371_37452[(2)] = null);

(statearr_37371_37452[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (22))){
var inst_37261 = (state_37344[(23)]);
var inst_37260 = (state_37344[(24)]);
var inst_37265 = (state_37344[(25)]);
var inst_37257 = (state_37344[(19)]);
var inst_37260__$1 = (state_37344[(2)]);
var inst_37261__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37260__$1);
var inst_37262 = (function (){var all_files = inst_37257;
var res_SINGLEQUOTE_ = inst_37260__$1;
var res = inst_37261__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37261,inst_37260,inst_37265,inst_37257,inst_37260__$1,inst_37261__$1,state_val_37345,c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36939_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36939_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37261,inst_37260,inst_37265,inst_37257,inst_37260__$1,inst_37261__$1,state_val_37345,c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37263 = cljs.core.filter.call(null,inst_37262,inst_37260__$1);
var inst_37264 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37265__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37264);
var inst_37266 = cljs.core.not_empty.call(null,inst_37265__$1);
var state_37344__$1 = (function (){var statearr_37372 = state_37344;
(statearr_37372[(23)] = inst_37261__$1);

(statearr_37372[(26)] = inst_37263);

(statearr_37372[(24)] = inst_37260__$1);

(statearr_37372[(25)] = inst_37265__$1);

return statearr_37372;
})();
if(cljs.core.truth_(inst_37266)){
var statearr_37373_37453 = state_37344__$1;
(statearr_37373_37453[(1)] = (23));

} else {
var statearr_37374_37454 = state_37344__$1;
(statearr_37374_37454[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (36))){
var state_37344__$1 = state_37344;
var statearr_37375_37455 = state_37344__$1;
(statearr_37375_37455[(2)] = false);

(statearr_37375_37455[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (41))){
var inst_37319 = (state_37344[(20)]);
var inst_37323 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37324 = cljs.core.map.call(null,inst_37323,inst_37319);
var inst_37325 = cljs.core.pr_str.call(null,inst_37324);
var inst_37326 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37325)].join('');
var inst_37327 = figwheel.client.utils.log.call(null,inst_37326);
var state_37344__$1 = state_37344;
var statearr_37376_37456 = state_37344__$1;
(statearr_37376_37456[(2)] = inst_37327);

(statearr_37376_37456[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (43))){
var inst_37320 = (state_37344[(21)]);
var inst_37330 = (state_37344[(2)]);
var inst_37331 = cljs.core.not_empty.call(null,inst_37320);
var state_37344__$1 = (function (){var statearr_37377 = state_37344;
(statearr_37377[(27)] = inst_37330);

return statearr_37377;
})();
if(cljs.core.truth_(inst_37331)){
var statearr_37378_37457 = state_37344__$1;
(statearr_37378_37457[(1)] = (44));

} else {
var statearr_37379_37458 = state_37344__$1;
(statearr_37379_37458[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (29))){
var inst_37261 = (state_37344[(23)]);
var inst_37263 = (state_37344[(26)]);
var inst_37260 = (state_37344[(24)]);
var inst_37265 = (state_37344[(25)]);
var inst_37257 = (state_37344[(19)]);
var inst_37297 = (state_37344[(16)]);
var inst_37293 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37296 = (function (){var all_files = inst_37257;
var res_SINGLEQUOTE_ = inst_37260;
var res = inst_37261;
var files_not_loaded = inst_37263;
var dependencies_that_loaded = inst_37265;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37261,inst_37263,inst_37260,inst_37265,inst_37257,inst_37297,inst_37293,state_val_37345,c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37295){
var map__37380 = p__37295;
var map__37380__$1 = ((((!((map__37380 == null)))?((((map__37380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37380):map__37380);
var namespace = cljs.core.get.call(null,map__37380__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37261,inst_37263,inst_37260,inst_37265,inst_37257,inst_37297,inst_37293,state_val_37345,c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37297__$1 = cljs.core.group_by.call(null,inst_37296,inst_37263);
var inst_37299 = (inst_37297__$1 == null);
var inst_37300 = cljs.core.not.call(null,inst_37299);
var state_37344__$1 = (function (){var statearr_37382 = state_37344;
(statearr_37382[(28)] = inst_37293);

(statearr_37382[(16)] = inst_37297__$1);

return statearr_37382;
})();
if(inst_37300){
var statearr_37383_37459 = state_37344__$1;
(statearr_37383_37459[(1)] = (32));

} else {
var statearr_37384_37460 = state_37344__$1;
(statearr_37384_37460[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (44))){
var inst_37320 = (state_37344[(21)]);
var inst_37333 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37320);
var inst_37334 = cljs.core.pr_str.call(null,inst_37333);
var inst_37335 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37334)].join('');
var inst_37336 = figwheel.client.utils.log.call(null,inst_37335);
var state_37344__$1 = state_37344;
var statearr_37385_37461 = state_37344__$1;
(statearr_37385_37461[(2)] = inst_37336);

(statearr_37385_37461[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (6))){
var inst_37238 = (state_37344[(2)]);
var state_37344__$1 = state_37344;
var statearr_37386_37462 = state_37344__$1;
(statearr_37386_37462[(2)] = inst_37238);

(statearr_37386_37462[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (28))){
var inst_37263 = (state_37344[(26)]);
var inst_37290 = (state_37344[(2)]);
var inst_37291 = cljs.core.not_empty.call(null,inst_37263);
var state_37344__$1 = (function (){var statearr_37387 = state_37344;
(statearr_37387[(29)] = inst_37290);

return statearr_37387;
})();
if(cljs.core.truth_(inst_37291)){
var statearr_37388_37463 = state_37344__$1;
(statearr_37388_37463[(1)] = (29));

} else {
var statearr_37389_37464 = state_37344__$1;
(statearr_37389_37464[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (25))){
var inst_37261 = (state_37344[(23)]);
var inst_37277 = (state_37344[(2)]);
var inst_37278 = cljs.core.not_empty.call(null,inst_37261);
var state_37344__$1 = (function (){var statearr_37390 = state_37344;
(statearr_37390[(30)] = inst_37277);

return statearr_37390;
})();
if(cljs.core.truth_(inst_37278)){
var statearr_37391_37465 = state_37344__$1;
(statearr_37391_37465[(1)] = (26));

} else {
var statearr_37392_37466 = state_37344__$1;
(statearr_37392_37466[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (34))){
var inst_37313 = (state_37344[(2)]);
var state_37344__$1 = state_37344;
if(cljs.core.truth_(inst_37313)){
var statearr_37393_37467 = state_37344__$1;
(statearr_37393_37467[(1)] = (38));

} else {
var statearr_37394_37468 = state_37344__$1;
(statearr_37394_37468[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (17))){
var state_37344__$1 = state_37344;
var statearr_37395_37469 = state_37344__$1;
(statearr_37395_37469[(2)] = recompile_dependents);

(statearr_37395_37469[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (3))){
var state_37344__$1 = state_37344;
var statearr_37396_37470 = state_37344__$1;
(statearr_37396_37470[(2)] = null);

(statearr_37396_37470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (12))){
var inst_37234 = (state_37344[(2)]);
var state_37344__$1 = state_37344;
var statearr_37397_37471 = state_37344__$1;
(statearr_37397_37471[(2)] = inst_37234);

(statearr_37397_37471[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (2))){
var inst_37196 = (state_37344[(13)]);
var inst_37203 = cljs.core.seq.call(null,inst_37196);
var inst_37204 = inst_37203;
var inst_37205 = null;
var inst_37206 = (0);
var inst_37207 = (0);
var state_37344__$1 = (function (){var statearr_37398 = state_37344;
(statearr_37398[(7)] = inst_37206);

(statearr_37398[(8)] = inst_37205);

(statearr_37398[(9)] = inst_37204);

(statearr_37398[(10)] = inst_37207);

return statearr_37398;
})();
var statearr_37399_37472 = state_37344__$1;
(statearr_37399_37472[(2)] = null);

(statearr_37399_37472[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (23))){
var inst_37261 = (state_37344[(23)]);
var inst_37263 = (state_37344[(26)]);
var inst_37260 = (state_37344[(24)]);
var inst_37265 = (state_37344[(25)]);
var inst_37257 = (state_37344[(19)]);
var inst_37268 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37270 = (function (){var all_files = inst_37257;
var res_SINGLEQUOTE_ = inst_37260;
var res = inst_37261;
var files_not_loaded = inst_37263;
var dependencies_that_loaded = inst_37265;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37261,inst_37263,inst_37260,inst_37265,inst_37257,inst_37268,state_val_37345,c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37269){
var map__37400 = p__37269;
var map__37400__$1 = ((((!((map__37400 == null)))?((((map__37400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37400):map__37400);
var request_url = cljs.core.get.call(null,map__37400__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37261,inst_37263,inst_37260,inst_37265,inst_37257,inst_37268,state_val_37345,c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37271 = cljs.core.reverse.call(null,inst_37265);
var inst_37272 = cljs.core.map.call(null,inst_37270,inst_37271);
var inst_37273 = cljs.core.pr_str.call(null,inst_37272);
var inst_37274 = figwheel.client.utils.log.call(null,inst_37273);
var state_37344__$1 = (function (){var statearr_37402 = state_37344;
(statearr_37402[(31)] = inst_37268);

return statearr_37402;
})();
var statearr_37403_37473 = state_37344__$1;
(statearr_37403_37473[(2)] = inst_37274);

(statearr_37403_37473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (35))){
var state_37344__$1 = state_37344;
var statearr_37404_37474 = state_37344__$1;
(statearr_37404_37474[(2)] = true);

(statearr_37404_37474[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (19))){
var inst_37247 = (state_37344[(12)]);
var inst_37253 = figwheel.client.file_reloading.expand_files.call(null,inst_37247);
var state_37344__$1 = state_37344;
var statearr_37405_37475 = state_37344__$1;
(statearr_37405_37475[(2)] = inst_37253);

(statearr_37405_37475[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (11))){
var state_37344__$1 = state_37344;
var statearr_37406_37476 = state_37344__$1;
(statearr_37406_37476[(2)] = null);

(statearr_37406_37476[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (9))){
var inst_37236 = (state_37344[(2)]);
var state_37344__$1 = state_37344;
var statearr_37407_37477 = state_37344__$1;
(statearr_37407_37477[(2)] = inst_37236);

(statearr_37407_37477[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (5))){
var inst_37206 = (state_37344[(7)]);
var inst_37207 = (state_37344[(10)]);
var inst_37209 = (inst_37207 < inst_37206);
var inst_37210 = inst_37209;
var state_37344__$1 = state_37344;
if(cljs.core.truth_(inst_37210)){
var statearr_37408_37478 = state_37344__$1;
(statearr_37408_37478[(1)] = (7));

} else {
var statearr_37409_37479 = state_37344__$1;
(statearr_37409_37479[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (14))){
var inst_37217 = (state_37344[(22)]);
var inst_37226 = cljs.core.first.call(null,inst_37217);
var inst_37227 = figwheel.client.file_reloading.eval_body.call(null,inst_37226,opts);
var inst_37228 = cljs.core.next.call(null,inst_37217);
var inst_37204 = inst_37228;
var inst_37205 = null;
var inst_37206 = (0);
var inst_37207 = (0);
var state_37344__$1 = (function (){var statearr_37410 = state_37344;
(statearr_37410[(7)] = inst_37206);

(statearr_37410[(8)] = inst_37205);

(statearr_37410[(9)] = inst_37204);

(statearr_37410[(10)] = inst_37207);

(statearr_37410[(32)] = inst_37227);

return statearr_37410;
})();
var statearr_37411_37480 = state_37344__$1;
(statearr_37411_37480[(2)] = null);

(statearr_37411_37480[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (45))){
var state_37344__$1 = state_37344;
var statearr_37412_37481 = state_37344__$1;
(statearr_37412_37481[(2)] = null);

(statearr_37412_37481[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (26))){
var inst_37261 = (state_37344[(23)]);
var inst_37263 = (state_37344[(26)]);
var inst_37260 = (state_37344[(24)]);
var inst_37265 = (state_37344[(25)]);
var inst_37257 = (state_37344[(19)]);
var inst_37280 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37282 = (function (){var all_files = inst_37257;
var res_SINGLEQUOTE_ = inst_37260;
var res = inst_37261;
var files_not_loaded = inst_37263;
var dependencies_that_loaded = inst_37265;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37261,inst_37263,inst_37260,inst_37265,inst_37257,inst_37280,state_val_37345,c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37281){
var map__37413 = p__37281;
var map__37413__$1 = ((((!((map__37413 == null)))?((((map__37413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37413):map__37413);
var namespace = cljs.core.get.call(null,map__37413__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37413__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37261,inst_37263,inst_37260,inst_37265,inst_37257,inst_37280,state_val_37345,c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37283 = cljs.core.map.call(null,inst_37282,inst_37261);
var inst_37284 = cljs.core.pr_str.call(null,inst_37283);
var inst_37285 = figwheel.client.utils.log.call(null,inst_37284);
var inst_37286 = (function (){var all_files = inst_37257;
var res_SINGLEQUOTE_ = inst_37260;
var res = inst_37261;
var files_not_loaded = inst_37263;
var dependencies_that_loaded = inst_37265;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37261,inst_37263,inst_37260,inst_37265,inst_37257,inst_37280,inst_37282,inst_37283,inst_37284,inst_37285,state_val_37345,c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37261,inst_37263,inst_37260,inst_37265,inst_37257,inst_37280,inst_37282,inst_37283,inst_37284,inst_37285,state_val_37345,c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37287 = setTimeout(inst_37286,(10));
var state_37344__$1 = (function (){var statearr_37415 = state_37344;
(statearr_37415[(33)] = inst_37285);

(statearr_37415[(34)] = inst_37280);

return statearr_37415;
})();
var statearr_37416_37482 = state_37344__$1;
(statearr_37416_37482[(2)] = inst_37287);

(statearr_37416_37482[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (16))){
var state_37344__$1 = state_37344;
var statearr_37417_37483 = state_37344__$1;
(statearr_37417_37483[(2)] = reload_dependents);

(statearr_37417_37483[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (38))){
var inst_37297 = (state_37344[(16)]);
var inst_37315 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37297);
var state_37344__$1 = state_37344;
var statearr_37418_37484 = state_37344__$1;
(statearr_37418_37484[(2)] = inst_37315);

(statearr_37418_37484[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (30))){
var state_37344__$1 = state_37344;
var statearr_37419_37485 = state_37344__$1;
(statearr_37419_37485[(2)] = null);

(statearr_37419_37485[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (10))){
var inst_37217 = (state_37344[(22)]);
var inst_37219 = cljs.core.chunked_seq_QMARK_.call(null,inst_37217);
var state_37344__$1 = state_37344;
if(inst_37219){
var statearr_37420_37486 = state_37344__$1;
(statearr_37420_37486[(1)] = (13));

} else {
var statearr_37421_37487 = state_37344__$1;
(statearr_37421_37487[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (18))){
var inst_37251 = (state_37344[(2)]);
var state_37344__$1 = state_37344;
if(cljs.core.truth_(inst_37251)){
var statearr_37422_37488 = state_37344__$1;
(statearr_37422_37488[(1)] = (19));

} else {
var statearr_37423_37489 = state_37344__$1;
(statearr_37423_37489[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (42))){
var state_37344__$1 = state_37344;
var statearr_37424_37490 = state_37344__$1;
(statearr_37424_37490[(2)] = null);

(statearr_37424_37490[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (37))){
var inst_37310 = (state_37344[(2)]);
var state_37344__$1 = state_37344;
var statearr_37425_37491 = state_37344__$1;
(statearr_37425_37491[(2)] = inst_37310);

(statearr_37425_37491[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37345 === (8))){
var inst_37217 = (state_37344[(22)]);
var inst_37204 = (state_37344[(9)]);
var inst_37217__$1 = cljs.core.seq.call(null,inst_37204);
var state_37344__$1 = (function (){var statearr_37426 = state_37344;
(statearr_37426[(22)] = inst_37217__$1);

return statearr_37426;
})();
if(inst_37217__$1){
var statearr_37427_37492 = state_37344__$1;
(statearr_37427_37492[(1)] = (10));

} else {
var statearr_37428_37493 = state_37344__$1;
(statearr_37428_37493[(1)] = (11));

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
}
});})(c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33275__auto__,c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto____0 = (function (){
var statearr_37432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37432[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto__);

(statearr_37432[(1)] = (1));

return statearr_37432;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto____1 = (function (state_37344){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_37344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e37433){if((e37433 instanceof Object)){
var ex__33279__auto__ = e37433;
var statearr_37434_37494 = state_37344;
(statearr_37434_37494[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37495 = state_37344;
state_37344 = G__37495;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto__ = function(state_37344){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto____1.call(this,state_37344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33389__auto__ = (function (){var statearr_37435 = f__33388__auto__.call(null);
(statearr_37435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto__);

return statearr_37435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto__,map__37189,map__37189__$1,opts,before_jsload,on_jsload,reload_dependents,map__37190,map__37190__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33387__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37498,link){
var map__37501 = p__37498;
var map__37501__$1 = ((((!((map__37501 == null)))?((((map__37501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37501):map__37501);
var file = cljs.core.get.call(null,map__37501__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37501,map__37501__$1,file){
return (function (p1__37496_SHARP_,p2__37497_SHARP_){
if(cljs.core._EQ_.call(null,p1__37496_SHARP_,p2__37497_SHARP_)){
return p1__37496_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37501,map__37501__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37507){
var map__37508 = p__37507;
var map__37508__$1 = ((((!((map__37508 == null)))?((((map__37508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37508):map__37508);
var match_length = cljs.core.get.call(null,map__37508__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37508__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37503_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37503_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args37510 = [];
var len__31357__auto___37513 = arguments.length;
var i__31358__auto___37514 = (0);
while(true){
if((i__31358__auto___37514 < len__31357__auto___37513)){
args37510.push((arguments[i__31358__auto___37514]));

var G__37515 = (i__31358__auto___37514 + (1));
i__31358__auto___37514 = G__37515;
continue;
} else {
}
break;
}

var G__37512 = args37510.length;
switch (G__37512) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37510.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37517_SHARP_,p2__37518_SHARP_){
return cljs.core.assoc.call(null,p1__37517_SHARP_,cljs.core.get.call(null,p2__37518_SHARP_,key),p2__37518_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__37519){
var map__37522 = p__37519;
var map__37522__$1 = ((((!((map__37522 == null)))?((((map__37522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37522):map__37522);
var f_data = map__37522__$1;
var file = cljs.core.get.call(null,map__37522__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37524,p__37525){
var map__37534 = p__37524;
var map__37534__$1 = ((((!((map__37534 == null)))?((((map__37534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37534):map__37534);
var opts = map__37534__$1;
var on_cssload = cljs.core.get.call(null,map__37534__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37535 = p__37525;
var map__37535__$1 = ((((!((map__37535 == null)))?((((map__37535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37535):map__37535);
var files_msg = map__37535__$1;
var files = cljs.core.get.call(null,map__37535__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__37538_37542 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__37539_37543 = null;
var count__37540_37544 = (0);
var i__37541_37545 = (0);
while(true){
if((i__37541_37545 < count__37540_37544)){
var f_37546 = cljs.core._nth.call(null,chunk__37539_37543,i__37541_37545);
figwheel.client.file_reloading.reload_css_file.call(null,f_37546);

var G__37547 = seq__37538_37542;
var G__37548 = chunk__37539_37543;
var G__37549 = count__37540_37544;
var G__37550 = (i__37541_37545 + (1));
seq__37538_37542 = G__37547;
chunk__37539_37543 = G__37548;
count__37540_37544 = G__37549;
i__37541_37545 = G__37550;
continue;
} else {
var temp__4657__auto___37551 = cljs.core.seq.call(null,seq__37538_37542);
if(temp__4657__auto___37551){
var seq__37538_37552__$1 = temp__4657__auto___37551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37538_37552__$1)){
var c__31063__auto___37553 = cljs.core.chunk_first.call(null,seq__37538_37552__$1);
var G__37554 = cljs.core.chunk_rest.call(null,seq__37538_37552__$1);
var G__37555 = c__31063__auto___37553;
var G__37556 = cljs.core.count.call(null,c__31063__auto___37553);
var G__37557 = (0);
seq__37538_37542 = G__37554;
chunk__37539_37543 = G__37555;
count__37540_37544 = G__37556;
i__37541_37545 = G__37557;
continue;
} else {
var f_37558 = cljs.core.first.call(null,seq__37538_37552__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_37558);

var G__37559 = cljs.core.next.call(null,seq__37538_37552__$1);
var G__37560 = null;
var G__37561 = (0);
var G__37562 = (0);
seq__37538_37542 = G__37559;
chunk__37539_37543 = G__37560;
count__37540_37544 = G__37561;
i__37541_37545 = G__37562;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__37534,map__37534__$1,opts,on_cssload,map__37535,map__37535__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__37534,map__37534__$1,opts,on_cssload,map__37535,map__37535__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map