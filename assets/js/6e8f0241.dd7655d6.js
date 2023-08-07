"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[97520],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=m(n),s=r,k=c["".concat(p,".").concat(s)]||c[s]||d[s]||l;return n?a.createElement(k,o(o({ref:e},u),{},{components:n})):a.createElement(k,o({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8419:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={id:"dynamic_tp",title:"Monitoring DynamicTp ThreadPool",sidebar_label:"DynamicTp Monitor",keywords:["open source monitoring tool","open source dynamicTp monitoring tool","monitoring DynamicTp metrics"]},o=void 0,i={unversionedId:"help/dynamic_tp",id:"help/dynamic_tp",title:"Monitoring DynamicTp ThreadPool",description:"Collect and monitor the thread pool performance Metrics exposed by DynamicTp actuator.",source:"@site/docs/help/dynamic_tp.md",sourceDirName:"help",slug:"/help/dynamic_tp",permalink:"/docs/help/dynamic_tp",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/help/dynamic_tp.md",tags:[],version:"current",frontMatter:{id:"dynamic_tp",title:"Monitoring DynamicTp ThreadPool",sidebar_label:"DynamicTp Monitor",keywords:["open source monitoring tool","open source dynamicTp monitoring tool","monitoring DynamicTp metrics"]},sidebar:"docs",previous:{title:"Apache ShenYu",permalink:"/docs/help/shenyu"},next:{title:"RabbitMQ Monitor",permalink:"/docs/help/rabbitmq"}},p={},m=[{value:"PreRequisites",id:"prerequisites",level:3},{value:"Configuration parameters",id:"configuration-parameters",level:3},{value:"Collect metrics",id:"collect-metrics",level:3},{value:"Metric collection: thread_pool",id:"metric-collection-thread_pool",level:4}],u={toc:m};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Collect and monitor the thread pool performance Metrics exposed by DynamicTp actuator.")),(0,r.kt)("h3",{id:"prerequisites"},"PreRequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Integration Using ",(0,r.kt)("inlineCode",{parentName:"li"},"DynamicTp"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DynamicTp")," is a lightweight dynamic thread pool based on the configuration center of the Jvm language. It has built-in monitoring and alarm functions, which can be realized through SPI custom extensions."),(0,r.kt)("p",null,"For integrated use, please refer to the document ",(0,r.kt)("a",{parentName:"p",href:"https://dynamictp.cn/guide/use/quick-start.html"},"Quick Start")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Open SpringBoot Actuator Endpoint to expose ",(0,r.kt)("inlineCode",{parentName:"li"},"DynamicTp")," Metric interface")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"management:\n   endpoints:\n     web:\n       exposure:\n         include: '*'\n")),(0,r.kt)("p",null,"Test whether the access Metric interface ",(0,r.kt)("inlineCode",{parentName:"p"},"ip:port/actuator/dynamic-tp")," has response json data as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n   {\n     "poolName": "commonExecutor",\n     "corePoolSize": 1,\n     "maximumPoolSize": 1,\n     "queueType": "LinkedBlockingQueue",\n     "queueCapacity": 2147483647,\n     "queueSize": 0,\n     "fair": false,\n     "queueRemainingCapacity": 2147483647,\n     "activeCount": 0,\n     "taskCount": 0,\n     "completedTaskCount": 0,\n     "largestPoolSize": 0,\n     "poolSize": 0,\n     "waitTaskCount": 0,\n     "rejectCount": 0,\n     "rejectHandlerName": null,\n     "dynamic": false,\n     "runTimeoutCount": 0,\n     "queueTimeoutCount": 0\n   },\n   {\n     "maxMemory": "4GB",\n     "totalMemory": "444MB",\n     "freeMemory": "250.34 MB",\n     "usableMemory": "3.81GB"\n   }\n]\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Add DynamicTp monitoring under HertzBeat middleware monitoring")),(0,r.kt)("h3",{id:"configuration-parameters"},"Configuration parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,r.kt)("td",{parentName:"tr",align:null},"The peer IPV4, IPV6 or domain name to be monitored. Note \u26a0\ufe0fWithout protocol header (eg: https://, http://).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Monitoring name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name that identifies this monitoring, and the name needs to be unique.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},"The port provided by the application service, the default is 8080.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable HTTPS"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to access the website through HTTPS, note \u26a0\ufe0fEnable HTTPS, the default corresponding port needs to be changed to 443")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Base Path"),(0,r.kt)("td",{parentName:"tr",align:null},"Exposed interface path prefix, default /actuator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Acquisition Interval"),(0,r.kt)("td",{parentName:"tr",align:null},"Interval time for monitoring periodic data collection, in seconds, the minimum interval that can be set is 30 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Whether to detect"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring, and the operation of adding and modifying will continue after the detection is successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description Remarks"),(0,r.kt)("td",{parentName:"tr",align:null},"More remark information to identify and describe this monitoring, users can remark information here")))),(0,r.kt)("h3",{id:"collect-metrics"},"Collect metrics"),(0,r.kt)("h4",{id:"metric-collection-thread_pool"},"Metric collection: thread_pool"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Help Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pool_name"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Thread pool name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"core_pool_size"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of core threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maximum_pool_size"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queue_type"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Task queue type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queue_capacity"),(0,r.kt)("td",{parentName:"tr",align:null},"MB"),(0,r.kt)("td",{parentName:"tr",align:null},"task queue capacity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queue_size"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"The current occupied size of the task queue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fair"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Queue mode, SynchronousQueue will be used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queue_remaining_capacity"),(0,r.kt)("td",{parentName:"tr",align:null},"MB"),(0,r.kt)("td",{parentName:"tr",align:null},"task queue remaining size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"active_count"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of active threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"task_count"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of tasks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"completed_task_count"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of completed tasks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"largest_pool_size"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"The largest number of threads in history")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pool_size"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"current number of threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wait_task_count"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of tasks waiting to be executed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reject_count"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of rejected tasks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reject_handler_name"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Reject policy type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dynamic"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Dynamic thread pool or not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_timeout_count"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of running timeout tasks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queue_timeout_count"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of tasks waiting for timeout")))))}d.isMDXComponent=!0}}]);