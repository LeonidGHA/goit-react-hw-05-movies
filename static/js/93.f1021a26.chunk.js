"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[93],{5192:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(6871),a="Button_btn__JnaVO",c=n(184),s=function(){var e=(0,r.s0)();return(0,c.jsx)("button",{className:a,type:"button",onClick:function(){e(-1,{replase:!0})},children:"\u2b98 Go back"})}},93:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(5861),a=n(885),c=n(7757),s=n.n(c),i=n(501),u=n(6871),o=n(2791),p=n(8119),l=n(5192),f="MoviesDetails_container__jrRX3",v="MoviesDetails_details__5wAK6",d="MoviesDetails_details_poster__fAWmj",h="MoviesDetails_list__Y8nyC",m="MoviesDetails_list_Link__reD+1",_="MoviesDetails_active__FElwv",x=n(184),w=function(){var e=(0,u.UO)().id,t=(0,o.useState)({}),n=(0,a.Z)(t,2),c=n[0],w=n[1];(0,o.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.TP)(e).then((function(e){w(e)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e&&t()}),[e]);var j=c.poster_path,k=c.original_title,g=c.overview,b=c.genres,y=c.release_date,Z=c.vote_average;return(0,x.jsxs)("div",{className:f,children:[(0,x.jsx)(l.Z,{}),(0,x.jsxs)("div",{className:v,children:[(0,x.jsx)("div",{className:d,children:(0,x.jsx)("img",{src:j?"https://image.tmdb.org/t/p/original/".concat(j):"https://static.vecteezy.com/system/resources/previews/003/393/235/original/error-404-with-the-cute-floppy-disk-mascot-free-vector.jpg",alt:""})}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("h2",{children:[k," (",Number.parseInt(y),")"]}),(0,x.jsxs)("p",{children:["User Score: ",(10*Z).toFixed(0)," %"]}),(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{children:g}),(0,x.jsx)("h4",{children:"Genres"}),(0,x.jsx)("p",{children:null===b||void 0===b?void 0:b.map((function(e){return e.name+" "}))})]})]}),(0,x.jsxs)("ul",{className:h,children:[(0,x.jsx)("li",{children:(0,x.jsx)(i.OL,{className:function(e){return e.isActive?"".concat(m," ").concat(_):"".concat(m)},to:"Cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(i.OL,{className:function(e){return e.isActive?"".concat(m," ").concat(_):"".concat(m)},to:"Reviews",children:"Reviews"})})]}),(0,x.jsx)(u.j3,{})]})}},8119:function(e,t,n){n.d(t,{Hg:function(){return o},TP:function(){return l},on:function(){return p},tx:function(){return v},zv:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),s=n(4569).default,i="bddc52dc503f0bc4d00f10b7a0711377",u="https://api.themoviedb.org/3",o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("".concat(u,"/trending/movie/week"),{params:{api_key:i,page:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("".concat(u,"/search/movie"),{params:{api_key:i,query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("".concat(u,"/movie/").concat(t),{params:{api_key:i}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("".concat(u,"/movie/").concat(t,"/credits"),{params:{api_key:i}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("".concat(u,"/movie/").concat(t,"/reviews"),{params:{api_key:i}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=93.f1021a26.chunk.js.map