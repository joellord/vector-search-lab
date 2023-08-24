"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[76],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,g=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),o=r(4996);const i={sidebar_position:3},s="Construct vector search queries",l={unversionedId:"vector-search/search-queries",id:"vector-search/search-queries",title:"Construct vector search queries",description:"Just as you did in the previous step, you can explore the search results using an aggregation pipeline.",source:"@site/docs/5-vector-search/4-search-queries.mdx",sourceDirName:"5-vector-search",slug:"/vector-search/search-queries",permalink:"/vector-search-lab/docs/vector-search/search-queries",draft:!1,editUrl:"https://github.com/mongodb-developer/vector-search-lab/blob/main/docs/5-vector-search/4-search-queries.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create Vector Search indexes",permalink:"/vector-search-lab/docs/vector-search/create-index"},next:{title:"Add semantic search to your application",permalink:"/vector-search-lab/docs/vector-search/add-to-app"}},c={},p=[{value:"Querying with the aggregation builder",id:"querying-with-the-aggregation-builder",level:2}],u={toc:p},h="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"construct-vector-search-queries"},"Construct vector search queries"),(0,n.kt)("p",null,"Just as you did in the previous step, you can explore the search results using an aggregation pipeline."),(0,n.kt)("h2",{id:"querying-with-the-aggregation-builder"},"Querying with the aggregation builder"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the ",(0,n.kt)("strong",{parentName:"p"},"Collections")," tab of your database deployment."),(0,n.kt)("img",{alt:"Collections tab highlighted on database deployments page",src:(0,o.Z)("/img/chapter-2-search-indexes/collections-tab.png")})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the ",(0,n.kt)("strong",{parentName:"p"},"Aggregation")," tab from the navbar under your collection details."),(0,n.kt)("img",{alt:"Aggregations tab highlighted on the collection details page",src:(0,o.Z)("/img/chapter-2-search-indexes/aggregation-tab.png")})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"Add Stage")," button and type ",(0,n.kt)("strong",{parentName:"p"},"$search")," in the ",(0,n.kt)("strong",{parentName:"p"},"select")," input."),(0,n.kt)("img",{alt:"Stage 1 of the pipeline with the $search stage selected",src:(0,o.Z)("/img/chapter-2-search-indexes/search-stage.png")})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the following code for the ",(0,n.kt)("inlineCode",{parentName:"p"},"$search")," stage."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},'{\n    index: "vectorsearch",\n    knnBeta: {\n        vector: `vector goes here`,\n        path: "plot_embedding",\n        k: 20\n    }\n}\n')),(0,n.kt)("p",{parentName:"li"},"The stage uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"vectorsearch")," index. Rather than using the 'text' operator as we did for full text searches, we are using the ",(0,n.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/atlas/atlas-search/knn-beta/"},"knnBeta")," operator this time."),(0,n.kt)("p",{parentName:"li"},"For now, this stage will break. You will need to pass it a vector in the ",(0,n.kt)("inlineCode",{parentName:"p"},"vector")," property.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Paste the following vector to replace the ",(0,n.kt)("inlineCode",{parentName:"p"},"vector goes here")," text."))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to see the vector for `apprentice sorcerer`"),(0,n.kt)("div",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"[0.00634076,-0.021145178,-0.0055621313,-0.028826715,-0.009196895,0.027723366,-0.011068397,-0.028128393,-0.01307258,-0.016564189,0.030111626,-0.0042946776,0.0030865814,-0.0018540438,-0.0059950906,-0.011187112,0.027206609,-0.0035038285,0.010823985,-0.014804417,-0.013079563,0.0008327485,0.0019518088,-0.023170311,-0.00753489,-0.026019461,0.009106114,-0.01863122,-0.003107531,-0.0032629075,0.03754177,-0.0029992913,-0.002948663,-0.039804332,-0.031201009,-0.03192726,0.0025610945,0.0019832333,0.010663371,0.0011269165,0.03337977,-0.009483207,-0.023198243,0.012311409,-0.015125645,-0.0034776414,-0.033966362,-0.012835151,-0.017053014,0.032150727,0.028603252,-0.009287677,-0.011592139,0.0037499869,0.016368657,0.0131284455,-0.0037639532,0.012911966,0.017513905,-0.012437107,0.0003476332,-0.0044622747,-0.01324716,-0.0062220455,-0.012939899,-0.0010920004,-0.014930115,0.002688538,-0.0053002606,-0.0048568267,0.017541839,-0.0033275024,0.004179455,-0.024944047,0.026466388,-0.009958066,-0.017374242,0.0049406253,-0.012185711,-0.014168945,0.0043854597,-0.028170293,-0.015572571,0.018575354,0.01428766,0.012171745,0.0055272155,-0.0044762413,-0.043631133,-0.008219245,0.005094256,0.02215076,0.023631202,0.019692669,-0.00090956385,-0.0065153404,-0.02262562,0.0476814,-0.007604722,-0.025139578,0.0035212866,0.0014123555,-0.027890963,-0.018798817,-0.022220593,-0.023617236,0.008526507,0.0101815285,0.032849047,-0.008177346,-0.01745804,0.018910548,0.009594939,-0.023533437,-0.02034909,-0.02505578,0.0009977269,-0.018505521,-0.0037011043,-0.03441329,0.030893747,0.007133355,0.019245744,-0.014099113,0.03734624,0.030307157,-0.028994313,-0.003472404,-0.004601939,-0.009238794,0.021703836,-0.0026466388,0.016340725,0.021117244,-0.016466424,0.014231794,-0.004944117,0.002101948,-0.028714983,-0.004032807,-0.005698304,0.01483235,-0.009762536,0.002796778,-0.0075628227,0.010216445,0.016522288,-0.0043400684,-0.006071906,-0.027541803,0.007133355,-0.023687068,0.0047660447,-0.0100348815,0.014776485,-0.004322611,0.016634021,0.0012080964,-0.0317876,-0.013980398,-0.017513905,-0.0078491345,0.002555857,-0.029217776,-0.00051588507,0.032318324,0.014846317,0.010502757,-0.009525106,0.020377023,-0.010635437,0.0043680016,-0.027178677,0.029357439,0.0056354553,0.012171745,-0.0029189843,-0.00933656,-0.014357491,0.0057925778,0.00453909,-0.001318082,0.008959466,0.023533437,0.0058728843,0.0018121445,-0.01682955,0.0416479,-0.026061362,-0.012402192,-0.0020251325,0.027779233,-0.01804463,-0.0067876857,-0.6761988,-0.02458092,-0.009573989,-0.03363117,-0.00829606,0.011152196,0.004916184,-0.030502686,-0.0060614315,-0.011319793,0.0037430036,0.008177346,-0.009573989,-0.001789449,-0.00080918014,-0.013212244,0.015321176,-0.020865848,0.013149396,0.0026134686,-0.009161979,0.015921732,-0.009273711,-0.011529289,0.0037988694,-0.018421723,0.0054434165,0.012101913,-0.00016977944,0.003624289,-0.009189912,0.026633985,-0.01107538,0.010872867,0.05444115,0.010768119,-0.03337977,0.020628419,-0.0014097367,0.031145142,-0.033966362,-0.018561387,0.008051648,0.009839351,0.008198296,-0.014371458,0.012946882,-0.0044203755,-0.006742295,0.004490208,0.024008296,-0.0077164536,0.0089455,0.009134047,0.009951083,0.00034981547,0.005387551,-0.017150778,0.027136777,0.0076745544,-0.0137569355,0.030083694,-0.014860284,0.002154322,0.0012133338,-0.017918931,-0.014168945,0.00605794,0.003055157,-0.010823985,0.02145244,0.0014376695,0.0079469,0.020628419,-0.009888234,0.0115851555,0.015251343,-0.016340725,0.0041375556,-0.0047520786,0.010391025,0.0037883946,-0.029022245,-0.014776485,0.021424506,-0.009601922,-0.020363057,-0.010474823,-0.016522288,0.007213662,0.004762553,-0.00281249,0.00018647368,-0.0077374033,0.020796016,0.019832334,-0.016075363,0.001442907,0.012416158,-0.030167492,0.01667592,0.012178728,0.0018016697,-0.020600487,0.018728985,0.021536238,-0.01307258,0.006249978,0.04994396,-0.026815549,0.0046159057,-0.0060788896,-0.017918931,-0.014120063,-0.0018941973,-0.028659118,0.008344943,-0.007276511,0.0043156273,-0.046564084,0.024357457,-0.0071927123,0.017793234,-0.026368624,-0.008282094,0.004594956,-0.0042353203,0.004996491,-0.006847043,0.00038538623,0.021438472,-0.008659188,-0.005848443,-0.012562805,0.008973433,-0.010907783,0.027052978,0.010991582,0.0218016,0.00907818,0.004587973,0.008184329,-0.026717784,0.006735312,-0.006190621,-0.0056424383,0.015083746,0.005216462,-0.010844934,-0.009476224,-0.0026955213,-0.01426671,-0.020307193,0.0077374033,-0.012276493,-0.028365823,-0.0076536047,-0.0055341986,-0.020055795,-0.013742968,0.012060014,0.019301608,-0.03240212,-0.0040467735,-0.009161979,-0.015782068,-0.013526489,0.015293242,-0.009755553,-0.028910514,0.009092147,-0.0053980257,0.017751334,0.021745734,0.003259416,0.014776485,-0.0146926865,0.015279276,-0.0093994085,0.0011295351,-0.008449691,0.01048879,-0.024469187,0.0073882425,0.029189842,-0.0056040306,-0.00028369314,-0.0025157034,0.0028805765,0.016508322,-0.020837916,0.037932828,0.023044612,0.004657805,-0.0012779285,0.018142395,-0.011536272,0.0010736694,-0.00025837898,0.03539094,0.0046717715,-0.014818384,0.05592159,-0.012381242,0.012856101,-0.05256965,0.009350526,-0.012339342,0.020460822,0.030111626,-0.0018383316,-0.030949613,-0.007133355,-0.0003585445,0.025851864,0.023728967,0.01266057,0.018407756,0.007276511,-0.007437125,0.013882633,-0.030809948,0.019469205,0.0027863032,0.014944082,0.0023044613,-0.005219954,0.019748535,0.0030481736,-0.01166197,-0.0036766632,-0.016536254,0.0026780632,-0.012555822,0.024608852,0.0042772195,-0.004881268,-0.027192643,0.03307251,0.012751352,-0.009664771,0.021871433,0.018603288,-0.0064839157,0.021494338,-0.00082489237,0.0131284455,0.006990199,-0.00073149183,0.019301608,-0.012416158,0.011298844,-0.009224828,0.011990181,0.010949682,-0.013296043,0.008365893,0.0016620053,0.013149396,0.03608926,0.003830294,0.020516688,-0.0006786813,-0.007381259,0.02712281,0.013959449,0.012814201,0.007374276,-0.005495791,-0.02215076,0.00042684906,-0.0041270806,0.020363057,0.00675277,0.028966378,-0.015474807,-0.016424524,-0.0018941973,0.009888234,0.0051815463,-0.01428766,-0.04812832,0.025977563,-0.0014769501,0.012765318,-0.014196877,-0.0071996953,0.014511122,-0.008756952,0.0035596942,0.011592139,0.007960866,0.025153544,0.00605794,-0.0069168755,-0.00040459007,0.01124996,-0.047094807,0.0073952256,-0.0008187821,-0.0053212103,0.0014097367,-0.028365823,-0.018966414,0.040251255,0.0048673013,-0.029804366,-0.011613088,-0.010698287,-0.0064908992,-0.007220645,-0.001763262,-0.014566989,0.012060014,0.0050523565,0.014015314,-0.02152227,-0.0032227542,0.025837898,0.03337977,0.001229046,-0.01804463,-0.019776467,-0.0050453735,0.091117,0.024552986,-0.011256944,0.0018296025,-0.009664771,-0.016298825,-0.01648039,-0.009343543,0.00684006,-0.01166197,0.023980362,-0.0028439146,0.005013949,0.0034758956,0.0029678668,-0.0036138142,0.011180129,0.0027775741,0.0012264273,-0.022639586,0.0020757609,-0.017444072,-0.010411975,0.0011242977,-0.009650804,-0.0029172385,0.0055586398,0.0050872727,-0.013086546,-0.017248543,-0.004308644,0.010111696,0.003072615,0.004361018,0.010391025,-0.0018051612,0.014413358,0.008477624,-0.0027705908,-0.020125628,0.028854648,0.013100513,0.023282042,-0.031284805,0.015530672,0.0011723074,0.0035247782,0.024999913,0.0039525,-0.017737368,0.028016662,0.018603288,-0.011801635,0.00063023524,0.004933642,0.018812783,0.007835168,0.009050248,0.0092457775,0.009043264,-0.024120027,-0.010146612,0.01815636,0.00770947,-0.038547352,-0.008680137,-0.0063721845,0.0013285568,-0.010027898,0.036955178,-0.013652187,-0.0035562026,-0.012234594,0.005111714,0.0024353964,0.0020006914,0.018547421,-0.013708053,0.0076256716,0.011061414,0.010712253,-0.028603252,-0.009797452,-0.018505521,-0.022290425,0.0019553003,0.00342003,0.009022315,-0.029050179,-0.015949665,-0.0005673863,0.026019461,-0.002849152,-0.0355306,0.0076745544,0.00019553004,0.016508322,0.010719236,0.02106138,-0.012241578,-0.0297485,-0.033323906,0.0056214887,-0.004409901,0.025293209,-0.005296769,0.012458057,0.04215069,-0.010579572,-0.025768066,0.025530636,-0.0020722693,0.018966414,-0.011180129,0.023463605,0.017374242,0.003144193,0.030809948,-0.007367293,-0.015181512,-0.011103313,-0.029497104,0.03240212,0.027164709,-0.010537673,0.0006306717,0.0043749847,-0.019692669,0.0068505346,-0.013240177,-0.013687103,0.018645186,0.0068819593,-0.007932933,-0.020628419,-0.032122795,-0.013973415,-0.007304444,0.0044867164,0.0017615162,-0.019287642,-0.009134047,-0.0023568354,-0.005488808,0.010593538,-0.022821149,0.0007144703,-0.015642403,0.00058789947,0.016871449,-0.000016898837,0.0005726237,-0.0036906295,0.010558622,0.007842151,-0.02516751,-0.020530654,-0.013282076,0.007953883,0.034217756,0.041536167,-0.0073603094,-0.0011112043,0.0031459387,-0.004497191,0.007800252,-0.0018383316,-0.012332359,-0.03650825,0.032318324,0.0093994085,0.024944047,0.021382608,-0.007660588,0.011808618,0.027890963,-0.008079581,-0.0020356074,-0.0024179386,-0.03648032,-0.018966414,0.0061941124,-0.002074015,0.0055237236,0.006127772,-0.013114479,0.032737315,0.013938499,0.0077513694,-0.010537673,0.022374224,-0.0013495064,0.026270857,-0.005474841,0.036647916,-0.005387551,-0.00022280823,-0.0039943997,-0.009790469,0.0018837225,0.033994295,0.001263962,-0.008854718,0.008198296,0.010307226,0.0064036087,0.021089312,-0.030586485,0.020642387,-0.021396574,-0.005817019,-0.0217597,-0.0057297284,-0.018561387,0.009573989,-0.013107496,-0.015139612,0.012758335,-0.020363057,0.0015895545,0.0050209323,-0.008596338,0.039636735,0.046675816,0.025139578,0.015712235,-0.004067723,-0.001256106,0.017164744,0.03033509,-0.02481835,0.0066899206,-0.0049196756,-0.0012351563,-0.00436451,0.0048568267,-0.006330285,-0.014776485,-0.03539094,0.022066962,0.006009057,-0.004444817,-0.018659152,-0.0033449603,-0.025139578,0.017849099,-0.028603252,-0.018952448,-0.013526489,-0.017667536,-0.017164744,-0.0045495653,0.0028089986,0.008184329,0.019134011,-0.021787634,0.016508322,-0.025488738,-0.012171745,0.02321221,-0.014385425,0.024175894,0.0016139958,0.0062848944,0.00406074,0.00692735,-0.021494338,0.00025445092,-0.009427342,0.027527837,0.009287677,0.006791177,-0.003063886,0.0018383316,0.00013639094,0.011836551,-0.004577498,-0.011822584,-0.002520941,0.0029504087,0.015712235,-0.012444091,-0.023268076,0.0025715693,-0.009811418,-0.021312775,0.016955247,0.001897689,-0.008673154,-0.036228925,-0.018910548,-0.010125663,-0.005607522,0.0117318025,-0.008421758,-0.0036976128,0.009895217,0.013526489,-0.017611671,-0.010027898,-0.0063163186,0.008135446,-0.009797452,0.039106008,0.008386842,-0.016396591,0.023673102,-0.0146926865,-0.007877068,-0.007206679,0.014036264,-0.011976215,0.011208061,-0.016187094,-0.010865884,0.0025174492,0.022653552,0.0021473388,0.006501374,0.009790469,0.0014935352,-0.008400809,0.014678719,-0.0123602925,0.01109633,0.027304374,0.018072562,0.0049999827,-0.048798714,-0.00853349,-0.018323958,-0.0013110988,0.002049574,-0.03335184,-0.021606069,0.0075279064,-0.0014987726,0.016452456,-0.0015127391,-0.004203896,-0.0032838571,0.00009149104,-0.009699686,0.008386842,-0.0068889423,0.023617236,-0.042876944,-0.005199004,-0.017849099,0.0029067637,-0.026005495,0.025460806,0.012367276,-0.031536203,-0.014566989,-0.002520941,-0.03013956,-0.0060614315,-0.012388225,0.038184226,0.035670266,-0.008770919,0.0056214887,0.01268152,0.00523392,-0.011522306,-0.026857449,-0.017988764,0.01483235,0.0089385165,0.016941281,0.006099839,-0.018016696,-0.0006119043,0.026871415,0.016298825,0.0046543134,-0.0070425733,-0.012604705,-0.017639603,0.0023306482,0.019134011,0.01365917,-0.0014900437,0.010754152,-0.042513818,0.0002852207,-0.014252744,-0.026675884,-0.024483155,-0.018547421,0.02058652,-0.02736024,0.029301574,-0.0036347639,0.0025768066,-0.0034741499,-0.005967158,0.028966378,-0.028393755,-0.0010858901,0.021298809,-0.0049650664,-0.034748483,-0.021885399,0.0149999475,-0.025977563,-0.0018330942,0.0036696799,-0.028212192,0.01246504,-0.028407723,-0.0083100265,0.004099148,0.010391025,-0.009741586,0.013407774,-0.008687121,0.0197206,0.011187112,0.026899347,-0.015768101,-0.004731129,-0.022248525,-0.0023917514,-0.0055341986,-0.015195478,0.0030254782,-0.011634038,-0.0018854683,-0.020041829,-0.028086495,-0.02273735,-0.0008484607,0.01702508,-0.0018715018,0.213854,0.0018016697,-0.010146612,0.015907766,0.0021176601,0.027499905,0.011040464,0.015223411,-0.009280694,-0.01027231,0.0072834943,0.0037604617,-0.028421689,-0.0012456311,-0.009029298,-0.0074929907,-0.031731732,-0.008924549,-0.012283477,-0.016620053,0.021159144,-0.022332324,-0.02512561,-0.026173092,0.0069064004,0.014678719,-0.018407756,0.009231811,0.01960887,0.007126372,-0.009839351,0.0024144468,-0.00004754588,0.0019029264,-0.0075209234,-0.008917566,0.03013956,-0.027932864,0.0025244325,0.03287698,0.0010693049,-0.007437125,-0.017248543,0.0034811331,-0.000061103136,0.013519506,0.00005897544,-0.0009278948,0.007206679,-0.0034985912,-0.010984599,-0.021661935,0.06312827,0.035921663,0.00949019,0.011494373,0.015027881,0.028994313,-0.0037360205,0.00425627,-0.014497156,0.018952448,-0.02653622,0.013819784,0.015600504,0.017290443,-0.0058135274,0.0097136535,-0.010851918,-0.008449691,-0.009469241,-0.027136777,-0.016312793,0.002939934,-0.04357527,-0.031396538,0.018226193,0.003624289,0.008386842,0.02093568,0.016382623,0.0092457775,0.013065597,0.00281249,-0.010244378,-0.04575403,0.0004050265,-0.009532089,-0.0026483845,0.011815601,-0.0055900645,-0.026675884,-0.0072276285,-0.011641021,0.013770902,0.0051082224,0.00069875806,0.04332387,0.00048140544,0.0062988605,-0.021270875,-0.0073253936,0.016606087,0.002753133,-0.027150743,0.0064769327,0.0073463432,0.0009287677,0.029217776,0.0016908111,0.0006490026,-0.022108862,0.0075837723,0.0058659012,-0.0057646446,0.023114445,-0.028659118,-0.0021141686,-0.008973433,-0.015628437,0.006553748,-0.012444091,0.0052688364,-0.010111696,-0.009811418,-0.016284859,-0.011522306,-0.0025698235,-0.024175894,-0.027150743,0.013777885,-0.016927315,0.013435707,-0.0029312049,0.0056773545,0.0044308505,0.0014271947,-0.009252761,-0.010991582,-0.0005752424,-0.0014560005,-0.019231776,0.00047878674,0.023728967,-0.00018538255,-0.009930133,0.0084706405,0.0101815285,0.0047520786,-0.0081633795,-0.019971997,-0.008275111,-0.02199713,-0.008826785,0.029078111,-0.005548165,-0.0555026,-0.02054462,-0.007437125,0.0026745717,-0.04282108,0.025097677,0.018659152,-0.0052478868,-0.016550222,-0.00095844636,-0.18301612,0.009182929,0.022653552,-0.044748448,0.02986023,-0.0074580745,0.014650787,0.00090345356,-0.013973415,-0.0013241923,-0.008770919,-0.009287677,-0.03745797,-0.025628403,0.019888198,0.015516706,-0.010425941,0.005370093,0.037318304,0.012430124,0.005768136,0.0027845574,-0.0061242804,0.014511122,0.014001348,0.008910583,0.004078198,-0.0069413166,-0.006082381,-0.010460857,-0.012974815,-0.0095600225,-0.007437125,-0.0020757609,0.031256873,-0.009587956,-0.003402572,0.0049755415,0.006089364,0.025782034,0.014944082,0.01702508,0.014497156,-0.0059252586,-0.013547439,0.016410558,0.028798781,0.0009051993,-0.014455257,0.0062360116,0.012751352,-0.020307193,0.017136812,-0.015572571,0.03072615,0.007569806,0.008596338,0.009972032,0.002405718,0.007953883,-0.0025628402,-0.011780685,0.028966378,0.007025115,-0.018645186,0.0030830898,0.0066200886,0.026312757,-0.0070600314,0.018603288,-0.0053491434,0.018296026,-0.0042143706,-0.023114445,0.0071647796,-0.0051571047,-0.024916114,0.028966378,-0.006815619,-0.012325376,-0.00072974607,0.026759682,0.013114479,-0.01050974,0.012053031,0.012520906,0.0014708398,-0.028742917,-0.011319793,-0.0034706583,0.017444072,-0.013952465,-0.023687068,-0.013044647,0.014455257,0.014622854,0.00631981,0.0012307918,0.020279258,-0.020726185,0.017625637,0.00021353364,-0.008484608,0.017751334,0.042262424,0.00060841267,0.0024738042,-0.0062674363,0.02273735,0.0019029264,-0.011354709,0.002384768,0.013701069,0.010160579,-0.005307244,0.023575338,-0.0037814113,-0.009448291,0.014944082,-0.004347052,0.04536297,0.008491591,-0.0041619968,0.009420359,-0.01824016,-0.0048777764,-0.09385442,-0.021466406,0.010153596,0.02512561,-0.00475557,0.020530654,0.0055795894,0.011794652,-0.029832298,0.0014385425,0.00007332377,-0.025181476,0.0064594746,-0.0011260435,-0.00013660916,-0.00016988855,-0.009022315,-0.015684303,-0.019790433,0.018798817,-0.009958066,0.016955247,0.00055822084,0.013163362,-0.005806544,0.0010911275,-0.00601604,0.01898038,0.003009766,0.012555822,-0.0023673102,0.0044692582,0.0041026394,-0.003854735,-0.015027881,0.01945524,-0.0027269458,-0.005904309,0.041312706,-0.04399426,0.028463587,-0.017835133,0.01402928,-0.0071368464,-0.026871415,0.025041811,-0.033268042,0.01960887,0.024916114,-0.01726251,-0.025041811,0.0017030317,-0.012974815,0.010663371,0.03162,-0.0158938,0.010370076,0.0057471865,0.0018103987,0.00023437418,0.021396574,-0.020153562,-0.0032995695,-0.0020146577,-0.0011627055,-0.00044736225,-0.018701052,-0.018603288,0.001068432,-0.025600469,0.006766736,0.026983146,-0.018547421,0.02453902,-0.024036229,-0.0029102552,0.0026588594,-0.0023044613,0.01643849,-0.024874214,-0.013868666,-0.025879798,0.02395243,-0.024497122,0.03754177,-0.0027409121,0.019650768,0.00008150722,0.027653534,-0.040139526,0.0017248543,0.0023114444,0.0010274056,-0.021242943,-0.011263927,0.02360327,0.005244395,0.0021613054,0.026452422,0.022234559,-0.0062848944,0.0009855063,-0.07357516,0.024832316,-0.002912001,-0.0066759544,0.0056145056,-0.01945524,0.026550187,-0.008170363,-0.014043247,-0.0038896513,-0.023337908,0.0022485955,-0.014594921,-0.02234629,-0.012534873,-0.005939225,0.026256891,-0.013512523,0.0057960693,-0.00013911875,-0.014134029,0.0108100185,-0.011934316,-0.010111696,-0.017709436,0.00036225433,-0.002288749,-0.009308627,-0.010328176,-0.010914766,-0.0026606051,-0.016689885,0.012472023,0.019175911,-0.004762553,-0.0074999738,0.02677365,0.0011531035,-0.010404992,0.03600546,-0.012018114,-0.010670354,0.027136777,0.0077164536,-0.0046054306,-0.006466458,-0.010572589,0.025181476,0.018603288,-0.0138547,0.020390991,0.027374206,-0.0048219105,-0.001993708,-0.028631184,-0.039273605,0.014413358,-0.005209479,-0.0044692582,-0.042234488,0.017122846,-0.013833751,0.0026431473,-0.008379859,0.009804435,0.007126372,0.02516751,0.0047485866,0.0022066962,0.0012971323,-0.024315558,-0.0030621402,-0.004479733,0.026899347,-0.008638238,0.012339342,-0.0030900731,0.0017414395,-0.026661918,0.035977527,-0.014196877,-0.017932897,-0.011745769,0.0074510914,0.024385389,0.008177346,-0.009043264,-0.00034414162,0.006040482,-0.0070495564,0.015502739,0.01350554,0.007597739,-0.02101948,0.012472023,0.00968572,0.002824711,0.0014184657,0.012332359,0.008547456,-0.012863084,0.0019186386,0.009601922,-0.010921749,-0.0126675535,0.0026920298,-0.021661935,-0.0014010076,-0.009106114,-0.00006617688,0.03851942,0.014483189,0.0061801462,0.01107538,-0.017932897,0.008652205,-0.016899383,-0.043631133,-0.017080946,0.002164797,-0.002672826,0.0016262163,0.0012316647,-0.014678719,0.019273676,0.018798817,0.0014935352,-0.0103351595,0.0077513694,-0.0066654794,-0.007206679,-0.019050213,-0.011871467,-0.019985965,-0.009818401,-0.011445491,-0.009692703,0.0073882425,0.003987416,0.050279155,-0.0071368464,-0.027863031,0.02152227,-0.0114245415,0.028463587,-0.008959466,0.0045984476,0.003907109,-0.032346256,0.025097677,-0.007374276,0.029441237,0.01717871,-0.017723402,-0.0198463,0.006449,0.036033392,-0.016508322,-0.013547439,0.017863067,0.026005495,0.018505521,-0.00078735757,-0.014748552,-0.02877085,0.023715,0.0047520786,-0.010195496,-0.018491555,-0.020390991,0.0029329506,-0.026326723,-0.015111679,0.006511849,-0.0044064093,-0.007918967,-0.008484608,0.010258344,0.022932881,-0.017332342,0.034245692,-0.014930115,-0.015125645,0.012653587,0.009476224,-0.016564189,0.005129172,-0.007953883]\n")))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the following implementation for the ",(0,n.kt)("inlineCode",{parentName:"p"},"$project")," stage to filter the returned fields."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},'{\n    title: 1,\n    year: 1,\n    "imdb.rating": 1,\n    fullplot: 1,\n    poster: 1,\n    released: 1,\n    genres: 1\n}\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You should now see a list of related movies. Those movies may, or may not, contain the words ",(0,n.kt)("inlineCode",{parentName:"p"},"apprentice")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"sorcerer"),". Our search returns results that are similar in context, but not in content."))))}d.isMDXComponent=!0}}]);