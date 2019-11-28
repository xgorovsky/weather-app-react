(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{11:function(e,t,r){e.exports=r(30)},16:function(e,t,r){},18:function(e,t,r){},30:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(3),c=r.n(s),i=(r(16),r(1)),l=r.n(i),o=r(4),u=r(5),m=r(6),p=r(9),d=r(7),h=r(10),y=(r(18),r(8)),E=r.n(y),f=function(e){var t=(new Date).toLocaleDateString();return n.a.createElement("div",{className:"date-time"},n.a.createElement("p",null,t," "," "),n.a.createElement(E.a,{className:"live-clock",format:"HH:mm:ss",ticking:!0,timezone:"Europe/Warsaw"}))},v=function(){return n.a.createElement("div",{className:"titles-wrapper"},n.a.createElement("h1",{className:"app-title"},"Weather finder"),n.a.createElement("i",{className:"fas fa-wind fa-rotate-90 fa-4x"}),n.a.createElement("p",{className:"app-description"},"Find out current temperature, condtitions and more..."),n.a.createElement("div",null,n.a.createElement(f,null)))},g=function(e){return n.a.createElement("form",{className:"search-form",onSubmit:e.getWeather},n.a.createElement("input",{className:"search-bar",type:"text",name:"city",placeholder:"Enter the city...",autoComplete:"off"}),n.a.createElement("button",{className:"search-button"},"Get Weather!"))},w=function(e){function t(e){return(e.getMinutes()<10?"0":"")+e.getMinutes()}var r={color:"#486860"};return n.a.createElement("div",{className:"weather-info-wrapper"},e.city&&e.country&&n.a.createElement("p",null,n.a.createElement("span",{style:r},"Location:")," ",n.a.createElement("strong",null,e.city),", ",e.country),e.temperature&&n.a.createElement("p",null,n.a.createElement("span",{style:r},"Temperature:")," ",n.a.createElement("strong",null,Math.round(e.temperature-273)),"\xb0C"),e.humidity&&n.a.createElement("p",null,n.a.createElement("span",{style:r},"Humidity:")," ",n.a.createElement("strong",null,e.humidity),"%"),e.pressure&&n.a.createElement("p",null,n.a.createElement("span",{style:r},"Pressure:")," ",n.a.createElement("strong",null,e.pressure)," hPa"),e.sunrise&&n.a.createElement("p",null,n.a.createElement("span",{style:r},"Sunrise:"),n.a.createElement("strong",null,new Date(1e3*e.sunrise).getHours(),":",t(new Date(1e3*e.sunrise)))," CET"),e.sunset&&n.a.createElement("p",null,n.a.createElement("span",{style:r},"Sunset:"),n.a.createElement("strong",null,new Date(1e3*e.sunset).getHours(),":",t(new Date(1e3*e.sunset)))," CET"),e.description&&n.a.createElement("p",null,n.a.createElement("span",{style:r},"Description:")," ",n.a.createElement("strong",null,e.description)," "),e.error&&n.a.createElement("p",{style:{color:"red"}},n.a.createElement("strong",null,e.error)))},b=function(e){return n.a.createElement("footer",null,n.a.createElement("p",{style:{marginTop:"100px",color:"#dedce4",fontSize:"10px",textAlign:"center",textTransform:"uppercase"}},"designed by Igor Biedrawa \xa9 2019"))},N="3d07ac3e7716f1c5fa32f30e69812237",x=function(e){function t(){var e,r;Object(u.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(r=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:void 0},r.getWeather=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.elements.city.value,e.next=4,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat(N));case 4:return n=e.sent,e.next=7,n.json();case 7:s=e.sent,a&&200===s.cod?(console.log(s),r.setState({temperature:s.main.temp,city:s.name,country:s.sys.country,humidity:s.main.humidity,sunrise:s.sys.sunrise,sunset:s.sys.sunset,pressure:s.main.pressure,description:s.weather[0].description,error:""})):"404"===s.cod?r.setState({error:"City not in our database, sorry..."}):r.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,pressure:void 0,sunrise:void 0,sunset:void 0,description:void 0,error:"Please enter a proper city name!"});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"app-wrapper"},n.a.createElement(v,null),n.a.createElement(g,{getWeather:this.getWeather}),n.a.createElement(w,{temperature:this.state.temperature,city:this.state.city,country:this.state.country,humidity:this.state.humidity,pressure:this.state.pressure,sunrise:this.state.sunrise,sunset:this.state.sunset,description:this.state.description,error:this.state.error}),n.a.createElement(b,null))}}]),t}(n.a.Component);c.a.render(n.a.createElement(x,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.61bc1bf1.chunk.js.map