(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],[,function(e,t,a){},,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),i=(a(16),a(7)),o=a.n(i),s=a(10),m=a(2),d=a(3),u=a(5),h=a(4),E=a(6),f=(a(18),a(19),a(20),function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:e.getWeather},r.a.createElement("div",{className:"form-group row",id:"searchbar"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"city",className:"col-md-2 col-form-label"},"City"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{className:"form-control",type:"text",id:"city"})))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"row "},r.a.createElement("label",{htmlFor:"country",className:"col-md-3 col-form-label"},"Country"),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("input",{className:"form-control",type:"text",id:"country"})))),r.a.createElement("div",{className:"col-md-2 "},r.a.createElement("button",{className:"btn btn-outline-primary text-center",type:"submit"},"Get Weather")))))}),w=(a(1),function(e){var t=e.type.toLowerCase();if("clouds"===t){return r.a.createElement("i",{className:"wi wi-day-cloudy"})}if("clear"===t){return r.a.createElement("i",{className:"wi wi-day-sunny"})}return console.log(t),r.a.createElement("i",{className:"wi wi-day-"+t})}),p=function(e){var t=e.dt,a=new Date(t),n=new Array(7);return n[0]="Sunday",n[1]="Monday",n[2]="Tuesday",n[3]="Wednesday",n[4]="Thursday",n[5]="Friday",n[6]="Saturday",n[a.getDay()]},v=function(e){var t=e.weather;return r.a.createElement("div",{className:"col-md-12",id:"weather"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement(w,{type:t.weather[0].main})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h2",null,r.a.createElement(p,{dt:t.dt_txt}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",null,Math.round(t.main.temp),"\xb0C"))))},y=(r.a.Component,function(e){var t=e.today;return r.a.createElement("div",{className:"col-md-4",id:"main"},r.a.createElement("h1",null,t.name,", ",t.sys.country),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(w,{type:t.weather[0].main})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h3",null,Math.round(t.main.temp),"\xb0C")),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h3",null,t.weather[0].main)))),r.a.createElement("br",null),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h2",null,"Humidity ",t.main.humidity))),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",null,Math.round(t.main.temp_min),"\xb0C Min")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",null,Math.round(t.main.temp_max),"\xb0C Max"))))}),N=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",id:"weatherlist"},r.a.createElement(y,{today:e.todaysWeather}),r.a.createElement("div",{className:"col-md-8",id:"forecast"},r.a.createElement("h1",{id:"forecastTitle"},"5Day Forecast"),e.weatherlist&&e.weatherlist.map((function(e,t){return r.a.createElement(v,{key:t,weather:e})})))))},g="2b05391391f6e0c00d0d4a7bc27bf59d",b=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).getWeather=function(){var t=Object(s.a)(o.a.mark((function t(a){var n,r,c,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(a),e.setState({hasError:!1,isLoading:!0}),n=a.target.city.value,r=a.target.country.value,0!==n.trim().length&&0!==r.trim().length){t.next=6;break}return t.abrupt("return",e.setState({hasError:!0,isLoading:!1}));case 6:c=(new Date).toTimeString().split(" ",2),l=c[0],console.log(l),Promise.all([fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(r,"&appid=").concat(g,"&units=metric")).then((function(e){return e.json()})).then((function(t){e.setState({todaysWeather:t})})),fetch("http://api.openweathermap.org/data/2.5/forecast?q=".concat(n,",").concat(r,"&appid=").concat(g,"&units=metric")).then((function(e){return e.json()})).then((function(t){var a=t.list.filter((function(e){return e.dt_txt.includes("18:00:00")}));console.log(a),e.setState({weatherlist:a})}))]),e.setState({isLoading:!1});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={todaysWeather:[],weatherlist:[],isLoading:!1,hasError:!1},e}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(f,{getWeather:this.getWeather}),r.a.createElement("div",{className:"jusfity-content-center"},this.state.isLoading?r.a.createElement("h1",null,"Loading"):r.a.createElement("h1",null),this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):r.a.createElement("h1",null)),r.a.createElement("br",null),r.a.createElement("br",null),0!==this.state.weatherlist.length&&!this.state.hasError&&r.a.createElement(N,{todaysWeather:this.state.todaysWeather,weatherlist:this.state.weatherlist}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(21),a(22);l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.5b82e65f.chunk.js.map