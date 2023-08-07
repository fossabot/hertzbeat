"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[57469],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=s(a),h=n,k=u["".concat(p,".").concat(h)]||u[h]||m[h]||o;return a?r.createElement(k,l(l({ref:e},c),{},{components:a})):r.createElement(k,l({ref:e},c))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},40792:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={title:"\u4f7f\u7528 HertzBeat 5\u5206\u949f\u641e\u5b9a SpringBoot2 \u76d1\u63a7\u544a\u8b66",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","SpringBoot\u76d1\u63a7","\u76d1\u63a7\u544a\u8b66"]},l=void 0,i={permalink:"/zh-cn/blog/2023/03/22/monitor-springboot2",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-blog/2023-03-22-monitor-springboot2.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/2023-03-22-monitor-springboot2.md",title:"\u4f7f\u7528 HertzBeat 5\u5206\u949f\u641e\u5b9a SpringBoot2 \u76d1\u63a7\u544a\u8b66",description:"\u4f7f\u7528\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177 HertzBeat \u5bf9 SpringBoot2 \u5e94\u7528\u7684\u76d1\u63a7\u544a\u8b66\u5b9e\u8df5\uff0c5\u5206\u949f\u641e\u5b9a\uff01",date:"2023-03-22T00:00:00.000Z",formattedDate:"2023\u5e743\u670822\u65e5",tags:[{label:"opensource",permalink:"/zh-cn/blog/tags/opensource"},{label:"practice",permalink:"/zh-cn/blog/tags/practice"}],readingTime:9.225,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"\u4f7f\u7528 HertzBeat 5\u5206\u949f\u641e\u5b9a SpringBoot2 \u76d1\u63a7\u544a\u8b66",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","SpringBoot\u76d1\u63a7","\u76d1\u63a7\u544a\u8b66"]},prevItem:{title:"50\u592936\u4f4d\u8d21\u732e\u8005\uff0c\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177 HertzBeat v1.3.1 \u53d1\u5e03",permalink:"/zh-cn/blog/2023/05/09/hertzbeat-v1.3.1"},nextItem:{title:"\u91cd\u78c5\u66f4\u65b0 \u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177 HertzBeat v1.3.0 \u53d1\u5e03 \u5728\u7ebf\u81ea\u5b9a\u4e49\u6765\u4e86",permalink:"/zh-cn/blog/2023/03/15/hertzbeat-v1.3.0"}},p={authorsImageUrls:[void 0]},s=[{value:"\u4f7f\u7528\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177 HertzBeat \u5bf9 SpringBoot2 \u5e94\u7528\u7684\u76d1\u63a7\u544a\u8b66\u5b9e\u8df5\uff0c5\u5206\u949f\u641e\u5b9a\uff01",id:"\u4f7f\u7528\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177-hertzbeat-\u5bf9-springboot2-\u5e94\u7528\u7684\u76d1\u63a7\u544a\u8b66\u5b9e\u8df55\u5206\u949f\u641e\u5b9a",level:2},{value:"HertzBeat \u4ecb\u7ecd",id:"hertzbeat-\u4ecb\u7ecd",level:3},{value:"\u5728 HertzBeat 5\u5206\u949f\u641e\u5b9a\u5bf9 SpringBoot2 \u5e94\u7528\u7684\u76d1\u63a7",id:"\u5728-hertzbeat-5\u5206\u949f\u641e\u5b9a\u5bf9-springboot2-\u5e94\u7528\u7684\u76d1\u63a7",level:3},{value:"\u64cd\u4f5c\u524d\u63d0\uff0c\u60a8\u5df2\u62e5\u6709 SpringBoot2 \u5e94\u7528\u73af\u5883\u548c HertzBeat \u73af\u5883\u3002",id:"\u64cd\u4f5c\u524d\u63d0\u60a8\u5df2\u62e5\u6709-springboot2-\u5e94\u7528\u73af\u5883\u548c-hertzbeat-\u73af\u5883",level:4},{value:"\u4e00. \u5728 SpringBoot2 \u5e94\u7528\u7aef\u66b4\u9732\u51fa<code>actuator</code>\u6307\u6807\u63a5\u53e3\uff0c\u5b83\u5c06\u63d0\u4f9b metrics \u63a5\u53e3\u6570\u636e\u3002",id:"\u4e00-\u5728-springboot2-\u5e94\u7528\u7aef\u66b4\u9732\u51faactuator\u6307\u6807\u63a5\u53e3\u5b83\u5c06\u63d0\u4f9b-metrics-\u63a5\u53e3\u6570\u636e",level:4},{value:"\u5728\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf HertzBeat \u76d1\u63a7\u9875\u9762\u6dfb\u52a0\u5bf9 SpringBoot2 \u5e94\u7528\u76d1\u63a7",id:"\u5728\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf-hertzbeat-\u76d1\u63a7\u9875\u9762\u6dfb\u52a0\u5bf9-springboot2-\u5e94\u7528\u76d1\u63a7",level:4},{value:"\u4e09. \u5728 HertzBeat \u7cfb\u7edf\u6dfb\u52a0 SpringBoot2\u5e94\u7528 \u6307\u6807\u9608\u503c\u544a\u8b66",id:"\u4e09-\u5728-hertzbeat-\u7cfb\u7edf\u6dfb\u52a0-springboot2\u5e94\u7528-\u6307\u6807\u9608\u503c\u544a\u8b66",level:4},{value:"\u5b8c\u6bd5\uff0c\u73b0\u5728\u5750\u7b49\u544a\u8b66\u6d88\u606f\u8fc7\u6765\u5566\u3002\u53ee\u53ee\u53ee\u53ee",id:"\u5b8c\u6bd5\u73b0\u5728\u5750\u7b49\u544a\u8b66\u6d88\u606f\u8fc7\u6765\u5566\u53ee\u53ee\u53ee\u53ee",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u66f4\u5f3a\u5927",id:"\u66f4\u5f3a\u5927",level:2},{value:"What is HertzBeat?",id:"what-is-hertzbeat",level:2},{value:"\u26c4 Supported",id:"-supported",level:2}],c={toc:s};function m(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4f7f\u7528\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177-hertzbeat-\u5bf9-springboot2-\u5e94\u7528\u7684\u76d1\u63a7\u544a\u8b66\u5b9e\u8df55\u5206\u949f\u641e\u5b9a"},"\u4f7f\u7528\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177 HertzBeat \u5bf9 SpringBoot2 \u5e94\u7528\u7684\u76d1\u63a7\u544a\u8b66\u5b9e\u8df5\uff0c5\u5206\u949f\u641e\u5b9a\uff01"),(0,n.kt)("h3",{id:"hertzbeat-\u4ecb\u7ecd"},"HertzBeat \u4ecb\u7ecd"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"HertzBeat \u662f\u4e00\u6b3e\u5f00\u6e90\uff0c\u6613\u7528\u53cb\u597d\u7684\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177\uff0c\u65e0\u9700Agent\uff0c\u62e5\u6709\u5f3a\u5927\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b\u3002    ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u96c6",(0,n.kt)("strong",{parentName:"li"},"\u76d1\u63a7-\u544a\u8b66-\u901a\u77e5\u4e3a\u4e00\u4f53"),"\uff0c\u652f\u6301\u5bf9\u5e94\u7528\u670d\u52a1\uff0c\u6570\u636e\u5e93\uff0c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4e2d\u95f4\u4ef6\uff0c\u4e91\u539f\u751f\uff0c\u7f51\u7edc\u7b49\u76d1\u63a7\uff0c\u9608\u503c\u544a\u8b66\uff0c\u544a\u8b66\u901a\u77e5(\u90ae\u4ef6\u5fae\u4fe1\u9489\u9489\u98de\u4e66\u77ed\u4fe1 Slack Discord Telegram)\u3002    "),(0,n.kt)("li",{parentName:"ul"},"\u5176\u5c06Http,Jmx,Ssh,Snmp,Jdbc\u7b49\u534f\u8bae\u89c4\u8303\u53ef\u914d\u7f6e\u5316\uff0c\u53ea\u9700\u914d\u7f6eYML\u5c31\u80fd\u4f7f\u7528\u8fd9\u4e9b\u534f\u8bae\u53bb\u81ea\u5b9a\u4e49\u91c7\u96c6\u4efb\u4f55\u60a8\u60f3\u8981\u91c7\u96c6\u7684\u6307\u6807\u3002\u60a8\u76f8\u4fe1\u53ea\u9700\u914d\u7f6eYML\u5c31\u80fd\u7acb\u523b\u9002\u914d\u4e00\u4e2aK8s\u6216Docker\u7b49\u65b0\u7684\u76d1\u63a7\u7c7b\u578b\u5417\uff1f   "),(0,n.kt)("li",{parentName:"ul"},"HertzBeat \u7684\u5f3a\u5927\u81ea\u5b9a\u4e49\uff0c\u591a\u7c7b\u578b\u652f\u6301\uff0c\u6613\u6269\u5c55\uff0c\u4f4e\u8026\u5408\uff0c\u5e0c\u671b\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u548c\u4e2d\u5c0f\u56e2\u961f\u5feb\u901f\u642d\u5efa\u81ea\u6709\u76d1\u63a7\u7cfb\u7edf\u3002  ")),(0,n.kt)("p",null,"Github: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat")," "),(0,n.kt)("h3",{id:"\u5728-hertzbeat-5\u5206\u949f\u641e\u5b9a\u5bf9-springboot2-\u5e94\u7528\u7684\u76d1\u63a7"},"\u5728 HertzBeat 5\u5206\u949f\u641e\u5b9a\u5bf9 SpringBoot2 \u5e94\u7528\u7684\u76d1\u63a7"),(0,n.kt)("h4",{id:"\u64cd\u4f5c\u524d\u63d0\u60a8\u5df2\u62e5\u6709-springboot2-\u5e94\u7528\u73af\u5883\u548c-hertzbeat-\u73af\u5883"},"\u64cd\u4f5c\u524d\u63d0\uff0c\u60a8\u5df2\u62e5\u6709 SpringBoot2 \u5e94\u7528\u73af\u5883\u548c HertzBeat \u73af\u5883\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"HertzBeat ",(0,n.kt)("a",{parentName:"li",href:"https://hertzbeat.com/docs/start/docker-deploy"},"\u5b89\u88c5\u90e8\u7f72\u6587\u6863")," ")),(0,n.kt)("h4",{id:"\u4e00-\u5728-springboot2-\u5e94\u7528\u7aef\u66b4\u9732\u51faactuator\u6307\u6807\u63a5\u53e3\u5b83\u5c06\u63d0\u4f9b-metrics-\u63a5\u53e3\u6570\u636e"},"\u4e00. \u5728 SpringBoot2 \u5e94\u7528\u7aef\u66b4\u9732\u51fa",(0,n.kt)("inlineCode",{parentName:"h4"},"actuator"),"\u6307\u6807\u63a5\u53e3\uff0c\u5b83\u5c06\u63d0\u4f9b metrics \u63a5\u53e3\u6570\u636e\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5f00\u542f SpringBoot Actuator Endpoint \u66b4\u9732\u51fa",(0,n.kt)("inlineCode",{parentName:"li"},"metrics health env"),"\u6307\u6807\u63a5\u53e3")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"management:\n  endpoints:\n    web:\n      exposure:\n        include:\n          - 'metrics'\n          - 'health'\n          - 'env'\n    enabled-by-default: on\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u91cd\u542f\u540e\u6d4b\u8bd5\u8bbf\u95ee\u6307\u6807\u63a5\u53e3 ",(0,n.kt)("inlineCode",{parentName:"li"},"ip:port/actuator")," \u662f\u5426\u6709\u54cd\u5e94json\u6570\u636e\u5982\u4e0b:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_links": {\n    "self": {\n      "href": "http://localhost:1157/actuator",\n      "templated": false\n    },\n    "health-path": {\n      "href": "http://localhost:1157/actuator/health/{*path}",\n      "templated": true\n    },\n    "health": {\n      "href": "http://localhost:1157/actuator/health",\n      "templated": false\n    },\n    "env": {\n      "href": "http://localhost:1157/actuator/env",\n      "templated": false\n    },\n    "env-toMatch": {\n      "href": "http://localhost:1157/actuator/env/{toMatch}",\n      "templated": true\n    },\n    "metrics-requiredMetricName": {\n      "href": "http://localhost:1157/actuator/metrics/{requiredMetricName}",\n      "templated": true\n    },\n    "metrics": {\n      "href": "http://localhost:1157/actuator/metrics",\n      "templated": false\n    }\n  }\n}\n')),(0,n.kt)("h4",{id:"\u5728\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf-hertzbeat-\u76d1\u63a7\u9875\u9762\u6dfb\u52a0\u5bf9-springboot2-\u5e94\u7528\u76d1\u63a7"},"\u5728\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf HertzBeat \u76d1\u63a7\u9875\u9762\u6dfb\u52a0\u5bf9 SpringBoot2 \u5e94\u7528\u76d1\u63a7"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u65b0\u589e SpringBoot2 \u76d1\u63a7  ")),(0,n.kt)("p",null,"\u8def\u5f84\uff1a\u83dc\u5355 -> \u5e94\u7528\u670d\u52a1\u76d1\u63a7 -> SpringBoot2 -> \u65b0\u589eSpringBoot2\u76d1\u63a7  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hertzbeat",src:a(16796).Z,width:"4064",height:"2166"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u65b0\u589e\u76d1\u63a7 SpringBoot2 \u6240\u9700\u53c2\u6570   ")),(0,n.kt)("p",null,"\u5728\u76d1\u63a7\u9875\u9762\u586b\u5199 SpringBoot2\u5e94\u7528 ",(0,n.kt)("strong",{parentName:"p"},"\u5bf9\u7aefIP"),"\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u670d\u52a1\u7aef\u53e3"),"(\u9ed8\u8ba48080)\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u8d26\u6237\u5bc6\u7801\u7b49"),"\uff0c\u6700\u540e\u70b9\u51fb\u786e\u5b9a\u6dfb\u52a0\u5373\u53ef\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u5176\u4ed6\u53c2\u6570\u5982",(0,n.kt)("strong",{parentName:"p"},"\u91c7\u96c6\u95f4\u9694"),"\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u8d85\u65f6\u65f6\u95f4"),"\u7b49\u53ef\u4ee5\u53c2\u8003\u5e2e\u52a9\u6587\u6863 ",(0,n.kt)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help/"},"https://hertzbeat.com/docs/help/"),"   "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hertzbeat",src:a(17622).Z,width:"4064",height:"2166"}),"    "),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u5b8c\u6210\u2705,\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u6dfb\u52a0\u597d\u5bf9 SpringBoot2\u5e94\u7528 \u7684\u76d1\u63a7\u4e86\uff0c\u67e5\u770b\u76d1\u63a7\u5217\u8868\u5373\u53ef\u770b\u5230\u6211\u4eec\u7684\u6dfb\u52a0\u9879\u3002  ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hertzbeat",src:a(92922).Z,width:"4064",height:"2166"}),"  "),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u76d1\u63a7\u5217\u8868\u9879\u7684",(0,n.kt)("strong",{parentName:"li"},"\u64cd\u4f5c"),"->",(0,n.kt)("strong",{parentName:"li"},"\u76d1\u63a7\u8be6\u60c5\u56fe\u6807")," \u5373\u53ef\u6d4f\u89c8 SpringBoot2\u5e94\u7528 \u7684\u5b9e\u65f6\u76d1\u63a7\u6307\u6807\u6570\u636e\u3002  ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hertzbeat",src:a(3312).Z,width:"4064",height:"2166"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u76d1\u63a7\u5386\u53f2\u8be6\u60c5TAB")," \u5373\u53ef\u6d4f\u89c8 SpringBoot2\u5e94\u7528 \u7684\u5386\u53f2\u76d1\u63a7\u6307\u6807\u6570\u636e\u56fe\u8868\ud83d\udcc8\u3002  ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hertzbeat",src:a(37643).Z,width:"4064",height:"2166"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"DONE\uff01\u5b8c\u6210\u5566\uff01\u4e0d\u9700\u8981\u6211\u4eec\u53bb\u90e8\u7f72agent\u6216\u8005\u5404\u79cd\u7e41\u7410\u64cd\u4f5c\uff0c\u662f\u4e0d\u662f\u5f88\u7b80\u5355")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u53ea\u9700\u4e00\u6b65\u5728 HertzBeat \u76d1\u63a7\u9875\u9762\u914d\u7f6eIP\u7aef\u53e3\u6dfb\u52a0 SpringBoot2\u5e94\u7528 \u76d1\u63a7\u5373\u53ef"),"         ")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u901a\u8fc7\u4e0a\u9762\u6211\u4eec\u5c31\u5b8c\u6210\u4e86\u5bf9 SpringBoot2\u5e94\u7528 \u7684\u76d1\u63a7\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 HertzBeat \u968f\u65f6\u67e5\u770bSpringBoot2\u5e94\u7528\u7684\u5404\u79cd\u6307\u6807\u72b6\u6001\u548c\u53ef\u7528\u6027\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u5f53\u7136\u4e0d\u53ef\u80fd\u4eba\u5de5\u4e00\u76f4\u5b9e\u65f6\u67e5\u770b\u6307\u6807\uff0c\u76d1\u63a7\u5f80\u5f80\u4f34\u968f\u7740\u544a\u8b66\u9608\u503c\uff0c\u5f53 SpringBoot2\u5e94\u7528 \u7684\u6027\u80fd\u6307\u6807\u8d85\u51fa\u6211\u4eec\u7684\u9608\u503c\u6216SpringBoot2\u5e94\u7528\u672c\u8eab\u5f02\u5e38\u65f6\uff0c\u80fd\u53ca\u65f6\u7684\u901a\u77e5\u5230\u6211\u4eec\u5bf9\u5e94\u7684\u8d1f\u8d23\u4eba\uff0c\u8d1f\u8d23\u4eba\u6536\u5230\u901a\u77e5\u5904\u7406\uff0c\u8fd9\u6837\u624d\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u76d1\u63a7\u544a\u8b66\u6d41\u7a0b\u3002")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u6765\u4e00\u6b65\u4e00\u6b65\u6f14\u793a\u5982\u4f55\u914d\u7f6e HertzBeat \u7cfb\u7edf\u91cc\u7684\u9608\u503c\u544a\u8b66\u901a\u77e5\uff0c\u5f53 SpringBoot2\u5e94\u7528 \u7684\u6307\u6807\u5f02\u5e38\u65f6\uff0c\u53ca\u65f6\u901a\u77e5\u7ed9\u6211\u4eec"),"     "),(0,n.kt)("h4",{id:"\u4e09-\u5728-hertzbeat-\u7cfb\u7edf\u6dfb\u52a0-springboot2\u5e94\u7528-\u6307\u6807\u9608\u503c\u544a\u8b66"},"\u4e09. \u5728 HertzBeat \u7cfb\u7edf\u6dfb\u52a0 SpringBoot2\u5e94\u7528 \u6307\u6807\u9608\u503c\u544a\u8b66"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5bf9\u67d0\u4e2a\u91cd\u8981\u6307\u6807\u914d\u7f6e\u544a\u8b66\u9608\u503c     ")),(0,n.kt)("p",null,"\u8def\u5f84\uff1a\u83dc\u5355 -> \u9608\u503c\u89c4\u5219 -> \u65b0\u589e\u9608\u503c  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9\u914d\u7f6e\u7684\u6307\u6807\u5bf9\u8c61\uff0cSpringBoot2\u5e94\u7528 \u76d1\u63a7\u4e3b\u8981\u662f \u5806\u6808\u5185\u5b58 \u7ebf\u7a0b\u7b49\u76f8\u5173\u6307\u6807\uff0c\u6211\u4eec\u4e3e\u4f8b\u5bf9 ",(0,n.kt)("inlineCode",{parentName:"li"},"\u72b6\u6001\u7ebf\u7a0b\u6570")," ",(0,n.kt)("inlineCode",{parentName:"li"},"threads")," -> ",(0,n.kt)("inlineCode",{parentName:"li"},"threads")," \u8fd9\u4e2a\u6307\u6807\u8fdb\u884c\u9608\u503c\u8bbe\u7f6e\uff0c \u5f53",(0,n.kt)("inlineCode",{parentName:"li"},"runnable"),"\u72b6\u6001\u7684\u7ebf\u7a0b\u6570\u91cf\u5927\u4e8e300\u65f6\u53d1\u51fa\u544a\u8b66\u3002       "),(0,n.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u6211\u4eec\u5c31\u914d\u7f6e\u5f53\u6b64\u6307\u6807",(0,n.kt)("inlineCode",{parentName:"li"},"size"),",",(0,n.kt)("inlineCode",{parentName:"li"},"state")," \u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},'equals(state,"runnable"") && size>300')," \u65f6\u53d1\u51fa\u544a\u8b66\uff0c\u544a\u8b66\u7ea7\u522b\u4e3a",(0,n.kt)("strong",{parentName:"li"},"\u8b66\u544a\u544a\u8b66"),"\uff0c\u4e09\u6b21\u5373\u89e6\u53d1\uff0c\u5177\u4f53\u5982\u4e0b\u56fe\u3002  ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hertzbeat",src:a(70772).Z,width:"4064",height:"2166"}),"     "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hertzbeat",src:a(55158).Z,width:"4064",height:"2166"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u65b0\u589e\u6d88\u606f\u901a\u77e5\u63a5\u6536\u4eba")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u914d\u7f6e\u63a5\u6536\u4eba\uff0c\u8ba9\u544a\u8b66\u6d88\u606f\u77e5\u9053\u8981\u53d1\u7ed9\u8c01\uff0c\u7528\u4ec0\u4e48\u65b9\u5f0f\u53d1\u3002  ")),(0,n.kt)("p",null,"\u8def\u5f84\uff1a\u83dc\u5355 -> \u544a\u8b66\u901a\u77e5 -> \u544a\u8b66\u63a5\u6536\u4eba -> \u65b0\u589e\u63a5\u6536\u4eba  "),(0,n.kt)("p",null,"\u6d88\u606f\u901a\u77e5\u65b9\u5f0f\u652f\u6301 ",(0,n.kt)("strong",{parentName:"p"},"\u90ae\u4ef6\uff0c\u9489\u9489\uff0c\u4f01\u4e1a\u5fae\u4fe1\uff0c\u98de\u4e66\uff0cWebHook\uff0c\u77ed\u4fe1"),"\u7b49\uff0c\u6211\u4eec\u8fd9\u91cc\u4ee5\u5e38\u7528\u7684\u9489\u9489\u4e3a\u4f8b\u3002  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53c2\u7167\u6b64",(0,n.kt)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"\u5e2e\u52a9\u6587\u6863")," ",(0,n.kt)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"https://hertzbeat.com/docs/help/alert_dingtalk")," \u5728\u9489\u9489\u7aef\u914d\u7f6e\u673a\u5668\u4eba\uff0c\u8bbe\u7f6e\u5b89\u5168\u81ea\u5b9a\u4e49\u5173\u952e\u8bcd",(0,n.kt)("inlineCode",{parentName:"li"},"HertzBeat"),"\uff0c\u83b7\u53d6\u5bf9\u5e94",(0,n.kt)("inlineCode",{parentName:"li"},"access_token"),"\u503c\u3002 "),(0,n.kt)("li",{parentName:"ul"},"\u5728 HertzBeat \u914d\u7f6e\u63a5\u6536\u4eba\u53c2\u6570\u5982\u4e0b\u3002  ")),(0,n.kt)("p",null,"\u3010\u544a\u8b66\u901a\u77e5\u3011->\u3010\u65b0\u589e\u63a5\u6536\u4eba\u3011 ->\u3010\u9009\u62e9\u9489\u9489\u673a\u5668\u4eba\u901a\u77e5\u65b9\u5f0f\u3011->\u3010\u8bbe\u7f6e\u9489\u9489\u673a\u5668\u4ebaACCESS_TOKEN\u3011-> \u3010\u786e\u5b9a\u3011"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hertzbeat",src:a(41711).Z,width:"3436",height:"890"}),"    "),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u5173\u8054\u7684\u544a\u8b66\u901a\u77e5\u7b56\u7565\u26a0\ufe0f \u3010\u65b0\u589e\u901a\u77e5\u7b56\u7565\u3011-> \u3010\u5c06\u521a\u8bbe\u7f6e\u7684\u63a5\u6536\u4eba\u5173\u8054\u3011-> \u3010\u786e\u5b9a\u3011 ")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u914d\u7f6e\u544a\u8b66\u901a\u77e5\u7b56\u7565\uff0c\u8ba9\u544a\u8b66\u6d88\u606f\u4e0e\u63a5\u6536\u4eba\u7ed1\u5b9a\uff0c\u8fd9\u6837\u5c31\u80fd\u51b3\u5b9a\u54ea\u4e9b\u544a\u8b66\u53d1\u7ed9\u54ea\u4e2a\u4eba\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hertzbeat",src:a(60315).Z,width:"3436",height:"1088"}),"    "),(0,n.kt)("h3",{id:"\u5b8c\u6bd5\u73b0\u5728\u5750\u7b49\u544a\u8b66\u6d88\u606f\u8fc7\u6765\u5566\u53ee\u53ee\u53ee\u53ee"},"\u5b8c\u6bd5\uff0c\u73b0\u5728\u5750\u7b49\u544a\u8b66\u6d88\u606f\u8fc7\u6765\u5566\u3002\u53ee\u53ee\u53ee\u53ee"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[HertzBeat\u544a\u8b66\u901a\u77e5]\n\u544a\u8b66\u76ee\u6807\u5bf9\u8c61 : springboot2.threads.size\n\u6240\u5c5e\u76d1\u63a7ID : 483783444839322\n\u6240\u5c5e\u76d1\u63a7\u540d\u79f0 : SPRINGBOOT2_localhost\n\u544a\u8b66\u7ea7\u522b : \u8b66\u544a\u544a\u8b66\n\u544a\u8b66\u89e6\u53d1\u65f6\u95f4 : 2023-03-22 21:13:44\n\u5185\u5bb9\u8be6\u60c5 : The springboot2 service's runnable state threads num is over 300, now is 444.\n")),(0,n.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u8fd9\u7bc7\u5b9e\u8df5\u6587\u7ae0\u5e26\u6211\u4eec\u4f53\u9a8c\u4e86\u5982\u4f55\u4f7f\u7528\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177 HertzBeat \u6765\u76d1\u63a7 SpringBoot2\u5e94\u7528 \u6307\u6807\u6570\u636e\uff0c\u53ef\u4ee5\u53d1\u73b0\u96c6 ",(0,n.kt)("inlineCode",{parentName:"p"},"\u76d1\u63a7-\u544a\u8b66-\u901a\u77e5")," \u7684 HertzBeat \u5728\u64cd\u4f5c\u4e0e\u4f7f\u7528\u65b9\u9762\u66f4\u52a0\u7684\u4fbf\u6377\uff0c\u53ea\u9700\u9875\u9762\u4e0a\u7b80\u5355\u70b9\u4e00\u70b9\u5c31\u80fd\u628a SpringBoot2\u5e94\u7528 \u7eb3\u5165\u76d1\u63a7\u5e76\u544a\u8b66\u901a\u77e5\uff0c\u518d\u4e5f\u4e0d\u9700\u8981\u90e8\u7f72\u591a\u4e2a\u7ec4\u4ef6\u7f16\u5199\u914d\u7f6e\u6587\u4ef6\u90a3\u4e9b\u7e41\u7410\u64cd\u4f5c\u4e86\u3002  ")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u53ea\u9700\u8981\u4e00\u6761docker\u547d\u4ee4\u5373\u53ef\u5b89\u88c5\u4f53\u9a8cheartbeat:   ")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat")),(0,n.kt)("h2",{id:"\u66f4\u5f3a\u5927"},"\u66f4\u5f3a\u5927"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u4e0a\u9762\u7684\u7b80\u5355\u6b65\u9aa4\u6211\u4eec\u5b9e\u73b0\u4e86\u5bf9SpringBoot2\u7684\u76d1\u63a7\uff0c\u4f46\u91cc\u9762\u7684\u5185\u7f6e\u6307\u6807\u56fa\u5b9a\u4e0d\u6ee1\u8db3\u9700\u8981\uff0c\u662f\u5426\u80fd\u81ea\u5b9a\u4e49\u76d1\u63a7\u66f4\u591aSpringBoot2\u7684\u6307\u6807\u5462\uff1f\u7b54\u6848\u5f53\u7136\u662f\u53ef\u4ee5\u7684\uff0c\u901a\u8fc7\u5728\u9875\u9762\u4e0a\u7684",(0,n.kt)("strong",{parentName:"p"},"\u76d1\u63a7\u5b9a\u4e49"),"->",(0,n.kt)("strong",{parentName:"p"},"SpringBoot2"),"\u968f\u65f6\u901a\u8fc7\u7f16\u8f91\u5982\u4e0b\u7684YML\u914d\u7f6e\u6587\u4ef6\u81ea\u5b9a\u4e49\u6dfb\u52a0\u4fee\u6539\u60f3\u8981\u76d1\u63a7\u7684\u6027\u80fd\u6307\u6807\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hertzbeat",src:a(26333).Z,width:"4064",height:"2166"})),(0,n.kt)("h2",{id:"what-is-hertzbeat"},"What is HertzBeat?"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"HertzBeat\u8d6b\u5179\u8df3\u52a8")," \u662f\u4e00\u4e2a\u62e5\u6709\u5f3a\u5927\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b\uff0c\u65e0\u9700Agent\u7684\u5b9e\u65f6\u76d1\u63a7\u544a\u8b66\u5de5\u5177\u3002\u5e94\u7528\u670d\u52a1\uff0c\u6570\u636e\u5e93\uff0c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4e2d\u95f4\u4ef6\uff0c\u4e91\u539f\u751f\uff0c\u7f51\u7edc\u7b49\u76d1\u63a7\uff0c\u9608\u503c\u544a\u8b66\uff0c\u544a\u8b66\u901a\u77e5(\u90ae\u4ef6\u5fae\u4fe1\u9489\u9489\u98de\u4e66\u77ed\u4fe1 Discord Slack Telegram)\u3002")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u5c06",(0,n.kt)("inlineCode",{parentName:"p"},"Http,Jmx,Ssh,Snmp,Jdbc"),"\u7b49\u534f\u8bae\u89c4\u8303\u53ef\u914d\u7f6e\u5316\uff0c\u53ea\u9700\u914d\u7f6eYML\u5c31\u80fd\u4f7f\u7528\u8fd9\u4e9b\u534f\u8bae\u53bb\u81ea\u5b9a\u4e49\u91c7\u96c6\u4efb\u4f55\u60a8\u60f3\u8981\u91c7\u96c6\u7684\u6307\u6807\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u60a8\u76f8\u4fe1\u53ea\u9700\u914d\u7f6eYML\u5c31\u80fd\u7acb\u523b\u9002\u914d\u4e00\u4e2aK8s\u6216Docker\u7b49\u65b0\u7684\u76d1\u63a7\u7c7b\u578b\u5417\uff1f")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"HertzBeat"),"\u7684\u5f3a\u5927\u81ea\u5b9a\u4e49\uff0c\u591a\u7c7b\u578b\u652f\u6301\uff0c\u6613\u6269\u5c55\uff0c\u4f4e\u8026\u5408\uff0c\u5e0c\u671b\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u548c\u4e2d\u5c0f\u56e2\u961f\u5feb\u901f\u642d\u5efa\u81ea\u6709\u76d1\u63a7\u7cfb\u7edf\u3002")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Github: ",(0,n.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Gitee: ",(0,n.kt)("a",{parentName:"strong",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat"))),(0,n.kt)("h2",{id:"-supported"},"\u26c4 Supported"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7f51\u7ad9\u76d1\u63a7, \u7aef\u53e3\u53ef\u7528\u6027, Http Api, Ping\u8fde\u901a\u6027, Jvm, SiteMap\u5168\u7ad9, Ssl\u8bc1\u4e66, SpringBoot, FTP\u670d\u52a1\u5668"),(0,n.kt)("li",{parentName:"ul"},"Mysql, PostgreSQL, MariaDB, Redis, ElasticSearch, SqlServer, Oracle, MongoDB, \u8fbe\u68a6, OpenGauss, ClickHouse, IoTDB"),(0,n.kt)("li",{parentName:"ul"},"Linux, Ubuntu, CentOS, Windows"),(0,n.kt)("li",{parentName:"ul"},"Tomcat, Nacos, Zookeeper, RabbitMQ, Flink, Kafka, ShenYu, DynamicTp, Jetty, ActiveMQ"),(0,n.kt)("li",{parentName:"ul"},"Kubernetes, Docker"),(0,n.kt)("li",{parentName:"ul"},"CiscoSwitch, HpeSwitch, HuaweiSwitch, TpLinkSwitch"),(0,n.kt)("li",{parentName:"ul"},"\u548c\u66f4\u591a\u7684\u81ea\u5b9a\u4e49\u76d1\u63a7\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u77e5\u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"li"},"Discord")," ",(0,n.kt)("inlineCode",{parentName:"li"},"Slack")," ",(0,n.kt)("inlineCode",{parentName:"li"},"Telegram")," ",(0,n.kt)("inlineCode",{parentName:"li"},"\u90ae\u4ef6")," ",(0,n.kt)("inlineCode",{parentName:"li"},"\u9489\u9489")," ",(0,n.kt)("inlineCode",{parentName:"li"},"\u5fae\u4fe1")," ",(0,n.kt)("inlineCode",{parentName:"li"},"\u98de\u4e66")," ",(0,n.kt)("inlineCode",{parentName:"li"},"\u77ed\u4fe1")," ",(0,n.kt)("inlineCode",{parentName:"li"},"Webhook"),"\u3002")))}m.isMDXComponent=!0},41711:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/alert-notice-1-3bad6e06e2c870849bc656a2092d59ac.png"},60315:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/alert-notice-2-8025b90624873463fe0a3f75bd7efafa.png"},16796:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/monitor-springboot2-1-78e4eac4f6430c8747cc7297f87bcc08.png"},17622:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/monitor-springboot2-2-fa4385fb54fb702a0d08163f4fbe198c.png"},92922:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/monitor-springboot2-3-374e72a1a6cd9da11c7f4e04772484f1.png"},3312:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/monitor-springboot2-4-ac24d94ab16c267de2e8970f8854b5c9.png"},37643:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/monitor-springboot2-5-fcb5903d7a7d44d7ab9bcc1edd9add6e.png"},70772:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/monitor-springboot2-6-daaea06167a79dbf6bf73bd004c60c98.png"},55158:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/monitor-springboot2-7-7a4ec6564ba9615353b68c19779752af.png"},26333:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/monitor-springboot2-8-ee4e189a96d0d0a81cf163a3b7b1902a.png"}}]);