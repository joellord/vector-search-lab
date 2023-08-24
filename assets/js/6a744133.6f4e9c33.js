"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,b=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return n?o.createElement(b,i(i({ref:t},d),{},{components:n})):o.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},i="Running the application",l={unversionedId:"mongodb-atlas/codesandbox",id:"mongodb-atlas/codesandbox",title:"Running the application",description:"For this Lab, you will use CodeSandbox as your development environment. CodeSandbox is an online code editor and prototyping tool that makes creating and sharing web apps faster.",source:"@site/docs/1-mongodb-atlas/3-codesandbox.mdx",sourceDirName:"1-mongodb-atlas",slug:"/mongodb-atlas/codesandbox",permalink:"/vector-search-lab/docs/mongodb-atlas/codesandbox",draft:!1,editUrl:"https://github.com/mongodb-developer/vector-search-lab/blob/main/docs/1-mongodb-atlas/3-codesandbox.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Load the sample dataset",permalink:"/vector-search-lab/docs/mongodb-atlas/prepare-your-data"},next:{title:"Start the application",permalink:"/vector-search-lab/docs/mongodb-atlas/start-application"}},c={},s=[{value:"Create a CodeSandbox account",id:"create-a-codesandbox-account",level:2},{value:"Open the Search Lab sandbox",id:"open-the-search-lab-sandbox",level:2},{value:"Fork the sandbox",id:"fork-the-sandbox",level:2},{value:"Explore",id:"explore",level:2},{value:"Run the application",id:"run-the-application",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-the-application"},"Running the application"),(0,a.kt)("p",null,"For this Lab, you will use CodeSandbox as your development environment. CodeSandbox is an online code editor and prototyping tool that makes creating and sharing web apps faster."),(0,a.kt)("h2",{id:"create-a-codesandbox-account"},"Create a CodeSandbox account"),(0,a.kt)("p",null,"Start by creating a free CodeSandbox account if you don't have one already."),(0,a.kt)("p",null,'You can create a CodeSandbox account by clicking on the "Try for Free" button in the top right corner of the ',(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io"},"CodeSandbox website"),"."),(0,a.kt)("p",null,"Follow the instructions to create your account."),(0,a.kt)("h2",{id:"open-the-search-lab-sandbox"},"Open the Search Lab sandbox"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"There is a small bug with CodeSandbox that prevents you to fork the repository if you don't already have an account. Make sure the follow the instructions in the previous step before continuing.")),(0,a.kt)("p",null,"Once you have created your CodeSandbox account, you can open the Search Lab sandbox by clicking on the following link:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/p/github/joellord/vector-search-lab-code/main?workspaceId=ee4f50cb-0dc2-4500-9812-9f080aabd73c"},"Search Lab on CodeSandbox")),(0,a.kt)("h2",{id:"fork-the-sandbox"},"Fork the sandbox"),(0,a.kt)("p",null,"Once the sandbox is open, you will need to create a new branch so that you can save your changes."),(0,a.kt)("p",null,'To create the new branch, click the "Create Branch" button in the top right corner of the screen.'),(0,a.kt)("p",null,"Once you have your branch, you will be able to start running the Lab."),(0,a.kt)("h2",{id:"explore"},"Explore"),(0,a.kt)("p",null,"Take a few minutes to explore the application."),(0,a.kt)("p",null,'From the left navigation bar, you will see two folders: "client" and "server".'),(0,a.kt)("p",null,"The \"client\" folder contains the React application that you will be using. If you aren't familiar with React, don't worry as you shouldn't need to do any changes here."),(0,a.kt)("p",null,'The "server" folder contains the Node.js server. This is where you will be making changes to implement the Atlas Search queries.'),(0,a.kt)("p",null,'The server has a controller that is responsible for handling the search requests. The controller is located in the "server/controllers/movies.js" file.'),(0,a.kt)("p",null,"This file is where you will make your changes."),(0,a.kt)("h2",{id:"run-the-application"},"Run the application"),(0,a.kt)("p",null,"The CodeSandbox is configured to install the required dependencies and start the application automatically."),(0,a.kt)("p",null,"Both the server and the client should have started, and you should see the demo application. However, the application won't work just yet."))}u.isMDXComponent=!0}}]);