"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[7],{174:function(n,e,t){t.d(e,{Z:function(){return h}});var r,a,u,c,i=t(168),o=t(867),s=t(87),p=o.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n"]))),l=o.ZP.ul(a||(a=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 28px;\n  column-gap: 16px;\n  width: 1314px;\n  margin: 0 auto;\n  margin-top: 25px;\n"]))),f=o.ZP.img(u||(u=(0,i.Z)(["\n  display: block;\n  width: 250px;\n"]))),d=(0,o.ZP)(s.rU)(c||(c=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 8px;\n\n  padding: 12px;\n  width: 250px;\n  height: 406px;\n  border-radius: 8px;\n  border: solid 1px orange;\n\n  text-decoration: none;\n  color: black;\n\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);\n  }\n"]))),v=t(689),g=t(184);function h(n){var e=n.trendMovies,t=(0,v.TH)();return(0,g.jsx)(p,{children:(0,g.jsx)(l,{children:e&&e.map((function(n){var e=n.id,r=n.title,a=n.original_title,u=n.original_name,c=n.name,i=n.poster_path,o=r||a||c||u;return(0,g.jsx)("li",{children:(0,g.jsxs)(d,{to:"/Movie/".concat(e),state:{from:t},children:[(0,g.jsx)(f,{src:i?"https://image.tmdb.org/t/p/w200".concat(i):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:o}),o]},e)},e)}))})})}},7:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var r=t(861),a=t(439),u=t(757),c=t.n(u),i=t(174),o=t(591),s=t(791),p=t(87),l=t(184);function f(){var n,e=(0,p.lr)(),t=(0,a.Z)(e,2),u=t[0],f=t[1],d=null!==(n=u.get("query"))&&void 0!==n?n:"",v=(0,s.useState)([]),g=(0,a.Z)(v,2),h=g[0],x=g[1];return(0,s.useEffect)((function(){if(d){var n=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.z1)(1,d);case 3:e=n.sent,x(e.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}}),[d]),(0,l.jsxs)("div",{style:{margin:"0 auto",textAlign:"center"},children:[(0,l.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.target.elements.queryValueSearch.value;u.set("query",e),f(u)},children:[(0,l.jsx)("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u0448\u0443\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0442",name:"queryValueSearch",style:{marginRight:"10px"}}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),(0,l.jsx)(i.Z,{trendMovies:h})]})}},591:function(n,e,t){t.d(e,{Hg:function(){return p},Ql:function(){return f},TP:function(){return o},tx:function(){return s},z1:function(){return l},zv:function(){return i}});var r=t(861),a=t(757),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"1313eb7d87ffc79c96ba5fefca3b8f25"};var i=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?language=en-U"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,c.Z.get("movie/".concat(e,"/reviews?language=en-US&page=").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?language=en-US");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(){var e,t,r,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,t=a.length>1?a[1]:void 0,n.next=4,c.Z.get("search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=").concat(e));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(){var e,t,r,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:14,t=a.length>1&&void 0!==a[1]?a[1]:1,n.next=4,c.Z.get("discover/movie?with_genres=".concat(e,"&page=").concat(t));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=7.3a77922c.chunk.js.map