"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[87619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"rainbond-deploy",title:"Use Rainbond Deploy HertzBeat",sidebar_label:"Install via Rainbond"},o=void 0,l={unversionedId:"start/rainbond-deploy",id:"version-v1.3.x/start/rainbond-deploy",title:"Use Rainbond Deploy HertzBeat",description:"If you are unfamiliar with Kubernetes, and want to install HertzBeat in Kubernetes, you can use Rainbond to deploy. Rainbond is a cloud-native application management platform built on Kubernetes and simplifies the application deployment to Kubernetes.",source:"@site/versioned_docs/version-v1.3.x/start/rainbond-deploy.md",sourceDirName:"start",slug:"/start/rainbond-deploy",permalink:"/docs/v1.3.x/start/rainbond-deploy",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.3.x/start/rainbond-deploy.md",tags:[],version:"v1.3.x",frontMatter:{id:"rainbond-deploy",title:"Use Rainbond Deploy HertzBeat",sidebar_label:"Install via Rainbond"},sidebar:"docs",previous:{title:"Install via Package",permalink:"/docs/v1.3.x/start/package-deploy"},next:{title:"Use IoTDB Store Metrics",permalink:"/docs/v1.3.x/start/iotdb-init"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploy HertzBeat",id:"deploy-hertzbeat",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you are unfamiliar with Kubernetes, and want to install HertzBeat in Kubernetes, you can use Rainbond to deploy. Rainbond is a cloud-native application management platform built on Kubernetes and simplifies the application deployment to Kubernetes."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To install Rainbond, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://www.rainbond.com/docs/quick-start/quick-install"},"Rainbond Quick Install"),"\u3002"),(0,r.kt)("h2",{id:"deploy-hertzbeat"},"Deploy HertzBeat"),(0,r.kt)("p",null,"After logging in Rainbond, click Market in the left menu, switch to open source app store, and search HertzBeat in the search box, and click the Install button."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(82926).Z,width:"1784",height:"359"})),(0,r.kt)("p",null,"Fill in the following information, and click Confirm button to install."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Team: select a team or create a new team"),(0,r.kt)("li",{parentName:"ul"},"Cluster: select a cluster"),(0,r.kt)("li",{parentName:"ul"},"Application: select an application or create a new application"),(0,r.kt)("li",{parentName:"ul"},"Version: select a version")),(0,r.kt)("p",null,"After installation, HertzBeat can be accessed via the Access button."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9155).Z,width:"3338",height:"1590"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"HertzBeat installed via Rainbond, External Mysql database and Redis and IoTDB are used by default, The HertzBeat configuration file is also mounted, which can be modified in ",(0,r.kt)("inlineCode",{parentName:"p"},"Components -> Environment Configuration -> Configuration File Settings"),".")))}d.isMDXComponent=!0},9155:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hertzbeat-topology-en-03716ef96c69eba091bca9ab0e77738b.png"},82926:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/install-to-rainbond-en-f3b4458425958c79ead817f3a22cbf1e.png"}}]);