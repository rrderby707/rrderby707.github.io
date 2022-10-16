(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{219:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(210),o=(a(102),a(103),a(209)),c=a(14);a(147),a(104),a(145),a(146),a(16),a(17),a(8),a(21);var s=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.componentDidMount=function(){var e=new Date,t="https://www.googleapis.com/calendar/v3/calendars/admin@rrgderby.org/events?key="+{}.ENV_CAL_KEY+"&timeMin="+e.getFullYear()+"-01-01T00:00:00-07:00",a=new XMLHttpRequest,n=this.setState.bind(this);a.open("GET",t,!0),a.onload=function(e){if(4===a.readyState)if(200===a.status){var t=JSON.parse(a.responseText).items;n(t)}else console.error(a.statusText)},a.send()},l.eventFilter=function(e){for(var t,a,n,r,l=[],o=[],c=0;c<=Object.keys(e).length;c++)if(e&&e[c]&&e[c].summary&&(e[c].summary.includes("Game")||e[c].description&&e[c].description.includes("List"))&&e[c].start.dateTime){var s=new Date(e[c].start.dateTime);if(t=s.getMonth()+1+"/"+s.getDate(),n=e[c].location&&e[c].location.includes("Cal Skate")?"Home":"Away",a=e[c].summary.includes("Game")?e[c].summary.substring(14,e[c].summary.length):e[c].summary,e[c].description){var i=e[c].description.match(/\bhttps?:\/\/\S+/gi);if(i&&i.length>=1){var m=i[0],u=i[1];r=m?"Tickets":""}else r=""}else r="";l=[a,n,e[c].location,t,m,u,s,r,c],o.push(l)}return o.sort(function(e,t){return new Date(e[6])-new Date(t[6])})},l.render=function(){return r.a.createElement("div",null,r.a.createElement("table",{className:"events-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"table-header"},"2020 Events"),r.a.createElement("td",{className:"table-header"},"Location"),r.a.createElement("td",{className:"table-header"},"Date"),r.a.createElement("td",{className:"table-header"}))),r.a.createElement("tbody",null,this.state?r.a.createElement(r.a.Fragment,null,this.eventFilter(this.state).map(function(e){return r.a.createElement("tr",{key:e[8]},r.a.createElement("td",{key:e[0]},e[0]),r.a.createElement("td",{key:e[1]},e[1]),r.a.createElement("td",{key:e[3]},e[3]),r.a.createElement("td",{key:e[4]},r.a.createElement("a",{href:e[4],target:"_new"},e[7])))})):r.a.createElement("div",null,"Loading Events"))))},n}(r.a.Component);a.d(t,"default",function(){return i});var i=function(e){var t,n;function i(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).getSectionRef=function(e){t.sectionRef=e},t.onButtonClick=function(e){t.sectionRef&&window.scrollTo({top:t.sectionRef.offsetTop,behavior:"smooth"})},t}return n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.prototype.render=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"Resurrection Roller Derby",keywords:["roller derby","sonoma county","rohnert park","north bay","resurrection","sports"]}),r.a.createElement("header",{className:"masthead text-center text-white d-flex mw-100",style:{height:"100vh"}},r.a.createElement("div",{className:"container "},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-10 mx-auto"},r.a.createElement("div",{className:"callout"},"RESURRECTION ROLLER DERBY"))),r.a.createElement("div",{className:"row h-50"},r.a.createElement("div",{className:"col-lg-8 mx-auto"},r.a.createElement("img",{className:"logo img-fluid",src:a(239),alt:"Resurrection Roller Derby Star Logo"}),r.a.createElement("br",null),r.a.createElement("img",{src:a(240),className:"img-fluid",onClick:this.onButtonClick,style:{cursor:"pointer"},alt:"Down Arrow"}))))),r.a.createElement("section",{className:"firstSection",id:"schedule",ref:this.getSectionRef},r.a.createElement("div",null,r.a.createElement("div",{className:"content-block"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-auto mx-auto text-center"},r.a.createElement("h1",{className:"section-heading text-white"},"Events"),r.a.createElement("hr",{className:"light my-4"}),r.a.createElement("div",{className:"content-partial text-left"},r.a.createElement("div",{className:"text-main loud-text"},"Skate fast. Hit hard."),r.a.createElement("p",{className:"text-main medium-loud"},"Sonoma County roller derby."),r.a.createElement("p",{className:"text-main"},"Our league of athletes, officials and volunteers call ",r.a.createElement("a",{href:"https://goo.gl/maps/PPMmMPAutmG2",target:"_new"},"Cal Skate of Rohnert Park")," home. That's where you'll find all of our home games and training events. We'd love to have you join us. RRD welcomes youth and adult skaters from throughout Sonoma County.")),r.a.createElement("div",{className:"content-partial2 "},r.a.createElement(s,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"text-main"},"All practices and events are postponed due to the ongoing COVID-19 pandemic.")))),r.a.createElement("div",{className:"row"},r.a.createElement("br",null))))),r.a.createElement("section",{id:"join",className:"secondSection"},r.a.createElement("div",{className:"content-block"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-auto mx-auto text-center"},r.a.createElement("h1",{className:"section-heading text-white"},"Get Involved")," "),r.a.createElement("div",{className:"col-sm-auto mx-auto text-left"},r.a.createElement("hr",{className:"light my-4"}),r.a.createElement("p",{className:"text-main mb-4"},r.a.createElement("strong",null,"All skate activities have been postponed due to COVID-19 concerns and the temporary closing of Cal Skate. We will update this page and our social media channels as our schedule develops.",r.a.createElement("br",null)),r.a.createElement("br",null),"New Skaters: New skaters get involved by attending one of our regularly offered Boot Camps or our new skater training sessions. Skater Intake nights happen the first Tuesday of each month from March to October, starting at 7:30 pm. Training nights are available every Tuesday after that at 8pm. Your first one is free, so if you're curious please come visit us. Our skaters are always happy to talk. Loaner gear and skates are available at no charge. Just bring comfortable clothes, a water bottle and yourself.  ",r.a.createElement(c.a,{to:"/newskaters/"},"Click here")," to learn more.",r.a.createElement("br",null),r.a.createElement("br",null),"Transferring Skaters: If you've been skating with another league, transferring to RRD is usually as easy as asking. We don't require anything from your previous league, but may request verification of past rostering and minimum skills competency. Please ",r.a.createElement("a",{href:"mailto:info@rrderby.org"},"contact us")," directly for details.",r.a.createElement("br",null),r.a.createElement("br",null),"Volunteers: Playing Derby isn't the only way to get involved. Volunteers work behind the scenes to make this league possible. These include referees, non-skating officials (NSOs) and support staff of all kinds. We are always looking for volunteers to help with all of our projects - marketing, bout production, event coordination and more. Send us an email if you'd like to get involved at any level. We'd love to hear from you!"))))))},i}(r.a.Component)},239:function(e,t,a){e.exports=a.p+"static/logo_star-bc23621f981c2ab691c16ec3e3f5e5fa.png"},240:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAABkCAYAAABD9UgYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTEyLTMxVDIyOjIwOjE5LTA2OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTEyLTMxVDIyOjIwOjE5LTA2OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0xMi0zMVQyMjoyMDoxOS0wNjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmNDdmYTg2Yy02ZjM0LWE2NDEtYWY2ZC1iOTE1Y2NmZjFiYjgiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1NjYwNTZkZC01ZmYzLTEzNDctODYz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"}}]);
//# sourceMappingURL=component---src-pages-index-js-feed56de72c0c54654b3.js.map