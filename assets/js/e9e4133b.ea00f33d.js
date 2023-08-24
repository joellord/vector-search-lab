"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[52],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),y=r,m=d["".concat(u,".").concat(y)]||d[y]||p[y]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=y;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));n(4996);const a={sidebar_position:1},i="Querying data",l={unversionedId:"query-data/query-find",id:"query-data/query-find",title:"Querying data",description:"The first thing you'll want to do with your data is query it. To do so, you will need to start by connecting to your database.",source:"@site/docs/2-query-data/1-query-find.mdx",sourceDirName:"2-query-data",slug:"/query-data/query-find",permalink:"/vector-search-lab/docs/query-data/query-find",draft:!1,editUrl:"https://github.com/mongodb-developer/vector-search-lab/blob/main/docs/2-query-data/1-query-find.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Query Your Data",permalink:"/vector-search-lab/docs/category/query-your-data"},next:{title:"\ud83e\uddb8 Querying with Regexes",permalink:"/vector-search-lab/docs/query-data/query-regex"}},u={},s=[{value:"Connecting to your database",id:"connecting-to-your-database",level:2},{value:"Querying your data",id:"querying-your-data",level:2},{value:"Test it out -- and see the limitations",id:"test-it-out----and-see-the-limitations",level:2}],c={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"querying-data"},"Querying data"),(0,r.kt)("p",null,"The first thing you'll want to do with your data is query it. To do so, you will need to start by connecting to your database."),(0,r.kt)("h2",{id:"connecting-to-your-database"},"Connecting to your database"),(0,r.kt)("p",null,"Your server is already set up and connected to your database. It used the connection string from your ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file to connect to it."),(0,r.kt)("p",null,"If you want to look at what the server is doing, you can look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"server/db/conn.mjs")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const uri = process.env.ATLAS_URI;\n// Create a MongoClient that will manage the connection to the database.\nconst client = new MongoClient(uri);\nawait client.connect();\n\nawait client.db("admin").command({ ping: 1 });\nconsole.log("Pinged your deployment. You successfully connected to MongoDB!");\nconst collection = client.db("sample_mflix").collection("embedded_movies");\n')),(0,r.kt)("p",null,"This code takes your connection string and creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoClient")," object. This object is used to connect to your database."),(0,r.kt)("p",null,"It also pings the database to make sure you are connected. If you are connected, you will see the message ",(0,r.kt)("inlineCode",{parentName:"p"},"Pinged your deployment. You successfully connected to MongoDB!")," in your console."),(0,r.kt)("p",null,"Finally, it declares a collection called ",(0,r.kt)("inlineCode",{parentName:"p"},"collection")," that you will use to query your data."),(0,r.kt)("h2",{id:"querying-your-data"},"Querying your data"),(0,r.kt)("p",null,"The first thing we'll do is query the data using a ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," method. This method will return all the documents in your collection matching the query."),(0,r.kt)("p",null,"In your CodeSanbox, open the file ",(0,r.kt)("inlineCode",{parentName:"p"},"server/controllers/movies.mjs"),", and look for the method ",(0,r.kt)("inlineCode",{parentName:"p"},"findMovies"),"."),(0,r.kt)("p",null,"This function will return the data from the database. It is currently returning an empty array."),(0,r.kt)("p",null,"The search term is passed as a parameter to the function. You can access it using ",(0,r.kt)("inlineCode",{parentName:"p"},"searchTerm"),"."),(0,r.kt)("p",null,"Now go to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/reference/method/db.collection.find/"},"MongoDB documentation")," and find out how to query your data using the ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," method."),(0,r.kt)("p",null,"You should limit the search results to 20 and only return the required fields."),(0,r.kt)("p",null,"Once you have the code, add it to your CodeSanbox."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Answer"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  async findMovies(searchTerm) {\n    const movies = await collection\n      .find({ title: searchTerm }, {\n        title: 1,\n        year: 1,\n        "imdb.rating": 1,\n        fullplot: 1,\n        poster: 1,\n        released: 1,\n        genres: 1\n      })\n      .limit(20)\n      .toArray();\n\n    return movies;\n  }\n')))),(0,r.kt)("h2",{id:"test-it-out----and-see-the-limitations"},"Test it out -- and see the limitations"),(0,r.kt)("p",null,"You can now enter data in the search box and search for movies. Try searching for ",(0,r.kt)("inlineCode",{parentName:"p"},"The Terminator")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Coraline"),". Those should return a movie."),(0,r.kt)("p",null,"Now try a more broad search like ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminator"),". You should see an empty array."),(0,r.kt)("p",null,"This is because the ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," method is looking for an exact match. If you want to search for a partial match, you will need to use a different method."))}p.isMDXComponent=!0}}]);