(window.saladictJSONP=window.saladictJSONP||[]).push([[1],{29:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"i",(function(){return g})),n.d(t,"b",(function(){return w})),n.d(t,"j",(function(){return _})),n.d(t,"a",(function(){return m}));var a=n(84);const r=["chinese","english","japanese","korean","french","spanish","deutsch"],o={chinese:/[\u4e00-\u9fa5]/,english:/[a-zA-Z]/,japanese:/[\u3041-\u3096\u30A0-\u30FF]/,korean:/[\u3131-\u4dff\u9fa6-\uD79D]/,french:/[\u00e0\u00e2\u00e4\u00e8\u00e9\u00ea\u00eb\u00ee\u00ef\u00f4\u0153\u00f9\u00fb\u00fc\u00ff\u00e7]/i,spanish:/[\u00e1\u00e9\u00ed\u00f3\u00fa\u00f1\u00fc\u00a1\u00bf]/i,deutsch:/[\u00E4\u00F6\u00FC\u00C4\u00D6\u00DC\u00df]/i},i=e=>o.chinese.test(e),s=e=>o.english.test(e),c=e=>o.japanese.test(e),u=e=>o.korean.test(e),l=e=>o.french.test(e),d=e=>o.deutsch.test(e),g=e=>o.spanish.test(e),f={chinese:Object(a.a)(i),english:Object(a.a)(s),japanese:Object(a.a)(c),korean:Object(a.a)(u),french:Object(a.a)(l),spanish:Object(a.a)(g),deutsch:Object(a.a)(d)},h=/[/[\]{}$^*+|?.\-~!@#%&()_='";:><,。？！，、；：“”﹃﹄「」﹁﹂‘’『』（）—［］〔〕【】…－～·‧《》〈〉﹏＿]/,p=new RegExp(`^(\\d|\\s|${h.source})+$`),b=new RegExp(`${o.chinese.source}|${o.japanese.source}|${o.korean.source}`),w=Object(a.a)(e=>(e.replace(new RegExp(h,"g")," ").replace(new RegExp(b,"g")," x ").match(/\S+/g)||"").length),_=[...r,"others","matchAll"];function m(e,t){if(!t)return!1;if(e.matchAll){if(p.test(t))return!1;if(e.others){let n=[/-|\.|\d|\s/],a=[];for(let t=r.length-1;t>=0;t--){const i=r[t];e[i]?n.push(o[i]):a.push(o[i])}for(let e=0;e<t.length;e++)if(n.every(n=>!n.test(t[e]))&&a.some(n=>n.test(t[e])))return!1;return!0}{const n=r.filter(t=>e[t]).map(e=>o[e]);n.push(/-|\.|\d|\s/);for(let e=t.length-1;e>=0;e--)if(n.every(n=>!n.test(t[e])))return!1;return!0}}{if(r.some(n=>e[n]&&f[n](t)))return!0;if(!e.others||p.test(t))return!1;const n=r.filter(t=>!e[t]).map(e=>o[e]);n.push(new RegExp(`${h.source}|\\d|\\s`));for(let e=t.length-1;e>=0;e--)if(n.every(n=>!n.test(t[e])))return!0;return!1}}},3:function(e,t,n){"use strict";(function(e){n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var a=n(188),r=n(16),o=n(8);const i=()=>{},s=new WeakMap,c=new WeakMap,u=new WeakMap,l={sync:{clear:f,remove:h,get:p,set:b,addListener:w,removeListener:_,createStream:m,get __storageArea__(){return"sync"}},local:{clear:f,remove:h,get:p,set:b,addListener:w,removeListener:_,createStream:m,get __storageArea__(){return"local"}},clear:f,addListener:w,removeListener:_,createStream:m,get __storageArea__(){return"all"}},d={send:y,addListener:O,removeListener:j,createStream:v,get __self__(){return!1},self:{initClient:k,initServer:function(){window.pageId="background page";const e=/^\[\[(.+)\]\]$/;browser.runtime.onMessage.addListener((t,n)=>{if(!t||!t.type)return;if("PAGE_INFO"===t.type)return Promise.resolve(function(e){const t={pageId:"",faviconURL:"",pageTitle:"",pageURL:""},n=e.tab;n?(t.pageId=n.id||"",n.favIconUrl&&(t.faviconURL=n.favIconUrl),n.url&&(t.pageURL=n.url),n.title&&(t.pageTitle=n.title)):(t.pageId="popup",e.url&&!e.url.startsWith("http")&&(t.faviconURL="https://saladict.crimx.com/favicon.ico"));return t}(n));const a=e.exec(t.type);if(a){t.type=a[1];const e=n.tab&&n.tab.id;return e?y(e,t):y(t)}})},send:async function(t){void 0===window.pageId&&await k();return browser.runtime.sendMessage(Object.assign({},t,{__pageId__:window.pageId,type:`[[${t.type}]]`})).catch(n=>{e.env.DEV_BUILD&&console.warn(n,t)})},addListener:O,removeListener:j,createStream:v,get __self__(){return!0}}};async function g(e,t){t&&(e=browser.runtime.getURL(e));const n=await browser.tabs.query({url:e});if(n.length>0){const{index:e,windowId:t}=n[0];"function"==typeof browser.tabs.highlight&&await browser.tabs.highlight({tabs:e,windowId:t}),await browser.windows.update(t,{focused:!0})}else await browser.tabs.create({url:e})}function f(){return"all"===this.__storageArea__?Promise.all([browser.storage.local.clear(),browser.storage.sync.clear()]).then(i):browser.storage[this.__storageArea__].clear()}function h(e){return browser.storage[this.__storageArea__].remove(e)}function p(...e){return browser.storage[this.__storageArea__].get(...e)}function b(e){return browser.storage[this.__storageArea__].set(e)}function w(...e){let t,n;if("function"==typeof e[0])t="",n=e[0];else{if("string"!=typeof e[0]||"function"!=typeof e[1])throw new Error("wrong arguments type");t=e[0],n=e[1]}let a=u.get(n);a||(a=new Map,u.set(n,a));const r=this.__storageArea__+t;let o=a.get(r);return o||(o=(e,a)=>{"all"!==this.__storageArea__&&a!==this.__storageArea__||t&&!(t in e)||n(e,a)},a.set(r,o)),browser.storage.onChanged.addListener(o)}function _(...e){let t,n;if("function"==typeof e[0])t="",n=e[0];else{if("string"!=typeof e[0]||"function"!=typeof e[1])throw new Error("wrong arguments type");t=e[0],n=e[1]}const a=u.get(n);if(a){if(!t)return a.forEach(e=>{browser.storage.onChanged.removeListener(e)}),void u.delete(n);{const e=this.__storageArea__+t,r=a.get(e);if(r)return browser.storage.onChanged.removeListener(r),a.delete(e),void(a.size<=0&&u.delete(n))}}browser.storage.onChanged.removeListener(n)}function m(e){if(!e)throw new Error("Missing key");return Object(a.a)(t=>this.addListener(e,t),t=>this.removeListener(e,t)).pipe(Object(r.a)(t=>(Array.isArray(t)?t[0]:t).hasOwnProperty(e)),Object(o.a)(t=>Array.isArray(t)?t[0][e]:t[e]))}function y(...t){return(1===t.length?browser.runtime.sendMessage(t[0]):browser.tabs.sendMessage(t[0],t[1])).catch(n=>{e.env.DEV_BUILD&&console.warn(n,...t)})}function O(...e){void 0===window.pageId&&k();const t=this.__self__?c:s,n=1===e.length?void 0:e[0],a=1===e.length?e[0]:e[1];let r=t.get(a);r||(r=new Map,t.set(a,r));let o=r.get(n||"__DEFAULT_MSGTYPE__");return o||(o=(e,t)=>{if(e&&(this.__self__?window.pageId===e.__pageId__:!e.__pageId__)&&(null==n||e.type===n))return a(e,t)},r.set(n||"__DEFAULT_MSGTYPE__",o)),browser.runtime.onMessage.addListener(o)}function j(...e){const t=this.__self__?c:s,n=1===e.length?void 0:e[0],a=1===e.length?e[0]:e[1],r=t.get(a);if(r){if(!n)return r.forEach(e=>browser.runtime.onMessage.removeListener(e)),void t.delete(a);{const e=r.get(n);if(e)return browser.runtime.onMessage.removeListener(e),r.delete(n),void(r.size<=0&&t.delete(a))}}browser.runtime.onMessage.removeListener(a)}function v(e){return(e?Object(a.a)(t=>this.addListener(e,t),t=>this.removeListener(e,t)):Object(a.a)(e=>this.addListener(e),e=>this.removeListener(e))).pipe(Object(o.a)(e=>Array.isArray(e)?e[0]:e))}function k(){return void 0===window.pageId?d.send({type:"PAGE_INFO"}).then(({pageId:e,faviconURL:t,pageTitle:n,pageURL:a})=>(window.pageId=e,window.faviconURL=t,n&&(window.pageTitle=n),a&&(window.pageURL=a),e)):Promise.resolve(window.pageId)}}).call(this,n(62))},346:function(e,t,n){"use strict";function a(){const e={baidu_page_translate:"x",baidu_search:"https://www.baidu.com/s?ie=utf-8&wd=%s",bing_dict:"https://cn.bing.com/dict/?q=%s",bing_search:"https://www.bing.com/search?q=%s",cambridge:"http://dictionary.cambridge.org/spellcheck/english-chinese-simplified/?q=%s",copy_pdf_url:"x",dictcn:"https://dict.eudic.net/dicts/en/%s",etymonline:"http://www.etymonline.com/index.php?search=%s",google_cn_page_translate:"x",google_page_translate:"x",google_search:"https://www.google.com/#newwindow=1&q=%s",google_translate:"https://translate.google.cn/#auto/zh-CN/%s",guoyu:"https://www.moedict.tw/%s",iciba:"http://www.iciba.com/%s",liangan:"https://www.moedict.tw/~%s",longman_business:"http://www.ldoceonline.com/search/?q=%s",merriam_webster:"http://www.merriam-webster.com/dictionary/%s",microsoft_page_translate:"x",oxford:"http://www.oxforddictionaries.com/us/definition/english/%s",saladict:"x",sogou_page_translate:"x",sogou:"https://fanyi.sogou.com/#auto/zh-CHS/%s",view_as_pdf:"x",youdao_page_translate:"x",youdao:"http://dict.youdao.com/w/%s",youglish:"https://youglish.com/search/%s"};return e}n.d(t,"a",(function(){return i}));const r=browser.i18n.getUILanguage()||"en",o=/^zh-CN|zh-TW|en$/.test(r)?"zh-HK"===r?"zh-TW":r:"en",i=function(){return{version:12,active:!0,analytics:!0,updateCheck:!0,noTypeField:!1,animation:!0,langCode:o,panelWidth:450,panelMaxHeightRatio:80,bowlOffsetX:15,bowlOffsetY:-45,darkMode:!1,panelCSS:"",fontSize:13,pdfSniff:!1,pdfWhitelist:[],pdfBlacklist:[["^(http|https)://[^/]*?cnki\\.net(/.*)?$","*://*.cnki.net/*"],["^(http|https)://[^/]*?googleusercontent\\.com(/.*)?$","*://*.googleusercontent.com/*"]],searhHistory:!1,searhHistoryInco:!1,editOnFav:!0,searchSuggests:!0,touchMode:!1,mode:{icon:!0,direct:!1,double:!1,holding:{shift:!1,ctrl:!1,meta:!1},instant:{enable:!1,key:"alt",delay:600}},pinMode:{direct:!0,double:!1,holding:{shift:!1,ctrl:!1,meta:!1},instant:{enable:!1,key:"alt",delay:600}},panelMode:{direct:!1,double:!1,holding:{shift:!1,ctrl:!1,meta:!1},instant:{enable:!1,key:"alt",delay:600}},qsPanelMode:{direct:!1,double:!1,holding:{shift:!1,ctrl:!0,meta:!1},instant:{enable:!1,key:"alt",delay:600}},bowlHover:!0,doubleClickDelay:450,tripleCtrl:!0,tripleCtrlPreload:"clipboard",tripleCtrlAuto:!1,tripleCtrlLocation:"CENTER",tripleCtrlStandalone:!0,tripleCtrlHeight:600,tripleCtrlSidebar:"",tripleCtrlPageSel:!0,baPreload:"clipboard",baAuto:!1,baOpen:"popup_panel",ctxTrans:{google:!0,sogou:!0,youdaotrans:!0,baidu:!0,tencent:!1,caiyun:!1},language:{chinese:!0,english:!0,japanese:!0,korean:!0,french:!0,spanish:!0,deutsch:!0,others:!1,matchAll:!1},autopron:{cn:{dict:"",list:["zdic","guoyu"]},en:{dict:"",list:["bing","cambridge","cobuild","eudic","longman","macmillan","lexico","urban","websterlearner","youdao"],accent:"uk"},machine:{dict:"",list:["google","sogou","tencent","baidu","caiyun"],src:"trans"}},whitelist:[],blacklist:[["^https://stackedit\\.io(/.*)?$","https://stackedit.io/*"],["^https://docs\\.google\\.com(/.*)?$","https://docs.google.com/*"],["^https://docs\\.qq\\.com(/.*)?$","https://docs.qq.com/*"]],contextMenus:{selected:["view_as_pdf","google_translate","google_search","saladict"],all:a()}}}},38:function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return p})),n.d(t,"f",(function(){return b})),n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return _}));var a=n(216),r=n.n(a),o=n(346),i=n(741),s=n(3),c=n(116),u=n(69),l=n(188),d=n(8);function g(e){return e&&1===e.v?JSON.parse(r.a.inflate(e.d,{to:"string"})):e}async function f(){let e=await p();return e=e&&e.version?Object(i.a)(e):Object(o.a)(),await b(e),e}async function h(){const e=Object(o.a)();return await b(e),e}async function p(){const{baseconfig:e}=await s.c.sync.get("baseconfig");return g(e||Object(o.a)())}function b(e){return s.c.sync.set({baseconfig:(t=e,{v:1,d:r.a.deflate(JSON.stringify(t),{to:"string"})})});var t}async function w(e){s.c.sync.addListener(t=>{if(t.baseconfig){const{newValue:n,oldValue:a}=t.baseconfig;n&&e({newConfig:g(n),oldConfig:g(a)})}})}function _(){return Object(c.a)(Object(u.a)(p()),Object(l.a)(w).pipe(Object(d.a)(e=>(Array.isArray(e)?e[0]:e).newConfig)))}},49:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return u}));var a=n(3);function r(e){return e?{date:e.date||Date.now(),text:e.text||"",context:e.context||"",title:e.title||"",url:e.url||"",favicon:e.favicon||"",trans:e.trans||"",note:e.note||""}:{date:Date.now(),text:"",context:"",title:"",url:"",favicon:"",trans:"",note:""}}function o(e){return a.a.send({type:"IS_IN_NOTEBOOK",payload:e}).catch((t=!1,e=>t));var t}async function i(e,t){await a.a.send({type:"SAVE_WORD",payload:{area:e,word:t}})}async function s(e,t){await a.a.send({type:"SYNC_SERVICE_DOWNLOAD"}),await a.a.send({type:"DELETE_WORDS",payload:{area:e,dates:t}})}function c(e,t){return a.a.send({type:"GET_WORDS_BY_TEXT",payload:{area:e,text:t}})}function u(e,t){return a.a.send({type:"GET_WORDS",payload:{area:e,...t}})}},668:function(e,t,n){"use strict";n.d(t,"a",(function(){return R}));var a=n(707),r=n(708),o=n(709),i=n(710),s=n(711),c=n(712),u=n(713),l=n(714),d=n(715),g=n(716),f=n(717),h=n(718),p=n(719),b=n(720),w=n(721),_=n(722),m=n(723),y=n(724),O=n(725),j=n(726),v=n(727),k=n(728),L=n(729),x=n(730),M=n(731),T=n(732),E=n(733),A=n(734),C=n(735),$=n(736),I=n(737),S=n(738);function R(){return{baidu:Object(a.a)(),bing:Object(r.a)(),caiyun:Object(o.a)(),cambridge:Object(i.a)(),cnki:Object(s.a)(),cobuild:Object(c.a)(),etymonline:Object(u.a)(),eudic:Object(l.a)(),google:Object(d.a)(),googledict:Object(g.a)(),guoyu:Object(f.a)(),hjdict:Object(h.a)(),jukuu:Object(p.a)(),lexico:Object(b.a)(),liangan:Object(w.a)(),longman:Object(_.a)(),macmillan:Object(m.a)(),mojidict:Object(y.a)(),naver:Object(O.a)(),renren:Object(j.a)(),shanbay:Object(v.a)(),sogou:Object(k.a)(),tencent:Object(L.a)(),urban:Object(x.a)(),vocabulary:Object(M.a)(),weblio:Object(T.a)(),weblioejje:Object(E.a)(),websterlearner:Object(A.a)(),wikipedia:Object(C.a)(),youdao:Object($.a)(),youdaotrans:Object(I.a)(),zdic:Object(S.a)()}}},741:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var a=n(346),r=n(668),o=n(207),i=n.n(o),s=n(227),c=n.n(s),u=n(228),l=n.n(u),d=n(145),g=n.n(d),f=n(74),h=n.n(f),p=n(101),b=n.n(p);const w=Object(r.a)();function _(e,t){const n=t?JSON.parse(JSON.stringify(t)):Object(a.a)();let r=e.version;return r<=9&&(r=10,["mode","pinMode","panelMode","qsPanelMode"].forEach(t=>{n[t].holding.shift=!1,n[t].holding.ctrl=!!e[t].ctrl,n[t].holding.meta=!!e[t].ctrl,delete e[t].ctrl})),Object.keys(n).forEach(t=>{switch(t){case"langCode":d("langCode",e=>/^(zh-CN|zh-TW|en)$/.test(e));break;case"pdfWhitelist":case"pdfBlacklist":case"whitelist":case"blacklist":d(t,e=>Array.isArray(e));break;case"mode":case"pinMode":case"panelMode":case"qsPanelMode":"mode"===t&&u("mode.icon"),u(`${t}.direct`),u(`${t}.double`),u(`${t}.holding.shift`),u(`${t}.holding.ctrl`),u(`${t}.holding.meta`),u(`${t}.instant.enable`),d(`${t}.instant.key`,e=>/^(direct|ctrl|alt|shift)$/.test(e)),o(`${t}.instant.delay`);break;case"tripleCtrlPreload":d("tripleCtrlPreload",e=>""===e||"clipboard"===e||"selection"===e);break;case"tripleCtrlLocation":d("tripleCtrlLocation",e=>"CENTER"===e||"TOP"===e||"RIGHT"===e||"BOTTOM"===e||"LEFT"===e||"TOP_LEFT"===e||"TOP_RIGHT"===e||"BOTTOM_LEFT"===e||"BOTTOM_RIGHT"===e);break;case"baPreload":d("baPreload",e=>""===e||"clipboard"===e||"selection"===e);break;case"ctxTrans":i()(n.ctxTrans,(e,t)=>{u(`ctxTrans.${t}`)});break;case"language":i()(n.language,(e,t)=>{u(`language.${t}`)});break;case"autopron":d("autopron.cn.dict",e=>w[e]),d("autopron.en.dict",e=>w[e]),d("autopron.en.accent",e=>"us"===e||"uk"===e),d("autopron.machine.dict",e=>w[e]),d("autopron.machine.src",e=>"trans"===e||"searchText"===e);break;case"contextMenus":i()(e.contextMenus.all,(e,t)=>{"string"==typeof e?n.contextMenus.all[t]&&s(`contextMenus.all.${t}`):(s(`contextMenus.all.${t}.name`),s(`contextMenus.all.${t}.url`))}),function(t){const a=h()(e,[t,"selected"]);if(Array.isArray(a))if(0===a.length)b()(n,[t,"selected"],[]);else{const e=h()(n,[t,"all"]),r=a.filter(t=>e[t]);r.length>0&&b()(n,[t,"selected"],r)}}("contextMenus");break;default:switch(typeof n[t]){case"string":s(t);break;case"boolean":u(t);break;case"number":o(t);break;default:console.error(new Error(`merge config: missing handler for '${t}'`))}}}),r=e.version,r<=10&&(r=11,n.contextMenus.selected.unshift("view_as_pdf")),r<=11&&(r=12,n.blacklist.push(["^https://stackedit.io(/.*)?$","https://stackedit.io/*"])),!1===e.language.minor&&(n.language.japanese=!1,n.language.korean=!1,n.language.french=!1,n.language.spanish=!1,n.language.deutsch=!1),n.panelMaxHeightRatio<1&&(n.panelMaxHeightRatio=Math.round(100*n.panelMaxHeightRatio)),n;function o(e){return d(e,c.a)}function s(e){return d(e,l.a)}function u(e){return d(e,g.a)}function d(t,a){const r=h()(e,t);a(r)&&b()(n,t,r)}}}}]);