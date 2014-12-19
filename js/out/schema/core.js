// Compiled by ClojureScript 0.0-2496
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('clojure.string');

schema.core.Schema = (function (){var obj33259 = {};
return obj33259;
})();

schema.core.walker = (function walker(this$){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.schema$core$Schema$walker$arity$1;
} else {
return and__3616__auto__;
}
})()){
return this$.schema$core$Schema$walker$arity$1(this$);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (schema.core.walker[(function (){var G__33263 = x__4272__auto__;
return goog.typeOf(G__33263);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (schema.core.walker["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("Schema.walker",this$);
}
}
})().call(null,this$);
}
});

schema.core.explain = (function explain(this$){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.schema$core$Schema$explain$arity$1;
} else {
return and__3616__auto__;
}
})()){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (schema.core.explain[(function (){var G__33267 = x__4272__auto__;
return goog.typeOf(G__33267);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (schema.core.explain["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("Schema.explain",this$);
}
}
})().call(null,this$);
}
});

/**
* The function to call within 'walker' implementations to create walkers for subschemas.
* Can be dynamically bound (using start-walker below) to create different walking behaviors.
* 
* For the curious, implemented using dynamic binding rather than making walker take a
* subschema-walker as an argument because some behaviors (e.g. recursive schema walkers)
* seem to require mind-bending things like fixed-point combinators that way, but are
* simple this way.
*/
schema.core.subschema_walker = (function subschema_walker(s){
throw (new Error([cljs.core.str("Walking is unsupported outside of start-walker; "),cljs.core.str("all composite schemas must eagerly bind subschema-walkers "),cljs.core.str("outside the returned walker.")].join('')));
});
/**
* The entry point for creating walkers.  Binds the provided walker to subschema-walker,
* then calls it on the provided schema.  For simple validation, pass walker as sub-walker.
* More sophisticated behavior (coercion, etc), can be achieved by passing a sub-walker
* that wraps walker with additional behavior.
*/
schema.core.start_walker = (function start_walker(sub_walker,schema__$1){
var subschema_walker33269 = schema.core.subschema_walker;
try{schema.core.subschema_walker = sub_walker;

return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1));
}finally {schema.core.subschema_walker = subschema_walker33269;
}});
/**
* Compile an efficient checker for schema, which returns nil for valid values and
* error descriptions otherwise.
*/
schema.core.checker = (function checker(schema__$1){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,schema.core.start_walker(schema.utils.memoize_id(schema.core.walker),schema__$1));
});
/**
* Return nil if x matches schema; otherwise, returns a value that looks like the
* 'bad' parts of x with ValidationErrors at the leaves describing the failures.
*/
schema.core.check = (function check(schema__$1,x){
return schema.core.checker(schema__$1).call(null,x);
});
/**
* Throw an exception if value does not satisfy schema; otherwise, return value.
*/
schema.core.validate = (function validate(schema__$1,value){
var temp__4126__auto___33270 = schema.core.check(schema__$1,value);
if(cljs.core.truth_(temp__4126__auto___33270)){
var error_33271 = temp__4126__auto___33270;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error_33271], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error_33271,cljs.core.constant$keyword$23,value,cljs.core.constant$keyword$24,schema__$1,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}

return value;
});
(schema.core.Schema["function"] = true);

(schema.core.walker["function"] = (function (this$){
var class_walker = (function (){var temp__4124__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4124__auto__)){
var more_schema = temp__4124__auto__;
return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(more_schema) : schema.core.subschema_walker.call(null,more_schema));
} else {
return cljs.core.identity;
}
})();
return ((function (class_walker){
return (function (x){
var or__3628__auto__ = ((((x == null)) || (cljs.core.not((function (){var or__3628__auto__ = (this$ === x.constructor);
if(or__3628__auto__){
return or__3628__auto__;
} else {
return x instanceof this$;
}
})())))?schema.utils.error(schema.utils.__GT_ValidationError(this$,x,(new cljs.core.Delay(((function (class_walker){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),this$),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(class_walker))
,null)),null)):null);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var G__33272 = x;
return (class_walker.cljs$core$IFn$_invoke$arity$1 ? class_walker.cljs$core$IFn$_invoke$arity$1(G__33272) : class_walker.call(null,G__33272));
}
});
;})(class_walker))
}));

(schema.core.explain["function"] = (function (this$){
var temp__4124__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4124__auto__)){
var more_schema = temp__4124__auto__;
return schema.core.explain(more_schema);
} else {
return this$;
}
}));

/**
* @constructor
* @param {*} _
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4231__auto____$1,k__4232__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k33274,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__33276 = (((k33274 instanceof cljs.core.Keyword))?k33274.fqn:null);
switch (G__33276) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33274,else__4234__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer(writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4246__auto__,pr_pair__4248__auto__,"#schema.core.AnythingSchema{",", ","}",opts__4247__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$27,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap(this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map(this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$27,null], null), null),k__4241__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4241__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__33273){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__33277 = cljs.core.keyword_identical_QMARK_;
var expr__33278 = k__4239__auto__;
if(cljs.core.truth_((function (){var G__33280 = cljs.core.constant$keyword$27;
var G__33281 = expr__33278;
return (pred__33277.cljs$core$IFn$_invoke$arity$2 ? pred__33277.cljs$core$IFn$_invoke$arity$2(G__33280,G__33281) : pred__33277.call(null,G__33280,G__33281));
})())){
return (new schema.core.AnythingSchema(G__33273,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4239__auto__,G__33273),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$27,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__33273){
var self__ = this;
var this__4230__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__33273,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4237__auto__)){
return cljs.core._assoc(this__4236__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;

schema.core.AnythingSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.identity;
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write(writer__4266__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function __GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function map__GT_AnythingSchema(G__33275){
return (new schema.core.AnythingSchema(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(G__33275),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__33275,cljs.core.constant$keyword$27),null));
});

/**
* Any value, including nil.
*/
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
* @param {*} v
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4231__auto____$1,k__4232__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k33284,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__33286 = (((k33284 instanceof cljs.core.Keyword))?k33284.fqn:null);
switch (G__33286) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33284,else__4234__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer(writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4246__auto__,pr_pair__4248__auto__,"#schema.core.EqSchema{",", ","}",opts__4247__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$28,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap(this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map(this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$28,null], null), null),k__4241__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4241__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__33283){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__33287 = cljs.core.keyword_identical_QMARK_;
var expr__33288 = k__4239__auto__;
if(cljs.core.truth_((function (){var G__33290 = cljs.core.constant$keyword$28;
var G__33291 = expr__33288;
return (pred__33287.cljs$core$IFn$_invoke$arity$2 ? pred__33287.cljs$core$IFn$_invoke$arity$2(G__33290,G__33291) : pred__33287.call(null,G__33290,G__33291));
})())){
return (new schema.core.EqSchema(G__33283,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4239__auto__,G__33283),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$28,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__33283){
var self__ = this;
var this__4230__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__33283,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4237__auto__)){
return cljs.core._assoc(this__4236__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = true;

schema.core.EqSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,x)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.v),new cljs.core.Symbol(null,"=","=",-1501502141,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.v),new cljs.core.Symbol(null,"eq","eq",1021992460,null));
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write(writer__4266__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function __GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function map__GT_EqSchema(G__33285){
return (new schema.core.EqSchema(cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(G__33285),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__33285,cljs.core.constant$keyword$28),null));
});

/**
* A value that must be (= v).
*/
schema.core.eq = (function eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
* @param {*} h
* @param {*} parent
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4231__auto____$1,k__4232__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k33294,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__33296 = (((k33294 instanceof cljs.core.Keyword))?k33294.fqn:null);
switch (G__33296) {
case "parent":
return self__.parent;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33294,else__4234__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer(writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4246__auto__,pr_pair__4248__auto__,"#schema.core.Isa{",", ","}",opts__4247__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$29,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$30,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap(this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map(this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$30,null,cljs.core.constant$keyword$29,null], null), null),k__4241__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4241__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__33293){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__33297 = cljs.core.keyword_identical_QMARK_;
var expr__33298 = k__4239__auto__;
if(cljs.core.truth_((function (){var G__33300 = cljs.core.constant$keyword$29;
var G__33301 = expr__33298;
return (pred__33297.cljs$core$IFn$_invoke$arity$2 ? pred__33297.cljs$core$IFn$_invoke$arity$2(G__33300,G__33301) : pred__33297.call(null,G__33300,G__33301));
})())){
return (new schema.core.Isa(G__33293,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33302 = cljs.core.constant$keyword$30;
var G__33303 = expr__33298;
return (pred__33297.cljs$core$IFn$_invoke$arity$2 ? pred__33297.cljs$core$IFn$_invoke$arity$2(G__33302,G__33303) : pred__33297.call(null,G__33302,G__33303));
})())){
return (new schema.core.Isa(self__.h,G__33293,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4239__auto__,G__33293),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$29,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$30,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__33293){
var self__ = this;
var this__4230__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__33293,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4237__auto__)){
return cljs.core._assoc(this__4236__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = true;

schema.core.Isa.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (child){
if(cljs.core.truth_((function (){var or__3628__auto__ = (function (){var and__3616__auto__ = self__.h;
if(cljs.core.truth_(and__3616__auto__)){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(self__.h,child,self__.parent);
} else {
return and__3616__auto__;
}
})();
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(child,self__.parent);
}
})())){
return child;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,child,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.parent),child),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.parent),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write(writer__4266__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function __GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function map__GT_Isa(G__33295){
return (new schema.core.Isa(cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(G__33295),cljs.core.constant$keyword$30.cljs$core$IFn$_invoke$arity$1(G__33295),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33295,cljs.core.constant$keyword$29,cljs.core.array_seq([cljs.core.constant$keyword$30], 0)),null));
});

/**
* A value that must be a child of parent.
*/
schema.core.isa = (function() {
var isa = null;
var isa__1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});
var isa__2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});
isa = function(h,parent){
switch(arguments.length){
case 1:
return isa__1.call(this,h);
case 2:
return isa__2.call(this,h,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa.cljs$core$IFn$_invoke$arity$1 = isa__1;
isa.cljs$core$IFn$_invoke$arity$2 = isa__2;
return isa;
})()
;

/**
* @constructor
* @param {*} vs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4231__auto____$1,k__4232__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k33306,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__33308 = (((k33306 instanceof cljs.core.Keyword))?k33306.fqn:null);
switch (G__33308) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33306,else__4234__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer(writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4246__auto__,pr_pair__4248__auto__,"#schema.core.EnumSchema{",", ","}",opts__4247__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$31,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap(this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map(this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$31,null], null), null),k__4241__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4241__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__33305){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__33309 = cljs.core.keyword_identical_QMARK_;
var expr__33310 = k__4239__auto__;
if(cljs.core.truth_((function (){var G__33312 = cljs.core.constant$keyword$31;
var G__33313 = expr__33310;
return (pred__33309.cljs$core$IFn$_invoke$arity$2 ? pred__33309.cljs$core$IFn$_invoke$arity$2(G__33312,G__33313) : pred__33309.call(null,G__33312,G__33313));
})())){
return (new schema.core.EnumSchema(G__33305,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4239__auto__,G__33305),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$31,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__33305){
var self__ = this;
var this__4230__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__33305,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4237__auto__)){
return cljs.core._assoc(this__4236__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = true;

schema.core.EnumSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.contains_QMARK_(self__.vs,x)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.vs);
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write(writer__4266__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function __GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function map__GT_EnumSchema(G__33307){
return (new schema.core.EnumSchema(cljs.core.constant$keyword$31.cljs$core$IFn$_invoke$arity$1(G__33307),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__33307,cljs.core.constant$keyword$31),null));
});

/**
* A value that must be = to some element of vs.
* @param {...*} var_args
*/
schema.core.enum$ = (function() { 
var enum$__delegate = function (vs){
return (new schema.core.EnumSchema(cljs.core.set(vs),null,null,null));
};
var enum$ = function (var_args){
var vs = null;
if (arguments.length > 0) {
  vs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return enum$__delegate.call(this,vs);};
enum$.cljs$lang$maxFixedArity = 0;
enum$.cljs$lang$applyTo = (function (arglist__33315){
var vs = cljs.core.seq(arglist__33315);
return enum$__delegate(vs);
});
enum$.cljs$core$IFn$_invoke$arity$variadic = enum$__delegate;
return enum$;
})()
;

/**
* @constructor
* @param {*} p_QMARK_
* @param {*} pred_name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4231__auto____$1,k__4232__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k33317,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__33319 = (((k33317 instanceof cljs.core.Keyword))?k33317.fqn:null);
switch (G__33319) {
case "pred-name":
return self__.pred_name;

break;
case "p?":
return self__.p_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33317,else__4234__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer(writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4246__auto__,pr_pair__4248__auto__,"#schema.core.Predicate{",", ","}",opts__4247__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$32,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$33,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap(this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map(this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$33,null,cljs.core.constant$keyword$32,null], null), null),k__4241__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4241__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__33316){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__33320 = cljs.core.keyword_identical_QMARK_;
var expr__33321 = k__4239__auto__;
if(cljs.core.truth_((function (){var G__33323 = cljs.core.constant$keyword$32;
var G__33324 = expr__33321;
return (pred__33320.cljs$core$IFn$_invoke$arity$2 ? pred__33320.cljs$core$IFn$_invoke$arity$2(G__33323,G__33324) : pred__33320.call(null,G__33323,G__33324));
})())){
return (new schema.core.Predicate(G__33316,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33325 = cljs.core.constant$keyword$33;
var G__33326 = expr__33321;
return (pred__33320.cljs$core$IFn$_invoke$arity$2 ? pred__33320.cljs$core$IFn$_invoke$arity$2(G__33325,G__33326) : pred__33320.call(null,G__33325,G__33326));
})())){
return (new schema.core.Predicate(self__.p_QMARK_,G__33316,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4239__auto__,G__33316),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$32,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$33,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__33316){
var self__ = this;
var this__4230__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__33316,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4237__auto__)){
return cljs.core._assoc(this__4236__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = true;

schema.core.Predicate.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
var temp__4124__auto__ = (function (){try{if(cljs.core.truth_((function (){var G__33328 = x;
return (self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__33328) : self__.p_QMARK_.call(null,G__33328));
})())){
return null;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
}catch (e33327){if((e33327 instanceof Object)){
var e = e33327;
return new cljs.core.Symbol(null,"throws?","throws?",789734533,null);
} else {
throw e33327;

}
}})();
if(cljs.core.truth_(temp__4124__auto__)){
var reason = temp__4124__auto__;
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (reason,temp__4124__auto__,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.pred_name);
});})(reason,temp__4124__auto__,this$__$1))
,null)),reason));
} else {
return x;
}
});
;})(this$__$1))
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.integer_QMARK_)){
return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.string_QMARK_)){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.pred_name),new cljs.core.Symbol(null,"pred","pred",-727012372,null));

}
}
}
}
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write(writer__4266__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function __GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function map__GT_Predicate(G__33318){
return (new schema.core.Predicate(cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(G__33318),cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(G__33318),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33318,cljs.core.constant$keyword$32,cljs.core.array_seq([cljs.core.constant$keyword$33], 0)),null));
});

/**
* A value for which p? returns true (and does not throw).
* Optional pred-name can be passed for nicer validation errors.
*/
schema.core.pred = (function() {
var pred = null;
var pred__1 = (function (p_QMARK_){
return pred.cljs$core$IFn$_invoke$arity$2(p_QMARK_,p_QMARK_);
});
var pred__2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.array_seq([p_QMARK_], 0))));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});
pred = function(p_QMARK_,pred_name){
switch(arguments.length){
case 1:
return pred__1.call(this,p_QMARK_);
case 2:
return pred__2.call(this,p_QMARK_,pred_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pred.cljs$core$IFn$_invoke$arity$1 = pred__1;
pred.cljs$core$IFn$_invoke$arity$2 = pred__2;
return pred;
})()
;
schema.core.protocol_name = (function protocol_name(protocol){
return cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol));
});

/**
* @constructor
* @param {*} p
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4231__auto____$1,k__4232__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k33333,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__33335 = (((k33333 instanceof cljs.core.Keyword))?k33333.fqn:null);
switch (G__33335) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33333,else__4234__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer(writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4246__auto__,pr_pair__4248__auto__,"#schema.core.Protocol{",", ","}",opts__4247__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$35,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap(this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map(this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$35,null], null), null),k__4241__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4241__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__33332){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__33336 = cljs.core.keyword_identical_QMARK_;
var expr__33337 = k__4239__auto__;
if(cljs.core.truth_((function (){var G__33339 = cljs.core.constant$keyword$35;
var G__33340 = expr__33337;
return (pred__33336.cljs$core$IFn$_invoke$arity$2 ? pred__33336.cljs$core$IFn$_invoke$arity$2(G__33339,G__33340) : pred__33336.call(null,G__33339,G__33340));
})())){
return (new schema.core.Protocol(G__33332,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4239__auto__,G__33332),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$35,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__33332){
var self__ = this;
var this__4230__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__33332,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4237__auto__)){
return cljs.core._assoc(this__4236__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = true;

schema.core.Protocol.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.truth_(cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)).call(null,x))){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),schema.core.protocol_name(this$__$1)),new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.protocol_name(this$__$1)),new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null));
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write(writer__4266__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function __GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function map__GT_Protocol(G__33334){
return (new schema.core.Protocol(cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(G__33334),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__33334,cljs.core.constant$keyword$35),null));
});

RegExp.prototype.schema$core$Schema$ = true;

RegExp.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(!(typeof x === 'string')){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
});})(this$__$1))
,null)),null));
} else {
if(cljs.core.not(cljs.core.re_find(this$__$1,x))){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),schema.core.explain(this$__$1)),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null));
});})(this$__$1))
,null)),null));
} else {
return x;

}
}
});
;})(this$__$1))
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#\""),cljs.core.str([cljs.core.str(this$__$1)].join('').slice((1),(-1))),cljs.core.str("\"")].join(''));
});
/**
* Satisfied only by String.
* Is (pred string?) and not js/String in cljs because of keywords.
*/
schema.core.Str = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.string_QMARK_);
/**
* Boolean true or false
*/
schema.core.Bool = Boolean;
/**
* Any number
*/
schema.core.Num = Number;
/**
* Any integral number
*/
schema.core.Int = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.integer_QMARK_,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null));
/**
* A keyword
*/
schema.core.Keyword = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null));
/**
* A symbol
*/
schema.core.Symbol = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null));
/**
* A regular expression
*/
schema.core.Regex = (function (){
if(typeof schema.core.t33342 !== 'undefined'){
} else {

/**
* @constructor
*/
schema.core.t33342 = (function (meta33343){
this.meta33343 = meta33343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
schema.core.t33342.prototype.schema$core$Schema$ = true;

schema.core.t33342.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if((x instanceof RegExp)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null)),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.t33342.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
});

schema.core.t33342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33344){
var self__ = this;
var _33344__$1 = this;
return self__.meta33343;
});

schema.core.t33342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33344,meta33343__$1){
var self__ = this;
var _33344__$1 = this;
return (new schema.core.t33342(meta33343__$1));
});

schema.core.t33342.cljs$lang$type = true;

schema.core.t33342.cljs$lang$ctorStr = "schema.core/t33342";

schema.core.t33342.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"schema.core/t33342");
});

schema.core.__GT_t33342 = (function __GT_t33342(meta33343){
return (new schema.core.t33342(meta33343));
});

}

return (new schema.core.t33342(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,36,cljs.core.constant$keyword$9,409,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,403,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/schema/core.cljs"], null)));
})()
;
/**
* The local representation of #inst ...
*/
schema.core.Inst = Date;
/**
* The local representation of #uuid ...
*/
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4231__auto____$1,k__4232__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k33346,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__33348 = (((k33346 instanceof cljs.core.Keyword))?k33346.fqn:null);
switch (G__33348) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33346,else__4234__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer(writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4246__auto__,pr_pair__4248__auto__,"#schema.core.Maybe{",", ","}",opts__4247__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap(this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map(this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$24,null], null), null),k__4241__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4241__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__33345){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__33349 = cljs.core.keyword_identical_QMARK_;
var expr__33350 = k__4239__auto__;
if(cljs.core.truth_((function (){var G__33352 = cljs.core.constant$keyword$24;
var G__33353 = expr__33350;
return (pred__33349.cljs$core$IFn$_invoke$arity$2 ? pred__33349.cljs$core$IFn$_invoke$arity$2(G__33352,G__33353) : pred__33349.call(null,G__33352,G__33353));
})())){
return (new schema.core.Maybe(G__33345,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4239__auto__,G__33345),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__33345){
var self__ = this;
var this__4230__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__33345,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4237__auto__)){
return cljs.core._assoc(this__4236__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = true;

schema.core.Maybe.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
return ((function (sub_walker,this$__$1){
return (function (x){
if((x == null)){
return null;
} else {
var G__33354 = x;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__33354) : sub_walker.call(null,G__33354));
}
});
;})(sub_walker,this$__$1))
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write(writer__4266__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function __GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function map__GT_Maybe(G__33347){
return (new schema.core.Maybe(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(G__33347),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__33347,cljs.core.constant$keyword$24),null));
});

/**
* A value that must either be nil or satisfy schema
*/
schema.core.maybe = (function maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
* @param {*} schema
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4231__auto____$1,k__4232__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k33357,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__33359 = (((k33357 instanceof cljs.core.Keyword))?k33357.fqn:null);
switch (G__33359) {
case "name":
return self__.name;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33357,else__4234__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer(writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4246__auto__,pr_pair__4248__auto__,"#schema.core.NamedSchema{",", ","}",opts__4247__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$37,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap(this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map(this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$37,null], null), null),k__4241__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4241__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__33356){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__33360 = cljs.core.keyword_identical_QMARK_;
var expr__33361 = k__4239__auto__;
if(cljs.core.truth_((function (){var G__33363 = cljs.core.constant$keyword$24;
var G__33364 = expr__33361;
return (pred__33360.cljs$core$IFn$_invoke$arity$2 ? pred__33360.cljs$core$IFn$_invoke$arity$2(G__33363,G__33364) : pred__33360.call(null,G__33363,G__33364));
})())){
return (new schema.core.NamedSchema(G__33356,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33365 = cljs.core.constant$keyword$37;
var G__33366 = expr__33361;
return (pred__33360.cljs$core$IFn$_invoke$arity$2 ? pred__33360.cljs$core$IFn$_invoke$arity$2(G__33365,G__33366) : pred__33360.call(null,G__33365,G__33366));
})())){
return (new schema.core.NamedSchema(self__.schema,G__33356,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4239__auto__,G__33356),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$37,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__33356){
var self__ = this;
var this__4230__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__33356,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4237__auto__)){
return cljs.core._assoc(this__4236__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = true;

schema.core.NamedSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
return ((function (sub_walker,this$__$1){
return (function (x){
return schema.utils.wrap_error_name(self__.name,(function (){var G__33367 = x;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__33367) : sub_walker.call(null,G__33367));
})());
});
;})(sub_walker,this$__$1))
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.name),schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"named","named",1218138048,null));
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write(writer__4266__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function __GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function map__GT_NamedSchema(G__33358){
return (new schema.core.NamedSchema(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(G__33358),cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(G__33358),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33358,cljs.core.constant$keyword$24,cljs.core.array_seq([cljs.core.constant$keyword$37], 0)),null));
});

/**
* A value that must satisfy schema, and has a name for documentation purposes.
*/
schema.core.named = (function named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4231__auto____$1,k__4232__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k33370,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__33372 = (((k33370 instanceof cljs.core.Keyword))?k33370.fqn:null);
switch (G__33372) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33370,else__4234__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer(writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4246__auto__,pr_pair__4248__auto__,"#schema.core.Either{",", ","}",opts__4247__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$38,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap(this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map(this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$38,null], null), null),k__4241__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4241__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__33369){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__33373 = cljs.core.keyword_identical_QMARK_;
var expr__33374 = k__4239__auto__;
if(cljs.core.truth_((function (){var G__33376 = cljs.core.constant$keyword$38;
var G__33377 = expr__33374;
return (pred__33373.cljs$core$IFn$_invoke$arity$2 ? pred__33373.cljs$core$IFn$_invoke$arity$2(G__33376,G__33377) : pred__33373.call(null,G__33376,G__33377));
})())){
return (new schema.core.Either(G__33369,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4239__auto__,G__33369),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$38,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__33369){
var self__ = this;
var this__4230__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__33369,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4237__auto__)){
return cljs.core._assoc(this__4236__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = true;

schema.core.Either.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.subschema_walker,self__.schemas);
return ((function (sub_walkers,this$__$1){
return (function (x){
var sub_walkers__$1 = cljs.core.seq(sub_walkers);
while(true){
if(cljs.core.not(sub_walkers__$1)){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walkers__$1,sub_walkers,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)),cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol(null,"check","check",-1428126865,null))),new cljs.core.Symbol(null,"some","some",-310548046,null));
});})(sub_walkers__$1,sub_walkers,this$__$1))
,null)),null));
} else {
var res = cljs.core.first(sub_walkers__$1).call(null,x);
if(!(schema.utils.error_QMARK_(res))){
return res;
} else {
var G__33379 = cljs.core.next(sub_walkers__$1);
sub_walkers__$1 = G__33379;
continue;
}
}
break;
}
});
;})(sub_walkers,this$__$1))
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write(writer__4266__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function __GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function map__GT_Either(G__33371){
return (new schema.core.Either(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(G__33371),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__33371,cljs.core.constant$keyword$38),null));
});

/**
* A value that must satisfy at least one schema in schemas.
* @param {...*} var_args
*/
schema.core.either = (function() { 
var either__delegate = function (schemas){
return (new schema.core.Either(schemas,null,null,null));
};
var either = function (var_args){
var schemas = null;
if (arguments.length > 0) {
  schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return either__delegate.call(this,schemas);};
either.cljs$lang$maxFixedArity = 0;
either.cljs$lang$applyTo = (function (arglist__33380){
var schemas = cljs.core.seq(arglist__33380);
return either__delegate(schemas);
});
either.cljs$core$IFn$_invoke$arity$variadic = either__delegate;
return either;
})()
;

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4231__auto____$1,k__4232__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k33382,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__33384 = (((k33382 instanceof cljs.core.Keyword))?k33382.fqn:null);
switch (G__33384) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33382,else__4234__auto__);

}
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer(writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4246__auto__,pr_pair__4248__auto__,"#schema.core.Both{",", ","}",opts__4247__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$38,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap(this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map(this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$38,null], null), null),k__4241__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4241__auto__)),null));
}
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__33381){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__33385 = cljs.core.keyword_identical_QMARK_;
var expr__33386 = k__4239__auto__;
if(cljs.core.truth_((function (){var G__33388 = cljs.core.constant$keyword$38;
var G__33389 = expr__33386;
return (pred__33385.cljs$core$IFn$_invoke$arity$2 ? pred__33385.cljs$core$IFn$_invoke$arity$2(G__33388,G__33389) : pred__33385.call(null,G__33388,G__33389));
})())){
return (new schema.core.Both(G__33381,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4239__auto__,G__33381),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$38,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__33381){
var self__ = this;
var this__4230__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__33381,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4237__auto__)){
return cljs.core._assoc(this__4236__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = true;

schema.core.Both.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.subschema_walker,self__.schemas);
return ((function (sub_walkers,this$__$1){
return (function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (sub_walkers,this$__$1){
return (function (x__$1,sub_walker){
if(schema.utils.error_QMARK_(x__$1)){
return x__$1;
} else {
var G__33390 = x__$1;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__33390) : sub_walker.call(null,G__33390));
}
});})(sub_walkers,this$__$1))
,x,sub_walkers);
});
;})(sub_walkers,this$__$1))
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write(writer__4266__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function __GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function map__GT_Both(G__33383){
return (new schema.core.Both(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(G__33383),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__33383,cljs.core.constant$keyword$38),null));
});

/**
* A value that must satisfy every schema in schemas.
* @param {...*} var_args
*/
schema.core.both = (function() { 
var both__delegate = function (schemas){
return (new schema.core.Both(schemas,null,null,null));
};
var both = function (var_args){
var schemas = null;
if (arguments.length > 0) {
  schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return both__delegate.call(this,schemas);};
both.cljs$lang$maxFixedArity = 0;
both.cljs$lang$applyTo = (function (arglist__33392){
var schemas = cljs.core.seq(arglist__33392);
return both__delegate(schemas);
});
both.cljs$core$IFn$_invoke$arity$variadic = both__delegate;
return both;
})()
;

/**
* @constructor
* @param {*} preds_and_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.ConditionalSchema = (function (preds_and_schemas,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4231__auto____$1,k__4232__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k33394,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__33396 = (((k33394 instanceof cljs.core.Keyword))?k33394.fqn:null);
switch (G__33396) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33394,else__4234__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer(writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4246__auto__,pr_pair__4248__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__4247__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$39,self__.preds_and_schemas],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap(this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map(this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$39,null], null), null),k__4241__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4241__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__33393){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__33397 = cljs.core.keyword_identical_QMARK_;
var expr__33398 = k__4239__auto__;
if(cljs.core.truth_((function (){var G__33400 = cljs.core.constant$keyword$39;
var G__33401 = expr__33398;
return (pred__33397.cljs$core$IFn$_invoke$arity$2 ? pred__33397.cljs$core$IFn$_invoke$arity$2(G__33400,G__33401) : pred__33397.call(null,G__33400,G__33401));
})())){
return (new schema.core.ConditionalSchema(G__33393,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4239__auto__,G__33393),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$39,self__.preds_and_schemas],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__33393){
var self__ = this;
var this__4230__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__33393,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4237__auto__)){
return cljs.core._assoc(this__4236__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;

schema.core.ConditionalSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var preds_and_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__33402){
var vec__33403 = p__33402;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33403,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33403,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1))], null);
});})(this$__$1))
,self__.preds_and_schemas);
return ((function (preds_and_walkers,this$__$1){
return (function (x){
var temp__4124__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (preds_and_walkers,this$__$1){
return (function (p__33404){
var vec__33405 = p__33404;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33405,(0),null);
var G__33406 = x;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__33406) : pred.call(null,G__33406));
});})(preds_and_walkers,this$__$1))
,preds_and_walkers));
if(cljs.core.truth_(temp__4124__auto__)){
var vec__33407 = temp__4124__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33407,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33407,(1),null);
var G__33408 = x;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__33408) : match.call(null,G__33408));
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (temp__4124__auto__,preds_and_walkers,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"matches-some-condition?","matches-some-condition?",2097370044,null));
});})(temp__4124__auto__,preds_and_walkers,this$__$1))
,null)),null));
}
});
;})(preds_and_walkers,this$__$1))
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p__33409){
var vec__33410 = p__33409;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33410,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33410,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,schema.core.explain(schema__$1)], null);
});})(this$__$1))
,cljs.core.array_seq([self__.preds_and_schemas], 0)));
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write(writer__4266__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function __GT_ConditionalSchema(preds_and_schemas){
return (new schema.core.ConditionalSchema(preds_and_schemas,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function map__GT_ConditionalSchema(G__33395){
return (new schema.core.ConditionalSchema(cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(G__33395),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__33395,cljs.core.constant$keyword$39),null));
});

/**
* Define a conditional schema.  Takes args like cond,
* (conditional pred1 schema1 pred2 schema2 ...),
* and checks the first schema where pred is true on the value.
* Unlike cond, throws if the value does not match any condition.
* :else may be used as a final condition in the place of (constantly true).
* More efficient than either, since only one schema must be checked.
* @param {...*} var_args
*/
schema.core.conditional = (function() { 
var conditional__delegate = function (preds_and_schemas){
if((cljs.core.seq(preds_and_schemas)) && (cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args; got %s",cljs.core.array_seq([cljs.core.count(preds_and_schemas)], 0))));
}

return (new schema.core.ConditionalSchema((function (){var iter__4384__auto__ = (function iter__33422(s__33423){
return (new cljs.core.LazySeq(null,(function (){
var s__33423__$1 = s__33423;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__33423__$1);
if(temp__4126__auto__){
var s__33423__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33423__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__33423__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__33425 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__33424 = (0);
while(true){
if((i__33424 < size__4383__auto__)){
var vec__33430 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__33424);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33430,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33430,(1),null);
cljs.core.chunk_append(b__33425,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.constant$keyword$6))?cljs.core.constantly(true):pred),schema__$1], null));

var G__33432 = (i__33424 + (1));
i__33424 = G__33432;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33425),iter__33422(cljs.core.chunk_rest(s__33423__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33425),null);
}
} else {
var vec__33431 = cljs.core.first(s__33423__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33431,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33431,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.constant$keyword$6))?cljs.core.constantly(true):pred),schema__$1], null),iter__33422(cljs.core.rest(s__33423__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})(),null,null,null));
};
var conditional = function (var_args){
var preds_and_schemas = null;
if (arguments.length > 0) {
  preds_and_schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return conditional__delegate.call(this,preds_and_schemas);};
conditional.cljs$lang$maxFixedArity = 0;
conditional.cljs$lang$applyTo = (function (arglist__33433){
var preds_and_schemas = cljs.core.seq(arglist__33433);
return conditional__delegate(preds_and_schemas);
});
conditional.cljs$core$IFn$_invoke$arity$variadic = conditional__delegate;
return conditional;
})()
;
/**
* if the predicate returns truthy, use the if-schema, otherwise use the else-schema
*/
schema.core.if$ = (function if$(pred,if_schema,else_schema){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
/**
* A sentinel value representing missing portions of the input data.
*/
schema.core._PLUS_missing_PLUS_ = cljs.core.constant$keyword$40;

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4231__auto____$1,k__4232__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k33435,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__33437 = (((k33435 instanceof cljs.core.Keyword))?k33435.fqn:null);
switch (G__33437) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33435,else__4234__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer(writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4246__auto__,pr_pair__4248__auto__,"#schema.core.RequiredKey{",", ","}",opts__4247__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$41,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap(this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map(this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$41,null], null), null),k__4241__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4241__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__33434){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__33438 = cljs.core.keyword_identical_QMARK_;
var expr__33439 = k__4239__auto__;
if(cljs.core.truth_((function (){var G__33441 = cljs.core.constant$keyword$41;
var G__33442 = expr__33439;
return (pred__33438.cljs$core$IFn$_invoke$arity$2 ? pred__33438.cljs$core$IFn$_invoke$arity$2(G__33441,G__33442) : pred__33438.call(null,G__33441,G__33442));
})())){
return (new schema.core.RequiredKey(G__33434,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4239__auto__,G__33434),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$41,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__33434){
var self__ = this;
var this__4230__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__33434,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4237__auto__)){
return cljs.core._assoc(this__4236__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write(writer__4266__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function __GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function map__GT_RequiredKey(G__33436){
return (new schema.core.RequiredKey(cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(G__33436),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__33436,cljs.core.constant$keyword$41),null));
});

/**
* A required key in a map
*/
schema.core.required_key = (function required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function required_key_QMARK_(ks){
return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4231__auto____$1,k__4232__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k33445,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__33447 = (((k33445 instanceof cljs.core.Keyword))?k33445.fqn:null);
switch (G__33447) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33445,else__4234__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer(writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4246__auto__,pr_pair__4248__auto__,"#schema.core.OptionalKey{",", ","}",opts__4247__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$41,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap(this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map(this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$41,null], null), null),k__4241__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4241__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__33444){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__33448 = cljs.core.keyword_identical_QMARK_;
var expr__33449 = k__4239__auto__;
if(cljs.core.truth_((function (){var G__33451 = cljs.core.constant$keyword$41;
var G__33452 = expr__33449;
return (pred__33448.cljs$core$IFn$_invoke$arity$2 ? pred__33448.cljs$core$IFn$_invoke$arity$2(G__33451,G__33452) : pred__33448.call(null,G__33451,G__33452));
})())){
return (new schema.core.OptionalKey(G__33444,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4239__auto__,G__33444),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$41,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__33444){
var self__ = this;
var this__4230__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__33444,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4237__auto__)){
return cljs.core._assoc(this__4236__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write(writer__4266__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function __GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function map__GT_OptionalKey(G__33446){
return (new schema.core.OptionalKey(cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(G__33446),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__33446,cljs.core.constant$keyword$41),null));
});

/**
* An optional key in a map
*/
schema.core.optional_key = (function optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(schema.core.optional_key_QMARK_(ks)){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Bad explicit key: %s",cljs.core.array_seq([ks], 0))));

}
}
}
});
schema.core.specific_key_QMARK_ = (function specific_key_QMARK_(ks){
return (schema.core.required_key_QMARK_(ks)) || (schema.core.optional_key_QMARK_(ks));
});
schema.core.explain_kspec = (function explain_kspec(kspec){
if(schema.core.specific_key_QMARK_(kspec)){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explicit_schema_key(kspec)),((schema.core.required_key_QMARK_(kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):((schema.core.optional_key_QMARK_(kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)));
}
} else {
return schema.core.explain(kspec);
}
});

/**
* @constructor
* @param {*} kspec
* @param {*} val_schema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.MapEntry = (function (kspec,val_schema,__meta,__extmap,__hash){
this.kspec = kspec;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4231__auto____$1,k__4232__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k33455,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__33457 = (((k33455 instanceof cljs.core.Keyword))?k33455.fqn:null);
switch (G__33457) {
case "val-schema":
return self__.val_schema;

break;
case "kspec":
return self__.kspec;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33455,else__4234__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer(writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4246__auto__,pr_pair__4248__auto__,"#schema.core.MapEntry{",", ","}",opts__4247__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$42,self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$43,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap(this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map(this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,null,cljs.core.constant$keyword$43,null], null), null),k__4241__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4241__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__33454){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__33458 = cljs.core.keyword_identical_QMARK_;
var expr__33459 = k__4239__auto__;
if(cljs.core.truth_((function (){var G__33461 = cljs.core.constant$keyword$42;
var G__33462 = expr__33459;
return (pred__33458.cljs$core$IFn$_invoke$arity$2 ? pred__33458.cljs$core$IFn$_invoke$arity$2(G__33461,G__33462) : pred__33458.call(null,G__33461,G__33462));
})())){
return (new schema.core.MapEntry(G__33454,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33463 = cljs.core.constant$keyword$43;
var G__33464 = expr__33459;
return (pred__33458.cljs$core$IFn$_invoke$arity$2 ? pred__33458.cljs$core$IFn$_invoke$arity$2(G__33463,G__33464) : pred__33458.call(null,G__33463,G__33464));
})())){
return (new schema.core.MapEntry(self__.kspec,G__33454,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4239__auto__,G__33454),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$42,self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$43,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__33454){
var self__ = this;
var this__4230__auto____$1 = this;
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,G__33454,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4237__auto__)){
return cljs.core._assoc(this__4236__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = true;

schema.core.MapEntry.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var val_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.val_schema) : schema.core.subschema_walker.call(null,self__.val_schema));
if(schema.core.specific_key_QMARK_(self__.kspec)){
var optional_QMARK_ = schema.core.optional_key_QMARK_(self__.kspec);
var k = schema.core.explicit_schema_key(self__.kspec);
return ((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (x){
if((schema.core._PLUS_missing_PLUS_ === x)){
if(optional_QMARK_){
return null;
} else {
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null));
}
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x)))){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(optional_QMARK_,k,val_walker,this$__$1))
,null)),null));
} else {
var vec__33465 = x;
var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33465,(0),null);
var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33465,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xk,k)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"xk","xk",741114825,null),new cljs.core.Symbol(null,"k","k",-505765866,null))], 0)))].join('')));
}

var vres = (function (){var G__33466 = xv;
return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__33466) : val_walker.call(null,G__33466));
})();
var temp__4124__auto__ = schema.utils.error_val(vres);
if(cljs.core.truth_(temp__4124__auto__)){
var ve = temp__4124__auto__;
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,ve], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,vres], null);
}

}
}
});
;})(optional_QMARK_,k,val_walker,this$__$1))
} else {
var key_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.kspec) : schema.core.subschema_walker.call(null,self__.kspec));
return ((function (key_walker,val_walker,this$__$1){
return (function (x){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x)))){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (key_walker,val_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(key_walker,val_walker,this$__$1))
,null)),null));
} else {
var out_k = (function (){var G__33467 = cljs.core.key(x);
return (key_walker.cljs$core$IFn$_invoke$arity$1 ? key_walker.cljs$core$IFn$_invoke$arity$1(G__33467) : key_walker.call(null,G__33467));
})();
var out_ke = schema.utils.error_val(out_k);
var out_v = (function (){var G__33468 = cljs.core.val(x);
return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__33468) : val_walker.call(null,G__33468));
})();
var out_ve = schema.utils.error_val(out_v);
if(cljs.core.truth_((function (){var or__3628__auto__ = out_ke;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return out_ve;
}
})())){
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3628__auto__ = out_ke;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.key(x);
}
})(),(function (){var or__3628__auto__ = out_ve;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null);
}
})()], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_k,out_v], null);
}
}
});
;})(key_walker,val_walker,this$__$1))
}
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.val_schema)),schema.core.explain_kspec(self__.kspec)),new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null));
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write(writer__4266__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function __GT_MapEntry(kspec,val_schema){
return (new schema.core.MapEntry(kspec,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function map__GT_MapEntry(G__33456){
return (new schema.core.MapEntry(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(G__33456),cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(G__33456),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33456,cljs.core.constant$keyword$42,cljs.core.array_seq([cljs.core.constant$keyword$43], 0)),null));
});

schema.core.map_entry = (function map_entry(kspec,val_schema){
return (new schema.core.MapEntry(kspec,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));
if((cljs.core.count(key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.array_seq([cljs.core.vec(key_schemata)], 0))));
}

return cljs.core.first(key_schemata);
});
schema.core.preserve_map_type = (function preserve_map_type(original,walker_result){
if((schema.utils.record_QMARK_(original)) && (!(schema.utils.error_QMARK_(walker_result)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(original,walker_result);
} else {
return walker_result;
}
});
schema.core.map_walker = (function map_walker(map_schema){
var extra_keys_schema = schema.core.find_extra_keys_schema(map_schema);
var extra_walker = (cljs.core.truth_(extra_keys_schema)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema))) : schema.core.subschema_walker.call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema)))):null);
var explicit_schema = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(map_schema,extra_keys_schema);
var explicit_walkers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4384__auto__ = ((function (extra_keys_schema,extra_walker,explicit_schema){
return (function iter__33495(s__33496){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema,extra_walker,explicit_schema){
return (function (){
var s__33496__$1 = s__33496;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__33496__$1);
if(temp__4126__auto__){
var s__33496__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33496__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__33496__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__33498 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__33497 = (0);
while(true){
if((i__33497 < size__4383__auto__)){
var vec__33503 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__33497);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33503,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33503,(1),null);
cljs.core.chunk_append(b__33498,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null));

var G__33519 = (i__33497 + (1));
i__33497 = G__33519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33498),iter__33495(cljs.core.chunk_rest(s__33496__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33498),null);
}
} else {
var vec__33504 = cljs.core.first(s__33496__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33504,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33504,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null),iter__33495(cljs.core.rest(s__33496__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema,extra_walker,explicit_schema))
,null,null));
});})(extra_keys_schema,extra_walker,explicit_schema))
;
return iter__4384__auto__(explicit_schema);
})());
var err_conj = schema.utils.result_builder(cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(explicit_schema),cljs.core.count(explicit_walkers))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p1__33470_SHARP_){
return (cljs.core.count(p1__33470_SHARP_) > (1));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(explicit_schema))))))], 0))));
}

return ((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (x){
if(!(cljs.core.map_QMARK_(x))){
return schema.utils.error(schema.utils.__GT_ValidationError(map_schema,x,(new cljs.core.Delay(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,null)),null));
} else {
return schema.core.preserve_map_type(x,(function (){var ok_key = cljs.core.PersistentHashSet.EMPTY;
var explicit_walkers__$1 = cljs.core.seq(explicit_walkers);
var out = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not(explicit_walkers__$1)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(extra_walker)?((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,e){
var G__33505 = out__$1;
var G__33506 = (function (){var G__33507 = e;
return (extra_walker.cljs$core$IFn$_invoke$arity$1 ? extra_walker.cljs$core$IFn$_invoke$arity$1(G__33507) : extra_walker.call(null,G__33507));
})();
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__33505,G__33506) : err_conj.call(null,G__33505,G__33506));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
:((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,p__33508){
var vec__33509 = p__33508;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33509,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33509,(1),null);
var G__33510 = out__$1;
var G__33511 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__33510,G__33511) : err_conj.call(null,G__33510,G__33511));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
),out,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p__33512){
var vec__33513 = p__33512;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33513,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33513,(1),null);
var G__33514 = k;
return (ok_key.cljs$core$IFn$_invoke$arity$1 ? ok_key.cljs$core$IFn$_invoke$arity$1(G__33514) : ok_key.call(null,G__33514));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,x));
} else {
var vec__33515 = cljs.core.first(explicit_walkers__$1);
var wk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33515,(0),null);
var wv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33515,(1),null);
var G__33520 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ok_key,wk);
var G__33521 = cljs.core.next(explicit_walkers__$1);
var G__33522 = (function (){var G__33516 = out;
var G__33517 = (function (){var G__33518 = (function (){var or__3628__auto__ = cljs.core.find(x,wk);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return schema.core._PLUS_missing_PLUS_;
}
})();
return (wv.cljs$core$IFn$_invoke$arity$1 ? wv.cljs$core$IFn$_invoke$arity$1(G__33518) : wv.call(null,G__33518));
})();
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__33516,G__33517) : err_conj.call(null,G__33516,G__33517));
})();
ok_key = G__33520;
explicit_walkers__$1 = G__33521;
out = G__33522;
continue;
}
break;
}
})());
}
});
;})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
});
schema.core.map_explain = (function map_explain(this$){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4384__auto__ = (function iter__33533(s__33534){
return (new cljs.core.LazySeq(null,(function (){
var s__33534__$1 = s__33534;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__33534__$1);
if(temp__4126__auto__){
var s__33534__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33534__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__33534__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__33536 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__33535 = (0);
while(true){
if((i__33535 < size__4383__auto__)){
var vec__33541 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__33535);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33541,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33541,(1),null);
cljs.core.chunk_append(b__33536,cljs.core.vec(cljs.core.next(schema.core.map_entry(k,v).schema$core$Schema$explain$arity$1(null))));

var G__33543 = (i__33535 + (1));
i__33535 = G__33543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33536),iter__33533(cljs.core.chunk_rest(s__33534__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33536),null);
}
} else {
var vec__33542 = cljs.core.first(s__33534__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33542,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33542,(1),null);
return cljs.core.cons(cljs.core.vec(cljs.core.next(schema.core.map_entry(k,v).schema$core$Schema$explain$arity$1(null))),iter__33533(cljs.core.rest(s__33534__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__(this$);
})());
});
cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_walker(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_walker(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_("Set schema must have exactly one element")));
}

var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(cljs.core.first(this$__$1)) : schema.core.subschema_walker.call(null,cljs.core.first(this$__$1)));
return ((function (sub_walker,this$__$1){
return (function (x){
var or__3628__auto__ = ((cljs.core.set_QMARK_(x))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(sub_walker,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var vec__33544 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.keep).call(null,schema.utils.error_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sub_walker,x));
var good = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33544,(0),null);
var bad = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33544,(1),null);
if(cljs.core.seq(bad)){
return schema.utils.error(cljs.core.set(bad));
} else {
return cljs.core.set(good);
}
}
});
;})(sub_walker,this$__$1))
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(cljs.core.first(this$__$1))], null));
});

/**
* @constructor
* @param {*} schema
* @param {*} optional_QMARK_
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4231__auto____$1,k__4232__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k33546,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__33548 = (((k33546 instanceof cljs.core.Keyword))?k33546.fqn:null);
switch (G__33548) {
case "name":
return self__.name;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33546,else__4234__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer(writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4246__auto__,pr_pair__4248__auto__,"#schema.core.One{",", ","}",opts__4247__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$44,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$37,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap(this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map(this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$37,null,cljs.core.constant$keyword$44,null], null), null),k__4241__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4241__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__33545){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__33549 = cljs.core.keyword_identical_QMARK_;
var expr__33550 = k__4239__auto__;
if(cljs.core.truth_((function (){var G__33552 = cljs.core.constant$keyword$24;
var G__33553 = expr__33550;
return (pred__33549.cljs$core$IFn$_invoke$arity$2 ? pred__33549.cljs$core$IFn$_invoke$arity$2(G__33552,G__33553) : pred__33549.call(null,G__33552,G__33553));
})())){
return (new schema.core.One(G__33545,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33554 = cljs.core.constant$keyword$44;
var G__33555 = expr__33550;
return (pred__33549.cljs$core$IFn$_invoke$arity$2 ? pred__33549.cljs$core$IFn$_invoke$arity$2(G__33554,G__33555) : pred__33549.call(null,G__33554,G__33555));
})())){
return (new schema.core.One(self__.schema,G__33545,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33556 = cljs.core.constant$keyword$37;
var G__33557 = expr__33550;
return (pred__33549.cljs$core$IFn$_invoke$arity$2 ? pred__33549.cljs$core$IFn$_invoke$arity$2(G__33556,G__33557) : pred__33549.call(null,G__33556,G__33557));
})())){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__33545,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4239__auto__,G__33545),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$44,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$37,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__33545){
var self__ = this;
var this__4230__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__33545,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4237__auto__)){
return cljs.core._assoc(this__4236__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write(writer__4266__auto__,"schema.core/One");
});

schema.core.__GT_One = (function __GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function map__GT_One(G__33547){
return (new schema.core.One(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(G__33547),cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1(G__33547),cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(G__33547),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33547,cljs.core.constant$keyword$24,cljs.core.array_seq([cljs.core.constant$keyword$44,cljs.core.constant$keyword$37], 0)),null));
});

/**
* A single required element of a sequence (not repeated, the implicit default)
*/
schema.core.one = (function one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
* A single optional element of a sequence (not repeated, the implicit default)
*/
schema.core.optional = (function optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function parse_sequence_schema(s){

var vec__33564 = cljs.core.split_with((function (p1__33559_SHARP_){
return ((p1__33559_SHARP_ instanceof schema.core.One)) && (cljs.core.not(cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1(p1__33559_SHARP_)));
}),s);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33564,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33564,(1),null);
var vec__33565 = cljs.core.split_with(((function (vec__33564,required,more){
return (function (p1__33560_SHARP_){
var and__3616__auto__ = (p1__33560_SHARP_ instanceof schema.core.One);
if(and__3616__auto__){
return cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1(p1__33560_SHARP_);
} else {
return and__3616__auto__;
}
});})(vec__33564,required,more))
,more);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33565,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33565,(1),null);
if(((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__33564,required,more,vec__33565,optional,more__$1){
return (function (p1__33561_SHARP_){
return !((p1__33561_SHARP_ instanceof schema.core.One));
});})(vec__33564,required,more,vec__33565,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Sequence schema %s does not match [one* optional* rest-schema?]",cljs.core.array_seq([s], 0))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;

cljs.core.PersistentVector.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
var vec__33566 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33566,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33566,(1),null);
var single_walkers = cljs.core.vec((function (){var iter__4384__auto__ = ((function (vec__33566,singles,multi,this$__$1){
return (function iter__33567(s__33568){
return (new cljs.core.LazySeq(null,((function (vec__33566,singles,multi,this$__$1){
return (function (){
var s__33568__$1 = s__33568;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__33568__$1);
if(temp__4126__auto__){
var s__33568__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33568__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__33568__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__33570 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__33569 = (0);
while(true){
if((i__33569 < size__4383__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__33569);
cljs.core.chunk_append(b__33570,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null));

var G__33598 = (i__33569 + (1));
i__33569 = G__33598;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33570),iter__33567(cljs.core.chunk_rest(s__33568__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33570),null);
}
} else {
var s = cljs.core.first(s__33568__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null),iter__33567(cljs.core.rest(s__33568__$2)));
}
} else {
return null;
}
break;
}
});})(vec__33566,singles,multi,this$__$1))
,null,null));
});})(vec__33566,singles,multi,this$__$1))
;
return iter__4384__auto__(singles);
})());
var multi_walker = (cljs.core.truth_(multi)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(multi) : schema.core.subschema_walker.call(null,multi)):null);
var err_conj = schema.utils.result_builder(((function (vec__33566,singles,multi,single_walkers,multi_walker,this$__$1){
return (function (m){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(m),null));
});})(vec__33566,singles,multi,single_walkers,multi_walker,this$__$1))
);
return ((function (vec__33566,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (x){
var or__3628__auto__ = ((((x == null)) || (cljs.core.sequential_QMARK_(x)))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (vec__33566,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(vec__33566,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var single_walkers__$1 = single_walkers;
var x__$1 = x;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__4124__auto__ = cljs.core.first(single_walkers__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__33573 = temp__4124__auto__;
var first_single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33573,(0),null);
var single_walker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33573,(1),null);
if(cljs.core.empty_QMARK_(x__$1)){
if(cljs.core.truth_(first_single.optional_QMARK_)){
return out;
} else {
var G__33574 = out;
var G__33575 = schema.utils.error(schema.utils.__GT_ValidationError(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,single_walkers__$1)),null,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__33574,vec__33573,first_single,single_walker,temp__4124__auto__,or__3628__auto__,vec__33566,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"present?","present?",-1810613791,null),(function (){var iter__4384__auto__ = ((function (single_walkers__$1,x__$1,out,G__33574,vec__33573,first_single,single_walker,temp__4124__auto__,or__3628__auto__,vec__33566,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function iter__33576(s__33577){
return (new cljs.core.LazySeq(null,((function (single_walkers__$1,x__$1,out,G__33574,vec__33573,first_single,single_walker,temp__4124__auto__,or__3628__auto__,vec__33566,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
var s__33577__$1 = s__33577;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__33577__$1);
if(temp__4126__auto__){
var s__33577__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33577__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__33577__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__33579 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__33578 = (0);
while(true){
if((i__33578 < size__4383__auto__)){
var vec__33584 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__33578);
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33584,(0),null);
if(cljs.core.not(single.optional_QMARK_)){
cljs.core.chunk_append(b__33579,single.name);

var G__33599 = (i__33578 + (1));
i__33578 = G__33599;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33579),iter__33576(cljs.core.chunk_rest(s__33577__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33579),null);
}
} else {
var vec__33585 = cljs.core.first(s__33577__$2);
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33585,(0),null);
if(cljs.core.not(single.optional_QMARK_)){
return cljs.core.cons(single.name,iter__33576(cljs.core.rest(s__33577__$2)));
} else {
return null;
}
}
} else {
return null;
}
break;
}
});})(single_walkers__$1,x__$1,out,G__33574,vec__33573,first_single,single_walker,temp__4124__auto__,or__3628__auto__,vec__33566,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null,null));
});})(single_walkers__$1,x__$1,out,G__33574,vec__33573,first_single,single_walker,temp__4124__auto__,or__3628__auto__,vec__33566,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
;
return iter__4384__auto__(single_walkers__$1);
})());
});})(single_walkers__$1,x__$1,out,G__33574,vec__33573,first_single,single_walker,temp__4124__auto__,or__3628__auto__,vec__33566,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__33574,G__33575) : err_conj.call(null,G__33574,G__33575));
}
} else {
var G__33600 = cljs.core.next(single_walkers__$1);
var G__33601 = cljs.core.rest(x__$1);
var G__33602 = (function (){var G__33586 = out;
var G__33587 = schema.utils.wrap_error_name(first_single.name,(function (){var G__33588 = cljs.core.first(x__$1);
return (single_walker.cljs$core$IFn$_invoke$arity$1 ? single_walker.cljs$core$IFn$_invoke$arity$1(G__33588) : single_walker.call(null,G__33588));
})());
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__33586,G__33587) : err_conj.call(null,G__33586,G__33587));
})();
single_walkers__$1 = G__33600;
x__$1 = G__33601;
out = G__33602;
continue;
}
} else {
if(cljs.core.truth_(multi)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(err_conj,out,cljs.core.map.cljs$core$IFn$_invoke$arity$2(multi_walker,x__$1));
} else {
if(cljs.core.seq(x__$1)){
var G__33589 = out;
var G__33590 = schema.utils.error(schema.utils.__GT_ValidationError(null,x__$1,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__33589,temp__4124__auto__,or__3628__auto__,vec__33566,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.count(x__$1)),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(single_walkers__$1,x__$1,out,G__33589,temp__4124__auto__,or__3628__auto__,vec__33566,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__33589,G__33590) : err_conj.call(null,G__33589,G__33590));
} else {
return out;

}
}
}
break;
}
}
});
;})(vec__33566,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__33591 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33591,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33591,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4384__auto__ = ((function (vec__33591,singles,multi,this$__$1){
return (function iter__33592(s__33593){
return (new cljs.core.LazySeq(null,((function (vec__33591,singles,multi,this$__$1){
return (function (){
var s__33593__$1 = s__33593;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__33593__$1);
if(temp__4126__auto__){
var s__33593__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33593__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__33593__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__33595 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__33594 = (0);
while(true){
if((i__33594 < size__4383__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__33594);
cljs.core.chunk_append(b__33595,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))));

var G__33603 = (i__33594 + (1));
i__33594 = G__33603;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33595),iter__33592(cljs.core.chunk_rest(s__33593__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33595),null);
}
} else {
var s = cljs.core.first(s__33593__$2);
return cljs.core.cons(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))),iter__33592(cljs.core.rest(s__33593__$2)));
}
} else {
return null;
}
break;
}
});})(vec__33591,singles,multi,this$__$1))
,null,null));
});})(vec__33591,singles,multi,this$__$1))
;
return iter__4384__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(multi)], null):null)));
});
/**
* A schema for a pair of schemas and their names
*/
schema.core.pair = (function pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(first_schema,first_name),schema.core.one(second_schema,second_name)], null);
});

/**
* @constructor
* @param {*} klass
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4231__auto____$1,k__4232__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k33605,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__33607 = (((k33605 instanceof cljs.core.Keyword))?k33605.fqn:null);
switch (G__33607) {
case "schema":
return self__.schema;

break;
case "klass":
return self__.klass;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33605,else__4234__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer(writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4246__auto__,pr_pair__4248__auto__,"#schema.core.Record{",", ","}",opts__4247__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$45,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap(this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map(this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$45,null], null), null),k__4241__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4241__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__33604){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__33608 = cljs.core.keyword_identical_QMARK_;
var expr__33609 = k__4239__auto__;
if(cljs.core.truth_((function (){var G__33611 = cljs.core.constant$keyword$45;
var G__33612 = expr__33609;
return (pred__33608.cljs$core$IFn$_invoke$arity$2 ? pred__33608.cljs$core$IFn$_invoke$arity$2(G__33611,G__33612) : pred__33608.call(null,G__33611,G__33612));
})())){
return (new schema.core.Record(G__33604,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33613 = cljs.core.constant$keyword$24;
var G__33614 = expr__33609;
return (pred__33608.cljs$core$IFn$_invoke$arity$2 ? pred__33608.cljs$core$IFn$_invoke$arity$2(G__33613,G__33614) : pred__33608.call(null,G__33613,G__33614));
})())){
return (new schema.core.Record(self__.klass,G__33604,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4239__auto__,G__33604),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$45,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__33604){
var self__ = this;
var this__4230__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__33604,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4237__auto__)){
return cljs.core._assoc(this__4236__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = true;

schema.core.Record.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var map_checker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
var pred_checker = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4126__auto__)){
var evf = temp__4126__auto__;
return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.pred.cljs$core$IFn$_invoke$arity$1(evf)) : schema.core.subschema_walker.call(null,schema.core.pred.cljs$core$IFn$_invoke$arity$1(evf)));
} else {
return null;
}
})();
return ((function (map_checker,pred_checker,this$__$1){
return (function (r){
var or__3628__auto__ = (((r instanceof self__.klass))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,r,(new cljs.core.Delay(((function (map_checker,pred_checker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(r)),self__.klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(map_checker,pred_checker,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var res = (function (){var G__33615 = r;
return (map_checker.cljs$core$IFn$_invoke$arity$1 ? map_checker.cljs$core$IFn$_invoke$arity$1(G__33615) : map_checker.call(null,G__33615));
})();
if(schema.utils.error_QMARK_(res)){
return res;
} else {
var pred_res = (cljs.core.truth_(pred_checker)?(function (){var G__33616 = r;
return (pred_checker.cljs$core$IFn$_invoke$arity$1 ? pred_checker.cljs$core$IFn$_invoke$arity$1(G__33616) : pred_checker.call(null,G__33616));
})():null);
if(schema.utils.error_QMARK_(pred_res)){
return pred_res;
} else {
return res;
}
}
}
});
;})(map_checker,pred_checker,this$__$1))
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.klass], 0)))),new cljs.core.Symbol(null,"record","record",861424668,null));
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write(writer__4266__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function __GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function map__GT_Record(G__33606){
return (new schema.core.Record(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(G__33606),cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(G__33606),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33606,cljs.core.constant$keyword$45,cljs.core.array_seq([cljs.core.constant$keyword$24], 0)),null));
});

/**
* A Record instance of type klass, whose elements match map schema 'schema'.
*/
schema.core.record = (function record(klass,schema__$1){
if(cljs.core.map_QMARK_(schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.array_seq([schema.utils.type_of(schema__$1)], 0))));
}

return (new schema.core.Record(klass,schema__$1,null,null,null));
});
schema.core.explain_input_schema = (function explain_input_schema(input_schema){
var vec__33621 = cljs.core.split_with((function (p1__33618_SHARP_){
return (p1__33618_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33621,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33621,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__33621,required,more){
return (function (p1__33619_SHARP_){
return schema.core.explain(p1__33619_SHARP_.schema);
});})(vec__33621,required,more))
,required),((cljs.core.seq(more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain,more)], null):null));
});

/**
* @constructor
* @param {*} output_schema
* @param {*} input_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4231__auto____$1,k__4232__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k33623,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__33625 = (((k33623 instanceof cljs.core.Keyword))?k33623.fqn:null);
switch (G__33625) {
case "input-schemas":
return self__.input_schemas;

break;
case "output-schema":
return self__.output_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33623,else__4234__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer(writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4246__auto__,pr_pair__4248__auto__,"#schema.core.FnSchema{",", ","}",opts__4247__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$47,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$48,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap(this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map(this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$47,null,cljs.core.constant$keyword$48,null], null), null),k__4241__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4241__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__33622){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__33626 = cljs.core.keyword_identical_QMARK_;
var expr__33627 = k__4239__auto__;
if(cljs.core.truth_((function (){var G__33629 = cljs.core.constant$keyword$47;
var G__33630 = expr__33627;
return (pred__33626.cljs$core$IFn$_invoke$arity$2 ? pred__33626.cljs$core$IFn$_invoke$arity$2(G__33629,G__33630) : pred__33626.call(null,G__33629,G__33630));
})())){
return (new schema.core.FnSchema(G__33622,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33631 = cljs.core.constant$keyword$48;
var G__33632 = expr__33627;
return (pred__33626.cljs$core$IFn$_invoke$arity$2 ? pred__33626.cljs$core$IFn$_invoke$arity$2(G__33631,G__33632) : pred__33626.call(null,G__33631,G__33632));
})())){
return (new schema.core.FnSchema(self__.output_schema,G__33622,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4239__auto__,G__33622),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$47,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$48,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__33622){
var self__ = this;
var this__4230__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__33622,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4237__auto__)){
return cljs.core._assoc(this__4236__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = true;

schema.core.FnSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.ifn_QMARK_(x)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.input_schemas) > (1))){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain(self__.output_schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain(self__.output_schema),schema.core.explain_input_schema(cljs.core.first(self__.input_schemas)));
}
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write(writer__4266__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function __GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function map__GT_FnSchema(G__33624){
return (new schema.core.FnSchema(cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(G__33624),cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(G__33624),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33624,cljs.core.constant$keyword$47,cljs.core.array_seq([cljs.core.constant$keyword$48], 0)),null));
});

schema.core.arity = (function arity(input_schema){
if(cljs.core.seq(input_schema)){
if((cljs.core.last(input_schema) instanceof schema.core.One)){
return cljs.core.count(input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
* A function outputting a value in output schema, whose argument vector must match one of
* input-schemas, each of which should be a sequence schema.
* Currently function schemas are purely descriptive; they validate against any function,
* regardless of actual input and output types.
*/
schema.core.make_fn_schema = (function make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq(input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_("Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas),null,null,null));
});
schema.core.schema_with_name = (function schema_with_name(schema__$1,name){

return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema__$1,cljs.core.assoc,cljs.core.constant$keyword$37,name);
});
schema.core.schema_name = (function schema_name(schema__$1){

return cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
* Get the current global schema validation setting.
*/
schema.core.fn_validation_QMARK_ = (function fn_validation_QMARK_(){
return schema.utils.use_fn_validation.get_cell();
});
/**
* Globally turn on schema validation for all s/fn and s/defn instances.
*/
schema.core.set_fn_validation_BANG_ = (function set_fn_validation_BANG_(on_QMARK_){
return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
* Attach the schema to fn f at runtime, extractable by fn-schema.
*/
schema.core.schematize_fn = (function schematize_fn(f,schema__$1){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,cljs.core.constant$keyword$24,schema__$1);
});
/**
* Produce the schema for a function defined with s/fn or s/defn.
*/
schema.core.fn_schema = (function fn_schema(f){
if(cljs.core.fn_QMARK_(f)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Non-function %s",cljs.core.array_seq([schema.utils.type_of(f)], 0))));
}

var or__3628__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var m__6014__auto__ = cljs.core.meta(f);
var k__6015__auto__ = cljs.core.constant$keyword$24;
var temp__4124__auto__ = cljs.core.find(m__6014__auto__,k__6015__auto__);
if(cljs.core.truth_(temp__4124__auto__)){
var pair__6016__auto__ = temp__4124__auto__;
return cljs.core.val(pair__6016__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k__6015__auto__,m__6014__auto__], 0))));
}
}
});
