"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[25322],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=p(n),s=r,k=d["".concat(m,".").concat(s)]||d[s]||u[s]||l;return n?a.createElement(k,o(o({ref:e},c),{},{components:n})):a.createElement(k,o({ref:e},c))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29079:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={id:"shenyu",title:"Monitoring\uff1aApache ShenYu API Gateway",sidebar_label:"Apache ShenYu",keywords:["open source monitoring tool","open source apache shenyu monitoring tool","monitoring apache shenyu metrics"]},o=void 0,i={unversionedId:"help/shenyu",id:"version-v1.1.x/help/shenyu",title:"Monitoring\uff1aApache ShenYu API Gateway",description:"monitor ShenYu running status(JVM-related), include request response and other related metrics.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.1.x/help/shenyu.md",sourceDirName:"help",slug:"/help/shenyu",permalink:"/docs/v1.1.x/help/shenyu",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/version-v1.1.x/help/shenyu.md",tags:[],version:"v1.1.x",frontMatter:{id:"shenyu",title:"Monitoring\uff1aApache ShenYu API Gateway",sidebar_label:"Apache ShenYu",keywords:["open source monitoring tool","open source apache shenyu monitoring tool","monitoring apache shenyu metrics"]},sidebar:"docs",previous:{title:"Apache Tomcat",permalink:"/docs/v1.1.x/help/tomcat"},next:{title:"DynamicTp Monitor",permalink:"/docs/v1.1.x/help/dynamic_tp"}},m={},p=[{value:"Pre-monitoring operations",id:"pre-monitoring-operations",level:2},{value:"Configuration parameters",id:"configuration-parameters",level:3},{value:"Collect metrics",id:"collect-metrics",level:3},{value:"Index collection: shenyu_request_total",id:"index-collection-shenyu_request_total",level:4},{value:"Metric collection: shenyu_request_throw_created",id:"metric-collection-shenyu_request_throw_created",level:4},{value:"Metric collection: process_cpu_seconds_total",id:"metric-collection-process_cpu_seconds_total",level:4},{value:"Metric collection: process_open_fds",id:"metric-collection-process_open_fds",level:4},{value:"Metric collection: process_max_fds",id:"metric-collection-process_max_fds",level:4},{value:"Metric collection: jvm_info",id:"metric-collection-jvm_info",level:4},{value:"Metric collection: jvm_memory_bytes_used",id:"metric-collection-jvm_memory_bytes_used",level:4},{value:"Metric collection: jvm_memory_pool_bytes_used",id:"metric-collection-jvm_memory_pool_bytes_used",level:4},{value:"Metric collection: jvm_memory_pool_bytes_committed",id:"metric-collection-jvm_memory_pool_bytes_committed",level:4},{value:"Metric collection: jvm_memory_pool_bytes_max",id:"metric-collection-jvm_memory_pool_bytes_max",level:4},{value:"Metric collection: jvm_threads_state",id:"metric-collection-jvm_threads_state",level:4}],c={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"monitor ShenYu running status(JVM-related), include request response and other related metrics.           ")),(0,r.kt)("h2",{id:"pre-monitoring-operations"},"Pre-monitoring operations"),(0,r.kt)("p",null,"Enable ",(0,r.kt)("inlineCode",{parentName:"p"},"metrics")," plugin in ShenYu, expose it's prometheus metrics endpoint\u3002  "),(0,r.kt)("p",null,"Refer ",(0,r.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/docs/plugin-center/observability/metrics-plugin"},"ShenYu Document"),"  "),(0,r.kt)("p",null,"Two Steps Mainly: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"add metrics plugin dependency in gateway's pom.xml.  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-metrics</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"modify this config in shenyu gateway yaml. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  metrics:\n    enabled: false #false is close, true is open\n    name : prometheus \n    host: 127.0.0.1 \n    port: 8090 \n    jmxConfig: \n    props:\n      jvm_enabled: true #enable jvm monitoring\n")),(0,r.kt)("p",null,"Finally, restart the access gateway metrics endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"http://ip:8090")," to respond to prometheus format data."),(0,r.kt)("h3",{id:"configuration-parameters"},"Configuration parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,r.kt)("td",{parentName:"tr",align:null},"The peer IPV4, IPV6 or domain name to be monitored. Note \u26a0\ufe0fWithout protocol header (eg: https://, http://).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Monitoring name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name that identifies this monitoring, and the name needs to be unique.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},"The port provided by the gateway Metric interface, the default is 8090.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP request response timeout")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Acquisition Interval"),(0,r.kt)("td",{parentName:"tr",align:null},"Interval time for monitoring periodic data collection, in seconds, the minimum interval that can be set is 30 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Whether to detect"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring, and the operation of adding and modifying will continue after the detection is successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description Remarks"),(0,r.kt)("td",{parentName:"tr",align:null},"More remark information to identify and describe this monitoring, users can remark information here")))),(0,r.kt)("h3",{id:"collect-metrics"},"Collect metrics"),(0,r.kt)("h4",{id:"index-collection-shenyu_request_total"},"Index collection: shenyu_request_total"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Collect all requests from ShenYu gateway")))),(0,r.kt)("h4",{id:"metric-collection-shenyu_request_throw_created"},"Metric collection: shenyu_request_throw_created"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Collect the number of abnormal requests from ShenYu Gateway")))),(0,r.kt)("h4",{id:"metric-collection-process_cpu_seconds_total"},"Metric collection: process_cpu_seconds_total"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"total user and system CPU elapsed seconds")))),(0,r.kt)("h4",{id:"metric-collection-process_open_fds"},"Metric collection: process_open_fds"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"number of open file descriptors")))),(0,r.kt)("h4",{id:"metric-collection-process_max_fds"},"Metric collection: process_max_fds"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"maximum number of open file descriptors")))),(0,r.kt)("h4",{id:"metric-collection-jvm_info"},"Metric collection: jvm_info"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"runtime"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"JVM version information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vendor"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"JVM version information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"JVM version information")))),(0,r.kt)("h4",{id:"metric-collection-jvm_memory_bytes_used"},"Metric collection: jvm_memory_bytes_used"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"area"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"JVM memory area")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"MB"),(0,r.kt)("td",{parentName:"tr",align:null},"used size of the given JVM memory region")))),(0,r.kt)("h4",{id:"metric-collection-jvm_memory_pool_bytes_used"},"Metric collection: jvm_memory_pool_bytes_used"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pool"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"JVM memory pool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"MB"),(0,r.kt)("td",{parentName:"tr",align:null},"used size of the given JVM memory pool")))),(0,r.kt)("h4",{id:"metric-collection-jvm_memory_pool_bytes_committed"},"Metric collection: jvm_memory_pool_bytes_committed"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pool"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"JVM memory pool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"MB"),(0,r.kt)("td",{parentName:"tr",align:null},"The committed size of the given JVM memory pool")))),(0,r.kt)("h4",{id:"metric-collection-jvm_memory_pool_bytes_max"},"Metric collection: jvm_memory_pool_bytes_max"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pool"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"JVM memory pool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"MB"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum size of the memory pool for the given JVM")))),(0,r.kt)("h4",{id:"metric-collection-jvm_threads_state"},"Metric collection: jvm_threads_state"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"thread state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of threads corresponding to the thread state")))))}u.isMDXComponent=!0}}]);