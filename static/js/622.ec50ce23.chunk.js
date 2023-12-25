"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[622],{4622:function(n,e,r){r.r(e),r.d(e,{default:function(){return G}});var t,i,a,c,s,o,u,p,d,l=r(5861),x=r(9439),h=r(4687),f=r.n(h),v=r(2791),g=r(7689),j=r(5218),m=r(4390),Z=r(3110),b=r(168),w=r(5867),k=w.ZP.h1(t||(t=(0,b.Z)(["\n  text-align: center;\n  margin-bottom: 28px;\n  color: rgba(31, 3, 85, 0.9);\n"]))),y=w.ZP.div(i||(i=(0,b.Z)(["\n  max-width: 300px;\n"]))),_=w.ZP.div(a||(a=(0,b.Z)(["\n  display: flex;\n  gap: 44px;\n  margin-bottom: 28px;\n  padding-left: 20px;\n  padding-right: 20px;\n"]))),P=w.ZP.ul(c||(c=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 16px;\n"]))),M=r(8977),R=r(184),S=function(n){var e,r=n.description,t=r.title,i=r.vote_average,a=r.vote_count,c=r.genres,s=r.runtime,o=r.overview,u=r.release_date,p=r.poster_path,d=r.backdrop_path,l="https://image.tmdb.org/t/p/w500",x=u.slice(0,-6),h=function(n){return(0,M.Z)(Date.parse(n),"d MMMM yyyy")}(u);return(0,R.jsxs)("div",{style:{backgroundImage:"linear-gradient(to right, rgb(44, 38, 65, 0.8) calc((50vw - 170px) - 340px), rgb(47, 73, 34, 0.66) 50%, rgb(65, 25, 60, 0.9) 100%), url(".concat(l+d,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},children:[(0,R.jsxs)(k,{children:[t," (",x,")"]}),(0,R.jsxs)(_,{children:[(0,R.jsx)(y,{children:(0,R.jsx)("img",{src:p?l+p:"https://diekos.by/public/images/nophoto.jpg?v=1.0.6",alt:t})}),(0,R.jsxs)("ul",{children:[(0,R.jsxs)("li",{children:[(0,R.jsx)("p",{children:"Vote average:"}),(0,R.jsxs)("p",{children:[" ",(e=i,0===e?e:e.toFixed(1))," (",a," ",1===a?"vote":"votes",")."]})]}),(0,R.jsxs)("li",{children:[(0,R.jsx)("p",{children:"Release date:"}),(0,R.jsxs)("p",{children:[h,"."]})]}),(0,R.jsx)("li",{children:(0,R.jsxs)(P,{children:[(0,R.jsx)("p",{children:"Genres:"}),c.map((function(n){var e=n.name;return(0,R.jsx)("li",{children:(0,R.jsx)("p",{children:e})},e)}))]})}),(0,R.jsxs)("li",{children:[(0,R.jsx)("p",{children:"Duration:"}),(0,R.jsxs)("p",{children:[s," min."]})]}),(0,R.jsxs)("li",{children:[(0,R.jsx)("p",{children:"Overview:"}),(0,R.jsx)("p",{children:o})]})]})]})]})},F=r(1087),O=r(4324),C=w.ZP.h2(s||(s=(0,b.Z)(["\n  margin-bottom: 20px;\n  color: rgba(31, 3, 85, 0.9);\n"]))),T=(0,w.ZP)(F.OL)(o||(o=(0,b.Z)(["\n  &.active {\n    color: red;\n  }\n"]))),U=(0,w.ZP)(F.rU)(u||(u=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 170px;\n  padding: 12px;\n  border-radius: 25px;\n  background-color: rgba(31, 3, 85, 0.9);\n  border: none;\n  border: 1px solid #1f0355;\n"]))),V=w.ZP.p(p||(p=(0,b.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  color: #fff;\n"]))),z=(0,w.ZP)(O.VG_)(d||(d=(0,b.Z)(["\n  width: 28px;\n  height: 28px;\n  fill: #fff;\n"]))),D=function(n){var e,r,t=n.description,i=(0,g.TH)(),a=(0,v.useRef)(null!==(e=null===(r=i.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(U,{to:a.current,children:[(0,R.jsx)(z,{}),(0,R.jsx)(V,{children:"Return Back"})]}),(0,R.jsx)(S,{description:t}),(0,R.jsx)(C,{children:"Additional information"}),(0,R.jsxs)("ul",{children:[(0,R.jsx)("li",{children:(0,R.jsx)(T,{to:"cast",children:"Cast"})}),(0,R.jsx)("li",{children:(0,R.jsx)(T,{to:"reviews",children:"Reviews"})})]})]})},G=function(){var n=(0,v.useState)(null),e=(0,x.Z)(n,2),r=e[0],t=e[1],i=(0,v.useState)(!1),a=(0,x.Z)(i,2),c=a[0],s=a[1],o=(0,v.useState)(!1),u=(0,x.Z)(o,2),p=u[0],d=u[1],h=(0,g.UO)().movieId;return(0,v.useEffect)((function(){var n=function(){var n=(0,l.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s(!0),d(!1),n.next=5,(0,m.Mc)(h);case 5:e=n.sent,t(e),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),d(!0),j.ZP.error("Oops, Something went wrong! Try reloading the page!",{duration:3500,position:"top-right"});case 13:return n.prev=13,s(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,9,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[h]),(0,R.jsxs)("div",{children:[c&&!p&&(0,R.jsx)(Z.a,{}),r&&!c&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(D,{description:r}),(0,R.jsx)(v.Suspense,{fallback:(0,R.jsx)(Z.a,{}),children:(0,R.jsx)(g.j3,{})})]}),(0,R.jsx)(j.x7,{})]})}},4390:function(n,e,r){r.d(e,{Fi:function(){return l},Mc:function(){return u},T6:function(){return p},uV:function(){return d},wr:function(){return o}});var t=r(5861),i=r(4687),a=r.n(i),c=r(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="58dce637b823f2c00548f4a3a78afc72",o=function(){var n=(0,t.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(e,"\n"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=622.ec50ce23.chunk.js.map