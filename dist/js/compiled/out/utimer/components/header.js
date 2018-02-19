// Compiled by ClojureScript 1.9.671 {}
goog.provide('utimer.components.header');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('rum.core');
goog.require('utimer.layout');
goog.require('utimer.components.utils');
utimer.components.header.c_header = rum.core.build_defcs.call(null,(function (state,app_state){
var map__46859 = rum.core.react.call(null,app_state);
var map__46859__$1 = ((((!((map__46859 == null)))?((((map__46859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46859):map__46859);
var layout = cljs.core.get.call(null,map__46859__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return React.createElement("div",({"className": "ut-header"}),React.createElement("div",({"className": "header-title noselect"}),"\u03BCTimer"),React.createElement("div",({"className": "header-template-chooser"}),sablono.interpreter.create_element.call(null,"select",({"defaultValue": utimer.layout.template_default, "onChange": ((function (map__46859,map__46859__$1,layout){
return (function (e){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"layout","layout",-2120940921),cljs.reader.read_string.call(null,e.target.value));
});})(map__46859,map__46859__$1,layout))
}),React.createElement("option",({"value": utimer.layout.template_default}),"Default"),React.createElement("option",({"value": utimer.layout.template_pomodoro}),"Pomodoro"),React.createElement("option",({"value": utimer.layout.template_boxing}),"Boxing"),React.createElement("option",({"value": utimer.layout.template_meditation}),"Meditation"))),React.createElement("div",({"className": "header-end-spacer"}),React.createElement("a",({"href": "http://github.com/benzap/utimer", "title": "View Github Page"}),React.createElement("div",({"className": "material-icons"}),"help"))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"c-header");
