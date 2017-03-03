// Compiled by ClojureScript 1.9.473 {}
goog.provide('todo.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('accountant.core');
todo.core.todolist = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"0","0",351625802),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),"take out the trash",new cljs.core.Keyword(null,"status","status",-1997798413),true], null),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),"wash the dishes",new cljs.core.Keyword(null,"status","status",-1997798413),true], null)], null));
cljs.core.deref.call(null,todo.core.todolist);
cljs.core.swap_BANG_.call(null,todo.core.todolist,cljs.core.assoc,new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),"take out the trash",new cljs.core.Keyword(null,"status","status",-1997798413),false], null));
cljs.core.swap_BANG_.call(null,todo.core.todolist,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2","2",-1645882217)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),"make cookies",new cljs.core.Keyword(null,"status","status",-1997798413),false], null));
if(typeof todo.core.todos !== 'undefined'){
} else {
todo.core.todos = reagent.core.atom.call(null,cljs.core.sorted_map.call(null));
}
if(typeof todo.core.counter !== 'undefined'){
} else {
todo.core.counter = reagent.core.atom.call(null,(0));
}
todo.core.add_todo = (function todo$core$add_todo(text){
var id = cljs.core.swap_BANG_.call(null,todo.core.counter,cljs.core.inc);
return cljs.core.swap_BANG_.call(null,todo.core.todos,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),text,new cljs.core.Keyword(null,"done","done",-889844188),false], null));
});
todo.core.toggle = (function todo$core$toggle(id){
return cljs.core.swap_BANG_.call(null,todo.core.todos,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"done","done",-889844188)], null),cljs.core.not);
});
todo.core.save = (function todo$core$save(id,title){
return cljs.core.swap_BANG_.call(null,todo.core.todos,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null),title);
});
todo.core.delete$ = (function todo$core$delete(id){
return cljs.core.swap_BANG_.call(null,todo.core.todos,cljs.core.dissoc,id);
});
todo.core.mmap = (function todo$core$mmap(m,f,a){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),f.call(null,a,m));
});
todo.core.complete_all = (function todo$core$complete_all(v){
return cljs.core.swap_BANG_.call(null,todo.core.todos,todo.core.mmap,cljs.core.map,(function (p1__43004_SHARP_){
return cljs.core.assoc_in.call(null,p1__43004_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"done","done",-889844188)], null),v);
}));
});
todo.core.clear_done = (function todo$core$clear_done(){
return cljs.core.swap_BANG_.call(null,todo.core.todos,todo.core.mmap,cljs.core.remove,(function (p1__43005_SHARP_){
return cljs.core.get_in.call(null,p1__43005_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"done","done",-889844188)], null));
}));
});
if(typeof todo.core.init !== 'undefined'){
} else {
todo.core.init = (function (){
todo.core.add_todo.call(null,"Rename Cloact to Reagent");

todo.core.add_todo.call(null,"Add undo demo");

todo.core.add_todo.call(null,"Make all rendering async");

todo.core.add_todo.call(null,"Allow any arguments to component functions");

return todo.core.complete_all.call(null,true);
})()
;
}
todo.core.todo_input = (function todo$core$todo_input(p__43008){
var map__43015 = p__43008;
var map__43015__$1 = ((((!((map__43015 == null)))?((((map__43015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43015):map__43015);
var title = cljs.core.get.call(null,map__43015__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_save = cljs.core.get.call(null,map__43015__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_stop = cljs.core.get.call(null,map__43015__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var val = reagent.core.atom.call(null,title);
var stop = ((function (val,map__43015,map__43015__$1,title,on_save,on_stop){
return (function (){
cljs.core.reset_BANG_.call(null,val,"");

if(cljs.core.truth_(on_stop)){
return on_stop.call(null);
} else {
return null;
}
});})(val,map__43015,map__43015__$1,title,on_save,on_stop))
;
var save = ((function (val,stop,map__43015,map__43015__$1,title,on_save,on_stop){
return (function (){
var v = clojure.string.trim.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))].join(''));
if(!(cljs.core.empty_QMARK_.call(null,v))){
on_save.call(null,v);
} else {
}

return stop.call(null);
});})(val,stop,map__43015,map__43015__$1,title,on_save,on_stop))
;
return ((function (val,stop,save,map__43015,map__43015__$1,title,on_save,on_stop){
return (function (p__43017){
var map__43018 = p__43017;
var map__43018__$1 = ((((!((map__43018 == null)))?((((map__43018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43018):map__43018);
var id = cljs.core.get.call(null,map__43018__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__43018__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var placeholder = cljs.core.get.call(null,map__43018__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),save,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__43018,map__43018__$1,id,class$,placeholder,val,stop,save,map__43015,map__43015__$1,title,on_save,on_stop){
return (function (p1__43006_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__43006_SHARP_.target.value);
});})(map__43018,map__43018__$1,id,class$,placeholder,val,stop,save,map__43015,map__43015__$1,title,on_save,on_stop))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (map__43018,map__43018__$1,id,class$,placeholder,val,stop,save,map__43015,map__43015__$1,title,on_save,on_stop){
return (function (p1__43007_SHARP_){
var G__43020 = p1__43007_SHARP_.which;
switch (G__43020) {
case (13):
return save.call(null);

break;
case (27):
return stop.call(null);

break;
default:
return null;

}
});})(map__43018,map__43018__$1,id,class$,placeholder,val,stop,save,map__43015,map__43015__$1,title,on_save,on_stop))
], null)], null);
});
;})(val,stop,save,map__43015,map__43015__$1,title,on_save,on_stop))
});
todo.core.todo_edit = cljs.core.with_meta.call(null,todo.core.todo_input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__43022_SHARP_){
return reagent.core.dom_node.call(null,p1__43022_SHARP_).focus();
})], null));
todo.core.todo_stats = (function todo$core$todo_stats(p__43023){
var map__43027 = p__43023;
var map__43027__$1 = ((((!((map__43027 == null)))?((((map__43027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43027):map__43027);
var filt = cljs.core.get.call(null,map__43027__$1,new cljs.core.Keyword(null,"filt","filt",169229082));
var active = cljs.core.get.call(null,map__43027__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var done = cljs.core.get.call(null,map__43027__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var props_for = ((function (map__43027,map__43027__$1,filt,active,done){
return (function (name){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,name,cljs.core.deref.call(null,filt)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__43027,map__43027__$1,filt,active,done){
return (function (){
return cljs.core.reset_BANG_.call(null,filt,name);
});})(map__43027,map__43027__$1,filt,active,done))
], null);
});})(map__43027,map__43027__$1,filt,active,done))
;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#todo-count","span#todo-count",-1116128108),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active], null)," ",(function (){var G__43029 = active;
switch (G__43029) {
case (1):
return "item";

break;
default:
return "items";

}
})()," left"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#filters","ul#filters",-899831395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for.call(null,new cljs.core.Keyword(null,"all","all",892129742)),"All"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for.call(null,new cljs.core.Keyword(null,"active","active",1895962068)),"Active"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for.call(null,new cljs.core.Keyword(null,"done","done",-889844188)),"Completed"], null)], null)], null),(((done > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#clear-completed","button#clear-completed",-1698725142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),todo.core.clear_done], null),"Clear completed ",done], null):null)], null);
});
todo.core.todo_item = (function todo$core$todo_item(){
var editing = reagent.core.atom.call(null,false);
return ((function (editing){
return (function (p__43035){
var map__43036 = p__43035;
var map__43036__$1 = ((((!((map__43036 == null)))?((((map__43036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43036):map__43036);
var id = cljs.core.get.call(null,map__43036__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var done = cljs.core.get.call(null,map__43036__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var title = cljs.core.get.call(null,map__43036__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(done)?"completed ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref.call(null,editing))?"editing":null))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),done,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__43036,map__43036__$1,id,done,title,editing){
return (function (){
return todo.core.toggle.call(null,id);
});})(map__43036,map__43036__$1,id,done,title,editing))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (map__43036,map__43036__$1,id,done,title,editing){
return (function (){
return cljs.core.reset_BANG_.call(null,editing,true);
});})(map__43036,map__43036__$1,id,done,title,editing))
], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__43036,map__43036__$1,id,done,title,editing){
return (function (){
return todo.core.delete$.call(null,id);
});})(map__43036,map__43036__$1,id,done,title,editing))
], null)], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,editing))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.core.todo_edit,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"edit",new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"on-save","on-save",1618176266),((function (map__43036,map__43036__$1,id,done,title,editing){
return (function (p1__43031_SHARP_){
return todo.core.save.call(null,id,p1__43031_SHARP_);
});})(map__43036,map__43036__$1,id,done,title,editing))
,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),((function (map__43036,map__43036__$1,id,done,title,editing){
return (function (){
return cljs.core.reset_BANG_.call(null,editing,false);
});})(map__43036,map__43036__$1,id,done,title,editing))
], null)], null):null)], null);
});
;})(editing))
});
todo.core.todo_app = (function todo$core$todo_app(props){
var filt = reagent.core.atom.call(null,new cljs.core.Keyword(null,"all","all",892129742));
return ((function (filt){
return (function (){
var items = cljs.core.vals.call(null,cljs.core.deref.call(null,todo.core.todos));
var done = cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"done","done",-889844188),items));
var active = (cljs.core.count.call(null,items) - done);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#todoapp","section#todoapp",41606040),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header#header","header#header",1650878621),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.core.todo_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"new-todo",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"on-save","on-save",1618176266),todo.core.add_todo], null)], null)], null),(((cljs.core.count.call(null,items) > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#main","section#main",559170339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#toggle-all","input#toggle-all",-512330812),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(active === (0)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (items,done,active,filt){
return (function (){
return todo.core.complete_all.call(null,(active > (0)));
});})(items,done,active,filt))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#todo-list","ul#todo-list",-1648361723),(function (){var iter__31032__auto__ = ((function (items,done,active,filt){
return (function todo$core$todo_app_$_iter__43043(s__43044){
return (new cljs.core.LazySeq(null,((function (items,done,active,filt){
return (function (){
var s__43044__$1 = s__43044;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43044__$1);
if(temp__4657__auto__){
var s__43044__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43044__$2)){
var c__31030__auto__ = cljs.core.chunk_first.call(null,s__43044__$2);
var size__31031__auto__ = cljs.core.count.call(null,c__31030__auto__);
var b__43046 = cljs.core.chunk_buffer.call(null,size__31031__auto__);
if((function (){var i__43045 = (0);
while(true){
if((i__43045 < size__31031__auto__)){
var todo__$1 = cljs.core._nth.call(null,c__31030__auto__,i__43045);
cljs.core.chunk_append.call(null,b__43046,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.core.todo_item,todo__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo__$1)], null)));

var G__43048 = (i__43045 + (1));
i__43045 = G__43048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43046),todo$core$todo_app_$_iter__43043.call(null,cljs.core.chunk_rest.call(null,s__43044__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43046),null);
}
} else {
var todo__$1 = cljs.core.first.call(null,s__43044__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.core.todo_item,todo__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo__$1)], null)),todo$core$todo_app_$_iter__43043.call(null,cljs.core.rest.call(null,s__43044__$2)));
}
} else {
return null;
}
break;
}
});})(items,done,active,filt))
,null,null));
});})(items,done,active,filt))
;
return iter__31032__auto__.call(null,cljs.core.filter.call(null,(function (){var G__43047 = (((cljs.core.deref.call(null,filt) instanceof cljs.core.Keyword))?cljs.core.deref.call(null,filt).fqn:null);
switch (G__43047) {
case "active":
return cljs.core.complement.call(null,new cljs.core.Keyword(null,"done","done",-889844188));

break;
case "done":
return new cljs.core.Keyword(null,"done","done",-889844188);

break;
case "all":
return cljs.core.identity;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,filt))].join('')));

}
})(),items));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer#footer","footer#footer",-1164052935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.core.todo_stats,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),active,new cljs.core.Keyword(null,"done","done",-889844188),done,new cljs.core.Keyword(null,"filt","filt",169229082),filt], null)], null)], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer#info","footer#info",1634811413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Double-click to edit a todo"], null)], null)], null);
});
;})(filt))
});
todo.core.home_page = (function todo$core$home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to todo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/about"], null),"go to about page"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"add a to do item"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.core.todo_app], null)], null);
});
todo.core.about_page = (function todo$core$about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About todo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"go to the home page"], null)], null)], null);
});
todo.core.current_page = (function todo$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
var action__36278__auto___43055 = (function (params__36279__auto__){
if(cljs.core.map_QMARK_.call(null,params__36279__auto__)){
var map__43050 = params__36279__auto__;
var map__43050__$1 = ((((!((map__43050 == null)))?((((map__43050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43050):map__43050);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return todo.core.home_page;},new cljs.core.Symbol("todo.core","home-page","todo.core/home-page",-1366651088,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"todo.core","todo.core",1003328583,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/todo/core.cljs",16,1,127,127,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(todo.core.home_page)?todo.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__36279__auto__)){
var vec__43052 = params__36279__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return todo.core.home_page;},new cljs.core.Symbol("todo.core","home-page","todo.core/home-page",-1366651088,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"todo.core","todo.core",1003328583,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/todo/core.cljs",16,1,127,127,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(todo.core.home_page)?todo.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__36278__auto___43055);

var action__36278__auto___43061 = (function (params__36279__auto__){
if(cljs.core.map_QMARK_.call(null,params__36279__auto__)){
var map__43056 = params__36279__auto__;
var map__43056__$1 = ((((!((map__43056 == null)))?((((map__43056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43056):map__43056);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return todo.core.about_page;},new cljs.core.Symbol("todo.core","about-page","todo.core/about-page",-1031847072,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"todo.core","todo.core",1003328583,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/todo/core.cljs",17,1,137,137,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(todo.core.about_page)?todo.core.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__36279__auto__)){
var vec__43058 = params__36279__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return todo.core.about_page;},new cljs.core.Symbol("todo.core","about-page","todo.core/about-page",-1031847072,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"todo.core","todo.core",1003328583,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/todo/core.cljs",17,1,137,137,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(todo.core.about_page)?todo.core.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__36278__auto___43061);

todo.core.mount_root = (function todo$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.core.current_page], null),document.getElementById("app"));
});
todo.core.init_BANG_ = (function todo$core$init_BANG_(){
accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route.call(null,path);
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return todo.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map