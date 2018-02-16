// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.components.adder');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('utimer.utils');
utimer.components.adder.add_flat_alarm = (function utimer$components$adder$add_flat_alarm(app_state){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"flat","flat",577594262),new cljs.core.Keyword(null,"initial","initial",1854648214),"10 Minutes",new cljs.core.Keyword(null,"id","id",-1388402092),utimer.utils.create_uuid.call(null)], null));
});
utimer.components.adder.c_adder = rum.core.build_defcs.call(null,(function (state,app_state){
return React.createElement("div",({"title": "Add Timer", "onClick": (function (e){
return utimer.components.adder.add_flat_alarm.call(null,app_state);
}), "className": "adder-container"}),React.createElement("div",({"className": "material-icons noselect"}),"add"));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (_){
return "unique-id-adder";
})], null),rum.core.reactive], null),"c-adder");
