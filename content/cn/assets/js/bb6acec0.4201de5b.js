"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[78360],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89930:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Adding support for Virtual Keys in Hudi",excerpt:"Supporting Virtual keys in Hudi for reducing storage overhead",author:"shivnarayan",category:"blog"},o=void 0,s={permalink:"/cn/blog/2021/08/18/virtual-keys",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-08-18-virtual-keys.md",source:"@site/blog/2021-08-18-virtual-keys.md",title:"Adding support for Virtual Keys in Hudi",description:"Apache Hudi helps you build and manage data lakes with different table types, config knobs to cater to everyone's need.",date:"2021-08-18T00:00:00.000Z",formattedDate:"August 18, 2021",tags:[],readingTime:4.95,truncated:!0,authors:[{name:"shivnarayan"}],prevItem:{title:"Improving Marker Mechanism in Apache Hudi",permalink:"/cn/blog/2021/08/18/improving-marker-mechanism"},nextItem:{title:"Schema evolution with DeltaStreamer using KafkaSource",permalink:"/cn/blog/2021/08/16/kafka-custom-deserializer"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apache Hudi helps you build and manage data lakes with different table types, config knobs to cater to everyone's need.\nHudi adds per record metadata fields like ",(0,a.kt)("inlineCode",{parentName:"p"},"_hoodie_record_key"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"_hoodie_partition path"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"_hoodie_commit_time")," which serves multiple purposes.\nThey assist in avoiding re-computing the record key, partition path during merges, compaction and other table operations\nand also assists in supporting ",(0,a.kt)("a",{parentName:"p",href:"/blog/2021/07/21/streaming-data-lake-platform#readers"},"record-level")," incremental queries (in comparison to other table formats, that merely track files).\nIn addition, it ensures data quality by ensuring unique key constraints are enforced even if the key field changes for a given table, during its lifetime.\nBut one of the repeated asks from the community is to leverage existing fields and not to add additional meta fields, for simple use-cases where such benefits are not desired or key changes are very rare."))}u.isMDXComponent=!0}}]);