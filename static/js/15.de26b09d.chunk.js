(this.webpackJsonpsparklaunch=this.webpackJsonpsparklaunch||[]).push([[15],{885:function(e,t,n){"use strict";n.r(t);var c,o,r,i,a,l,s,b,j,u,d,x,p=n(49),h=n(0),O=n.n(h),m=n(56),f=n(883),g=n(29),y=n(321),w=n(6),v=n(104),k=n(66),C=n(73),S=n(15),T=n(882),A=n(233),I=n(234),B=n(358),E=n(255),D=n(440),P=n(3),z=n.n(P),F=n(34),M=n(881),L=n(117),N=n(875),W=n(296),R=n(24),U=n(107),G=n(359),H=n(10),J=["value","onUserInput","placeholder"],Y=w.default.input(c||(c=Object(p.a)(["\n  color: ",";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: transparent;\n  font-size: 16px;\n  text-align: ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n  ::placeholder {\n    color: ",";\n  }\n"])),(function(e){var t=e.error,n=e.theme;return t?n.colors.failure:n.colors.text}),(function(e){var t=e.align;return t&&t}),(function(e){return e.theme.colors.textSubtle})),V=RegExp("^\\d*(?:\\\\[.])?\\d*$"),$=O.a.memo((function(e){var t=e.value,n=e.onUserInput,c=e.placeholder,o=Object(U.a)(e,J);return Object(H.jsx)(Y,Object(R.a)(Object(R.a)({},o),{},{value:t,onChange:function(e){var t;(""===(t=e.target.value.replace(/,/g,"."))||V.test(Object(G.a)(t)))&&n(t)},inputMode:"decimal",title:"Token Amount",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:c||"0.0",minLength:1,maxLength:79,spellCheck:"false"}))})),_=n(558),X=Object(w.default)(_.Box)(o||(o=Object(p.a)(["\n  width: 100%;\n  display: flex;\n  padding: 0;\n  align-items: ",";\n  padding: ",";\n  border: ",";\n  border-radius: ",";\n"])),(function(e){return e.align||"center"}),(function(e){return e.padding}),(function(e){return e.border}),(function(e){return e.borderRadius})),q=Object(w.default)(X)(r||(r=Object(p.a)(["\n  justify-content: space-between;\n  margin: 4px 0 4px 0;\n"]))),K=(w.default.div(i||(i=Object(p.a)(["\n  display: flex;\n  align-items: flex-end;\n"]))),Object(w.default)(X)(a||(a=Object(p.a)(["\n  flex-wrap: wrap;\n  margin: ",";\n  justify-content: ",";\n  & > * {\n    margin: "," !important;\n  }\n"])),(function(e){var t=e.gap;return t&&"-".concat(t)}),(function(e){var t=e.justify;return t&&t}),(function(e){return e.gap})),Object(w.default)(X)(l||(l=Object(p.a)(["\n  width: fit-content;\n  margin: ",";\n"])),(function(e){var t=e.gap;return t&&"-".concat(t)})),w.default.div(s||(s=Object(p.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: 0.75rem 0.75rem 0.75rem 1rem;\n"])))),Q=(w.default.button(b||(b=Object(p.a)(["\n  align-items: center;\n  height: 34px;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: transparent;\n  color: ",";\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  padding: 0 0.5rem;\n  :focus,\n  :hover {\n    background-color: ",";\n  }\n"])),(function(e){var t=e.selected,n=e.theme;return t?n.colors.text:"#FFFFFF"}),(function(e){var t=e.theme;return Object(N.a)(.05,t.colors.input)})),w.default.div(j||(j=Object(p.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){var t=e.theme;return Object(N.a)(.2,t.colors.textSubtle)})),w.default.span(u||(u=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])))),Z=w.default.div(d||(d=Object(p.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  // border-radius: ",";\n  // background-color: ",";\n  z-index: 1;\n"])),(function(e){return e.hideInput?"8px":"20px"}),(function(e){return e.theme.colors.background})),ee=w.default.div(x||(x=Object(p.a)(["\n  // border-radius: 16px;\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.shadows.inset}));function te(e){var t,n=e.value,c=e.onUserInput,o=e.onMax,r=e.showMaxButton,i=e.label,a=e.currency,l=e.remainingSupply,s=void 0===l?"":l,b=e.hideBalance,j=void 0!==b&&b,u=e.hideInput,d=void 0!==u&&u,x=e.id,p=(e.showCommonBases,Object(h.useState)(!1)),O=Object(k.a)(p,2),m=(O[0],O[1]),f=Object(C.b)().account;Object(h.useContext)(w.ThemeContext),Object(h.useCallback)((function(){m(!1)}),[m]);return Object(H.jsxs)(Z,{id:x,children:[Object(H.jsx)(g.p,{fontSize:"14px",children:i}),Object(H.jsx)(ee,{hideInput:d,children:Object(H.jsxs)(K,{style:d?{padding:"0",borderRadius:"8px"}:{},children:[Object(H.jsxs)(Q,{children:[Object(H.jsx)(W.l,{src:"".concat("/sparklaunch","/images/icons/").concat(null===a||void 0===a||null===(t=a.symbol)||void 0===t?void 0:t.toLowerCase(),".png"),size:"24px"}),Object(H.jsxs)(g.p,{children:[a&&a.symbol&&a.symbol.length>20?"".concat(a.symbol.slice(0,4),"...").concat(a.symbol.slice(a.symbol.length-5,a.symbol.length)):null===a||void 0===a?void 0:a.symbol,"\xa0"]})]}),!d&&Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)($,{className:"token-amount-input",value:n,onUserInput:c}),f&&a&&r&&Object(H.jsx)(g.b,{onClick:o,size:"sm",variant:"primary",style:{maxWidth:"50px",width:"20%",fontSize:"14px"},children:"MAX"})]})]})}),!d&&Object(H.jsx)(q,{children:f&&Object(H.jsx)(g.p,{onClick:o,fontSize:"14px",style:{display:"inline",cursor:"pointer"},children:!j&&a?"Remaining: ".concat(s," ").concat(a.symbol):" -"})})]})}var ne,ce,oe,re,ie,ae,le,se,be,je,ue,de,xe,pe,he,Oe,me,fe,ge,ye=n(360),we=n(91),ve=n(361),ke=n(355),Ce=Object(w.default)(g.p)(ne||(ne=Object(p.a)(["\n    color: #EAE2FC;\n    margin-bottom: 4px;\n"]))),Se=Object(w.default)(g.p)(ce||(ce=Object(p.a)(["\n    color: ",";\n"])),(function(e){return e.theme.colors.textSubtle})),Te=Object(w.default)(g.h)(oe||(oe=Object(p.a)(["\n    margin-top: 24px;\n    display: flex;\n    flex-direction: column;\n"]))),Ae=function(e){var t,n=e.onDismiss,c=e.address,o=Object(ve.a)().library,r=Object(C.b)().account,i=Object(ye.b)(),a=Object(y.d)(c),l=function(e){return Object(y.b)((function(t){return t.tokens.data.find((function(t){return t.address===e}))}))}(a.buyingCoin.address),s=Object(h.useState)(""),b=Object(k.a)(s,2),j=b[0],u=b[1],d=Object(h.useState)(""),x=Object(k.a)(d,2),p=x[0],O=x[1],m=Object(h.useState)({balance:new S.TokenAmount(we.a,BigInt(0)),amount:new S.TokenAmount(we.b,BigInt(0)),maxPayableAmount:new S.TokenAmount(we.b,BigInt(0)),rewardedAmount:new S.TokenAmount(we.b,BigInt(0)),redeemed:!1,whitelist:!1}),f=Object(k.a)(m,2),v=f[0],T=f[1],A=Object(h.useState)(new S.TokenAmount(we.b,BigInt(0))),I=Object(k.a)(A,2),B=I[0],E=I[1],D=Object(h.useState)(new S.TokenAmount(we.b,BigInt(0))),P=Object(k.a)(D,2),N=P[0],R=P[1],U=Object(h.useState)(new S.TokenAmount(we.b,BigInt(0))),J=Object(k.a)(U,2),Y=J[0],V=J[1],$=function(e){var t=new S.TokenAmount(we.a,Object(G.b)(e.multiply(B).toFixed(18),we.a));return u(t.toExact()),t},_=function(e){var t=new S.TokenAmount(we.a,Object(G.b)(e.divide(B).toFixed(18),we.b));return O(t.toExact()),t},X=function(e){return _(e).greaterThan(Y)&&(e=$(Y),_(e)),e},q=function(e){var t=$(e);return t.greaterThan(N)&&(t=X(t),e=_(t)),e},K=function(e){var t=e.tx,n=Object(h.useContext)(w.ThemeContext),c=t.hash,o="https://testnet.bscscan.com/tx/".concat(c);return Object(H.jsxs)(g.h,{alignItems:"center",flexDirection:"column",children:[Object(H.jsx)(Ce,{children:"Successfully bought ~ tokens!"}),Object(H.jsxs)("a",{href:o,style:{fontSize:"12px",textDecoration:"underline",color:n.colors.primary},children:["View on BscScan ",Object(H.jsx)(M.a,{size:"12px"})]})]})},Q=function(){var e=Object(F.a)(z.a.mark((function e(){var t,n,c;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.buyTokens({value:Object(G.b)(j,we.a)});case 3:t=e.sent,console.log(t),L.b.success(Object(H.jsx)(K,{tx:t}),{autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),Object(ke.b)(i,a,o,r).then((function(e){return T(e)})),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),n=e.t0.code,c=e.t0.data?e.t0.data.message:e.t0.message,L.b.error("".concat(n," ").concat(c),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){function e(){return(e=Object(F.a)(z.a.mark((function e(){var t,n,c;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.getWhitelist(r);case 2:return t=e.sent,n=new S.TokenAmount(we.b,t._maxPayableAmount),c=new S.TokenAmount(we.b,t._rewardedAmount),e.abrupt("return",n.subtract(c));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(ke.b)(i,a,o,r).then((function(e){return T(e)})),i.tokenRate().then((function(e){return E(new S.TokenAmount(we.b,e))})),function(){return e.apply(this,arguments)}().then((function(e){var t;V(e),R((t=e,new S.TokenAmount(we.a,Object(G.b)(t.multiply(B).toFixed(18),we.b))))}))}),[r,i,o,j,p,B,a]),Object(H.jsx)(g.k,{title:"",onDismiss:n,children:Object(H.jsxs)("div",{style:{width:"400px",padding:"0px 24px 24px 24px"},children:[Object(H.jsxs)("div",{style:{marginBottom:"24px",marginTop:"-24px"},children:[Object(H.jsx)(g.i,{bold:!0,fontSize:"21px",children:"Swap Coins"}),Object(H.jsx)(Se,{children:"Max. Allocation is ".concat(v.maxPayableAmount.toExact()," ").concat(a.symbol)})]}),Object(H.jsx)(te,{label:"From",id:"swap-input",value:j,onUserInput:function(e){u(e);var t=new S.TokenAmount(we.a,Object(G.b)(e,we.a));t=X(t),_(t)},currency:l,showMaxButton:!0,onMax:function(){var e=N;e=X(e),u(e.toExact())},remainingSupply:N.toExact()}),Object(H.jsx)(te,{showMaxButton:!0,onMax:function(){var e=Y;e=q(e),O(e.toExact())},label:"To",id:"swap-input",value:p,onUserInput:function(e){O(e);var t=new S.TokenAmount(we.b,Object(G.b)(e,we.b));t=q(t),$(t)},currency:a,remainingSupply:Y.toExact()}),Object(H.jsx)(Te,{children:Object(H.jsx)(g.b,{onClick:Q,fullWidth:!0,children:"Swap"})}),Object(H.jsxs)(Te,{children:[Object(H.jsx)(g.p,{children:"My Allocations"}),Object(H.jsxs)(g.h,{alignItems:"center",marginTop:"12px",children:[Object(H.jsx)(W.f,{src:"".concat("/sparklaunch","/images/icons/").concat(null===a||void 0===a||null===(t=a.symbol)||void 0===t?void 0:t.toLowerCase(),".png")}),Object(H.jsx)(g.p,{color:"textSubtle",children:"".concat(v.rewardedAmount.toExact()," ").concat(a.symbol)})]})]})]})})},Ie=n(69),Be=n(443),Ee=n(444),De=Object(w.default)(g.e)(re||(re=Object(p.a)(["\n    width: 100%;\n"]))),Pe=Object(w.default)(g.g)(ie||(ie=Object(p.a)(["\n    \n    display: flex;\n    align-items: center;\n    height: auto;\n    min-height: 10vh;\n    max-height: 15vh;\n    ","\n"])),(function(e){var t=e.src;return t&&"\n      background-image: url(".concat(t,");\n      background-repeat: no-repeat;\n      background-attachment: scroll;\n      background-position: 95% 15%;\n      background-size: cover;\n    ")})),ze=w.default.img(ae||(ae=Object(p.a)(["\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    margin: 10px 15px;\n"]))),Fe=w.default.img(le||(le=Object(p.a)(["\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    margin: 10px 15px;\n"]))),Me=Object(w.default)(g.f)(se||(se=Object(p.a)(["\n    padding: 20px;\n"]))),Le=Object(w.default)(g.b)(be||(be=Object(p.a)(["\n    cursor: context-menu;\n    height: 35px;\n    border-radius: 5px;\n"]))),Ne=Object(w.default)(W.b)(je||(je=Object(p.a)(["\n    &:before {\n        content: '';\n        border-top: 5px solid ",";\n        padding-top: 10px;\n        margin-bottom: 10px;\n    }\n    &:after {\n        content: '';\n        border-bottom: 5px solid ",";\n        padding-bottom: 10px;\n        margin-top: 10px;\n    }\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary})),We=Object(w.default)(g.h)(ue||(ue=Object(p.a)(["\n    width: 100%;\n    min-height: 20vh;\n    height: auto;\n    padding: 25px;\n"]))),Re=Object(w.default)(g.h)(de||(de=Object(p.a)(["\n    width: 100%;\n    max-width: 720px;\n"]))),Ue=Object(w.default)(Re)(xe||(xe=Object(p.a)([""]))),Ge=Object(w.default)(Re)(pe||(pe=Object(p.a)(["\n    margin-top: 10px;\n"]))),He=Object(w.default)(g.p)(he||(he=Object(p.a)(["\n    margin: 10px 5px\n"]))),Je=Object(w.default)(g.h)(Oe||(Oe=Object(p.a)(["\n    margin: 10px;\n    width: 100%;\n    height: auto;\n"]))),Ye=Object(w.default)(g.b)(me||(me=Object(p.a)(["\n    background-color: transparent;\n    color: ",";\n    border-bottom: ",";\n"])),(function(e){var t=e.theme;return e.activeIndex?t.colors.text:t.colors.textSubtle}),(function(e){var t=e.theme;return e.activeIndex&&"3px solid ".concat(t.colors.primary)})),Ve=function(e){var t=e.activeIndex,n=void 0===t?0:t,c=e.handleClick;Object(h.useContext)(w.ThemeContext),Object(h.useContext)(Ie.a);return Object(H.jsx)(g.h,{alignItems:"center",style:{margin:"10px 10px 0px 10px",padding:"20px 20px 0px 20px"},children:Object(H.jsx)(Ye,{activeIndex:0===n,onClick:function(){return c(0)},children:"Project Details"})})},$e=function(){return Object(H.jsxs)(g.h,{margin:"20px",padding:"20px",flexDirection:"column",children:[Object(H.jsxs)(Ue,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{bold:!0,children:"No."}),Object(H.jsx)(g.p,{bold:!0,children:"Token Allocation"}),Object(H.jsx)(g.p,{bold:!0,children:"Date"}),Object(H.jsx)(g.p,{bold:!0,children:"Token(s) claimed"}),Object(H.jsx)(g.p,{bold:!0,children:"Action"})]}),Object(H.jsxs)(Ge,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{color:"textSubtle",children:"001"}),Object(H.jsx)(g.p,{color:"textSubtle",children:"159662.6 OWN"}),Object(H.jsx)(g.p,{color:"textSubtle",children:"06/24/2021"}),Object(H.jsx)(g.p,{color:"textSubtle",children:"OWNLY"}),Object(H.jsx)(g.p,{color:"textSubtle",children:"SWAP"})]})]})},_e=function(e){var t,n,c=e.pool,o=e.project,r=Object(h.useContext)(w.ThemeContext),i=Object(C.b)().account,a=Object(h.useContext)(Ie.a),l=Object(h.useState)(0),s=Object(k.a)(l,2),b=s[0],j=s[1],u=c.open,d=c.close,x=c.cap,p=c.totalUserParticipated,O=c.totalFundsSwapped,m=Object(h.useCallback)((function(e){j(e)}),[]);return Object(H.jsxs)(Je,{style:{backgroundColor:r.isDark?null===(t=a.customColors)||void 0===t?void 0:t.BG1:null===(n=a.customColors)||void 0===n?void 0:n.BG2},flexDirection:"column",children:[Object(H.jsx)("div",{style:{marginBottom:"10px",borderBottom:"1px solid ".concat(r.colors.primary)},children:Object(H.jsx)(Ve,{handleClick:m,activeIndex:b})}),0===b&&Object(H.jsxs)(g.h,{padding:"20px",margin:"20px",justifyContent:"space-between",children:[Object(H.jsxs)(g.h,{flex:"1",flexDirection:"column",marginRight:"10px",children:[Object(H.jsx)(g.i,{margin:"10px 0px 30px 0",bold:!0,children:"Pool Information"}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{children:"Opens"}),Object(H.jsx)(g.p,{color:"textSubtle",children:u})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{children:"Closes"}),Object(H.jsx)(g.p,{color:"textSubtle",children:d})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{children:"Cap"}),Object(H.jsxs)(g.p,{color:"textSubtle",children:[x," ",o.buyingCoin.symbol]})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{children:"Total Users Participated"}),Object(H.jsx)(g.p,{color:"textSubtle",children:p})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{children:"Total Funds Swapped"}),Object(H.jsxs)(g.p,{color:"textSubtle",children:[O," ",o.buyingCoin.symbol]})]})]}),Object(H.jsxs)(g.h,{flex:"1",marginLeft:"10px",flexDirection:"column",children:[Object(H.jsx)(g.i,{margin:"10px 0px 30px 0px",bold:!0,children:"Token Information"}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{children:"Name"}),Object(H.jsx)(g.p,{color:"textSubtle",children:o.title})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{children:"Token Symbol"}),Object(H.jsx)(g.p,{color:"textSubtle",children:o.symbol})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{children:"Total Supply"}),Object(H.jsx)(g.p,{color:"textSubtle",children:o.ownSale})]})]})]}),i&&2===b&&Object(H.jsx)($e,{})]})},Xe=function(e){var t=e.tokenImage,n=e.symbol,c=e.allocation,o="".concat("/sparklaunch","/images/icons/").concat(t);return Object(H.jsxs)("div",{style:{marginTop:"20px"},children:[Object(H.jsx)(g.p,{children:"My Allocations"}),Object(H.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(H.jsx)(Fe,{src:o,alt:"token-logo"}),Object(H.jsxs)(g.p,{bold:!0,children:[c," ",n]})]})]})},qe=function(e){var t,n,c=e.account,o=e.whiteListed,r=e.project,i=Object(h.useContext)(w.ThemeContext),a=Object(h.useContext)(Ie.a),l=Object(y.c)(),s=Object(g.s)(Object(H.jsx)(Ae,{address:l})),b=Object(k.a)(s,1)[0],j=Object(h.useState)({totalForSaleTokens:"-",totalSoldTokens:"-",remainingForSale:"-",totalSales:"-",expectedSales:"-",percentage:"-",tokenRate:"-"}),u=Object(k.a)(j,2),d=u[0],x=u[1],p=Object(h.useState)({balance:new S.TokenAmount(r.buyingCoin,BigInt(0)),amount:new S.TokenAmount(r.sellingCoin,BigInt(0)),maxPayableAmount:new S.TokenAmount(r.sellingCoin,BigInt(0)),maxExpendable:new S.TokenAmount(r.buyingCoin,BigInt(0)),rewardedAmount:new S.TokenAmount(r.sellingCoin,BigInt(0)),redeemed:!1,whitelist:!1}),O=Object(k.a)(p,2),m=O[0],f=O[1],v=Object(ve.a)().library,C=Object(ye.a)(r.category);Object(h.useEffect)((function(){Object(ke.a)(C,r).then((function(e){return x(e)})),Object(ke.b)(C,r,v,c).then((function(e){return f(e)})).catch(console.log)}),[C,r,c,v]);"".concat(r.progress," ").concat(r.symbol);return Object(H.jsxs)(g.f,{style:{width:"100%",backgroundColor:i.isDark?null===(t=a.customColors)||void 0===t?void 0:t.BG1:null===(n=a.customColors)||void 0===n?void 0:n.BG2,display:"flex",flexDirection:"column",justifyContent:"space-around"},children:[Object(H.jsxs)(W.e,{children:[Object(H.jsxs)(g.p,{bold:!0,as:"h1",fontSize:"24px",children:[d.totalSoldTokens," ",r.sellingCoin.name," Sold"]}),Object(H.jsx)(g.m,{primaryStep:parseInt(d.percentage),variant:"flat"}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsxs)(g.p,{color:"textSubtle",children:[d.percentage,"%"]}),Object(H.jsxs)(g.p,{color:"textSubtle",children:[d.totalSales," / ",d.expectedSales," ",r.buyingCoin.symbol]})]})]}),Object(H.jsxs)(Ne,{flexDirection:"column",children:[Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{color:"textSubtle",children:"OWNLY Price"}),Object(H.jsxs)(g.p,{children:[d.tokenRate," ",r.buyingCoin.symbol]})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{color:"textSubtle",children:"OWNLY Sold"}),Object(H.jsxs)(g.p,{children:[d.totalSoldTokens," ",r.sellingCoin.symbol]})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{color:"textSubtle",children:"Total Raised"}),Object(H.jsxs)(g.p,{children:[d.totalSales," ",r.buyingCoin.symbol]})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{color:"primary",children:"Max Allocation"}),Object(H.jsxs)(g.p,{children:[m.maxPayableAmount.toExact()," ",r.sellingCoin.symbol]})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{color:"primary",children:"Max BNB"}),Object(H.jsxs)(g.p,{children:[m.maxExpendable.toExact()," BNB"]})]})]}),c?o?Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(Xe,{tokenImage:r.image,symbol:r.symbol,allocation:m.rewardedAmount.toExact()}),Object(H.jsxs)(g.b,{onClick:b,fullWidth:!0,style:{marginTop:"10px"},children:["Purchase ",r.symbol]})]}):Object(H.jsx)(Xe,{tokenImage:r.image,symbol:r.symbol,allocation:m.rewardedAmount.toExact()}):Object(H.jsx)("div",{style:{marginTop:"15px",padding:"10px 0px"},children:Object(H.jsx)(D.a,{fullWidth:!0})})]})},Ke=function(){var e=Object(C.b)().account,t=Object(h.useState)(!1),n=Object(k.a)(t,2),c=n[0],o=n[1],r=Object(y.c)(),i=Object(y.d)(r),a=e?e.toLowerCase():"",l=Object(y.a)(a),s=Object(y.e)(r),b=i.title,j=i.image,u=i.longDesc,d=i.longDesc2,x=i.longDesc3,p=(i.buyingCoin,i.socMeds),O=i.wallpaperBg,m=i.status,f="".concat("/sparklaunch","/images/icons/").concat(j);Object(h.useEffect)((function(){l[0][0]?o(!0):o(!1)}),[l]);var v=Object(h.useContext)(w.ThemeContext),S="".concat("/sparklaunch","/images/icons/").concat(O);return Object(H.jsxs)(De,{children:[Object(H.jsxs)(Pe,{src:S,children:[Object(H.jsx)(ze,{src:f,alt:"token-image"}),Object(H.jsx)(g.i,{bold:!0,fontSize:"24px",children:b})]}),Object(H.jsx)(Me,{children:Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsxs)(g.h,{flex:"1",flexDirection:"column",padding:"10px",children:[Object(H.jsxs)(g.h,{alignItems:"center",justifyContent:"space-between",marginTop:"-20px",marginBottom:"10px",padding:"10px 0px",children:[Object(H.jsxs)(W.g,{children:[Object(H.jsx)(Ee.b,{href:null===p||void 0===p?void 0:p[0],children:Object(H.jsx)(T.a,{})}),Object(H.jsx)(Ee.b,{href:null===p||void 0===p?void 0:p[1],children:Object(H.jsx)(A.a,{fill:v.colors.text})}),Object(H.jsx)(Ee.b,{href:null===p||void 0===p?void 0:p[2],children:Object(H.jsx)(I.a,{fill:v.colors.text})}),Object(H.jsx)(Ee.b,{href:null===p||void 0===p?void 0:p[3],children:Object(H.jsx)(E.a,{width:24,Icon:Be.a})})]}),m===B.a.active?Object(H.jsx)(Le,{style:{backgroundColor:"#32a31b"},children:"LIVE NOW"}):m===B.a.upcoming?Object(H.jsx)(Le,{style:{backgroundColor:"#7a1ba3"},children:"UPCOMING"}):Object(H.jsx)(Le,{style:{backgroundColor:"#8e98a5"},children:"COMPLETED"})]}),Object(H.jsxs)(g.h,{flexDirection:"column",justifyContent:"space-between",children:[Object(H.jsx)(He,{color:"textSubtle",as:"p",children:u}),Object(H.jsx)(He,{color:"textSubtle",as:"p",children:d}),Object(H.jsx)(He,{color:"textSubtle",as:"p",children:x})]})]}),Object(H.jsx)(g.h,{flex:"1",children:Object(H.jsx)(qe,{account:e,whiteListed:c,project:i})})]})}),Object(H.jsx)(We,{children:Object(H.jsx)(_e,{pool:s,project:i})})]})},Qe=Object(w.default)(g.h)(fe||(fe=Object(p.a)(["\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    max-width: 1200px;\n    width: 100%;\n    margin: 0 auto;\n"]))),Ze=Object(w.default)(m.b)(ge||(ge=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    color: ",";\n"])),(function(e){return e.theme.colors.text}));t.default=function(e){var t=e.match.params.ProjectAddress,n=Object(y.g)(t),c=Object(y.b)((function(e){return e.projects.data.find((function(e){return e.address===n}))}));return Object(H.jsx)(v.a,{children:Object(H.jsxs)(Qe,{children:[Object(H.jsxs)(g.h,{style:{width:"100%",minHeight:"10vh"},flexDirection:"column",justifyContent:"space-between",marginTop:"20px",padding:"5px 0px",children:[Object(H.jsx)(g.i,{fontSize:"24px",bold:!0,children:" SparkLaunch "}),Object(H.jsxs)(g.h,{justifyContent:"space-between",marginBottom:"3px",children:[Object(H.jsxs)(g.a,{children:[Object(H.jsx)(g.p,{children:"SparkLaunch"}),Object(H.jsx)(g.p,{children:"On Going"}),Object(H.jsx)(g.p,{children:null===c||void 0===c?void 0:c.symbol})]}),Object(H.jsxs)(Ze,{to:"/projects",children:[Object(H.jsx)(f.a,{})," PROJECTS "]})]})]}),Object(H.jsx)(Ke,{})]})})}}}]);
//# sourceMappingURL=15.de26b09d.chunk.js.map