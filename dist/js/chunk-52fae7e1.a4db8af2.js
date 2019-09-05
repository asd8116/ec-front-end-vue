(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52fae7e1"],{"392f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container py-5"},[n("AdminDiscountForm",{attrs:{"is-processing":e.isProcessing},on:{"after-submit":e.handleAfterSubmit}})],1)},i=[],s=(n("96cf"),n("3b8d")),o=n("671d"),a=n("3dbb"),c=n("2fa3"),u={components:{AdminDiscountForm:a["a"]},data:function(){return{isProcessing:!1}},methods:{handleAfterSubmit:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,r,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=this,n.isProcessing=!0,e.next=5,o["a"].postDiscount(t);case 5:if(r=e.sent,i=r.data,s=r.statusText,"OK"===s&&"success"===i.status){e.next=10;break}throw new Error(s);case 10:n.$router.push({name:"admin-discounts"}),e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](0),this.isProcessing=!1,c["Toast"].fire({type:"error",title:"無法新增 discount，請稍後再試"});case 17:case"end":return e.stop()}},e,this,[[0,13]])}));function t(t){return e.apply(this,arguments)}return t}()}},p=u,d=n("2877"),l=Object(d["a"])(p,r,i,!1,null,null,null);t["default"]=l.exports},"3dbb":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.discount.name,expression:"discount.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter name",required:""},domProps:{value:e.discount.name},on:{input:function(t){t.target.composing||e.$set(e.discount,"name",t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"target_price"}},[e._v("消費額度")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.discount.target_price,expression:"discount.target_price",modifiers:{number:!0}}],staticClass:"form-control",attrs:{id:"target_price",type:"number",name:"target_price"},domProps:{value:e.discount.target_price},on:{input:function(t){t.target.composing||e.$set(e.discount,"target_price",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"percent"}},[e._v("折扣 % 數")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.discount.percent,expression:"discount.percent",modifiers:{number:!0}}],staticClass:"form-control",attrs:{id:"percent",type:"number",name:"percent"},domProps:{value:e.discount.percent},on:{input:function(t){t.target.composing||e.$set(e.discount,"percent",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"product_reduce"}},[e._v("折抵費用")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.discount.product_reduce,expression:"discount.product_reduce",modifiers:{number:!0}}],staticClass:"form-control",attrs:{id:"product_reduce",type:"number",name:"product_reduce"},domProps:{value:e.discount.product_reduce},on:{input:function(t){t.target.composing||e.$set(e.discount,"product_reduce",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"description"}},[e._v("Description")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.discount.description,expression:"discount.description"}],staticClass:"form-control",attrs:{id:"description",rows:"3",name:"description"},domProps:{value:e.discount.description},on:{input:function(t){t.target.composing||e.$set(e.discount,"description",t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("div",{staticClass:"form-check form-check-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.discount.shipping_free,expression:"discount.shipping_free"}],staticClass:"form-check-input",attrs:{type:"radio",id:"shipping_free1",name:"shipping_free"},domProps:{value:1,checked:e._q(e.discount.shipping_free,1)},on:{change:function(t){return e.$set(e.discount,"shipping_free",1)}}}),n("label",{staticClass:"form-check-label",attrs:{for:"shipping_free1"}},[e._v("免運費")])]),n("div",{staticClass:"form-check form-check-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.discount.shipping_free,expression:"discount.shipping_free"}],staticClass:"form-check-input",attrs:{type:"radio",id:"shipping_free2",name:"shipping_free"},domProps:{value:0,checked:e._q(e.discount.shipping_free,0)},on:{change:function(t){return e.$set(e.discount,"shipping_free",0)}}}),n("label",{staticClass:"form-check-label",attrs:{for:"shipping_free2"}},[e._v("需運費")])])]),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(e._s(e.isProcessing?"處理中...":"上傳折扣活動"))])])},i=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("7f7f"),n("bd86")),o=n("2fa3");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach(function(t){Object(s["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var u={props:{initialDiscount:{type:Object,default:function(){return{}}},isProcessing:{type:Boolean,default:!1}},data:function(){return{discount:{name:"",description:"",target_price:0,percent:0,product_reduce:0,shipping_free:0,start_date:"",end_date:""},isLoading:!0}},watch:{initialDiscount:function(e){this.discount=c({},this.discount,{},e)}},created:function(){this.discount=c({},this.discount,{},this.initialDiscount)},methods:{handleSubmit:function(e){if(this.discount.name)if(this.discount.target_price){var t=e.target,n=new FormData(t);this.$emit("after-submit",n)}else o["Toast"].fire({type:"warning",title:"請填寫消費額度"});else o["Toast"].fire({type:"warning",title:"請填寫 discount 名稱"})}}},p=u,d=n("2877"),l=Object(d["a"])(p,r,i,!1,null,null,null);t["a"]=l.exports},"671d":function(e,t,n){"use strict";var r=n("2fa3");t["a"]={getDiscounts:function(){return r["apiHelper"].get("/admin/discounts")},getDiscount:function(e){return r["apiHelper"].get("/admin/discounts/".concat(e))},postDiscount:function(e){return r["apiHelper"].post("/admin/discounts",e)},putDiscount:function(e,t){return r["apiHelper"].put("/admin/discounts/".concat(e),t)},deleteDiscount:function(e){return r["apiHelper"].delete("/admin/discounts/".concat(e))}}}}]);
//# sourceMappingURL=chunk-52fae7e1.a4db8af2.js.map