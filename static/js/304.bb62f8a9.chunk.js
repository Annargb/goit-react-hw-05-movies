"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{1304:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(5861),a=r(9439),u=r(7757),c=r.n(u),s=r(2791),i=r(7689),o=r(5218),p=r(4390),f=r(184),v=function(e){var t=e.reviews;return(0,f.jsx)("ul",{children:t.map((function(e){var t=e.author,r=e.content;return(0,f.jsxs)("li",{children:[(0,f.jsx)("h4",{children:t}),(0,f.jsx)("p",{children:r})]},t)}))})},h=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],h=(0,s.useState)(!1),d=(0,a.Z)(h,2),l=d[0],w=d[1],x=(0,s.useState)(!1),m=(0,a.Z)(x,2),k=m[0],Z=m[1],y=(0,i.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),Z(!1),e.next=5,(0,p.T6)(y);case 5:t=e.sent,u(t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),Z(!0),o.ZP.error("Oops, Something went wrong! Try reloading the page!",{duration:3500,position:"top-right"});case 13:return e.prev=13,w(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[y]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Reviews:"}),r.length>0&&!l&&!k&&(0,f.jsx)(v,{reviews:r}),!r.length&&(0,f.jsx)("p",{children:"We don't have any reviews for this movie."}),(0,f.jsx)(o.x7,{})]})}},4390:function(e,t,r){r.d(t,{Fi:function(){return v},Mc:function(){return o},T6:function(){return p},uV:function(){return f},wr:function(){return i}});var n=r(5861),a=r(7757),u=r.n(a),c=r(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="58dce637b823f2c00548f4a3a78afc72",i=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t,"\n"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=304.bb62f8a9.chunk.js.map