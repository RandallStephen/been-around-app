(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(a,e,n){a.exports=n(19)},19:function(a,e,n){"use strict";n.r(e);for(var t=n(0),i=n.n(t),o=n(9),r=n.n(o),l=n(1),c=n(2),s=n(4),u=n(3),d=n(5),m=function(a){function e(){var a,n;Object(l.a)(this,e);for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(a=Object(u.a)(e)).call.apply(a,[this].concat(i)))).state={},n}return Object(d.a)(e,a),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},i.a.createElement("h1",null,"Been Around Header"))}}]),e}(t.Component),h=n(6),b=n(10),g=n(11),S=n.n(g),C={BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BA:"Bosnia and Herzegovina",BN:"Brunei",BO:"Bolivia",JP:"Japan",BI:"Burundi",BJ:"Benin",BT:"Bhutan",JM:"Jamaica",BW:"Botswana",BR:"Brazil",BS:"Bahamas",BY:"Belarus",BZ:"Belize",RU:"Russia",RW:"Rwanda",RS:"Serbia",TL:"Timor-Leste",TM:"Turkmenistan",TJ:"Tajikistan",RO:"Romania",GW:"Guinea-Bissau",GT:"Guatemala",GR:"Greece",GQ:"Equatorial Guinea",GY:"Guyana",GE:"Georgia",GB:"United Kingdom",GA:"Gabon",GN:"Guinea",GM:"Gambia",GL:"Greenland",GH:"Ghana",OM:"Oman",TN:"Tunisia",JO:"Jordan",HR:"Croatia",HT:"Haiti",HU:"Hungary",HN:"Honduras",PR:"Puerto Rico",PS:"Palestine",PT:"Portugal",PY:"Paraguay",PA:"Panama",PG:"Papua New Guinea",PE:"Peru",PK:"Pakistan",PH:"Philippines",PL:"Poland",ZM:"Zambia",EH:"Western Sahara",EE:"Estonia",EG:"Egypt",ZA:"South Africa",EC:"Ecuador",IT:"Italy",VN:"Vietnam",SB:"Solomon Island",ET:"Ethiopia",SO:"Somalia",ZW:"Zimbabwe",ES:"Spain",ER:"Eritrea",ME:"Montenegro",MD:"Moldova",MG:"Madagascar",MA:"Morocco",UZ:"Uzbekistan",MM:"Myanmar",ML:"Mali",MN:"Mongolia",MK:"Macedonia",MW:"Malawi",MR:"Mauritania",UG:"Uganda",MY:"Malaysia",MX:"Mexico",IL:"Israel",FR:"France",XS:"Somaliland",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NA:"Namibia",VU:"Vanuatu",NC:"New Caledonia",NE:"Niger",NG:"Nigeria",NZ:"New Zealand",NP:"Nepal",XK:"Kosovo",CI:"C\xf4te d'Ivoire",CH:"Switzerland",CO:"Colombia",CN:"China",CM:"Cameroon",CL:"Chile",XC:"Northern Cyprus",CA:"Canada",CG:"Congo",CF:"Central African Republic",CD:"Democratic Republic Congo",CZ:"Czech Republic",CY:"Cyprus",CR:"Costa Rica",CU:"Cuba",SZ:"Swaziland",SY:"Syria",KG:"Kyrgyzstan",KE:"Kenya",SS:"South Sudan",SR:"Suriname",KH:"Cambodia",SV:"El Salvador",SK:"Slovakia",KR:"Korea",SI:"Slovenia",KP:"Democratic Republic Korea",KW:"Kuwait",SN:"Senegal",SL:"Sierra Leone",KZ:"Kazakhstan",SA:"Saudi Arabia",SE:"Sweden",SD:"Sudan",DO:"Dominican Republic",DJ:"Djibouti",DK:"Denmark",DE:"Germany",YE:"Yemen",DZ:"Algeria",US:"United States",UY:"Uruguay",LB:"Lebanon",LA:"Lao PDR",TW:"Taiwan",TT:"Trinidad and Tobago",TR:"Turkey",LK:"Sri Lanka",LV:"Latvia",LT:"Lithuania",LU:"Luxembourg",LR:"Liberia",LS:"Lesotho",TH:"Thailand",TF:"French Southern Antarctic Lands",TG:"Togo",TD:"Chad",LY:"Libya",AE:"United Arab Emirates",VE:"Venezuela",AF:"Afghanistan",IQ:"Iraq",IS:"Iceland",IR:"Iran",AM:"Armenia",AL:"Albania",AO:"Angola",AR:"Argentina",AU:"Australia",AT:"Austria",IN:"India",TZ:"Tanzania",AZ:"Azerbaijan",IE:"Ireland",ID:"Indonesia",UA:"Ukraine",QA:"Qatar",MZ:"Mozambique"},E=Object.keys(C),B={},N=0,p=E;N<p.length;N++){var v=p[N];B[v]={name:C[v],been:!1,color:0,dates:[null,null]}}console.log(B);for(var y={},A=0,M=E;A<M.length;A++){var w=M[A];y[w]=!1}var G=function(a){function e(){var a,n;Object(l.a)(this,e);for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(a=Object(u.a)(e)).call.apply(a,[this].concat(i)))).state={allData:B,selectedName:"",selectedCode:"",haveBeen:y},n.handleClick=function(a,e){var t=C[e],i=e;n.setState(function(a){return Object(h.a)({},a,{selectedName:t,selectedCode:i})})},n.handleCheckbox=function(a){var e=a.target,t=e.name,i=e.checked;n.setState(function(a){var e=Object(h.a)({},a,{allData:Object(h.a)({},a.allData)});return e.allData[t].been=i,console.log(e),e})},n}return Object(d.a)(e,a),Object(c.a)(e,[{key:"componentDidMount",value:function(){console.log(this.state)}},{key:"render",value:function(){var a=this;console.log("Render");var e=S.a.mapObject(this.state.allData,function(e,n){return a.state.selectedCode===n?"Selected":e.been?"HasBeen":"HasNotBeen"});return i.a.createElement("div",{style:{width:"100%",height:500},className:"container-fluid"},i.a.createElement(b.VectorMap,{map:"world_mill",backgroundColor:"#3b96ce",regionsSelectable:!0,regionsSelectableOne:!0,ref:"map",containerStyle:{width:"100%",height:"100%"},containerClassName:"map",onRegionClick:this.handleClick,series:{regions:[{values:e,attribute:"fill",scale:{HasBeen:"green",HasNotBeen:"white",Selected:"yellow"}}]}}),i.a.createElement("div",{style:{display:this.state.selectedName?"block":"none"},className:"container-fluid"},i.a.createElement("h2",null,this.state.selectedName,", ",this.state.selectedCode),i.a.createElement("form",null,i.a.createElement("div",{className:"custom-control custom-switch"},i.a.createElement("input",{type:"checkbox",id:"customSwitch1",className:"custom-control-input",key:this.state.selectedCode,name:this.state.selectedCode,checked:!!this.state.allData[this.state.selectedCode]&&this.state.allData[this.state.selectedCode].been,onChange:this.handleCheckbox}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch1"},"I have been here")))))}}]),e}(t.Component),k=function(a){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,a),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,null),i.a.createElement(G,null))}}]),e}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(18);r.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(a){a.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.e4bbfe9b.chunk.js.map