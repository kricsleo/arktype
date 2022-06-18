"use strict";(self.webpackChunk_re_docs=self.webpackChunk_re_docs||[]).push([[212],{9352:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>s});var n=r(8055);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=p(r),s=o,m=u["".concat(c,".").concat(s)]||u[s]||d[s]||a;return r?n.createElement(m,i(i({ref:t},f),{},{components:r})):n.createElement(m,i({ref:t},f))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>s,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>v});var n=r(9352),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&f(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&f(e,r,t[r]);return e};const u={},s=void 0,m={unversionedId:"api/model.validateconfig",id:"api/model.validateconfig",title:"model.validateconfig",description:"@re-/model &gt; ValidateConfig",source:"@site/docs/model/api/model.validateconfig.md",sourceDirName:"api",slug:"/api/model.validateconfig",permalink:"/model/next/api/model.validateconfig",draft:!1,tags:[],version:"current",frontMatter:{}},y={},v=[{value:"ValidateConfig type",id:"validateconfig-type",level:2}],b={toc:v};function g(e){var t,r=e,{components:o}=r,f=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},b),f),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/model/next/api/model"}),"@re-/model")," ",">"," ",(0,n.kt)("a",d({parentName:"p"},{href:"/model/next/api/model.validateconfig"}),"ValidateConfig")),(0,n.kt)("h2",d({},{id:"validateconfig-type"}),"ValidateConfig type"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-typescript"}),"export declare type ValidateConfig = {\n    ignoreExtraneousKeys?: boolean\n    validator?: CustomValidator\n    verbose?: boolean\n}\n")),(0,n.kt)("b",null,"References:")," [CustomValidator](/model/next/api/model.customvalidator)")}g.isMDXComponent=!0}}]);