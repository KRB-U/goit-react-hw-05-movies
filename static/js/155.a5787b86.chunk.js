"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[155],{1866:function(n,t,e){e.d(t,{t:function(){return c}});var r,a=e(168),o=e(5867).ZP.button(r||(r=(0,a.Z)(["\n  margin: 0 auto;\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #555555;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n\n  cursor: pointer;\n\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  max-width: 180px;\n  height: 40px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: orange;\n  }\n"]))),u=e(184),c=function(n){var t=n.handleLoadMore;return(0,u.jsx)(o,{onClick:t,type:"button",children:"Load More"})}},3174:function(n,t,e){e.d(t,{Z:function(){return h}});var r,a,o,u,c=e(168),i=e(5867),s=e(1087),p=i.ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n"]))),l=i.ZP.ul(a||(a=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 28px;\n  column-gap: 16px;\n  width: 1314px;\n  margin: 0 auto;\n  margin-top: 25px;\n"]))),f=i.ZP.img(o||(o=(0,c.Z)(["\n  display: block;\n  width: 250px;\n"]))),d=(0,i.ZP)(s.rU)(u||(u=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 8px;\n\n  padding: 12px;\n  width: 250px;\n  height: 406px;\n  border-radius: 8px;\n  border: solid 1px orange;\n\n  text-decoration: none;\n  color: black;\n\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);\n  }\n"]))),x=e(7689),g=e(184);function h(n){var t=n.trendMovies,e=(0,x.TH)();return(0,g.jsx)(p,{children:(0,g.jsx)(l,{children:t&&t.map((function(n){var t=n.id,r=n.title,a=n.original_title,o=n.original_name,u=n.name,c=n.poster_path,i=r||a||u||o;return(0,g.jsx)("li",{children:(0,g.jsxs)(d,{to:"/Movie/".concat(t),state:{from:e},children:[(0,g.jsx)(f,{src:c?"https://image.tmdb.org/t/p/w200".concat(c):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:i}),i]},t)},t)}))})})}},155:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r=e(3433),a=e(5861),o=e(9439),u=e(7757),c=e.n(u),i=e(3174),s=e(2591),p=e(2791),l=e(184),f=function(n){var t=n.querySearchMovies;return(0,l.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.target.elements.queryValueSearch.value.toLowerCase();t(e)},children:[(0,l.jsx)("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u0448\u0443\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0442",name:"queryValueSearch",style:{marginRight:"10px"}}),(0,l.jsx)("button",{type:"submit",children:"Search"})]})},d=e(1866),x=e(1087);function g(){var n,t=(0,x.lr)(),e=(0,o.Z)(t,2),u=e[0],g=e[1],h=null!==(n=u.get("query"))&&void 0!==n?n:"",v=(0,p.useState)([]),m=(0,o.Z)(v,2),b=m[0],w=m[1],Z=(0,p.useState)(1),y=(0,o.Z)(Z,2),k=y[0],j=y[1];return(0,p.useEffect)((function(){if(h){var n=function(){var n=(0,a.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.z1)(k,h);case 3:t=n.sent,e=t.results,w((function(n){return 1===k?(0,r.Z)(e):[].concat((0,r.Z)(n),(0,r.Z)(e))})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}}),[h,k]),(0,l.jsxs)("div",{style:{margin:"0 auto",textAlign:"center"},children:[(0,l.jsx)(f,{querySearchMovies:function(n){u.set("query",n),g(u)}}),(0,l.jsx)(i.Z,{trendMovies:b}),0!==b.length&&(0,l.jsx)(d.t,{onClick:function(){j((function(n){return n+1}))}})]})}},2591:function(n,t,e){e.d(t,{Hc:function(){return d},Hg:function(){return p},Ql:function(){return f},TO:function(){return x},TP:function(){return i},tx:function(){return s},z1:function(){return l},zv:function(){return c}});var r=e(5861),a=e(7757),o=e.n(a),u=e(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:"1313eb7d87ffc79c96ba5fefca3b8f25"};var c=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?language=en-U"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(){var t,e,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e=a.length>1?a[1]:void 0,n.next=4,u.Z.get("movie/".concat(e,"/reviews?language=en-US&page=").concat(t));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/all/day?language=en-US&page=".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(){var t,e,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e=a.length>1?a[1]:void 0,n.next=4,u.Z.get("search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=").concat(t));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(){var t,e,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e=a.length>1&&void 0!==a[1]?a[1]:14,n.next=4,u.Z.get("discover/movie?with_genres=".concat(e,"&page=").concat(t));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(){var t,e,r=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:2144,n.next=3,u.Z.get("person/".concat(t,"?language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("person/".concat(t,"/tv_credits?language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=155.a5787b86.chunk.js.map