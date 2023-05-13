"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[1982],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},65611:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={id:"package-deploy",title:"Install HertzBeat via Package",sidebar_label:"Install via Package"},i=void 0,p={unversionedId:"start/package-deploy",id:"start/package-deploy",title:"Install HertzBeat via Package",description:"You can install and run HertzBeat on Linux Windows Mac system, and CPU supports X86/ARM64. Due to the installation package itself does not include the JAVA runtime environment, you need to prepare JAVA runtime environment in advance.",source:"@site/docs/start/package-deploy.md",sourceDirName:"start",slug:"/start/package-deploy",permalink:"/docs/start/package-deploy",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/start/package-deploy.md",tags:[],version:"current",frontMatter:{id:"package-deploy",title:"Install HertzBeat via Package",sidebar_label:"Install via Package"},sidebar:"docs",previous:{title:"Install via Docker",permalink:"/docs/start/docker-deploy"},next:{title:"Install via Rainbond",permalink:"/docs/start/rainbond-deploy"}},l={},s=[{value:"FAQ",id:"faq",level:3}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can install and run HertzBeat on Linux Windows Mac system, and CPU supports X86/ARM64. Due to the installation package itself does not include the JAVA runtime environment, you need to prepare JAVA runtime environment in advance.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install JAVA runtime environment-refer to ",(0,r.kt)("a",{parentName:"p",href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html"},"official website"),(0,r.kt)("br",{parentName:"p"}),"\n","requirement\uff1aJDK11 ENV",(0,r.kt)("br",{parentName:"p"}),"\n","download JAVA installation package: ",(0,r.kt)("a",{parentName:"p",href:"https://repo.huaweicloud.com/java/jdk/"},"mirror website"),(0,r.kt)("br",{parentName:"p"}),"\n","After installation use command line to check whether you install it successfully.   "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'$ java -version\njava version "11.0.12" \nJava(TM) SE Runtime Environment 18.9 (build 11.0.12+8-LTS-237)\nJava HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.12+8-LTS-237, mixed mode)\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download HertzBeat installation package",(0,r.kt)("br",{parentName:"p"}),"\n","Download installation package corresponding to your system environment   "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"download from ",(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/dromara/hertzbeat/releases"},"GITEE Release")," repository "),(0,r.kt)("li",{parentName:"ul"},"download from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/releases"},"GITHUB Release")," repository"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure HertzBeat's configuration file(optional)",(0,r.kt)("br",{parentName:"p"}),"\n","Unzip the installation package to the host eg: /opt/hertzbeat    "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ tar zxvf hertzbeat-[version number].tar.gz   \n")),(0,r.kt)("p",{parentName:"li"},"Modify the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"hertzbeat/config/application.yml")," params according to your needs.      "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you need to use email to send alarms, you need to replace the email server parameters ",(0,r.kt)("inlineCode",{parentName:"li"},"spring.mail")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"application.yml"),"   "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Recommended")," If you need to use an external Mysql database to replace the built-in H2 database, you need to replace the ",(0,r.kt)("inlineCode",{parentName:"li"},"spring.datasource")," parameter in ",(0,r.kt)("inlineCode",{parentName:"li"},"application.yml")," For specific steps, see ",(0,r.kt)("a",{parentName:"li",href:"mysql-change"},"Using Mysql to replace H2 database"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Recommended")," If you need to use the time series database TDengine to store indicator data, you need to replace the ",(0,r.kt)("inlineCode",{parentName:"li"},"warehouse.store.td-engine")," parameter in ",(0,r.kt)("inlineCode",{parentName:"li"},"application.yml")," for specific steps, see ",(0,r.kt)("a",{parentName:"li",href:"tdengine-init"},"Using TDengine to store metrics data"),"   "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Recommended")," If you need to use the time series database IotDB to store the indicator database, you need to replace the ",(0,r.kt)("inlineCode",{parentName:"li"},"warehouse.storeiot-db")," parameter in ",(0,r.kt)("inlineCode",{parentName:"li"},"application.yml")," For specific steps, see ",(0,r.kt)("a",{parentName:"li",href:"iotdb-init"},"Use IotDB to store metrics data")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the account file(optional)",(0,r.kt)("br",{parentName:"p"}),"\n","HertzBeat default built-in three user accounts, respectively ",(0,r.kt)("inlineCode",{parentName:"p"},"admin/hertzbeat tom/hertzbeat guest/hertzbeat"),(0,r.kt)("br",{parentName:"p"}),"\n","If you need add, delete or modify account or password, configure ",(0,r.kt)("inlineCode",{parentName:"p"},"sureness.yml"),". Ignore this step without this demand.",(0,r.kt)("br",{parentName:"p"}),"\n","For detail steps, please refer to ",(0,r.kt)("a",{parentName:"p",href:"account-modify"},"Configure Account Password"),"  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the service",(0,r.kt)("br",{parentName:"p"}),"\n","Execute the startup script ",(0,r.kt)("inlineCode",{parentName:"p"},"startup.sh")," in the installation directory ",(0,r.kt)("inlineCode",{parentName:"p"},"hertzbeat/bin/"),"   "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ ./startup.sh \n")))),(0,r.kt)("p",null,"\u26a0\ufe0fNote, If there are multiple Java environments configured in the system environment variables and ",(0,r.kt)("inlineCode",{parentName:"p"},"java11")," is not included, modify ",(0,r.kt)("inlineCode",{parentName:"p"},"$ ./startup.sh")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"startup.bat")," to specify the Java path manually.",(0,r.kt)("br",{parentName:"p"}),"\n","In ",(0,r.kt)("inlineCode",{parentName:"p"},"startup.sh"),", add ",(0,r.kt)("inlineCode",{parentName:"p"},"JAVA_HOME=${JAVA_DIR}")," at the first line.",(0,r.kt)("br",{parentName:"p"}),"\n","In ",(0,r.kt)("inlineCode",{parentName:"p"},"startup.bat"),", modify ",(0,r.kt)("inlineCode",{parentName:"p"},"javaw")," to the path of ",(0,r.kt)("inlineCode",{parentName:"p"},"java11"),", such as ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Users\\user\\.jdks\\corretto-11.0.18\\bin\\javaw")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Begin to explore HertzBeat    "),(0,r.kt)("p",{parentName:"li"},"Access http://ip:1157/ using browser. You can explore HertzBeat with default account ",(0,r.kt)("inlineCode",{parentName:"p"},"admin/hertzbeat")," now!    "))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HAVE FUN")),(0,r.kt)("h3",{id:"faq"},"FAQ"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"According to the process deploy\uff0cvisit http://ip:1157/ no interface"),(0,r.kt)("br",{parentName:"p"}),"\n","Please refer to the following points to troubleshoot issues:"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"1\uff1aIf you switch to dependency service MYSQL database\uff0ccheck whether the database is created and started successfully.\n2\uff1aCheck whether dependent services, IP account and password configuration is correct in HertzBeat's configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"hertzbeat/config/application.yml"),".",(0,r.kt)("br",{parentName:"p"}),"\n","3\uff1aCheck whether the running log has errors in ",(0,r.kt)("inlineCode",{parentName:"p"},"hertzbeat/logs/")," directory. If you haven't solved the issue, report it to the communication group or community."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Log an error TDengine connection or insert SQL failed")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"1\uff1aCheck whether database account and password configured is correct, the database is created.",(0,r.kt)("br",{parentName:"p"}),"\n","2\uff1aIf you install TDengine2.3+ version, you must execute ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl start taosadapter")," to start adapter in addition to start the server.    "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Historical monitoring charts have been missing data for a long time")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"1\uff1aCheck whether you configure Tdengine or IoTDB. No configuration means no historical chart data.",(0,r.kt)("br",{parentName:"p"}),"\n","2\uff1aCheck whether Tdengine database ",(0,r.kt)("inlineCode",{parentName:"p"},"hertzbeat")," is created.\n3: Check whether IP account and password configuration is correct in HertzBeat's configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"The historical picture of monitoring details is not displayed or has no data, and TDengine has been deployed")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Please confirm whether the installed TDengine version is near 2.4.0.12, version 3.0 and 2.2 are not compatible."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"The time series database is installed and configured, but the page still displays a pop-up ","[Unable to provide historical chart data, please configure dependent time series database]")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Please check if the configuration parameters are correct",(0,r.kt)("br",{parentName:"p"}),"\n","Is iot-db or td-engine enable set to true",(0,r.kt)("br",{parentName:"p"}),"\n","Note\u26a0\ufe0fIf both hertzbeat and IotDB, TDengine are started under the same host for docker containers, 127.0.0.1 cannot be used for communication between containers by default, and the host IP is changed",(0,r.kt)("br",{parentName:"p"}),"\n","You can check the startup logs according to the logs directory")))))}d.isMDXComponent=!0}}]);