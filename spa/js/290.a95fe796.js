"use strict";(globalThis["webpackChunkvuejs"]=globalThis["webpackChunkvuejs"]||[]).push([[290],{6075:(e,s,t)=>{t.d(s,{O:()=>n});var a=t(587);const n=(0,a.nY)("home",{state:()=>({form:{name:""},isNameHasValue:!1})})},5290:(e,s,t)=>{t.r(s),t.d(s,{default:()=>y});var a=t(1758),n=t(8790);const l={class:"q-pa-lg i-love-arrays"},r={class:"q-ma-none text-dark"},u={class:"col-4 flex items-center"},o={key:0,style:{color:"red"}},m={key:1,class:"q-mt-md text-dark"},c=(0,a.Lk)("label",null,"Number - Count",-1),i={class:"q-pa-none"};function d(e,s,t,d,p,b){const v=(0,a.g2)("q-btn"),h=(0,a.g2)("q-input"),k=(0,a.g2)("q-form");return(0,a.uX)(),(0,a.CE)("div",l,[(0,a.Lk)("h5",r,"Hello, "+(0,n.v_)(e.home.form.name),1),(0,a.bF)(k,{class:"row q-mt-xl"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",u,[(0,a.bF)(h,{outlined:"",dense:"",class:"full-width main-input",modelValue:e.inputNumbers,"onUpdate:modelValue":[s[1]||(s[1]=s=>e.inputNumbers=s),s[2]||(s[2]=s=>e.handleInput())],placeholder:"Enter comma-delimited numbers"},{append:(0,a.k6)((()=>[(0,a.bF)(v,{onClick:s[0]||(s[0]=s=>e.handleSubmit()),label:"Submit",class:"bg-primary text-dark q-pa-sm button","no-caps":"",dense:"",flat:""})])),_:1},8,["modelValue"])])])),_:1}),e.errorMessage?((0,a.uX)(),(0,a.CE)("div",o,(0,n.v_)(e.errorMessage),1)):(0,a.Q3)("",!0),e.sortedResults.length&&e.inputNumbers?((0,a.uX)(),(0,a.CE)("div",m,[c,(0,a.Lk)("ul",i,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.sortedResults,(e=>((0,a.uX)(),(0,a.CE)("li",{key:e},(0,n.v_)(e.number)+" - "+(0,n.v_)(e.count),1)))),128))])])):(0,a.Q3)("",!0)])}t(239);var p=t(8734),b=t(6075);const v=(0,a.pM)({name:"ILoveArrays",setup(){const e=(0,b.O)();let s=(0,p.KR)(""),t=(0,p.KR)(""),n=(0,p.KR)({});const l=()=>{const e=s.value.split(",").map((e=>parseInt(e.trim())));e.length>50?t.value="Please enter a maximum of 50 elements only":e.some((e=>isNaN(e)||e<0||e>9))?t.value="Please enter valid numbers from 0 to 9.":t.value=""},r=()=>{const e=s.value.split(",").map((e=>parseInt(e.trim()))),t={};e.forEach((e=>{t[e]=(t[e]||0)+1})),n.value=t},u=(0,a.EW)((()=>{const e=Object.entries(n.value);e.sort(((e,s)=>s[1]!==e[1]?s[1]-e[1]:s[0]-e[0]));const s=[];return e.forEach((([e,t])=>{s.push({number:e,count:t})})),s}));return{home:e,inputNumbers:s,errorMessage:t,results:n,handleInput:l,handleSubmit:r,sortedResults:u}}});var h=t(2807),k=t(1565),f=t(109),g=t(8997),q=t(8582),C=t.n(q);const E=(0,h.A)(v,[["render",d]]),y=E;C()(v,"components",{QForm:k.A,QInput:f.A,QBtn:g.A})}}]);