export function __vite_legacy_guard(){import("data:text/javascript,")}import{r as e,o as t,c as a,a as o,F as l,p as s,b as n,d as r,e as u,u as i,f as c,w as v,g as d,h as p,i as f,T as m,j as g,k as _,l as h,m as b,K as y,t as T,n as w,q as O,s as k,B as S,M as j,O as x,S as C,v as I,x as E,y as A,z as M,A as $,C as N,D,E as L}from"./vendor.3255d545.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var z=(e,t)=>{const a=e.__vccOpts||e;for(const[o,l]of t)a[o]=l;return a};var G=z({},[["render",function(s,n){const r=e("app-router"),u=e("app-modal"),i=e("app-toast");return t(),a(l,null,[o(r),o(u),o(i)],64)}]]);const F={},B=e=>(s("data-v-459826d0"),e=e(),n(),e),P={class:"hello-vue"},W=[B((()=>r("div",{class:"title"},"Hello Vue",-1))),B((()=>r("div",{class:"logo"},null,-1)))];var H=z(F,[["render",function(e,o){return t(),a("div",P,W)}],["__scopeId","data-v-459826d0"]]),q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:H});Object.fromEntries=Object.fromEntries||(e=>e.reduce(((e,[t,a])=>(e[t]=a,e)),{}));const K=e=>{const t=i();return Object.fromEntries(void 0!==e?Object.keys(t.state[e]).map((a=>[a,u((()=>t.state[e][a]))])):Object.keys(t.state).map((e=>[e,u((()=>t.state[e]))])))};const R={class:"app-modal"};var V=z({setup(e){c((e=>({"36ab2dce":d(r)})));const{dialogConfig:l}=K("app"),{closeDialog:s}=(e=>{const t=i();return Object.fromEntries(Object.keys(t._actions).map((a=>void 0!==e&&a.startsWith(e)?[a.substr(e.length+1),e=>t.dispatch(a,e)]:[a,e=>t.dispatch(a,e)])))})("app"),n=u((()=>l.value.isShow)),r=u((()=>{var e,t;return null!=(t=null==(e=l.value.overlay)?void 0:e.opacity)?t:.6})),g=u((()=>{var e,t;return null==(t=null==(e=l.value.overlay)?void 0:e.closeable)||t})),_=()=>{g.value&&s()};return(e,l)=>(t(),a("div",R,[o(m,{name:"overlay"},{default:v((()=>[d(n)?(t(),a("div",{key:0,class:"s-overlay",onTouchmove:l[0]||(l[0]=p((()=>{}),["prevent"])),onClick:_},null,32)):f("",!0)])),_:1})]))}},[["__scopeId","data-v-6b892040"]]),X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:V});var Y=z({setup(l){const s=g(),n=_(null),r=_(0),u=_(""),i=_(0),c=_(0),d=_(0),p=_(0),f=_(null),T=_(null),w=_(!1),O=_(!1),k=_(!1),S=_(!1),j=_(0),x=_(Math.min(window.innerWidth,700)),C=_(!1),I=_(!0),E=e=>{if(k.value)return;w.value=!0,i.value=e.changedTouches[0].clientX,c.value=e.changedTouches[0].clientY;/iphone|ipad|ipod/i.test(navigator.userAgent)&&(i.value<20||i.value>window.innerWidth-20)&&(e.preventDefault(),e.stopPropagation())},A=e=>{if(!w.value||k.value)return;if(d.value=e.changedTouches[0].clientX-i.value,p.value=e.changedTouches[0].clientY-c.value,Math.abs(d.value)<Math.abs(p.value)||d.value<0&&!C.value||d.value>0&&!I.value||d.value>0&&!O.value&&0===r.value)return;e.preventDefault(),e.stopPropagation(),O.value||s.go(d.value<0?1:-1),O.value=!0;const t=n.value.children[0],a=n.value.children[1];t&&a&&(t.style.transition="none",a.style.transition="none",d.value<0?(t.style.transform=`translate3d(${-x.value/2+d.value/2}px, 0, 0)`,a.style.transform=`translate3d(${x.value+d.value}px, 0, 0)`):(t.style.transform=`translate3d(${-x.value/2+d.value}px, 0, 0)`,a.style.transform=`translate3d(${-x.value/2+d.value/2}px, 0, 0)`))},M=e=>{if(!w.value||!O.value||k.value)return;e.preventDefault(),e.stopPropagation(),k.value=!0,Math.abs(d.value)<x.value/3&&(s.go(d.value<0?-1:1),S.value=!0);const t=n.value.children[0],a=n.value.children[1];t&&a&&(t.style.transition="",a.style.transition="",t.style.transform="",a.style.transform=""),setTimeout((()=>{f.value&&f.value(),T.value&&T.value(),B()}),400)},$=e=>{S.value&&(d.value<0?e.style.transform=`translate3d(${d.value/2}px, 0, 0)`:e.style.transform=`translate3d(${d.value}px, 0, 0)`,setTimeout((()=>{e.style.transform="",F(e,"leave")}),50))},N=e=>{S.value&&(d.value<0?e.style.transform=`translate3d(${x.value/2+d.value}px, 0, 0)`:e.style.transform=`translate3d(${-x.value+d.value/2}px, 0, 0)`,setTimeout((()=>{e.style.transform="",F(e,"enter")}),50))},D=(e,t)=>{O.value?T.value=t:u.value?setTimeout(t,400):setTimeout(t,20),e.style.top=""},L=(e,t)=>{O.value?f.value=t:u.value?setTimeout(t,400):setTimeout(t,20),e.style.top=-j.value+"px"},z=e=>{F(e)},G=e=>{F(e)},F=(e,t="both")=>{if(!e)return;let a;switch(t){case"leave":a=/(forward|backward)?-(leave)-(from|active|to)/g;break;case"enter":a=/(forward|backward)?-(enter)-(from|active|to)/g;break;case"both":a=/(forward|backward)?-(enter|leave)-(from|active|to)/g}e.className=e.className.replace(a,"")},B=()=>{i.value=0,c.value=0,d.value=0,p.value=0,f.value=null,T.value=null,w.value=!1,O.value=!1,k.value=!1,S.value=!1};return r.value=s.options.history.state.position,s.beforeEach((()=>{j.value=document.documentElement.scrollTop||document.body.scrollTop})),s.afterEach((()=>{const e=s.options.history.state.position;e>r.value?u.value="forward":e<r.value?u.value="backward":u.value="",r.value=e})),s.options.scrollBehavior=(e,t,a)=>a||{top:0},(l,s)=>{const r=e("router-view");return t(),a("div",{ref:(e,t)=>{t.el=e,n.value=e},class:"app-router",onTouchstart:E,onTouchmove:A,onTouchend:M},[o(r,null,{default:v((({Component:e})=>[o(m,{css:!!u.value,name:u.value,onBeforeEnter:$,onBeforeLeave:N,onEnter:D,onLeave:L,onAfterEnter:z,onAfterLeave:G},{default:v((()=>[(t(),h(y,null,[(t(),h(b(e)))],1024))])),_:2},1032,["css","name"])])),_:1})],544)}}},[["__scopeId","data-v-c8fa4510"]]),J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Y});const Q={key:0,class:"app-toast"};var U=z({setup(e){const{toastConfig:o}=K("app"),l=u((()=>o.value.isShow)),s=u((()=>o.value.content));return(e,o)=>(t(),h(m,{name:"app-toast"},{default:v((()=>[d(l)?(t(),a("div",Q,T(d(s)),1)):f("",!0)])),_:1}))}},[["__scopeId","data-v-3f418650"]]),Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:U});var ee=z({props:{name:{type:String,default:""},position:{type:String,default:"center"}},setup(e){const l=e,{dialogConfig:s}=K("app"),n=u((()=>s.value.isShow&&s.value.name===l.name));return(l,s)=>(t(),h(k,{to:".app-modal"},[o(m,{name:`s-${e.position}`},{default:v((()=>[d(n)?(t(),a("div",{key:0,class:O(["base-dialog",`s-${e.position}`]),onTouchmove:s[0]||(s[0]=p((()=>{}),["prevent"]))},[w(l.$slots,"default",{},void 0,!0)],34)):f("",!0)])),_:3},8,["name"])]))}},[["__scopeId","data-v-3e60860d"]]),te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ee});var ae=z({},[["render",function(a,o){const l=e("base-scroll");return t(),h(l,{class:"base-page"},{default:v((()=>[w(a.$slots,"default",{},void 0,!0)])),fixed:v((()=>[w(a.$slots,"fixed",{},void 0,!0)])),_:3})}],["__scopeId","data-v-f7df363e"]]),oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ae});const le={class:"s-content"};S.use(j),S.use(x),S.use(C);var se=z({setup(e){const o=_(null),l=_(null),s=_({bounceTime:500,swipeBounceTime:300,eventPassthrough:"horizontal",click:!0,mouseWheel:!0,observeDOM:!0,scrollbar:!0});return I("bscroll",l),I("bscrollOptions",s),E((()=>{l.value=new S(o.value,s.value)})),(e,l)=>(t(),a("div",{ref:(e,t)=>{t.el=e,o.value=e},class:"base-scroll"},[r("div",le,[w(e.$slots,"default",{},void 0,!0)]),w(e.$slots,"fixed",{},void 0,!0)],512))}},[["__scopeId","data-v-777db8ad"]]),ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:se});function re(e,t){window.NTESAntAnalysis?window.NTESAntAnalysis.sendData({projectid:"",val_nm:"c-ntm",val_act:e,info:t}):window.addEventListener("NTMReady",(()=>{re(e,t)}))}const ue={1:"click_xxxx",2:"view_xxxx"};var ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(e,t){e["v-track"]=e["v-track"]||{};const a=ue[t.arg],o=t.value;/^click/.test(a)?(e.removeEventListener("click",e["v-track"].onClick),e["v-track"].onClick=()=>{re(a,o)},e.addEventListener("click",e["v-track"].onClick)):/^view/.test(a)&&(a===e["v-track"].event&&o===e["v-track"].info||(re(a,o),e["v-track"].event=a,e["v-track"].info=o))}});const ce=[{path:"/:pathMatch(.*)*",redirect:"/home"},{path:"/home",component:z({},[["render",function(a,l){const s=e("hello-vue"),n=e("base-page");return t(),h(n,{class:"home-page"},{default:v((()=>[o(s)])),_:1})}],["__scopeId","data-v-5d3a02b9"]])}],ve=A({history:M(),routes:ce}),de={namespaced:!0,state:{toastConfig:{},dialogConfig:{}},mutations:{TOAST_CONFIG(e,t){e.toastConfig=t},DIALOG_CONFIG(e,t){e.dialogConfig=t}},actions:{showToast({state:e,commit:t},a){e.toastConfig.timer&&(clearTimeout(e.toastConfig.timer),t("TOAST_CONFIG",{}));const o=setTimeout((()=>{t("TOAST_CONFIG",{})}),2e3);$((()=>{t("TOAST_CONFIG",{isShow:!0,content:a,timer:o})}))},openDialog({commit:e},t){e("DIALOG_CONFIG",{isShow:!0,name:t.name||t,params:t.params,overlay:t.overlay})},closeDialog({state:e,commit:t}){t("DIALOG_CONFIG",Object.assign({},e.dialogConfig,{isShow:!1})),setTimeout((()=>{t("DIALOG_CONFIG",{})}),300)}}};var pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:de});let fe="";fe=/^\/163\/test\//.test(location.pathname)?"http://gwtest.m.163.com":"https://gw.m.163.com";const me={info:`${fe}/api/info`};const ge={namespaced:!0,state:{info:null},mutations:{setInfo(e,t){e.info=t}},actions:{async fetchInfo({commit:e}){e("setInfo",await async function(e={}){let t;try{t=await N(Object.assign({withoutHeaders:!1},e))}catch(s){throw s.message="网络请求错误",s}const{data:a,code:o,message:l}=t||{};if(!a&&0!==o){const e=new Error("接口返回错误:"+l);throw e.code=o,e}return a}({url:me.info}))}}};const _e={"./app.js":pe,"./hello.js":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ge})},he={};Object.keys(_e).forEach((e=>{"./index.js"!==e&&_e[e].default&&(he[e.replace(/(\.\/|\.js)/g,"")]=_e[e].default)}));const be=D({strict:!1,modules:he}),ye=L(G);(e=>{const t={"./HelloVue.vue":q,"./app/AppModal.vue":X,"./app/AppRouter.vue":J,"./app/AppToast.vue":Z,"./base/BaseDialog.vue":te,"./base/BasePage.vue":oe,"./base/BaseScroll.vue":ne};Object.keys(t).forEach((a=>{"./index.js"!==a&&t[a].default&&e.component(a.replace(/(.*\/)*([^.]+).*/gi,"$2"),t[a].default)}))})(ye),(e=>{const t={"./track.js":ie};Object.keys(t).forEach((a=>{"./index.js"!==a&&t[a].default&&e.directive(a.replace(/(\.\/|\/|\.js)/g,""),t[a].default)}))})(ye),ye.use(ve),ye.use(be),ye.mount("#app"),window.app=ye;