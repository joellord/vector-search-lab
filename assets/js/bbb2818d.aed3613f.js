"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[94],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7949:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(2263);const o=e=>{let{href:t,children:a}=e;a||(a=t);const o=(0,r.Z)(),i=`${t}?${o?.siteConfig?.customFields?.utmParams||""}`;return n.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},a)}},7830:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var n=a(7462),r=(a(7294),a(3905)),o=a(4996),i=a(7949);const s={sidebar_position:3},l="Construct search queries",c={unversionedId:"atlas-search/search-queries",id:"atlas-search/search-queries",title:"Construct search queries",description:"You can construct Atlas Search queries with the $search aggregation pipeline stage.",source:"@site/docs/4-atlas-search/3-search-queries.mdx",sourceDirName:"4-atlas-search",slug:"/atlas-search/search-queries",permalink:"/vector-search-lab/docs/atlas-search/search-queries",draft:!1,editUrl:"https://github.com/mongodb-developer/vector-search-lab/blob/main/docs/4-atlas-search/3-search-queries.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create Atlas Search indexes",permalink:"/vector-search-lab/docs/atlas-search/search-index"},next:{title:"Add full-text search to your application",permalink:"/vector-search-lab/docs/atlas-search/add-to-app"}},p={},h=[{value:"Aggregations in the Atlas UI",id:"aggregations-in-the-atlas-ui",level:2},{value:"Document scores and modifying the search results order",id:"document-scores-and-modifying-the-search-results-order",level:2}],u={toc:h},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"construct-search-queries"},"Construct search queries"),(0,r.kt)("p",null,"You can construct Atlas Search queries with the ",(0,r.kt)("inlineCode",{parentName:"p"},"$search")," aggregation pipeline stage."),(0,r.kt)(i.Z,{href:"https://mongodb.com/docs/manual/core/aggregation-pipeline",mdxType:"Link"},"MongoDB aggregation pipelines")," are multi-stage \u2018assembly lines\u2019 that reshape data and perform calculations. Pipelines can consist of one or more aggregation stages, performing different operations like match, group, sort, and output. For an exhaustive list of all available stages visit [Aggregation Pipeline Stages](https://mongodb.com/docs/manual/reference/operator/aggregation-pipeline/#std-label-aggregation-pipeline-operator-reference?utm_campaign=devrel&utm_source=workshop&utm_medium=cta&utm_content=soccer_workshop&utm_term=stanimira.vlaeva).",(0,r.kt)("p",null,"In this section, we'll build an aggregation pipeline with the ",(0,r.kt)("inlineCode",{parentName:"p"},"$search")," stage which performs full-text search using an Atlas Search index."),(0,r.kt)("p",null,"In this section, you'll use the ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," operator which performs textual analyzed search."),(0,r.kt)("h2",{id:"aggregations-in-the-atlas-ui"},"Aggregations in the Atlas UI"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the ",(0,r.kt)("strong",{parentName:"p"},"Collections")," tab of your database deployment."),(0,r.kt)("img",{alt:"Collections tab highlighted on database deployments page",src:(0,o.Z)("/img/chapter-2-search-indexes/collections-tab.png")})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the ",(0,r.kt)("strong",{parentName:"p"},"Aggregation")," tab from the navbar under your collection details."),(0,r.kt)("img",{alt:"Aggregations tab highlighted on the collection details page",src:(0,o.Z)("/img/chapter-2-search-indexes/aggregation-tab.png")})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Add Stage")," button and type ",(0,r.kt)("strong",{parentName:"p"},"$search")," in the ",(0,r.kt)("strong",{parentName:"p"},"select")," input."),(0,r.kt)("img",{alt:"Stage 1 of the pipeline with the $search stage selected",src:(0,o.Z)("/img/chapter-2-search-indexes/search-stage.png")})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the following code for the ",(0,r.kt)("inlineCode",{parentName:"p"},"$search")," stage."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    index: "fulltextsearch",\n    text: {\n        query: "harry potter",\n        path: "title"\n    }\n}\n')),(0,r.kt)("p",{parentName:"li"},'The stage uses the "fulltextsearch" index. You don\'t need to explicitly define the index if it\'s "default" but you can keep it for clarity.'),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"text"),' operator will search for "harry potter" in the ',(0,r.kt)("inlineCode",{parentName:"p"},"title")," field. You should see a collection of documents returned on the right.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Add Stage")," button, scroll down, and select ",(0,r.kt)("strong",{parentName:"p"},"$project")," for ",(0,r.kt)("strong",{parentName:"p"},"Stage 2"),"."),(0,r.kt)("img",{alt:"Stage 1 of the pipeline with the $project stage selected",src:(0,o.Z)("/img/chapter-2-search-indexes/project-stage.png")})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the following implementation for the ",(0,r.kt)("inlineCode",{parentName:"p"},"$project")," stage to filter the returned fields."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    title: 1,\n    year: 1,\n    "imdb.rating": 1,\n    fullplot: 1,\n    poster: 1,\n    released: 1,\n    genres: 1\n}\n')),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is not an exact match search but a textual analyzed search. The full text in the ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," field is \u201cHarry Potter and the Half-Blood Prince\u201d. If instead of an aggregation pipeline and ",(0,r.kt)("inlineCode",{parentName:"p"},"$search"),", you use ",(0,r.kt)("inlineCode",{parentName:"p"},'collection.find({ title: "harry potter" })'),", you won't get this document in the results.")))),(0,r.kt)("h2",{id:"document-scores-and-modifying-the-search-results-order"},"Document scores and modifying the search results order"),(0,r.kt)("p",null,"In information retrieval, relevance scoring is a technique used to evaluate how closely a document matches a query. Atlas Search is built on Apache Lucene. Lucene utilizes a combination of the Vector Space Model (VSM) and the Boolean model to determine the relevance score of each search result. The VSM assesses the similarity between the query and the document, while the Boolean model determines if the document contains all the query terms. Based on these factors, Lucene assigns a score to each search result, indicating its relevance to the query."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The aggregation that we used just now returns multiple documents. Among the results are the expected ",(0,r.kt)("inlineCode",{parentName:"p"},"Messi")," but also ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesa"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Meli"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Musi"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Mei"),". All of these are one character away from ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesi"),"! To get the most popular Messi showing up first in the results, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," to alter the relevance score.")),(0,r.kt)("p",null,"You can see what's the score for each returned document by amending the ",(0,r.kt)("inlineCode",{parentName:"p"},"$project")," stage."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll down to ",(0,r.kt)("strong",{parentName:"p"},"Stage 2")," and add the following."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    _id: 0,\n    short_name: 1,\n    long_name: 1,\n    overall: 1,\n    club_name: 1,\n    score: { $meta: "searchScore" }\n}\n')),(0,r.kt)("p",{parentName:"li"},"On the right, you'll see the documents with the highest score first. You can also notice that the documents have the same score or a very close score. That's because all texts are 'one character away' from the query.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll up to ",(0,r.kt)("strong",{parentName:"p"},"Stage 1")," and add a scoring function."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    index: "default",\n    text: {\n      query: "Mesi",\n      path: "short_name",\n      fuzzy: {\n          maxEdits: 1\n      },\n      score: {\n        function: {\n          add: [\n            { path: \'overall\' },\n            { score: \'relevance\' }\n          ]\n        }\n      }\n    }\n}\n')),(0,r.kt)("p",{parentName:"li"},"You're modifying the default relevance score by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," option. The function calculates the score by adding the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"overall")," field and the relevance score. That way, the players with the highest ",(0,r.kt)("inlineCode",{parentName:"p"},"overall")," values will rank first in the search results."))))}m.isMDXComponent=!0}}]);