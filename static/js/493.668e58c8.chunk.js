"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493],{174:function(n,e,t){t.d(e,{Z:function(){return h}});var r,a,c,u,i=t(168),o=t(867),s=t(87),p=o.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n"]))),f=o.ZP.ul(a||(a=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 28px;\n  column-gap: 16px;\n  width: 1314px;\n  margin: 0 auto;\n  margin-top: 25px;\n"]))),l=o.ZP.img(c||(c=(0,i.Z)(["\n  display: block;\n  width: 250px;\n"]))),d=(0,o.ZP)(s.rU)(u||(u=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 8px;\n\n  padding: 12px;\n  width: 250px;\n  height: 406px;\n  border-radius: 8px;\n  border: solid 1px orange;\n\n  text-decoration: none;\n  color: black;\n\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);\n  }\n"]))),v=t(689),g=t(184);function h(n){var e=n.trendMovies,t=(0,v.TH)();return(0,g.jsx)(p,{children:(0,g.jsx)(f,{children:e&&e.map((function(n){var e=n.id,r=n.title,a=n.original_title,c=n.original_name,u=n.name,i=n.poster_path,o=r||a||u||c;return(0,g.jsx)("li",{children:(0,g.jsxs)(d,{to:"/Movie/".concat(e),state:{from:t},children:[(0,g.jsx)(l,{src:i?"https://image.tmdb.org/t/p/w200".concat(i):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:o}),o]},e)},e)}))})})}},493:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var r=t(861),a=t(439),c=t(757),u=t.n(c),i=t(174),o=t(591),s=t(791),p=t(184);function f(){var n=(0,s.useState)([]),e=(0,a.Z)(n,2),t=e[0],c=e[1];return(0,s.useEffect)((function(){if(0===t.length){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Hg)();case 3:e=n.sent,c(e.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}}),[t]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{style:{textAlign:"center"},children:"Trending today"}),(0,p.jsx)(i.Z,{trendMovies:t})]})}},591:function(n,e,t){t.d(e,{Hg:function(){return p},Ql:function(){return l},TP:function(){return o},tx:function(){return s},z1:function(){return f},zv:function(){return i}});var r=t(861),a=t(757),c=t.n(a),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:"1313eb7d87ffc79c96ba5fefca3b8f25"};var i=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?language=en-U"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,u.Z.get("movie/".concat(e,"/reviews?language=en-US&page=").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/all/day?language=en-US");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,t=a.length>1?a[1]:void 0,n.next=4,u.Z.get("search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=").concat(e));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:14,t=a.length>1&&void 0!==a[1]?a[1]:1,n.next=4,u.Z.get("discover/movie?with_genres=".concat(e,"&page=").concat(t));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=493.668e58c8.chunk.js.map