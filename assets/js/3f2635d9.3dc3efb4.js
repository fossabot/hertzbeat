"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[30492],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,g=l["".concat(u,".").concat(m)]||l[m]||d[m]||s;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=l;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},94027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={id:"account-modify",title:"Modify Account Username Password",sidebar_label:"Update Account"},i=void 0,o={unversionedId:"start/account-modify",id:"version-v1.3.x/start/account-modify",title:"Modify Account Username Password",description:"HertzBeat default built-in three user accounts, respectively admin/hertzbeat tom/hertzbeat guest/hertzbeat",source:"@site/versioned_docs/version-v1.3.x/start/account-modify.md",sourceDirName:"start",slug:"/start/account-modify",permalink:"/docs/v1.3.x/start/account-modify",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.3.x/start/account-modify.md",tags:[],version:"v1.3.x",frontMatter:{id:"account-modify",title:"Modify Account Username Password",sidebar_label:"Update Account"},sidebar:"docs",previous:{title:"Use PostgreSQL Instead of H2",permalink:"/docs/v1.3.x/start/postgresql-change"},next:{title:"Advanced Params Config",permalink:"/docs/v1.3.x/start/custom-config"}},u={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"HertzBeat default built-in three user accounts, respectively admin/hertzbeat tom/hertzbeat guest/hertzbeat",(0,a.kt)("br",{parentName:"p"}),"\n","If you need add, delete or modify account or password, configure ",(0,a.kt)("inlineCode",{parentName:"p"},"sureness.yml"),". Ignore this step without this demand.\nThe configuration file content refer to project repository",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat/blob/master/script/sureness.yml"},"/script/sureness.yml"),(0,a.kt)("br",{parentName:"p"}),"\n","Modify the following ",(0,a.kt)("strong",{parentName:"p"},"part parameters")," in sureness.yml\uff1a",(0,a.kt)("strong",{parentName:"p"},"[Note\u26a0\ufe0fOther default sureness configuration parameters should be retained]")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"\nresourceRole:\n   - /api/account/auth/refresh===post===[admin,user,guest]\n   - /api/apps/**===get===[admin,user,guest]\n   - /api/monitor/**===get===[admin,user,guest]\n   - /api/monitor/**===post===[admin,user]\n   - /api/monitor/**===put===[admin,user]\n   - /api/monitor/**===delete==[admin]\n   - /api/monitors/**===get===[admin,user,guest]\n   - /api/monitors/**===post===[admin,user]\n   - /api/monitors/**===put===[admin,user]\n   - /api/monitors/**===delete===[admin]\n   - /api/alert/**===get===[admin,user,guest]\n   - /api/alert/**===post===[admin,user]\n   - /api/alert/**===put===[admin,user]\n   - /api/alert/**===delete===[admin]\n   - /api/alerts/**===get===[admin,user,guest]\n   - /api/alerts/**===post===[admin,user]\n   - /api/alerts/**===put===[admin,user]\n   - /api/alerts/**===delete===[admin]\n   - /api/notice/**===get===[admin,user,guest]\n   - /api/notice/**===post===[admin,user]\n   - /api/notice/**===put===[admin,user]\n   - /api/notice/**===delete===[admin]\n   - /api/tag/**===get===[admin,user,guest]\n   - /api/tag/**===post===[admin,user]\n   - /api/tag/**===put===[admin,user]\n   - /api/tag/**===delete===[admin]\n   - /api/summary/**===get===[admin,user,guest]\n   - /api/summary/**===post===[admin,user]\n   - /api/summary/**===put===[admin,user]\n   - /api/summary/**===delete===[admin]\n\n# Resources that need to be filtered and protected can be accessed directly without authentication\n# /api/v1/source3===get means /api/v1/source3===get it can be accessed by anyone. Don't need to authentication\nexcludedResource:\n   - /api/account/auth/**===*\n   - /api/i18n/**===get\n   - /api/apps/hierarchy===get\n   # web ui  the front-end static resource\n   - /===get\n   - /dashboard/**===get\n   - /monitors/**===get\n   - /alert/**===get\n   - /account/**===get\n   - /setting/**===get\n   - /passport/**===get\n   - /**/*.html===get\n   - /**/*.js===get\n   - /**/*.css===get\n   - /**/*.ico===get\n   - /**/*.ttf===get\n   - /**/*.png===get\n   - /**/*.gif===get\n   - /**/*.jpg===get\n   - /**/*.svg===get\n   - /**/*.json===get\n   # swagger ui resource\n   - /swagger-resources/**===get\n   - /v2/api-docs===get\n   - /v3/api-docs===get\n\n# user account information\n# Here is admin tom lili three accounts\n# eg: admin includes[admin,user]roles, password is hertzbeat \n# eg: tom includes[user], password is hertzbeat\n# eg: lili includes[guest],text password is lili, salt password is 1A676730B0C7F54654B0E09184448289\naccount:\n   - appId: admin\n     credential: hertzbeat\n     role: [admin,user]\n   - appId: tom\n     credential: hertzbeat\n     role: [user]\n   - appId: guest\n     credential: hertzbeat\n     role: [guest]\n")),(0,a.kt)("p",null,"Modify the following ",(0,a.kt)("strong",{parentName:"p"},"part parameters")," in sureness.yml ",(0,a.kt)("strong",{parentName:"p"},"[Note\u26a0\ufe0fOther default sureness configuration parameters should be retained]"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"\n# user account information\n# Here is admin tom lili three accounts\n# eg: admin includes[admin,user]roles, password is hertzbeat \n# eg: tom includes[user], password is hertzbeat\n# eg: lili includes[guest], text password is lili, salt password is 1A676730B0C7F54654B0E09184448289\naccount:\n  - appId: admin\n    credential: hertzbeat\n    role: [admin,user]\n  - appId: tom\n    credential: hertzbeat\n    role: [user]\n  - appId: guest\n    credential: hertzbeat\n    role: [guest]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Restart HertzBeat, access http://ip:1157/ to explore")))}d.isMDXComponent=!0}}]);