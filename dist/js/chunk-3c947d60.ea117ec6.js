(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c947d60"],{"62b8":function(t,s,a){},"69b2":function(t,s,a){"use strict";var e=a("62b8"),c=a.n(e);c.a},"9b2a":function(t,s,a){"use strict";var e=a("2fa3");s["a"]={postOrder:function(t){return e["apiHelper"].post("/order",t)},getOrder:function(){return e["apiHelper"].get("/order")}}},ab31:function(t,s,a){"use strict";var e=a("2fa3");s["a"]={postCoupon:function(t){return e["apiHelper"].post("/coupon",t)},getCoupon:function(){return e["apiHelper"].get("/coupon")},deleteCoupon:function(t){return e["apiHelper"].delete("/coupon",t)}}},d3bb:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container py-5"},[t._m(0),t.isLoading?a("Spinner"):a("div",[a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card",attrs:{"data-toggle":"collapse",href:"#orderSummary","aria-expanded":"true"}},[a("div",{staticClass:"card-header text-center py-3 border"},[a("b",[t._v("\n              合計 (\n              "),a("span",{staticClass:"sl-cart-count ng-isolate-scope"},[t._v(t._s(t.orderItems.length))]),t._v("\n               件): NT "+t._s(t._f("currency")(t.checkoutPrice))+"\n            ")]),a("span",[t.status?t._e():a("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"},on:{click:t.collapseStatusChange}}),t.status?a("i",{staticClass:"fa fa-angle-up",attrs:{"aria-hidden":"true"},on:{click:t.collapseStatusChange}}):t._e()])]),a("div",{staticClass:"collapse",attrs:{id:"orderSummary"}},[a("div",{staticClass:"card-body border pt-3 pb-0 hidden-In-Mobile"},[a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-md-5"},[t._v("商品資料")]),a("div",{staticClass:"col-md-3 text-center"},[t._v("單件價格")]),a("div",{staticClass:"col-md-2 text-center"},[t._v("數量")]),a("div",{staticClass:"col-md-2 text-center item-total"},[t._v("小計")])])]),a("div",{staticClass:"card-body border py-0"},t._l(t.orderItems,function(s){return a("div",{key:s.id,staticClass:"row item-data"},[a("div",{staticClass:"col-8 col-md-5 my-auto"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 col-md-6"},[a("router-link",{attrs:{to:{name:"product",params:{productId:s.id}}}},[a("img",{staticClass:"w-100",attrs:{src:t._f("emptyImage")(s.image),alt:""}})])],1),a("h6",{staticClass:"col-6 col-md-6 item-name px-0"},[t._v(t._s(s.name))])])]),a("div",{staticClass:"col-4 col-md-3 item-price my-auto text-center"},[a("div",{staticClass:"row"},[a("span",{staticClass:"col-12 col-md-12 sell_price text-muted font-italic"},[t._v("NT "+t._s(t._f("currency")(s.sell_price)))]),a("span",{staticClass:"col-12 col-md-12 original-price text-muted font-italic"},[t._v("NT "+t._s(t._f("currency")(s.origin_price)))])])]),a("div",{staticClass:"col-6 col-md-2 item-quantity text-center"},[a("span",{staticClass:"item-quantity-text"},[t._v("數量：")]),a("span",[t._v(t._s(s.OrderItem.quantity))])]),a("div",{staticClass:"col-6 col-md-2 item-total text-center"},[a("span",{staticClass:"total-count"},[t._v("NT "+t._s(t._f("currency")(s.sell_price*s.OrderItem.quantity)))])])])}),0),t.showCoupon||t.showDiscount?a("div",{staticClass:"card-body cart-promotions pt-0"},[a("div",{staticClass:"row mt-3"},[a("b",{staticClass:"col-12"},[t._v("已享用之優惠")]),t.discountData.id?a("div",{staticClass:"col-12 promotion-discount"},[a("div",{staticClass:"row text-center p-3"},[a("span",{staticClass:"col-7 col-md-4 discount-name bg-warning my-auto py-2"},[t._v("特價活動 - "+t._s(t.discountData.name))]),a("span",{staticClass:"col-5 col-md-3 my-auto py-2 bg-light discount-description"},[t._v(t._s(t.discountData.description))]),a("span",{staticClass:"col-12 col-md-5 my-auto py-2 text-right discount bg-light font-weight-bold"},[a("div",{staticClass:"row"},[a("span",{staticClass:"col-12"},[t._v("- NT "+t._s(t._f("currency")(t.coupon_discount_fee)))])])])])]):t._e(),t.discountData.id||null===t.couponData.length?t._e():a("div",{staticClass:"col-12 promotion-coupon"},[a("div",{staticClass:"row text-center p-3"},[a("span",{staticClass:"col-4 col-md-2 coupon-name bg-success text-light my-auto py-2"},[t._v(t._s(t.couponData.name))]),a("span",{staticClass:"col-4 col-md-3 my-auto py-2 coupon-description"},[t._v(t._s(t.couponData.description))]),a("span",{staticClass:"col-4 col-md-7 my-auto py-2 text-right discount"},[t._v("- NT "+t._s(t._f("currency")(t.coupon_discount_fee)))])])])])]):t._e(),a("div",{staticClass:"card-body order-summary border"},[a("div",{staticClass:"row text-right"},[a("div",{staticClass:"col-12 subtotal"},[a("div",{staticClass:"col-6 col-md-9 d-inline-block"},[t._v("小計:")]),a("div",{staticClass:"col-6 col-md-3 d-inline-block"},[t._v("NT "+t._s(t._f("currency")(t.total_amount)))])]),a("div",{staticClass:"col-12 delivery-fee"},[a("div",{staticClass:"col-6 col-md-9 d-inline-block"},[t._v("運費:")]),a("div",{staticClass:"col-6 col-md-3 d-inline-block"},[t._v("NT "+t._s(t._f("currency")(t.shipping_fee)))])]),a("div",{staticClass:"col-12 coupon-fee"},[a("div",{staticClass:"col-6 col-md-9 d-inline-block"},[t._v("折扣:")]),a("div",{staticClass:"col-6 col-md-3 d-inline-block"},[t._v("- NT "+t._s(t._f("currency")(t.coupon_discount_fee)))])]),a("div",{staticClass:"col-12 total"},[a("div",{staticClass:"col-6 col-md-9 d-inline-block"},[t._v("合計:")]),a("div",{staticClass:"col-6 col-md-3 d-inline-block font-weight-bold"},[t._v("NT "+t._s(t._f("currency")(t.total_amount+t.shipping_fee-t.coupon_discount_fee)))])])])]),a("div",{staticClass:"card-footer text-center"},[a("i",{staticClass:"fa fa-angle-up",attrs:{"aria-hidden":"true"}})])])])])]),a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-12 mx-auto"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header py-3 text-center border"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 col-md-5 my-auto text-right"},[a("i",{staticClass:"fas fa-check",attrs:{"aria-hidden":"true"}})]),a("div",{staticClass:"col-9 col-md-7 text-left pl-3"},["0"===t.payment_status||"2"===t.payment_status?a("h5",{staticClass:"text-primary"},[t._v("訂單成立 Email 已寄出給您 :D")]):"1"===t.payment_status?a("h5",{staticClass:"text-danger"},[t._v("訂單成功付款 Email 已寄出給您 :D")]):t._e(),"0"===t.payment_status||"2"===t.payment_status?a("h6",[t._v("您的訂單編號為 "+t._s(t.orderId)+"，請確認下方資訊！")]):"1"===t.payment_status?a("h6",[t._v("您的訂單編號為 "+t._s(t.orderId)+"，請確認下方資訊！")]):t._e()])])]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-6"},[a("h5",[t._v("訂單資訊")]),a("div",{staticClass:"row"},[a("span",{staticClass:"col-xs-5 col-sm-4"},[t._v("訂單日期:")]),a("span",{staticClass:"col-xs-7 col-sm-8"},[t._v(t._s(t._f("detailedTime")(t.order.createdAt)))])]),a("div",{staticClass:"row"},[a("span",{staticClass:"col-xs-5 col-sm-4"},[t._v("訂單狀態:")]),"1"===t.order_status?a("span",{staticClass:"col-xs-7 col-sm-8"},[t._v("處理中")]):"0"===t.order_status?a("span",{staticClass:"col-xs-7 col-sm-8"},[t._v("已取消")]):t._e()])]),a("div",{staticClass:"col-6"},[a("h5",[t._v("顧客資訊")]),a("div",{staticClass:"row"},[a("span",{staticClass:"col-xs-5 col-sm-4"},[t._v("名稱:")]),a("span",{staticClass:"col-xs-7 col-sm-8"},[t._v(t._s(t.order.name))])]),a("div",{staticClass:"row"},[a("span",{staticClass:"col-xs-5 col-sm-4"},[t._v("電話號碼:")]),a("span",{staticClass:"col-xs-7 col-sm-8"},[t._v(t._s(t.order.phone))])])])]),a("hr"),a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-12 col-md-6 order-detail-section delivery-detail"},[a("h5",[t._v("送貨資訊")]),a("div",{staticClass:"row"},[a("span",{staticClass:"col-6 col-md-4"},[t._v("收件人名稱:")]),a("span",{staticClass:"col-6 col-md-8"},[t._v(t._s(t.shipping.name))])]),a("div",{staticClass:"row"},[a("span",{staticClass:"col-6 col-md-4"},[t._v("收件人電話號碼:")]),a("span",{staticClass:"col-6 col-md-8"},[t._v(t._s(t.shipping.phone))])]),a("div",{staticClass:"row"},[a("span",{staticClass:"col-6 col-md-4"},[t._v("送貨方式:")]),"住家宅配"===t.shipping.shipping_method?a("span",{staticClass:"col-6 col-md-8"},[t._v("住家宅配")]):"其他"===t.shipping.shipping_method?a("span",{staticClass:"col-6 col-md-8"},[t._v("其他")]):t._e()]),a("div",{staticClass:"row"},[a("span",{staticClass:"col-6 col-md-4"},[t._v("送貨狀態:")]),"0"===t.shipping.shipping_status?a("span",{staticClass:"col-6 col-md-8"},[t._v("尚未配送")]):"1"===t.shipping.shipping_status?a("span",{staticClass:"col-6 col-md-8"},[t._v("配送中")]):"2"===t.shipping.shipping_status?a("span",{staticClass:"col-6 col-md-8"},[t._v("已送達")]):t._e()]),a("div",{staticClass:"row"},[a("span",{staticClass:"col-6 col-md-4"},[t._v("地址:")]),a("span",{staticClass:"col-6 col-md-8"},[t._v(t._s(t.shipping.address))])])]),a("div",{staticClass:"col-12 hidden-Except-Mobile"},[a("hr")]),a("div",{staticClass:"col-12 col-md-6 order-detail-section"},[a("h5",[t._v("付款資訊")]),a("div",{staticClass:"row"},[a("span",{staticClass:"col-6 col-md-4"},[t._v("付款金額:")]),a("span",{staticClass:"col-6 col-md-8"},[t._v("NT "+t._s(t._f("currency")(t.checkoutPrice)))])]),a("div",{staticClass:"row"},[a("span",{staticClass:"col-6 col-md-4"},[t._v("付款方式:")]),"0"===t.payment_status?a("span",{staticClass:"col-6 col-md-8"},[t._v("尚未付款")]):"1"===t.payment_status?a("span",{staticClass:"col-6 col-md-8"},[(t.payment_method="CREDIT")?a("span",[t._v("信用卡一次付清")]):(t.payment_method="VACC")?a("span",[t._v("ATM轉帳")]):(t.payment_method="CVS")?a("span",[t._v("超商代碼繳費")]):t._e()]):t._e()]),a("div",{staticClass:"row"},[a("span",{staticClass:"col-6 col-md-4"},[t._v("付款狀態:")]),"0"===t.payment_status?a("span",{staticClass:"col-6 col-md-8"},[t._v("尚未付款")]):"1"===t.payment_status?a("span",{staticClass:"col-6 col-md-8 text-danger font-weight-bold"},[t._v("已付款")]):"2"===t.payment_status?a("span",{staticClass:"col-6 col-md-8 text-danger font-weight-bold"},[t._v("信用卡驗證失敗，請重新付款")]):t._e()]),a("div",{staticClass:"row"},[a("span",{staticClass:"col-6 col-md-4"},[t._v("付款方式簡介:")]),"0"===t.payment_status?a("span",{staticClass:"col-6 col-md-8"},[t._v("無")]):"1"===t.payment_status?a("span",{staticClass:"col-6 col-md-8"},[(t.payment_method="CREDIT")?a("span",[t._v("信用卡一次付清")]):(t.payment_method="VACC")?a("span",[t._v("ATM轉帳")]):(t.payment_method="CVS")?a("span",[t._v("超商代碼繳費")]):t._e()]):t._e()])])])])]),a("div",{staticClass:"row mt-3"},["0"===t.payment_status||"2"===t.payment_status?a("div",{staticClass:"col-12 col-md-12"},[a("router-link",{staticClass:"w-100 btn btn-success",attrs:{to:"/payment"}},[t._v("付款去")])],1):"1"===t.payment_status?a("div",{staticClass:"col-12 col-md-12"},[a("router-link",{staticClass:"w-100 btn btn-info",attrs:{to:"/products"}},[t._v("繼續購物")])],1):t._e()])])])])],1)},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row justify-content-center mt-3"},[a("div",{staticClass:"col-12 col-md-8"},[a("div",{staticClass:"row step"},[a("div",{staticClass:"col-4 text-center step-point-line"},[a("span",{staticClass:"step-by-step border bg-secondary rounded-pill text-dark d-inline-block"},[t._v("Step 1")]),a("p",{staticClass:"step-text text-dark"},[t._v("購物車")])]),a("div",{staticClass:"col-4 text-center step-point-line"},[a("span",{staticClass:"step-by-step bg-secondary rounded-pill text-dark d-inline-block"},[t._v("Step 2")]),a("p",{staticClass:"step-text text-dark"},[t._v("填寫資料")])]),a("div",{staticClass:"col-4 text-center"},[a("span",{staticClass:"step-by-step border bg-dark rounded-pill text-light d-inline-block"},[t._v("Step 3")]),a("p",{staticClass:"step-text text-dark"},[t._v("訂單確認與與付款")])])])])])}],i=(a("96cf"),a("3b8d")),o=a("9b2a"),n=a("ab31"),r=a("2fa3"),l={getDiscount:function(){return r["apiHelper"].get("/discount")}},d=a("2375"),p=a("2708"),u={mixins:[p["c"],p["a"],p["d"]],components:{Spinner:d["a"]},data:function(){return{order:{},orderId:0,order_status:null,orderItems:[],checkoutPrice:0,shipping_fee:0,coupon_discount_fee:0,total_amount:0,payment:[],payment_status:null,payment_method:null,shipping:[],status:!1,isProcessing:!1,couponData:{},isLoading:!1,showCoupon:!1,discountData:{},showDiscount:!1}},created:function(){this.fetchOrder()},methods:{fetchOrder:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var s,a,e,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=this,t.prev=1,s.isLoading=!0,t.next=5,o["a"].getOrder();case 5:if(a=t.sent,e=a.data,c=a.statusText,"OK"===c){t.next=10;break}throw new Error(c);case 10:s.order=e.order,s.orderId=e.order.id,s.order_status=e.order.order_status,s.orderItems=e.order.items,s.orderItems.map(function(t){return t.id*t.id}).reduce(function(t,s){return t+s}),s.checkoutPrice=e.order.checkoutPrice,s.shipping_fee=e.order.shipping_fee,s.coupon_discount_fee=e.order.discount_fee,s.total_amount=e.order.total_amount,s.payment=e.payment,s.payment_status=e.payment.payment_status,s.payment_method=e.payment.payment_method,s.shipping=e.shipping,e.order.DiscountId?s.fetchDiscount():s.fetchCoupon(),s.$store.commit("setNavbarCartItemNumber",0),s.isLoading=!1,t.next=32;break;case 28:t.prev=28,t.t0=t["catch"](1),s.isLoading=!1,this.orderItems.length>1&&r["Toast"].fire({type:"error",title:"無法取得訂單資料，請稍後再試"});case 32:case"end":return t.stop()}},t,this,[[1,28]])}));function s(){return t.apply(this,arguments)}return s}(),fetchCoupon:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var s,a,e,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=this,t.prev=1,s.isLoading=!0,t.next=5,n["a"].getCoupon();case 5:if(a=t.sent,e=a.data,c=a.statusText,"error"!==e.status){t.next=11;break}return s.showCoupon=!1,t.abrupt("return");case 11:if("OK"===c){t.next=14;break}throw s.showCoupon=!1,new Error(c);case 14:s.couponData=e.couponData,s.showCoupon=!0,s.isLoading=!1,t.next=24;break;case 19:t.prev=19,t.t0=t["catch"](1),s.showCoupon=!1,s.isLoading=!1,r["Toast"].fire({type:"error",title:"無法取得優惠券資料，請稍後再試"});case 24:case"end":return t.stop()}},t,this,[[1,19]])}));function s(){return t.apply(this,arguments)}return s}(),fetchDiscount:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var s,a,e,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=this,t.prev=1,s.isLoading=!0,s.showCoupon=!1,t.next=6,l.getDiscount();case 6:if(a=t.sent,e=a.data,c=a.statusText,"error"!==e.status){t.next=12;break}return s.showDiscount=!1,t.abrupt("return");case 12:if("OK"===c){t.next=15;break}throw s.showDiscount=!1,new Error(c);case 15:s.discountData=e.discountData,s.showDiscount=!0,s.isLoading=!1,t.next=25;break;case 20:t.prev=20,t.t0=t["catch"](1),s.showDiscount=!1,s.isLoading=!1,r["Toast"].fire({type:"error",title:"無法取得優惠券資料，請稍後再試"});case 25:case"end":return t.stop()}},t,this,[[1,20]])}));function s(){return t.apply(this,arguments)}return s}(),collapseStatusChange:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.status=!this.status;case 1:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}()}},_=u,m=(a("69b2"),a("2877")),v=Object(m["a"])(_,e,c,!1,null,null,null);s["default"]=v.exports}}]);
//# sourceMappingURL=chunk-3c947d60.ea117ec6.js.map