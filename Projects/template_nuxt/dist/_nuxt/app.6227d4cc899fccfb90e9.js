webpackJsonp([4],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},"4Atj":function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="4Atj"},"6jam":function(t,e,n){var r=n("cHXX");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("rjj0").default)("c726d000",r,!1,{sourceMap:!1})},CCuW:function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},DHvs:function(t,e,n){"use strict";var r=n("Jfqf");n.d(e,"a",function(){return r.a})},F88d:function(t,e,n){"use strict";var r=n("QgnT"),o=n("P+aQ"),a=!1;var i=function(t){a||n("JpDn")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-loading.vue",e.a=s.exports},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,a=e.data,i=e.props;a.nuxtChild=!0;for(var s=n,u=n.$nuxt.nuxt.transitions,c=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;a.nuxtChildDepth=f;var d=u[f]||c,l={};r.forEach(function(t){void 0!==d[t]&&(l[t]=d[t])});var p={};o.forEach(function(t){"function"==typeof d[t]&&(p[t]=d[t].bind(s))});var h=p.beforeEnter;p.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),h)return h.call(s,t)};var m=[t("router-view",a)];return void 0!==i.keepAlive&&(m=[t("keep-alive",m)]),t("transition",{props:l,on:p},m)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),o=n("HBB+"),a=n("ct3O"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:o.a,NuxtError:a.a}}},Iw3v:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"GET_TODO",function(){return r}),n.d(e,"DONE_TODOS_COUNT",function(){return o});var r="GET_TODO",o="DONE_TODOS_COUNT"},J2Ti:function(t,e,n){"use strict";n.d(e,"a",function(){return w});var r=n("woOf"),o=n.n(r),a=n("BO1k"),i=n.n(a),s=n("/5sW"),u=n("NYxO");s.default.use(u.default);var c=n("QA5y"),f=c.keys(),d={},l=void 0;if(f.forEach(function(t){-1!==t.indexOf("./index.")&&(l=t)}),l&&(d=b(l)),"function"!=typeof d){d.modules||(d.modules={});var p=!0,h=!1,m=void 0;try{for(var x,v=i()(f);!(p=(x=v.next()).done);p=!0){var y=x.value,g=y.replace(/^\.\//,"").replace(/\.(js)$/,"");if("index"!==g){var _=g.split(/\//);(t=C(d,_))[g=_.pop()]=b(y),t[g].namespaced=!0}}}catch(t){h=!0,m=t}finally{try{!p&&v.return&&v.return()}finally{if(h)throw m}}}var w=d instanceof Function?d:function(){return new u.default.Store(o()({strict:!1},d,{state:d.state instanceof Function?d.state():{}}))};function b(t){var e=c(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function C(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},C(t.modules[n],e)}},Jfqf:function(t,e,n){"use strict";e.a=function(t,e){try{return JSON.parse(e.getItem("state"))}catch(t){return}}},JpDn:function(t,e,n){var r=n("vkrm");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("rjj0").default)("26f4711a",r,!1,{sourceMap:!1})},MOAa:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("bOdI"),o=n.n(r),a=n("udBR"),i={filter:JSON.parse(localStorage.getItem("filter"))||"All"},s=o()({},a.SET_FILTER,function(t,e){t.filter=e});e.default={state:i,mutations:s}},"Og+K":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o,a=n("bOdI"),i=n.n(a),s=n("Gu7T"),u=n.n(s),c=n("udBR"),f=n("Iw3v"),d={todos:JSON.parse(localStorage.getItem("todos"))||[]},l=(r={},i()(r,c.PUSH_TODO,function(t,e){var n=e.todo;t.todos=[].concat(u()(t.todos),[n])}),i()(r,c.SET_TODOS,function(t,e){var n=e.todos;t.todos=[].concat(u()(n))}),i()(r,c.REMOVE_TODO,function(t,e){t.todos=[].concat(u()(t.todos.filter(function(t){return t.id!==e})))}),i()(r,c.EDIT_TODO,function(t,e){var n=e.id,r=e.text;t.todos.find(function(t){return t.id===n}).text=r}),i()(r,c.FILTER_TODO,function(t,e){switch(e){case"All":t.todos=t.todos.map(function(t){return t.isVisible=!0,t});break;case"Completed":t.todos=t.todos.map(function(t){return t.isVisible=t.isChecked,t});break;case"Uncompleted":t.todos=t.todos.map(function(t){return t.isVisible=!t.isChecked,t});break;default:t.todos=t.todos.map(function(t){return t.isVisible=!0,t})}}),i()(r,c.REMOVE_COMPLETED,function(t){t.todos=t.todos.filter(function(t){return!t.isChecked})}),i()(r,c.COMPLETE_ALL,function(t,e){t.todos=t.todos.map(function(t){return t.isChecked=!e,t})}),i()(r,c.CHECK_TODO,function(t,e){var n=t.todos.find(function(t){return t.id===e});n.isChecked=!n.isChecked}),r),p=(o={},i()(o,f.GET_TODO,function(t){return function(e){return t.todos.find(function(t){return t.id===e})}}),i()(o,f.DONE_TODOS_COUNT,function(t){return t.todos.filter(function(t){return t.isChecked}).length}),o);e.default={state:d,getters:p,mutations:l}},"P+aQ":function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o},QA5y:function(t,e,n){var r={"./index.js":"vdRI","./modules/fiters.js":"MOAa","./modules/index.js":"r0Yi","./modules/todos.js":"Og+K","./types/getters.js":"Iw3v","./types/mutations.js":"udBR"};function o(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="QA5y"},QgnT:function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},QhKw:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"__nuxt-error-page"},[e("div",{staticClass:"error"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[e("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),e("div",{staticClass:"title"},[this._v(this._s(this.message))]),404===this.statusCode?e("p",{staticClass:"description"},[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[this._v("Back to the home page")])],1):this._e(),this._m(0)])])};r._withStripped=!0;var o={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}]};e.a=o},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("pFYg"),o=n.n(r),a=n("//Fk"),i=n.n(a),s=n("Xxa5"),u=n.n(s),c=n("mvHQ"),f=n.n(c),d=n("exGp"),l=n.n(d),p=n("fZjL"),h=n.n(p),m=n("woOf"),x=n.n(m),v=n("/5sW"),y=n("unZF"),g=n("qcny"),_=n("YLfZ"),w=function(){var t=l()(u.a.mark(function t(e,n,r){var o,a,i=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!E.nuxt.err||n.path!==e.path,this._queryChanged=f()(e.query)!==f()(n.query),this._diffQuery=this._queryChanged?Object(_.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(_.k)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}));return function(e,n,r){return t.apply(this,arguments)}}(),b=function(){var t=l()(u.a.mark(function t(e,n,r){var o,a,s,c,f,d,l,p,h=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return o=!1,a=function(t){if(n.path===t.path&&h.$loading.finish&&h.$loading.finish(),n.path!==t.path&&h.$loading.pause&&h.$loading.pause(),!o){o=!0;var e=[];O=Object(_.e)(n,e).map(function(t,r){return Object(_.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(_.m)(E,{route:e,from:n,next:a.bind(this)});case 6:if(this._dateLastError=E.nuxt.dateErr,this._hadError=!!E.nuxt.err,s=[],(c=Object(_.e)(e,s)).length){t.next=24;break}return t.next=13,M.call(this,c,E.context);case 13:if(!o){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof g.a.layout?g.a.layout(E.context):g.a.layout);case 17:return f=t.sent,t.next=20,M.call(this,c,E.context,f);case 20:if(!o){t.next=22;break}return t.abrupt("return");case 22:return E.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(R(c,e,n)),t.prev=26,t.next=29,M.call(this,c,E.context);case 29:if(!o){t.next=31;break}return t.abrupt("return");case 31:if(!E.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(d=c[0].options.layout)&&(d=d(E.context)),t.next=37,this.loadLayout(d);case 37:return d=t.sent,t.next=40,M.call(this,c,E.context,d);case 40:if(!o){t.next=42;break}return t.abrupt("return");case 42:if(!E.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(l=!0,c.forEach(function(t){l&&"function"==typeof t.options.validate&&(l=t.options.validate({params:e.params||{},query:e.query||{},store:T}))}),l){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,i.a.all(c.map(function(t,n){if(t._path=Object(_.b)(e.matched[s[n]].path)(e.params),t._dataRefresh=!1,h._pathChanged&&t._path!==O[n])t._dataRefresh=!0;else if(!h._pathChanged&&h._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return h._diffQuery[t]}))}if(!h._hadError&&h._isMounted&&!t._dataRefresh)return i.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,u=!!t.options.fetch,c=a&&u?30:45;if(a){var f=Object(_.j)(t.options.asyncData,E.context).then(function(e){Object(_.a)(t,e),h.$loading.increase&&h.$loading.increase(c)});o.push(f)}if(u){var d=t.options.fetch(E.context);d&&(d instanceof i.a||"function"==typeof d.then)||(d=i.a.resolve(d)),d.then(function(t){h.$loading.increase&&h.$loading.increase(c)}),o.push(d)}return i.a.all(o)}));case 51:o||(this.$loading.finish&&this.$loading.finish(),O=c.map(function(t,n){return Object(_.b)(e.matched[s[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),O=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(p=g.a.layout)&&(p=p(E.context)),t.next=63,this.loadLayout(p);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])}));return function(e,n,r){return t.apply(this,arguments)}}(),C=function(){var t=l()(u.a.mark(function t(e){var n,r,o;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return E=e.app,k=e.router,T=e.store,t.next=5,i.a.all(D(k));case 5:if(n=t.sent,r=new v.default(E),o=function(){r.$mount("#__nuxt"),v.default.nextTick(function(){F(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(R(n,k.currentRoute)),O=k.currentRoute.matched.map(function(t){return Object(_.b)(t.path)(k.currentRoute.params)})),r.$loading={},$.error&&r.error($.error),k.beforeEach(w.bind(r)),k.beforeEach(b.bind(r)),k.afterEach(A),k.afterEach(I.bind(r)),!$.serverRendered){t.next=19;break}return o(),t.abrupt("return");case 19:b.call(r,k.currentRoute,k.currentRoute,function(t){if(!t)return A(k.currentRoute,k.currentRoute),L.call(r,k.currentRoute),void o();k.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 20:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),O=[],E=void 0,k=void 0,T=void 0,$=window.__NUXT__||{},j=v.default.config.errorHandler;function R(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=x()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);h()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function S(t,e){return $.serverRendered&&e&&Object(_.a)(t,e),t._Ctor=t,t}function D(t){var e=this,n=Object(_.d)(t.options.base,t.options.mode);return Object(_.c)(t.match(n),function(){var t=l()(u.a.mark(function t(n,r,o,a,i){var s;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return s=S(Object(_.l)(n),$.data?$.data[i]:null),o.components[a]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,e)}));return function(e,n,r,o,a){return t.apply(this,arguments)}}())}function M(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof y.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),y.a[t])}),!a)return Object(_.i)(o,e)}function A(t,e){Object(_.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":o()(t))||t.options||((t=v.default.extend(t))._Ctor=t,n.components[r]=t),t})}function L(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?g.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(E.context)),this.setLayout(e)}function I(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||v.default.nextTick(function(){Object(_.f)(t,[]).forEach(function(t,e){if(t&&t.constructor._dataRefresh&&O[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)v.default.set(t.$data,r,n[r])}}),L.call(n,t)})}function F(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),k.afterEach(function(e,n){v.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}v.default.config.errorHandler=function(t,e,n){var r={statusCode:t.statusCode||t.name||"Whoops!",message:t.message||t.toString()};if(e&&e.$root&&e.$root.$nuxt&&e.$root.$nuxt.error&&"render function"!==n&&e.$root.$nuxt.error(r),"function"==typeof j)return j.apply(void 0,arguments);console.error(t.message||r.message)},Object(g.b)().then(C).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||y;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),x()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=g,e.e=_,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=w,e.k=b,n.d(e,"h",function(){return C}),n.d(e,"m",function(){return O}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return l.a.resolve();return E(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=E,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",i=n||{},s=r||{},u=s.pretty?T:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var d,l=i[f.name];if(null==l){if(f.optional){f.partial&&(a+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+o()(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(d=u(l[p]),!e[c].test(d))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+o()(d)+"`");a+=(0===p?f.prefix:f.delimiter)+d}}else{if(d=f.asterisk?$(l):u(l),!e[c].test(d))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+d+'"');a+=f.prefix+d}}else a+=f}return a}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=k.exec(t));){var u=n[0],c=n[1],f=n.index;if(i+=t.slice(a,f),a=f+u.length,c)i+=c[1];else{var d=t[a],l=n[2],p=n[3],h=n[4],m=n[5],x=n[6],v=n[7];i&&(r.push(i),i="");var y=null!=l&&null!=d&&d!==l,g="+"===x||"*"===x,_="?"===x||"*"===x,w=n[2]||s,b=h||m;r.push({name:p||o++,prefix:l||"",delimiter:w,optional:_,repeat:g,partial:y,asterisk:!!v,pattern:b?R(b):v?".*":"[^"+j(w)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=x()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n};var r=n("mvHQ"),o=n.n(r),a=n("pFYg"),i=n.n(a),s=n("Xxa5"),u=n.n(s),c=n("exGp"),f=n.n(c),d=n("//Fk"),l=n.n(d),p=n("fZjL"),h=n.n(p),m=n("Dd8w"),x=n.n(m),v=n("/5sW"),y=function(){return{}};function g(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=v.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function _(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function w(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function b(t){var e=this;return l.a.all(w(t,function(){var t=f()(u.a.mark(function t(n,r,o,a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return t.abrupt("return",o.components[a]=g(n));case 5:case"end":return t.stop()}},t,e)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var C=function(){var t=f()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:return t.abrupt("return",x()({},e,{meta:_(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=f()(u.a.mark(function t(e,n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=14;break}t.t0=!0,t.t1=e,t.t2=e.store,t.t3=n.payload,t.t4=n.error,t.t5={},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,store:t.t2,payload:t.t3,error:t.t4,base:"/",env:t.t5},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var o=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=n||{},o=void 0===(n=t)?"undefined":i()(n),t=302),"object"===o&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=S(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 14:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=22;break}return t.next=21,C(n.route);case 21:e.context.route=t.sent;case 22:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=28;break}return t.next=27,C(n.from);case 27:e.context.from=t.sent;case 28:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}();function E(t,e){var n=void 0;return(n=2===t.length?new l.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof l.a||"function"==typeof n.then)||(n=l.a.resolve(n)),n}var k=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function T(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function $(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function j(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function R(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function S(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/"),u=void 0;return 2===(a=s.split("#")).length&&(s=a[0],u=a[1]),i+=s?"/"+s:"",e&&"{}"!==o()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=u?"#"+u:""}},YroE:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".__nuxt-error-page{padding:16px;padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:24px;font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},cHXX:function(t,e,n){var r=n("kxFB");(t.exports=n("FZ+f")(!1)).push([t.i,"@font-face{font-family:Material Icons;font-style:normal;font-weight:400;src:url("+r(n("mJWr"))+');src:local("Material Icons"),local("MaterialIcons-Regular"),url('+r(n("I/SG"))+') format("woff2"),url('+r(n("QaRH"))+') format("woff"),url('+r(n("wCT+"))+') format("truetype")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:"liga";font-feature-settings:"liga"}',""])},ct3O:function(t,e,n){"use strict";var r=n("CCuW"),o=n("QhKw"),a=!1;var i=function(t){a||n("ffB3")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-error.vue",e.a=s.exports},ffB3:function(t,e,n){var r=n("YroE");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("rjj0").default)("95cc7836",r,!1,{sourceMap:!1})},mtxM:function(t,e,n){"use strict";e.a=function(){return new i.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:c,routes:[{path:"/todo/:id?",component:s,name:"todo-id"},{path:"/",component:u,name:"index"}],fallback:!1})};var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("/ocq");a.default.use(i.default);var s=function(){return n.e(1).then(n.bind(null,"5YHd")).then(function(t){return t.default||t})},u=function(){return n.e(0).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var c=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new o.a(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})}},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return T});var r=n("Xxa5"),o=n.n(r),a=n("//Fk"),i=(n.n(a),n("C4MV")),s=n.n(i),u=n("woOf"),c=n.n(u),f=n("Dd8w"),d=n.n(f),l=n("exGp"),p=n.n(l),h=n("MU8w"),m=(n.n(h),n("/5sW")),x=n("p3jY"),v=n.n(x),y=n("mtxM"),g=n("0F0d"),_=n("HBB+"),w=n("WRRc"),b=n("ct3O"),C=n("Hot+"),O=n("yTq1"),E=n("YLfZ"),k=n("J2Ti");n.d(e,"a",function(){return b.a});var T=function(){var t=p()(o.a.mark(function t(e){var n,r,a,i,u,f;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(y.a)(e),(r=Object(k.a)(e)).$router=n,a=d()({router:n,store:r,nuxt:{defaultTransition:$,transitions:[$],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},$,{name:t}):c()({},$,t):$}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,a.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},O.a),r.app=a,i=e?e.next:function(t){return a.router.push(t)},u=void 0,e?u=n.resolve(e.url).route:(f=Object(E.d)(n.options.base),u=n.resolve(f).route),t.next=10,Object(E.m)(a,{route:u,next:i,error:a.nuxt.error.bind(a),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 10:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");a[t="$"+t]=e,r[t]=a[t];var n="__nuxt_"+t+"_installed__";m.default[n]||(m.default[n]=!0,m.default.use(function(){m.default.prototype.hasOwnProperty(t)||s()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),t.next=15;break;case 15:return t.abrupt("return",{app:a,router:n,store:r});case 16:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();m.default.component(g.a.name,g.a),m.default.component(_.a.name,_.a),m.default.component(w.a.name,w.a),m.default.component(C.a.name,C.a),m.default.use(v.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var $={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},r0Yi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Og+K");n.d(e,"todos",function(){return r.default});var o=n("MOAa");n.d(e,"filters",function(){return o.default})},udBR:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"PUSH_TODO",function(){return r}),n.d(e,"SET_TODOS",function(){return o}),n.d(e,"REMOVE_TODO",function(){return a}),n.d(e,"EDIT_TODO",function(){return i}),n.d(e,"SET_FILTER",function(){return s}),n.d(e,"FILTER_TODO",function(){return u}),n.d(e,"REMOVE_COMPLETED",function(){return c}),n.d(e,"COMPLETE_ALL",function(){return f}),n.d(e,"CHECK_TODO",function(){return d});var r="PUSH_TODO",o="SET_TODOS",a="REMOVE_TODO",i="EDIT_TODO",s="SET_FILTER",u="FILTER_TODO",c="REMOVE_COMPLETED",f="COMPLETE_ALL",d="CHECK_TODO"},unZF:function(t,e,n){"use strict";var r=n("BO1k"),o=n.n(r),a=n("4Atj"),i=a.keys();function s(t){var e=a(t);return e.default?e.default:e}var u={},c=!0,f=!1,d=void 0;try{for(var l,p=o()(i);!(c=(l=p.next()).done);c=!0){var h=l.value;u[h.replace(/^\.\//,"").replace(/\.(js)$/,"")]=s(h)}}catch(t){f=!0,d=t}finally{try{!c&&p.return&&p.return()}finally{if(f)throw d}}e.a=u},vdRI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("/5sW"),o=n("NYxO"),a=n("jcKD"),i=n("r0Yi"),s=n("DHvs");r.default.use(o.default),e.default=function(){return new o.default.Store({modules:i,plugins:[new a.a({storage:window.localStorage,key:"state",restoreState:s.a}).plugin]})}},vkrm:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}",""])},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("F88d"),s=n("6jam"),u=(n.n(s),{_default:function(){return n.e(2).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}}),c={};e.a={head:{title:"template_nuxt",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&c["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=c[e],this.layout},loadLayout:function(t){var e=this;t&&(u["_"+t]||c["_"+t])||(t="default");var n="_"+t;return c[n]?o.a.resolve(c[n]):u[n]().then(function(t){return c[n]=t,delete u[n],c[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}}},["T23V"]);