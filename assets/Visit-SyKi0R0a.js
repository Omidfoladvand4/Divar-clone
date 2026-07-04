import{b as Ot,j as r,g as I,r as rt,a as _t,u as Ht}from"./index-BUf-kCgI.js";import{c as ct,b as Wt,N as Yt,A as at,d as st,r as Bt}from"./Navbar-SE7k27Ze.js";var ut={},Tt;function qt(){if(Tt)return ut;Tt=1,Object.defineProperty(ut,"__esModule",{value:!0});var E=Ot();function W(t){return Array.prototype.slice.call(t)}function Z(t,i){var e=Math.floor(t);return e===i||e+1===i?t:i}function tt(){return Date.now()}function G(t,i,e){if(i="data-keen-slider-"+i,e===null)return t.removeAttribute(i);t.setAttribute(i,e||"")}function N(t,i){return i=i||document,typeof t=="function"&&(t=t(i)),Array.isArray(t)?t:typeof t=="string"?W(i.querySelectorAll(t)):t instanceof HTMLElement?[t]:t instanceof NodeList?W(t):[]}function $(t){t.raw&&(t=t.raw),t.cancelable&&!t.defaultPrevented&&t.preventDefault()}function et(t){t.raw&&(t=t.raw),t.stopPropagation&&t.stopPropagation()}function nt(){var t=[];return{add:function(i,e,s,c){i.addListener?i.addListener(s):i.addEventListener(e,s,c),t.push([i,e,s,c])},input:function(i,e,s,c){this.add(i,e,(function(a){return function(o){o.nativeEvent&&(o=o.nativeEvent);var y=o.changedTouches||[],w=o.targetTouches||[],f=o.detail&&o.detail.x?o.detail:null;return a({id:f?f.identifier?f.identifier:"i":w[0]?w[0]?w[0].identifier:"e":"d",idChanged:f?f.identifier?f.identifier:"i":y[0]?y[0]?y[0].identifier:"e":"d",raw:o,x:f&&f.x?f.x:w[0]?w[0].screenX:f?f.x:o.pageX,y:f&&f.y?f.y:w[0]?w[0].screenY:f?f.y:o.pageY})}})(s),c)},purge:function(){t.forEach((function(i){i[0].removeListener?i[0].removeListener(i[2]):i[0].removeEventListener(i[1],i[2],i[3])})),t=[]}}}function K(t,i,e){return Math.min(Math.max(t,i),e)}function F(t){return(t>0?1:0)-(t<0?1:0)||+t}function wt(t){var i=t.getBoundingClientRect();return{height:Z(i.height,t.offsetHeight),width:Z(i.width,t.offsetWidth)}}function Y(t,i,e,s){var c=t&&t[i];return c==null?e:s&&typeof c=="function"?c():c}function U(t){return Math.round(1e6*t)/1e6}function jt(t,i){if(t===i)return!0;var e=typeof t;if(e!==typeof i)return!1;if(e!=="object"||t===null||i===null)return e==="function"&&t.toString()===i.toString();if(t.length!==i.length||Object.getOwnPropertyNames(t).length!==Object.getOwnPropertyNames(i).length)return!1;for(var s in t)if(!jt(t[s],i[s]))return!1;return!0}var it=function(){return it=Object.assign||function(t){for(var i,e=1,s=arguments.length;e<s;e++)for(var c in i=arguments[e])Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);return t},it.apply(this,arguments)};function yt(t,i,e){for(var s,c=0,a=i.length;c<a;c++)!s&&c in i||(s||(s=Array.prototype.slice.call(i,0,c)),s[c]=i[c]);return t.concat(s||Array.prototype.slice.call(i))}function Ct(t){var i,e,s,c,a,o;function y(M){o||(o=M),w(!0);var z=M-o;z>s&&(z=s);var x=c[e];if(x[3]<z)return e++,y(M);var T=x[2],C=x[4],v=x[0],m=x[1]*(0,x[5])(C===0?1:(z-T)/C);if(m&&t.track.to(v+m),z<s)return P();o=null,w(!1),f(null),t.emit("animationEnded")}function w(M){i.active=M}function f(M){i.targetIdx=M}function P(){var M;M=y,a=window.requestAnimationFrame(M)}function V(){var M;M=a,window.cancelAnimationFrame(M),w(!1),f(null),o&&t.emit("animationStopped"),o=null}return i={active:!1,start:function(M){if(V(),t.track.details){var z=0,x=t.track.details.position;e=0,s=0,c=M.map((function(T){var C,v=Number(x),m=(C=T.earlyExit)!==null&&C!==void 0?C:T.duration,h=T.easing,O=T.distance*h(m/T.duration)||0;x+=O;var S=s;return s+=m,z+=O,[v,T.distance,S,s,T.duration,h]})),f(t.track.distToIdx(z)),P(),t.emit("animationStarted")}},stop:V,targetIdx:null}}function Et(t){var i,e,s,c,a,o,y,w,f,P,V,M,z,x,T=1/0,C=[],v=null,m=0;function h(p){q(m+p)}function O(p){var l=S(m+p).abs;return k(l)?l:null}function S(p){var l=Math.floor(Math.abs(U(p/e))),n=U((p%e+e)%e);n===e&&(n=0);var b=F(p),u=y.indexOf(yt([],y).reduce((function(D,L){return Math.abs(L-n)<Math.abs(D-n)?L:D}))),j=u;return b<0&&l++,u===o&&(j=0,l+=b>0?1:-1),{abs:j+l*o*b,origin:u,rel:j}}function A(p,l,n){var b;if(l||!X())return d(p,n);if(!k(p))return null;var u=S(n??m),j=u.abs,D=p-u.rel,L=j+D;b=d(L);var _=d(L-o*F(D));return(_!==null&&Math.abs(_)<Math.abs(b)||b===null)&&(b=_),U(b)}function d(p,l){if(l==null&&(l=U(m)),!k(p)||p===null)return null;p=Math.round(p);var n=S(l),b=n.abs,u=n.rel,j=n.origin,D=B(p),L=(l%e+e)%e,_=y[j],J=Math.floor((p-(b-u))/o)*e;return U(_-L-_+y[D]+J+(j===o?e:0))}function k(p){return R(p)===p}function R(p){return K(p,f,P)}function X(){return c.loop}function B(p){return(p%o+o)%o}function q(p){var l;l=p-m,C.push({distance:l,timestamp:tt()}),C.length>6&&(C=C.slice(-6)),m=U(p);var n=g().abs;if(n!==v){var b=v!==null;v=n,b&&t.emit("slideChanged")}}function g(p){var l=p?null:(function(){if(o){var n=X(),b=n?(m%e+e)%e:m,u=(n?m%e:m)-a[0][2],j=0-(u<0&&n?e-Math.abs(u):u),D=0,L=S(m),_=L.abs,J=L.rel,dt=a[J][2],lt=a.map((function(Q,Rt){var H=j+D;(H<0-Q[0]||H>1)&&(H+=(Math.abs(H)>e-1&&n?e:0)*F(-H));var kt=Rt-J,Mt=F(kt),ot=kt+_;n&&(Mt===-1&&H>dt&&(ot+=o),Mt===1&&H<dt&&(ot-=o),V!==null&&ot<V&&(H+=e),M!==null&&ot>M&&(H-=e));var It=H+Q[0]+Q[1],Nt=Math.max(H>=0&&It<=1?1:It<0||H>1?0:H<0?Math.min(1,(Q[0]+H)/Q[0]):(1-H)/Q[0],0);return D+=Q[0]+Q[1],{abs:ot,distance:c.rtl?-1*H+1-Q[0]:H,portion:Nt,size:Q[0]}}));return _=R(_),J=B(_),{abs:R(_),length:s,max:x,maxIdx:P,min:z,minIdx:f,position:m,progress:n?b/e:m/s,rel:J,slides:lt,slidesLength:e}}})();return i.details=l,t.emit("detailsChanged"),l}return i={absToRel:B,add:h,details:null,distToIdx:O,idxToDist:A,init:function(p){if((function(){if(c=t.options,a=(c.trackConfig||[]).map((function(u){return[Y(u,"size",1),Y(u,"spacing",0),Y(u,"origin",0)]})),o=a.length){e=U(a.reduce((function(u,j){return u+j[0]+j[1]}),0));var n,b=o-1;s=U(e+a[0][2]-a[b][0]-a[b][2]-a[b][1]),y=a.reduce((function(u,j){if(!u)return[0];var D=a[u.length-1],L=u[u.length-1]+(D[0]+D[2])+D[1];return L-=j[2],u[u.length-1]>L&&(L=u[u.length-1]),L=U(L),u.push(L),(!n||n<L)&&(w=u.length-1),n=L,u}),null),s===0&&(w=0),y.push(U(e))}})(),!o)return g(!0);var l;(function(){var n=t.options.range,b=t.options.loop;V=f=b?Y(b,"min",-1/0):0,M=P=b?Y(b,"max",T):w;var u=Y(n,"min",null),j=Y(n,"max",null);u!==null&&(f=u),j!==null&&(P=j),z=f===-1/0?f:t.track.idxToDist(f||0,!0,0),x=P===T?P:A(P,!0,0),j===null&&(M=P),Y(n,"align",!1)&&P!==T&&a[B(P)][2]===0&&(x-=1-a[B(P)][0],P=O(x-m)),z=U(z),x=U(x)})(),l=p,Number(l)===l?h(d(R(p))):g()},to:q,velocity:function(){var p=tt(),l=C.reduce((function(n,b){var u=b.distance,j=b.timestamp;return p-j>200||(F(u)!==F(n.distance)&&n.distance&&(n={distance:0,lastTimestamp:0,time:0}),n.time&&(n.distance+=u),n.lastTimestamp&&(n.time+=j-n.lastTimestamp),n.lastTimestamp=j),n}),{distance:0,lastTimestamp:0,time:0});return l.distance/l.time||0}}}function St(t){var i,e,s,c,a,o,y,w;function f(v){return 2*v}function P(v){return K(v,y,w)}function V(v){return 1-Math.pow(1-v,3)}function M(){return s?t.track.velocity():0}function z(){C();var v=t.options.mode==="free-snap",m=t.track,h=M();c=F(h);var O=t.track.details,S=[];if(h||!v){var A=x(h),d=A.dist,k=A.dur;if(k=f(k),d*=c,v){var R=m.idxToDist(m.distToIdx(d),!0);R&&(d=R)}S.push({distance:d,duration:k,easing:V});var X=O.position,B=X+d;if(B<a||B>o){var q=B<a?a-X:o-X,g=0,p=h;if(F(q)===c){var l=Math.min(Math.abs(q)/Math.abs(d),1),n=(function(j){return 1-Math.pow(1-j,1/3)})(l)*k;S[0].earlyExit=n,p=h*(1-l)}else S[0].earlyExit=0,g+=q;var b=x(p,100),u=b.dist*c;t.options.rubberband&&(S.push({distance:u,duration:f(b.dur),easing:V}),S.push({distance:-u+g,duration:500,easing:V}))}t.animator.start(S)}else t.moveToIdx(P(O.abs),!0,{duration:500,easing:function(j){return 1+--j*j*j*j*j}})}function x(v,m){m===void 0&&(m=1e3);var h=147e-9+(v=Math.abs(v))/m;return{dist:Math.pow(v,2)/h,dur:v/h}}function T(){var v=t.track.details;v&&(a=v.min,o=v.max,y=v.minIdx,w=v.maxIdx)}function C(){t.animator.stop()}t.on("updated",T),t.on("optionsChanged",T),t.on("created",T),t.on("dragStarted",(function(){s=!1,C(),i=e=t.track.details.abs})),t.on("dragChecked",(function(){s=!0})),t.on("dragEnded",(function(){var v=t.options.mode;v==="snap"&&(function(){var m=t.track,h=t.track.details,O=h.position,S=F(M());(O>o||O<a)&&(S=0);var A=i+S;h.slides[m.absToRel(A)].portion===0&&(A-=S),i!==e&&(A=e),F(m.idxToDist(A,!0))!==S&&(A+=S),A=P(A);var d=m.idxToDist(A,!0);t.animator.start([{distance:d,duration:500,easing:function(k){return 1+--k*k*k*k*k}}])})(),v!=="free"&&v!=="free-snap"||z()})),t.on("dragged",(function(){e=t.track.details.abs}))}function Dt(t){var i,e,s,c,a,o,y,w,f,P,V,M,z,x,T,C,v,m,h=nt();function O(g){if(o&&w===g.id){var p=k(g);if(f){if(!d(g))return A(g);P=p,f=!1,t.emit("dragChecked")}if(C)return P=p;$(g);var l=(function(b){if(v===-1/0&&m===1/0)return b;var u=t.track.details,j=u.length,D=u.position,L=K(b,v-D,m-D);if(j===0)return 0;if(!t.options.rubberband)return L;if(D<=m&&D>=v||D<v&&e>0||D>m&&e<0)return b;var _=(D<v?D-v:D-m)/j,J=c*j,dt=Math.abs(_*J),lt=Math.max(0,1-dt/a*2);return lt*lt*b})(y(P-p)/c*s);e=F(l);var n=t.track.details.position;(n>v&&n<m||n===v&&e>0||n===m&&e<0)&&et(g),V+=l,!M&&Math.abs(V*c)>5&&(M=!0),t.track.add(l),P=p,t.emit("dragged")}}function S(g){!o&&t.track.details&&t.track.details.length&&(V=0,o=!0,M=!1,f=!0,w=g.id,d(g),P=k(g),t.emit("dragStarted"))}function A(g){o&&w===g.idChanged&&(o=!1,t.emit("dragEnded"))}function d(g){var p=R(),l=p?g.y:g.x,n=p?g.x:g.y,b=z!==void 0&&x!==void 0&&Math.abs(x-n)<=Math.abs(z-l);return z=l,x=n,b}function k(g){return R()?g.y:g.x}function R(){return t.options.vertical}function X(){c=t.size,a=R()?window.innerHeight:window.innerWidth;var g=t.track.details;g&&(v=g.min,m=g.max)}function B(g){M&&(et(g),$(g))}function q(){if(h.purge(),t.options.drag&&!t.options.disabled){var g;g=t.options.dragSpeed||1,y=typeof g=="function"?g:function(l){return l*g},s=t.options.rtl?-1:1,X(),i=t.container,(function(){var l="data-keen-slider-clickable";N("[".concat(l,"]:not([").concat(l,"=false])"),i).map((function(n){h.add(n,"dragstart",et),h.add(n,"mousedown",et),h.add(n,"touchstart",et)}))})(),h.add(i,"dragstart",(function(l){$(l)})),h.add(i,"click",B,{capture:!0}),h.input(i,"ksDragStart",S),h.input(i,"ksDrag",O),h.input(i,"ksDragEnd",A),h.input(i,"mousedown",S),h.input(i,"mousemove",O),h.input(i,"mouseleave",A),h.input(i,"mouseup",A),h.input(i,"touchstart",S,{passive:!0}),h.input(i,"touchmove",O,{passive:!1}),h.input(i,"touchend",A),h.input(i,"touchcancel",A),h.add(window,"wheel",(function(l){o&&$(l)}));var p="data-keen-slider-scrollable";N("[".concat(p,"]:not([").concat(p,"=false])"),t.container).map((function(l){return(function(n){var b;h.input(n,"touchstart",(function(u){b=k(u),C=!0,T=!0}),{passive:!0}),h.input(n,"touchmove",(function(u){var j=R(),D=j?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,L=b-k(u),_=j?n.scrollTop:n.scrollLeft,J=j&&n.style.overflowY==="scroll"||!j&&n.style.overflowX==="scroll";if(b=k(u),(L<0&&_>0||L>0&&_<D)&&T&&J)return C=!0;T=!1,$(u),C=!1})),h.input(n,"touchend",(function(){C=!1}))})(l)}))}}t.on("updated",X),t.on("optionsChanged",q),t.on("created",q),t.on("destroyed",h.purge)}function Lt(t){var i,e,s=null;function c(z,x,T){t.animator.active?o(z,x,T):requestAnimationFrame((function(){return o(z,x,T)}))}function a(){c(!1,!1,e)}function o(z,x,T){var C=0,v=t.size,m=t.track.details;if(m&&i){var h=m.slides;i.forEach((function(O,S){if(z)!s&&x&&w(O,null,T),f(O,null,T);else{if(!h[S])return;var A=h[S].size*v;!s&&x&&w(O,A,T),f(O,h[S].distance*v-C,T),C+=A}}))}}function y(z){return t.options.renderMode==="performance"?Math.round(z):z}function w(z,x,T){var C=T?"height":"width";x!==null&&(x=y(x)+"px"),z.style["min-"+C]=x,z.style["max-"+C]=x}function f(z,x,T){if(x!==null){x=y(x);var C=T?x:0;x="translate3d(".concat(T?0:x,"px, ").concat(C,"px, 0)")}z.style.transform=x,z.style["-webkit-transform"]=x}function P(){i&&(o(!0,!0,e),i=null),t.on("detailsChanged",a,!0)}function V(){c(!1,!0,e)}function M(){P(),e=t.options.vertical,t.options.disabled||t.options.renderMode==="custom"||(s=Y(t.options.slides,"perView",null)==="auto",t.on("detailsChanged",a),(i=t.slides).length&&V())}t.on("created",M),t.on("optionsChanged",M),t.on("beforeOptionsChanged",(function(){P()})),t.on("updated",V),t.on("destroyed",P)}function At(t,i){return function(e){var s,c,a,o,y,w=nt();function f(d){var k;G(e.container,"reverse",(k=e.container,window.getComputedStyle(k,null).getPropertyValue("direction")!=="rtl"||d?null:"")),G(e.container,"v",e.options.vertical&&!d?"":null),G(e.container,"disabled",e.options.disabled&&!d?"":null)}function P(){V()&&C()}function V(){var d=null;if(o.forEach((function(R){R.matches&&(d=R.__media)})),d===s)return!1;s||e.emit("beforeOptionsChanged"),s=d;var k=d?a.breakpoints[d]:a;return e.options=it(it({},a),k),f(),S(),A(),m(),!0}function M(d){var k=wt(d);return(e.options.vertical?k.height:k.width)/e.size||1}function z(){return e.options.trackConfig.length}function x(d){for(var k in s=!1,a=it(it({},i),d),w.purge(),c=e.size,o=[],a.breakpoints||[]){var R=window.matchMedia(k);R.__media=k,o.push(R),w.add(R,"change",P)}w.add(window,"orientationchange",O),w.add(window,"resize",h),V()}function T(d){e.animator.stop();var k=e.track.details;e.track.init(d??(k?k.abs:0))}function C(d){T(d),e.emit("optionsChanged")}function v(d,k){if(d)return x(d),void C(k);S(),A();var R=z();m(),z()!==R?C(k):T(k),e.emit("updated")}function m(){var d=e.options.slides;if(typeof d=="function")return e.options.trackConfig=d(e.size,e.slides);for(var k=e.slides,R=k.length,X=typeof d=="number"?d:Y(d,"number",R,!0),B=[],q=Y(d,"perView",1,!0),g=Y(d,"spacing",0,!0)/e.size||0,p=q==="auto"?g:g/q,l=Y(d,"origin","auto"),n=0,b=0;b<X;b++){var u=q==="auto"?M(k[b]):1/q-g+p,j=l==="center"?.5-u/2:l==="auto"?0:l;B.push({origin:j,size:u,spacing:g}),n+=u}if(n+=g*(X-1),l==="auto"&&!e.options.loop&&q!==1){var D=0;B.map((function(L){var _=n-D;return D+=L.size+g,_>=1||(L.origin=1-_-(n>1?0:1-n)),L}))}e.options.trackConfig=B}function h(){S();var d=e.size;e.options.disabled||d===c||(c=d,v())}function O(){h(),setTimeout(h,500),setTimeout(h,2e3)}function S(){var d=wt(e.container);e.size=(e.options.vertical?d.height:d.width)||1}function A(){e.slides=N(e.options.selector,e.container)}e.container=(y=N(t,document)).length?y[0]:null,e.destroy=function(){w.purge(),e.emit("destroyed"),f(!0)},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0)},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0)},e.update=v,x(e.options)}}var Vt=function(t,i,e){try{return(function(s,c){var a,o={};return a={emit:function(y){o[y]&&o[y].forEach((function(f){f(a)}));var w=a.options&&a.options[y];w&&w(a)},moveToIdx:function(y,w,f){var P=a.track.idxToDist(y,w);if(P){var V=a.options.defaultAnimation;a.animator.start([{distance:P,duration:Y(f||V,"duration",500),easing:Y(f||V,"easing",(function(M){return 1+--M*M*M*M*M}))}])}},on:function(y,w,f){f===void 0&&(f=!1),o[y]||(o[y]=[]);var P=o[y].indexOf(w);P>-1?f&&delete o[y][P]:f||o[y].push(w)},options:s},(function(){if(a.track=Et(a),a.animator=Ct(a),c)for(var y=0,w=c;y<w.length;y++)(0,w[y])(a);a.track.init(a.options.initial||0),a.emit("created")})(),a})(i,yt([At(t,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),Lt,Dt,St],e||[],!0))}catch(s){console.error(s)}};return ut.useKeenSlider=function(t,i){var e=E.useRef(null),s=E.useRef(!1),c=E.useRef(t),a=E.useCallback((function(o){o?(c.current=t,e.current=new Vt(o,t,i),s.current=!1):(e.current&&e.current.destroy&&e.current.destroy(),e.current=null)}),[]);return E.useEffect((function(){jt(c.current,t)||(c.current=t,e.current&&e.current.update(c.current))}),[t]),[a,e]},ut}var Pt=qt();const $t=ct(r.jsx("path",{d:"M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z"})),xt=I.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  direction: rtl;
  padding: 20px;
  @media (max-width: 480px) {
    width: 100%;
    padding: 0;
  }
  `,Ft=I.div`
 
`,Kt=I.div``,Ut=I.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 600px;
`,Xt=I.div`
    width: 30px; 
    height: 20px;
    background-color: var(--color-info);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    font-size: 16px;
    color: var(--color-primary);
    bottom: 20px;
    left: 25px;
    cursor: pointer;

    svg{
        font-size: 16px;
    }
`,Gt=I.img`
  width: 100%;
  max-height: 600px;
  object-fit: contain;
  border-radius: 12px;
`,Jt=I.div`
  margin-top: 12px;
  
  .keen-slider__slide {
    cursor: pointer;
    border-radius: 4px;
    overflow: hidden;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    
    &.active {
      opacity: 1;
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 480px) {
      display: none;
  }
`,Qt=I.div`
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
`;function Zt(E){return W=>{function Z(){W.slides.forEach(N=>{N.classList.remove("active")})}function tt(N){W.slides[N]&&W.slides[N].classList.add("active")}function G(){W.slides.forEach((N,$)=>{N.addEventListener("click",()=>{E.current&&E.current.moveToIdx($)})})}W.on("created",()=>{E.current&&(tt(W.track.details.rel),G(),E.current.on("animationStarted",N=>{Z();const $=N.animator.targetIdx||0;tt(N.track.absToRel($)),W.moveToIdx(Math.min(W.track.details.maxIdx,$))}))})}}function te({images:E}){if(!E||E.length===0)return r.jsx(xt,{children:r.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#999"},children:"تصویری وجود ندارد"})});if(E.length===1)return r.jsx(xt,{children:r.jsx(Gt,{src:E[0],alt:"تصویر"})});const[W,Z]=Pt.useKeenSlider({initial:0}),[tt]=Pt.useKeenSlider({initial:0,slides:{perView:Math.min(4,E.length),spacing:10}},[Zt(Z)]);return r.jsxs(xt,{children:[r.jsxs(Ft,{ref:W,className:"keen-slider",children:[E.map((G,N)=>r.jsx(Kt,{className:"keen-slider__slide",children:r.jsx(Qt,{children:r.jsx(Ut,{src:G,alt:`تصویر ${N+1}`})})},N)),r.jsxs(Xt,{children:[E.length," ",r.jsx($t,{})]})]}),r.jsx(Jt,{children:r.jsx("div",{ref:tt,className:"keen-slider thumbnail",children:E.map((G,N)=>r.jsx("div",{className:"keen-slider__slide",children:r.jsx("img",{src:G,alt:`تصویر کوچک ${N+1}`})},N))})})]})}const ee=ct(r.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),ie=ct(r.jsx("path",{d:"M12 5.99 19.53 19H4.47zM2.74 18c-.77 1.33.19 3 1.73 3h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0zM11 11v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1m0 5h2v2h-2z"})),re=ct(r.jsx("path",{d:"M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2m0 15-5-2.18L7 18V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1z"})),ne=ct(r.jsx("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92"}));st.extend(Bt);st.locale("fa");const oe=I.div`
  width: 80%;
  margin: 80px auto;
  @media (max-width: 480px) {
     width: 100%;
     margin: 12px auto;
  }
`,ae=I.div`
`,se=I.div`
  display: flex;
  padding: 20px 35px;
  gap: 12px;
  flex-wrap: wrap;
  @media (max-width: 480px) {
      flex-direction: column-reverse;
      padding: 0;
      margin-top: 48px;
  }
`,ce=I.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: var(--text-xs);
  padding: 12px 16px;
  font-weight: 700;
  svg {
    font-size: var(--text-xs);
  }
`,vt=I.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--color-subtitle);
  transition: all 0.3s ease;
  gap: 6px;
  &:hover {
    color: var(--color-info);
    svg {
      transition: all 0.3s ease;
      transform: rotate(180deg);
    }
  }
`,de=I.div`
  font-size: var(--text-lg);
  font-weight: 900;
`,le=I.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-subtitle);
  cursor: pointer;
  margin-top: 8px;
   @media (max-width: 480px) {
    width: 100%;
  }
`,ue=I.div`
  margin-top: 12px;
  height: ${({$opened:E})=>E?"60px":"0px"};
  overflow: hidden;
  transition: all 0.3s ease;
`,fe=I.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: var(--color-accent);
  border-bottom: 1px solid var(--color-subtitle);
  padding: 16px 0;
  margin-top: 12px;
  div {
    display: flex;
    align-items: center;
    gap: 4px;
  }
   @media (max-width: 480px) {
    width: 100%;
  }
`,pe=I.div`
  width: 80%;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 12px;
  padding: 16px 0;
   @media (max-width: 480px) {
    width: 100%;
  }
`,he=I.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,xe=I.div`
  display: flex;
   gap: 16px;
   @media (max-width: 480px) {
       width: 100%;
       position: fixed;
       align-items: center;
       justify-content: center;
       background-color: var(--color-secondary);
       bottom: 0;
       left: 0;
       padding: 10px ;
       z-index: 999;
       div{
        width: 50%;
        color: var(--color-primary);
        background-color: var(--color-accent);
        &:hover{
          color: var(--color-primary);
            background: rgb(219, 112, 125);
          
        }
       }
   }
`,ve=I.div`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent);
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  &:hover {
    background: rgb(219, 112, 125);
  }
`,me=I.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 12px;
  font-size: var(--text-lg);
  font-weight: 700;
  @media (max-width: 480px) {
    width: 100%;
  }
  `,ft=I.div`
   width: 100%;
   padding: 16px 12px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-bottom: 1px solid var(--color-subtitle);
`,pt=I.div`
  color: var(--color-subtitle);
`,ht=I.div`
   color: var(--color-info);
`,ge=I.div`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: transparent;
  color: var(--color-subtitle);
  border: 1px solid var(--color-subtitle);
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
  &:hover {
    background: var(--color-subtitle);
    color: var(--color-info);
    border-color: var(--color-info);
  }
`,be=I.div`
  display: flex;
  @media (max-width: 480px) {
     width: 100%;
     position: fixed;
     align-items: center;
     justify-content: space-between;
     background-color: var(--color-secondary);
     padding: 6px 4px;
     top: 0;
     left: 0;
     z-index: 99;
  }
`,bt=I.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  &:hover {
    background: var(--color-subtitle);
  }
  svg {
    font-size: var(--text-base);
  }
`,we=I(bt)`
  display: none;

  @media (max-width: 480px) {
     display: flex;
     margin-right:  auto;
  }
`,je=I.table`
  width: 100%;
  direction: rtl;
  border-collapse: collapse;
  margin-top: 12px;
  border-bottom: 1px solid var(--color-subtitle);
`,ye=I.thead`
  border-radius: 8px;
`,ke=I.tbody``,zt=I.tr`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 8px 12px;
`,mt=I.th`
  font-weight: 600;
  color: var(--color-subtitle);
  font-size: var(--text-sm);
  text-align: center;
  padding: 8px 4px;
`,gt=I.td`
  font-size: var(--text-sm);
  color: var(--color-info);
  text-align: center;
  padding: 8px 4px;
  font-weight: 900;
`,Me=I.div`
 width: calc(50% - 6px);
  @media (max-width: 480px) {
     width: 100%;
     padding: 16px;
  }
`,Ie=I.div`
   width: calc(50% - 6px);

    @media (max-width: 480px) {
     width: 100%;
     margin-top: 30px;

  }
`,Te=I.div`
  padding: 20px 35px;
  border-top: 1px solid var(--color-border);
  margin-top: 20px;
`;function Ce(){const[E,W]=rt.useState(null),[Z,tt]=rt.useState(!1),[G,N]=rt.useState(!1),$=_t(),et=Ht(),nt=rt.useMemo(()=>Number($.id),[$.id]);return rt.useEffect(()=>{const K=Wt.find(F=>F.id===nt);if(!K){et("/",{replace:!0});return}W(K)},[nt,et]),rt.useEffect(()=>{const K=()=>{N(window.innerWidth<768)};return K(),window.addEventListener("resize",K),()=>window.removeEventListener("resize",K)},[]),E?r.jsxs(oe,{children:[!G&&r.jsx(ae,{children:r.jsx(Yt,{})}),r.jsxs(se,{children:[r.jsxs(Me,{children:[r.jsxs(ce,{children:[r.jsxs(vt,{children:[E.category," ",r.jsx(at,{})]}),r.jsxs(vt,{children:[E.subCategory," ",r.jsx(at,{})]}),r.jsxs(vt,{children:[E.title," ",r.jsx(at,{})]})]}),r.jsx(de,{children:E.title}),r.jsxs(le,{onClick:()=>tt(K=>!K),children:[st(E.date).fromNow()," در ",E.city,r.jsx("div",{style:{transform:Z?"rotate(180deg)":"rotate(0deg)",transition:"0.3s ease"},children:r.jsx(ee,{})})]}),r.jsxs(ue,{$opened:Z,children:[r.jsxs("div",{children:["انتشار آگهی: ",st(E.date).format("DD MMMM YYYY")]}),r.jsxs("div",{children:["آخرین بروزرسانی: ",st(E.date).format("DD MMMM YYYY")]})]}),r.jsxs(fe,{children:[r.jsxs("div",{children:[r.jsx(ie,{})," زنگ‌های خطر قبل از معامله"]}),r.jsx(at,{})]}),r.jsxs(pe,{children:[r.jsxs(he,{children:[r.jsxs(xe,{children:[r.jsx(ve,{children:"اطلاعات تماس"}),r.jsx(ge,{children:"چت"})]}),r.jsxs(be,{children:[r.jsx(bt,{children:r.jsx(re,{})}),r.jsx(bt,{children:r.jsx(ne,{})}),r.jsx(we,{children:r.jsx(at,{})})]})]}),r.jsxs(je,{children:[r.jsx(ye,{children:r.jsxs(zt,{children:[r.jsx(mt,{children:"کارکرد"}),r.jsx(mt,{children:"مدل"}),r.jsx(mt,{children:"رنگ"})]})}),r.jsx(ke,{children:r.jsxs(zt,{children:[r.jsx(gt,{children:"کیلومتر"}),r.jsx(gt,{children:"۱۴۰۴"}),r.jsx(gt,{children:"سفید"})]})})]})]}),r.jsxs(me,{children:[r.jsxs(ft,{children:[r.jsx(pt,{children:"وضعیت"}),r.jsx(ht,{children:"نو"})]}),r.jsxs(ft,{children:[r.jsx(pt,{children:"متراژ"}),r.jsx(ht,{children:"425متر"})]}),r.jsxs(ft,{children:[r.jsx(pt,{children:"سن بنا"}),r.jsx(ht,{children:"1385"})]}),r.jsxs(ft,{children:[r.jsx(pt,{children:"قابل تهاتر"}),r.jsx(ht,{children:"هست"})]})]})]}),r.jsx(Ie,{children:r.jsx(te,{images:E.images})})]}),r.jsx(Te,{})]}):null}export{Ce as default};
