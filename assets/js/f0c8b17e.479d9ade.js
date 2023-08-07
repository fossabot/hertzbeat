"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[82578],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),p=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,m=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),k=p(n),s=a,c=k["".concat(m,".").concat(s)]||k[s]||u[s]||l;return n?r.createElement(c,o(o({ref:e},d),{},{components:n})):r.createElement(c,o({ref:e},d))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},44213:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={id:"zookeeper",title:"Monitoring Zookeeper",sidebar_label:"Zookeeper Monitor",keywords:["open source monitoring tool","open source zookeeper monitoring tool","monitoring zookeeper metrics"]},o=void 0,i={unversionedId:"help/zookeeper",id:"help/zookeeper",title:"Monitoring Zookeeper",description:"Collect and monitor the general performance Metrics of Zookeeper.",source:"@site/docs/help/zookeeper.md",sourceDirName:"help",slug:"/help/zookeeper",permalink:"/docs/help/zookeeper",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/help/zookeeper.md",tags:[],version:"current",frontMatter:{id:"zookeeper",title:"Monitoring Zookeeper",sidebar_label:"Zookeeper Monitor",keywords:["open source monitoring tool","open source zookeeper monitoring tool","monitoring zookeeper metrics"]},sidebar:"docs",previous:{title:"CentOS operating system",permalink:"/docs/help/centos"},next:{title:"Apache Kafka",permalink:"/docs/help/kafka"}},m={},p=[{value:"PreRequisites",id:"prerequisites",level:3},{value:"Zookeeper four word command",id:"zookeeper-four-word-command",level:4},{value:"netcat protocol",id:"netcat-protocol",level:4},{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Collection Metric",id:"collection-metric",level:3},{value:"Metric set\uff1aconf",id:"metric-setconf",level:4},{value:"Metric set\uff1astats",id:"metric-setstats",level:4}],d={toc:p};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Collect and monitor the general performance Metrics of Zookeeper.")),(0,a.kt)("h3",{id:"prerequisites"},"PreRequisites"),(0,a.kt)("h4",{id:"zookeeper-four-word-command"},"Zookeeper four word command"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The current implementation scheme uses the four word command provided by zookeeper to collect Metrics.\nUsers need to add the four word command of zookeeper to the white list by themselves.")),(0,a.kt)("p",null,"Steps"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"1.Find our zookeeper configuration file, which is usually zoo.cfg."),(0,a.kt)("p",{parentName:"blockquote"},"2.Add the following commands to the configuration file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Add the required command to the white list\n4lw.commands.whitelist=stat, ruok, conf, isro\n\n# Add all commands to the white list\n4lw.commands.whitelist=*\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"3.Restart service")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"zkServer.sh restart\n")),(0,a.kt)("h4",{id:"netcat-protocol"},"netcat protocol"),(0,a.kt)("p",null,"The current implementation scheme requires us to deploy the Linux server of zookeeper\nCommand environment for installing netcat"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"netcat installation steps"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yum install -y nc\n"))),(0,a.kt)("p",null,"If the terminal displays the following information, the installation is successful"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Complete!\n")),(0,a.kt)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,a.kt)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitoring name"),(0,a.kt)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Port"),(0,a.kt)("td",{parentName:"tr",align:null},"Port provided by Zookeeper. The default is 2181")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Query timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Set the timeout of Zookeeper connection, unit: ms, default: 3000ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Username"),(0,a.kt)("td",{parentName:"tr",align:null},"User name of the Linux connection where Zookeeper is located")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Password"),(0,a.kt)("td",{parentName:"tr",align:null},"Password of the Linux connection where Zookeeper is located")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Collection interval"),(0,a.kt)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 30 seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Whether to detect"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Description remarks"),(0,a.kt)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,a.kt)("h3",{id:"collection-metric"},"Collection Metric"),(0,a.kt)("h4",{id:"metric-setconf"},"Metric set\uff1aconf"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clientPort"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Port")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dataDir"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Data snapshot file directory. By default, 100000 operations generate a snapshot")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dataDirSize"),(0,a.kt)("td",{parentName:"tr",align:null},"kb"),(0,a.kt)("td",{parentName:"tr",align:null},"Data snapshot file size")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dataLogDir"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Transaction log file directory, production environment on a separate disk")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dataLogSize"),(0,a.kt)("td",{parentName:"tr",align:null},"kb"),(0,a.kt)("td",{parentName:"tr",align:null},"Transaction log file size")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tickTime"),(0,a.kt)("td",{parentName:"tr",align:null},"ms"),(0,a.kt)("td",{parentName:"tr",align:null},"Time interval between servers or between clients and servers to maintain heartbeat")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"minSessionTimeout"),(0,a.kt)("td",{parentName:"tr",align:null},"ms"),(0,a.kt)("td",{parentName:"tr",align:null},"Minimum session timeout. Heartbeat timex2. The specified time is less than this time, which is used by default")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"maxSessionTimeout"),(0,a.kt)("td",{parentName:"tr",align:null},"ms"),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum session timeout. Heartbeat timex20. The specified time is greater than this time, which is used by default")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"serverId"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Server id")))),(0,a.kt)("h4",{id:"metric-setstats"},"Metric set\uff1astats"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zk_version"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Server version")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zk_server_state"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Server role")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zk_num_alive_connections"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of connections")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zk_avg_latency"),(0,a.kt)("td",{parentName:"tr",align:null},"ms"),(0,a.kt)("td",{parentName:"tr",align:null},"Average latency")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zk_outstanding_requests"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of outstanding requests")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zk_znode_count"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of znode")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zk_packets_sent"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of packets sent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zk_packets_received"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of packets received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zk_watch_count"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of watch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zk_max_file_descriptor_count"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum number of file descriptors")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zk_approximate_data_size"),(0,a.kt)("td",{parentName:"tr",align:null},"kb"),(0,a.kt)("td",{parentName:"tr",align:null},"data size")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zk_open_file_descriptor_count"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of open file descriptors")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zk_max_latency"),(0,a.kt)("td",{parentName:"tr",align:null},"ms"),(0,a.kt)("td",{parentName:"tr",align:null},"Max latency")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zk_ephemerals_count"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of ephemeral nodes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zk_min_latency"),(0,a.kt)("td",{parentName:"tr",align:null},"ms"),(0,a.kt)("td",{parentName:"tr",align:null},"Min latency")))))}u.isMDXComponent=!0}}]);