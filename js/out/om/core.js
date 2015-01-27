// Compiled by ClojureScript 0.0-2727 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj29768 = {};
return obj29768;
})();

om.core.display_name = (function display_name(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.display_name[(function (){var G__29772 = x__4895__auto__;
return goog.typeOf(G__29772);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.display_name["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj29774 = {};
return obj29774;
})();

om.core.init_state = (function init_state(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.init_state[(function (){var G__29778 = x__4895__auto__;
return goog.typeOf(G__29778);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.init_state["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj29780 = {};
return obj29780;
})();

om.core.should_update = (function should_update(this$,next_props,next_state){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.should_update[(function (){var G__29784 = x__4895__auto__;
return goog.typeOf(G__29784);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.should_update["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj29786 = {};
return obj29786;
})();

om.core.will_mount = (function will_mount(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.will_mount[(function (){var G__29790 = x__4895__auto__;
return goog.typeOf(G__29790);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.will_mount["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj29792 = {};
return obj29792;
})();

om.core.did_mount = (function did_mount(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.did_mount[(function (){var G__29796 = x__4895__auto__;
return goog.typeOf(G__29796);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.did_mount["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj29798 = {};
return obj29798;
})();

om.core.will_unmount = (function will_unmount(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.will_unmount[(function (){var G__29802 = x__4895__auto__;
return goog.typeOf(G__29802);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.will_unmount["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj29804 = {};
return obj29804;
})();

om.core.will_update = (function will_update(this$,next_props,next_state){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.will_update[(function (){var G__29808 = x__4895__auto__;
return goog.typeOf(G__29808);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.will_update["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj29810 = {};
return obj29810;
})();

om.core.did_update = (function did_update(this$,prev_props,prev_state){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.did_update[(function (){var G__29814 = x__4895__auto__;
return goog.typeOf(G__29814);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.did_update["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj29816 = {};
return obj29816;
})();

om.core.will_receive_props = (function will_receive_props(this$,next_props){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.will_receive_props[(function (){var G__29820 = x__4895__auto__;
return goog.typeOf(G__29820);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.will_receive_props["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj29822 = {};
return obj29822;
})();

om.core.render = (function render(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.render[(function (){var G__29826 = x__4895__auto__;
return goog.typeOf(G__29826);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.render["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj29828 = {};
return obj29828;
})();

om.core.render_props = (function render_props(this$,props,state){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.render_props[(function (){var G__29832 = x__4895__auto__;
return goog.typeOf(G__29832);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.render_props["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj29834 = {};
return obj29834;
})();

om.core.render_state = (function render_state(this$,state){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.render_state[(function (){var G__29838 = x__4895__auto__;
return goog.typeOf(G__29838);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.render_state["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj29840 = {};
return obj29840;
})();


om.core.IOmSwap = (function (){var obj29842 = {};
return obj29842;
})();

om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._om_swap_BANG_[(function (){var G__29846 = x__4895__auto__;
return goog.typeOf(G__29846);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj29848 = {};
return obj29848;
})();

om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._get_state[(function (){var G__29854 = x__4895__auto__;
return goog.typeOf(G__29854);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._get_state["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._get_state[(function (){var G__29856 = x__4895__auto__;
return goog.typeOf(G__29856);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._get_state["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;


om.core.IGetRenderState = (function (){var obj29858 = {};
return obj29858;
})();

om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._get_render_state[(function (){var G__29864 = x__4895__auto__;
return goog.typeOf(G__29864);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._get_render_state["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._get_render_state[(function (){var G__29866 = x__4895__auto__;
return goog.typeOf(G__29866);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._get_render_state["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;


om.core.ISetState = (function (){var obj29868 = {};
return obj29868;
})();

om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._set_state_BANG_[(function (){var G__29874 = x__4895__auto__;
return goog.typeOf(G__29874);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._set_state_BANG_[(function (){var G__29876 = x__4895__auto__;
return goog.typeOf(G__29876);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;


om.core.IRenderQueue = (function (){var obj29878 = {};
return obj29878;
})();

om.core._get_queue = (function _get_queue(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._get_queue[(function (){var G__29882 = x__4895__auto__;
return goog.typeOf(G__29882);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._get_queue["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._queue_render_BANG_[(function (){var G__29886 = x__4895__auto__;
return goog.typeOf(G__29886);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._empty_queue_BANG_[(function (){var G__29890 = x__4895__auto__;
return goog.typeOf(G__29890);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj29892 = {};
return obj29892;
})();

om.core._value = (function _value(x){
if((function (){var and__4239__auto__ = x;
if(and__4239__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__4239__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4895__auto__ = (((x == null))?null:x);
return (function (){var or__4251__auto__ = (om.core._value[(function (){var G__29896 = x__4895__auto__;
return goog.typeOf(G__29896);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._value["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj29898 = {};
return obj29898;
})();

om.core._path = (function _path(cursor){
if((function (){var and__4239__auto__ = cursor;
if(and__4239__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__4239__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4895__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4251__auto__ = (om.core._path[(function (){var G__29902 = x__4895__auto__;
return goog.typeOf(G__29902);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._path["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function _state(cursor){
if((function (){var and__4239__auto__ = cursor;
if(and__4239__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__4239__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4895__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4251__auto__ = (om.core._state[(function (){var G__29906 = x__4895__auto__;
return goog.typeOf(G__29906);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._state["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj29908 = {};
return obj29908;
})();

om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){
if((function (){var and__4239__auto__ = value;
if(and__4239__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__4239__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4895__auto__ = (((value == null))?null:value);
return (function (){var or__4251__auto__ = (om.core._to_cursor[(function (){var G__29914 = x__4895__auto__;
return goog.typeOf(G__29914);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._to_cursor["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){
if((function (){var and__4239__auto__ = value;
if(and__4239__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__4239__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4895__auto__ = (((value == null))?null:value);
return (function (){var or__4251__auto__ = (om.core._to_cursor[(function (){var G__29916 = x__4895__auto__;
return goog.typeOf(G__29916);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._to_cursor["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;


om.core.ICursorDerive = (function (){var obj29918 = {};
return obj29918;
})();

om.core._derive = (function _derive(cursor,derived,state,path){
if((function (){var and__4239__auto__ = cursor;
if(and__4239__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__4239__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4895__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4251__auto__ = (om.core._derive[(function (){var G__29922 = x__4895__auto__;
return goog.typeOf(G__29922);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._derive["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
var G__29923 = derived;
var G__29924 = state;
var G__29925 = path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__29923,G__29924,G__29925) : om.core.to_cursor.call(null,G__29923,G__29924,G__29925));
}));
om.core.path = (function path(cursor){
return om.core._path(cursor);
});
om.core.value = (function value(cursor){
return om.core._value(cursor);
});
om.core.state = (function state(cursor){
return om.core._state(cursor);
});

om.core.ITransact = (function (){var obj29927 = {};
return obj29927;
})();

om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){
if((function (){var and__4239__auto__ = cursor;
if(and__4239__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__4239__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4895__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4251__auto__ = (om.core._transact_BANG_[(function (){var G__29931 = x__4895__auto__;
return goog.typeOf(G__29931);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj29933 = {};
return obj29933;
})();

om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){
if((function (){var and__4239__auto__ = x;
if(and__4239__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__4239__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4895__auto__ = (((x == null))?null:x);
return (function (){var or__4251__auto__ = (om.core._listen_BANG_[(function (){var G__29937 = x__4895__auto__;
return goog.typeOf(G__29937);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){
if((function (){var and__4239__auto__ = x;
if(and__4239__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4895__auto__ = (((x == null))?null:x);
return (function (){var or__4251__auto__ = (om.core._unlisten_BANG_[(function (){var G__29941 = x__4895__auto__;
return goog.typeOf(G__29941);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__4239__auto__ = x;
if(and__4239__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__4239__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4895__auto__ = (((x == null))?null:x);
return (function (){var or__4251__auto__ = (om.core._notify_BANG_[(function (){var G__29945 = x__4895__auto__;
return goog.typeOf(G__29945);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj29947 = {};
return obj29947;
})();

om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._set_property_BANG_[(function (){var G__29951 = x__4895__auto__;
return goog.typeOf(G__29951);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._remove_property_BANG_[(function (){var G__29955 = x__4895__auto__;
return goog.typeOf(G__29955);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._remove_properties_BANG_[(function (){var G__29959 = x__4895__auto__;
return goog.typeOf(G__29959);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function _get_property(this$,id,p){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._get_property[(function (){var G__29963 = x__4895__auto__;
return goog.typeOf(G__29963);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._get_property["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj29965 = {};
return obj29965;
})();

om.core._root_key = (function _root_key(cursor){
if((function (){var and__4239__auto__ = cursor;
if(and__4239__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__4239__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4895__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4251__auto__ = (om.core._root_key[(function (){var G__29969 = x__4895__auto__;
return goog.typeOf(G__29969);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._root_key["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj29971 = {};
return obj29971;
})();

om.core._adapt = (function _adapt(this$,other){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._adapt[(function (){var G__29975 = x__4895__auto__;
return goog.typeOf(G__29975);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._adapt["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function adapt(x,other){
return om.core._adapt(x,other);
});

om.core.IOmRef = (function (){var obj29977 = {};
return obj29977;
})();

om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._add_dep_BANG_[(function (){var G__29981 = x__4895__auto__;
return goog.typeOf(G__29981);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._remove_dep_BANG_[(function (){var G__29985 = x__4895__auto__;
return goog.typeOf(G__29985);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._refresh_deps_BANG_[(function (){var G__29989 = x__4895__auto__;
return goog.typeOf(G__29989);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function _get_deps(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._get_deps[(function (){var G__29993 = x__4895__auto__;
return goog.typeOf(G__29993);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._get_deps["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){
var old_state = (function (){var G__30003 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30003) : cljs.core.deref.call(null,G__30003));
})();
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__30004 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__30004) : om.core.path.call(null,G__30004));
})(),korks);
var ret = (((function (){var G__30005 = state;
if(G__30005){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30005.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__30005.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__30005);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__30005);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$22)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$23,path,cljs.core.constant$keyword$24,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$25,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30006 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30006) : cljs.core.deref.call(null,G__30006));
})(),path),cljs.core.constant$keyword$26,old_state,cljs.core.constant$keyword$27,(function (){var G__30007 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30007) : cljs.core.deref.call(null,G__30007));
})()], null);
if(!((tag == null))){
var G__30008 = cursor;
var G__30009 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$28,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__30008,G__30009) : om.core.notify_STAR_.call(null,G__30008,G__30009));
} else {
var G__30010 = cursor;
var G__30011 = tx_data;
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__30010,G__30011) : om.core.notify_STAR_.call(null,G__30010,G__30011));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){
var G__30013 = x;
if(G__30013){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30013.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__30013.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__30013);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__30013);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (function (){var G__30015 = node;
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__30015) : c.call(null,G__30015));
})();
} else {
return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function() {
var get_props = null;
var get_props__1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], 0)))].join('')));
}

return (x.props["__om_cursor"]);
});
var get_props__2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], 0)))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__30017 = (x.props["__om_cursor"]);
var G__30017__$1 = ((cljs.core.seq(korks__$1))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__30017,korks__$1):G__30017);
return G__30017__$1;
});
get_props = function(x,korks){
switch(arguments.length){
case 1:
return get_props__1.call(this,x);
case 2:
return get_props__2.call(this,x,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_props.cljs$core$IFn$_invoke$arity$1 = get_props__1;
get_props.cljs$core$IFn$_invoke$arity$2 = get_props__2;
return get_props;
})()
;
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_(korks))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){
var state = owner.state;
var temp__4126__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var pending_state = temp__4126__auto__;
var G__30022 = state;
(G__30022["__om_prev_state"] = (state["__om_state"]));

(G__30022["__om_state"] = pending_state);

(G__30022["__om_pending_state"] = null);

return G__30022;
} else {
return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){
return merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});
var merge_props_state__2 = (function (owner,props){
var props__$1 = (function (){var or__4251__auto__ = props;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__4251__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state], 0)));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){
var val = om.core.value(ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__30027 = om.core.state(ref);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30027) : cljs.core.deref.call(null,G__30027));
})(),(function (){var G__30028 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__30028) : om.core.path.call(null,G__30028));
})(),cljs.core.constant$keyword$29);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count(refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value(ref);
var ref_state = om.core.state(ref);
var ref_path = (function (){var G__30034 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__30034) : om.core.path.call(null,G__30034));
})();
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__30035 = ref_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30035) : cljs.core.deref.call(null,G__30035));
})(),ref_path,cljs.core.constant$keyword$29);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.constant$keyword$29)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(function (){var G__30036 = ref_val_SINGLEQUOTE_;
var G__30037 = ref_state;
var G__30038 = ref_path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__30036,G__30037,G__30038) : om.core.to_cursor.call(null,G__30036,G__30037,G__30038));
})());
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$30,cljs.core.constant$keyword$31,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36,cljs.core.constant$keyword$37,cljs.core.constant$keyword$38,cljs.core.constant$keyword$39,cljs.core.constant$keyword$40],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__30040 = c;
if(G__30040){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30040.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__30040.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__30040);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__30040);
}
})()){
var state_30065 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__4251__auto__ = (state_30065["__om_prev_state"]);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return (state_30065["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__30041 = c;
if(G__30041){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30041.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__30041.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__30041);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__30041);
}
})()){
om.core.will_unmount(c);
} else {
}

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__30042 = cljs.core.seq(refs);
var chunk__30043 = null;
var count__30044 = (0);
var i__30045 = (0);
while(true){
if((i__30045 < count__30044)){
var ref = chunk__30043.cljs$core$IIndexed$_nth$arity$2(null,i__30045);
var G__30046_30066 = this$;
var G__30047_30067 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__30046_30066,G__30047_30067) : om.core.unobserve.call(null,G__30046_30066,G__30047_30067));

var G__30068 = seq__30042;
var G__30069 = chunk__30043;
var G__30070 = count__30044;
var G__30071 = (i__30045 + (1));
seq__30042 = G__30068;
chunk__30043 = G__30069;
count__30044 = G__30070;
i__30045 = G__30071;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__30042);
if(temp__4126__auto____$1){
var seq__30042__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__30042__$1)){
var c__5038__auto__ = cljs.core.chunk_first(seq__30042__$1);
var G__30072 = cljs.core.chunk_rest(seq__30042__$1);
var G__30073 = c__5038__auto__;
var G__30074 = cljs.core.count(c__5038__auto__);
var G__30075 = (0);
seq__30042 = G__30072;
chunk__30043 = G__30073;
count__30044 = G__30074;
i__30045 = G__30075;
continue;
} else {
var ref = cljs.core.first(seq__30042__$1);
var G__30048_30076 = this$;
var G__30049_30077 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__30048_30076,G__30049_30077) : om.core.unobserve.call(null,G__30048_30076,G__30049_30077));

var G__30078 = cljs.core.next(seq__30042__$1);
var G__30079 = null;
var G__30080 = (0);
var G__30081 = (0);
seq__30042 = G__30078;
chunk__30043 = G__30079;
count__30044 = G__30080;
i__30045 = G__30081;
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
}),(function (next_props){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__30050 = c;
if(G__30050){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30050.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__30050.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__30050);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__30050);
}
})()){
return om.core.will_receive_props(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children(this$);
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);

if((function (){var G__30051 = c;
if(G__30051){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30051.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__30051.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__30051);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__30051);
}
})()){
return om.core.should_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor))){
return true;
} else {
if((om.core.cursor_QMARK_(cursor)) && (om.core.cursor_QMARK_(next_cursor)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor)))){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$),om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4239__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));
if(and__4239__auto__){
return cljs.core.some(((function (and__4239__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__30039_SHARP_){
return om.core.ref_changed_QMARK_(p1__30039_SHARP_);
});})(and__4239__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__4239__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var _STAR_parent_STAR_30052 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_30053 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_30054 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_30055 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_30056 = om.core._STAR_root_key_STAR_;
try{om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

if((function (){var G__30057 = c;
if(G__30057){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30057.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__30057.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__30057);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__30057);
}
})()){
return om.core.render(c);
} else {
if((function (){var G__30058 = c;
if(G__30058){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30058.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__30058.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__30058);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__30058);
}
})()){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if((function (){var G__30059 = c;
if(G__30059){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30059.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__30059.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__30059);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__30059);
}
})()){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_30056;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_30055;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_30054;

om.core._STAR_state_STAR_ = _STAR_state_STAR_30053;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_30052;
}}),(function (next_props,next_state){
var this$ = this;
var c_30082 = om.core.children(this$);
if((function (){var G__30060 = c_30082;
if(G__30060){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30060.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__30060.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__30060);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__30060);
}
})()){
var state_30083 = this$.state;
om.core.will_update(c_30082,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.merge_pending_state(this$);

return om.core.update_refs(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__4251__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__30061 = c;
if(G__30061){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30061.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__30061.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__30061);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__30061);
}
})())?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$41)], 0)), "__om_id": (function (){var or__4251__auto__ = id;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__30062 = c;
if(G__30062){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30062.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__30062.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__30062);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__30062);
}
})()){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__30063 = c;
if(G__30063){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30063.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__30063.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__30063);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__30063);
}
})()){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_30084 = om.core.children(this$);
if((function (){var G__30064 = c_30084;
if(G__30064){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30064.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__30064.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__30064);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__30064);
}
})()){
om.core.will_mount(c_30084);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){
var x30086 = obj;
x30086.om$core$IGetState$ = true;

x30086.om$core$IGetState$_get_state$arity$1 = ((function (x30086){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4251__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return (state["__om_state"]);
}
});})(x30086))
;

x30086.om$core$IGetState$_get_state$arity$2 = ((function (x30086){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x30086))
;

x30086.om$core$IGetRenderState$ = true;

x30086.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x30086){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x30086))
;

x30086.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x30086){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x30086))
;

x30086.om$core$ISetState$ = true;

x30086.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x30086){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__4239__auto__ = !((app_state == null));
if(and__4239__auto__){
return render;
} else {
return and__4239__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x30086))
;

x30086.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x30086){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__4239__auto__ = !((app_state == null));
if(and__4239__auto__){
return render;
} else {
return and__4239__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x30086))
;

return x30086;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));
om.core.react_id = (function react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"id","id",252129435,null)], 0)))].join('')));
}

return id;
});
om.core.get_gstate = (function get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate(owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42,om.core.react_id(owner)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30088 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30088) : cljs.core.deref.call(null,G__30088));
})(),spath);
if(cljs.core.truth_(cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.constant$keyword$44,cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(states__$1)),cljs.core.constant$keyword$45,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.constant$keyword$43);
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.constant$keyword$37,(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__4251__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__4251__auto__ = cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$41),(((function (){var G__30089 = c;
if(G__30089){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30089.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__30089.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__30089);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__30089);
}
})())?om.core.init_state(c):null)], 0));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42,om.core.react_id(this$),cljs.core.constant$keyword$45], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.constant$keyword$40,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_30103 = om.core.children(this$);
if((function (){var G__30090 = c_30103;
if(G__30090){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30090.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__30090.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__30090);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__30090);
}
})()){
om.core.will_mount(c_30103);
} else {
}

return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$32,(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__30091 = c;
if(G__30091){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30091.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__30091.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__30091);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__30091);
}
})()){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42], null),cljs.core.dissoc,cljs.core.array_seq([om.core.react_id(this$)], 0));

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__30092 = cljs.core.seq(refs);
var chunk__30093 = null;
var count__30094 = (0);
var i__30095 = (0);
while(true){
if((i__30095 < count__30094)){
var ref = chunk__30093.cljs$core$IIndexed$_nth$arity$2(null,i__30095);
var G__30096_30104 = this$;
var G__30097_30105 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__30096_30104,G__30097_30105) : om.core.unobserve.call(null,G__30096_30104,G__30097_30105));

var G__30106 = seq__30092;
var G__30107 = chunk__30093;
var G__30108 = count__30094;
var G__30109 = (i__30095 + (1));
seq__30092 = G__30106;
chunk__30093 = G__30107;
count__30094 = G__30108;
i__30095 = G__30109;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__30092);
if(temp__4126__auto____$1){
var seq__30092__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__30092__$1)){
var c__5038__auto__ = cljs.core.chunk_first(seq__30092__$1);
var G__30110 = cljs.core.chunk_rest(seq__30092__$1);
var G__30111 = c__5038__auto__;
var G__30112 = cljs.core.count(c__5038__auto__);
var G__30113 = (0);
seq__30092 = G__30110;
chunk__30093 = G__30111;
count__30094 = G__30112;
i__30095 = G__30113;
continue;
} else {
var ref = cljs.core.first(seq__30092__$1);
var G__30098_30114 = this$;
var G__30099_30115 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__30098_30114,G__30099_30115) : om.core.unobserve.call(null,G__30098_30114,G__30099_30115));

var G__30116 = cljs.core.next(seq__30092__$1);
var G__30117 = null;
var G__30118 = (0);
var G__30119 = (0);
seq__30092 = G__30116;
chunk__30093 = G__30117;
count__30094 = G__30118;
i__30095 = G__30119;
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
}),cljs.core.constant$keyword$36,(function (next_props,next_state){
var this$ = this;
var props_30120 = this$.props;
var c_30121 = om.core.children(this$);
if((function (){var G__30100 = c_30121;
if(G__30100){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30100.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__30100.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__30100);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__30100);
}
})()){
var state_30122 = this$.state;
om.core.will_update(c_30121,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.constant$keyword$30,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30101 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30101) : cljs.core.deref.call(null,G__30101));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42,om.core.react_id(this$)], null);
if((function (){var G__30102 = c;
if(G__30102){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30102.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__30102.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__30102);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__30102);
}
})()){
var state_30123 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__4251__auto__ = cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.constant$keyword$44], 0));
} else {
return null;
}
})], 0));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){
var x30127 = cljs.core.clj__GT_js(methods$);
x30127.om$core$IGetState$ = true;

x30127.om$core$IGetState$_get_state$arity$1 = ((function (x30127){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30128 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30128) : cljs.core.deref.call(null,G__30128));
})(),spath);
var or__4251__auto__ = cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(states);
}
});})(x30127))
;

x30127.om$core$IGetState$_get_state$arity$2 = ((function (x30127){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x30127))
;

x30127.om$core$IGetRenderState$ = true;

x30127.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x30127){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42,om.core.react_id(this$__$1),cljs.core.constant$keyword$45], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30129 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30129) : cljs.core.deref.call(null,G__30129));
})(),spath);
});})(x30127))
;

x30127.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x30127){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x30127))
;

x30127.om$core$ISetState$ = true;

x30127.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x30127){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate(this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42,om.core.react_id(this$__$1),cljs.core.constant$keyword$43], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__4239__auto__ = !((gstate == null));
if(and__4239__auto__){
return render;
} else {
return and__4239__auto__;
}
})())){
return om.core._queue_render_BANG_(gstate,this$__$1);
} else {
return null;
}
});})(x30127))
;

x30127.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x30127){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x30127))
;

return x30127;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){
if((function (){var G__30132 = x;
if(G__30132){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30132.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__30132.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__30132);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__30132);
}
})()){
return !(cljs.core.keyword_identical_QMARK_((function (){var G__30133 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30133) : cljs.core.deref.call(null,G__30133));
})(),cljs.core.constant$keyword$46));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,cljs.core.constant$keyword$29);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.constant$keyword$29))){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__30135){
var vec__30136 = p__30135;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30136,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30136,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__30138 = null;
var G__30138__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__30138__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__30138 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__30138__2.call(this,self__,k);
case 3:
return G__30138__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30138.cljs$core$IFn$_invoke$arity$2 = G__30138__2;
G__30138.cljs$core$IFn$_invoke$arity$3 = G__30138__3;
return G__30138;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args30134){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args30134)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__30137 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30137) : cljs.core.deref.call(null,G__30137));
})(),self__.path,cljs.core.constant$keyword$46);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count(self__.value))){
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.value,n,not_found),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__30141 = null;
var G__30141__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__30141__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__30141 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__30141__2.call(this,self__,k);
case 3:
return G__30141__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30141.cljs$core$IFn$_invoke$arity$2 = G__30141__2;
G__30141.cljs$core$IFn$_invoke$arity$3 = G__30141__3;
return G__30141;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args30139){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args30139)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__30140 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30140) : cljs.core.deref.call(null,G__30140));
})(),self__.path,cljs.core.constant$keyword$46);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){
var x30144 = cljs.core.clone(val);
x30144.cljs$core$IEquiv$ = true;

x30144.cljs$core$IEquiv$_equiv$arity$2 = ((function (x30144){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x30144))
;

x30144.om$core$ITransact$ = true;

x30144.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x30144){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x30144))
;

x30144.om$core$ICursor$ = true;

x30144.om$core$ICursor$_path$arity$1 = ((function (x30144){
return (function (_){
var ___$1 = this;
return path;
});})(x30144))
;

x30144.om$core$ICursor$_state$arity$1 = ((function (x30144){
return (function (_){
var ___$1 = this;
return state;
});})(x30144))
;

x30144.cljs$core$IDeref$ = true;

x30144.cljs$core$IDeref$_deref$arity$1 = ((function (x30144){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__30145 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30145) : cljs.core.deref.call(null,G__30145));
})(),path,cljs.core.constant$keyword$46);
});})(x30144))
;

return x30144;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){
return to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){
return to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){
if(om.core.cursor_QMARK_(val)){
return val;
} else {
if((function (){var G__30154 = val;
if(G__30154){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30154.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__30154.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__30154);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__30154);
}
})()){
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else {
if(cljs.core.indexed_QMARK_(val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_(val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__30155 = val;
if(G__30155){
var bit__4932__auto__ = (G__30155.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4932__auto__) || (G__30155.cljs$core$ICloneable$)){
return true;
} else {
if((!G__30155.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__30155);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__30155);
}
})()){
return om.core.to_cursor_STAR_(val,state,path);
} else {
return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){
var state = om.core._state(cursor);
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__30157 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30157) : cljs.core.deref.call(null,G__30157));
})(),state));
});


/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){
if((function (){var G__30160 = atom;
if(G__30160){
var bit__4932__auto__ = (G__30160.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4932__auto__) || (G__30160.cljs$core$IDeref$)){
return true;
} else {
if((!G__30160.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__30160);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__30160);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))], 0)))].join('')));
}

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((function (){var G__30161 = atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30161) : cljs.core.deref.call(null,G__30161));
})(),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__30162 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30162) : cljs.core.atom.call(null,G__30162));
})();
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){
var x30171 = cljs.core.clone(x);
x30171.om$core$ITransact$ = true;

x30171.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x30171){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
var G__30172_30175 = cursor__$1;
var G__30173_30176 = korks;
var G__30174_30177 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__30172_30175,G__30173_30176,G__30174_30177) : om.core.commit_BANG_.call(null,G__30172_30175,G__30173_30176,G__30174_30177));

return om.core._refresh_deps_BANG_(parent);
});})(x30171))
;

x30171.om$core$ICursorDerive$ = true;

x30171.om$core$ICursorDerive$_derive$arity$4 = ((function (x30171){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x30171))
;

x30171.om$core$IAdapt$ = true;

x30171.om$core$IAdapt$_adapt$arity$2 = ((function (x30171){
return (function (this$,other){
var this$__$1 = this;
return ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x30171))
;

x30171.cljs$core$ICloneable$ = true;

x30171.cljs$core$ICloneable$_clone$arity$1 = ((function (x30171){
return (function (this$){
var this$__$1 = this;
return ref_sub_cursor(cljs.core.clone(x),parent);
});})(x30171))
;

return x30171;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

if((function (){var G__30193 = cursor;
if(G__30193){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30193.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__30193.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__30193);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__30193);
}
})()){
return cursor;
} else {
var path = (function (){var G__30194 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__30194) : om.core.path.call(null,G__30194));
})();
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__30195 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30195) : cljs.core.atom.call(null,G__30195));
})())),path);
var x30196 = cljs.core.clone(cursor);
x30196.om$core$ITransact$ = true;

x30196.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x30196,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
var G__30197_30208 = cursor__$2;
var G__30198_30209 = korks;
var G__30199_30210 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__30197_30208,G__30198_30209,G__30199_30210) : om.core.commit_BANG_.call(null,G__30197_30208,G__30198_30209,G__30199_30210));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x30196,path,storage))
;

x30196.om$core$IOmRef$ = true;

x30196.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x30196,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(function (){var G__30200 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__30200) : om.core.id.call(null,G__30200));
})(),c);
});})(x30196,path,storage))
;

x30196.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x30196,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(function (){var G__30201 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__30201) : om.core.id.call(null,G__30201));
})());
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x30196,path,storage))
;

x30196.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x30196,path,storage){
return (function (_){
var ___$1 = this;
var seq__30202 = cljs.core.seq(cljs.core.vals((function (){var G__30206 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30206) : cljs.core.deref.call(null,G__30206));
})()));
var chunk__30203 = null;
var count__30204 = (0);
var i__30205 = (0);
while(true){
if((i__30205 < count__30204)){
var c = chunk__30203.cljs$core$IIndexed$_nth$arity$2(null,i__30205);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__30211 = seq__30202;
var G__30212 = chunk__30203;
var G__30213 = count__30204;
var G__30214 = (i__30205 + (1));
seq__30202 = G__30211;
chunk__30203 = G__30212;
count__30204 = G__30213;
i__30205 = G__30214;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__30202);
if(temp__4126__auto__){
var seq__30202__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30202__$1)){
var c__5038__auto__ = cljs.core.chunk_first(seq__30202__$1);
var G__30215 = cljs.core.chunk_rest(seq__30202__$1);
var G__30216 = c__5038__auto__;
var G__30217 = cljs.core.count(c__5038__auto__);
var G__30218 = (0);
seq__30202 = G__30215;
chunk__30203 = G__30216;
count__30204 = G__30217;
i__30205 = G__30218;
continue;
} else {
var c = cljs.core.first(seq__30202__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__30219 = cljs.core.next(seq__30202__$1);
var G__30220 = null;
var G__30221 = (0);
var G__30222 = (0);
seq__30202 = G__30219;
chunk__30203 = G__30220;
count__30204 = G__30221;
i__30205 = G__30222;
continue;
}
} else {
return null;
}
}
break;
}
});})(x30196,path,storage))
;

x30196.om$core$IOmRef$_get_deps$arity$1 = ((function (x30196,path,storage){
return (function (_){
var ___$1 = this;
var G__30207 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30207) : cljs.core.deref.call(null,G__30207));
});})(x30196,path,storage))
;

x30196.om$core$ICursorDerive$ = true;

x30196.om$core$ICursorDerive$_derive$arity$4 = ((function (x30196,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x30196,path,storage))
;

return x30196;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__4251__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_(refs,ref)){
return (state["__om_refs"] = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(refs,ref));
} else {
return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_(c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))], 0)))].join('')));
}

if(om.core.cursor_QMARK_(ref)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))], 0)))].join('')));
}

om.core.add_ref_to_component_BANG_(c,ref);

om.core._add_dep_BANG_(ref,c);

return ref;
});
om.core.unobserve = (function unobserve(c,ref){
om.core.remove_ref_from_component_BANG_(c,ref);

om.core._remove_dep_BANG_(ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__30223 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30223) : cljs.core.atom.call(null,G__30223));
})();
om.core.get_renderT = (function get_renderT(state){
var or__4251__auto__ = state.om$render$T;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return (0);
}
});
/**
* Force a render of *all* roots. Usage of this function is almost
* never recommended.
*/
om.core.render_all = (function() {
var render_all = null;
var render_all__0 = (function (){
return render_all.cljs$core$IFn$_invoke$arity$1(null);
});
var render_all__1 = (function (state){
om.core.refresh_queued = false;

var seq__30230_30235 = cljs.core.seq((function (){var G__30234 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30234) : cljs.core.deref.call(null,G__30234));
})());
var chunk__30231_30236 = null;
var count__30232_30237 = (0);
var i__30233_30238 = (0);
while(true){
if((i__30233_30238 < count__30232_30237)){
var f_30239 = chunk__30231_30236.cljs$core$IIndexed$_nth$arity$2(null,i__30233_30238);
(f_30239.cljs$core$IFn$_invoke$arity$0 ? f_30239.cljs$core$IFn$_invoke$arity$0() : f_30239.call(null));

var G__30240 = seq__30230_30235;
var G__30241 = chunk__30231_30236;
var G__30242 = count__30232_30237;
var G__30243 = (i__30233_30238 + (1));
seq__30230_30235 = G__30240;
chunk__30231_30236 = G__30241;
count__30232_30237 = G__30242;
i__30233_30238 = G__30243;
continue;
} else {
var temp__4126__auto___30244 = cljs.core.seq(seq__30230_30235);
if(temp__4126__auto___30244){
var seq__30230_30245__$1 = temp__4126__auto___30244;
if(cljs.core.chunked_seq_QMARK_(seq__30230_30245__$1)){
var c__5038__auto___30246 = cljs.core.chunk_first(seq__30230_30245__$1);
var G__30247 = cljs.core.chunk_rest(seq__30230_30245__$1);
var G__30248 = c__5038__auto___30246;
var G__30249 = cljs.core.count(c__5038__auto___30246);
var G__30250 = (0);
seq__30230_30235 = G__30247;
chunk__30231_30236 = G__30248;
count__30232_30237 = G__30249;
i__30233_30238 = G__30250;
continue;
} else {
var f_30251 = cljs.core.first(seq__30230_30245__$1);
(f_30251.cljs$core$IFn$_invoke$arity$0 ? f_30251.cljs$core$IFn$_invoke$arity$0() : f_30251.call(null));

var G__30252 = cljs.core.next(seq__30230_30245__$1);
var G__30253 = null;
var G__30254 = (0);
var G__30255 = (0);
seq__30230_30235 = G__30252;
chunk__30231_30236 = G__30253;
count__30232_30237 = G__30254;
i__30233_30238 = G__30255;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT(state) + (1));
}
});
render_all = function(state){
switch(arguments.length){
case 0:
return render_all__0.call(this);
case 1:
return render_all__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_all.cljs$core$IFn$_invoke$arity$0 = render_all__0;
render_all.cljs$core$IFn$_invoke$arity$1 = render_all__1;
return render_all;
})()
;
om.core.roots = (function (){var G__30256 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30256) : cljs.core.atom.call(null,G__30256));
})();
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){
if((function (){var or__4251__auto__ = (function (){var G__30263 = x;
if(G__30263){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30263.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__30263.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__30263);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__30263);
}
})();
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (function (){var G__30265 = x;
if(G__30265){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto____$1 = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto____$1)){
return or__4251__auto____$1;
} else {
return G__30265.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__30265.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__30265);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__30265);
}
})();
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
var G__30266 = x;
if(G__30266){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto____$2 = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto____$2)){
return or__4251__auto____$2;
} else {
return G__30266.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__30266.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__30266);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__30266);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], 0)))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.constant$keyword$47,null,cljs.core.constant$keyword$48,null,cljs.core.constant$keyword$49,null,cljs.core.constant$keyword$50,null,cljs.core.constant$keyword$51,null,cljs.core.constant$keyword$52,null,cljs.core.constant$keyword$53,null,cljs.core.constant$keyword$54,null,cljs.core.constant$keyword$55,null,cljs.core.constant$keyword$56,null,cljs.core.constant$keyword$57,null], null), null),cljs.core.keys(m));
});
om.core.id = (function id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){
return get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});
var get_descriptor__2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = (function (){var G__30271 = (function (){var G__30272 = (function (){var or__4251__auto__ = descriptor;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__4251__auto____$1)){
return or__4251__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
return React.createClass(G__30272);
})();
return React.createFactory(G__30271);
})());
} else {
}

return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.getf = (function() {
var getf = null;
var getf__2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});
var getf__3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});
getf = function(f,cursor,opts){
switch(arguments.length){
case 2:
return getf__2.call(this,f,cursor);
case 3:
return getf__3.call(this,f,cursor,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
getf.cljs$core$IFn$_invoke$arity$2 = getf__2;
getf.cljs$core$IFn$_invoke$arity$3 = getf__3;
return getf;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){
return build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))], 0)))].join('')));
}

if(om.core.valid_opts_QMARK_(m)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keys(m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))], 0)))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(om.core.getf.cljs$core$IFn$_invoke$arity$2(f,cursor));
var G__30290 = {"children": ((function (shared,ctor){
return (function (this$){
var ret = (function (){var G__30291 = cursor;
var G__30292 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30291,G__30292) : f.call(null,G__30291,G__30292));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__30290) : ctor.call(null,G__30290));
} else {
var map__30293 = m;
var map__30293__$1 = ((cljs.core.seq_QMARK_(map__30293))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30293):map__30293);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30293__$1,cljs.core.constant$keyword$55);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30293__$1,cljs.core.constant$keyword$52);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30293__$1,cljs.core.constant$keyword$53);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30293__$1,cljs.core.constant$keyword$54);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30293__$1,cljs.core.constant$keyword$51);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$48);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
var G__30294 = cursor;
var G__30295 = i;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__30294,G__30295) : dataf.call(null,G__30294,G__30295));
} else {
var G__30296 = cursor;
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__30296) : dataf.call(null,G__30296));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?(function (){var G__30297 = cursor_SINGLEQUOTE_;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__30297) : key_fn.call(null,G__30297));
})():cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$50)
));
var shared = (function (){var or__4251__auto__ = cljs.core.constant$keyword$57.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(om.core.getf.cljs$core$IFn$_invoke$arity$3(f,cursor_SINGLEQUOTE_,opts),cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(m));
var G__30298 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__30293,map__30293__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__30299 = cursor_SINGLEQUOTE_;
var G__30300 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30299,G__30300) : f.call(null,G__30299,G__30300));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__30293,map__30293__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__30293,map__30293__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__30301 = cursor_SINGLEQUOTE_;
var G__30302 = this$;
var G__30303 = opts;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__30301,G__30302,G__30303) : f.call(null,G__30301,G__30302,G__30303));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__30293,map__30293__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__4251__auto__ = rkey;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__30298) : ctor.call(null,G__30298));

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){
return build.cljs$core$IFn$_invoke$arity$3(f,x,null);
});
var build__3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))], 0)))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = (function (){var G__30310 = f;
var G__30311 = x;
var G__30312 = m;
return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__30310,G__30311,G__30312) : om.core._STAR_instrument_STAR_.call(null,G__30310,G__30311,G__30312));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$58)){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){
return build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});
var build_all__3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))], 0)))].join('')));
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$56,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){
if((function (){var G__30335 = state;
if(G__30335){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30335.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__30335.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__30335);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__30335);
}
})()){
} else {
var properties_30354 = (function (){var G__30336 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30336) : cljs.core.atom.call(null,G__30336));
})();
var listeners_30355 = (function (){var G__30337 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30337) : cljs.core.atom.call(null,G__30337));
})();
var render_queue_30356 = (function (){var G__30338 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30338) : cljs.core.atom.call(null,G__30338));
})();
var x30339_30357 = state;
x30339_30357.om$core$IRenderQueue$ = true;

x30339_30357.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x30339_30357,properties_30354,listeners_30355,render_queue_30356){
return (function (this$){
var this$__$1 = this;
var G__30340 = render_queue_30356;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30340) : cljs.core.deref.call(null,G__30340));
});})(x30339_30357,properties_30354,listeners_30355,render_queue_30356))
;

x30339_30357.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x30339_30357,properties_30354,listeners_30355,render_queue_30356){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((function (){var G__30341 = render_queue_30356;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30341) : cljs.core.deref.call(null,G__30341));
})(),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_30356,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x30339_30357,properties_30354,listeners_30355,render_queue_30356))
;

x30339_30357.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x30339_30357,properties_30354,listeners_30355,render_queue_30356){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_30356,cljs.core.empty);
});})(x30339_30357,properties_30354,listeners_30355,render_queue_30356))
;

x30339_30357.om$core$INotify$ = true;

x30339_30357.om$core$INotify$_listen_BANG_$arity$3 = ((function (x30339_30357,properties_30354,listeners_30355,render_queue_30356){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_30355,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x30339_30357,properties_30354,listeners_30355,render_queue_30356))
;

x30339_30357.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x30339_30357,properties_30354,listeners_30355,render_queue_30356){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_30355,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x30339_30357,properties_30354,listeners_30355,render_queue_30356))
;

x30339_30357.om$core$INotify$_notify_BANG_$arity$3 = ((function (x30339_30357,properties_30354,listeners_30355,render_queue_30356){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__30342_30358 = cljs.core.seq((function (){var G__30346 = listeners_30355;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30346) : cljs.core.deref.call(null,G__30346));
})());
var chunk__30343_30359 = null;
var count__30344_30360 = (0);
var i__30345_30361 = (0);
while(true){
if((i__30345_30361 < count__30344_30360)){
var vec__30347_30362 = chunk__30343_30359.cljs$core$IIndexed$_nth$arity$2(null,i__30345_30361);
var __30363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30347_30362,(0),null);
var f_30364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30347_30362,(1),null);
var G__30348_30365 = tx_data;
var G__30349_30366 = root_cursor;
(f_30364.cljs$core$IFn$_invoke$arity$2 ? f_30364.cljs$core$IFn$_invoke$arity$2(G__30348_30365,G__30349_30366) : f_30364.call(null,G__30348_30365,G__30349_30366));

var G__30367 = seq__30342_30358;
var G__30368 = chunk__30343_30359;
var G__30369 = count__30344_30360;
var G__30370 = (i__30345_30361 + (1));
seq__30342_30358 = G__30367;
chunk__30343_30359 = G__30368;
count__30344_30360 = G__30369;
i__30345_30361 = G__30370;
continue;
} else {
var temp__4126__auto___30371 = cljs.core.seq(seq__30342_30358);
if(temp__4126__auto___30371){
var seq__30342_30372__$1 = temp__4126__auto___30371;
if(cljs.core.chunked_seq_QMARK_(seq__30342_30372__$1)){
var c__5038__auto___30373 = cljs.core.chunk_first(seq__30342_30372__$1);
var G__30374 = cljs.core.chunk_rest(seq__30342_30372__$1);
var G__30375 = c__5038__auto___30373;
var G__30376 = cljs.core.count(c__5038__auto___30373);
var G__30377 = (0);
seq__30342_30358 = G__30374;
chunk__30343_30359 = G__30375;
count__30344_30360 = G__30376;
i__30345_30361 = G__30377;
continue;
} else {
var vec__30350_30378 = cljs.core.first(seq__30342_30372__$1);
var __30379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30350_30378,(0),null);
var f_30380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30350_30378,(1),null);
var G__30351_30381 = tx_data;
var G__30352_30382 = root_cursor;
(f_30380.cljs$core$IFn$_invoke$arity$2 ? f_30380.cljs$core$IFn$_invoke$arity$2(G__30351_30381,G__30352_30382) : f_30380.call(null,G__30351_30381,G__30352_30382));

var G__30383 = cljs.core.next(seq__30342_30372__$1);
var G__30384 = null;
var G__30385 = (0);
var G__30386 = (0);
seq__30342_30358 = G__30383;
chunk__30343_30359 = G__30384;
count__30344_30360 = G__30385;
i__30345_30361 = G__30386;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x30339_30357,properties_30354,listeners_30355,render_queue_30356))
;

x30339_30357.om$core$IRootProperties$ = true;

x30339_30357.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x30339_30357,properties_30354,listeners_30355,render_queue_30356){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_30354,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x30339_30357,properties_30354,listeners_30355,render_queue_30356))
;

x30339_30357.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x30339_30357,properties_30354,listeners_30355,render_queue_30356){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_30354,cljs.core.dissoc,id,k);
});})(x30339_30357,properties_30354,listeners_30355,render_queue_30356))
;

x30339_30357.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x30339_30357,properties_30354,listeners_30355,render_queue_30356){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_30354,cljs.core.dissoc,id);
});})(x30339_30357,properties_30354,listeners_30355,render_queue_30356))
;

x30339_30357.om$core$IRootProperties$_get_property$arity$3 = ((function (x30339_30357,properties_30354,listeners_30355,render_queue_30356){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30353 = properties_30354;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30353) : cljs.core.deref.call(null,G__30353));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x30339_30357,properties_30354,listeners_30355,render_queue_30356))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_(cursor)){
var x30392 = cljs.core.clone(cursor);
x30392.om$core$IRootKey$ = true;

x30392.om$core$IRootKey$_root_key$arity$1 = ((function (x30392){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x30392))
;

x30392.om$core$IAdapt$ = true;

x30392.om$core$IAdapt$_adapt$arity$2 = ((function (x30392){
return (function (this$,other){
var this$__$1 = this;
return tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x30392))
;

x30392.cljs$core$ICloneable$ = true;

x30392.cljs$core$ICloneable$_clone$arity$1 = ((function (x30392){
return (function (this$){
var this$__$1 = this;
return tag_root_key(cljs.core.clone(cursor),root_key);
});})(x30392))
;

return x30392;
} else {
return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* :raf        - override requestAnimationFrame based rendering. If
* false setTimeout will be use. If given a function
* will be invoked instead.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__30393){
var map__30482 = p__30393;
var map__30482__$1 = ((cljs.core.seq_QMARK_(map__30482))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30482):map__30482);
var options = map__30482__$1;
var raf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30482__$1,cljs.core.constant$keyword$59);
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30482__$1,cljs.core.constant$keyword$60);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30482__$1,cljs.core.constant$keyword$47);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30482__$1,cljs.core.constant$keyword$49);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30482__$1,cljs.core.constant$keyword$23);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30482__$1,cljs.core.constant$keyword$61);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30482__$1,cljs.core.constant$keyword$62);
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))], 0)))].join('')));
}

var roots_SINGLEQUOTE__30570 = (function (){var G__30483 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30483) : cljs.core.deref.call(null,G__30483));
})();
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__30570,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__30570,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = (((function (){var G__30484 = value;
if(G__30484){
var bit__4932__auto__ = (G__30484.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4932__auto__) || (G__30484.cljs$core$IAtom$)){
return true;
} else {
if((!G__30484.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__30484);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__30484);
}
})())?value:(function (){var G__30485 = value;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30485) : cljs.core.atom.call(null,G__30485));
})());
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__4251__auto__ = adapt;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$62,cljs.core.array_seq([cljs.core.constant$keyword$61,cljs.core.constant$keyword$23,cljs.core.constant$keyword$60,cljs.core.constant$keyword$59], 0));
var ret = (function (){var G__30486 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30486) : cljs.core.atom.call(null,G__30486));
})();
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__30482,map__30482__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

var value__$1 = (function (){var G__30526 = state__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30526) : cljs.core.deref.call(null,G__30526));
})();
var cursor = (function (){var G__30527 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__30527) : adapt__$1.call(null,G__30527));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$63))){
} else {
var c_30571 = om.dom.render((function (){var _STAR_descriptor_STAR_30528 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_30529 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_30530 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_30531 = om.core._STAR_root_key_STAR_;
try{om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_30531;

om.core._STAR_state_STAR_ = _STAR_state_STAR_30530;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_30529;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_30528;
}})(),target);
if(((function (){var G__30532 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30532) : cljs.core.deref.call(null,G__30532));
})() == null)){
var G__30533_30572 = ret;
var G__30534_30573 = c_30571;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30533_30572,G__30534_30573) : cljs.core.reset_BANG_.call(null,G__30533_30572,G__30534_30573));
} else {
}
}

var queue_30574 = om.core._get_queue(state__$1);
om.core._empty_queue_BANG_(state__$1);

if(cljs.core.empty_QMARK_(queue_30574)){
} else {
var seq__30535_30575 = cljs.core.seq(queue_30574);
var chunk__30536_30576 = null;
var count__30537_30577 = (0);
var i__30538_30578 = (0);
while(true){
if((i__30538_30578 < count__30537_30577)){
var c_30579 = chunk__30536_30576.cljs$core$IIndexed$_nth$arity$2(null,i__30538_30578);
if(cljs.core.truth_(c_30579.isMounted())){
var temp__4126__auto___30580 = (c_30579.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___30580)){
var next_props_30581 = temp__4126__auto___30580;
(c_30579.props["__om_cursor"] = next_props_30581);

(c_30579.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4251__auto__ = !((function (){var G__30540 = om.core.children(c_30579);
if(G__30540){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30540.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__30540.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__30540);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__30540);
}
})());
if(or__4251__auto__){
return or__4251__auto__;
} else {
return c_30579.shouldComponentUpdate(c_30579.props,c_30579.state);
}
})())){
c_30579.forceUpdate();
} else {
}
} else {
}

var G__30582 = seq__30535_30575;
var G__30583 = chunk__30536_30576;
var G__30584 = count__30537_30577;
var G__30585 = (i__30538_30578 + (1));
seq__30535_30575 = G__30582;
chunk__30536_30576 = G__30583;
count__30537_30577 = G__30584;
i__30538_30578 = G__30585;
continue;
} else {
var temp__4126__auto___30586 = cljs.core.seq(seq__30535_30575);
if(temp__4126__auto___30586){
var seq__30535_30587__$1 = temp__4126__auto___30586;
if(cljs.core.chunked_seq_QMARK_(seq__30535_30587__$1)){
var c__5038__auto___30588 = cljs.core.chunk_first(seq__30535_30587__$1);
var G__30589 = cljs.core.chunk_rest(seq__30535_30587__$1);
var G__30590 = c__5038__auto___30588;
var G__30591 = cljs.core.count(c__5038__auto___30588);
var G__30592 = (0);
seq__30535_30575 = G__30589;
chunk__30536_30576 = G__30590;
count__30537_30577 = G__30591;
i__30538_30578 = G__30592;
continue;
} else {
var c_30593 = cljs.core.first(seq__30535_30587__$1);
if(cljs.core.truth_(c_30593.isMounted())){
var temp__4126__auto___30594__$1 = (c_30593.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___30594__$1)){
var next_props_30595 = temp__4126__auto___30594__$1;
(c_30593.props["__om_cursor"] = next_props_30595);

(c_30593.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4251__auto__ = !((function (){var G__30542 = om.core.children(c_30593);
if(G__30542){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30542.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__30542.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__30542);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__30542);
}
})());
if(or__4251__auto__){
return or__4251__auto__;
} else {
return c_30593.shouldComponentUpdate(c_30593.props,c_30593.state);
}
})())){
c_30593.forceUpdate();
} else {
}
} else {
}

var G__30596 = cljs.core.next(seq__30535_30587__$1);
var G__30597 = null;
var G__30598 = (0);
var G__30599 = (0);
seq__30535_30575 = G__30596;
chunk__30536_30576 = G__30597;
count__30537_30577 = G__30598;
i__30538_30578 = G__30599;
continue;
}
} else {
}
}
break;
}
}

var _refs_30600 = (function (){var G__30543 = om.core._refs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30543) : cljs.core.deref.call(null,G__30543));
})();
if(cljs.core.empty_QMARK_(_refs_30600)){
} else {
var seq__30544_30601 = cljs.core.seq(_refs_30600);
var chunk__30545_30602 = null;
var count__30546_30603 = (0);
var i__30547_30604 = (0);
while(true){
if((i__30547_30604 < count__30546_30603)){
var vec__30548_30605 = chunk__30545_30602.cljs$core$IIndexed$_nth$arity$2(null,i__30547_30604);
var path_30606__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30548_30605,(0),null);
var cs_30607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30548_30605,(1),null);
var cs_30608__$1 = (function (){var G__30549 = cs_30607;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30549) : cljs.core.deref.call(null,G__30549));
})();
var seq__30550_30609 = cljs.core.seq(cs_30608__$1);
var chunk__30551_30610 = null;
var count__30552_30611 = (0);
var i__30553_30612 = (0);
while(true){
if((i__30553_30612 < count__30552_30611)){
var vec__30554_30613 = chunk__30551_30610.cljs$core$IIndexed$_nth$arity$2(null,i__30553_30612);
var id_30614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30554_30613,(0),null);
var c_30615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30554_30613,(1),null);
if(cljs.core.truth_(c_30615.shouldComponentUpdate(c_30615.props,c_30615.state))){
c_30615.forceUpdate();
} else {
}

var G__30616 = seq__30550_30609;
var G__30617 = chunk__30551_30610;
var G__30618 = count__30552_30611;
var G__30619 = (i__30553_30612 + (1));
seq__30550_30609 = G__30616;
chunk__30551_30610 = G__30617;
count__30552_30611 = G__30618;
i__30553_30612 = G__30619;
continue;
} else {
var temp__4126__auto___30620 = cljs.core.seq(seq__30550_30609);
if(temp__4126__auto___30620){
var seq__30550_30621__$1 = temp__4126__auto___30620;
if(cljs.core.chunked_seq_QMARK_(seq__30550_30621__$1)){
var c__5038__auto___30622 = cljs.core.chunk_first(seq__30550_30621__$1);
var G__30623 = cljs.core.chunk_rest(seq__30550_30621__$1);
var G__30624 = c__5038__auto___30622;
var G__30625 = cljs.core.count(c__5038__auto___30622);
var G__30626 = (0);
seq__30550_30609 = G__30623;
chunk__30551_30610 = G__30624;
count__30552_30611 = G__30625;
i__30553_30612 = G__30626;
continue;
} else {
var vec__30555_30627 = cljs.core.first(seq__30550_30621__$1);
var id_30628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30555_30627,(0),null);
var c_30629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30555_30627,(1),null);
if(cljs.core.truth_(c_30629.shouldComponentUpdate(c_30629.props,c_30629.state))){
c_30629.forceUpdate();
} else {
}

var G__30630 = cljs.core.next(seq__30550_30621__$1);
var G__30631 = null;
var G__30632 = (0);
var G__30633 = (0);
seq__30550_30609 = G__30630;
chunk__30551_30610 = G__30631;
count__30552_30611 = G__30632;
i__30553_30612 = G__30633;
continue;
}
} else {
}
}
break;
}

var G__30634 = seq__30544_30601;
var G__30635 = chunk__30545_30602;
var G__30636 = count__30546_30603;
var G__30637 = (i__30547_30604 + (1));
seq__30544_30601 = G__30634;
chunk__30545_30602 = G__30635;
count__30546_30603 = G__30636;
i__30547_30604 = G__30637;
continue;
} else {
var temp__4126__auto___30638 = cljs.core.seq(seq__30544_30601);
if(temp__4126__auto___30638){
var seq__30544_30639__$1 = temp__4126__auto___30638;
if(cljs.core.chunked_seq_QMARK_(seq__30544_30639__$1)){
var c__5038__auto___30640 = cljs.core.chunk_first(seq__30544_30639__$1);
var G__30641 = cljs.core.chunk_rest(seq__30544_30639__$1);
var G__30642 = c__5038__auto___30640;
var G__30643 = cljs.core.count(c__5038__auto___30640);
var G__30644 = (0);
seq__30544_30601 = G__30641;
chunk__30545_30602 = G__30642;
count__30546_30603 = G__30643;
i__30547_30604 = G__30644;
continue;
} else {
var vec__30556_30645 = cljs.core.first(seq__30544_30639__$1);
var path_30646__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30556_30645,(0),null);
var cs_30647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30556_30645,(1),null);
var cs_30648__$1 = (function (){var G__30557 = cs_30647;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30557) : cljs.core.deref.call(null,G__30557));
})();
var seq__30558_30649 = cljs.core.seq(cs_30648__$1);
var chunk__30559_30650 = null;
var count__30560_30651 = (0);
var i__30561_30652 = (0);
while(true){
if((i__30561_30652 < count__30560_30651)){
var vec__30562_30653 = chunk__30559_30650.cljs$core$IIndexed$_nth$arity$2(null,i__30561_30652);
var id_30654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30562_30653,(0),null);
var c_30655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30562_30653,(1),null);
if(cljs.core.truth_(c_30655.shouldComponentUpdate(c_30655.props,c_30655.state))){
c_30655.forceUpdate();
} else {
}

var G__30656 = seq__30558_30649;
var G__30657 = chunk__30559_30650;
var G__30658 = count__30560_30651;
var G__30659 = (i__30561_30652 + (1));
seq__30558_30649 = G__30656;
chunk__30559_30650 = G__30657;
count__30560_30651 = G__30658;
i__30561_30652 = G__30659;
continue;
} else {
var temp__4126__auto___30660__$1 = cljs.core.seq(seq__30558_30649);
if(temp__4126__auto___30660__$1){
var seq__30558_30661__$1 = temp__4126__auto___30660__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30558_30661__$1)){
var c__5038__auto___30662 = cljs.core.chunk_first(seq__30558_30661__$1);
var G__30663 = cljs.core.chunk_rest(seq__30558_30661__$1);
var G__30664 = c__5038__auto___30662;
var G__30665 = cljs.core.count(c__5038__auto___30662);
var G__30666 = (0);
seq__30558_30649 = G__30663;
chunk__30559_30650 = G__30664;
count__30560_30651 = G__30665;
i__30561_30652 = G__30666;
continue;
} else {
var vec__30563_30667 = cljs.core.first(seq__30558_30661__$1);
var id_30668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30563_30667,(0),null);
var c_30669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30563_30667,(1),null);
if(cljs.core.truth_(c_30669.shouldComponentUpdate(c_30669.props,c_30669.state))){
c_30669.forceUpdate();
} else {
}

var G__30670 = cljs.core.next(seq__30558_30661__$1);
var G__30671 = null;
var G__30672 = (0);
var G__30673 = (0);
seq__30558_30649 = G__30670;
chunk__30559_30650 = G__30671;
count__30560_30651 = G__30672;
i__30561_30652 = G__30673;
continue;
}
} else {
}
}
break;
}

var G__30674 = cljs.core.next(seq__30544_30639__$1);
var G__30675 = null;
var G__30676 = (0);
var G__30677 = (0);
seq__30544_30601 = G__30674;
chunk__30545_30602 = G__30675;
count__30546_30603 = G__30676;
i__30547_30604 = G__30677;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$63,true);

var G__30564 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30564) : cljs.core.deref.call(null,G__30564));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__30482,map__30482__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30482,map__30482__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$64))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$63,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$64,false);

if(cljs.core.contains_QMARK_((function (){var G__30565 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30565) : cljs.core.deref.call(null,G__30565));
})(),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
var G__30566 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30482,map__30482__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30482,map__30482__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
var G__30567 = (16);
return setTimeout(G__30566,G__30567);
} else {
if(cljs.core.fn_QMARK_(raf)){
return (raf.cljs$core$IFn$_invoke$arity$0 ? raf.cljs$core$IFn$_invoke$arity$0() : raf.call(null));
} else {
var G__30568 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30482,map__30482__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30482,map__30482__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
return requestAnimationFrame(G__30568);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30482,map__30482__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30482,map__30482__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

var G__30569 = target;
return React.unmountComponentAtNode(G__30569);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30482,map__30482__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf();
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){
if(cljs.core.truth_((function (){var G__30680 = target;
return goog.dom.isElement(G__30680);
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))], 0)))].join('')));
}

var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__30681 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30681) : cljs.core.deref.call(null,G__30681));
})(),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function transactable_QMARK_(x){
var G__30683 = x;
if(G__30683){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30683.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__30683.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__30683);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__30683);
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){
return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){
return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){
if(om.core.transactable_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

var key = (((function (){var G__30694 = cursor;
if(G__30694){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30694.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__30694.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__30694);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__30694);
}
})())?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = (function (){var G__30695 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__30695) : om.core.path.call(null,G__30695));
})();
var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_(app_state,key,cljs.core.constant$keyword$64,true);
} else {
}

if(cljs.core.empty_QMARK_(rpath)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,f);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){
return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))], 0)))].join('')));
}

var temp__4126__auto__ = owner.refs;
if(cljs.core.truth_(temp__4126__auto__)){
var refs = temp__4126__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){
return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__30698 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30698) : f.call(null,G__30698));
})());
});
var update_state_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__30699 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30699) : f.call(null,G__30699));
})());
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__30702 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30702) : f.call(null,G__30702));
})());
});
var update_state_nr_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__30703 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30703) : f.call(null,G__30703));
})());
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_render_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
