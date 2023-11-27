"use strict";(self.webpackChunkfrosted_by_nes=self.webpackChunkfrosted_by_nes||[]).push([[873],{3620:(t,e,n)=>{n.d(e,{R:()=>a,z:()=>r});var i=[];function r(t){if(0===i.length)return!0;if(void 0===t.hostname)return!1;for(var e=0;e<i.length;e++){var n=i[e];if("*"===n.hostname)return!1;if(o(n.hostname,t.hostname)&&s(n.pathname,t.pathname))return!1}return!0}function a(t){if(i=[],t&&t.length)for(var e=0;e<t.length;e++){let n=t[e];if(!n)continue;0===n.indexOf("http://")?n=n.substring(7):0===n.indexOf("https://")&&(n=n.substring(8));const r=n.indexOf("/");let a,o;r>0?(a=n.substring(0,r),o=n.substring(r)):(a=n,o="");let[s]=a.split(":");i.push({hostname:s,pathname:o})}}function o(t,e){return!(t.length>e.length)&&e.indexOf(t)===e.length-t.length}function s(t,e){return 0===t.indexOf("/")&&(t=t.substring(1)),0===e.indexOf("/")&&(e=e.substring(1)),""===t||t===e}},6313:(t,e,n)=>{n.d(e,{AG:()=>u,FX:()=>d,n1:()=>h,uR:()=>c});var i=n(3973),r=n(8038),a=n(4355),o=Object.prototype.hasOwnProperty,s=64;function u(t,e,n){return t||0===t||""===t?e(t)+(n?",":""):"!"}function c(t,e){return e?Math.floor(t).toString(36):void 0===t||0===t?"":Math.floor(t).toString(36)}function d(t){var e=Object.hasOwnProperty("create")?Object.create(null):{},n=0;return function(i){if("undefined"===typeof i||""===i)return"";var r=new a.RR({agentIdentifier:t});i=String(i),r.shouldObfuscate()&&(i=r.obfuscateString(i));return o.call(e,i)?c(e[i],!0):(e[i]=n++,function(t){return"'"+t.replace(f,"\\$1")}(i))}}function h(t,e){var n=[];return(0,i.D)(t,(function(t,i){if(!(n.length>=s)){var a,o=5;switch(t=e(t),typeof i){case"object":i?a=e((0,r.P)(i)):o=9;break;case"number":o=6,a=i%1?i:i+".";break;case"boolean":o=i?7:8;break;case"undefined":o=9;break;default:a=e(i)}n.push([o,t+(a?","+a:"")])}})),n}var f=/([,\\;])/g},7309:(t,e,n)=>{n.d(e,{uB:()=>v,wu:()=>m,zJ:()=>l});var i="Start",r="End",a="unloadEvent",o="redirect",s="domainLookup",u="onnect",c="request",d="response",h="loadEvent",f="domContentLoadedEvent",l=[];function m(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(e)return n.of=t,p(n.of,n,"n",!0),p(e[a+i],n,"u",l),p(e[o+i],n,"r",l),p(e[a+r],n,"ue",l),p(e[o+r],n,"re",l),p(e["fetch"+i],n,"f",l),p(e[s+i],n,"dn",l),p(e[s+r],n,"dne",l),p(e["c"+u+i],n,"c",l),p(e["secureC"+u+"ion"+i],n,"s",l),p(e["c"+u+r],n,"ce",l),p(e[c+i],n,"rq",l),p(e[d+i],n,"rp",l),p(e[d+r],n,"rpe",l),p(e.domLoading,n,"dl",l),p(e.domInteractive,n,"di",l),p(e[f+i],n,"ds",l),p(e[f+r],n,"de",l),p(e.domComplete,n,"dc",l),p(e[h+i],n,"l",l),p(e[h+r],n,"le",l),n}function v(t,e){var n;return p("number"===typeof(n=t.type)?n:{navigate:void 0,reload:1,back_forward:2,prerender:3}[n],e,"ty"),p(t.redirectCount,e,"rc"),e}function p(t,e,n,i){if("number"===typeof t&&t>0){if(i){const n=(null===e||void 0===e?void 0:e.of)>0?e.of:0;t=Math.max(t-n,0)}t=Math.round(t),e[n]=t}l.push(t)}},2191:(t,e,n)=>{n.d(e,{S:()=>i});const i={FIRST_PAINT:"fp",FIRST_CONTENTFUL_PAINT:"fcp",FIRST_INPUT_DELAY:"fi",LARGEST_CONTENTFUL_PAINT:"lcp",CUMULATIVE_LAYOUT_SHIFT:"cls",INTERACTION_TO_NEXT_PAINT:"inp",LONG_TASK:"lt",TIME_TO_FIRST_BYTE:"ttfb"}},7911:(t,e,n)=>{n.d(e,{y:()=>o});var i=n(1682),r=n(3980),a=n(2191);const o=new(n(4599).U)(a.S.FIRST_CONTENTFUL_PAINT);if(r.il)if(r.ux)try{if(!r.iS){const t=performance.getEntriesByType("paint");t.forEach((e=>{"first-contentful-paint"===e.name&&o.update({value:Math.floor(e.startTime),entries:t})}))}}catch(s){}else(0,i.a4)((t=>{let{value:e,entries:n}=t;r.iS||o.isValid||o.update({value:e,entries:n})}))},6550:(t,e,n)=>{n.d(e,{U:()=>a});var i=n(3980),r=n(2191);const a=new(n(4599).U)(r.S.FIRST_PAINT);if(i.il){const t=t=>{t.forEach((n=>{"first-paint"!==n.name||a.isValid||(e.disconnect(),a.update({value:n.startTime,entries:t}))}))};let e;try{PerformanceObserver.supportedEntryTypes.includes("paint")&&!i.iS&&(e=new PerformanceObserver((e=>{Promise.resolve().then((()=>{t(e.getEntries())}))})),e.observe({type:"paint",buffered:!0}))}catch(o){}}},4599:(t,e,n)=>{n.d(e,{U:()=>s});var i=n(4572),r=n(2346),a=n(6033),o=new WeakMap;class s{constructor(t,e){(0,r.Z)(this,o,{writable:!0,value:new Set}),(0,i.Z)(this,"history",[]),this.name=t,this.attrs={},this.roundingMethod="function"===typeof e?e:Math.floor}update(t){let{value:e,entries:n=[],attrs:i={}}=t;if(e<0)return;const r={value:this.roundingMethod(e),name:this.name,entries:n,attrs:i};this.history.push(r),(0,a.Z)(this,o).forEach((t=>{try{t(this.current)}catch(e){}}))}get current(){return this.history[this.history.length-1]||{value:void 0,name:this.name,entries:[],attrs:{}}}get isValid(){return this.current.value>=0}subscribe(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("function"===typeof t)return(0,a.Z)(this,o).add(t),this.isValid&&e&&this.history.forEach((e=>{t(e)})),()=>{(0,a.Z)(this,o).delete(t)}}}},7076:(t,e,n)=>{n.r(e),n.d(e,{Aggregate:()=>W});var i=n(4572),r=n(4613),a=n(4522),o=n(3620),s=n(3973),u=n(7309),c=n(662),d=n(8958),h=n(4836),f=0;function l(t,e,n,i){Object.defineProperty(this,"interaction",{value:t,writable:!0}),this.parent=e,this.id=++f,this.type=n,this.children=[],this.end=null,this.jsEnd=this.start=i,this.jsTime=0,this.attrs={},this.cancelled=!1}var m=l.prototype;m.child=function(t,e,n,i){var r=this.interaction;if(r.end||r.nodes>=128)return null;r.onNodeAdded(this);var a=new l(r,this,t,e);return a.attrs.name=n,r.nodes++,i||r.remaining++,a},m.callback=function(t,e){var n=this;n.jsTime+=t,e>n.jsEnd&&(n.jsEnd=e,n.interaction.lastCb=e)},m.cancel=function(){this.cancelled=!0,this.interaction.remaining--},m.finish=function(t){var e=this;if(e.end)return;e.end=t;let n=e.parent;for(;null!==(i=n)&&void 0!==i&&i.cancelled;){var i;n=n.parent}n&&n.children.push(e),e.parent=null;var r=this.interaction;r.remaining--,r.lastFinish=t,r.checkFinish()};var v=d.Yu.ST,p=d.Yu.CT,g={};function N(t,e,n,i,r,a){this.agentIdentifier=a,this.ee=h.ee.get(a),g[a]=0,this.id=++g[a],this.eventName=t,this.nodes=0,this.remaining=0,this.finishTimer=null,this.checkingFinish=!1,this.lastCb=this.lastFinish=e,this.handlers=[],this.onFinished=r,this.done=!1;var o=(this.root=new l(this,null,"interaction",e)).attrs;o.trigger=t,o.initialPageURL=(0,d.OP)(a).origin,o.oldRoute=i,o.newURL=o.oldURL=n,o.custom={},o.store={}}var T=N.prototype;T.checkFinish=function(){var t=this;t.remaining>0?t._resetFinishCheck():t.checkingFinish||null===t.root.end&&(t._resetFinishCheck(),t.checkingFinish=!0,t.finishTimer=v((()=>{t.checkingFinish=!1,t.finishTimer=v((()=>{t.finishTimer=null,t.remaining<=0&&t.finish()}),1)}),0))},T.setNewURL=function(t){this.root.attrs.newURL=t},T.setNewRoute=function(t){this.root.attrs.newRoute=t},T.onNodeAdded=function(){this._resetFinishCheck()},T._resetFinishCheck=function(){this.finishTimer&&(p(this.finishTimer),this.finishTimer=null,this.checkingFinish=!1)},T.finish=function(){var t=this,e=t.root;if(null===e.end){var n=Math.max(t.lastCb,t.lastFinish),i=e.attrs.custom;this.onFinished&&this.onFinished(this),(0,s.D)((0,d.C5)(t.agentIdentifier).jsAttributes,(function(t,e){t in i||(i[t]=e)})),e.end=n,t.ee.emit("interaction",[this])}};var y=n(1997),E=n(7661),S=n(8575),b=n(6313),L=n(3114);class I extends L.w{constructor(t){super(t),this.firstTimestamp=void 0}serializeMultiple(t,e,n){const i=(0,d.C5)(this.sharedContext.agentIdentifier);var r=(0,b.FX)(this.sharedContext.agentIdentifier),a="bel.7";return t.forEach((t=>{a+=";"+this.serializeInteraction(t.root,e,n,t.routeChange,r,i)})),this.firstTimestamp=void 0,a}serializeSingle(t,e,n,i){const r=(0,d.C5)(this.sharedContext.agentIdentifier);var a=(0,b.FX)(this.sharedContext.agentIdentifier),o="bel.7;"+this.serializeInteraction(t,e,n,i,a,r);return this.firstTimestamp=void 0,o}serializeInteraction(t,e,n,i,r,a){e=e||0;var o="initialPageLoad"===t.attrs.trigger,u={interaction:1,ajax:2,customTracer:4},c=!0;const d=(t,h)=>{if("customEnd"===t.type)return h.push([3,(0,b.uR)(t.end-this.firstTimestamp)]);var f=t.type,l=u[f],m=t.start,v=t.children.length,p=0,g=a.atts,N=o&&n.length&&1===l,T=[],y=t.attrs,E=y.metrics,L=y.params,I=a.queueTime,R=a.applicationTime;"undefined"===typeof this.firstTimestamp?(m+=e,this.firstTimestamp=m):m-=this.firstTimestamp;var x=[(0,b.uR)(m),(0,b.uR)(t.end-t.start),(0,b.uR)(t.jsEnd-t.end),(0,b.uR)(t.jsTime)];switch(l){case 1:x[2]=(0,b.uR)(t.jsEnd-this.firstTimestamp),x.push(r(y.trigger),r((0,S.f)(y.initialPageURL,c)),r((0,S.f)(y.oldURL,c)),r((0,S.f)(y.newURL,c)),r(y.customName),o?"":i?1:2,(0,b.AG)(o&&I,b.uR,!0)+(0,b.AG)(o&&R,b.uR,!0)+(0,b.AG)(y.oldRoute,r,!0)+(0,b.AG)(y.newRoute,r,!0)+r(y.id),r(t.id),(0,b.AG)(y.firstPaint,b.uR,!0)+(0,b.AG)(y.firstContentfulPaint,b.uR,!1));var C=(0,b.n1)(y.custom,r);T=T.concat(C),p=C.length,g&&(v++,T.push("a,"+r(g)));break;case 2:if(x.push(r(L.method),(0,b.uR)(L.status),r(L.host),r(L.pathname),(0,b.uR)(E.txSize),(0,b.uR)(E.rxSize),y.isFetch?1:y.isJSONP?2:"",r(t.id),(0,b.AG)(t.dt&&t.dt.spanId,r,!0)+(0,b.AG)(t.dt&&t.dt.traceId,r,!0)+(0,b.AG)(t.dt&&t.dt.timestamp,b.uR,!1)),Object.keys((null===L||void 0===L?void 0:L.gql)||{}).length){var w=(0,b.n1)(L.gql,r);T=T.concat(w),p=w.length}break;case 4:var P=y.tracedTime;x.push(r(y.name),(0,b.AG)(P,b.uR,!0)+r(t.id))}for(var F=0;F<t.children.length;F++)d(t.children[F],T);if(x.unshift((0,b.uR)(l),(0,b.uR)(v+=p)),h.push(x),v&&h.push(T.join(";")),N){var A=",",_="b",O=0;(0,s.D)(n.slice(1,21),(function(t,e){void 0!==e?(_+=A+(0,b.uR)(e-O),A=",",O=e):(_+=A+"!",A="")})),h.push(_)}else 1===l&&h.push("");return h};return d(t,[]).join(";")}}var R=n(8736),x=n(9025),C=n(1527),w=n(7911),P=n(6550),F=n(5596),A=n(3980),_=n(5894),O=n(6477);const{FEATURE_NAME:X,INTERACTION_EVENTS:k,MAX_TIMER_BUDGET:M,FN_START:U,FN_END:j,CB_START:D,INTERACTION_API:z,REMAINING:H,INTERACTION:B,SPA_NODE:G,JSONP_NODE:q,FETCH_START:Y,FETCH_DONE:J,FETCH_BODY:V,JSONP_END:Z,originalSetTimeout:$}=R;class W extends C.m{constructor(t,e){super(t,e,X),this.state={initialPageURL:(0,d.OP)(t).origin,lastSeenUrl:(0,d.OP)(t).origin,lastSeenRouteName:null,timerMap:{},timerBudget:M,currentNode:null,prevNode:null,nodeOnLastHashUpdate:null,initialPageLoad:null,pageLoaded:!1,childTime:0,depth:0,harvestTimeSeconds:(0,d.Mt)(t,"spa.harvestTimeSeconds")||10,interactionsToHarvest:[],interactionsSent:[],disableSpaFix:((0,d.Mt)(t,"feature_flags")||[]).indexOf("disable-spa-fix")>-1},this.serializer=new I(this);const{state:n,serializer:i}=this;let{blocked:f}=this;const l=h.ee.get(t),m=l.get("mutation"),v=l.get("promise"),p=l.get("history"),g=l.get("events"),T=l.get("timer"),S=l.get("fetch"),b=l.get("jsonp"),L=l.get("xhr"),R=l.get("tracer"),C=new E.o("events",{onFinished:function(t){t.sent&&t.retry&&n.interactionsSent.length>0&&(n.interactionsSent.forEach((function(t){n.interactionsToHarvest.unshift(t)})),n.interactionsSent=[])},retryDelay:n.harvestTimeSeconds},{agentIdentifier:t,ee:l});if(C.harvest.on("events",(function(t){if(0===n.interactionsToHarvest.length||f)return{};var e=i.serializeMultiple(n.interactionsToHarvest,0,u.zJ);t.retry&&n.interactionsToHarvest.forEach((function(t){n.interactionsSent.push(t)}));return n.interactionsToHarvest=[],{body:{e:e}}})),(0,r.X)("block-spa",(()=>{f=!0,C.stopTimer(!0)}),this.featureName,l),!1!==(0,d.Mt)(t,"spa.enabled")){n.initialPageLoad=new N("initialPageLoad",0,n.lastSeenUrl,n.lastSeenRouteName,rt,t),n.initialPageLoad.save=!0,n.prevInteraction=n.initialPageLoad,n.currentNode=n.initialPageLoad.root,n.initialPageLoad[H]++,(0,r.X)(U,K,this.featureName,l),(0,r.X)(D,K,this.featureName,v);var W={getCurrentNode:function(){return n.currentNode},setCurrentNode:it};(0,r.X)("spa-register",(function(t){"function"===typeof t&&t(W)}),x.D.spa,l),(0,r.X)(j,Q,this.featureName,l),(0,r.X)("cb-end",Q,this.featureName,v),(0,r.X)(U,(function(e,i){var r=e[0],a=r.type,o=r["__nrNode:".concat(F.a)];if(!n.pageLoaded&&("load"===a&&i===window||A.LW)&&(n.pageLoaded=!0,this.prevNode=n.currentNode=null,n.initialPageLoad&&(o=n.initialPageLoad.root,n.initialPageLoad[H]=0,$((function(){k.push("popstate")})))),o)it(o);else if("hashchange"===a)it(n.nodeOnLastHashUpdate),n.nodeOnLastHashUpdate=null;else if(i instanceof XMLHttpRequest)it(l.context(i).spaNode);else if(!n.currentNode&&-1!==k.indexOf(a)){var s=new N(a,this[U],n.lastSeenUrl,n.lastSeenRouteName,rt,t);if(n.prevInteraction=s,it(s.root),"click"===a){var u=function(t){var e=t.tagName.toLowerCase();if(-1!==["a","button","input"].indexOf(e))return t.title||t.value||t.innerText}(r.target);u&&(n.currentNode.attrs.custom.actionText=u)}}r["__nrNode:".concat(F.a)]=n.currentNode}),this.featureName,g),(0,r.X)("setTimeout-end",(function(t,e,i){!n.currentNode||n.timerBudget-this.timerDuration<0||(!t||t[0]instanceof Function)&&(n.currentNode[B][H]++,this.timerId=i,n.timerMap[i]=n.currentNode,this.timerBudget=n.timerBudget-50)}),this.featureName,T),(0,r.X)("clearTimeout-start",(function(t){var e=t[0],i=n.timerMap[e];if(i){var r=i[B];r[H]--,r.checkFinish(),delete n.timerMap[e]}}),this.featureName,T),(0,r.X)(U,(function(){n.timerBudget=this.timerBudget||M;var t=this.timerId,e=n.timerMap[t];it(e),delete n.timerMap[t],e&&e[B][H]--}),this.featureName,T),(0,r.X)(U,(function(){it(this[G])}),this.featureName,L),(0,r.X)("new-xhr",(function(){if(!n.disableSpaFix&&!n.currentNode&&n.prevInteraction&&!n.prevInteraction.ignored){const t=n.prevInteraction;n.currentNode=t.root,t.root.end=null}n.currentNode&&(this[G]=n.currentNode.child("ajax",null,null,!0))}),this.featureName,L),(0,r.X)("send-xhr-start",(function(){var t=this[G];t&&!this.sent&&(this.sent=!0,t.dt=this.dt,t.jsEnd=t.start=this.startTime,t[B][H]++)}),this.featureName,L),(0,r.X)("xhr-resolved",(function(){var t=this[G];if(t){if(!(0,o.z)(this.params))return void t.cancel();var e=t.attrs;e.params=this.params,e.metrics=this.metrics,t.finish(this.endTime),this.currentNode&&this.currentNode.interaction&&this.currentNode.interaction.checkFinish()}}),this.featureName,l),(0,r.X)("new-jsonp",(function(t){n.currentNode&&((this[q]=n.currentNode.child("ajax",this[Y])).start=this["new-jsonp"],this.url=t,this.status=null)}),this.featureName,b),(0,r.X)("cb-start",(function(t){var e=this[q];e&&(it(e),this.status=200)}),this.featureName,b),(0,r.X)("jsonp-error",(function(){var t=this[q];t&&(it(t),this.status=0)}),this.featureName,b),(0,r.X)(Z,(function(){var t=this[q];if(t){if(null===this.status)return void t.cancel();var e=t.attrs,n=e.params={},i=(0,a.e)(this.url);n.method="GET",n.pathname=i.pathname,n.host=i.hostname+":"+i.port,n.status=this.status,e.metrics={txSize:0,rxSize:0},e.isJSONP=!0,t.jsEnd=this[Z],t.jsTime=this[D]?this[Z]-this[D]:0,t.finish(t.jsEnd)}}),this.featureName,b),(0,r.X)(Y,(function(t,e){if(t){if(!n.disableSpaFix&&!n.currentNode&&n.prevInteraction&&!n.prevInteraction.ignored){const t=n.prevInteraction;n.currentNode=t.root,t.root.end=null}n.currentNode&&(this[G]=n.currentNode.child("ajax",this[Y]),e&&this[G]&&(this[G].dt=e))}}),this.featureName,S),(0,r.X)(V+"start",(function(t){n.currentNode&&(this[G]=n.currentNode,n.currentNode[B][H]++)}),this.featureName,S),(0,r.X)(V+"end",(function(t,e,n){var i=this[G];i&&i[B][H]--}),this.featureName,S),(0,r.X)(J,(function(t,e){var n=this[G];if(n){if(t||!(0,o.z)(this.params))return void n.cancel();var i=n.attrs;i.params=this.params,i.metrics={txSize:this.txSize,rxSize:this.rxSize},i.isFetch=!0,n.finish(this[J])}}),this.featureName,S),(0,r.X)("newURL",(function(t,e){if(n.currentNode)n.currentNode[B].setNewURL(t);else if(n.prevInteraction&&!n.prevInteraction.ignored){const e=n.prevInteraction;e.setNewURL(t),e.root.end=null,it(e.root)}n.currentNode&&(n.lastSeenUrl!==t&&(n.currentNode[B].routeChange=!0),e&&(n.nodeOnLastHashUpdate=n.currentNode)),n.lastSeenUrl=t}),this.featureName,p),b.on("dom-start",(function(t){if(n.currentNode){var e=t[0],i=e&&"SCRIPT"===e.nodeName&&""!==e.src,r=n.currentNode.interaction;i&&(r[H]++,e.addEventListener("load",(function(){r[H]--,r.checkFinish()}),(0,y.m$)(!1)),e.addEventListener("error",(function(){r[H]--,r.checkFinish()}),(0,y.m$)(!1)))}})),(0,r.X)(U,(function(){it(n.prevNode)}),this.featureName,m),(0,r.X)("resolve-start",nt,this.featureName,v),(0,r.X)("executor-err",nt,this.featureName,v),(0,r.X)("propagate",(function(t,e){!e&&this[G]||(this[G]=n.currentNode)}),this.featureName,v),(0,r.X)(D,(function(){it((this.getCtx?this.getCtx():this)[G])}),this.featureName,v),(0,r.X)(z+"get",(function(e){var i,r,a,o;o=null!==n&&void 0!==n&&null!==(i=n.currentNode)&&void 0!==i&&i[B]?this.ixn=n.currentNode[B]:null===(null===n||void 0===n||null===(r=n.prevNode)||void 0===r?void 0:r.end)&&"initialPageLoad"!==(null===n||void 0===n||null===(a=n.prevNode)||void 0===a||null===(a=a[B])||void 0===a||null===(a=a.root)||void 0===a||null===(a=a[B])||void 0===a?void 0:a.eventName)?this.ixn=n.prevNode[B]:this.ixn=new N("api",e,n.lastSeenUrl,n.lastSeenRouteName,rt,t),n.currentNode||(o.checkFinish(),n.depth&&it(o.root))}),this.featureName,l),(0,r.X)(z+"actionText",(function(t,e){var n=this.ixn.root.attrs.custom;e&&(n.actionText=e)}),this.featureName,l),(0,r.X)(z+"setName",(function(t,e,n){var i=this.ixn.root.attrs;e&&(i.customName=e),n&&(i.trigger=n)}),this.featureName,l),(0,r.X)(z+"setAttribute",(function(t,e,n){this.ixn.root.attrs.custom[e]=n}),this.featureName,l),(0,r.X)(z+"end",(function(t){var e=this.ixn,n=et(e);it(null),n.child("customEnd",t).finish(t),e.finish()}),this.featureName,l),(0,r.X)(z+"ignore",(function(t){this.ixn.ignored=!0}),this.featureName,l),(0,r.X)(z+"save",(function(t){this.ixn.save=!0}),this.featureName,l),(0,r.X)(z+"tracer",(function(t,e,n){var i=this.ixn,r=et(i),a=l.context(n);if(!e)return a.inc=++i[H],a[G]=r;a[G]=r.child("customTracer",t,e)}),this.featureName,l),(0,r.X)(U,tt,this.featureName,R),(0,r.X)("no-"+U,tt,this.featureName,R),(0,r.X)(z+"getContext",(function(t,e){var n=this.ixn.root.attrs.store;setTimeout((function(){e(n)}),0)}),this.featureName,l),(0,r.X)(z+"onEnd",(function(t,e){this.ixn.handlers.push(e)}),this.featureName,l),(0,r.X)("api-routeName",(function(t,e){n.lastSeenRouteName=e,n.currentNode&&n.currentNode[B].setNewRoute(e)}),this.featureName,l),l.on("errorAgg",(function(t,e,i,r){n.currentNode&&(i._interactionId=n.currentNode.interaction.id,n.currentNode.type&&"interaction"!==n.currentNode.type&&(i._interactionNodeId=n.currentNode.id))})),l.on("interaction",(function(t){var e,i,r,a;if(t.ignored||!t.save&&!t.routeChange)return void l.emit("interactionDiscarded",[t]);n.prevInteraction===t&&(n.prevInteraction=null);t.root.attrs.id=(0,c.Rl)(),"initialPageLoad"===t.root.attrs.trigger&&(t.root.attrs.firstPaint=P.U.current.value,t.root.attrs.firstContentfulPaint=w.y.current.value);l.emit("interactionSaved",[t]),n.interactionsToHarvest.push(t);let o="RouteChange";"initialPageLoad"===(null===(e=t.root)||void 0===e||null===(e=e.attrs)||void 0===e?void 0:e.trigger)?o="InitialPageLoad":"api"===(null===(i=t.root)||void 0===i||null===(i=i.attrs)||void 0===i?void 0:i.trigger)&&(o="Custom");(0,_.p)(O.xS,["Spa/Interaction/".concat(o,"/Duration/Ms"),Math.max(((null===(r=t.root)||void 0===r?void 0:r.end)||0)-((null===(a=t.root)||void 0===a?void 0:a.start)||0),0)],void 0,x.D.metrics,l),C.scheduleHarvest(0)})),this.drain()}function K(){n.depth++,this.prevNode=n.currentNode,this.ct=n.childTime,n.childTime=0,n.timerBudget=M}function Q(){n.depth--;var t=this.jsTime||0,e=t-n.childTime;n.childTime=this.ct+t,n.currentNode&&(n.currentNode.callback(e,this[j]),this.isTraced&&(n.currentNode.attrs.tracedTime=e)),this.jsTime=n.currentNode?0:e,it(this.prevNode),this.prevNode=null,n.timerBudget=M}function tt(t,e,n){var i=this[G];if(i){var r=i[B],a=this.inc;this.isTraced=!0,a?r[H]--:i&&i.finish(t),n?it(i):r.checkFinish()}}function et(t){return n.currentNode&&n.currentNode[B]===t?n.currentNode:t.root}function nt(){this.resolved||(this.resolved=!0,this[G]=n.currentNode)}function it(t){n.pageLoaded||t||!n.initialPageLoad||(t=n.initialPageLoad.root),n.currentNode&&n.currentNode[B].checkFinish(),n.prevNode=n.currentNode,n.currentNode=t&&!t[B].root.end?t:null}function rt(t){t===n.initialPageLoad&&(n.initialPageLoad=null);var e=t.root,i=e.attrs;n.currentNode=e,(0,s.D)(t.handlers,(function(t,e){e(i.store)})),it(null)}}}(0,i.Z)(W,"featureName",X)},1682:(t,e,n)=>{n.d(e,{Fu:()=>k,NO:()=>K,Yn:()=>Z,a4:()=>R,mr:()=>et,mw:()=>C});var i,r,a,o,s,u=-1,c=function(t){addEventListener("pageshow",(function(e){e.persisted&&(u=e.timeStamp,t(e))}),!0)},d=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},h=function(){var t=d();return t&&t.activationStart||0},f=function(t,e){var n=d(),i="navigate";return u>=0?i="back-forward-cache":n&&(document.prerendering||h()>0?i="prerender":document.wasDiscarded?i="restore":n.type&&(i=n.type.replace(/_/g,"-"))),{name:t,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:i}},l=function(t,e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var i=new PerformanceObserver((function(t){Promise.resolve().then((function(){e(t.getEntries())}))}));return i.observe(Object.assign({type:t,buffered:!0},n||{})),i}}catch(t){}},m=function(t,e,n,i){var r,a;return function(o){e.value>=0&&(o||i)&&((a=e.value-(r||0))||void 0===r)&&(r=e.value,e.delta=a,e.rating=function(t,e){return t>e[1]?"poor":t>e[0]?"needs-improvement":"good"}(e.value,n),t(e))}},v=function(t){requestAnimationFrame((function(){return requestAnimationFrame((function(){return t()}))}))},p=function(t){var e=function(e){"pagehide"!==e.type&&"hidden"!==document.visibilityState||t(e)};addEventListener("visibilitychange",e,!0),addEventListener("pagehide",e,!0)},g=function(t){var e=!1;return function(n){e||(t(n),e=!0)}},N=-1,T=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},y=function(t){"hidden"===document.visibilityState&&N>-1&&(N="visibilitychange"===t.type?t.timeStamp:0,S())},E=function(){addEventListener("visibilitychange",y,!0),addEventListener("prerenderingchange",y,!0)},S=function(){removeEventListener("visibilitychange",y,!0),removeEventListener("prerenderingchange",y,!0)},b=function(){return N<0&&(N=T(),E(),c((function(){setTimeout((function(){N=T(),E()}),0)}))),{get firstHiddenTime(){return N}}},L=function(t){document.prerendering?addEventListener("prerenderingchange",(function(){return t()}),!0):t()},I=[1800,3e3],R=function(t,e){e=e||{},L((function(){var n,i=b(),r=f("FCP"),a=l("paint",(function(t){t.forEach((function(t){"first-contentful-paint"===t.name&&(a.disconnect(),t.startTime<i.firstHiddenTime&&(r.value=Math.max(t.startTime-h(),0),r.entries.push(t),n(!0)))}))}));a&&(n=m(t,r,I,e.reportAllChanges),c((function(i){r=f("FCP"),n=m(t,r,I,e.reportAllChanges),v((function(){r.value=performance.now()-i.timeStamp,n(!0)}))})))}))},x=[.1,.25],C=function(t,e){e=e||{},R(g((function(){var n,i=f("CLS",0),r=0,a=[],o=function(t){t.forEach((function(t){if(!t.hadRecentInput){var e=a[0],n=a[a.length-1];r&&t.startTime-n.startTime<1e3&&t.startTime-e.startTime<5e3?(r+=t.value,a.push(t)):(r=t.value,a=[t])}})),r>i.value&&(i.value=r,i.entries=a,n())},s=l("layout-shift",o);s&&(n=m(t,i,x,e.reportAllChanges),p((function(){o(s.takeRecords()),n(!0)})),c((function(){r=0,i=f("CLS",0),n=m(t,i,x,e.reportAllChanges),v((function(){return n()}))})),setTimeout(n,0))})))},w={passive:!0,capture:!0},P=new Date,F=function(t,e){i||(i=e,r=t,a=new Date,O(removeEventListener),A())},A=function(){if(r>=0&&r<a-P){var t={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(e){e(t)})),o=[]}},_=function(t){if(t.cancelable){var e=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,e){var n=function(){F(t,e),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,w),removeEventListener("pointercancel",i,w)};addEventListener("pointerup",n,w),addEventListener("pointercancel",i,w)}(e,t):F(e,t)}},O=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return t(e,_,w)}))},X=[100,300],k=function(t,e){e=e||{},L((function(){var n,a=b(),s=f("FID"),u=function(t){t.startTime<a.firstHiddenTime&&(s.value=t.processingStart-t.startTime,s.entries.push(t),n(!0))},d=function(t){t.forEach(u)},h=l("first-input",d);n=m(t,s,X,e.reportAllChanges),h&&p(g((function(){d(h.takeRecords()),h.disconnect()}))),h&&c((function(){var a;s=f("FID"),n=m(t,s,X,e.reportAllChanges),o=[],r=-1,i=null,O(addEventListener),a=u,o.push(a),A()}))}))},M=0,U=1/0,j=0,D=function(t){t.forEach((function(t){t.interactionId&&(U=Math.min(U,t.interactionId),j=Math.max(j,t.interactionId),M=j?(j-U)/7+1:0)}))},z=function(){return s?M:performance.interactionCount||0},H=function(){"interactionCount"in performance||s||(s=l("event",D,{type:"event",buffered:!0,durationThreshold:0}))},B=[200,500],G=0,q=function(){return z()-G},Y=[],J={},V=function(t){var e=Y[Y.length-1],n=J[t.interactionId];if(n||Y.length<10||t.duration>e.latency){if(n)n.entries.push(t),n.latency=Math.max(n.latency,t.duration);else{var i={id:t.interactionId,latency:t.duration,entries:[t]};J[i.id]=i,Y.push(i)}Y.sort((function(t,e){return e.latency-t.latency})),Y.splice(10).forEach((function(t){delete J[t.id]}))}},Z=function(t,e){e=e||{},L((function(){var n;H();var i,r=f("INP"),a=function(t){t.forEach((function(t){t.interactionId&&V(t),"first-input"===t.entryType&&!Y.some((function(e){return e.entries.some((function(e){return t.duration===e.duration&&t.startTime===e.startTime}))}))&&V(t)}));var e,n=(e=Math.min(Y.length-1,Math.floor(q()/50)),Y[e]);n&&n.latency!==r.value&&(r.value=n.latency,r.entries=n.entries,i())},o=l("event",a,{durationThreshold:null!==(n=e.durationThreshold)&&void 0!==n?n:40});i=m(t,r,B,e.reportAllChanges),o&&("interactionId"in PerformanceEventTiming.prototype&&o.observe({type:"first-input",buffered:!0}),p((function(){a(o.takeRecords()),r.value<0&&q()>0&&(r.value=0,r.entries=[]),i(!0)})),c((function(){Y=[],G=z(),r=f("INP"),i=m(t,r,B,e.reportAllChanges)})))}))},$=[2500,4e3],W={},K=function(t,e){e=e||{},L((function(){var n,i=b(),r=f("LCP"),a=function(t){var e=t[t.length-1];e&&e.startTime<i.firstHiddenTime&&(r.value=Math.max(e.startTime-h(),0),r.entries=[e],n())},o=l("largest-contentful-paint",a);if(o){n=m(t,r,$,e.reportAllChanges);var s=g((function(){W[r.id]||(a(o.takeRecords()),o.disconnect(),W[r.id]=!0,n(!0))}));["keydown","click"].forEach((function(t){addEventListener(t,(function(){return setTimeout(s,0)}),!0)})),p(s),c((function(i){r=f("LCP"),n=m(t,r,$,e.reportAllChanges),v((function(){r.value=performance.now()-i.timeStamp,W[r.id]=!0,n(!0)}))}))}}))},Q=[800,1800],tt=function t(e){document.prerendering?L((function(){return t(e)})):"complete"!==document.readyState?addEventListener("load",(function(){return t(e)}),!0):setTimeout(e,0)},et=function(t,e){e=e||{};var n=f("TTFB"),i=m(t,n,Q,e.reportAllChanges);tt((function(){var r=d();if(r){var a=r.responseStart;if(a<=0||a>performance.now())return;n.value=Math.max(a-h(),0),n.entries=[r],i(!0),c((function(){n=f("TTFB",0),(i=m(t,n,Q,e.reportAllChanges))(!0)}))}}))}}}]);
//# sourceMappingURL=spa-aggregate.272cd061.chunk.js.map