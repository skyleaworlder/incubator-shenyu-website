"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2074,96058],{13022:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var o=a(67294),n=a(64926);const i="container_tWpt",s="content_XVLC",r="categray_u3Ut",c="darkAnchor_Os7F",l="title_rVKQ",h="card_7uDe",d="postTitle_PNgZ",u="postAbs_3e9+",g="author_ifW5",y="read_OgJe",p="catalogue_quox",m="catalogueBox_2qDB",f="catalogueBoxUl_10CC",S="catalogueBoxLi_4QVA",b="catalogueBoxA_mY3I",w=[{categray:"SPI",posts:[{title:"MatchStrategy -- analyze the design based on SPI",author:"Huihui Yin",src:"SPI-SourceCode-Analysis-MatchStrategy-SPI",cover:"/img/blog/4-1.png",date:"2021-07-2",abs:"Gateway applications need to support a variety of load balancing strategies, including random,Hashing, RoundRobin and so on. In Apache Shenyu gateway, it not only realizes such traditional algorithms, but also makes smoother traffic processing for the entry of server nodes through detailed processing such as traffic warm-up, so as to obtain better overall stability. In this article, let's walk through how Apache Shenyu is designed and implemented this part of the function."},{title:"PredicateJudge -- analyze the design based on SPI",author:"Huihui Yin",src:"SPI-SourceCode-Analysis-PredicateJudge-SPI",cover:"/img/blog/4-2.png",date:"2021-07-2",abs:"In most of the plugins ( such as Dubbo, gRPC,Spring-cloud, etc) of Apache Shenyu, the routingparameters are designed to support the combination of multiple conditions. In order to realize such requirements, the parameters and behaviors are abstracted to three parts according to its SPI mechanism, and implemented in shenyu-plugin-base module."},{title:"LoadBalance SPI Source Code Analysis",author:"Huihui Yin",src:"SPI-SourceCode-Analysis-LoadBalance-SPI",cover:"/img/blog/4-3.png",date:"2021-07-2",abs:"Apache Shenyu has been identified as a gateway application which supports a variety of protocols and microservice frameworks such as Dubbo, gRPC, Spring-Cloud, etc. To do this, the product has accomplished an elegant SPI (Service Provider Interface) as its foundation, and make the Rule data parsing and predicting program very simple , resiliency and security. As to rule data parsing processing, the SPI design increases the product's scalability. When appending new plugin, in most cases, the existing module is enough for rule data parsing , otherwise it can be rapidly carry out with tiny effort."},{title:"RateLimiter SPI code analysis",author:"Huihui Yin",src:"SPI-SourceCode-Analysis-RateLimiter-SPI",cover:"/img/blog/4-4.png",date:"2021-07-2",abs:"Rate limiter is a very important integral of gateway application, to deal with high traffic. When the system is attacked abnormally by a large number of traffic gathered in a short time; When there are a large number of lower priority request need to be slow down or else it will effect your high priority transactions; Or sometimes your system can not afford the regular traffic; in these scenarios, we need to start rate limiter component to protect our system, through rejection, wait, load shedding,etc, limit the requests to an acceptable quantities, or only certain domains (or services) requests can get through."}]},{categray:"RegisterCenter",posts:[{title:"Register Center Source Code Analysis of Http Register",author:"midnight2104",src:"RegisterCenter-SourceCode-Analysis-Http-Register",cover:"/img/blog/5-1.png",date:"2021-07-2",abs:"In ShenYu gateway, the registration center is used to register the client information to shenyu-admin, admin then synchronizes this information to the gateway through data synchronization, and the gateway completes traffic filtering through these data. The client information mainly includes interface information and URI information."}]},{categray:"Start",posts:[{title:"Apache ShenYu Start Demo",author:"Kunshuai Zhu",src:"Start-SourceCode-Analysis-Start-Demo",cover:"/img/blog/6-1.png",date:"2021-07-2",abs:"Apache ShenYu Start Demo"}]},{categray:"DataSync",posts:[{title:"Etcd Data Synchronization Source Code Analysis",author:"4zd",src:"DataSync-SourceCode-Analysis-Etcd-Data-Sync",cover:"/img/blog/1-1.png",date:"2021-07-2",abs:"In ShenYu gateway, data synchronization refers to how to synchronize the updated data to the gateway after the data is sent in the background management system. The Apache ShenYu gateway currently supports data synchronization for ZooKeeper, WebSocket, http long poll, Nacos, Etcd and Consul. The main content of this article is based on Etcd data synchronization source code analysis."},{title:"Http Long Polling Data Synchronization Source Code Analysis",author:"midnight2104",src:"DataSync-SourceCode-Analysis-Http-Data-Sync",cover:"/img/blog/1-2.png",date:"2022-07-2",abs:"In ShenYu gateway, data synchronization refers to how to synchronize the updated data to the gateway after the data is sent in the background management system. The Apache ShenYu gateway currently supports data synchronization for ZooKeeper, WebSocket, http long poll, Nacos, etcd and Consul. The main content of this article is based on http long poll data synchronization source code analysis."},{title:"Nacos Data Synchronization Source Code Analysis",author:"4zd",src:"DataSync-SourceCode-Analysis-Nacos-Data-Sync",cover:"/img/blog/1-3.png",date:"2022-07-2",abs:"In ShenYu gateway, data synchronization refers to how to synchronize the updated data to the gateway after the data is sent in the background management system. The Apache ShenYu gateway currently supports data synchronization for ZooKeeper, WebSocket, http long poll, Nacos, etcd and Consul. The main content of this article is based on Nacos data synchronization source code analysis."},{title:"WebSocket Data Synchronization Source Code Analysis",author:"midnight2104",src:"DataSync-SourceCode-Analysis-WebSocket-Data-Sync",cover:"/img/blog/1-4.png",date:"2022-07-2",abs:"In ShenYu gateway, data synchronization refers to how to synchronize the updated data to the gateway after the data is sent in the background management system. The Apache ShenYu gateway currently supports data synchronization for ZooKeeper, WebSocket, http long poll, Nacos, etcd and Consul. The main content of this article is based on WebSocket data synchronization source code analysis."},{title:"ZooKeeper Data Synchronization Source Code Analysis",author:"midnight2104",src:"DataSync-SourceCode-Analysis-ZooKeeper-Data-Sync",cover:"/img/blog/1-5.png",date:"2022-07-2",abs:"In ShenYu gateway, data synchronization refers to how to synchronize the updated data to the gateway after the data is sent in the background management system. The Apache ShenYu gateway currently supports data synchronization for ZooKeeper, WebSocket, http long poll, Nacos, etcd and Consul. The main content of this article is based on WebSocket data synchronization source code analysis."}]},{categray:"Integration Test",posts:[{title:"Integration Test Analysis",author:"Kunshuai Zhu",src:"IntegrationTest-Analysis",cover:"/img/logo.svg",date:"2022-07-2",abs:"This article will provide an in-depth analysis of Apache ShenYu's integration tests."}]},{categray:"Plugin",posts:[{title:"Code Analysis For Context-Path Plugin",author:"Kunshuai Zhu",src:"Plugin-SourceCode-Analysis-Context-Path-Plugin",cover:"/img/logo.svg",date:"2021-07-2",abs:"Code Analysis For Context-Path Plugin"},{title:"Code Analysis For Dubbo Plugin",author:"midnight2104",src:"Plugin-SourceCode-Analysis-Dubbo-Plugin",cover:"/img/blog/3-2.png",date:"2021-07-2",abs:"The ShenYu gateway uses the divide plugin to handle http requests. You can see the official documentation Quick start with Http to learn how to use this plugin."},{title:"Code Analysis For Param-Mapping Plugin",author:"Kunshuai Zhu",src:"Plugin-SourceCode-Analysis-Param-Mapping-Plugin",cover:"/img/blog/3-3.jpg",date:"2021-07-2",abs:"The Apache ShenYu gateway uses the dubbo plugin to make calls to the dubbo service. You can see the official documentation Dubbo Quick Start to learn how to use the plugin."},{title:"Code Analysis For Divide Plugin",author:"midnight2104",src:"Plugin-SourceCode-Analysis-Divide-Plugin",cover:"/img/blog/3-4.png",date:"2021-07-2",abs:"Code Analysis For Divide Plugin"}]}];const v=function(){const[e,t]=(0,o.useState)(0);let a=(0,o.useRef)([o.createRef(),o.createRef(),o.createRef(),o.createRef(),o.createRef(),o.createRef()]),v=(0,o.useRef)([o.createRef(),o.createRef(),o.createRef(),o.createRef(),o.createRef(),o.createRef()]);return(0,o.useEffect)((()=>(window.addEventListener("scroll",(()=>{for(let e=0;e<v.current.length;e++){let a=v.current[e].current.getBoundingClientRect().y;a>=90&&a<=300&&t(e)}})),()=>window.removeEventListener("scroll",(()=>{})))),[]),o.createElement(n.Z,{title:"Blog"},o.createElement("div",{className:i},o.createElement("div",{className:s},w.map(((e,t)=>o.createElement("div",{className:r,key:t},o.createElement("div",{className:c,id:e.categray}),o.createElement("div",{ref:v.current[t],className:l},e.categray," "),e.posts.map(((e,t)=>o.createElement("div",{className:h,key:t},o.createElement("div",{className:d,onClick:()=>window.location.href="https://shenyu.apache.org/blog/"+e.src},e.title),o.createElement("div",{className:g}," ",e.author,"   \u2002 \u2002     ",e.date," "),o.createElement("div",{className:u},e.abs),o.createElement("div",{className:y,onClick:()=>window.location.href="https://shenyu.apache.org/blog/"+e.src}," Read More ")))))))),o.createElement("div",{className:p},o.createElement("div",{className:m},o.createElement("ul",{className:f},w.map(((n,i)=>{const s="#"+n.categray,r="Cata"+n.categray;return o.createElement("li",{key:i,className:S,id:r},o.createElement("a",{ref:a.current[i],href:s,id:"catalogueBoxA",className:b,style:{color:e==i?"var(--ifm-color-primary)":"var(--ifm-toc-link-color)"},onClick:()=>t(i)},n.categray))})))))))}},42086:(e,t,a)=>{a.d(t,{Z:()=>i});var o=a(87462),n=a(67294);const i=e=>{let{width:t=40,height:a=20,...i}=e;return n.createElement("svg",(0,o.Z)({t:"1631348384596",className:"icon",viewBox:"0 0 1024 1024",version:"1.1"},i,{"p-id":"557",width:"20",height:"20"}),n.createElement("path",{d:"M547.797333 638.208l-104.405333-103.168 1.237333-1.28a720.170667 720.170667 0 0 0 152.490667-268.373333h120.448V183.082667h-287.744V100.906667H347.605333v82.218666H59.818667V265.386667h459.178666a648.234667 648.234667 0 0 1-130.304 219.946666 643.242667 643.242667 0 0 1-94.976-137.728H211.541333a722.048 722.048 0 0 0 122.453334 187.434667l-209.194667 206.378667 58.368 58.368 205.525333-205.525334 127.872 127.829334 31.232-83.84m231.424-208.426667h-82.218666l-184.96 493.312h82.218666l46.037334-123.306667h195.242666l46.464 123.306667h82.218667l-185.002667-493.312m-107.690666 287.744l66.56-178.005333 66.602666 178.005333z",fill:"currentColor","p-id":"558"}))}}}]);