(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[3],{1088:function(e,t,n){"use strict";n(1);var a=n(2),c=n(40),i=n(15),o=n(154),r=n(47),s=n(70),u=n(48),l=n(0),d=function(e){var t=e.cakeToDisplay,n=e.dollarValueToDisplay,c=e.dateStringToDisplay,o=Object(i.b)().t,r=Object(a.xc)(Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u.a,{fontSize:"16px",value:t,decimals:3,bold:!0,unit:" CAKE"}),Object(l.jsx)(u.a,{fontSize:"16px",value:n,decimals:2,bold:!0,prefix:"~$"}),o("Earned since your last action"),Object(l.jsx)(a.Xb,{children:c})]}),{placement:"bottom-end"}),s=r.targetRef,d=r.tooltip,b=r.tooltipVisible;return Object(l.jsxs)(l.Fragment,{children:[b&&d,Object(l.jsx)(a.fc,{ref:s,small:!0,children:Object(l.jsx)(u.a,{fontSize:"14px",value:t})})]})};t.a=function(e){var t=e.vaultKey,n=Object(i.b)().t,u=Object(c.c)().account,b=Object(r.k)(t),j=b.pricePerFullShare,O=b.userData,m=O.cakeAtLastUserAction,p=O.userShares,f=O.lastUserActionTime,x=Object(o.f)(),g=Object(s.d)(u,m,p,j,x.toNumber()),h=g.hasAutoEarnings,v=g.autoCakeToDisplay,P=g.autoUsdToDisplay,T=f&&1e3*parseInt(f),w=new Date(T).toLocaleString();return Object(l.jsxs)(a.T,{alignItems:"center",justifyContent:"space-between",children:[Object(l.jsx)(a.Xb,{fontSize:"14px",children:"".concat(n("Recent QBANKX profit"),":")}),h&&Object(l.jsx)(d,{cakeToDisplay:v,dollarValueToDisplay:P,dateStringToDisplay:w})]})}},820:function(e,t,n){"use strict";var a=n(3),c=n.n(a),i=n(11),o=n(10),r=n(5),s=n(1),u=n(82),l=n(40),d=n(110),b=n(15),j=n(112),O=n(60),m=n(0),p={approvalState:"idle",confirmState:"idle"},f=function(e,t){switch(t.type){case"requires_approval":return Object(r.a)(Object(r.a)({},e),{},{approvalState:"success"});case"approve_sending":return Object(r.a)(Object(r.a)({},e),{},{approvalState:"loading"});case"approve_receipt":return Object(r.a)(Object(r.a)({},e),{},{approvalState:"success"});case"approve_error":return Object(r.a)(Object(r.a)({},e),{},{approvalState:"fail"});case"confirm_sending":return Object(r.a)(Object(r.a)({},e),{},{confirmState:"loading"});case"confirm_receipt":return Object(r.a)(Object(r.a)({},e),{},{confirmState:"success"});case"confirm_error":return Object(r.a)(Object(r.a)({},e),{},{confirmState:"fail"});default:return e}};t.a=function(e){var t=e.onApprove,n=e.onConfirm,a=e.onRequiresApproval,r=e.onSuccess,x=void 0===r?u.noop:r,g=e.onApproveSuccess,h=void 0===g?u.noop:g,v=Object(b.b)().t,P=Object(l.c)().account,T=Object(s.useReducer)(f,p),w=Object(o.a)(T,2),I=w[0],k=w[1],U=Object(s.useRef)(a),C=Object(d.a)(),y=C.toastSuccess,A=C.toastError;return Object(s.useEffect)((function(){P&&U.current&&U.current().then((function(e){e&&k({type:"requires_approval"})}))}),[P,U,k]),{isApproving:"loading"===I.approvalState,isApproved:"success"===I.approvalState,isConfirming:"loading"===I.confirmState,isConfirmed:"success"===I.confirmState,hasApproveFailed:"fail"===I.approvalState,hasConfirmFailed:"fail"===I.confirmState,handleApprove:function(){var e=Object(i.a)(c.a.mark((function e(){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:return n=e.sent,y("".concat(v("Transaction Submitted"),"!"),Object(m.jsx)(O.b,{txHash:n.hash})),k({type:"approve_sending"}),e.next=8,n.wait();case 8:(a=e.sent).status&&(k({type:"approve_receipt"}),h({state:I,receipt:a})),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),k({type:"approve_error"}),Object(j.b)(e.t0),A(v("Error"),v("Please try again. Confirm the transaction and make sure you are paying enough gas!"));case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),handleConfirm:function(){var e=Object(i.a)(c.a.mark((function e(){var t,a,i,o=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:{},k({type:"confirm_sending"}),e.prev=2,e.next=5,n(t);case 5:return a=e.sent,y("".concat(v("Transaction Submitted"),"!"),Object(m.jsx)(O.b,{txHash:a.hash})),e.next=9,a.wait();case 9:(i=e.sent).status&&(k({type:"confirm_receipt"}),x({state:I,receipt:i})),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),k({type:"confirm_error"}),Object(j.b)(e.t0),A(v("Error"),v("Please try again. Confirm the transaction and make sure you are paying enough gas!"));case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}()}}},831:function(e,t,n){"use strict";var a,c,i,o,r,s=n(9),u=(n(1),n(6)),l=n(2),d=n(15),b=n(0);!function(e){e.ROW="row",e.SEQUENTIAL="sequential"}(r||(r={}));var j=u.e.div(a||(a=Object(s.a)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  "," {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),O=Object(u.e)(l.s)(c||(c=Object(s.a)(["\n  width: 100%;\n\n  "," {\n    min-width: 160px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),m={width:"24px",color:"textDisabled"},p=Object(u.e)(l.I).attrs(m)(i||(i=Object(s.a)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),f=Object(u.e)(l.G).attrs(m)(o||(o=Object(s.a)(["\n  display: block;\n\n  "," {\n    display: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),x=Object(b.jsx)(l.i,{spin:!0,color:"currentColor"});t.a=function(e){var t=e.isApproveDisabled,n=e.isApproving,a=e.isConfirming,c=e.isConfirmDisabled,i=e.onApprove,o=e.onConfirm,s=e.buttonArrangement,u=void 0===s?r.ROW:s,m=e.confirmLabel,g=e.confirmId,h=Object(d.b)().t,v=null!==m&&void 0!==m?m:h("Confirm");return u===r.ROW?Object(b.jsxs)(j,{children:[Object(b.jsx)(l.o,{children:Object(b.jsx)(O,{disabled:t,onClick:i,endIcon:n?x:void 0,isLoading:n,children:h(n?"Enabling":"Enable")})}),Object(b.jsxs)(l.T,{justifyContent:"center",children:[Object(b.jsx)(p,{}),Object(b.jsx)(f,{})]}),Object(b.jsx)(l.o,{children:Object(b.jsx)(O,{id:g,onClick:o,disabled:c,isLoading:a,endIcon:a?x:void 0,children:a?h("Confirming"):v})})]}):Object(b.jsx)(b.Fragment,{children:t?Object(b.jsx)(l.o,{children:Object(b.jsx)(O,{id:g,onClick:o,disabled:c,isLoading:a,endIcon:a?x:void 0,children:a?h("Confirming"):v})}):Object(b.jsx)(l.o,{children:Object(b.jsx)(O,{onClick:i,endIcon:n?x:void 0,isLoading:n,children:h(n?"Enabling":"Enable")})})})}},845:function(e,t,n){"use strict";var a=n(3),c=n.n(a),i=n(5),o=n(11),r=n(10),s=n(16),u=n.n(s),l=n(1),d=n(80),b=n(435),j=n(33),O=n(61),m=n(154),p=n(23),f=n(46),x=n(990),g=O.a.FixedNumber.from(1e10),h=function(e){return{raisingAmountPool:e?new u.a(e[0].toString()):p.c,offeringAmountPool:e?new u.a(e[1].toString()):p.c,limitPerUserInLP:e?new u.a(e[2].toString()):p.c,hasTax:!!e&&e[3],totalAmountPool:e?new u.a(e[4].toString()):p.c,sumTaxesOverflow:e?new u.a(e[5].toString()):p.c}};t.a=function(e){var t=e.address,n=e.releaseBlockNumber,a=Object(m.f)(),s=Object(m.c)(e.currency.symbol),u=e.currency===j.a.cake?a:s,v=Object(l.useState)({isInitialized:!1,status:"idle",blocksRemaining:0,secondsUntilStart:0,progress:5,secondsUntilEnd:0,poolBasic:{raisingAmountPool:p.c,offeringAmountPool:p.c,limitPerUserInLP:p.c,taxRate:0,totalAmountPool:p.c,sumTaxesOverflow:p.c},poolUnlimited:{raisingAmountPool:p.c,offeringAmountPool:p.c,limitPerUserInLP:p.c,taxRate:0,totalAmountPool:p.c,sumTaxesOverflow:p.c},thresholdPoints:void 0,startBlockNum:0,endBlockNum:0,numberPoints:0}),P=Object(r.a)(v,2),T=P[0],w=P[1],I=Object(l.useCallback)(function(){var e=Object(o.a)(c.a.mark((function e(a){var o,s,u,l,j,m,p,v,P,T,I,k,U,C,y,A,S,N;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.b)(b,[{address:t,name:"startBlock"},{address:t,name:"endBlock"},{address:t,name:"viewPoolInformation",params:[0]},{address:t,name:"viewPoolInformation",params:[1]},{address:t,name:"viewPoolTaxRateOverflow",params:[1]},{address:t,name:"numberPoints"},{address:t,name:"thresholdPoints"}]);case 2:o=e.sent,s=Object(r.a)(o,7),u=s[0],l=s[1],j=s[2],m=s[3],p=s[4],v=s[5],P=s[6],T=h(j),I=h(m),k=u?u[0].toNumber():0,U=l?l[0].toNumber():0,C=p?O.a.FixedNumber.from(p[0]).divUnsafe(g).toUnsafeFloat():0,y=Object(x.a)(a,k,U),A=U-k,S=U-a,N=a>k?(a-k)/A*100:(a-n)/(k-n)*100,w((function(e){return Object(i.a)(Object(i.a)({},e),{},{isInitialized:!0,secondsUntilEnd:S*d.e,secondsUntilStart:(k-a)*d.e,poolBasic:Object(i.a)(Object(i.a)({},T),{},{taxRate:0}),poolUnlimited:Object(i.a)(Object(i.a)({},I),{},{taxRate:C}),status:y,progress:N,blocksRemaining:S,startBlockNum:k,endBlockNum:U,thresholdPoints:P&&P[0],numberPoints:v?v[0].toNumber():0})}));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[n,t]);return Object(i.a)(Object(i.a)({},T),{},{currencyPriceInUSD:u,fetchIfoData:I})}},883:function(e,t,n){"use strict";var a=n(3),c=n.n(a),i=n(11),o=n(18),r=n(5),s=n(10),u=n(1),l=n(40),d=n(16),b=n.n(d),j=n(43),O=n(46),m=n(435),p=n(47),f=n(74),x=n(69),g=n(23),h=n(911),v={isInitialized:!1,poolBasic:{amountTokenCommittedInLP:g.c,offeringAmountInToken:g.c,refundingAmountInLP:g.c,taxAmountInLP:g.c,hasClaimed:!1,isPendingTx:!1},poolUnlimited:{amountTokenCommittedInLP:g.c,offeringAmountInToken:g.c,refundingAmountInLP:g.c,taxAmountInLP:g.c,hasClaimed:!1,isPendingTx:!1}};t.a=function(e){var t=Object(u.useState)(v),n=Object(s.a)(t,2),a=n[0],d=n[1],P=Object(x.b)(),T=Object(p.f)(),w=e.address,I=e.currency,k=Object(l.c)().account,U=Object(j.k)(w),C=Object(j.h)(I.address,!1),y=Object(h.a)(C,w),A=Object(u.useCallback)(Object(i.a)(c.a.mark((function e(){var t,n,a,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["viewUserInfo","viewUserOfferingAndRefundingAmountsForPools"].map((function(e){return{address:w,name:e,params:[k,[0,1]]}})),P(Object(f.i)({account:k})),e.next=4,Object(O.b)(m,t);case 4:n=e.sent,a=Object(s.a)(n,2),i=a[0],o=a[1],d((function(e){return Object(r.a)(Object(r.a)({},e),{},{isInitialized:!0,poolBasic:Object(r.a)(Object(r.a)({},e.poolBasic),{},{amountTokenCommittedInLP:new b.a(i[0][0].toString()),offeringAmountInToken:new b.a(o[0][0][0].toString()),refundingAmountInLP:new b.a(o[0][0][1].toString()),taxAmountInLP:new b.a(o[0][0][2].toString()),hasClaimed:i[1][0]}),poolUnlimited:Object(r.a)(Object(r.a)({},e.poolUnlimited),{},{amountTokenCommittedInLP:new b.a(i[0][1].toString()),offeringAmountInToken:new b.a(o[0][1][0].toString()),refundingAmountInLP:new b.a(o[0][1][1].toString()),taxAmountInLP:new b.a(o[0][1][2].toString()),hasClaimed:i[1][1]})})}));case 9:case"end":return e.stop()}}),e)}))),[k,w,P]),S=Object(u.useCallback)((function(){d(Object(r.a)({},v))}),[]),N=T.minus(a.poolBasic.amountTokenCommittedInLP).minus(a.poolUnlimited.amountTokenCommittedInLP),E={credit:T,creditLeft:b.a.maximum(g.c,N)};return Object(r.a)(Object(r.a)({},a),{},{allowance:y,contract:U,setPendingTx:function(e,t){return d((function(n){return Object(r.a)(Object(r.a)({},n),{},Object(o.a)({},t,Object(r.a)(Object(r.a)({},n[t]),{},{isPendingTx:e})))}))},setIsClaimed:function(e){d((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(o.a)({},e,Object(r.a)(Object(r.a)({},t[e]),{},{hasClaimed:!0})))}))},fetchIfoData:A,resetIfoData:S,ifoCredit:E})}},911:function(e,t,n){"use strict";var a=n(3),c=n.n(a),i=n(11),o=n(10),r=n(1),s=n(16),u=n.n(s),l=n(40),d=n(23);t.a=function(e,t,n){var a=Object(l.c)().account,s=Object(r.useState)(d.c),b=Object(o.a)(s,2),j=b[0],O=b[1];return Object(r.useEffect)((function(){a&&function(){var n=Object(i.a)(c.a.mark((function n(){var i;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.allowance(a,t);case 3:i=n.sent,O(new u.a(i.toString())),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}()()}),[a,t,e,n]),j}},990:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e,t,n){return 0===e?"idle":e<t?"coming_soon":e>=t&&e<=n?"live":e>n?"finished":"idle"}},991:function(e,t,n){"use strict";n.d(t,"a",(function(){return G}));var a,c,i=n(18),o=n(10),r=n(9),s=n(1),u=(n(587),n(6)),l=n(4),d=n(2),b=n(194),j=n(328),O=n(330),m=n(15),p=n(213),f=n(505),x=n(134),g=n(37),h=n(524),v=n(236),P=n(26),T=n(522),w=n(506),I=n(127),k=n(507),U=n(508),C=n(509),y=n(113),A=n(39),S=n(20),N=n(66),E=n(81),L=n(510),D=n(289),B=n(24),R=n(129),F=n(45),_=n(331),M=n(87),z=n(223),H=n(302),V=n(523),W=n(409),X=n(0),q=Object(u.e)(d.Xb)(a||(a=Object(r.a)(["\n  font-size: 12px;\n  font-weight: bold;\n  color: white;\n"]))),Q=Object(u.e)(d.X)(c||(c=Object(r.a)(["\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);\n  background-color:  rgba(255,255,255,0.1);\n  .icon-up-down {\n    display: none;\n  }\n  &:hover {\n    background-color:  rgba(255,255,255,0.1);\n    .icon-down {\n      display: none;\n      fill: white;\n    }\n    .icon-up-down {\n      display: block;\n      fill: white;\n    }\n  }\n"])));function G(e){var t,n,a,c,r,u,G,K,J,$,Y,Z=e.history,ee=Object(R.b)(),te=Object(m.b)().t,ne=Object(d.vc)().isMobile,ae=Object(s.useState)(!1),ce=Object(o.a)(ae,2),ie=ce[0],oe=(ce[1],Object(F.d)(ne)),re=Object(o.a)(oe,2),se=re[0],ue=re[1],le=Object(s.useState)(se),de=Object(o.a)(le,2),be=de[0];de[1];Object(s.useEffect)((function(){ue(be)}),[be,ue]);var je=[Object(N.c)(null===ee||void 0===ee?void 0:ee.inputCurrencyId),Object(N.c)(null===ee||void 0===ee?void 0:ee.outputCurrencyId)],Oe=je[0],me=je[1],pe=Object(s.useMemo)((function(){var e,t;return null!==(e=null===(t=[Oe,me])||void 0===t?void 0:t.filter((function(e){return e instanceof l.j})))&&void 0!==e?e:[]}),[Oe,me]),fe=Object(N.b)(),xe=pe&&pe.filter((function(e){return!(e.address in fe)})),ge=Object(S.a)().account,he=Object(F.e)(),ve=Object(o.a)(he,1)[0],Pe=Object(F.t)(),Te=Object(o.a)(Pe,1)[0],we=Object(R.f)(),Ie=we.independentField,ke=we.typedValue,Ue=we.recipient,Ce=Object(R.c)(),ye=Ce.v2Trade,Ae=Ce.currencyBalances,Se=Ce.parsedAmount,Ne=Ce.currencies,Ee=Ce.inputError,Le=Object(R.f)(),De=(Le[B.a.INPUT].currencyId,Le[B.a.OUTPUT].currencyId,Object(D.b)(Ne[B.a.INPUT],Ne[B.a.OUTPUT],ke)),Be=De.wrapType,Re=De.execute,Fe=De.inputError,_e=Be!==D.a.NOT_APPLICABLE,Me=_e?void 0:ye,ze=(Object(R.d)(),_e?(t={},Object(i.a)(t,B.a.INPUT,Se),Object(i.a)(t,B.a.OUTPUT,Se),t):(n={},Object(i.a)(n,B.a.INPUT,Ie===B.a.INPUT?Se:null===Me||void 0===Me?void 0:Me.inputAmount),Object(i.a)(n,B.a.OUTPUT,Ie===B.a.OUTPUT?Se:null===Me||void 0===Me?void 0:Me.outputAmount),n)),He=Object(R.e)(),Ve=He.onSwitchTokens,We=He.onCurrencySelection,Xe=He.onUserInput,qe=He.onChangeRecipient,Qe=!Ee,Ge=Ie===B.a.INPUT?B.a.OUTPUT:B.a.INPUT,Ke=Object(s.useCallback)((function(e){Xe(B.a.INPUT,e)}),[Xe]),Je=Object(s.useCallback)((function(e){Xe(B.a.OUTPUT,e)}),[Xe]),$e=Object(s.useState)({tradeToConfirm:void 0,attemptingTxn:!1,swapErrorMessage:void 0,txHash:void 0}),Ye=Object(o.a)($e,2),Ze=Ye[0],et=Ze.tradeToConfirm,tt=Ze.swapErrorMessage,nt=Ze.attemptingTxn,at=Ze.txHash,ct=Ye[1],it=(G={},Object(i.a)(G,Ie,ke),Object(i.a)(G,Ge,_e?null!==(a=null===(c=ze[Ie])||void 0===c?void 0:c.toExact())&&void 0!==a?a:"":null!==(r=null===(u=ze[Ge])||void 0===u?void 0:u.toSignificant(6))&&void 0!==r?r:""),G),ot=null===Me||void 0===Me?void 0:Me.route,rt=Boolean(Ne[B.a.INPUT]&&Ne[B.a.OUTPUT]&&(null===(K=ze[Ie])||void 0===K?void 0:K.greaterThan(l.e.BigInt(0)))),st=!ot,ut=Object(E.c)(Me,Te),lt=Object(o.a)(ut,2),dt=lt[0],bt=lt[1],jt=Object(s.useState)(!1),Ot=Object(o.a)(jt,2),mt=Ot[0],pt=Ot[1];Object(s.useEffect)((function(){dt===E.a.PENDING&&pt(!0)}),[dt,mt]);var ft=Object(_.a)(Ae[B.a.INPUT]),xt=Boolean(ft&&(null===(J=ze[B.a.INPUT])||void 0===J?void 0:J.equalTo(ft))),gt=Object(L.a)(Me,Te,Ue),ht=gt.callback,vt=gt.error,Pt=Object(M.b)(Me).priceImpactWithoutFee,Tt=Object(F.s)(),wt=Object(o.a)(Tt,1)[0],It=Object(s.useCallback)((function(){Pt&&!Object(w.a)(Pt,te)||ht&&(ct({attemptingTxn:!0,tradeToConfirm:et,swapErrorMessage:void 0,txHash:void 0}),ht().then((function(e){ct({attemptingTxn:!1,tradeToConfirm:et,swapErrorMessage:void 0,txHash:e})})).catch((function(e){ct({attemptingTxn:!1,tradeToConfirm:et,swapErrorMessage:e.message,txHash:void 0})})))}),[Pt,ht,et,te]),kt=Object(s.useState)(!1),Ut=Object(o.a)(kt,2),Ct=Ut[0],yt=Ut[1],At=Object(M.e)(Pt),St=!Ee&&(dt===E.a.NOT_APPROVED||dt===E.a.PENDING||mt&&dt===E.a.APPROVED)&&!(At>3&&!ve),Nt=Object(s.useCallback)((function(){ct({tradeToConfirm:et,attemptingTxn:nt,swapErrorMessage:tt,txHash:at}),at&&Xe(B.a.INPUT,"")}),[nt,Xe,tt,et,at]),Et=Object(s.useCallback)((function(){ct({tradeToConfirm:Me,swapErrorMessage:tt,txHash:at,attemptingTxn:nt})}),[nt,tt,Me,at]),Lt=Object(s.useState)(null),Dt=Object(o.a)(Lt,2),Bt=Dt[0],Rt=Dt[1],Ft=Object(d.wc)(Object(X.jsx)(V.a,{swapCurrency:Bt})),_t=Object(o.a)(Ft,1)[0],Mt=function(e){var t=Object.entries(p.a).find((function(t){var n=t[1];return e.address===n.address}));return Boolean(t)};Object(s.useEffect)((function(){Bt&&_t()}),[Bt]);var zt=Object(s.useCallback)((function(e){pt(!1),We(B.a.INPUT,e);var t=Mt(e);Rt(t?e:null)}),[We]),Ht=Object(s.useCallback)((function(){ft&&Xe(B.a.INPUT,ft.toExact())}),[ft,Xe]),Vt=Object(s.useCallback)((function(e){We(B.a.OUTPUT,e);var t=Mt(e);Rt(t?e:null)}),[We]),Wt=Object(b.a)(null===Ne||void 0===Ne?void 0:Ne.INPUT,null===Ne||void 0===Ne?void 0:Ne.OUTPUT),Xt=Object(d.wc)(Object(X.jsx)(U.a,{tokens:xe,onCancel:function(){return Z.push("/swap")}})),qt=Object(o.a)(Xt,1)[0];Object(s.useEffect)((function(){xe.length>0&&qt()}),[xe.length]);var Qt=Object(d.wc)(Object(X.jsx)(h.a,{trade:Me,originalTrade:et,onAcceptChanges:Et,attemptingTxn:nt,txHash:at,recipient:Ue,allowedSlippage:Te,onConfirm:It,swapErrorMessage:tt,customOnDismiss:Nt}),!0,!0,"confirmSwapModal"),Gt=Object(o.a)(Qt,1)[0];return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(H.a,{removePadding:ie,hideFooterOnDesktop:ie,className:"transparent",children:Object(X.jsx)(d.T,{width:"100%",justifyContent:"center",position:"relative",children:Object(X.jsxs)(d.T,{flexDirection:"column",children:[Object(X.jsx)(W.b,{$isChartExpanded:ie,children:Object(X.jsxs)(W.a,{mt:ie?"24px":"0",children:[Object(X.jsx)("div",{className:"glass",children:Object(X.jsxs)(I.g,{id:"swap-page",className:"transparent",children:[Object(X.jsxs)(g.a,{gap:"md",children:[Object(X.jsx)(v.a,{label:Ie===B.a.OUTPUT&&!_e&&Me?te("From (estimated)"):te("From"),value:it[B.a.INPUT],showMaxButton:!xt,currency:Ne[B.a.INPUT],onUserInput:Ke,onMax:Ht,onCurrencySelect:zt,otherCurrency:Ne[B.a.OUTPUT],id:"swap-currency-input"}),Object(X.jsx)(g.a,{justify:"space-between",children:Object(X.jsxs)(P.a,{justify:ve?"space-between":"center",style:{padding:"0 1rem"},children:[Object(X.jsxs)(Q,{variant:"light",scale:"sm",onClick:function(){pt(!1),Ve()},children:[Object(X.jsx)(d.d,{className:"icon-down white"}),Object(X.jsx)(d.g,{className:"icon-up-down white"})]}),null===Ue&&!_e&&ve?Object(X.jsx)(d.s,{variant:"text",id:"add-recipient-button",onClick:function(){return qe("")},children:te("+ Add a send (optional)")}):null]})}),Object(X.jsx)(v.a,{value:it[B.a.OUTPUT],onUserInput:Je,label:Ie===B.a.INPUT&&!_e&&Me?te("To (estimated)"):te("To"),showMaxButton:!1,currency:Ne[B.a.OUTPUT],onCurrencySelect:Vt,otherCurrency:Ne[B.a.INPUT],id:"swap-currency-output1"}),ve&&null!==Ue&&!_e?Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(P.a,{justify:"space-between",style:{padding:"0 1rem"},children:[Object(X.jsx)(I.a,{clickable:!1,children:Object(X.jsx)(d.d,{width:"16px"})}),Object(X.jsx)(d.s,{variant:"text",id:"remove-recipient-button",onClick:function(){return qe(null)},children:te("- Remove send")})]}),Object(X.jsx)(f.a,{id:"recipient",value:Ue,onChange:qe})]}):null,_e?null:Object(X.jsxs)(g.a,{gap:"8px",style:{padding:"0 16px"},children:[Boolean(Me)&&Object(X.jsxs)(P.b,{align:"center",children:[Object(X.jsx)(q,{className:"white",children:te("Price")}),Object(X.jsx)(k.a,{price:null===Me||void 0===Me?void 0:Me.executionPrice,showInverted:Ct,setShowInverted:yt})]}),Te!==A.n&&Object(X.jsx)(P.b,{align:"center"})]})]}),Object(X.jsxs)(d.o,{mt:"1rem",children:[Wt?Object(X.jsx)(d.s,{width:"100%",disabled:!0,mb:"4px",children:te("Unsupported Asset")}):ge?_e?Object(X.jsx)(d.s,{width:"100%",disabled:Boolean(Fe),onClick:Re,children:null!==Fe&&void 0!==Fe?Fe:Be===D.a.WRAP?"Wrap":Be===D.a.UNWRAP?"Unwrap":null}):st&&rt?Object(X.jsxs)(x.a,{style:{textAlign:"center"},children:[Object(X.jsx)(d.Xb,{className:"white",color:"textSubtle",mb:"4px",children:te("Insufficient liquidity for this trade.")}),wt&&Object(X.jsx)(d.Xb,{color:"textSubtle",mb:"4px",children:te("Try enabling multi-hop trades.")})]}):St?Object(X.jsxs)(P.b,{children:[Object(X.jsx)(d.s,{variant:dt===E.a.APPROVED?"success":"primary",onClick:bt,disabled:dt!==E.a.NOT_APPROVED||mt,width:"48%",children:dt===E.a.PENDING?Object(X.jsxs)(P.a,{gap:"6px",justify:"center",children:[te("Enabling")," ",Object(X.jsx)(z.a,{stroke:"white"})]}):mt&&dt===E.a.APPROVED?te("Enabled"):te("Enable %asset%",{asset:null!==($=null===(Y=Ne[B.a.INPUT])||void 0===Y?void 0:Y.symbol)&&void 0!==$?$:""})}),Object(X.jsx)(d.s,{variant:Qe&&At>2?"danger":"primary",onClick:function(){ve?It():(ct({tradeToConfirm:Me,attemptingTxn:!1,swapErrorMessage:void 0,txHash:void 0}),Gt())},width:"48%",id:"swap-button",disabled:!Qe||dt!==E.a.APPROVED||At>3&&!ve,children:te(At>3&&!ve?"Price Impact High":At>2?"Swap Anyway":"Swap")})]}):Object(X.jsx)(d.s,{className:"button-swap",variant:Qe&&At>2&&!vt?"danger":"secondary",onClick:function(){ve?It():(ct({tradeToConfirm:Me,attemptingTxn:!1,swapErrorMessage:void 0,txHash:void 0}),Gt())},id:"swap-button",width:"100%",disabled:!Qe||At>3&&!ve||!!vt,children:Ee||te(At>3&&!ve?"Price Impact Too High":At>2?"Swap Anyway":"Swap")}):Object(X.jsx)(y.a,{width:"100%"}),St&&Object(X.jsx)(g.c,{style:{marginTop:"1rem"},children:Object(X.jsx)(C.a,{steps:[dt===E.a.APPROVED]})}),ve&&tt?Object(X.jsx)(I.d,{error:tt}):null]})]})}),Wt?Object(X.jsx)(j.a,{currencies:[Ne.INPUT,Ne.OUTPUT]}):Me&&Object(X.jsx)(T.a,{trade:Me})]})}),ie&&Object(X.jsx)(d.o,{display:["none",null,null,"block"],width:"100%",height:"100%",children:Object(X.jsx)(O.a,{variant:"side"})})]})})}),")"]})}},993:function(e,t,n){"use strict";var a=n(3),c=n.n(a),i=n(5),o=n(11),r=n(18),s=n(10),u=n(1),l=n(16),d=n.n(l),b=n(80),j=n(8),O=n(154),m=n(23),p=n(46),f=n(444),x=n(990);t.a=function(e){var t=e.address,n=e.releaseBlockNumber,a=Object(O.c)(e.currency.symbol),l=Object(u.useState)(Object(r.a)({isInitialized:!1,status:"idle",blocksRemaining:0,secondsUntilStart:0,progress:5,secondsUntilEnd:0,startBlockNum:0,endBlockNum:0,numberPoints:null,thresholdPoints:void 0},j.d.poolUnlimited,{raisingAmountPool:m.c,totalAmountPool:m.c,offeringAmountPool:m.c,limitPerUserInLP:m.c,taxRate:0,sumTaxesOverflow:m.c})),g=Object(s.a)(l,2),h=g[0],v=g[1],P=Object(u.useCallback)(function(){var e=Object(o.a)(c.a.mark((function e(a){var o,u,l,O,g,h,P,T,w,I,k,U,C;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=["startBlock","endBlock","raisingAmount","totalAmount"].map((function(e){return{address:t,name:e}})),e.next=3,Object(p.b)(f,o);case 3:u=e.sent,l=Object(s.a)(u,4),O=l[0],g=l[1],h=l[2],P=l[3],T=O?O[0].toNumber():0,w=g?g[0].toNumber():0,I=Object(x.a)(a,T,w),k=w-T,U=w-a,C=a>T?(a-T)/k*100:(a-n)/(T-n)*100,v((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(r.a)({isInitialized:!0,status:I,blocksRemaining:U,secondsUntilStart:(T-a)*b.e,progress:C,secondsUntilEnd:U*b.e,startBlockNum:T,endBlockNum:w},j.d.poolUnlimited,Object(i.a)(Object(i.a)({},e.poolUnlimited),{},{raisingAmountPool:h?new d.a(h[0].toString()):m.c,totalAmountPool:P?new d.a(P[0].toString()):m.c})))}));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t,n]);return Object(i.a)(Object(i.a)({},h),{},{currencyPriceInUSD:a,fetchIfoData:P})}},994:function(e,t,n){"use strict";var a=n(3),c=n.n(a),i=n(11),o=n(5),r=n(10),s=n(18),u=n(1),l=n(40),d=n(16),b=n.n(d),j=n(8),O=n(43),m=n(46),p=n(444),f=n(23),x=n(911),g=Object(s.a)({isInitialized:!1},j.d.poolUnlimited,{amountTokenCommittedInLP:f.c,hasClaimed:!1,isPendingTx:!1,offeringAmountInToken:f.c,refundingAmountInLP:f.c,taxAmountInLP:f.c});t.a=function(e){var t=Object(u.useState)(g),n=Object(r.a)(t,2),a=n[0],d=n[1],h=e.address,v=e.currency,P=a.poolUnlimited,T=Object(l.c)().account,w=Object(O.j)(h),I=Object(O.h)(v.address),k=Object(x.a)(I,h,P.isPendingTx),U=Object(u.useCallback)(Object(i.a)(c.a.mark((function e(){var t,n,a,i,u,l,O;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["getOfferingAmount","userInfo","getRefundingAmount"].map((function(e){return{address:h,name:e,params:[T]}})),e.next=3,Object(m.b)(p,t);case 3:n=e.sent,a=Object(r.a)(n,3),i=a[0],u=a[1],l=a[2],O=u?{amount:new b.a(u.amount.toString()),claimed:u.claimed}:{amount:f.c,claimed:!1},d((function(e){return Object(s.a)({isInitialized:!0},j.d.poolUnlimited,Object(o.a)(Object(o.a)({},e.poolUnlimited),{},{amountTokenCommittedInLP:O.amount,hasClaimed:O.claimed,offeringAmountInToken:i?new b.a(i[0].toString()):f.c,refundingAmountInLP:l?new b.a(l[0].toString()):f.c}))}));case 10:case"end":return e.stop()}}),e)}))),[T,h]),C=Object(u.useCallback)((function(){d(g)}),[]);return Object(o.a)(Object(o.a)({},a),{},{allowance:k,contract:w,setPendingTx:function(e){return d((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(s.a)({},j.d.poolUnlimited,Object(o.a)(Object(o.a)({},t.poolUnlimited),{},{isPendingTx:e})))}))},setIsClaimed:function(){d((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},j.d.poolUnlimited,Object(o.a)(Object(o.a)({},e.poolUnlimited),{},{hasClaimed:!0})))}))},fetchIfoData:U,resetIfoData:C})}},995:function(e,t,n){"use strict";var a=n(3),c=n.n(a),i=n(11),o=n(18),r=n(5),s=n(10),u=n(1),l=n(40),d=n(16),b=n.n(d),j=n(43),O=n(46),m=n(435),p=n(23),f=n(911),x={isInitialized:!1,poolBasic:{amountTokenCommittedInLP:p.c,offeringAmountInToken:p.c,refundingAmountInLP:p.c,taxAmountInLP:p.c,hasClaimed:!1,isPendingTx:!1},poolUnlimited:{amountTokenCommittedInLP:p.c,offeringAmountInToken:p.c,refundingAmountInLP:p.c,taxAmountInLP:p.c,hasClaimed:!1,isPendingTx:!1}};t.a=function(e){var t=Object(u.useState)(x),n=Object(s.a)(t,2),a=n[0],d=n[1],p=e.address,g=e.currency,h=Object(l.c)().account,v=Object(j.k)(p),P=Object(j.h)(g.address),T=Object(f.a)(P,p),w=Object(u.useCallback)(Object(i.a)(c.a.mark((function e(){var t,n,a,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["viewUserInfo","viewUserOfferingAndRefundingAmountsForPools"].map((function(e){return{address:p,name:e,params:[h,[0,1]]}})),e.next=3,Object(O.b)(m,t);case 3:n=e.sent,a=Object(s.a)(n,2),i=a[0],o=a[1],d((function(e){return Object(r.a)(Object(r.a)({},e),{},{isInitialized:!0,poolBasic:Object(r.a)(Object(r.a)({},e.poolBasic),{},{amountTokenCommittedInLP:new b.a(i[0][0].toString()),offeringAmountInToken:new b.a(o[0][0][0].toString()),refundingAmountInLP:new b.a(o[0][0][1].toString()),taxAmountInLP:new b.a(o[0][0][2].toString()),hasClaimed:i[1][0]}),poolUnlimited:Object(r.a)(Object(r.a)({},e.poolUnlimited),{},{amountTokenCommittedInLP:new b.a(i[0][1].toString()),offeringAmountInToken:new b.a(o[0][1][0].toString()),refundingAmountInLP:new b.a(o[0][1][1].toString()),taxAmountInLP:new b.a(o[0][1][2].toString()),hasClaimed:i[1][1]})})}));case 8:case"end":return e.stop()}}),e)}))),[h,p]),I=Object(u.useCallback)((function(){d(Object(r.a)({},x))}),[]);return Object(r.a)(Object(r.a)({},a),{},{allowance:T,contract:v,setPendingTx:function(e,t){return d((function(n){return Object(r.a)(Object(r.a)({},n),{},Object(o.a)({},t,Object(r.a)(Object(r.a)({},n[t]),{},{isPendingTx:e})))}))},setIsClaimed:function(e){d((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(o.a)({},e,Object(r.a)(Object(r.a)({},t[e]),{},{hasClaimed:!0})))}))},fetchIfoData:w,resetIfoData:I})}}}]);
//# sourceMappingURL=3.b4c1e406.chunk.js.map