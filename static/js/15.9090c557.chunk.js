(this.webpackJsonpsparklaunch=this.webpackJsonpsparklaunch||[]).push([[15],{885:function(e,t,n){"use strict";n.r(t);var c,o,r,a,i,l,s,b,j,d,u,x,p=n(50),h=n(0),O=n.n(h),m=n(56),f=n(883),g=n(29),y=n(322),v=n(6),w=n(104),k=n(66),C=n(73),S=n(14),T=n(882),A=n(233),I=n(234),B=n(23),F=n(360),E=n(255),D=n(440),P=n(2),z=n.n(P),L=n(35),M=n(881),N=n(117),R=n(875),W=n(296),U=n(24),G=n(107),Y=n(361),H=n(10),J=["value","onUserInput","placeholder"],V=v.default.input(c||(c=Object(p.a)(["\n  color: ",";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: transparent;\n  font-size: 16px;\n  text-align: ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n  ::placeholder {\n    color: ",";\n  }\n"])),(function(e){var t=e.error,n=e.theme;return t?n.colors.failure:n.colors.text}),(function(e){var t=e.align;return t&&t}),(function(e){return e.theme.colors.textSubtle})),$=RegExp("^\\d*(?:\\\\[.])?\\d*$"),_=O.a.memo((function(e){var t=e.value,n=e.onUserInput,c=e.placeholder,o=Object(G.a)(e,J);return Object(H.jsx)(V,Object(U.a)(Object(U.a)({},o),{},{value:t,onChange:function(e){var t;(""===(t=e.target.value.replace(/,/g,"."))||$.test(Object(Y.a)(t)))&&n(t)},inputMode:"decimal",title:"Token Amount",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:c||"0.0",minLength:1,maxLength:79,spellCheck:"false"}))})),X=n(558),q=Object(v.default)(X.Box)(o||(o=Object(p.a)(["\n  width: 100%;\n  display: flex;\n  padding: 0;\n  align-items: ",";\n  padding: ",";\n  border: ",";\n  border-radius: ",";\n"])),(function(e){return e.align||"center"}),(function(e){return e.padding}),(function(e){return e.border}),(function(e){return e.borderRadius})),K=Object(v.default)(q)(r||(r=Object(p.a)(["\n  justify-content: space-between;\n  margin: 4px 0 4px 0;\n"]))),Q=(v.default.div(a||(a=Object(p.a)(["\n  display: flex;\n  align-items: flex-end;\n"]))),Object(v.default)(q)(i||(i=Object(p.a)(["\n  flex-wrap: wrap;\n  margin: ",";\n  justify-content: ",";\n  & > * {\n    margin: "," !important;\n  }\n"])),(function(e){var t=e.gap;return t&&"-".concat(t)}),(function(e){var t=e.justify;return t&&t}),(function(e){return e.gap})),Object(v.default)(q)(l||(l=Object(p.a)(["\n  width: fit-content;\n  margin: ",";\n"])),(function(e){var t=e.gap;return t&&"-".concat(t)})),v.default.div(s||(s=Object(p.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: 0.75rem 0.75rem 0.75rem 1rem;\n"])))),Z=(v.default.button(b||(b=Object(p.a)(["\n  align-items: center;\n  height: 34px;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: transparent;\n  color: ",";\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  padding: 0 0.5rem;\n  :focus,\n  :hover {\n    background-color: ",";\n  }\n"])),(function(e){var t=e.selected,n=e.theme;return t?n.colors.text:"#FFFFFF"}),(function(e){var t=e.theme;return Object(R.a)(.05,t.colors.input)})),v.default.div(j||(j=Object(p.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){var t=e.theme;return Object(R.a)(.2,t.colors.textSubtle)})),v.default.span(d||(d=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])))),ee=v.default.div(u||(u=Object(p.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  // border-radius: ",";\n  // background-color: ",";\n  z-index: 1;\n"])),(function(e){return e.hideInput?"8px":"20px"}),(function(e){return e.theme.colors.background})),te=v.default.div(x||(x=Object(p.a)(["\n  // border-radius: 16px;\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.shadows.inset}));function ne(e){var t,n=e.value,c=e.onUserInput,o=e.onMax,r=e.showMaxButton,a=e.label,i=e.currency,l=e.remainingSupply,s=void 0===l?"":l,b=e.hideBalance,j=void 0!==b&&b,d=e.hideInput,u=void 0!==d&&d,x=e.id,p=(e.showCommonBases,Object(h.useState)(!1)),O=Object(k.a)(p,2),m=(O[0],O[1]),f=Object(C.b)().account;Object(h.useContext)(v.ThemeContext),Object(h.useCallback)((function(){m(!1)}),[m]);return Object(H.jsxs)(ee,{id:x,children:[Object(H.jsx)(g.p,{fontSize:"14px",children:a}),Object(H.jsx)(te,{hideInput:u,children:Object(H.jsxs)(Q,{style:u?{padding:"0",borderRadius:"8px"}:{},children:[Object(H.jsxs)(Z,{children:[Object(H.jsx)(W.l,{src:"".concat("","/images/icons/").concat(null===i||void 0===i||null===(t=i.symbol)||void 0===t?void 0:t.toLowerCase(),".png"),size:"24px"}),Object(H.jsxs)(g.p,{children:[i&&i.symbol&&i.symbol.length>20?"".concat(i.symbol.slice(0,4),"...").concat(i.symbol.slice(i.symbol.length-5,i.symbol.length)):null===i||void 0===i?void 0:i.symbol,"\xa0"]})]}),!u&&Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(_,{className:"token-amount-input",value:n,onUserInput:c}),f&&i&&r&&Object(H.jsx)(g.b,{onClick:o,size:"sm",variant:"primary",style:{maxWidth:"50px",width:"20%",fontSize:"14px"},children:"MAX"})]})]})}),!u&&Object(H.jsx)(K,{children:f&&Object(H.jsx)(g.p,{onClick:o,fontSize:"14px",style:{display:"inline",cursor:"pointer"},children:!j&&i?"Remaining: ".concat(s," ").concat(i.symbol):" -"})})]})}var ce,oe,re,ae,ie,le,se,be,je,de,ue,xe,pe,he,Oe,me,fe,ge,ye,ve=n(324),we=n(91),ke=n(325),Ce=n(321),Se=Object(v.default)(g.p)(ce||(ce=Object(p.a)(["\n    color: #EAE2FC;\n    margin-bottom: 4px;\n"]))),Te=Object(v.default)(g.p)(oe||(oe=Object(p.a)(["\n    color: ",";\n"])),(function(e){return e.theme.colors.textSubtle})),Ae=Object(v.default)(g.h)(re||(re=Object(p.a)(["\n    margin-top: 24px;\n    display: flex;\n    flex-direction: column;\n"]))),Ie=function(e){var t,n=e.onDismiss,c=e.address,o=e.stats,r=Object(ke.a)().library,a=Object(C.b)().account,i=Object(ve.b)(),l=Object(y.d)(c),s=function(e){return Object(y.b)((function(t){return t.tokens.data.find((function(t){return t.address===e}))}))}(l.buyingCoin.address),b=Object(h.useState)(""),j=Object(k.a)(b,2),d=j[0],u=j[1],x=Object(h.useState)(""),p=Object(k.a)(x,2),O=p[0],m=p[1],f=Object(h.useState)({balance:new S.TokenAmount(we.a,BigInt(0)),amount:new S.TokenAmount(we.b,BigInt(0)),maxPayableAmount:new S.TokenAmount(we.b,BigInt(0)),rewardedAmount:new S.TokenAmount(we.b,BigInt(0)),redeemed:!1,whitelist:!1}),w=Object(k.a)(f,2),T=w[0],A=w[1],I=Object(h.useState)(new S.TokenAmount(we.b,BigInt(0))),B=Object(k.a)(I,2),F=B[0],E=B[1],D=Object(h.useState)(new S.TokenAmount(we.b,BigInt(0))),P=Object(k.a)(D,2),R=P[0],U=P[1],G=Object(h.useState)(new S.TokenAmount(we.b,BigInt(0))),J=Object(k.a)(G,2),V=J[0],$=J[1],_=function(e){var t=new S.TokenAmount(we.a,Object(Y.b)(e.multiply(F).toFixed(18),we.a));return u(t.toExact()),t},X=function(e){var t=new S.TokenAmount(we.a,Object(Y.b)(e.divide(F).toFixed(18),we.b));return m(t.toExact()),t},q=function(e){return X(e).greaterThan(V)&&(e=_(V),X(e)),e},K=function(e){return _(e).greaterThan(R)&&(e=X(R),_(e)),e},Q=function(e){var t=e.tx,n=e.value,c=e.symbol,o=Object(h.useContext)(v.ThemeContext),r=t.hash,a="https://testnet.bscscan.com/tx/".concat(r);return Object(H.jsxs)(g.h,{alignItems:"center",flexDirection:"column",children:[Object(H.jsx)(Se,{children:"Successfully bought ~ ".concat(n," ").concat(c," tokens!")}),Object(H.jsxs)("a",{href:a,style:{fontSize:"12px",textDecoration:"underline",color:o.colors.primary},children:["View on BscScan ",Object(H.jsx)(M.a,{size:"12px"})]})]})},Z=function(){var e=Object(L.a)(z.a.mark((function e(){var t,n,c;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.buyTokens({value:Object(Y.b)(d,we.a)});case 3:t=e.sent,N.b.success(Object(H.jsx)(Q,{tx:t,value:d,symbol:l.symbol}),{autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),Object(Ce.b)(i,l,r,a).then((function(e){return A(e)})),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),n=e.t0.code,c=e.t0.data?e.t0.data.message:e.t0.message,N.b.error("".concat(n," ").concat(c),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){function e(){return(e=Object(L.a)(z.a.mark((function e(){var t,n,c;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.getWhitelist(a);case 2:return t=e.sent,n=new S.TokenAmount(we.b,t._maxPayableAmount),c=new S.TokenAmount(we.b,t._rewardedAmount),e.abrupt("return",n.subtract(c));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var t=function(e){return e.match(/^-?\d+(?:\.\d{0,18})?/)[0]};Object(Ce.b)(i,l,r,a).then((function(e){return A(e)})),i.tokenRate().then((function(e){return E(new S.TokenAmount(we.b,e))})),function(){return e.apply(this,arguments)}().then((function(e){r.getBalance(a).then((function(e){var n,c=new S.TokenAmount(we.a,e.toBigInt());$((n=c,new S.TokenAmount(we.a,Object(Y.b)(t(n.divide(F).toFixed(19)),we.b)))),U(c)}))}))}),[a,i,r,d,O,F,l]),Object(H.jsx)(g.k,{title:"",onDismiss:n,children:Object(H.jsxs)("div",{style:{width:"400px",padding:"0px 24px 24px 24px"},children:[Object(H.jsxs)("div",{style:{marginBottom:"24px",marginTop:"-24px"},children:[Object(H.jsx)(g.i,{bold:!0,fontSize:"21px",children:"Swap Coins"}),Object(H.jsx)(Te,{children:"Remaining: ".concat(null===o||void 0===o?void 0:o.remainingForSale," ").concat(l.symbol)})]}),Object(H.jsx)(ne,{label:"From",id:"swap-input",value:d,onUserInput:function(e){u(e);var t=new S.TokenAmount(we.a,Object(Y.b)(e,we.a));t=q(t),X(t)},currency:s,showMaxButton:!0,onMax:function(){var e=R;e=q(e),u(e.toExact())},remainingSupply:R.toExact()}),Object(H.jsx)(ne,{showMaxButton:!0,onMax:function(){var e=V;e=K(e),m(e.toExact())},label:"To",id:"swap-input",value:O,onUserInput:function(e){m(e);var t=new S.TokenAmount(we.b,Object(Y.b)(e,we.b));t=K(t),_(t)},currency:l,remainingSupply:o.remainingForSale}),Object(H.jsx)(g.p,{color:"#FFFFFF",children:"Price: ".concat(F.toExact()," ").concat(l.symbol," per BNB ")}),Object(H.jsx)(Ae,{children:Object(H.jsx)(g.b,{onClick:Z,fullWidth:!0,children:"Swap"})}),Object(H.jsxs)(Ae,{children:[Object(H.jsx)(g.p,{children:"My Allocations"}),Object(H.jsxs)(g.h,{alignItems:"center",marginTop:"12px",children:[Object(H.jsx)(W.f,{src:"".concat("","/images/icons/").concat(null===l||void 0===l||null===(t=l.symbol)||void 0===t?void 0:t.toLowerCase(),".png")}),Object(H.jsx)(g.p,{color:"textSubtle",children:"".concat(T.rewardedAmount.toExact()," ").concat(l.symbol)})]})]})]})})},Be=n(69),Fe=n(443),Ee=n(444),De=Object(v.default)(g.e)(ae||(ae=Object(p.a)(["\n    width: 100%;\n"]))),Pe=Object(v.default)(g.g)(ie||(ie=Object(p.a)(["\n    \n    display: flex;\n    align-items: center;\n    height: auto;\n    min-height: 10vh;\n    max-height: 15vh;\n    ","\n"])),(function(e){var t=e.src;return t&&"\n      background-image: url(".concat(t,");\n      background-repeat: no-repeat;\n      background-attachment: scroll;\n      background-position: 95% 15%;\n      background-size: cover;\n    ")})),ze=v.default.img(le||(le=Object(p.a)(["\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    margin: 10px 15px;\n"]))),Le=v.default.img(se||(se=Object(p.a)(["\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    margin: 10px 15px;\n"]))),Me=Object(v.default)(g.f)(be||(be=Object(p.a)(["\n    padding: 20px;\n"]))),Ne=Object(v.default)(g.b)(je||(je=Object(p.a)(["\n    cursor: context-menu;\n    height: 35px;\n    border-radius: 5px;\n"]))),Re=Object(v.default)(W.b)(de||(de=Object(p.a)(["\n    &:before {\n        content: '';\n        border-top: 5px solid ",";\n        padding-top: 10px;\n        margin-bottom: 10px;\n    }\n    &:after {\n        content: '';\n        border-bottom: 5px solid ",";\n        padding-bottom: 10px;\n        margin-top: 10px;\n    }\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary})),We=Object(v.default)(g.h)(ue||(ue=Object(p.a)(["\n    width: 100%;\n    min-height: 20vh;\n    height: auto;\n    padding: 25px;\n"]))),Ue=Object(v.default)(g.h)(xe||(xe=Object(p.a)(["\n    width: 100%;\n    max-width: 720px;\n"]))),Ge=Object(v.default)(Ue)(pe||(pe=Object(p.a)([""]))),Ye=Object(v.default)(Ue)(he||(he=Object(p.a)(["\n    margin-top: 10px;\n"]))),He=Object(v.default)(g.p)(Oe||(Oe=Object(p.a)(["\n    margin: 10px 5px\n"]))),Je=Object(v.default)(g.h)(me||(me=Object(p.a)(["\n    margin: 10px;\n    width: 100%;\n    height: auto;\n"]))),Ve=Object(v.default)(g.b)(fe||(fe=Object(p.a)(["\n    background-color: transparent;\n    color: ",";\n    border-bottom: ",";\n"])),(function(e){var t=e.theme;return e.activeIndex?t.colors.text:t.colors.textSubtle}),(function(e){var t=e.theme;return e.activeIndex&&"3px solid ".concat(t.colors.primary)})),$e=function(e){var t=e.activeIndex,n=void 0===t?0:t,c=e.handleClick;Object(h.useContext)(v.ThemeContext),Object(h.useContext)(Be.a);return Object(H.jsx)(g.h,{alignItems:"center",style:{margin:"10px 10px 0px 10px",padding:"20px 20px 0px 20px"},children:Object(H.jsx)(Ve,{activeIndex:0===n,onClick:function(){return c(0)},children:"Project Details"})})},_e=function(){return Object(H.jsxs)(g.h,{margin:"20px",padding:"20px",flexDirection:"column",children:[Object(H.jsxs)(Ge,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{bold:!0,children:"No."}),Object(H.jsx)(g.p,{bold:!0,children:"Token Allocation"}),Object(H.jsx)(g.p,{bold:!0,children:"Date"}),Object(H.jsx)(g.p,{bold:!0,children:"Token(s) claimed"}),Object(H.jsx)(g.p,{bold:!0,children:"Action"})]}),Object(H.jsxs)(Ye,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{color:"textSubtle",children:"001"}),Object(H.jsx)(g.p,{color:"textSubtle",children:"159662.6 OWN"}),Object(H.jsx)(g.p,{color:"textSubtle",children:"06/24/2021"}),Object(H.jsx)(g.p,{color:"textSubtle",children:"OWNLY"}),Object(H.jsx)(g.p,{color:"textSubtle",children:"SWAP"})]})]})},Xe=function(e){var t,n,c=e.pool,o=e.project,r=Object(h.useContext)(v.ThemeContext),a=Object(C.b)().account,i=Object(h.useContext)(Be.a),l=Object(h.useState)(0),s=Object(k.a)(l,2),b=s[0],j=s[1],d=c.open,u=c.close,x=(c.cap,c.totalUserParticipated,c.totalFundsSwapped,Object(h.useCallback)((function(e){j(e)}),[])),p=Object(ke.a)().library,O=Object(ve.a)(o.category),m=Object(h.useState)({totalForSaleTokens:"-",totalSoldTokens:"-",remainingForSale:"-",totalSales:"-",expectedSales:"-",percentage:"00.00",tokenRate:"-",totalParticipants:"-"}),f=Object(k.a)(m,2),y=f[0],w=f[1];Object(h.useEffect)((function(){Object(Ce.a)(O,o).then((function(e){return w(e)}))}),[O,o,a,p]);var S=parseFloat(y.totalSales).toFixed(4);return Object(H.jsxs)(Je,{style:{backgroundColor:r.isDark?null===(t=i.customColors)||void 0===t?void 0:t.BG1:null===(n=i.customColors)||void 0===n?void 0:n.BG2},flexDirection:"column",children:[Object(H.jsx)("div",{style:{marginBottom:"10px",borderBottom:"1px solid ".concat(r.colors.primary)},children:Object(H.jsx)($e,{handleClick:x,activeIndex:b})}),0===b&&Object(H.jsxs)(g.h,{padding:"20px",margin:"20px",justifyContent:"space-between",children:[Object(H.jsxs)(g.h,{flex:"1",flexDirection:"column",marginRight:"10px",children:[Object(H.jsx)(g.i,{margin:"10px 0px 30px 0",bold:!0,children:"Pool Information"}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{children:"Opens"}),Object(H.jsx)(g.p,{color:"textSubtle",children:d})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{children:"Closes"}),Object(H.jsx)(g.p,{color:"textSubtle",children:u})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{children:"Cap"}),Object(H.jsxs)(g.p,{color:"textSubtle",children:[y.expectedSales," ",o.buyingCoin.symbol]})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{children:"Total Users Participated"}),Object(H.jsx)(g.p,{color:"textSubtle",children:y.totalParticipants})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{children:"Total Funds Swapped"}),Object(H.jsxs)(g.p,{color:"textSubtle",children:[S," ",o.buyingCoin.symbol]})]})]}),Object(H.jsxs)(g.h,{flex:"1",marginLeft:"10px",flexDirection:"column",children:[Object(H.jsx)(g.i,{margin:"10px 0px 30px 0px",bold:!0,children:"Token Information"}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{children:"Name"}),Object(H.jsx)(g.p,{color:"textSubtle",children:o.title})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{children:"Token Symbol"}),Object(H.jsx)(g.p,{color:"textSubtle",children:o.symbol})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{children:"Total Supply"}),Object(H.jsx)(g.p,{color:"textSubtle",children:o.ownSale.toLocaleString()})]})]})]}),a&&2===b&&Object(H.jsx)(_e,{})]})},qe=function(e){var t=e.tokenImage,n=e.symbol,c=e.allocation,o="".concat("","/images/icons/").concat(t);return Object(H.jsxs)("div",{style:{marginTop:"20px"},children:[Object(H.jsx)(g.p,{children:"My Allocations"}),Object(H.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(H.jsx)(Le,{src:o,alt:"token-logo"}),Object(H.jsxs)(g.p,{bold:!0,children:[c," ",n]})]})]})},Ke=function(e){var t,n,c=e.account,o=e.whiteListed,r=e.project,a=Object(h.useContext)(v.ThemeContext),i=Object(h.useContext)(Be.a),l=Object(y.c)(),s=Object(h.useState)({totalForSaleTokens:"-",totalSoldTokens:"-",remainingForSale:"-",totalSales:"-",expectedSales:"-",percentage:"00.00",tokenRate:"-",totalParticipants:"-"}),b=Object(k.a)(s,2),j=b[0],d=b[1],u=Object(h.useState)({balance:new S.TokenAmount(r.buyingCoin,BigInt(0)),amount:new S.TokenAmount(r.sellingCoin,BigInt(0)),maxPayableAmount:new S.TokenAmount(r.sellingCoin,BigInt(0)),maxExpendable:new S.TokenAmount(r.buyingCoin,BigInt(0)),rewardedAmount:new S.TokenAmount(r.sellingCoin,BigInt(0)),redeemed:!1,whitelist:!1}),x=Object(k.a)(u,2),p=x[0],O=x[1],m=Object(ke.a)().library,f=Object(ve.a)(r.category);Object(h.useEffect)((function(){Object(Ce.a)(f,r).then((function(e){return d(e)})),Object(Ce.b)(f,r,m,c).then((function(e){return O(e)})).catch(console.log)}),[f,r,c,m]);var w=Object(g.s)(Object(H.jsx)(Ie,{address:l,stats:j})),C=Object(k.a)(w,1)[0],T=("".concat(r.progress," ").concat(r.symbol),parseFloat(j.percentage).toFixed(4)),A=parseFloat(j.totalSoldTokens).toFixed(4),I=parseFloat(j.totalSales).toFixed(4),B=parseFloat(j.expectedSales).toFixed(2);return Object(H.jsxs)(g.f,{style:{width:"100%",backgroundColor:a.isDark?null===(t=i.customColors)||void 0===t?void 0:t.BG1:null===(n=i.customColors)||void 0===n?void 0:n.BG2,display:"flex",flexDirection:"column",justifyContent:"space-around"},children:[Object(H.jsxs)(W.e,{children:[Object(H.jsxs)(g.p,{bold:!0,as:"h1",fontSize:"24px",children:[A," ",Object(H.jsxs)("span",{style:{color:a.colors.textSubtle},children:[r.sellingCoin.name," Sold"]})]}),Object(H.jsx)(g.m,{primaryStep:parseFloat(T),variant:"flat"}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsxs)(g.p,{color:"textSubtle",children:[T,"%"]}),Object(H.jsxs)(g.p,{color:"textSubtle",children:[I," / ",B," ",r.buyingCoin.symbol]})]})]}),Object(H.jsxs)(Re,{flexDirection:"column",children:[Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{color:"textSubtle",children:"OWNLY Price"}),Object(H.jsxs)(g.p,{children:[j.tokenRate," ",r.buyingCoin.symbol]})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{color:"textSubtle",children:"OWNLY Sold"}),Object(H.jsxs)(g.p,{children:[j.totalSoldTokens," ",r.sellingCoin.symbol]})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{color:"textSubtle",children:"Total Raised"}),Object(H.jsxs)(g.p,{children:[j.totalSales," ",r.buyingCoin.symbol]})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{color:"primary",children:"Your Max Allocation"}),Object(H.jsx)(g.p,{children:"No Limit"})]}),Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsx)(g.p,{color:"primary",children:"Your Max BNB"}),Object(H.jsxs)(g.p,{children:[p.balance.toExact()," BNB"]})]})]}),c?o?Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(qe,{tokenImage:r.image,symbol:r.symbol,allocation:p.rewardedAmount.toExact()}),Object(H.jsxs)(g.b,{onClick:C,fullWidth:!0,style:{marginTop:"10px"},disabled:"-"===j.remainingForSale,children:["Purchase ",r.symbol]})]}):Object(H.jsx)(qe,{tokenImage:r.image,symbol:r.symbol,allocation:p.rewardedAmount.toExact()}):Object(H.jsx)("div",{style:{marginTop:"15px",padding:"10px 0px"},children:Object(H.jsx)(D.a,{fullWidth:!0})})]})},Qe=function(){var e=Object(C.b)().account,t=Object(h.useState)(!1),n=Object(k.a)(t,2),c=n[0],o=n[1],r=Object(y.c)(),a=Object(y.d)(r),i=Object(y.a)(e),l=Object(y.e)(r),s=a.title,b=a.image,j=a.longDesc,d=a.longDesc2,u=a.longDesc3,x=(a.buyingCoin,a.socMeds),p=a.wallpaperBg,O=a.status,m="".concat("","/images/icons/").concat(b),f=Object(B.g)();Object(h.useEffect)((function(){O!==F.a.active&&f.push("/projects")}),[f,O]),Object(h.useEffect)((function(){i[0][0]?o(!0):o(!1)}),[i]);var w=Object(h.useContext)(v.ThemeContext),S="".concat("","/images/icons/").concat(p);return Object(H.jsxs)(De,{children:[Object(H.jsxs)(Pe,{src:S,children:[Object(H.jsx)(ze,{src:m,alt:"token-image"}),Object(H.jsx)(g.i,{bold:!0,fontSize:"24px",children:s})]}),Object(H.jsx)(Me,{children:Object(H.jsxs)(g.h,{justifyContent:"space-between",children:[Object(H.jsxs)(g.h,{flex:"1",flexDirection:"column",padding:"10px",children:[Object(H.jsxs)(g.h,{alignItems:"center",justifyContent:"space-between",marginTop:"-20px",marginBottom:"10px",padding:"10px 0px",children:[Object(H.jsxs)(W.g,{children:[Object(H.jsx)(Ee.b,{href:null===x||void 0===x?void 0:x[0],children:Object(H.jsx)(T.a,{})}),Object(H.jsx)(Ee.b,{href:null===x||void 0===x?void 0:x[1],children:Object(H.jsx)(A.a,{fill:w.colors.text})}),Object(H.jsx)(Ee.b,{href:null===x||void 0===x?void 0:x[2],children:Object(H.jsx)(I.a,{fill:w.colors.text})}),Object(H.jsx)(Ee.b,{href:null===x||void 0===x?void 0:x[3],children:Object(H.jsx)(E.a,{width:24,Icon:Fe.a})})]}),O===F.a.active?Object(H.jsx)(Ne,{style:{backgroundColor:"#32a31b"},children:"LIVE NOW"}):O===F.a.upcoming?Object(H.jsx)(Ne,{style:{backgroundColor:"#7a1ba3"},children:"UPCOMING"}):Object(H.jsx)(Ne,{style:{backgroundColor:"#8e98a5"},children:"COMPLETED"})]}),Object(H.jsxs)(g.h,{flexDirection:"column",justifyContent:"space-between",children:[Object(H.jsx)(He,{color:"textSubtle",as:"p",children:j}),Object(H.jsx)(He,{color:"textSubtle",as:"p",children:d}),Object(H.jsx)(He,{color:"textSubtle",as:"p",children:u})]})]}),Object(H.jsx)(g.h,{flex:"1",children:Object(H.jsx)(Ke,{account:e,whiteListed:c,project:a})})]})}),Object(H.jsx)(We,{children:Object(H.jsx)(Xe,{pool:l,project:a})})]})},Ze=Object(v.default)(g.h)(ge||(ge=Object(p.a)(["\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    max-width: 1200px;\n    width: 100%;\n    margin: 0 auto;\n"]))),et=Object(v.default)(m.b)(ye||(ye=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    color: ",";\n"])),(function(e){return e.theme.colors.text}));t.default=function(e){var t=e.match.params.ProjectAddress,n=Object(y.g)(t),c=Object(y.b)((function(e){return e.projects.data.find((function(e){return e.address===n}))}));return Object(H.jsx)(w.a,{children:Object(H.jsxs)(Ze,{children:[Object(H.jsxs)(g.h,{style:{width:"100%",minHeight:"10vh"},flexDirection:"column",justifyContent:"space-between",marginTop:"20px",padding:"5px 0px",children:[Object(H.jsx)(g.i,{fontSize:"24px",bold:!0,children:" SparkLaunch "}),Object(H.jsxs)(g.h,{justifyContent:"space-between",marginBottom:"3px",children:[Object(H.jsxs)(g.a,{children:[Object(H.jsx)(g.p,{children:"SparkLaunch"}),Object(H.jsx)(g.p,{children:"On Going"}),Object(H.jsx)(g.p,{children:null===c||void 0===c?void 0:c.symbol})]}),Object(H.jsxs)(et,{to:"/projects",children:[Object(H.jsx)(f.a,{})," PROJECTS "]})]})]}),Object(H.jsx)(Qe,{})]})})}}}]);
//# sourceMappingURL=15.9090c557.chunk.js.map