(self.webpackChunkcryptocurrency_checker_app=self.webpackChunkcryptocurrency_checker_app||[]).push([[179],{1366:function(e,i,t){"use strict";var a,o,n,s,r,c,d,l,u,v,m,p,Z,_,f,h,g,y,N,k,C=t(4796),b=t(7294),S=t(3935),L=t(3391),w=t(3727),O=(0,b.createContext)(),x=function(e){var i=(0,b.useState)(null),t=(0,L.Z)(i,2),a=t[0],o=t[1],n=(0,b.useState)(!1),s=(0,L.Z)(n,2),r=s[0],c=s[1],d=(0,b.useState)([]),l=(0,L.Z)(d,2),u=l[0],v=l[1];return(0,b.useEffect)((function(){fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true").then((function(e){return e.json()})).then((function(e){c(!0),v(e)}),(function(e){c(!0),o(e)}))}),[]),(0,C.Z)(O.Provider,{value:{isLoaded:r,error:a,currency:u}},void 0,e.children)},U=t(1436),$=t(7625),B=function(){return a||(a=(0,C.Z)("div",{className:"loader"},void 0,(0,C.Z)($.G,{className:"loader__item",icon:U.UO1,spin:!0}),(0,C.Z)("p",{},void 0,"Loading...")))},D=function(){var e=(0,b.useContext)(O),i=e.error,t=e.isLoaded,a=e.currency,s=(0,b.useState)(""),r=(0,L.Z)(s,2),c=r[0],d=r[1];return i?(0,C.Z)("div",{},void 0,"Error: ",i.message):t?(0,C.Z)("div",{className:"currency-list"},void 0,(0,C.Z)("div",{},void 0,(0,C.Z)("input",{type:"text",className:"currency-list__searchField",onChange:function(e){return d(e.target.value)},placeholder:"Cryptocurrency name..."})),(0,C.Z)("ul",{},void 0,a.filter((function(e){return""==c||e.name.toLowerCase().includes(c.toLowerCase())?e:void 0})).map((function(e){return(0,C.Z)("li",{className:"currency-list__item"},e.id,(0,C.Z)("img",{className:"currency-list__img",src:e.image,alt:e.name}),(0,C.Z)("div",{},void 0,e.symbol.toUpperCase()),(0,C.Z)("div",{},void 0,e.name),(0,C.Z)("div",{},void 0,e.current_price,"$"),(0,C.Z)(w.rU,{to:"/details/".concat(e.id)},void 0,n||(n=(0,C.Z)("button",{className:"btn"},void 0,"Details"))))})))):o||(o=(0,C.Z)(B,{}))},E=function(){return s||(s=(0,C.Z)("div",{},void 0,(0,C.Z)("h1",{className:"title"},void 0,"Cryptocurrency List")))},F=t(5977),P=t(9009),j=t(85),K=t(3023),A=t(5358),G=t(4195),H=t(9307),T=t(827),I=function(e){return(0,C.Z)("div",{className:"chart"},void 0,r||(r=(0,C.Z)("h2",{className:"chart__title"},void 0,"Price in last 7d ($)")),(0,C.Z)(P.h,{width:"100%",height:"100%"},void 0,(0,C.Z)(j.T,{data:e.priceHistoryObj,margin:{top:10,right:30,left:0,bottom:30}},void 0,c||(c=(0,C.Z)("defs",{},void 0,(0,C.Z)("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},void 0,(0,C.Z)("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),(0,C.Z)("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})))),d||(d=(0,C.Z)(K.K,{dataKey:"name"})),l||(l=(0,C.Z)(A.B,{})),u||(u=(0,C.Z)(G.q,{strokeDasharray:"3 3"})),v||(v=(0,C.Z)(H.u,{})),m||(m=(0,C.Z)(T.u,{type:"monotone",dataKey:"price",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"})))))},W=function(e){for(var i=[],t=0;t<=168;t++){var a=new Date(Date.now()-6048e5+3600*t*1e3).toLocaleString();i.push({name:a,price:e[t]})}return i},q=function(e){var i,t,a,o,n,s,r,c,d,l=e.match,u=(0,b.useState)(null),v=(0,L.Z)(u,2),m=v[0],k=v[1],S=(0,b.useState)(!1),w=(0,L.Z)(S,2),O=w[0],x=w[1],U=(0,b.useState)({market_data:{sparkline_7d:{price:!1}}}),$=(0,L.Z)(U,2),D=$[0],E=$[1],P=(0,F.k6)();return(0,b.useEffect)((function(){fetch("https://api.coingecko.com/api/v3/coins/".concat(l.params.id,"?localization=false&developer_data=false&sparkline=true")).then((function(e){return e.json()})).then((function(e){x(!0),E(e)}),(function(e){x(!0),k(e)}))}),[]),m?(0,C.Z)("div",{},void 0,"Error: ",m.message):O?(0,C.Z)("div",{className:"item"},void 0,(0,C.Z)("div",{className:"item__infos"},void 0,(0,C.Z)("div",{},void 0,(0,C.Z)("img",{className:"item__img",src:null===D||void 0===D||null===(i=D.image)||void 0===i?void 0:i.large}),(0,C.Z)("p",{className:"item__info"},void 0,Z||(Z=(0,C.Z)("span",{className:"item__details"},void 0,"Name:"))," ",D.name)),(0,C.Z)("div",{},void 0,(0,C.Z)("p",{className:"item__info"},void 0,_||(_=(0,C.Z)("span",{className:"item__details"},void 0,"Symbol:"))," ",null===D||void 0===D||null===(t=D.symbol)||void 0===t?void 0:t.toUpperCase()),(0,C.Z)("p",{className:"item__info"},void 0,f||(f=(0,C.Z)("span",{className:"item__details"},void 0,"Genesis date:"))," ",D.genesis_date),(0,C.Z)("p",{className:"item__info"},void 0,h||(h=(0,C.Z)("span",{className:"item__details"},void 0,"Current price:"))," ",null===D||void 0===D||null===(a=D.market_data)||void 0===a||null===(o=a.current_price)||void 0===o?void 0:o.usd,"$"),(0,C.Z)("p",{className:"item__info"},void 0,g||(g=(0,C.Z)("span",{className:"item__details"},void 0,"Price change in last 24h:"))," ",null===D||void 0===D||null===(n=D.market_data)||void 0===n?void 0:n.price_change_24h,"$"),(0,C.Z)("p",{className:"item__info"},void 0,y||(y=(0,C.Z)("span",{className:"item__details"},void 0,"High value in 24h:"))," ",null===D||void 0===D||null===(s=D.market_data)||void 0===s||null===(r=s.high_24h)||void 0===r?void 0:r.usd,"$"),(0,C.Z)("p",{className:"item__info"},void 0,N||(N=(0,C.Z)("span",{className:"item__details"},void 0,"Low value in 24h:"))," ",null===D||void 0===D||null===(c=D.market_data)||void 0===c||null===(d=c.low_24h)||void 0===d?void 0:d.usd,"$"))),(0,C.Z)("div",{className:"item__chart"},void 0,(0,C.Z)(I,{priceHistoryObj:W(D.market_data.sparkline_7d.price)})),(0,C.Z)("button",{className:"btn",onClick:function(){return P.goBack()}},void 0,"Back to list")):p||(p=(0,C.Z)(B,{}))};var z=function(){return k||(k=(0,C.Z)(w.VK,{},void 0,(0,C.Z)("div",{className:"App"},void 0,(0,C.Z)(x,{},void 0,(0,C.Z)(E,{}),(0,C.Z)(F.rs,{},void 0,(0,C.Z)(F.AW,{path:"/",exact:!0,component:D}))),(0,C.Z)(F.rs,{},void 0,(0,C.Z)(F.AW,{path:"/details/:id",component:q})))))},M=function(e){e&&e instanceof Function&&t.e(324).then(t.bind(t,2131)).then((function(i){var t=i.getCLS,a=i.getFID,o=i.getFCP,n=i.getLCP,s=i.getTTFB;t(e),a(e),o(e),n(e),s(e)}))};S.render((0,C.Z)(b.StrictMode,{},void 0,(0,C.Z)(z,{})),document.getElementById("root")),M()}},function(e){"use strict";e.O(0,[479,104,4,425,538,385,914,578,531,11,974,805,24,187],(function(){return i=1366,e(e.s=i);var i}));e.O()}]);