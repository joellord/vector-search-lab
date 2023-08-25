"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[271],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,d=p["".concat(s,".").concat(m)]||p[m]||h[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:6},i="\ud83e\uddb8 Turbocharge your search with fuzzy matching",l={unversionedId:"atlas-search/fuzzy",id:"atlas-search/fuzzy",title:"\ud83e\uddb8 Turbocharge your search with fuzzy matching",description:"Next, you'll implement fuzzy matching also known as approximate string matching. Fuzzy matching helps identify two texts that are approximately similar but not the same.",source:"@site/docs/4-atlas-search/6-fuzzy.mdx",sourceDirName:"4-atlas-search",slug:"/atlas-search/fuzzy",permalink:"/vector-search-lab/docs/atlas-search/fuzzy",draft:!1,editUrl:"https://github.com/mongodb-developer/vector-search-lab/blob/main/docs/4-atlas-search/6-fuzzy.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Add full-text search to your application",permalink:"/vector-search-lab/docs/atlas-search/add-to-app"},next:{title:"\ud83e\uddb8 Better results with scoring",permalink:"/vector-search-lab/docs/atlas-search/scored"}},s={},c=[{value:"Add it to your application",id:"add-it-to-your-application",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-turbocharge-your-search-with-fuzzy-matching"},"\ud83e\uddb8 Turbocharge your search with fuzzy matching"),(0,a.kt)("p",null,"Next, you'll implement fuzzy matching also known as approximate string matching. Fuzzy matching helps identify two texts that are approximately similar but not the same."),(0,a.kt)("p",null,"Try changing the query value to \u201chary poter\u201d. No documents are returned. Using fuzzy matching you will be able to find the ",(0,a.kt)("inlineCode",{parentName:"p"},"Harry Potter")," documents even if you misspell the name in the query."),(0,a.kt)("p",null,"In the aggregation builder, scroll up to ",(0,a.kt)("strong",{parentName:"p"},"Stage 1")," and replace the code with the following."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    index: "fulltextsearch",\n    text: {\n        query: "hary poter",\n        path: "title",\n        fuzzy: {\n            maxEdits: 2\n        }\n    }\n}\n')),(0,a.kt)("p",null,"You can now see that all documents with ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," similar to the search terms show up in the results. You can adjust the ",(0,a.kt)("inlineCode",{parentName:"p"},"maxEdits")," parameter to specify how similar the returned documents can be to the query."),(0,a.kt)("h2",{id:"add-it-to-your-application"},"Add it to your application"),(0,a.kt)("p",null,"There is a method ready for you to use in the ",(0,a.kt)("inlineCode",{parentName:"p"},"server/controllers/movies.mjs")," file. Open up the file and find the ",(0,a.kt)("inlineCode",{parentName:"p"},"fuzzySearch")," method. Replace the code with your new aggregation pipeline that will do fuzzy searching."),(0,a.kt)("p",null,"You can find more about all the parameters for the text search operator ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/atlas/atlas-search/text/"},"in the documentation"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Answer"),(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'  async fuzzySearch(searchTerm) {\n    const movies = await collection\n      .aggregate([\n        {\n          $search: {\n            index: "default",\n            text: {\n              query: searchTerm,\n              path: {\n                wildcard: "*",\n              },\n              fuzzy: {\n                maxEdits: 2,\n              },\n            },\n          },\n        },\n        {\n          $project: {\n            title: 1,\n            year: 1,\n            "imdb.rating": 1,\n            fullplot: 1,\n            poster: 1,\n            released: 1,\n            genres: 1\n          },\n        },\n        {\n          $limit: 20\n        }\n      ]).toArray();\n\n    return movies;\n  }\n')))))}h.isMDXComponent=!0}}]);