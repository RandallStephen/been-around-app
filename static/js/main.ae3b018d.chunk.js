(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,a,t){e.exports=t(71)},71:function(e,a,t){"use strict";t.r(a);for(var n=t(0),i=t.n(n),l=t(21),r=t.n(l),o=t(5),s=t(6),c=t(8),d=t(7),u=t(9),h=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},i.a.createElement("h1",null,"Been Around Header"))}}]),a}(n.Component),m=t(10),b=t(29),C=t(30),S=t.n(C),g={BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BA:"Bosnia and Herzegovina",BN:"Brunei",BO:"Bolivia",JP:"Japan",BI:"Burundi",BJ:"Benin",BT:"Bhutan",JM:"Jamaica",BW:"Botswana",BR:"Brazil",BS:"Bahamas",BY:"Belarus",BZ:"Belize",RU:"Russia",RW:"Rwanda",RS:"Serbia",TL:"Timor-Leste",TM:"Turkmenistan",TJ:"Tajikistan",RO:"Romania",GW:"Guinea-Bissau",GT:"Guatemala",GR:"Greece",GQ:"Equatorial Guinea",GY:"Guyana",GE:"Georgia",GB:"United Kingdom",GA:"Gabon",GN:"Guinea",GM:"Gambia",GL:"Greenland",GH:"Ghana",OM:"Oman",TN:"Tunisia",JO:"Jordan",HR:"Croatia",HT:"Haiti",HU:"Hungary",HN:"Honduras",PR:"Puerto Rico",PS:"Palestine",PT:"Portugal",PY:"Paraguay",PA:"Panama",PG:"Papua New Guinea",PE:"Peru",PK:"Pakistan",PH:"Philippines",PL:"Poland",ZM:"Zambia",EH:"Western Sahara",EE:"Estonia",EG:"Egypt",ZA:"South Africa",EC:"Ecuador",IT:"Italy",VN:"Vietnam",SB:"Solomon Island",ET:"Ethiopia",SO:"Somalia",ZW:"Zimbabwe",ES:"Spain",ER:"Eritrea",ME:"Montenegro",MD:"Moldova",MG:"Madagascar",MA:"Morocco",UZ:"Uzbekistan",MM:"Myanmar",ML:"Mali",MN:"Mongolia",MK:"Macedonia",MW:"Malawi",MR:"Mauritania",UG:"Uganda",MY:"Malaysia",MX:"Mexico",IL:"Israel",FR:"France",XS:"Somaliland",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NA:"Namibia",VU:"Vanuatu",NC:"New Caledonia",NE:"Niger",NG:"Nigeria",NZ:"New Zealand",NP:"Nepal",XK:"Kosovo",CI:"C\xf4te d'Ivoire",CH:"Switzerland",CO:"Colombia",CN:"China",CM:"Cameroon",CL:"Chile",XC:"Northern Cyprus",CA:"Canada",CG:"Congo",CF:"Central African Republic",CD:"Democratic Republic Congo",CZ:"Czech Republic",CY:"Cyprus",CR:"Costa Rica",CU:"Cuba",SZ:"Swaziland",SY:"Syria",KG:"Kyrgyzstan",KE:"Kenya",SS:"South Sudan",SR:"Suriname",KH:"Cambodia",SV:"El Salvador",SK:"Slovakia",KR:"Korea",SI:"Slovenia",KP:"Democratic Republic Korea",KW:"Kuwait",SN:"Senegal",SL:"Sierra Leone",KZ:"Kazakhstan",SA:"Saudi Arabia",SE:"Sweden",SD:"Sudan",DO:"Dominican Republic",DJ:"Djibouti",DK:"Denmark",DE:"Germany",YE:"Yemen",DZ:"Algeria",US:"United States",UY:"Uruguay",LB:"Lebanon",LA:"Lao PDR",TW:"Taiwan",TT:"Trinidad and Tobago",TR:"Turkey",LK:"Sri Lanka",LV:"Latvia",LT:"Lithuania",LU:"Luxembourg",LR:"Liberia",LS:"Lesotho",TH:"Thailand",TF:"French Southern Antarctic Lands",TG:"Togo",TD:"Chad",LY:"Libya",AE:"United Arab Emirates",VE:"Venezuela",AF:"Afghanistan",IQ:"Iraq",IS:"Iceland",IR:"Iran",AM:"Armenia",AL:"Albania",AO:"Angola",AR:"Argentina",AU:"Australia",AT:"Austria",IN:"India",TZ:"Tanzania",AZ:"Azerbaijan",IE:"Ireland",ID:"Indonesia",UA:"Ukraine",QA:"Qatar",MZ:"Mozambique"},N=t(31),E=t.n(N),p=g,v=Object.keys(p),B={},y=0,A=v;y<A.length;y++){var w=A[y];B[w]={name:p[w],been:!1,color:0,dates:[null,null]}}console.log("countriesDataObject: ",B);var M=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={allData:B,selectedName:"",selectedCode:"",totalVisited:0,focus:null},t.handleClick=function(e,a){var n=p[a],i=a;t.setState(function(e){return Object(m.a)({},e,{selectedName:n,selectedCode:i})})},t.handleCheckbox=function(e){var a=e.target,n=a.name,i=a.checked;t.setState(function(e){var a=Object(m.a)({},e,{allData:Object(m.a)({},e.allData)});return a.allData[n].been=i,console.log(a),a})},t.handleChangeDate=function(e){var a=t.state.selectedCode;t.setState(function(t){var n=Object(m.a)({},t,{allData:Object(m.a)({},t.allData)});return n.allData[a].dates=e,n})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;console.log("Inside the Render function",this.state);var a=S.a.mapObject(this.state.allData,function(a,t){return e.state.selectedCode===t?a.been?"SelectedHasBeen":"SelectedHasNotBeen":a.been?"NotSelectedHasBeen":"NotSelectedHasNotBeen"});return this.refs.map&&this.refs.map.$mapObject.tip.remove(),i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{style:{width:"100%",height:450}},i.a.createElement(b.VectorMap,{map:"world_mill",backgroundColor:"#3b96ce",regionsSelectable:!0,regionsSelectableOne:!0,ref:"map",containerStyle:{width:"100%",height:"100%"},containerClassName:"map",onRegionClick:this.handleClick,series:{regions:[{values:a,attribute:"fill",scale:{NotSelectedHasBeen:"green",NotSelectedHasNotBeen:"white",SelectedHasBeen:"lightgreen",SelectedHasNotBeen:"yellow"}}]}})),i.a.createElement("div",{style:{display:this.state.selectedName?"block":"none"}},i.a.createElement("div",{className:"card border-secondary m-1 pl-0"},i.a.createElement("div",{className:"card-header"},i.a.createElement("h3",null,this.state.selectedName,", ",this.state.selectedCode)),i.a.createElement("div",{className:"card-body text-primary"},i.a.createElement("form",null,i.a.createElement("div",{className:"custom-control custom-switch"},i.a.createElement("input",{type:"checkbox",id:"customSwitch1",className:"custom-control-input",key:this.state.selectedCode,name:this.state.selectedCode,checked:!!this.state.allData[this.state.selectedCode]&&this.state.allData[this.state.selectedCode].been,onChange:this.handleCheckbox}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch1"},"I have been here")),this.state.selectedCode&&this.state.allData[this.state.selectedCode].been?i.a.createElement("div",{className:"my-1"},i.a.createElement(E.a,{key:this.state.selectedCode,value:this.state.selectedCode?this.state.allData[this.state.selectedCode].dates:null,onChange:this.handleChangeDate})):null)))))}}]),a}(n.Component),O=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,null),i.a.createElement(M,null))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(70);r.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.ae3b018d.chunk.js.map