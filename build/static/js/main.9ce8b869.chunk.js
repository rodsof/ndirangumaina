(this.webpackJsonpSpatialArdhi=this.webpackJsonpSpatialArdhi||[]).push([[0],{123:function(e,t,a){e.exports=a(198)},128:function(e,t,a){},177:function(e,t){},195:function(e,t,a){},198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(37),s=a.n(l),o=(a(128),a(35)),c=a.n(o),i=a(45),m=a(15),u=a(16),p=a(18),h=a(17),g=a(213),d=a(214),E=a(215),f=a(204),v=a(218),y=a(205),b=a(206),w=a(33),j=a(200),N=a(201),S=a(202),O=a(203),C=a(40),k=a.n(C),I=k.a.create({baseURL:"https://www.spatialardhi.com/estate/",headers:{Authorization:"Token ".concat(localStorage.getItem("token")," ")},"Content-Type":"application/json"}),x=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={title:"",image:"",video:""},e.onChange=function(t){e.setState(Object(w.a)({},t.target.name,t.target.value))},e.createProperty=function(t){t.preventDefault();var a=new FormData(document.forms.namedItem("realEstate"));a.append("user_profile",e.props.user.id),I.post("data/",a).then((function(){e.props.toggle(),e.props.resetState()}))},e.editProperty=function(t){t.preventDefault();var a=new FormData(document.forms.namedItem("realEstate"));I.put("data/"+e.props.result.id+"/",a).then((function(){e.props.toggle(),e.props.resetState()}))},e.defaultIfEmpty=function(e){return""===e?"":e},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){if(this.props.property){var e=this.props.result,t=e.id,a=e.title,n=e.image,r=e.video;this.setState({id:t,title:a,image:n,video:r})}}},{key:"render",value:function(){return r.a.createElement(j.a,{name:"realEstate",onSubmit:this.props.result?this.editProperty:this.createProperty,encType:"multipart/form-data"},r.a.createElement(N.a,null,r.a.createElement(S.a,{for:"title"},"Title:"),r.a.createElement(O.a,{type:"text",name:"title",onChange:this.onChange,value:this.defaultIfEmpty(this.state.title)})),r.a.createElement(N.a,null,r.a.createElement(S.a,{for:"image"},"Image:"),r.a.createElement(O.a,{type:"file",name:"image",onChange:this.onChange})),r.a.createElement(N.a,null,r.a.createElement(S.a,{for:"phone"},"Video:"),r.a.createElement(O.a,{type:"file",name:"video",onChange:this.onChange})),r.a.createElement(f.a,{color:"danger"},"UPLOAD"))}}]),a}(r.a.Component),D=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={modal:!1},e.toggle=function(){e.setState((function(e){return{modal:!e.modal}}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.create,t="Editing Real Estate",a=r.a.createElement(f.a,{onClick:this.toggle},"Edit");return e&&(t="Add a new Real Estate",a=r.a.createElement(f.a,{color:"danger",className:"float-right",onClick:this.toggle},"UPLOAD")),r.a.createElement(n.Fragment,null,a,r.a.createElement(v.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(y.a,{toggle:this.toggle},t),r.a.createElement(b.a,null,r.a.createElement(x,{resetState:this.props.resetState,toggle:this.toggle,user:this.props.user}))))}}]),a}(n.Component),T=a(38),A=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("header",{className:"header-section"},r.a.createElement("a",{href:"index.html",className:"site-logo"},r.a.createElement("img",{src:"/logo1.png",alt:""})),r.a.createElement("nav",{className:"header-nav"},r.a.createElement("ul",{className:"main-menu"},r.a.createElement("li",null,r.a.createElement("a",{href:"/home",className:"home"===this.props.active?"active":""},"Home")),r.a.createElement("li",null," ",r.a.createElement("a",{href:"/virtual",className:"virtualtour"===this.props.active?"active":""},"Virtual Tour")),r.a.createElement("li",null," ",r.a.createElement("a",{href:"/users",className:"users"===this.props.active?"active":""},"Users")),r.a.createElement("li",null,r.a.createElement("div",{className:"user-panel"},r.a.createElement("a",{href:"/profile",className:"register"},this.props.user.name))),r.a.createElement("li",{onClick:function(){return e.props.logout()}},r.a.createElement(T.b,{to:"/"},"Log Out ")),r.a.createElement("li",null,r.a.createElement(D,{create:!0,user:this.props.user,resetState:this.props.resetState})))))}}]),a}(n.Component),B=a(217),U=a(114),L=a(207),z="https://www.spatialardhi.com/estate/login/",R=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={modal:!1},e.toggle=function(){e.setState((function(e){return{modal:!e.modal}}))},e.delete=function(t){I.delete("data/"+t+"/?format=json").then((function(){e.props.resetState(),e.toggle()}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement(f.a,{color:"danger",onClick:function(){return e.toggle()}},"Remove"),r.a.createElement(v.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(y.a,{toggle:this.toggle},"Do you really wanna delete this?"),r.a.createElement(L.a,null,r.a.createElement(f.a,{type:"button",onClick:function(){return e.toggle()}},"Cancel"),r.a.createElement(f.a,{type:"button",color:"danger",onClick:function(){return e.delete(e.props.result.id)}},"Yes"))))}}]),a}(n.Component),M=a(122),P=function(e){var t=e.image;e.video;return r.a.createElement("div",null,r.a.createElement("h1",null,"Virtual Tour"),r.a.createElement(M.a,{width:"100%",height:"500px",image:t,pitch:10,yaw:180,hfov:110,autoLoad:!0,onLoad:function(){console.log("panorama loaded")}}))},F=a(208),_=a(209),Y=a(210),V=a(211),W=function(e){var t=e.result,a=e.user,n=e.resetState;return"realEstate"===e.active?r.a.createElement(F.a,{height:"1000px"},r.a.createElement(_.a,{top:!0,src:t.image,alt:"real estate image"}),r.a.createElement(Y.a,null,r.a.createElement(V.a,null,r.a.createElement("h5",null,t.title)),r.a.createElement(U.Player,{playsInline:!0,src:t.video}),r.a.createElement(P,{image:"https://cors-anywhere.herokuapp.com/".concat(t.image),video:t.video})),t.user_profile===a.id?r.a.createElement("div",null,r.a.createElement(D,{create:!1,result:t,resetState:n}),"\xa0\xa0\xa0\xa0",r.a.createElement(R,{result:t,resetState:n})):null):r.a.createElement(F.a,null,r.a.createElement("div",{className:"property-item"},r.a.createElement("div",{className:"pi-image"},r.a.createElement("img",{src:t.avatar,alt:"Avatar"})),r.a.createElement("h5",null,t.name),r.a.createElement("p",null," ",t.bio," ")))},J=a(212),G=function(e){var t=e.results,a=e.user,n=e.resetState,l=e.active;return r.a.createElement("section",{className:"property-section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section-title"},r.a.createElement("h2",null,"RESULTS ")),0===t.length?r.a.createElement("li",{className:"col-lg-4"},r.a.createElement("h3",null,"No results")):r.a.createElement(B.a,null,r.a.createElement(J.a,null,t.map((function(e){return r.a.createElement(W,{key:e.id,result:e,user:a,resetState:n,active:l})}))))))},H=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={title:"",results:n.props.results},n.defaultIfEmpty=function(e){return""===e?"":e},n.change=function(e){n.setState(Object(w.a)({},e.target.name,e.target.value))},n.search=function(e){e.preventDefault();var t=n.state.title;n.props.search(t)},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"hero-section set-bg"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"hero-warp"},r.a.createElement("form",{className:"main-search-form",onSubmit:this.search,encType:"multipart/form-data"},r.a.createElement("div",{className:"search-type"},r.a.createElement("div",{className:"st-item"},r.a.createElement("input",{type:"radio",name:"st",id:"states",checked:"realEstate"===this.props.active}),r.a.createElement("label",{htmlFor:"states"},"REAL ESTATES")),r.a.createElement("div",{className:"st-item"},r.a.createElement("input",{type:"radio",name:"st",id:"states",checked:"users"===this.props.active}),r.a.createElement("label",{htmlFor:"states"},"USERS"))),r.a.createElement("div",{className:"search-input"},r.a.createElement("input",{type:"text",name:"title",placeholder:"users"===this.props.active?"Username":"Title",onChange:this.change,value:this.defaultIfEmpty(this.state.title)}),r.a.createElement("button",{type:"submit",className:"site-btn btn-danger"},"Search")))))),r.a.createElement(G,{results:this.props.results,user:this.props.user,resetState:this.props.resetState,active:this.props.active}))}}]),a}(n.Component),q=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){localStorage.getItem("token")||this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement(A,{user:this.props.user,active:"home",logout:this.props.logout}),r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement(H,{active:"realEstate",user:this.props.user,resetState:this.props.resetState,results:this.props.results,search:this.props.search}))))}}]),a}(n.Component),$=a(34),K=a(216),Q=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",organization:"",bio:"",password:"",error:null},e.onChange=function(t){e.setState(Object(w.a)({},t.target.name,t.target.value))},e.createUser=function(t){t.preventDefault();var a=new FormData(document.forms.namedItem("user"));I.post("https://www.spatialardhi.com/estate/profiles/",a).then((function(){e.props.toggle()})).catch((function(t){return e.setState({error:"Signin Error! "})}))},e.editUser=function(t){t.preventDefault(),I.put("profiles/"+e.props.user.id+"/",e.state).then((function(){e.props.toggle(),e.props.resetState()})).catch((function(t){return e.setState({error:"Error! "})}))},e.defaultIfEmpty=function(e){return""===e?"":e},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){if(this.props.user){var e=this.props.user,t=e.id,a=e.name,n=e.email,r=e.bio,l=e.organization,s=e.password;this.setState({id:t,name:a,email:n,bio:r,organization:l,password:s})}}},{key:"render",value:function(){return r.a.createElement(j.a,{name:"user",onSubmit:this.props.user?this.editUser:this.createUser,encType:"multipart/form-data"},r.a.createElement(N.a,null,r.a.createElement(S.a,{for:"email"},"Email:"),r.a.createElement(O.a,{type:"email",name:"email",onChange:this.onChange,value:this.defaultIfEmpty(this.state.email),autoComplete:this.defaultIfEmpty(this.state.email)})),r.a.createElement(N.a,null,r.a.createElement(S.a,{for:"name"},"Name:"),r.a.createElement(O.a,{type:"text",name:"name",onChange:this.onChange,value:this.defaultIfEmpty(this.state.name),autoComplete:this.defaultIfEmpty(this.state.name)})),r.a.createElement(N.a,null,r.a.createElement(S.a,{for:"organization"},"Organization:"),r.a.createElement(O.a,{type:"text",name:"organization",onChange:this.onChange,value:this.defaultIfEmpty(this.state.organization),autoComplete:this.defaultIfEmpty(this.state.organization)})),r.a.createElement(N.a,null,r.a.createElement(S.a,{for:"bio"},"Bio:"),r.a.createElement(O.a,{type:"text",name:"bio",onChange:this.onChange,value:this.defaultIfEmpty(this.state.bio),autoComplete:this.defaultIfEmpty(this.state.organization)})),r.a.createElement(N.a,null,r.a.createElement(S.a,{for:"avatar"},"Avatar"),r.a.createElement(O.a,{type:"file",name:"avatar",onChange:this.onChange})),r.a.createElement(N.a,null,r.a.createElement(S.a,{for:"password"},"Password:"),r.a.createElement(O.a,{type:"password",name:"password",onChange:this.onChange,value:this.defaultIfEmpty(this.state.password),autoComplete:this.defaultIfEmpty(this.props.password)})),this.state.error?r.a.createElement(K.a,{color:"danger"}," ",this.state.error," "):null,this.props.create?r.a.createElement(f.a,{type:"submit",color:"danger"},"REGISTER"):r.a.createElement(f.a,{type:"submit",color:"danger"},"SAVE"))}}]),a}(r.a.Component),X=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={modal:!1},e.toggle=function(){e.setState((function(e){return{modal:!e.modal}}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.create,t="Editing User",a=r.a.createElement(f.a,{onClick:this.toggle},"Edit");return e&&(t="Register",a=r.a.createElement(f.a,{color:"danger",type:"button",className:"float-right",onClick:this.toggle},"JOIN US")),r.a.createElement(n.Fragment,null,a,r.a.createElement(v.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(y.a,{toggle:this.toggle},t),r.a.createElement(b.a,null,r.a.createElement(Q,{toggle:this.toggle,user:this.props.user,create:e,resetState:this.props.resetState}))))}}]),a}(n.Component),Z=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",error:null},e.onChange=function(t){e.setState(Object(w.a)({},t.target.name,t.target.value))},e.defaultIfEmpty=function(e){return""===e?"":e},e.login=function(t){t.preventDefault(),k.a.post(z,e.state).then((function(t){localStorage.setItem("token",t.data.token),localStorage.setItem("email",e.state.username),e.props.history.push("/home")})).catch((function(t){return e.setState({error:"Login error"})}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){localStorage.getItem("token")&&this.props.history.push("/home")}},{key:"render",value:function(){return r.a.createElement("div",{className:"limiter"},r.a.createElement("div",{className:"container-login100"},r.a.createElement("div",{className:"wrap-login100"},r.a.createElement(j.a,{onSubmit:this.login,encType:"multipart/form-data"},r.a.createElement(N.a,null,r.a.createElement(S.a,{for:"username"},"Email:"),r.a.createElement(O.a,{type:"text",name:"username",onChange:this.onChange,value:this.defaultIfEmpty(this.state.username)})),r.a.createElement(N.a,null,r.a.createElement(S.a,{for:"password"},"Password:"),r.a.createElement(O.a,{type:"password",name:"password",onChange:this.onChange,value:this.defaultIfEmpty(this.state.password)})),this.state.error?r.a.createElement(K.a,{color:"danger"}," ",this.state.error," "):null,r.a.createElement(f.a,{color:"danger"},"LOGIN"),r.a.createElement(X,{create:!0})))))}}]),a}(r.a.Component),ee=function(e){var t=e.user,a=e.resetState,n=e.logout;return r.a.createElement("div",null,r.a.createElement(A,{user:t,active:"profile",logout:n}),r.a.createElement(d.a,null,r.a.createElement("div",{className:"user-section"},r.a.createElement("div",{className:"user-warp"},r.a.createElement("div",{className:"user-image"},r.a.createElement("img",{src:t.avatar})),r.a.createElement("h2",null,t.name),r.a.createElement("h4",null,r.a.createElement("strong",null,"Organization: "),t.organization," "),r.a.createElement("h4",null,r.a.createElement("strong",null,"Bio: "),t.bio," "),r.a.createElement("h4",null,r.a.createElement("strong",null,"Email: "),t.email," "),r.a.createElement("div",null,r.a.createElement(X,{create:!1,user:t,resetState:a}))))))},te=(a(195),function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"lost"},r.a.createElement("section",{className:"error-page-background"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{href:"","data-toggle":"modal","data-target":"#reason",title:"Why You Are Seeing 404 Page"},r.a.createElement("i",{className:"icon-question bounce"}))),r.a.createElement("h2",null,"404"),r.a.createElement("p",null,"The Page You Are Looking For Doesn't Exist."),r.a.createElement("div",{className:"text-center"},r.a.createElement(T.b,{to:"/home",className:"button button-style"},"Back To Home "))))))),r.a.createElement("div",{className:"modal fade reason-popup-box padding-top-120",id:"reason",role:"dialog"},r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"box-padding"},r.a.createElement("button",{type:"button",className:"btn pull-right","data-dismiss":"modal"},r.a.createElement("i",{className:"icon-close"})),r.a.createElement("h3",null,"Why You Are Seeing 404 Page ?"),r.a.createElement("div",{className:"margin-top-20"},r.a.createElement("ul",{className:"list-icon size-sm"},r.a.createElement("li",null,"May be, The page is removed."),r.a.createElement("li",null,"May be, The page name have changed."),r.a.createElement("li",null,"May be, You did typed wrong keyword."),r.a.createElement("li",null,"May be, The link is temporarily unavailable.")))))))))))}),ae=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(){var e=document.createElement("script");e.src="/index.js",console.log(this.props.results),window.results=this.props.results,e.async=!0,document.body.appendChild(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A,{user:this.props.user,active:"virtualtour",logout:this.props.logout}),r.a.createElement("div",{id:"pano"}),r.a.createElement("div",{id:"sceneList"},r.a.createElement("ul",{className:"scenes"},this.props.results.map((function(e){return r.a.createElement("a",{href:"javascript:void(0)",className:"scene","data-id":e.id,key:e.id},r.a.createElement("li",{className:"text",key:e.id},e.title))})))),r.a.createElement("div",{id:"titleBar"},r.a.createElement("h1",{className:"sceneName"})),r.a.createElement("a",{href:"javascript:void(0)",id:"autorotateToggle"},r.a.createElement("img",{className:"icon off",src:"img/play.png"}),r.a.createElement("img",{className:"icon on",src:"img/pause.png"})),r.a.createElement("a",{href:"javascript:void(0)",id:"fullscreenToggle"},r.a.createElement("img",{className:"icon off",src:"img/fullscreen.png"}),r.a.createElement("img",{className:"icon on",src:"img/windowed.png"})),r.a.createElement("a",{href:"javascript:void(0)",id:"sceneListToggle"},r.a.createElement("img",{className:"icon off",src:"img/expand.png"}),r.a.createElement("img",{className:"icon on",src:"img/collapse.png"})),r.a.createElement("a",{href:"javascript:void(0)",id:"viewUp",className:"viewControlButton viewControlButton-1"},r.a.createElement("img",{className:"icon",src:"img/up.png"})),r.a.createElement("a",{href:"javascript:void(0)",id:"viewDown",className:"viewControlButton viewControlButton-2"},r.a.createElement("img",{className:"icon",src:"img/down.png"})),r.a.createElement("a",{href:"javascript:void(0)",id:"viewLeft",className:"viewControlButton viewControlButton-3"},r.a.createElement("img",{className:"icon",src:"img/left.png"})),r.a.createElement("a",{href:"javascript:void(0)",id:"viewRight",className:"viewControlButton viewControlButton-4"},r.a.createElement("img",{className:"icon",src:"img/right.png"})),r.a.createElement("a",{href:"javascript:void(0)",id:"viewIn",className:"viewControlButton viewControlButton-5"},r.a.createElement("img",{className:"icon",src:"img/plus.png"})),r.a.createElement("a",{href:"javascript:void(0)",id:"viewOut",className:"viewControlButton viewControlButton-6"},r.a.createElement("img",{className:"icon",src:"img/minus.png"})))}}]),a}(r.a.Component),ne=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){localStorage.getItem("token")||this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement(A,{user:this.props.user,active:"users",logout:this.props.logout}),r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement(H,{user:this.props.user,active:"users",resetState:this.props.resetState,results:this.props.results,search:this.props.search}))))}}]),a}(n.Component),re=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).logout=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("token"),localStorage.removeItem("email"),n.setState({user:{},logged_in:!1}),Object($.f)().push("/");case 5:case"end":return e.stop()}}),e)}))),n.getResults=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.get("data/?format=json").then((function(e){return n.setState({results:e.data})}));case 2:return e.next=4,I.get("profiles/?format=json").then((function(e){return n.setState({users:e.data})}));case 4:case"end":return e.stop()}}),e)}))),n.resetState=function(){n.componentDidMount()},n.search=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(" "===t||void 0===t){e.next=5;break}return e.next=3,I.get("data/?format=json",{params:{search:t}}).then((function(e){n.setState({results:e.data})}));case 3:return e.next=5,I.get("profiles/?format=json",{params:{search:t}}).then((function(e){n.setState({users:e.data})}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={logged_in:!!localStorage.getItem("token"),user:{},results:[],users:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getResults(),this.state.logged_in&&I.get("profiles/?format=json&search=".concat(localStorage.getItem("email"))).then((function(t){e.setState({user:t.data[0],logged_in:!0})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(T.a,null,r.a.createElement($.c,null,r.a.createElement($.a,{exact:!0,path:"/",component:Z}),r.a.createElement($.a,{exact:!0,path:"/profile",render:function(t){return r.a.createElement(ee,Object.assign({},t,{user:e.state.user,resetState:e.resetState,logout:e.logout}))}}),r.a.createElement($.a,{exact:!0,path:"/home",render:function(t){return r.a.createElement(q,Object.assign({},t,{user:e.state.user,results:e.state.results,resetState:e.resetState,search:e.search,logout:e.logout}))}}),r.a.createElement($.a,{path:"/404",component:te}),r.a.createElement($.a,{path:"/virtual-tour",component:P}),r.a.createElement($.a,{path:"/virtual",render:function(t){return r.a.createElement(ae,Object.assign({},t,{user:e.state.user,results:e.state.results,logout:e.logout}))}}),r.a.createElement($.a,{path:"/users",render:function(t){return r.a.createElement(ne,Object.assign({},t,{user:e.state.user,results:e.state.users,search:e.search,logout:e.logout}))}}),r.a.createElement($.a,{component:te})))}}]),a}(n.Component);a(196),a(197),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[123,1,2]]]);
//# sourceMappingURL=main.9ce8b869.chunk.js.map