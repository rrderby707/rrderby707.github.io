(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{217:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(210),o=(a(102),a(103),a(209)),s=(a(30),a(242)),i=a(14);a(226);var p=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this;return c.a.createElement(i.b,{query:"1693790956",render:function(t){return c.a.createElement("div",{className:"sponsors"},c.a.createElement("ul",{className:"sponsor_list"},t.allContentfulMembers.edges.map(function(t){var a=t.node;return c.a.createElement("li",{key:a.name},c.a.createElement("img",{src:a.picture1.file.url,className:"img-fluid text-center",alt:a.name,key:a.picture1.file.url,onClick:function(){return e.props.togglePopup(a.name,a.content,a.picture1.file.url)}}),c.a.createElement("br",null),c.a.createElement("p",{key:a.name},a.name))})))},data:s})},n}(c.a.Component);var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return console.log(this.props.picture),c.a.createElement("div",{className:"popupWrapper",onClick:this.props.closePopup},c.a.createElement("div",{className:"popup"},c.a.createElement("div",{className:"popup\\_inner"},c.a.createElement("h1",null,this.props.skaterClicked),c.a.createElement("img",{src:this.props.picture,className:"img-fluid text-center w-25",alt:this.props.skaterClicked}),c.a.createElement("p",{style:{color:"black"}},this.props.content),c.a.createElement("p",null,c.a.createElement("br",null),c.a.createElement("br",null)))))},n}(c.a.Component);var u=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={skaterClicked:"Luna",showPopup:!1,content:"",picture:""},a.togglePopup=a.togglePopup.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.togglePopup=function(e,t,a){this.setState({skaterClicked:e,content:t,picture:a,showPopup:!this.state.showPopup}),console.log(a)},s.closePopup=function(){this.setState({showPopup:!1})},s.render=function(){return c.a.createElement(r.a,null,c.a.createElement(o.a,{title:"Team Members",keywords:["roller derby","sonoma county","rohnert park","north bay","resurrection","sports","sponsors","nonprofit"]}),c.a.createElement("section",{id:"members",className:"secondSection"},c.a.createElement("div",{className:"content-block"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-auto mx-auto text-center"},c.a.createElement("h1",{className:"section-heading text-white"},"Meet the Team"),c.a.createElement("div",{className:"col-sm-auto mx-auto text-left"},c.a.createElement("hr",{className:"light my-4"})))),c.a.createElement(p,{togglePopup:this.togglePopup.bind(this),skaterClicked:this.state.skaterClicked}),this.state.showPopup?c.a.createElement(l,{skaterClicked:this.state.skaterClicked,closePopup:this.closePopup.bind(this),content:this.state.content,picture:this.state.picture}):null))))},n}(c.a.Component);t.default=u},242:function(e){e.exports=JSON.parse('{"data":{"allContentfulMembers":{"edges":[{"node":{"name":"Attila the Hen","id":"eb9b7110-5d05-571d-9e9f-97314fed1418","content":"Rather large for a bird. Bit flappy sometimes at that.","picture1":{"id":"f13ae681-2a79-533c-956a-4647df36ff65","file":{"url":"//images.ctfassets.net/ypg5e55nvkzw/5mqRHctEGkT8ENO77JeMEo/3574055448dae82c6b6a005621e3f15e/attila.jpg","fileName":"attila.jpg","contentType":"image/jpeg"}}}},{"node":{"name":"The Chicklets","id":"6147c370-a89e-5449-9f6c-20b7ce24eba8","content":"I really hope these aren\'t roosters.","picture1":{"id":"503dba5f-c1ff-5256-b6f1-aef932cd393d","file":{"url":"//images.ctfassets.net/ypg5e55nvkzw/7gqdk3X09ZqThC4209TGTO/267d8170df8cca7645abd4c765447ed8/chicks.jpg","fileName":"chicks.jpg","contentType":"image/jpeg"}}}},{"node":{"name":"Leif EricksHen","id":"c80fb9f8-96bf-5902-a7dc-0483eb8f220f","content":"Bok bok","picture1":{"id":"c1765f8c-74f1-5277-9c39-c05438dea179","file":{"url":"//images.ctfassets.net/ypg5e55nvkzw/cT6T3l7tbC4rlCMrAhCAA/1a03beb8033ce0ad0821b25214ed1bd4/leif.jpg","fileName":"leif.jpg","contentType":"image/jpeg"}}}},{"node":{"name":"Finn","id":"fdbdc713-a113-57a8-802c-75a66ecfb609","content":"He\'s a sweet little guy.","picture1":{"id":"609dcc2e-010f-5f64-927a-06aac247bd97","file":{"url":"//images.ctfassets.net/ypg5e55nvkzw/6qp00tECsqQGLU0y6dNbSY/3dc611f06ad1abbb1c0eec6522d1583e/finn.jpg","fileName":"finn.jpg","contentType":"image/jpeg"}}}},{"node":{"name":"Nadia","id":"51050e1b-9669-569f-8833-fdb08d279c97","content":"Biggest cat in the house, by far.","picture1":{"id":"92815587-3fb5-5562-9bb9-e4457d0787ce","file":{"url":"//images.ctfassets.net/ypg5e55nvkzw/1FVa8ocweShQUGmCfSBc3N/79ae401c88b6019ca59269f9c6d2cc88/nadia.jpg","fileName":"nadia.jpg","contentType":"image/jpeg"}}}},{"node":{"name":"Luna","id":"6404701a-9976-5441-bb33-ae0128b6c71e","content":"Position: Cat","picture1":{"id":"1157eaa7-22d5-5521-b6d2-2b2692cb435f","file":{"url":"//images.ctfassets.net/ypg5e55nvkzw/3jGT7OOXTFNTtZ1LsP0MMq/59231b8ffaf7094bd97a7477a6c708a1/luna.jpg","fileName":"luna.jpg","contentType":"image/jpeg"}}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-members-js-4f1658d59f0fc1737620.js.map