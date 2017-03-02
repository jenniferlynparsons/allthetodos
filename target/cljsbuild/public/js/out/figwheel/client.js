// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args40970 = [];
var len__31357__auto___40973 = arguments.length;
var i__31358__auto___40974 = (0);
while(true){
if((i__31358__auto___40974 < len__31357__auto___40973)){
args40970.push((arguments[i__31358__auto___40974]));

var G__40975 = (i__31358__auto___40974 + (1));
i__31358__auto___40974 = G__40975;
continue;
} else {
}
break;
}

var G__40972 = args40970.length;
switch (G__40972) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40970.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31364__auto__ = [];
var len__31357__auto___40978 = arguments.length;
var i__31358__auto___40979 = (0);
while(true){
if((i__31358__auto___40979 < len__31357__auto___40978)){
args__31364__auto__.push((arguments[i__31358__auto___40979]));

var G__40980 = (i__31358__auto___40979 + (1));
i__31358__auto___40979 = G__40980;
continue;
} else {
}
break;
}

var argseq__31365__auto__ = ((((0) < args__31364__auto__.length))?(new cljs.core.IndexedSeq(args__31364__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31365__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq40977){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40977));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31364__auto__ = [];
var len__31357__auto___40982 = arguments.length;
var i__31358__auto___40983 = (0);
while(true){
if((i__31358__auto___40983 < len__31357__auto___40982)){
args__31364__auto__.push((arguments[i__31358__auto___40983]));

var G__40984 = (i__31358__auto___40983 + (1));
i__31358__auto___40983 = G__40984;
continue;
} else {
}
break;
}

var argseq__31365__auto__ = ((((0) < args__31364__auto__.length))?(new cljs.core.IndexedSeq(args__31364__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31365__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq40981){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40981));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__40985 = cljs.core._EQ_;
var expr__40986 = (function (){var or__30244__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e40989){if((e40989 instanceof Error)){
var e = e40989;
return false;
} else {
throw e40989;

}
}})();
if(cljs.core.truth_(or__30244__auto__)){
return or__30244__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__40985.call(null,"true",expr__40986))){
return true;
} else {
if(cljs.core.truth_(pred__40985.call(null,"false",expr__40986))){
return false;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__40986)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e40991){if((e40991 instanceof Error)){
var e = e40991;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to access localStorage")].join(''));
} else {
throw e40991;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40992){
var map__40995 = p__40992;
var map__40995__$1 = ((((!((map__40995 == null)))?((((map__40995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40995):map__40995);
var message = cljs.core.get.call(null,map__40995__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40995__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30244__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30244__auto__)){
return or__30244__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30232__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30232__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30232__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33387__auto___41157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto___41157,ch){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto___41157,ch){
return (function (state_41126){
var state_val_41127 = (state_41126[(1)]);
if((state_val_41127 === (7))){
var inst_41122 = (state_41126[(2)]);
var state_41126__$1 = state_41126;
var statearr_41128_41158 = state_41126__$1;
(statearr_41128_41158[(2)] = inst_41122);

(statearr_41128_41158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (1))){
var state_41126__$1 = state_41126;
var statearr_41129_41159 = state_41126__$1;
(statearr_41129_41159[(2)] = null);

(statearr_41129_41159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (4))){
var inst_41079 = (state_41126[(7)]);
var inst_41079__$1 = (state_41126[(2)]);
var state_41126__$1 = (function (){var statearr_41130 = state_41126;
(statearr_41130[(7)] = inst_41079__$1);

return statearr_41130;
})();
if(cljs.core.truth_(inst_41079__$1)){
var statearr_41131_41160 = state_41126__$1;
(statearr_41131_41160[(1)] = (5));

} else {
var statearr_41132_41161 = state_41126__$1;
(statearr_41132_41161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (15))){
var inst_41086 = (state_41126[(8)]);
var inst_41101 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41086);
var inst_41102 = cljs.core.first.call(null,inst_41101);
var inst_41103 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41102);
var inst_41104 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41103)].join('');
var inst_41105 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41104);
var state_41126__$1 = state_41126;
var statearr_41133_41162 = state_41126__$1;
(statearr_41133_41162[(2)] = inst_41105);

(statearr_41133_41162[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (13))){
var inst_41110 = (state_41126[(2)]);
var state_41126__$1 = state_41126;
var statearr_41134_41163 = state_41126__$1;
(statearr_41134_41163[(2)] = inst_41110);

(statearr_41134_41163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (6))){
var state_41126__$1 = state_41126;
var statearr_41135_41164 = state_41126__$1;
(statearr_41135_41164[(2)] = null);

(statearr_41135_41164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (17))){
var inst_41108 = (state_41126[(2)]);
var state_41126__$1 = state_41126;
var statearr_41136_41165 = state_41126__$1;
(statearr_41136_41165[(2)] = inst_41108);

(statearr_41136_41165[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (3))){
var inst_41124 = (state_41126[(2)]);
var state_41126__$1 = state_41126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41126__$1,inst_41124);
} else {
if((state_val_41127 === (12))){
var inst_41085 = (state_41126[(9)]);
var inst_41099 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41085,opts);
var state_41126__$1 = state_41126;
if(cljs.core.truth_(inst_41099)){
var statearr_41137_41166 = state_41126__$1;
(statearr_41137_41166[(1)] = (15));

} else {
var statearr_41138_41167 = state_41126__$1;
(statearr_41138_41167[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (2))){
var state_41126__$1 = state_41126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41126__$1,(4),ch);
} else {
if((state_val_41127 === (11))){
var inst_41086 = (state_41126[(8)]);
var inst_41091 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41092 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41086);
var inst_41093 = cljs.core.async.timeout.call(null,(1000));
var inst_41094 = [inst_41092,inst_41093];
var inst_41095 = (new cljs.core.PersistentVector(null,2,(5),inst_41091,inst_41094,null));
var state_41126__$1 = state_41126;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41126__$1,(14),inst_41095);
} else {
if((state_val_41127 === (9))){
var inst_41086 = (state_41126[(8)]);
var inst_41112 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41113 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41086);
var inst_41114 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41113);
var inst_41115 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41114)].join('');
var inst_41116 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41115);
var state_41126__$1 = (function (){var statearr_41139 = state_41126;
(statearr_41139[(10)] = inst_41112);

return statearr_41139;
})();
var statearr_41140_41168 = state_41126__$1;
(statearr_41140_41168[(2)] = inst_41116);

(statearr_41140_41168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (5))){
var inst_41079 = (state_41126[(7)]);
var inst_41081 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41082 = (new cljs.core.PersistentArrayMap(null,2,inst_41081,null));
var inst_41083 = (new cljs.core.PersistentHashSet(null,inst_41082,null));
var inst_41084 = figwheel.client.focus_msgs.call(null,inst_41083,inst_41079);
var inst_41085 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41084);
var inst_41086 = cljs.core.first.call(null,inst_41084);
var inst_41087 = figwheel.client.autoload_QMARK_.call(null);
var state_41126__$1 = (function (){var statearr_41141 = state_41126;
(statearr_41141[(8)] = inst_41086);

(statearr_41141[(9)] = inst_41085);

return statearr_41141;
})();
if(cljs.core.truth_(inst_41087)){
var statearr_41142_41169 = state_41126__$1;
(statearr_41142_41169[(1)] = (8));

} else {
var statearr_41143_41170 = state_41126__$1;
(statearr_41143_41170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (14))){
var inst_41097 = (state_41126[(2)]);
var state_41126__$1 = state_41126;
var statearr_41144_41171 = state_41126__$1;
(statearr_41144_41171[(2)] = inst_41097);

(statearr_41144_41171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (16))){
var state_41126__$1 = state_41126;
var statearr_41145_41172 = state_41126__$1;
(statearr_41145_41172[(2)] = null);

(statearr_41145_41172[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (10))){
var inst_41118 = (state_41126[(2)]);
var state_41126__$1 = (function (){var statearr_41146 = state_41126;
(statearr_41146[(11)] = inst_41118);

return statearr_41146;
})();
var statearr_41147_41173 = state_41126__$1;
(statearr_41147_41173[(2)] = null);

(statearr_41147_41173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (8))){
var inst_41085 = (state_41126[(9)]);
var inst_41089 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41085,opts);
var state_41126__$1 = state_41126;
if(cljs.core.truth_(inst_41089)){
var statearr_41148_41174 = state_41126__$1;
(statearr_41148_41174[(1)] = (11));

} else {
var statearr_41149_41175 = state_41126__$1;
(statearr_41149_41175[(1)] = (12));

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
});})(c__33387__auto___41157,ch))
;
return ((function (switch__33275__auto__,c__33387__auto___41157,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33276__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33276__auto____0 = (function (){
var statearr_41153 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41153[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33276__auto__);

(statearr_41153[(1)] = (1));

return statearr_41153;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33276__auto____1 = (function (state_41126){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_41126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e41154){if((e41154 instanceof Object)){
var ex__33279__auto__ = e41154;
var statearr_41155_41176 = state_41126;
(statearr_41155_41176[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41177 = state_41126;
state_41126 = G__41177;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33276__auto__ = function(state_41126){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33276__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33276__auto____1.call(this,state_41126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33276__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33276__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto___41157,ch))
})();
var state__33389__auto__ = (function (){var statearr_41156 = f__33388__auto__.call(null);
(statearr_41156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto___41157);

return statearr_41156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto___41157,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41178_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41178_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_41181 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41181){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e41180){if((e41180 instanceof Error)){
var e = e41180;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41181], null));
} else {
var e = e41180;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_41181))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41182){
var map__41191 = p__41182;
var map__41191__$1 = ((((!((map__41191 == null)))?((((map__41191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41191):map__41191);
var opts = map__41191__$1;
var build_id = cljs.core.get.call(null,map__41191__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41191,map__41191__$1,opts,build_id){
return (function (p__41193){
var vec__41194 = p__41193;
var seq__41195 = cljs.core.seq.call(null,vec__41194);
var first__41196 = cljs.core.first.call(null,seq__41195);
var seq__41195__$1 = cljs.core.next.call(null,seq__41195);
var map__41197 = first__41196;
var map__41197__$1 = ((((!((map__41197 == null)))?((((map__41197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41197):map__41197);
var msg = map__41197__$1;
var msg_name = cljs.core.get.call(null,map__41197__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41195__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41194,seq__41195,first__41196,seq__41195__$1,map__41197,map__41197__$1,msg,msg_name,_,map__41191,map__41191__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41194,seq__41195,first__41196,seq__41195__$1,map__41197,map__41197__$1,msg,msg_name,_,map__41191,map__41191__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41191,map__41191__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41205){
var vec__41206 = p__41205;
var seq__41207 = cljs.core.seq.call(null,vec__41206);
var first__41208 = cljs.core.first.call(null,seq__41207);
var seq__41207__$1 = cljs.core.next.call(null,seq__41207);
var map__41209 = first__41208;
var map__41209__$1 = ((((!((map__41209 == null)))?((((map__41209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41209):map__41209);
var msg = map__41209__$1;
var msg_name = cljs.core.get.call(null,map__41209__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41207__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41211){
var map__41223 = p__41211;
var map__41223__$1 = ((((!((map__41223 == null)))?((((map__41223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41223):map__41223);
var on_compile_warning = cljs.core.get.call(null,map__41223__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41223__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41223,map__41223__$1,on_compile_warning,on_compile_fail){
return (function (p__41225){
var vec__41226 = p__41225;
var seq__41227 = cljs.core.seq.call(null,vec__41226);
var first__41228 = cljs.core.first.call(null,seq__41227);
var seq__41227__$1 = cljs.core.next.call(null,seq__41227);
var map__41229 = first__41228;
var map__41229__$1 = ((((!((map__41229 == null)))?((((map__41229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41229.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41229):map__41229);
var msg = map__41229__$1;
var msg_name = cljs.core.get.call(null,map__41229__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41227__$1;
var pred__41231 = cljs.core._EQ_;
var expr__41232 = msg_name;
if(cljs.core.truth_(pred__41231.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41232))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41231.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41232))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41223,map__41223__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto__,msg_hist,msg_names,msg){
return (function (state_41460){
var state_val_41461 = (state_41460[(1)]);
if((state_val_41461 === (7))){
var inst_41380 = (state_41460[(2)]);
var state_41460__$1 = state_41460;
if(cljs.core.truth_(inst_41380)){
var statearr_41462_41512 = state_41460__$1;
(statearr_41462_41512[(1)] = (8));

} else {
var statearr_41463_41513 = state_41460__$1;
(statearr_41463_41513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (20))){
var inst_41454 = (state_41460[(2)]);
var state_41460__$1 = state_41460;
var statearr_41464_41514 = state_41460__$1;
(statearr_41464_41514[(2)] = inst_41454);

(statearr_41464_41514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (27))){
var inst_41450 = (state_41460[(2)]);
var state_41460__$1 = state_41460;
var statearr_41465_41515 = state_41460__$1;
(statearr_41465_41515[(2)] = inst_41450);

(statearr_41465_41515[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (1))){
var inst_41373 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41460__$1 = state_41460;
if(cljs.core.truth_(inst_41373)){
var statearr_41466_41516 = state_41460__$1;
(statearr_41466_41516[(1)] = (2));

} else {
var statearr_41467_41517 = state_41460__$1;
(statearr_41467_41517[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (24))){
var inst_41452 = (state_41460[(2)]);
var state_41460__$1 = state_41460;
var statearr_41468_41518 = state_41460__$1;
(statearr_41468_41518[(2)] = inst_41452);

(statearr_41468_41518[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (4))){
var inst_41458 = (state_41460[(2)]);
var state_41460__$1 = state_41460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41460__$1,inst_41458);
} else {
if((state_val_41461 === (15))){
var inst_41456 = (state_41460[(2)]);
var state_41460__$1 = state_41460;
var statearr_41469_41519 = state_41460__$1;
(statearr_41469_41519[(2)] = inst_41456);

(statearr_41469_41519[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (21))){
var inst_41409 = (state_41460[(2)]);
var inst_41410 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41411 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41410);
var state_41460__$1 = (function (){var statearr_41470 = state_41460;
(statearr_41470[(7)] = inst_41409);

return statearr_41470;
})();
var statearr_41471_41520 = state_41460__$1;
(statearr_41471_41520[(2)] = inst_41411);

(statearr_41471_41520[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (31))){
var inst_41439 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41460__$1 = state_41460;
if(cljs.core.truth_(inst_41439)){
var statearr_41472_41521 = state_41460__$1;
(statearr_41472_41521[(1)] = (34));

} else {
var statearr_41473_41522 = state_41460__$1;
(statearr_41473_41522[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (32))){
var inst_41448 = (state_41460[(2)]);
var state_41460__$1 = state_41460;
var statearr_41474_41523 = state_41460__$1;
(statearr_41474_41523[(2)] = inst_41448);

(statearr_41474_41523[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (33))){
var inst_41435 = (state_41460[(2)]);
var inst_41436 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41437 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41436);
var state_41460__$1 = (function (){var statearr_41475 = state_41460;
(statearr_41475[(8)] = inst_41435);

return statearr_41475;
})();
var statearr_41476_41524 = state_41460__$1;
(statearr_41476_41524[(2)] = inst_41437);

(statearr_41476_41524[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (13))){
var inst_41394 = figwheel.client.heads_up.clear.call(null);
var state_41460__$1 = state_41460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41460__$1,(16),inst_41394);
} else {
if((state_val_41461 === (22))){
var inst_41415 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41416 = figwheel.client.heads_up.append_warning_message.call(null,inst_41415);
var state_41460__$1 = state_41460;
var statearr_41477_41525 = state_41460__$1;
(statearr_41477_41525[(2)] = inst_41416);

(statearr_41477_41525[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (36))){
var inst_41446 = (state_41460[(2)]);
var state_41460__$1 = state_41460;
var statearr_41478_41526 = state_41460__$1;
(statearr_41478_41526[(2)] = inst_41446);

(statearr_41478_41526[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (29))){
var inst_41426 = (state_41460[(2)]);
var inst_41427 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41428 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41427);
var state_41460__$1 = (function (){var statearr_41479 = state_41460;
(statearr_41479[(9)] = inst_41426);

return statearr_41479;
})();
var statearr_41480_41527 = state_41460__$1;
(statearr_41480_41527[(2)] = inst_41428);

(statearr_41480_41527[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (6))){
var inst_41375 = (state_41460[(10)]);
var state_41460__$1 = state_41460;
var statearr_41481_41528 = state_41460__$1;
(statearr_41481_41528[(2)] = inst_41375);

(statearr_41481_41528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (28))){
var inst_41422 = (state_41460[(2)]);
var inst_41423 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41424 = figwheel.client.heads_up.display_warning.call(null,inst_41423);
var state_41460__$1 = (function (){var statearr_41482 = state_41460;
(statearr_41482[(11)] = inst_41422);

return statearr_41482;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41460__$1,(29),inst_41424);
} else {
if((state_val_41461 === (25))){
var inst_41420 = figwheel.client.heads_up.clear.call(null);
var state_41460__$1 = state_41460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41460__$1,(28),inst_41420);
} else {
if((state_val_41461 === (34))){
var inst_41441 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41460__$1 = state_41460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41460__$1,(37),inst_41441);
} else {
if((state_val_41461 === (17))){
var inst_41400 = (state_41460[(2)]);
var inst_41401 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41402 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41401);
var state_41460__$1 = (function (){var statearr_41483 = state_41460;
(statearr_41483[(12)] = inst_41400);

return statearr_41483;
})();
var statearr_41484_41529 = state_41460__$1;
(statearr_41484_41529[(2)] = inst_41402);

(statearr_41484_41529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (3))){
var inst_41392 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41460__$1 = state_41460;
if(cljs.core.truth_(inst_41392)){
var statearr_41485_41530 = state_41460__$1;
(statearr_41485_41530[(1)] = (13));

} else {
var statearr_41486_41531 = state_41460__$1;
(statearr_41486_41531[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (12))){
var inst_41388 = (state_41460[(2)]);
var state_41460__$1 = state_41460;
var statearr_41487_41532 = state_41460__$1;
(statearr_41487_41532[(2)] = inst_41388);

(statearr_41487_41532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (2))){
var inst_41375 = (state_41460[(10)]);
var inst_41375__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41460__$1 = (function (){var statearr_41488 = state_41460;
(statearr_41488[(10)] = inst_41375__$1);

return statearr_41488;
})();
if(cljs.core.truth_(inst_41375__$1)){
var statearr_41489_41533 = state_41460__$1;
(statearr_41489_41533[(1)] = (5));

} else {
var statearr_41490_41534 = state_41460__$1;
(statearr_41490_41534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (23))){
var inst_41418 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41460__$1 = state_41460;
if(cljs.core.truth_(inst_41418)){
var statearr_41491_41535 = state_41460__$1;
(statearr_41491_41535[(1)] = (25));

} else {
var statearr_41492_41536 = state_41460__$1;
(statearr_41492_41536[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (35))){
var state_41460__$1 = state_41460;
var statearr_41493_41537 = state_41460__$1;
(statearr_41493_41537[(2)] = null);

(statearr_41493_41537[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (19))){
var inst_41413 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41460__$1 = state_41460;
if(cljs.core.truth_(inst_41413)){
var statearr_41494_41538 = state_41460__$1;
(statearr_41494_41538[(1)] = (22));

} else {
var statearr_41495_41539 = state_41460__$1;
(statearr_41495_41539[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (11))){
var inst_41384 = (state_41460[(2)]);
var state_41460__$1 = state_41460;
var statearr_41496_41540 = state_41460__$1;
(statearr_41496_41540[(2)] = inst_41384);

(statearr_41496_41540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (9))){
var inst_41386 = figwheel.client.heads_up.clear.call(null);
var state_41460__$1 = state_41460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41460__$1,(12),inst_41386);
} else {
if((state_val_41461 === (5))){
var inst_41377 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41460__$1 = state_41460;
var statearr_41497_41541 = state_41460__$1;
(statearr_41497_41541[(2)] = inst_41377);

(statearr_41497_41541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (14))){
var inst_41404 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41460__$1 = state_41460;
if(cljs.core.truth_(inst_41404)){
var statearr_41498_41542 = state_41460__$1;
(statearr_41498_41542[(1)] = (18));

} else {
var statearr_41499_41543 = state_41460__$1;
(statearr_41499_41543[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (26))){
var inst_41430 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41460__$1 = state_41460;
if(cljs.core.truth_(inst_41430)){
var statearr_41500_41544 = state_41460__$1;
(statearr_41500_41544[(1)] = (30));

} else {
var statearr_41501_41545 = state_41460__$1;
(statearr_41501_41545[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (16))){
var inst_41396 = (state_41460[(2)]);
var inst_41397 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41398 = figwheel.client.heads_up.display_exception.call(null,inst_41397);
var state_41460__$1 = (function (){var statearr_41502 = state_41460;
(statearr_41502[(13)] = inst_41396);

return statearr_41502;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41460__$1,(17),inst_41398);
} else {
if((state_val_41461 === (30))){
var inst_41432 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41433 = figwheel.client.heads_up.display_warning.call(null,inst_41432);
var state_41460__$1 = state_41460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41460__$1,(33),inst_41433);
} else {
if((state_val_41461 === (10))){
var inst_41390 = (state_41460[(2)]);
var state_41460__$1 = state_41460;
var statearr_41503_41546 = state_41460__$1;
(statearr_41503_41546[(2)] = inst_41390);

(statearr_41503_41546[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (18))){
var inst_41406 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41407 = figwheel.client.heads_up.display_exception.call(null,inst_41406);
var state_41460__$1 = state_41460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41460__$1,(21),inst_41407);
} else {
if((state_val_41461 === (37))){
var inst_41443 = (state_41460[(2)]);
var state_41460__$1 = state_41460;
var statearr_41504_41547 = state_41460__$1;
(statearr_41504_41547[(2)] = inst_41443);

(statearr_41504_41547[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (8))){
var inst_41382 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41460__$1 = state_41460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41460__$1,(11),inst_41382);
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
});})(c__33387__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33275__auto__,c__33387__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto____0 = (function (){
var statearr_41508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41508[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto__);

(statearr_41508[(1)] = (1));

return statearr_41508;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto____1 = (function (state_41460){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_41460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e41509){if((e41509 instanceof Object)){
var ex__33279__auto__ = e41509;
var statearr_41510_41548 = state_41460;
(statearr_41510_41548[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41549 = state_41460;
state_41460 = G__41549;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto__ = function(state_41460){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto____1.call(this,state_41460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto__,msg_hist,msg_names,msg))
})();
var state__33389__auto__ = (function (){var statearr_41511 = f__33388__auto__.call(null);
(statearr_41511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto__);

return statearr_41511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto__,msg_hist,msg_names,msg))
);

return c__33387__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33387__auto___41612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto___41612,ch){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto___41612,ch){
return (function (state_41595){
var state_val_41596 = (state_41595[(1)]);
if((state_val_41596 === (1))){
var state_41595__$1 = state_41595;
var statearr_41597_41613 = state_41595__$1;
(statearr_41597_41613[(2)] = null);

(statearr_41597_41613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41596 === (2))){
var state_41595__$1 = state_41595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41595__$1,(4),ch);
} else {
if((state_val_41596 === (3))){
var inst_41593 = (state_41595[(2)]);
var state_41595__$1 = state_41595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41595__$1,inst_41593);
} else {
if((state_val_41596 === (4))){
var inst_41583 = (state_41595[(7)]);
var inst_41583__$1 = (state_41595[(2)]);
var state_41595__$1 = (function (){var statearr_41598 = state_41595;
(statearr_41598[(7)] = inst_41583__$1);

return statearr_41598;
})();
if(cljs.core.truth_(inst_41583__$1)){
var statearr_41599_41614 = state_41595__$1;
(statearr_41599_41614[(1)] = (5));

} else {
var statearr_41600_41615 = state_41595__$1;
(statearr_41600_41615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41596 === (5))){
var inst_41583 = (state_41595[(7)]);
var inst_41585 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41583);
var state_41595__$1 = state_41595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41595__$1,(8),inst_41585);
} else {
if((state_val_41596 === (6))){
var state_41595__$1 = state_41595;
var statearr_41601_41616 = state_41595__$1;
(statearr_41601_41616[(2)] = null);

(statearr_41601_41616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41596 === (7))){
var inst_41591 = (state_41595[(2)]);
var state_41595__$1 = state_41595;
var statearr_41602_41617 = state_41595__$1;
(statearr_41602_41617[(2)] = inst_41591);

(statearr_41602_41617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41596 === (8))){
var inst_41587 = (state_41595[(2)]);
var state_41595__$1 = (function (){var statearr_41603 = state_41595;
(statearr_41603[(8)] = inst_41587);

return statearr_41603;
})();
var statearr_41604_41618 = state_41595__$1;
(statearr_41604_41618[(2)] = null);

(statearr_41604_41618[(1)] = (2));


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
});})(c__33387__auto___41612,ch))
;
return ((function (switch__33275__auto__,c__33387__auto___41612,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33276__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33276__auto____0 = (function (){
var statearr_41608 = [null,null,null,null,null,null,null,null,null];
(statearr_41608[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33276__auto__);

(statearr_41608[(1)] = (1));

return statearr_41608;
});
var figwheel$client$heads_up_plugin_$_state_machine__33276__auto____1 = (function (state_41595){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_41595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e41609){if((e41609 instanceof Object)){
var ex__33279__auto__ = e41609;
var statearr_41610_41619 = state_41595;
(statearr_41610_41619[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41620 = state_41595;
state_41595 = G__41620;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33276__auto__ = function(state_41595){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33276__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33276__auto____1.call(this,state_41595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33276__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33276__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto___41612,ch))
})();
var state__33389__auto__ = (function (){var statearr_41611 = f__33388__auto__.call(null);
(statearr_41611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto___41612);

return statearr_41611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto___41612,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto__){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto__){
return (function (state_41641){
var state_val_41642 = (state_41641[(1)]);
if((state_val_41642 === (1))){
var inst_41636 = cljs.core.async.timeout.call(null,(3000));
var state_41641__$1 = state_41641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41641__$1,(2),inst_41636);
} else {
if((state_val_41642 === (2))){
var inst_41638 = (state_41641[(2)]);
var inst_41639 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41641__$1 = (function (){var statearr_41643 = state_41641;
(statearr_41643[(7)] = inst_41638);

return statearr_41643;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41641__$1,inst_41639);
} else {
return null;
}
}
});})(c__33387__auto__))
;
return ((function (switch__33275__auto__,c__33387__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33276__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33276__auto____0 = (function (){
var statearr_41647 = [null,null,null,null,null,null,null,null];
(statearr_41647[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33276__auto__);

(statearr_41647[(1)] = (1));

return statearr_41647;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33276__auto____1 = (function (state_41641){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_41641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e41648){if((e41648 instanceof Object)){
var ex__33279__auto__ = e41648;
var statearr_41649_41651 = state_41641;
(statearr_41649_41651[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41652 = state_41641;
state_41641 = G__41652;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33276__auto__ = function(state_41641){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33276__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33276__auto____1.call(this,state_41641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33276__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33276__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto__))
})();
var state__33389__auto__ = (function (){var statearr_41650 = f__33388__auto__.call(null);
(statearr_41650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto__);

return statearr_41650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto__))
);

return c__33387__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33387__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__33388__auto__ = (function (){var switch__33275__auto__ = ((function (c__33387__auto__,figwheel_version,temp__4657__auto__){
return (function (state_41675){
var state_val_41676 = (state_41675[(1)]);
if((state_val_41676 === (1))){
var inst_41669 = cljs.core.async.timeout.call(null,(2000));
var state_41675__$1 = state_41675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41675__$1,(2),inst_41669);
} else {
if((state_val_41676 === (2))){
var inst_41671 = (state_41675[(2)]);
var inst_41672 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_41673 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_41672);
var state_41675__$1 = (function (){var statearr_41677 = state_41675;
(statearr_41677[(7)] = inst_41671);

return statearr_41677;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41675__$1,inst_41673);
} else {
return null;
}
}
});})(c__33387__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__33275__auto__,c__33387__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto____0 = (function (){
var statearr_41681 = [null,null,null,null,null,null,null,null];
(statearr_41681[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto__);

(statearr_41681[(1)] = (1));

return statearr_41681;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto____1 = (function (state_41675){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_41675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e41682){if((e41682 instanceof Object)){
var ex__33279__auto__ = e41682;
var statearr_41683_41685 = state_41675;
(statearr_41683_41685[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41686 = state_41675;
state_41675 = G__41686;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto__ = function(state_41675){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto____1.call(this,state_41675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33387__auto__,figwheel_version,temp__4657__auto__))
})();
var state__33389__auto__ = (function (){var statearr_41684 = f__33388__auto__.call(null);
(statearr_41684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33387__auto__);

return statearr_41684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33389__auto__);
});})(c__33387__auto__,figwheel_version,temp__4657__auto__))
);

return c__33387__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__41687){
var map__41691 = p__41687;
var map__41691__$1 = ((((!((map__41691 == null)))?((((map__41691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41691):map__41691);
var file = cljs.core.get.call(null,map__41691__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41691__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41691__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__41693 = "";
var G__41693__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41693),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__41693);
var G__41693__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41693__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__41693__$1);
if(cljs.core.truth_((function (){var and__30232__auto__ = line;
if(cljs.core.truth_(and__30232__auto__)){
return column;
} else {
return and__30232__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41693__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__41693__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41694){
var map__41701 = p__41694;
var map__41701__$1 = ((((!((map__41701 == null)))?((((map__41701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41701):map__41701);
var ed = map__41701__$1;
var formatted_exception = cljs.core.get.call(null,map__41701__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41701__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41701__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41703_41707 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41704_41708 = null;
var count__41705_41709 = (0);
var i__41706_41710 = (0);
while(true){
if((i__41706_41710 < count__41705_41709)){
var msg_41711 = cljs.core._nth.call(null,chunk__41704_41708,i__41706_41710);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41711);

var G__41712 = seq__41703_41707;
var G__41713 = chunk__41704_41708;
var G__41714 = count__41705_41709;
var G__41715 = (i__41706_41710 + (1));
seq__41703_41707 = G__41712;
chunk__41704_41708 = G__41713;
count__41705_41709 = G__41714;
i__41706_41710 = G__41715;
continue;
} else {
var temp__4657__auto___41716 = cljs.core.seq.call(null,seq__41703_41707);
if(temp__4657__auto___41716){
var seq__41703_41717__$1 = temp__4657__auto___41716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41703_41717__$1)){
var c__31063__auto___41718 = cljs.core.chunk_first.call(null,seq__41703_41717__$1);
var G__41719 = cljs.core.chunk_rest.call(null,seq__41703_41717__$1);
var G__41720 = c__31063__auto___41718;
var G__41721 = cljs.core.count.call(null,c__31063__auto___41718);
var G__41722 = (0);
seq__41703_41707 = G__41719;
chunk__41704_41708 = G__41720;
count__41705_41709 = G__41721;
i__41706_41710 = G__41722;
continue;
} else {
var msg_41723 = cljs.core.first.call(null,seq__41703_41717__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41723);

var G__41724 = cljs.core.next.call(null,seq__41703_41717__$1);
var G__41725 = null;
var G__41726 = (0);
var G__41727 = (0);
seq__41703_41707 = G__41724;
chunk__41704_41708 = G__41725;
count__41705_41709 = G__41726;
i__41706_41710 = G__41727;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41728){
var map__41731 = p__41728;
var map__41731__$1 = ((((!((map__41731 == null)))?((((map__41731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41731):map__41731);
var w = map__41731__$1;
var message = cljs.core.get.call(null,map__41731__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30232__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30232__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30232__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__41743 = cljs.core.seq.call(null,plugins);
var chunk__41744 = null;
var count__41745 = (0);
var i__41746 = (0);
while(true){
if((i__41746 < count__41745)){
var vec__41747 = cljs.core._nth.call(null,chunk__41744,i__41746);
var k = cljs.core.nth.call(null,vec__41747,(0),null);
var plugin = cljs.core.nth.call(null,vec__41747,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41753 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41743,chunk__41744,count__41745,i__41746,pl_41753,vec__41747,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41753.call(null,msg_hist);
});})(seq__41743,chunk__41744,count__41745,i__41746,pl_41753,vec__41747,k,plugin))
);
} else {
}

var G__41754 = seq__41743;
var G__41755 = chunk__41744;
var G__41756 = count__41745;
var G__41757 = (i__41746 + (1));
seq__41743 = G__41754;
chunk__41744 = G__41755;
count__41745 = G__41756;
i__41746 = G__41757;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41743);
if(temp__4657__auto__){
var seq__41743__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41743__$1)){
var c__31063__auto__ = cljs.core.chunk_first.call(null,seq__41743__$1);
var G__41758 = cljs.core.chunk_rest.call(null,seq__41743__$1);
var G__41759 = c__31063__auto__;
var G__41760 = cljs.core.count.call(null,c__31063__auto__);
var G__41761 = (0);
seq__41743 = G__41758;
chunk__41744 = G__41759;
count__41745 = G__41760;
i__41746 = G__41761;
continue;
} else {
var vec__41750 = cljs.core.first.call(null,seq__41743__$1);
var k = cljs.core.nth.call(null,vec__41750,(0),null);
var plugin = cljs.core.nth.call(null,vec__41750,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41762 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41743,chunk__41744,count__41745,i__41746,pl_41762,vec__41750,k,plugin,seq__41743__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41762.call(null,msg_hist);
});})(seq__41743,chunk__41744,count__41745,i__41746,pl_41762,vec__41750,k,plugin,seq__41743__$1,temp__4657__auto__))
);
} else {
}

var G__41763 = cljs.core.next.call(null,seq__41743__$1);
var G__41764 = null;
var G__41765 = (0);
var G__41766 = (0);
seq__41743 = G__41763;
chunk__41744 = G__41764;
count__41745 = G__41765;
i__41746 = G__41766;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args41767 = [];
var len__31357__auto___41774 = arguments.length;
var i__31358__auto___41775 = (0);
while(true){
if((i__31358__auto___41775 < len__31357__auto___41774)){
args41767.push((arguments[i__31358__auto___41775]));

var G__41776 = (i__31358__auto___41775 + (1));
i__31358__auto___41775 = G__41776;
continue;
} else {
}
break;
}

var G__41769 = args41767.length;
switch (G__41769) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41767.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__41770_41778 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__41771_41779 = null;
var count__41772_41780 = (0);
var i__41773_41781 = (0);
while(true){
if((i__41773_41781 < count__41772_41780)){
var msg_41782 = cljs.core._nth.call(null,chunk__41771_41779,i__41773_41781);
figwheel.client.socket.handle_incoming_message.call(null,msg_41782);

var G__41783 = seq__41770_41778;
var G__41784 = chunk__41771_41779;
var G__41785 = count__41772_41780;
var G__41786 = (i__41773_41781 + (1));
seq__41770_41778 = G__41783;
chunk__41771_41779 = G__41784;
count__41772_41780 = G__41785;
i__41773_41781 = G__41786;
continue;
} else {
var temp__4657__auto___41787 = cljs.core.seq.call(null,seq__41770_41778);
if(temp__4657__auto___41787){
var seq__41770_41788__$1 = temp__4657__auto___41787;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41770_41788__$1)){
var c__31063__auto___41789 = cljs.core.chunk_first.call(null,seq__41770_41788__$1);
var G__41790 = cljs.core.chunk_rest.call(null,seq__41770_41788__$1);
var G__41791 = c__31063__auto___41789;
var G__41792 = cljs.core.count.call(null,c__31063__auto___41789);
var G__41793 = (0);
seq__41770_41778 = G__41790;
chunk__41771_41779 = G__41791;
count__41772_41780 = G__41792;
i__41773_41781 = G__41793;
continue;
} else {
var msg_41794 = cljs.core.first.call(null,seq__41770_41788__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_41794);

var G__41795 = cljs.core.next.call(null,seq__41770_41788__$1);
var G__41796 = null;
var G__41797 = (0);
var G__41798 = (0);
seq__41770_41778 = G__41795;
chunk__41771_41779 = G__41796;
count__41772_41780 = G__41797;
i__41773_41781 = G__41798;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31364__auto__ = [];
var len__31357__auto___41803 = arguments.length;
var i__31358__auto___41804 = (0);
while(true){
if((i__31358__auto___41804 < len__31357__auto___41803)){
args__31364__auto__.push((arguments[i__31358__auto___41804]));

var G__41805 = (i__31358__auto___41804 + (1));
i__31358__auto___41804 = G__41805;
continue;
} else {
}
break;
}

var argseq__31365__auto__ = ((((0) < args__31364__auto__.length))?(new cljs.core.IndexedSeq(args__31364__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31365__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41800){
var map__41801 = p__41800;
var map__41801__$1 = ((((!((map__41801 == null)))?((((map__41801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41801):map__41801);
var opts = map__41801__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41799){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41799));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e41807){if((e41807 instanceof Error)){
var e = e41807;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e41807;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__41811){
var map__41812 = p__41811;
var map__41812__$1 = ((((!((map__41812 == null)))?((((map__41812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41812):map__41812);
var msg_name = cljs.core.get.call(null,map__41812__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map