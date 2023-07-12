"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[5446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={id:"extend-ssh",title:"SSH Protocol Custom Monitoring",sidebar_label:"SSH Protocol Custom Monitoring"},a=void 0,l={unversionedId:"advanced/extend-ssh",id:"advanced/extend-ssh",title:"SSH Protocol Custom Monitoring",description:"From Custom Monitoring, you are familiar with how to customize types, Metrics, protocols, etc. Here we will introduce in detail how to use SSH protocol to customize Metric monitoring.",source:"@site/docs/advanced/extend-ssh.md",sourceDirName:"advanced",slug:"/advanced/extend-ssh",permalink:"/docs/advanced/extend-ssh",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/advanced/extend-ssh.md",tags:[],version:"current",frontMatter:{id:"extend-ssh",title:"SSH Protocol Custom Monitoring",sidebar_label:"SSH Protocol Custom Monitoring"},sidebar:"docs",previous:{title:"JDBC Protocol Custom Monitoring",permalink:"/docs/advanced/extend-jdbc"},next:{title:"JMX\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",permalink:"/docs/advanced/extend-jmx"}},s={},p=[{value:"SSH protocol collection process",id:"ssh-protocol-collection-process",level:3},{value:"Data parsing method",id:"data-parsing-method",level:3},{value:"<strong>oneRow</strong>",id:"onerow",level:4},{value:"<strong>multiRow</strong>",id:"multirow",level:4},{value:"Custom Steps",id:"custom-steps",level:3},{value:"Monitoring configuration definition file",id:"monitoring-configuration-definition-file",level:3}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"From ",(0,r.kt)("a",{parentName:"p",href:"extend-point"},"Custom Monitoring"),", you are familiar with how to customize types, Metrics, protocols, etc. Here we will introduce in detail how to use SSH protocol to customize Metric monitoring.\nSSH protocol custom monitoring allows us to easily monitor and collect the Linux Metrics we want by writing sh command script.     ")),(0,r.kt)("h3",{id:"ssh-protocol-collection-process"},"SSH protocol collection process"),(0,r.kt)("p",null,"\u3010",(0,r.kt)("strong",{parentName:"p"},"System directly connected to Linux"),"\u3011->\u3010",(0,r.kt)("strong",{parentName:"p"},"Run shell command script statement"),"\u3011->\u3010",(0,r.kt)("strong",{parentName:"p"},"parse response data: oneRow, multiRow"),"\u3011->\u3010",(0,r.kt)("strong",{parentName:"p"},"Metric data extraction"),"\u3011   "),(0,r.kt)("p",null,"It can be seen from the process that we define a monitoring type of SSH protocol. We need to configure SSH request parameters, configure which Metrics to obtain, and configure query script statements."),(0,r.kt)("h3",{id:"data-parsing-method"},"Data parsing method"),(0,r.kt)("p",null,"We can obtain the corresponding Metric data through the data fields queried by the SHELL script and the Metric mapping we need. At present, there are two mapping parsing methods\uff1aoneRow and multiRow which can meet the needs of most Metrics."),(0,r.kt)("h4",{id:"onerow"},(0,r.kt)("strong",{parentName:"h4"},"oneRow")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Query out a column of data, return the field value (one value per row) of the result set through query and map them to the field.     ")),(0,r.kt)("p",null,"eg\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n","Metrics of Linux to be queried hostname-host name\uff0cuptime-start time",(0,r.kt)("br",{parentName:"p"}),"\n","Host name original query command\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"hostname"),(0,r.kt)("br",{parentName:"p"}),"\n","Start time original query command\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"uptime | awk -F \",\" '{print $1}'"),(0,r.kt)("br",{parentName:"p"}),"\n","Then the query script of the two Metrics in hertzbeat is(Use ",(0,r.kt)("inlineCode",{parentName:"p"},";")," Connect them together)\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"hostname; uptime | awk -F \",\" '{print $1}'"),(0,r.kt)("br",{parentName:"p"}),"\n","The data responded by the terminal is\uff1a    "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tombook\n14:00:15 up 72 days  \n")),(0,r.kt)("p",null,"At last collected Metric data is mapped one by one as\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n","hostname is ",(0,r.kt)("inlineCode",{parentName:"p"},"tombook"),(0,r.kt)("br",{parentName:"p"}),"\n","uptime is ",(0,r.kt)("inlineCode",{parentName:"p"},"14:00:15 up 72 days"),"      "),(0,r.kt)("p",null,"Here the Metric field and the response data can be mapped into a row of collected data one by one      "),(0,r.kt)("h4",{id:"multirow"},(0,r.kt)("strong",{parentName:"h4"},"multiRow")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Query multiple rows of data, return the column names of the result set through the query, and map them to the Metric field of the query.  ")),(0,r.kt)("p",null,"eg\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n","Linux memory related Metric fields queried\uff1atotal-Total memory, used-Used memory,free-Free memory, buff-cache-Cache size, available-Available memory",(0,r.kt)("br",{parentName:"p"}),"\n","Memory metrics original query command\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"free -m"),", Console response\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"              total        used        free      shared  buff/cache   available\nMem:           7962        4065         333           1        3562        3593\nSwap:          8191          33        8158\n")),(0,r.kt)("p",null,"In hertzbeat multiRow format parsing requires a one-to-one mapping between the column name of the response data  and the indicaotr value, so the corresponding query SHELL script is:\n",(0,r.kt)("inlineCode",{parentName:"p"},"free -m | grep Mem | awk 'BEGIN{print \"total used free buff_cache available\"} {print $2,$3,$4,$6,$7}'"),(0,r.kt)("br",{parentName:"p"}),"\n","Console response is\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"total  used  free  buff_cache  available\n7962   4066  331   3564        3592\n")),(0,r.kt)("p",null,"Here the Metric field and the response data can be mapped into collected data one by one."),(0,r.kt)("h3",{id:"custom-steps"},"Custom Steps"),(0,r.kt)("p",null,"In order to configure a custom monitoring type, you need to add and configure YML file."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Monitoring configuration definition file named after monitoring type - eg\uff1aexample_linux.yml in the installation directory /hertzbeat/app/"),(0,r.kt)("li",{parentName:"ol"},"Restart hertzbeat system, we successfully fit a new custom monitoring type.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Configuration usages of the file are detailed below. Please pay attention to usage annotation.   "),(0,r.kt)("h3",{id:"monitoring-configuration-definition-file"},"Monitoring configuration definition file"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Monitoring configuration definition file is used to define ",(0,r.kt)("em",{parentName:"p"},"the name of monitoring type(international), request parameter mapping, index information, collection protocol configuration information"),", etc.  ")),(0,r.kt)("p",null,"eg\uff1aDefine a custom monitoring type named example_linux which use the SSH protocol to collect data.",(0,r.kt)("br",{parentName:"p"}),"\n","The file name: example_linux.yml in /define/example_linux.yml   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# The monitoring type category\uff1aservice-application service monitoring db-database monitoring custom-custom monitoring os-operating system monitoring\ncategory: os\n# Monitoring application type(consistent with the file name) eg: linux windows tomcat mysql aws...\napp: example_linux\nname:\n  zh-CN: \u6a21\u62dfLINUX\u5e94\u7528\u7c7b\u578b\n  en-US: LINUX EXAMPLE APP\nparams:\n  - field: host\n    name:\n      zh-CN: \u4e3b\u673aHost\n      en-US: Host\n    type: host\n    required: true\n  - field: port\n    name:\n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    type: number\n    range: '[0,65535]'\n    required: true\n    defaultValue: 22\n    placeholder: 'Please enter the port'\n  - field: username\n    name:\n      zh-CN: \u7528\u6237\u540d\n      en-US: Username\n    type: text\n    limit: 20\n    required: true\n  - field: password\n    name:\n      zh-CN: \u5bc6\u7801\n      en-US: Password\n    type: password\n    required: true\n# Metric group list\nmetrics:\n  # The first monitoring Metric group basic\n  # Note\uff1a: the built-in monitoring Metrics have (responseTime - response time)\n  - name: basic\n    # The smaller Metric group scheduling priority(0-127), the higher the priority. After completion of the high priority Metric group collection,the low priority Metric group will then be scheduled. Metric groups with the same priority  will be scheduled in parallel.\n    # Metric group with a priority of 0 is an availability group which will be scheduled first. If the collection succeeds, the  scheduling will continue otherwise interrupt scheduling.\n    priority: 0\n    # Specific monitoring Metrics in the Metric group\n    fields:\n      # Metric information include field: name   type: field type(0-number: number, 1-string: string)   instance: primary key of instance or not   unit: Metric unit\n      - field: hostname\n        type: 1\n        instance: true\n      - field: version\n        type: 1\n      - field: uptime\n        type: 1\n    # protocol for monitoring and collection  eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: ssh\n    # Specific collection configuration when the protocol is SSH protocol\n    ssh:\n      # host: ipv4 ipv6 domain name\n      host: ^_^host^_^\n      # port\n      port: ^_^port^_^\n      username: ^_^username^_^\n      password: ^_^password^_^\n      script: (uname -r ; hostname ; uptime | awk -F \",\" '{print $1}' | sed  \"s/ //g\") | sed \":a;N;s/\\n/^/g;ta\" | awk -F '^' 'BEGIN{print \"version hostname uptime\"} {print $1, $2, $3}'\n      # parsing method for reponse data\uff1aoneRow, multiRow\n      parseType: multiRow\n\n  - name: cpu\n    priority: 1\n    fields:\n      # Metric information include field: name   type: field type(0-number: number, 1-string: string)   instance: primary key of instance or not   unit: Metric unit\n      - field: info\n        type: 1\n      - field: cores\n        type: 0\n        unit: the number of cores\n      - field: interrupt\n        type: 0\n        unit: number\n      - field: load\n        type: 1\n      - field: context_switch\n        type: 0\n        unit: number\n    # protocol for monitoring and collection eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: ssh\n    # Specific collection configuration when the protocol is SSH protocol\n    ssh:\n      # \u4e3b\u673ahost: ipv4 ipv6 domain name\n      host: ^_^host^_^\n      # port\n      port: ^_^port^_^\n      username: ^_^username^_^\n      password: ^_^password^_^\n      script: \"LANG=C lscpu | awk -F: '/Model name/ {print $2}';awk '/processor/{core++} END{print core}' /proc/cpuinfo;uptime | sed 's/,/ /g' | awk '{for(i=NF-2;i<=NF;i++)print $i }' | xargs;vmstat 1 1 | awk 'NR==3{print $11}';vmstat 1 1 | awk 'NR==3{print $12}'\"\n      parseType: oneRow\n\n  - name: memory\n    priority: 2\n    fields:\n      # Metric information include field: name   type: field type(0-number: number, 1-string: string)   instance: primary key of instance or not   unit: Metric unit\n      - field: total\n        type: 0\n        unit: Mb\n      - field: used\n        type: 0\n        unit: Mb\n      - field: free\n        type: 0\n        unit: Mb\n      - field: buff_cache\n        type: 0\n        unit: Mb\n      - field: available\n        type: 0\n        unit: Mb\n    # protocol for monitoring and collection eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: ssh\n    # Specific collection configuration when the protocol is SSH protocol\n    ssh:\n      # host: ipv4 ipv6 domain name\n      host: ^_^host^_^\n      # port\n      port: ^_^port^_^\n      username: ^_^username^_^\n      password: ^_^password^_^\n      script: free -m | grep Mem | awk 'BEGIN{print \"total used free buff_cache available\"} {print $2,$3,$4,$6,$7}'\n      parseType: multiRow\n")))}m.isMDXComponent=!0}}]);