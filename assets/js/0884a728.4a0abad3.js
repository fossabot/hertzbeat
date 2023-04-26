"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[6481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||s[d]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const i={id:"guide",title:"Help center",sidebar_label:"Help center"},o=void 0,l={unversionedId:"help/guide",id:"help/guide",title:"Help center",description:"Hertzbeat - An open source, real-time monitoring tool with custom-monitor and agentLess.",source:"@site/docs/help/guide.md",sourceDirName:"help",slug:"/help/guide",permalink:"/docs/help/guide",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/help/guide.md",tags:[],version:"current",frontMatter:{id:"guide",title:"Help center",sidebar_label:"Help center"},sidebar:"docs",previous:{title:"Monitoring Template",permalink:"/docs/template"},next:{title:"Website Monitor",permalink:"/docs/help/website"}},p={},m=[{value:"\ud83d\udd2c Monitoring services",id:"-monitoring-services",level:2},{value:"Application service monitoring",id:"application-service-monitoring",level:3},{value:"Database monitoring",id:"database-monitoring",level:3},{value:"Operating system monitoring",id:"operating-system-monitoring",level:3},{value:"Middleware monitoring",id:"middleware-monitoring",level:3},{value:"CloudNative monitoring",id:"cloudnative-monitoring",level:3},{value:"\ud83d\udca1 Alarm service",id:"-alarm-service",level:2},{value:"Alarm center",id:"alarm-center",level:3},{value:"Alarm configuration",id:"alarm-configuration",level:3},{value:"Alarm notification",id:"alarm-notification",level:3}],c={toc:m};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Hertzbeat - An open source, real-time monitoring tool with custom-monitor and agentLess.",(0,a.kt)("br",{parentName:"p"}),"\n","Help documents and auxiliary information during use ")),(0,a.kt)("h2",{id:"-monitoring-services"},"\ud83d\udd2c Monitoring services"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Regularly collect and monitor the performance Metrics exposed by end-to-end services, provide visual interfaces, and process data for alarm and other service scheduling.",(0,a.kt)("br",{parentName:"p"}),"\n","Planned monitoring type\uff1aapplication service, database, operating system, cloud native, open source middleware.")),(0,a.kt)("h3",{id:"application-service-monitoring"},"Application service monitoring"),(0,a.kt)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"website"},"Website monitoring")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"api"},"HTTP API")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"ping"},"PING Connectivity")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"port"},"Port availability")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"fullsite"},"Full site monitoring")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"ssl_cert"},"SSL Cert monitoring")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"jvm"},"JVM monitoring")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"springboot2"},"SpringBoot2.0")," ",(0,a.kt)("br",null)),(0,a.kt)("h3",{id:"database-monitoring"},"Database monitoring"),(0,a.kt)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"mysql"},"MYSQL database monitoring")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"mariadb"},"MariaDB database monitoring")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"postgresql"},"PostgreSQL database monitoring")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"sqlserver"},"SqlServer database monitoring")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"oracle"},"Oracle database monitoring")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"dm"},"DM database monitoring")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"opengauss"},"OpenGauss database monitoring")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"iotdb"},"IoTDB\u6570\u636e\u5e93\u76d1\u63a7")," ",(0,a.kt)("br",null)),(0,a.kt)("h3",{id:"operating-system-monitoring"},"Operating system monitoring"),(0,a.kt)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"linux"},"Linux operating system monitoring")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"windows"},"Windows operating system monitoring")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"ubuntu"},"Ubuntu operating system monitoring")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"centos"},"Centos operating system monitoring")," ",(0,a.kt)("br",null)),(0,a.kt)("h3",{id:"middleware-monitoring"},"Middleware monitoring"),(0,a.kt)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"zookeeper"},"Zookeeper")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"kafka"},"Kafka")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"tomcat"},"Tomcat")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"shenyu"},"ShenYu")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"dynamic_tp"},"DynamicTp")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"rabbitmq"},"RabbitMQ")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"activemq"},"ActiveMQ")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"jetty"},"Jetty")," ",(0,a.kt)("br",null)),(0,a.kt)("h3",{id:"cloudnative-monitoring"},"CloudNative monitoring"),(0,a.kt)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"docker"},"Docker")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"kubernetes"},"Kubernetes")," ",(0,a.kt)("br",null)),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"-alarm-service"},"\ud83d\udca1 Alarm service"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"More liberal threshold alarm configuration (calculation expression), supports email, SMS, WebHook, DingDing, WeChat and FeiShu for alarm notification.\nThe positioning of alarm service is to trigger the threshold accurately and timely, and the alarm notification can be reached in time.")),(0,a.kt)("h3",{id:"alarm-center"},"Alarm center"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The triggered alarm information center provides query and filtering of alarm deletion, alarm processing, mark unprocessed, alarm level status, etc.")),(0,a.kt)("h3",{id:"alarm-configuration"},"Alarm configuration"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Metric threshold configuration provides the Metric threshold configuration in the form of expression, which can set the alarm level, trigger times, alarm notification template and whether it is enabled, correlation monitoring and other functions.")),(0,a.kt)("p",null,"More details see","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"alert_threshold"},"threshold alarm")," ",(0,a.kt)("br",null),"\n","\u2003","\u2003","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"alert_threshold_expr"},"Threshold expression"),"   "),(0,a.kt)("h3",{id:"alarm-notification"},"Alarm notification"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"After triggering the alarm information, in addition to being displayed in the alarm center list, it can also be notified to the designated recipient in a specified way (e-mail, wechat and FeiShu etc.)",(0,a.kt)("br",{parentName:"p"}),"\n","Alarm notification provides different types of notification methods, such as email recipient, enterprise wechat robot notification, DingDing robot notification, and FeiShu robot notification.",(0,a.kt)("br",{parentName:"p"}),"\n","After setting the receiver, you need to set the associated alarm notification strategy to configure which alarm information is sent to which receiver.   ")),(0,a.kt)("p",null,"\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"alert_email"},"Configure Email Notification")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"alert_webhook"},"Configure Discord Notification")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"alert_webhook"},"Configure Slack Notification")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"alert_webhook"},"Configure Telegram Notification")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"alert_webhook"},"Configure WebHook Notification")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"alert_wework"},"Configure enterprise WeChat Robot Notification")," ",(0,a.kt)("br",null),(0,a.kt)("br",{parentName:"p"}),"\n","","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"alert_dingtalk"},"Configure DingDing Robot Notification")," ",(0,a.kt)("br",null),"\n","\u2003","\ud83d\udc49","\u2003",(0,a.kt)("a",{parentName:"p",href:"alert_feishu"},"Configure FeiShu Robot Notification")," ",(0,a.kt)("br",null)))}s.isMDXComponent=!0}}]);