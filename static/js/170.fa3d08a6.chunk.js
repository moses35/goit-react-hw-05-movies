"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[170],{170:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r,i,c,R,o,s=t(433),E=t(439),d=t(791),j=t(689),a=t(87),x=t(305),u=t(630),v=t(168),N=t(686),l=N.Z.div(r||(r=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  padding-top: 20px;\n  padding-left: 20px;\n"]))),f=(N.Z.nav(i||(i=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),N.Z.nav(c||(c=(0,v.Z)(["\n  margin-bottom: 20px;\n"])))),Z=N.Z.div(R||(R=(0,v.Z)(["\n  display: flex;\n  gap: 50px;\n"]))),h=N.Z.p(o||(o=(0,v.Z)(["\n  max-width: 1250px;\n"]))),H=t(169),k=t(184),w=function(){var e,n,t,r,i=(0,j.UO)().movieId,c=(0,d.useState)(""),R=(0,E.Z)(c,2),o=R[0],v=R[1],N=(0,d.useState)([]),w=(0,E.Z)(N,2),P=w[0],m=w[1],p=(0,d.useState)(""),M=(0,E.Z)(p,2),z=M[0],I=M[1],T=(0,d.useState)(""),b=(0,E.Z)(T,2),W=b[0],A=b[1],y=(0,d.useState)(""),Y=(0,E.Z)(y,2),C=Y[0],G=Y[1],L=(0,j.TH)(),g=(0,d.useRef)(!0);return(0,d.useEffect)((function(){g.current&&(0,x.Z)("https://api.themoviedb.org/3/movie/".concat(i,"?api_key=76a565cd635ec9567aa9794e25759f83")).then((function(e){v(e.poster_path),m((0,s.Z)(e.genres)),I(e.original_title),A(e.overview),G(e.vote_average),g.current=!1})).catch((function(){console.log("Not found")})).finally()}),[i]),(0,k.jsxs)(l,{children:[(0,k.jsx)(f,{children:(0,k.jsx)(a.OL,{to:null!==(e=null===(n=L.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",children:(0,k.jsx)("button",{children:"Back"})})}),(0,k.jsxs)(Z,{children:[(0,k.jsxs)("div",{children:[o&&(0,k.jsx)(H.E,{src:"https://image.tmdb.org/t/p/w500"+o,alt:z}),!o&&(0,k.jsx)(H.E,{src:u,alt:z})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("h1",{children:z||"Not found"}),(0,k.jsx)("p",{children:C||"Not found"}),(0,k.jsx)("h2",{children:"Overview "}),(0,k.jsx)(h,{children:W||"Not found"}),(0,k.jsx)("h2",{children:"Genres"}),(0,k.jsx)("p",{children:P.map((function(e){return(0,k.jsx)("span",{children:e.name+" "||0},e.name)}))})]})]}),(0,k.jsx)("p",{children:"Additional information"}),(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{children:(0,k.jsx)(a.OL,{to:"cast",state:{from:null===(t=L.state)||void 0===t?void 0:t.from},children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(a.OL,{to:"reviews",state:{from:null===(r=L.state)||void 0===r?void 0:r.from},children:"Reviews"})})]}),(0,k.jsx)(d.Suspense,{fallback:(0,k.jsx)("div",{children:"Loading..."}),children:(0,k.jsx)(j.j3,{})})]})}},305:function(e,n,t){function r(e,n,t,r,i,c,R){try{var o=e[c](R),s=o.value}catch(E){return void t(E)}o.done?n(s):Promise.resolve(s).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,c){var R=e.apply(n,t);function o(e){r(R,i,c,o,s,"next",e)}function s(e){r(R,i,c,o,s,"throw",e)}o(void 0)}))}}t.d(n,{Z:function(){return s}});var c=t(687),R=t.n(c);function o(){return(o=i(R().mark((function e(n){var t;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:if(!(t=e.sent).ok){e.next=5;break}return e.abrupt("return",t.json());case 5:return e.next=7,Promise.reject(new Error("error"));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var s=function(e){return o.apply(this,arguments)}},630:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=170.fa3d08a6.chunk.js.map