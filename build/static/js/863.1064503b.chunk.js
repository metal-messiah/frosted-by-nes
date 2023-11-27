/*! For license information please see 863.1064503b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfrosted_by_nes=self.webpackChunkfrosted_by_nes||[]).push([[863],{2041:(t,e,n)=>{n.d(e,{M:()=>b});var s=n(6323),r=n(8038),i=n(3197);function o(){return""+location}var a=n(8958),u=n(8575),l=n(6276),c=n(1997),d=n(4355);function h(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"string",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return t&&"object"===typeof t?(Object.keys(t).forEach((r=>{"object"===typeof t[r]?h(t[r],e,n,s):typeof t[r]!==n||s.includes(r)||(t[r]=e(t[r]))})),t):t}var f=n(3114),g=n(8374),y=n(3980),v=n(1760);const p={};class b extends f.w{constructor(t){super(t),this.tooManyRequestsDelay=(0,a.Mt)(this.sharedContext.agentIdentifier,"harvest.tooManyRequestsDelay")||60,this.obfuscator=new d.RR(this.sharedContext),this._events={}}sendX(){var t,e,n;let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=i.qD({isFinalHarvest:null===(t=s.opts)||void 0===t?void 0:t.unload}),o={retry:!(null!==(e=s.opts)&&void 0!==e&&e.unload)&&r===i.Be,isFinalHarvest:!0===(null===(n=s.opts)||void 0===n?void 0:n.unload)},a=this.createPayload(s.endpoint,o);return(this.obfuscator.shouldObfuscate()?this.obfuscateAndSend.bind(this):this._send.bind(this))({...s,payload:a,submitMethod:r})}send(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(this.obfuscator.shouldObfuscate()?this.obfuscateAndSend.bind(this):this._send.bind(this))(t)}obfuscateAndSend(){var t=this;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{payload:n={}}=e;return h(n,(function(){return t.obfuscator.obfuscateString(...arguments)}),"string",["e"]),this._send({...e,payload:n})}_send(t){var e;let{endpoint:n,payload:o={},opts:u={},submitMethod:l,cbFinished:d,customUrl:h,raw:f,includeBaseParams:g=!0}=t;const b=(0,a.C5)(this.sharedContext.agentIdentifier);if(!b.errorBeacon)return!1;const m=(0,a.OP)(this.sharedContext.agentIdentifier);let{body:w,qs:x}=this.cleanPayload(o);if(0===Object.keys(w).length&&(null===u||void 0===u||!u.sendEmptyBody))return d&&d({sent:!1}),!1;const A=(0,a.P_)(this.sharedContext.agentIdentifier),C=!1===A.ssl?"http":"https",_=A.proxy.beacon||b.errorBeacon,j="rum"!==n?"/".concat(n):"";let q="".concat(C,"://").concat(_).concat(j,"/1/").concat(b.licenseKey);h&&(q=h),f&&(q="".concat(C,"://").concat(_,"/").concat(n));const I=!f&&g?this.baseQueryString():"";let P=(0,s.j6)(x,m.maxBytes);l||(l=i.qD({isFinalHarvest:u.unload})),""===I&&P.startsWith("&")&&(P=P.substring(1));const R="".concat(q,"?").concat(I).concat(P);!(null===x||void 0===x||null===(e=x.attributes)||void 0===e||!e.includes("gzip"))||(w="events"===n?w.e:(0,r.P)(w),w.length>75e4&&1===(p[n]=((null===p||void 0===p?void 0:p[n])||0)+1)&&(0,v.Z)("The Browser Agent is attempting to send a very large payload to /".concat(n,". This is usually tied to large amounts of custom attributes. Please check your configurations."))),w&&0!==w.length&&"{}"!==w&&"[]"!==w||(w="");const k=[];k.push({key:"content-type",value:"text/plain"});let B=l({url:R,body:w,sync:u.unload&&(y.v6||y.w1),headers:k});if(!u.unload&&d&&l===i.Be){const t=this;B.addEventListener("load",(function(){const e={sent:!0,status:this.status};429===this.status?(e.retry=!0,e.delay=t.tooManyRequestsDelay):408!==this.status&&500!==this.status&&503!==this.status||(e.retry=!0),u.needResponse&&(e.responseText=this.responseText),d(e)}),(0,c.m$)(!1))}return B}baseQueryString(){var t;const e=(0,a.OP)(this.sharedContext.agentIdentifier),n=(0,a.C5)(this.sharedContext.agentIdentifier),r=(0,u.f)(o()),i=this.obfuscator.shouldObfuscate()?this.obfuscator.obfuscateString(r):r;return["a="+n.applicationID,(0,s.wu)("sa",n.sa?""+n.sa:""),(0,s.wu)("v",g.q4),m(n),(0,s.wu)("ct",e.customTransaction),"&rst="+(0,l.z)(),"&ck=0","&s="+((null===(t=e.session)||void 0===t?void 0:t.state.value)||"0"),(0,s.wu)("ref",i),(0,s.wu)("ptid",e.ptid?""+e.ptid:"")].join("")}createPayload(t,e){const n=this._events[t],s={body:{},qs:{}};if(Array.isArray(n)&&n.length>0)for(let r=0;r<n.length;r++){const t=n[r](e);t&&(s.body={...s.body,...t.body||{}},s.qs={...s.qs,...t.qs||{}})}return s}cleanPayload(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=t=>"undefined"!==typeof Uint8Array&&t instanceof Uint8Array||Array.isArray(t)?t:"string"===typeof t?t.length>0?t:null:Object.entries(t||{}).reduce(((t,e)=>{let[n,s]=e;return("number"===typeof s||"string"===typeof s&&s.length>0||"object"===typeof s&&Object.keys(s||{}).length>0)&&(t[n]=s),t}),{});return{body:e(t.body),qs:e(t.qs)}}on(t,e){Array.isArray(this._events[t])||(this._events[t]=[]),this._events[t].push(e)}}function m(t){return t.transactionName?(0,s.wu)("to",t.transactionName):(0,s.wu)("t",t.tNamePlain||"Unnamed Transaction")}},8575:(t,e,n)=>{n.d(e,{f:()=>i});var s=/([^?#]*)[^#]*(#[^?]*|$).*/,r=/([^?#]*)().*/;function i(t,e){return t.replace(e?s:r,"$1$2")}},6323:(t,e,n)=>{n.d(e,{j6:()=>c,wu:()=>d});var s=n(3973),r=n(8038),i={"%2C":",","%3A":":","%2F":"/","%40":"@","%24":"$","%3B":";"},o=(0,s.D)(i,(function(t){return t})),a=new RegExp(o.join("|"),"g");function u(t){return i[t]}function l(t){return null===t||void 0===t?"null":encodeURIComponent(t).replace(a,u)}function c(t,e){var n=0,i="";return(0,s.D)(t,(function(t,s){var o,a,u=[];if("string"===typeof s||!Array.isArray(s)&&null!==s&&void 0!==s&&s.toString().length)o="&"+t+"="+l(s),n+=o.length,i+=o;else if(Array.isArray(s)&&s.length){for(n+=9,a=0;a<s.length&&(o=l((0,r.P)(s[a])),n+=o.length,!("undefined"!==typeof e&&n>=e));a++)u.push(o);i+="&"+t+"=%5B"+u.join(",")+"%5D"}})),i}function d(t,e){return e&&"string"===typeof e?"&"+t+"="+l(e):""}},8649:(t,e,n)=>{n.d(e,{V:()=>r});var s=n(3980);function r(){var t;return Boolean("file:"===(null===s._A||void 0===s._A||null===(t=s._A.location)||void 0===t?void 0:t.protocol))}},4355:(t,e,n)=>{n.d(e,{$c:()=>l,Ng:()=>c,RR:()=>u});var s=n(8958),r=n(3114),i=n(8649),o=n(1760),a={regex:/^file:\/\/(.*)/,replacement:atob("ZmlsZTovL09CRlVTQ0FURUQ=")};class u extends r.w{shouldObfuscate(){return l(this.sharedContext.agentIdentifier).length>0}obfuscateString(t){if(!t||"string"!==typeof t)return t;for(var e=l(this.sharedContext.agentIdentifier),n=t,s=0;s<e.length;s++){var r=e[s].regex,i=e[s].replacement||"*";n=n.replace(r,i)}return n}}function l(t){var e=[],n=(0,s.Mt)(t,"obfuscate")||[];return e=e.concat(n),(0,i.V)()&&e.push(a),e}function c(t){for(var e=!1,n=!1,s=0;s<t.length;s++){"regex"in t[s]?"string"===typeof t[s].regex||t[s].regex instanceof RegExp||((0,o.Z)('An obfuscation replacement rule contains a "regex" value with an invalid type (must be a string or RegExp)'),n=!0):((0,o.Z)('An obfuscation replacement rule was detected missing a "regex" value.'),n=!0);var r=t[s].replacement;r&&"string"!==typeof r&&((0,o.Z)('An obfuscation replacement rule contains a "replacement" value with an invalid type (must be a string)'),e=!0)}return!e&&!n}},3197:(t,e,n)=>{n.d(e,{Be:()=>i,qD:()=>r});var s=n(3980);function r(){let{isFinalHarvest:t=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t&&s.il&&s.Nk?o:i}function i(t){let{url:e,body:n=null,sync:s,method:r="POST",headers:i=[{key:"content-type",value:"text/plain"}]}=t;const o=new XMLHttpRequest;o.open(r,e,!s);try{"withCredentials"in o&&(o.withCredentials=!0)}catch(a){}return i.forEach((t=>{o.setRequestHeader(t.key,t.value)})),o.send(n),o}function o(t){let{url:e,body:n}=t;try{return window.navigator.sendBeacon.bind(window.navigator)(e,n)}catch(s){return!1}}},1527:(t,e,n)=>{n.d(e,{m:()=>l});var s=n(4613),r=n(9078),i=n(8958),o=n(8456),a=n(9700),u=n(7552);class l extends r.W{constructor(){super(...arguments),this.checkConfiguration()}waitForFlags(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Promise.all(t.map((t=>new Promise((e=>{(0,s.X)("rumresp-".concat(t),(t=>e(t)),this.featureName,this.ee)})))))}drain(){(0,u.L)(this.agentIdentifier,this.featureName)}checkConfiguration(){if(!(0,i.lF)(this.agentIdentifier)){var t;let s={...null===(t=(0,a.gG)().info)||void 0===t?void 0:t.jsAttributes};try{var e;s={...s,...null===(e=(0,i.C5)(this.agentIdentifier))||void 0===e?void 0:e.jsAttributes}}catch(n){}(0,o.j)({agentIdentifier:this.agentIdentifier},{...(0,a.gG)(),info:{...(0,a.gG)().info,jsAttributes:s},runtime:(0,i.OP)(this.agentIdentifier)})}}}}}]);
//# sourceMappingURL=863.1064503b.chunk.js.map