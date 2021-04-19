/*! For license information please see vendors.decimal.js-light.dc33b258.js.LICENSE.txt */
(self.webpackChunkcryptocurrency_checker_app=self.webpackChunkcryptocurrency_checker_app||[]).push([[24],{9887:function(r,e,t){var n;!function(i){"use strict";var o,s=1e9,u={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},c=!0,f="[DecimalError] ",h=f+"Invalid argument: ",l=f+"Exponent out of range: ",a=Math.floor,d=Math.pow,g=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,p=1e7,v=9007199254740991,w=a(1286742750677284.5),m={};function E(r,e){var t,n,i,o,s,u,f,h,l=r.constructor,a=l.precision;if(!r.s||!e.s)return e.s||(e=new l(r)),c?M(e,a):e;if(f=r.d,h=e.d,s=r.e,i=e.e,f=f.slice(),o=s-i){for(o<0?(n=f,o=-o,u=h.length):(n=h,i=s,u=f.length),o>(u=(s=Math.ceil(a/7))>u?s+1:u+1)&&(o=u,n.length=1),n.reverse();o--;)n.push(0);n.reverse()}for((u=f.length)-(o=h.length)<0&&(o=u,n=h,h=f,f=n),t=0;o;)t=(f[--o]=f[o]+h[o]+t)/p|0,f[o]%=p;for(t&&(f.unshift(t),++i),u=f.length;0==f[--u];)f.pop();return e.d=f,e.e=i,c?M(e,a):e}function N(r,e,t){if(r!==~~r||r<e||r>t)throw Error(h+r)}function x(r){var e,t,n,i=r.length-1,o="",s=r[0];if(i>0){for(o+=s,e=1;e<i;e++)(t=7-(n=r[e]+"").length)&&(o+=D(t)),o+=n;(t=7-(n=(s=r[e])+"").length)&&(o+=D(t))}else if(0===s)return"0";for(;s%10===0;)s/=10;return o+s}m.absoluteValue=m.abs=function(){var r=new this.constructor(this);return r.s&&(r.s=1),r},m.comparedTo=m.cmp=function(r){var e,t,n,i,o=this;if(r=new o.constructor(r),o.s!==r.s)return o.s||-r.s;if(o.e!==r.e)return o.e>r.e^o.s<0?1:-1;for(e=0,t=(n=o.d.length)<(i=r.d.length)?n:i;e<t;++e)if(o.d[e]!==r.d[e])return o.d[e]>r.d[e]^o.s<0?1:-1;return n===i?0:n>i^o.s<0?1:-1},m.decimalPlaces=m.dp=function(){var r=this,e=r.d.length-1,t=7*(e-r.e);if(e=r.d[e])for(;e%10==0;e/=10)t--;return t<0?0:t},m.dividedBy=m.div=function(r){return O(this,new this.constructor(r))},m.dividedToIntegerBy=m.idiv=function(r){var e=this.constructor;return M(O(this,new e(r),0,1),e.precision)},m.equals=m.eq=function(r){return!this.cmp(r)},m.exponent=function(){return L(this)},m.greaterThan=m.gt=function(r){return this.cmp(r)>0},m.greaterThanOrEqualTo=m.gte=function(r){return this.cmp(r)>=0},m.isInteger=m.isint=function(){return this.e>this.d.length-2},m.isNegative=m.isneg=function(){return this.s<0},m.isPositive=m.ispos=function(){return this.s>0},m.isZero=function(){return 0===this.s},m.lessThan=m.lt=function(r){return this.cmp(r)<0},m.lessThanOrEqualTo=m.lte=function(r){return this.cmp(r)<1},m.logarithm=m.log=function(r){var e,t=this,n=t.constructor,i=n.precision,s=i+5;if(void 0===r)r=new n(10);else if((r=new n(r)).s<1||r.eq(o))throw Error(f+"NaN");if(t.s<1)throw Error(f+(t.s?"NaN":"-Infinity"));return t.eq(o)?new n(0):(c=!1,e=O(q(t,s),q(r,s),s),c=!0,M(e,i))},m.minus=m.sub=function(r){var e=this;return r=new e.constructor(r),e.s==r.s?A(e,r):E(e,(r.s=-r.s,r))},m.modulo=m.mod=function(r){var e,t=this,n=t.constructor,i=n.precision;if(!(r=new n(r)).s)throw Error(f+"NaN");return t.s?(c=!1,e=O(t,r,0,1).times(r),c=!0,t.minus(e)):M(new n(t),i)},m.naturalExponential=m.exp=function(){return b(this)},m.naturalLogarithm=m.ln=function(){return q(this)},m.negated=m.neg=function(){var r=new this.constructor(this);return r.s=-r.s||0,r},m.plus=m.add=function(r){var e=this;return r=new e.constructor(r),e.s==r.s?E(e,r):A(e,(r.s=-r.s,r))},m.precision=m.sd=function(r){var e,t,n,i=this;if(void 0!==r&&r!==!!r&&1!==r&&0!==r)throw Error(h+r);if(e=L(i)+1,t=7*(n=i.d.length-1)+1,n=i.d[n]){for(;n%10==0;n/=10)t--;for(n=i.d[0];n>=10;n/=10)t++}return r&&e>t?e:t},m.squareRoot=m.sqrt=function(){var r,e,t,n,i,o,s,u=this,h=u.constructor;if(u.s<1){if(!u.s)return new h(0);throw Error(f+"NaN")}for(r=L(u),c=!1,0==(i=Math.sqrt(+u))||i==1/0?(((e=x(u.d)).length+r)%2==0&&(e+="0"),i=Math.sqrt(e),r=a((r+1)/2)-(r<0||r%2),n=new h(e=i==1/0?"5e"+r:(e=i.toExponential()).slice(0,e.indexOf("e")+1)+r)):n=new h(i.toString()),i=s=(t=h.precision)+3;;)if(n=(o=n).plus(O(u,o,s+2)).times(.5),x(o.d).slice(0,s)===(e=x(n.d)).slice(0,s)){if(e=e.slice(s-3,s+1),i==s&&"4999"==e){if(M(o,t+1,0),o.times(o).eq(u)){n=o;break}}else if("9999"!=e)break;s+=4}return c=!0,M(n,t)},m.times=m.mul=function(r){var e,t,n,i,o,s,u,f,h,l=this,a=l.constructor,d=l.d,g=(r=new a(r)).d;if(!l.s||!r.s)return new a(0);for(r.s*=l.s,t=l.e+r.e,(f=d.length)<(h=g.length)&&(o=d,d=g,g=o,s=f,f=h,h=s),o=[],n=s=f+h;n--;)o.push(0);for(n=h;--n>=0;){for(e=0,i=f+n;i>n;)u=o[i]+g[n]*d[i-n-1]+e,o[i--]=u%p|0,e=u/p|0;o[i]=(o[i]+e)%p|0}for(;!o[--s];)o.pop();return e?++t:o.shift(),r.d=o,r.e=t,c?M(r,a.precision):r},m.toDecimalPlaces=m.todp=function(r,e){var t=this,n=t.constructor;return t=new n(t),void 0===r?t:(N(r,0,s),void 0===e?e=n.rounding:N(e,0,8),M(t,r+L(t)+1,e))},m.toExponential=function(r,e){var t,n=this,i=n.constructor;return void 0===r?t=P(n,!0):(N(r,0,s),void 0===e?e=i.rounding:N(e,0,8),t=P(n=M(new i(n),r+1,e),!0,r+1)),t},m.toFixed=function(r,e){var t,n,i=this,o=i.constructor;return void 0===r?P(i):(N(r,0,s),void 0===e?e=o.rounding:N(e,0,8),t=P((n=M(new o(i),r+L(i)+1,e)).abs(),!1,r+L(n)+1),i.isneg()&&!i.isZero()?"-"+t:t)},m.toInteger=m.toint=function(){var r=this,e=r.constructor;return M(new e(r),L(r)+1,e.rounding)},m.toNumber=function(){return+this},m.toPower=m.pow=function(r){var e,t,n,i,s,u,h=this,l=h.constructor,d=+(r=new l(r));if(!r.s)return new l(o);if(!(h=new l(h)).s){if(r.s<1)throw Error(f+"Infinity");return h}if(h.eq(o))return h;if(n=l.precision,r.eq(o))return M(h,n);if(u=(e=r.e)>=(t=r.d.length-1),s=h.s,u){if((t=d<0?-d:d)<=v){for(i=new l(o),e=Math.ceil(n/7+4),c=!1;t%2&&k((i=i.times(h)).d,e),0!==(t=a(t/2));)k((h=h.times(h)).d,e);return c=!0,r.s<0?new l(o).div(i):M(i,n)}}else if(s<0)throw Error(f+"NaN");return s=s<0&&1&r.d[Math.max(e,t)]?-1:1,h.s=1,c=!1,i=r.times(q(h,n+12)),c=!0,(i=b(i)).s=s,i},m.toPrecision=function(r,e){var t,n,i=this,o=i.constructor;return void 0===r?n=P(i,(t=L(i))<=o.toExpNeg||t>=o.toExpPos):(N(r,1,s),void 0===e?e=o.rounding:N(e,0,8),n=P(i=M(new o(i),r,e),r<=(t=L(i))||t<=o.toExpNeg,r)),n},m.toSignificantDigits=m.tosd=function(r,e){var t=this.constructor;return void 0===r?(r=t.precision,e=t.rounding):(N(r,1,s),void 0===e?e=t.rounding:N(e,0,8)),M(new t(this),r,e)},m.toString=m.valueOf=m.val=m.toJSON=function(){var r=this,e=L(r),t=r.constructor;return P(r,e<=t.toExpNeg||e>=t.toExpPos)};var O=function(){function r(r,e){var t,n=0,i=r.length;for(r=r.slice();i--;)t=r[i]*e+n,r[i]=t%p|0,n=t/p|0;return n&&r.unshift(n),r}function e(r,e,t,n){var i,o;if(t!=n)o=t>n?1:-1;else for(i=o=0;i<t;i++)if(r[i]!=e[i]){o=r[i]>e[i]?1:-1;break}return o}function t(r,e,t){for(var n=0;t--;)r[t]-=n,n=r[t]<e[t]?1:0,r[t]=n*p+r[t]-e[t];for(;!r[0]&&r.length>1;)r.shift()}return function(n,i,o,s){var u,c,h,l,a,d,g,v,w,m,E,N,x,O,b,_,D,q,y=n.constructor,A=n.s==i.s?1:-1,P=n.d,k=i.d;if(!n.s)return new y(n);if(!i.s)throw Error(f+"Division by zero");for(c=n.e-i.e,D=k.length,b=P.length,v=(g=new y(A)).d=[],h=0;k[h]==(P[h]||0);)++h;if(k[h]>(P[h]||0)&&--c,(N=null==o?o=y.precision:s?o+(L(n)-L(i))+1:o)<0)return new y(0);if(N=N/7+2|0,h=0,1==D)for(l=0,k=k[0],N++;(h<b||l)&&N--;h++)x=l*p+(P[h]||0),v[h]=x/k|0,l=x%k|0;else{for((l=p/(k[0]+1)|0)>1&&(k=r(k,l),P=r(P,l),D=k.length,b=P.length),O=D,m=(w=P.slice(0,D)).length;m<D;)w[m++]=0;(q=k.slice()).unshift(0),_=k[0],k[1]>=p/2&&++_;do{l=0,(u=e(k,w,D,m))<0?(E=w[0],D!=m&&(E=E*p+(w[1]||0)),(l=E/_|0)>1?(l>=p&&(l=p-1),1==(u=e(a=r(k,l),w,d=a.length,m=w.length))&&(l--,t(a,D<d?q:k,d))):(0==l&&(u=l=1),a=k.slice()),(d=a.length)<m&&a.unshift(0),t(w,a,m),-1==u&&(u=e(k,w,D,m=w.length))<1&&(l++,t(w,D<m?q:k,m)),m=w.length):0===u&&(l++,w=[0]),v[h++]=l,u&&w[0]?w[m++]=P[O]||0:(w=[P[O]],m=1)}while((O++<b||void 0!==w[0])&&N--)}return v[0]||v.shift(),g.e=c,M(g,s?o+L(g)+1:o)}}();function b(r,e){var t,n,i,s,u,f=0,h=0,a=r.constructor,g=a.precision;if(L(r)>16)throw Error(l+L(r));if(!r.s)return new a(o);for(null==e?(c=!1,u=g):u=e,s=new a(.03125);r.abs().gte(.1);)r=r.times(s),h+=5;for(u+=Math.log(d(2,h))/Math.LN10*2+5|0,t=n=i=new a(o),a.precision=u;;){if(n=M(n.times(r),u),t=t.times(++f),x((s=i.plus(O(n,t,u))).d).slice(0,u)===x(i.d).slice(0,u)){for(;h--;)i=M(i.times(i),u);return a.precision=g,null==e?(c=!0,M(i,g)):i}i=s}}function L(r){for(var e=7*r.e,t=r.d[0];t>=10;t/=10)e++;return e}function _(r,e,t){if(e>r.LN10.sd())throw c=!0,t&&(r.precision=t),Error(f+"LN10 precision limit exceeded");return M(new r(r.LN10),e)}function D(r){for(var e="";r--;)e+="0";return e}function q(r,e){var t,n,i,s,u,h,l,a,d,g=1,p=r,v=p.d,w=p.constructor,m=w.precision;if(p.s<1)throw Error(f+(p.s?"NaN":"-Infinity"));if(p.eq(o))return new w(0);if(null==e?(c=!1,a=m):a=e,p.eq(10))return null==e&&(c=!0),_(w,a);if(a+=10,w.precision=a,n=(t=x(v)).charAt(0),s=L(p),!(Math.abs(s)<15e14))return l=_(w,a+2,m).times(s+""),p=q(new w(n+"."+t.slice(1)),a-10).plus(l),w.precision=m,null==e?(c=!0,M(p,m)):p;for(;n<7&&1!=n||1==n&&t.charAt(1)>3;)n=(t=x((p=p.times(r)).d)).charAt(0),g++;for(s=L(p),n>1?(p=new w("0."+t),s++):p=new w(n+"."+t.slice(1)),h=u=p=O(p.minus(o),p.plus(o),a),d=M(p.times(p),a),i=3;;){if(u=M(u.times(d),a),x((l=h.plus(O(u,new w(i),a))).d).slice(0,a)===x(h.d).slice(0,a))return h=h.times(2),0!==s&&(h=h.plus(_(w,a+2,m).times(s+""))),h=O(h,new w(g),a),w.precision=m,null==e?(c=!0,M(h,m)):h;h=l,i+=2}}function y(r,e){var t,n,i;for((t=e.indexOf("."))>-1&&(e=e.replace(".","")),(n=e.search(/e/i))>0?(t<0&&(t=n),t+=+e.slice(n+1),e=e.substring(0,n)):t<0&&(t=e.length),n=0;48===e.charCodeAt(n);)++n;for(i=e.length;48===e.charCodeAt(i-1);)--i;if(e=e.slice(n,i)){if(i-=n,t=t-n-1,r.e=a(t/7),r.d=[],n=(t+1)%7,t<0&&(n+=7),n<i){for(n&&r.d.push(+e.slice(0,n)),i-=7;n<i;)r.d.push(+e.slice(n,n+=7));n=7-(e=e.slice(n)).length}else n-=i;for(;n--;)e+="0";if(r.d.push(+e),c&&(r.e>w||r.e<-w))throw Error(l+t)}else r.s=0,r.e=0,r.d=[0];return r}function M(r,e,t){var n,i,o,s,u,f,h,g,v=r.d;for(s=1,o=v[0];o>=10;o/=10)s++;if((n=e-s)<0)n+=7,i=e,h=v[g=0];else{if((g=Math.ceil((n+1)/7))>=(o=v.length))return r;for(h=o=v[g],s=1;o>=10;o/=10)s++;i=(n%=7)-7+s}if(void 0!==t&&(u=h/(o=d(10,s-i-1))%10|0,f=e<0||void 0!==v[g+1]||h%o,f=t<4?(u||f)&&(0==t||t==(r.s<0?3:2)):u>5||5==u&&(4==t||f||6==t&&(n>0?i>0?h/d(10,s-i):0:v[g-1])%10&1||t==(r.s<0?8:7))),e<1||!v[0])return f?(o=L(r),v.length=1,e=e-o-1,v[0]=d(10,(7-e%7)%7),r.e=a(-e/7)||0):(v.length=1,v[0]=r.e=r.s=0),r;if(0==n?(v.length=g,o=1,g--):(v.length=g+1,o=d(10,7-n),v[g]=i>0?(h/d(10,s-i)%d(10,i)|0)*o:0),f)for(;;){if(0==g){(v[0]+=o)==p&&(v[0]=1,++r.e);break}if(v[g]+=o,v[g]!=p)break;v[g--]=0,o=1}for(n=v.length;0===v[--n];)v.pop();if(c&&(r.e>w||r.e<-w))throw Error(l+L(r));return r}function A(r,e){var t,n,i,o,s,u,f,h,l,a,d=r.constructor,g=d.precision;if(!r.s||!e.s)return e.s?e.s=-e.s:e=new d(r),c?M(e,g):e;if(f=r.d,a=e.d,n=e.e,h=r.e,f=f.slice(),s=h-n){for((l=s<0)?(t=f,s=-s,u=a.length):(t=a,n=h,u=f.length),s>(i=Math.max(Math.ceil(g/7),u)+2)&&(s=i,t.length=1),t.reverse(),i=s;i--;)t.push(0);t.reverse()}else{for((l=(i=f.length)<(u=a.length))&&(u=i),i=0;i<u;i++)if(f[i]!=a[i]){l=f[i]<a[i];break}s=0}for(l&&(t=f,f=a,a=t,e.s=-e.s),u=f.length,i=a.length-u;i>0;--i)f[u++]=0;for(i=a.length;i>s;){if(f[--i]<a[i]){for(o=i;o&&0===f[--o];)f[o]=p-1;--f[o],f[i]+=p}f[i]-=a[i]}for(;0===f[--u];)f.pop();for(;0===f[0];f.shift())--n;return f[0]?(e.d=f,e.e=n,c?M(e,g):e):new d(0)}function P(r,e,t){var n,i=L(r),o=x(r.d),s=o.length;return e?(t&&(n=t-s)>0?o=o.charAt(0)+"."+o.slice(1)+D(n):s>1&&(o=o.charAt(0)+"."+o.slice(1)),o=o+(i<0?"e":"e+")+i):i<0?(o="0."+D(-i-1)+o,t&&(n=t-s)>0&&(o+=D(n))):i>=s?(o+=D(i+1-s),t&&(n=t-i-1)>0&&(o=o+"."+D(n))):((n=i+1)<s&&(o=o.slice(0,n)+"."+o.slice(n)),t&&(n=t-s)>0&&(i+1===s&&(o+="."),o+=D(n))),r.s<0?"-"+o:o}function k(r,e){if(r.length>e)return r.length=e,!0}function R(r){if(!r||"object"!==typeof r)throw Error(f+"Object expected");var e,t,n,i=["precision",1,s,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(e=0;e<i.length;e+=3)if(void 0!==(n=r[t=i[e]])){if(!(a(n)===n&&n>=i[e+1]&&n<=i[e+2]))throw Error(h+t+": "+n);this[t]=n}if(void 0!==(n=r[t="LN10"])){if(n!=Math.LN10)throw Error(h+t+": "+n);this[t]=new this(n)}return this}(u=function r(e){var t,n,i;function o(r){var e=this;if(!(e instanceof o))return new o(r);if(e.constructor=o,r instanceof o)return e.s=r.s,e.e=r.e,void(e.d=(r=r.d)?r.slice():r);if("number"===typeof r){if(0*r!==0)throw Error(h+r);if(r>0)e.s=1;else{if(!(r<0))return e.s=0,e.e=0,void(e.d=[0]);r=-r,e.s=-1}return r===~~r&&r<1e7?(e.e=0,void(e.d=[r])):y(e,r.toString())}if("string"!==typeof r)throw Error(h+r);if(45===r.charCodeAt(0)?(r=r.slice(1),e.s=-1):e.s=1,!g.test(r))throw Error(h+r);y(e,r)}if(o.prototype=m,o.ROUND_UP=0,o.ROUND_DOWN=1,o.ROUND_CEIL=2,o.ROUND_FLOOR=3,o.ROUND_HALF_UP=4,o.ROUND_HALF_DOWN=5,o.ROUND_HALF_EVEN=6,o.ROUND_HALF_CEIL=7,o.ROUND_HALF_FLOOR=8,o.clone=r,o.config=o.set=R,void 0===e&&(e={}),e)for(i=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<i.length;)e.hasOwnProperty(n=i[t++])||(e[n]=this[n]);return o.config(e),o}(u)).default=u.Decimal=u,o=new u(1),void 0===(n=function(){return u}.call(e,t,e,r))||(r.exports=n)}()}}]);