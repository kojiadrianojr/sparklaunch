(this.webpackJsonpsparklaunch=this.webpackJsonpsparklaunch||[]).push([[14],{357:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c,i,r,a,s,l,o,j=n(50),d=n(6),b=d.default.div(c||(c=Object(j.a)(["\n    display: grid;\n"]))),u=Object(d.default)(b)(i||(i=Object(j.a)(["\ngrid-template-columns: repeat(3, 1fr);\ngrid-template-rows: auto;\nwidth: 100%;\nmax-width: 1200px;\nheight: auto;\ntext-align: center;\njustify-content: center;\ncolumn-gap: 20px;\nrow-gap: 20px;\n@media (max-width: 600px){\n  grid-template-columns: repeat(1, 1fr);\n  width: 80%;\n}\n"])));Object(d.default)(b)(r||(r=Object(j.a)(["\n  width: 100%;\n  align-items: center;\n  margin: auto;\n"]))),d.default.div(a||(a=Object(j.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ",";\n  justify-items: ",";\n\n"])),(function(e){var t=e.gap;return("sm"===t?"8px":"md"===t&&"12px")||"lg"===t&&"24px"||t}),(function(e){var t=e.justify;return t&&t})),d.default.div(s||(s=Object(j.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  @media (max-width: 450px){\n    justify-content: flex-start;\n    flex-direction: column;\n  }\n"]))),Object(d.default)(b)(l||(l=Object(j.a)(["\n  flex-direction: row;\n  margin-bottom: 10px;\n  @media (max-width: 768px){\n    flex-direction: column;\n  }\n"]))),d.default.div(o||(o=Object(j.a)(["\n  width: 100%;\n"])));t.b=b},886:function(e,t,n){"use strict";n.r(t);var c,i,r,a,s,l,o,j=n(0),d=n(321),b=n(104),u=n(24),x=n(50),h=n(6),p=n(29),O=n(10),f=h.default.div(c||(c=Object(x.a)(["\n  display: flex;\n  height: 7vh;\n  width: 100%;\n  margin-top: 15px;\n  border-bottom: 3px solid ",";\n"])),(function(e){return e.theme.colors.primary})),m=Object(h.default)(p.c)(i||(i=Object(x.a)(["\n  & {\n    width: 100%;\n    flex: 2;\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.background})),g=(Object(h.default)(p.b)(r||(r=Object(x.a)(["\n  flex: 1;\n  background-color: ",";\n  color: ",";\n  height: 7vh;\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.textSubtle})),function(e){var t=e.activeIndex,n=void 0===t?0:t,c=Object(j.useContext)(h.ThemeContext);return Object(O.jsx)(f,{children:Object(O.jsxs)(m,{size:"md",activeIndex:n,variant:"primary",children:[Object(O.jsx)(p.d,{fullWidth:!0,id:"swap-nav-link",style:Object(u.a)({height:"7vh"},c.isDark&&{color:"".concat(c.isDark&&c.colors.text)}),children:"Projects"}),Object(O.jsx)(p.d,{fullWidth:!0,id:"pool-nav-link",href:"https://app.srk.finance/#/pool",as:"a",style:Object(u.a)({height:"7vh"},c.isDark&&{color:"".concat(c.isDark&&c.colors.text)}),children:"Staking"})]})})}),v=n(358),y=n(357),w=h.default.div(a||(a=Object(x.a)(["\n    margin: 35px;\n    width: 100%;\n"]))),S=Object(h.default)(y.b)(s||(s=Object(x.a)(["\n    grid-template-columns: repeat(3, 1fr);\n    text-align: center;\n    row-gap: 35px;\n    column-gap: 35px;\n    margin-top: 20px;\n    @media (max-width: 1000px) {\n        grid-template-columns: repeat(2, 2fr);\n      }\n    @media (max-width: 500px) {\n        grid-template-columns: repeat(1, 1fr);\n      }\n"]))),k=Object(h.default)(p.h)(l||(l=Object(x.a)(["\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    max-width: 1200px;\n    width: 100%;\n    margin: 0 auto;\n"]))),C=Object(h.default)(p.i)(o||(o=Object(x.a)(["\n    font-size: 24px;\n"]))),F=w,L=n(66),D=n(73),M=n(882),P=n(233),T=n(234),E=n(440),I=n(255),z="#32a31b",B="#7a1ba3",W="#8e98a5",R=n(360),G=n(355);var H=function(){var e=function(){var e=(new Date).getFullYear(),t=+new Date("".concat(e,"-07-27 17:00:00"))-+new Date,n={};return t>0&&(n={d:Math.floor(t/864e5),h:Math.floor(t/36e5%24),m:Math.floor(t/1e3/60%60),s:Math.floor(t/1e3%60)}),n},t=Object(j.useState)(e()),n=Object(L.a)(t,2),c=n[0],i=n[1],r=Object(j.useState)((new Date).getFullYear());Object(L.a)(r,1)[0],Object(j.useEffect)((function(){setTimeout((function(){i(e())}),1e3)}));var a=[];return Object.keys(c).forEach((function(e){c[e]&&a.push(Object(O.jsxs)("span",{style:{color:"#FFFFFF"},children:[c[e],e," "]}))})),Object(O.jsx)("div",{children:a.length?a:Object(O.jsx)("span",{children:"Ownly is Live!"})})},J=n(443),N=n(296),U=n(444),Y=function(e){var t=e.category,n=e.address,c=e.buyingCoin,i=e.sellingCoin,r=e.title,a=e.image,s=e.wallpaperBg,l=e.desc,o=e.totalRaise,d=e.ownSale,b=e.status,u=e.socMeds,x=Object(j.useState)({totalForSaleTokens:"-",remainingForSale:"-",totalSales:"-",expectedSales:"-",percentage:"-"}),f=Object(L.a)(x,2),m=f[0],g=f[1],y=Object(D.b)().account,w=Object(R.a)(t),S=Object(j.useContext)(h.ThemeContext),k="".concat("","/images/icons/").concat(a),C="".concat("","/images/icons/").concat(s);Object(j.useEffect)((function(){Object(G.a)(w,e).then((function(e){return g(e)}))}),[w,e]);var F;return Object(O.jsxs)(p.e,{style:{padding:"5px"},children:[Object(O.jsxs)(N.j,{src:C,children:[Object(O.jsx)(N.l,{src:k,alt:"token-logo"}),Object(O.jsx)(N.k,{bold:!0,children:r})]}),Object(O.jsxs)(N.i,{children:[Object(O.jsxs)(N.d,{children:[Object(O.jsxs)(N.g,{children:[Object(O.jsx)(U.b,{href:null===u||void 0===u?void 0:u[0],children:Object(O.jsx)(M.a,{size:"24px"})}),Object(O.jsx)(U.b,{href:null===u||void 0===u?void 0:u[1],children:Object(O.jsx)(P.a,{size:"24px",fill:S.colors.text})}),Object(O.jsx)(U.b,{href:null===u||void 0===u?void 0:u[2],children:Object(O.jsx)(T.a,{size:"24px",fill:S.colors.text})}),Object(O.jsx)(U.b,{href:null===u||void 0===u?void 0:u[3],children:Object(O.jsx)(I.a,{width:24,Icon:J.a})})]}),b===v.a.active?Object(O.jsx)(N.h,{style:{backgroundColor:z},children:"LIVE NOW"}):b===v.a.upcoming?Object(O.jsx)(N.h,{style:{backgroundColor:B},children:"UPCOMING"}):Object(O.jsx)(N.h,{style:{backgroundColor:W},children:"COMPLETED"})]}),Object(O.jsx)(N.e,{children:Object(O.jsxs)(N.h,{style:{backgroundColor:"green",display:"inline-flex"},children:["$",i.symbol," Going Live in:\xa0 ",Object(O.jsx)(H,{})]})}),Object(O.jsxs)(N.c,{children:[Object(O.jsx)("div",{style:{height:"70px",maxHeight:"80px",minHeight:"70px",marginBottom:"10px",marginTop:"10px"},children:Object(O.jsx)(p.p,{children:l})}),Object(O.jsxs)(N.e,{children:[b===v.a.completed?Object(O.jsx)(p.p,{as:"h1",children:"Sale Completion"}):(v.a.upcoming,Object(O.jsx)(p.p,{as:"h1",children:"Progress"})),b===v.a.upcoming?Object(O.jsx)(p.m,{primaryStep:0,variant:"flat"}):Object(O.jsx)(p.m,{primaryStep:parseInt(m.percentage),variant:"flat"}),b===v.a.upcoming?Object(O.jsxs)(p.h,{justifyContent:"space-between",children:[Object(O.jsxs)(p.p,{color:"textSubtle",children:[0,"%"]}),Object(O.jsxs)(p.p,{color:"textSubtle",children:[0," / ",o," ",c.symbol]})]}):Object(O.jsxs)(p.h,{justifyContent:"space-between",children:[Object(O.jsxs)(p.p,{color:"textSubtle",children:[m.percentage,"%"]}),Object(O.jsxs)(p.p,{color:"textSubtle",children:[m.totalSales," / ",m.expectedSales," ",c.symbol]})]})]}),Object(O.jsxs)(N.b,{flexDirection:"column",children:[b===v.a.upcoming?Object(O.jsxs)(p.h,{justifyContent:"space-between",children:[Object(O.jsx)(p.p,{color:"textSubtle",children:"Total Raised"}),Object(O.jsxs)(p.p,{children:[0," ",c.symbol]})]}):Object(O.jsxs)(p.h,{justifyContent:"space-between",children:[Object(O.jsx)(p.p,{color:"textSubtle",children:"Total Raised"}),Object(O.jsxs)(p.p,{children:[m.totalSales," ",c.symbol]})]}),Object(O.jsxs)(p.h,{justifyContent:"space-between",children:[b===v.a.upcoming?Object(O.jsx)(p.p,{color:"textSubtle",children:"Coming Soon For Sale"}):Object(O.jsxs)(p.p,{color:"textSubtle",children:["$",i.symbol," For Sale"]}),b===v.a.upcoming?Object(O.jsxs)(p.p,{children:[(F=d,F.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," ",i.symbol]}):Object(O.jsx)(p.p,{children:"0"===m.remainingForSale?"-":m.remainingForSale})]}),Object(O.jsxs)(p.h,{justifyContent:"space-between",children:[Object(O.jsx)(p.p,{color:"textSubtle",children:"Buying Coin"}),Object(O.jsx)(p.p,{children:c.symbol})]})]})]})]}),"active"===b&&Object(O.jsx)(N.a,{children:y?Object(O.jsx)(U.a,{to:"/projects/".concat(n),children:Object(O.jsx)("h1",{style:{color:"white"},children:"Participate"})}):Object(O.jsx)(E.a,{fullWidth:!0})})]})},$=function(e){var t=e.ProjectList,n=null===t||void 0===t?void 0:t.map((function(e){return Object(O.jsx)(Y,Object(u.a)({},e),e.address)}));return Object(O.jsx)(S,{children:n})};t.default=function(){var e=Object(d.f)().data,t=Object(j.useMemo)((function(){return e.filter((function(e){return e.status===v.a.active}))}),[e]),n=Object(j.useMemo)((function(){return e.filter((function(e){return e.status===v.a.upcoming}))}),[e]),c=Object(j.useMemo)((function(){return e.filter((function(e){return e.status===v.a.completed}))}),[e]);return Object(O.jsx)(b.a,{children:Object(O.jsxs)(k,{children:[Object(O.jsx)(g,{}),Object(O.jsxs)(F,{children:[Object(O.jsx)(C,{children:"Ongoing Launches"}),Object(O.jsx)($,{ProjectList:t})]}),0!==n.length&&Object(O.jsxs)(F,{children:[Object(O.jsx)(C,{children:"Upcoming Launches"}),Object(O.jsx)($,{ProjectList:n})]}),0!==c.length&&Object(O.jsxs)(F,{children:[Object(O.jsx)(C,{children:"Completed Launches"}),Object(O.jsx)($,{ProjectList:c})]})]})})}}}]);
//# sourceMappingURL=14.272d8446.chunk.js.map