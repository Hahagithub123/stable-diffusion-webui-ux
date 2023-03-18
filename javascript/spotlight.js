/**
 * Spotlight.js v0.7.8
 * Copyright 2019-2021 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/spotlight
 */
 /* 
 this library was modified by anapnoe to work with stable-diffusion-ui-ux
 the changes made were to root selector and an extra function was added to toggle
 the pan zoom functionallity 
 */
(function(){"use strict";function e(e,n,t){e.classList[t?"add":"remove"](n)}function n(e,n,t){t=""+t,e["_s_"+n]!==t&&(e.style.setProperty(n,t),e["_s_"+n]=t)}Object.assign||(Object.assign=function(e,n){for(var t,i=Object.keys(n),o=0;o<i.length;o++)e[t=i[o]]=n[t];return e}),Element.prototype.closest||(Element.prototype.closest=function(e){e=e.substring(1);for(var n=this;n&&1===n.nodeType;){if(n.classList.contains(e))return n;n=n.parentElement}return null});var t=0;function i(e,i){i&&(n(e,"transition","none"),i()),t||(t=e.clientTop&&0),i&&n(e,"transition","")}function o(e,n,t,i){s(!0,e,n,t,i)}function s(e,n,t,i,o){n[(e?"add":"remove")+"EventListener"](t,i,!o&&!1!==o||o)}function r(e,n){e.stopPropagation(),n&&e.preventDefault()}function a(e,t){n(e,"display",t?"":"none")}function l(e,t){n(e,"visibility",t?"":"hidden")}function c(e,t){n(e,"transition",t?"":"none")}var u="theme download play page close autofit zoom-in zoom-out prev next fullscreen".split(" "),f={page:1,close:1,autofit:1,"zoom-in":1,"zoom-out":1,prev:1,next:1,fullscreen:1},d=document.createElement("div");d.id="spotlight",d.innerHTML="<div class=spl-spinner></div><div class=spl-track><div class=spl-scene><div class=spl-pane></div></div></div><div class=spl-header><div class=spl-page> </div></div><div class=spl-progress></div><div class=spl-footer><div class=spl-title> </div><div class=spl-description> </div><div class=spl-button> </div></div><div class=spl-prev></div><div class=spl-next></div>";var p={},v=document.createElement("video");function $(e,n,t,i){if("node"!==i){for(var o,s=Object.keys(t),r=0;r<s.length;r++)if(3<(o=s[r]).length&&0===o.indexOf("src")){if("video"===i){var a=p[o];if(a){if(0<a){var l=t[o];break}}else if(v.canPlayType("video/"+o.substring(3).replace("-","").toLowerCase())){p[o]=1,l=t[o];break}else p[o]=-1}else if((a=parseInt(o.substring(4),10))&&(a=Math.abs(n-a),!c||a<c)){var c=a;l=t[o]}}}return l||t.src||t.href||e.src||e.href}var m,h,_,g,y,b,k,C,w,E,z,x,q,H,N,F,R,S,L,P,T,V,X,W,Y,B,O,D,I,M,j,A,G,J,K,Q,U,Z,ee,en,et,ei,eo,es,er,ea,el,ec,eu,ef,ed,ep,ev,e$,em,eh,e_,eg,ey,eb,ek,eC,ew,eE,ez={},ex=navigator.connection,e3=window.devicePixelRatio||1,e1=document.createElement("img");function e0(){function e(e){return ez[e]=(d||gradioApp()).getElementsByClassName("spl-"+e)[0]}if(!ee){en=document.body,ee=gradioApp().querySelector(".gradio-container"),es=e("scene"),er=e("header"),ea=e("footer"),el=e("title"),ec=e("description"),eu=e("button"),ef=e("prev"),ed=e("next"),ev=e("page"),em=e("progress"),eh=e("spinner"),ei=[e("pane")],eq("close",eU),en[eC="requestFullscreen"]||en[eC="msRequestFullscreen"]||en[eC="webkitRequestFullscreen"]||en[eC="mozRequestFullscreen"]||(eC=""),eC?(ew=eC.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit"),ep=eq("fullscreen",eM)):u.pop(),eq("autofit",eA),eq("zoom-in",eG),eq("zoom-out",eJ),eq("theme",ej),e$=eq("play",eW),eq("download",eQ),o(ef,"click",e9),o(ed,"click",ne);var n=e("track");o(n,"mousedown",e2),o(n,"mousemove",eI),o(n,"mouseleave",eD),o(n,"mouseup",eD),o(n,"touchstart",e2,{passive:!1}),o(n,"touchmove",eI,{passive:!0}),o(n,"touchend",eD),o(eu,"click",function(){A?A(N,S):j&&(location.href=j)})}}function eE(e,n){s(n,e,"mousedown",e2),s(n,e,"mousemove",eI),s(n,e,"mouseleave",eD),s(n,e,"mouseup",eD),s(n,e,"touchstart",e2,{passive:!1}),s(n,e,"touchmove",eI,{passive:!0}),s(n,e,"touchend",eD)}function eq(e,n){var t=document.createElement("div");return t.className="spl-"+e,o(t,"click",n),er.appendChild(t),ez[e]=t}function eH(t){if(F=R.length){ee||e0(),X&&X(t);for(var i=ei[0],o=i.parentNode,s=ei.length;s<F;s++){var r=i.cloneNode(!1);n(r,"left",100*s+"%"),o.appendChild(r),ei[s]=r}et||(ee.appendChild(d),eS()),N=t||1,c(es),nt(!0),eC&&a(ep,0<screen.availHeight-window.innerHeight),history.pushState({spl:1},""),history.pushState({spl:2},""),c(d,!0),e(ee,"hide-scrollbars",!0),e(d,"show",!0),eV(!0),eS(),eB(),D&&eW(!0,!0)}}function eN(e,n){return void 0!==(e=S[e])?"false"!=(e=""+e)&&(e||n):n}function e4(t){t?i(eo,e4):(c(es,U),n(eo,"opacity",Q?0:1),e6(K&&.8),Z&&e(eo,Z,!0))}function e5(n,t){n&&e(eh,"spin",t)}function eF(){return document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement}function eR(){if(eS(),eo&&eL(),eC){var n=eF();e(ep,"on",n),n||a(ep,0<screen.availHeight-window.innerHeight)}}function eS(){y=d.clientWidth,b=d.clientHeight}function eL(){k=eo.clientWidth,C=eo.clientHeight}function e6(e){n(eo,"transform","translate(-50%, -50%) scale("+(e||w)+")")}function eP(e,t){n(et,"transform",e||t?"translate("+e+"px, "+t+"px)":"")}function eT(e,t,o){t?i(es,function(){eT(e,!1,o)}):n(es,"transform","translateX("+(-(100*e)+(o||0))+"%)")}function eV(e){s(e,window,"keydown",e7),s(e,window,"wheel",e8),s(e,window,"resize",eR),s(e,window,"popstate",eX)}function eX(e){et&&e.state.spl&&eU(!0)}function e7(e){if(et){var n=!1!==S["zoom-in"];switch(e.keyCode){case 8:n&&eA();break;case 27:eU();break;case 32:D&&eW();break;case 37:e9();break;case 39:ne();break;case 38:case 107:case 187:n&&eG();break;case 40:case 109:case 189:n&&eJ()}}}function e8(e){et&&!1!==S["zoom-in"]&&(0>.5*(0>(e=e.deltaY)?1:e?-1:0)?eJ():eG())}function eW(n,t){("boolean"==typeof n?n:!ey)===!ey&&(e(e$,"on",ey=ey?clearTimeout(ey):1),t||eY(ey))}function eY(e){V&&(i(em,function(){n(em,"transition-duration",""),n(em,"transform","")}),e&&(n(em,"transition-duration",J+"s"),n(em,"transform","translateX(0)"))),e&&(ey=setTimeout(ne,1e3*J))}function eB(){O&&(ek=Date.now()+2950,eb||(e(d,"menu",!0),function n(t){eb=setTimeout(function(){var t=Date.now();t>=ek?(e(d,"menu"),eb=0):n(ek-t)},3e3)}(3e3)))}function eO(n){"boolean"==typeof n&&(eb=n?eb:0),eb?(eb=clearTimeout(eb),e(d,"menu")):eB()}function e2(e){r(e,!0),E=!0,z=!1;var n=e.touches;n&&(n=n[0])&&(e=n),x=k*w<=y,_=e.pageX,g=e.pageY,c(et)}function eD(e){if(r(e),E){if(z){if(x&&z){var n=(e=m<-(y/7)&&(N<F||T))||m>y/7&&(1<N||T);(e||n)&&(eT(N-1,!0,m/y*100),e&&ne()||n&&e9()),m=0,eP()}c(et,!0)}else eO();E=!1}}function eI(e){if(r(e),E){var n=e.touches;n&&(n=n[0])&&(e=n),n=(k*w-y)/2,m-=_-(_=e.pageX),x||(m>n?m=n:m<-n&&(m=-n),C*w>b&&(n=(C*w-b)/2,(h-=g-(g=e.pageY))>n?h=n:h<-n&&(h=-n))),z=!0,eP(m,h)}else eB()}function eM(e){var n=eF();("boolean"!=typeof e||!!n!==e)&&(n?document[ew]():d[eC]())}function ej(n){"string"!=typeof n&&(n=H?"":I||"white"),H!==n&&(H&&e(d,H),n&&e(d,n,!0),H=n)}function eA(t){"boolean"==typeof t&&(q=!t),e(eo,"autofit",q=1===w&&!q),n(eo,"transform",""),w=1,h=m=0,eL(),c(et),eP()}function eG(){var e=w/.65;50>=e&&(q&&eA(),eP(m/=.65,h/=.65),eK(e))}function eJ(){var e=.65*w;q&&eA(),1<=e&&(1===e?m=h=0:(m*=.65,h*=.65),eP(m,h),eK(e))}function eK(e){w=e||1,e6()}function eQ(){var e=ee,n=document.createElement("a"),t=eo.src;n.href=t,n.download=t.substring(t.lastIndexOf("/")+1),e.appendChild(n),n.click(),e.removeChild(n)}function eU(n){setTimeout(function(){ee.removeChild(d),et=eo=e_=S=P=R=X=W=Y=A=null},200),e(ee,"hide-scrollbars"),e(d,"show"),eM(!1),eV(),history.go(!0===n?-1:-2),eg&&(e1.src=""),ey&&eW(),eo&&eZ(eo),eb&&(eb=clearTimeout(eb)),H&&ej(),G&&e(d,G),Y&&Y()}function eZ(e){if(e.g)e.g.appendChild(e),e.g=null;else{var n=e.parentNode;n&&n.removeChild(e),e.src=e.onerror=""}}function e9(e){if(e&&eB(),1<F){if(1<N)return nn(N-1);if(T)return eT(F,!0),nn(F)}}function ne(e){if(e&&eB(),1<F){if(N<F)return nn(N+1);if(T)return eT(-1,!0),nn(1);ey&&eW()}}function nn(e){if(e!==N){ey?(clearTimeout(ey),eY()):eB();var n=e>N;return N=e,nt(n),!0}}function nt(t){if(h=m=0,w=1,eo){if(eo.onerror)eZ(eo);else{var o=eo;setTimeout(function(){o&&eo!==o&&(eZ(o),o=null)},650),e4(),eP()}}!function n(t){var o,s=R[N-1],r=s;if(S={},P&&Object.assign(S,P),Object.assign(S,r.dataset||r),L=S.media,A=S.onclick,I=S.theme,G=S.class,O=eN("autohide",!0),T=eN("infinite"),V=eN("progress",!0),D=eN("autoslide"),M=eN("preload",!0),j=S.buttonHref,J=D&&parseFloat(D)||7,H||I&&ej(I),G&&e(d,G,!0),G&&i(d),r=S.control){r="string"==typeof r?r.split(","):r;for(var l=0;l<u.length;l++)S[u[l]]=!1;for(l=0;l<r.length;l++){var c=r[l].trim();"zoom"===c?S["zoom-in"]=S["zoom-out"]=!0:S[c]=!0}}if(K=Q=U=!(r=S.animation),Z=!1,r)for(r="string"==typeof r?r.split(","):r,l=0;l<r.length;l++)"scale"===(c=r[l].trim())?K=!0:"fade"===c?Q=!0:"slide"===c?U=!0:c&&(Z=c);for(B=S.fit,l=ex&&ex.downlink,r=Math.max(b,y)*e3,l&&1200*l<r&&(r=1200*l),e_={media:L,src:$(s,r,S,L),title:eN("title",s.alt||s.title||(o=s.firstElementChild)&&(o.alt||o.title))},eg&&(e1.src=eg=""),M&&t&&(s=R[N])&&((o=(t=s.dataset||s).media)&&"image"!==o||(eg=$(s,r,t,o))),s=0;s<u.length;s++)a(ez[t=u[s]],eN(t,f[t]))}(t),eT(N-1),e(eh,"error"),function t(i){if(eo=(et=ei[i-1]).firstChild,N=i,eo)q&&eA(),B&&e(eo,B,!0),e4(!0),Z&&e(eo,Z),Q&&n(eo,"opacity",1),K&&n(eo,"transform",""),n(eo,"visibility","visible"),eg&&(e1.src=eg),D&&eY(ey);else{var o=e_.media,s=eN("spinner",!0);if("video"===o)e5(s,!0),(eo=document.createElement("video")).onloadedmetadata=function(){eo===this&&(eo.onerror=null,eo.width=eo.videoWidth,eo.height=eo.videoHeight,eL(),e5(s),t(i))},eo.poster=S.poster,eo.preload=M?"auto":"metadata",eo.controls=eN("controls",!0),eo.autoplay=S.autoplay,eo.h=eN("inline"),eo.muted=eN("muted"),eo.src=e_.src,et.appendChild(eo);else{if("node"===o){"string"==typeof(eo=e_.src)&&(eo=document.querySelector(eo)),eo&&(eo.g||(eo.g=eo.parentNode),eL(),et.appendChild(eo),t(i));return}e5(s,!0),(eo=document.createElement("img")).onload=function(){eo===this&&(eo.onerror=null,e5(s),t(i),eL())},eo.src=e_.src,et.appendChild(eo)}eo&&(s||n(eo,"visibility","visible"),eo.onerror=function(){eo===this&&(eZ(eo),e(eh,"error",!0),e5(s))})}}(N),c(et),eP(),t=e_.title;var s=eN("description"),r=eN("button"),p=t||s||r;p&&(t&&(el.firstChild.nodeValue=t),s&&(ec.firstChild.nodeValue=s),r&&(eu.firstChild.nodeValue=r),a(el,t),a(ec,s),a(eu,r),n(ea,"transform","all"===O?"":"none")),O||e(d,"menu",!0),l(ea,p),l(ef,T||1<N),l(ed,T||N<F),ev.firstChild.nodeValue=1<F?N+" / "+F:"",W&&W(N,S)}o(document,"click",function e(n){var t=n.target.closest(".spotlight");if(t){r(n,!0),R=((n=t.closest(".spotlight-group"))||document).getElementsByClassName("spotlight");for(var i=0;i<R.length;i++)if(R[i]===t){P=n&&n.dataset,eH(i+1);break}}}),window.Spotlight={init:e0,theme:ej,fullscreen:eM,download:eQ,autofit:eA,next:ne,prev:e9,goto:nn,close:eU,zoom:eK,menu:eO,show:function(e,n,t){R=e,n&&(P=n,X=n.onshow,W=n.onchange,Y=n.onclose,t=t||n.index),eH(t)},panzoom:function(e,n){eE(e,n)},play:eW,addControl:eq,removeControl:function(e){var n=ez[e];n&&(er.removeChild(n),ez[e]=null)}}}).call(this);