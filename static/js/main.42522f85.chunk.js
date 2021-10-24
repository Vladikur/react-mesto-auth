(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(19),s=n.n(i),o=(n(30),n(24)),r=n(2),u=n(3),l=n(8),p=n.p+"static/media/header__logo.931a48ca.svg",d=n(0);var j=function(e){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("img",{src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto",className:"header__logo"}),Object(d.jsx)("nav",{className:"menu",children:e.children})]})},h=c.a.createContext();var m=function(e){var t=c.a.useContext(h),n=e.openedCard.owner._id===t._id,a="card__remove ".concat(n?"":"card__remove_visibility_hide"),i=e.cardLikes.some((function(e){return e._id===t._id})),s="card__like ".concat(i?"card__like_active":"");return Object(d.jsxs)("li",{className:"card",children:[Object(d.jsx)("button",{onClick:function(){e.onCardDelete(e.openedCard)},"aria-label":"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",type:"button",className:a}),Object(d.jsx)("div",{className:"card__image-container",children:Object(d.jsx)("img",{onClick:function(){e.onCardClick(e.openedCard)},src:e.cardImage,alt:e.cardName,className:"card__image"})}),Object(d.jsxs)("div",{className:"card__description-container",children:[Object(d.jsx)("h2",{className:"card__description",children:e.cardName}),Object(d.jsxs)("div",{className:"card__button-container",children:[Object(d.jsx)("button",{onClick:function(){e.onCardLike(e.openedCard)},"aria-label":"\u041b\u0430\u0439\u043a",type:"button",className:s}),Object(d.jsx)("p",{className:"card__likes",children:e.cardLikes.length})]})]})]})};var b=function(e){var t=c.a.useContext(h);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(j,{children:[Object(d.jsx)(l.c,{exact:!0,to:"/",activeClassName:"menu__link_active",className:"menu__link",children:e.userMail.email}),Object(d.jsx)(l.c,{onClick:e.singOut,to:"/sign-in",className:"menu__link",children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(d.jsxs)("main",{className:"content",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile__container",children:[Object(d.jsxs)("div",{className:"profile__image-container",children:[Object(d.jsx)("button",{"aria-label":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u043d\u0438 \u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f",type:"button",className:"profile__image-redact"}),Object(d.jsx)("img",{src:t.avatar,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__image",onClick:e.onEditAvatar})]}),Object(d.jsxs)("div",{className:"profile__container-info",children:[Object(d.jsxs)("div",{className:"profile__container-name",children:[Object(d.jsx)("h1",{className:"profile__name",children:t.name}),Object(d.jsx)("button",{"aria-label":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u043d\u0438 \u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f",type:"button",className:"profile__redact",onClick:e.onEditProfile})]}),Object(d.jsx)("p",{className:"profile__description",children:t.about})]})]}),Object(d.jsx)("button",{"aria-label":"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a \u0441 \u043c\u0435\u0441\u0442\u0430\u043c\u0438",type:"button",className:"profile__add-profile",onClick:e.onAddPlace})]}),Object(d.jsx)("section",{className:"places",children:Object(d.jsx)("ul",{className:"places__cards",children:e.initialCards.map((function(t){return Object(d.jsx)(m,{openedCard:t,onCardClick:e.\u0441ardClick,cardName:t.name,cardImage:t.link,cardLikes:t.likes,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})]})};var _=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})},f=n(14),O=n(12);var g=function(e){var t=c.a.useState({password:"",email:""}),n=Object(r.a)(t,2),a=n[0],i=n[1];function s(e){var t=e.target,n=t.name,c=t.value;i(Object(O.a)(Object(O.a)({},a),{},Object(f.a)({},n,c)))}return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.login(a)},name:"register",className:"auth-form",children:[Object(d.jsx)("section",{className:"auth-form__element",children:Object(d.jsx)("input",{value:a.email||"",onChange:s,id:"sing-in-email",type:"email",placeholder:"Email",name:"email",className:"auth-form__input",required:!0,minLength:"2",maxLength:"40"})}),Object(d.jsx)("section",{className:"auth-form__element",children:Object(d.jsx)("input",{value:a.password||"",onChange:s,id:"sing-in-password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",className:"auth-form__input",required:!0,minLength:"2",maxLength:"40"})}),Object(d.jsx)("button",{type:"submit",className:"auth-form__submit",children:e.buttonText})]})};var x=function(e){return Object(d.jsxs)("main",{className:"auth",children:[Object(d.jsx)("h2",{className:"auth__header",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsx)(g,{login:e.onLogin,buttonText:"\u0412\u043e\u0439\u0442\u0438"})]})};var v=function(e){return Object(d.jsxs)("main",{className:"auth",children:[Object(d.jsx)("h2",{className:"auth__header",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsx)(g,{login:e.onRegister,buttonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(d.jsx)(l.b,{className:"auth__link",to:"/sign-in",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})};var N=function(e){return Object(d.jsx)("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_is-opened":""),children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{onClick:e.closePopup,"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",type:"button",className:"popup__exit popup__exit-profile"}),Object(d.jsx)("h2",{className:"popup__text-redaction",children:e.title}),Object(d.jsxs)("form",{onSubmit:e.onSubmit,name:"".concat(e.name),className:"popup__form popup__form-profile",children:[e.children,Object(d.jsx)("button",{type:"submit",className:"popup__save",children:e.buttonText})]})]})})};var C=function(e){var t=c.a.useContext(h),n=c.a.useState(""),a=Object(r.a)(n,2),i=a[0],s=a[1],o=c.a.useState(""),u=Object(r.a)(o,2),l=u[0],p=u[1],j=c.a.useState(""),m=Object(r.a)(j,2),b=m[0],_=m[1],f=c.a.useState(""),O=Object(r.a)(f,2),g=O[0],x=O[1];return c.a.useEffect((function(){s(t.name),p(t.about)}),[t,e.isOpen]),Object(d.jsxs)(N,{onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:i,about:l})},buttonText:"".concat(e.saving?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",isOpen:e.isOpen,closePopup:e.closePopup,children:[Object(d.jsxs)("section",{className:"popup__input-element",children:[Object(d.jsx)("input",{value:i||"",onChange:function(e){s(e.target.value),_(e.target.validationMessage)},id:"sing-in-name",type:"text",placeholder:"\u0418\u043c\u044f",name:"name",className:"popup__input popup__input_change_name",required:!0,minLength:"2",maxLength:"40"}),Object(d.jsx)("span",{className:"popup__input-error",id:"sing-in-name-error",children:b})]}),Object(d.jsxs)("section",{className:"popup__input-element",children:[Object(d.jsx)("input",{value:l||"",onChange:function(e){p(e.target.value),x(e.target.validationMessage)},id:"sing-in-description",type:"text",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",name:"description",className:"popup__input popup__input_change_description",required:!0,minLength:"2",maxLength:"200"}),Object(d.jsx)("span",{className:"popup__input-error",id:"sing-in-description-error",children:g})]})]})};var k=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],i=n[1],s=c.a.useState(""),o=Object(r.a)(s,2),u=o[0],l=o[1];return Object(d.jsx)(N,{onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:a}),i("")},buttonText:"".concat(e.saving?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"add-avatar",isOpen:e.isOpen,closePopup:e.closePopup,children:Object(d.jsxs)("section",{className:"popup__input-element",children:[Object(d.jsx)("input",{value:a||"",onChange:function(e){i(e.target.value),l(e.target.validationMessage)},id:"avatar-url",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"avatar",className:"popup__input popup__input_change_avatar",required:!0}),Object(d.jsx)("span",{className:"popup__input-error",id:"avatar-url-error",children:u})]})})};var y=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],i=n[1],s=c.a.useState(""),o=Object(r.a)(s,2),u=o[0],l=o[1],p=c.a.useState(""),j=Object(r.a)(p,2),h=j[0],m=j[1],b=c.a.useState(""),_=Object(r.a)(b,2),f=_[0],O=_[1];return Object(d.jsxs)(N,{onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:u}),i(""),l("")},buttonText:"".concat(e.saving?"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"),title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-card",isOpen:e.isOpen,closePopup:e.closePopup,children:[Object(d.jsxs)("section",{className:"popup__input-element",children:[Object(d.jsx)("input",{value:a||"",onChange:function(e){i(e.target.value),m(e.target.validationMessage)},id:"sing-in-place",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"place",className:"popup__input popup__input_change_name-card",required:!0,minLength:"2",maxLength:"30"}),Object(d.jsx)("span",{className:"popup__input-error",id:"sing-in-place-error",children:h})]}),Object(d.jsxs)("section",{className:"popup__input-element",children:[Object(d.jsx)("input",{value:u||"",onChange:function(e){l(e.target.value),O(e.target.validationMessage)},id:"sing-in-url",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"url",className:"popup__input popup__input_change_src",required:!0}),Object(d.jsx)("span",{className:"popup__input-error",id:"sing-in-url-error",children:f})]})]})};var S=function(e){return Object(d.jsx)(N,{onSubmit:function(t){t.preventDefault(),e.onRemoveCard()},buttonText:"".concat(e.saving?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430"),title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete-card",isOpen:e.isOpen,closePopup:e.closePopup})};var P=function(e){return Object(d.jsx)("section",{className:"popup popup_type_image ".concat(e.cardLink?"popup_is-opened":""),children:Object(d.jsxs)("div",{className:"popup__photo-container",children:[Object(d.jsx)("button",{onClick:e.closePopup,"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0444\u043e\u0442\u043e",type:"button",className:"popup__exit-see-photo"}),Object(d.jsx)("img",{src:"".concat(e.cardLink),alt:"".concat(e.cardName),className:"popup__image-see-photo"}),Object(d.jsx)("h2",{className:"popup__text-see-photo",children:e.cardName})]})})},L=n(22),T=n(23),E=new(function(){function e(t){Object(L.a)(this,e),this.url=t.url,this.authorization=t.auth}return Object(T.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getProfileData",value:function(){var e=this;return fetch("".concat(this.url,"/users/me"),{headers:{authorization:this.authorization,method:"GET"}}).then((function(t){return e._getResponseData(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.url,"/cards"),{headers:{authorization:this.authorization,method:"GET"}}).then((function(t){return e._getResponseData(t)}))}},{key:"profileRedact",value:function(e){var t=this;return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:{authorization:this.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._getResponseData(e)}))}},{key:"cardCreate",value:function(e){var t=this;return fetch("".concat(this.url,"/cards"),{method:"POST",headers:{authorization:this.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._getResponseData(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return t?fetch("".concat(this.url,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this.authorization}}).then((function(e){return n._getResponseData(e)})):fetch("".concat(this.url,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this.authorization}}).then((function(e){return n._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this.authorization}}).then((function(e){return t._getResponseData(e)}))}},{key:"avatarRedact",value:function(e){var t=this;return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._getResponseData(e)}))}}]),e}())({url:"https://nomoreparties.co/v1/cohort-27",auth:"947e1a41-7fdd-411e-be19-4441fbe7ac08"}),w=n(25),D=["component"],R=function(e){var t=e.component,n=Object(w.a)(e,D);return Object(d.jsx)(u.b,{children:function(){return n.loggedIn?Object(d.jsx)(t,Object(O.a)({},n)):Object(d.jsx)(u.a,{to:"./sign-in"})}})},z="https://auth.nomoreparties.co",I=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.statusText))},A=n.p+"static/media/error.d4ce2a26.svg",M=n.p+"static/media/logined.a9eb6caf.svg";var q=function(e){return Object(d.jsx)("section",{className:"popup ".concat(e.isOpen?"popup_is-opened":""),children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{onClick:e.closePopup,"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e",type:"button",className:"popup__exit"}),Object(d.jsx)("img",{src:"".concat(e.isRegister?M:A),alt:"\u0438\u043d\u0434\u0438\u043a\u0430\u0442\u043e\u0440 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",className:"popup__logined"}),Object(d.jsx)("h2",{className:"popup__text-logined",children:"".concat(e.isRegister?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")})]})})};var J=function(){var e=c.a.useState([]),t=Object(r.a)(e,2),n=t[0],i=t[1],s=c.a.useState({name:"",abaut:"",avatar:"",_id:""}),p=Object(r.a)(s,2),m=p[0],f=p[1],O=c.a.useState(!1),g=Object(r.a)(O,2),N=g[0],L=g[1],T=c.a.useState(!1),w=Object(r.a)(T,2),D=w[0],A=w[1],M=c.a.useState(!1),J=Object(r.a)(M,2),U=J[0],F=J[1],B=c.a.useState(null),G=Object(r.a)(B,2),H=G[0],K=G[1],Q=c.a.useState({name:"",link:""}),V=Object(r.a)(Q,2),W=V[0],X=V[1],Y=c.a.useState(!1),Z=Object(r.a)(Y,2),$=Z[0],ee=Z[1];function te(){A(!1),L(!1),F(!1),me(!1),K(null),X({name:"",link:""})}c.a.useEffect((function(){E.getProfileData().then((function(e){e&&f(e)})).catch((function(e){return console.log(e)}))}),[]),c.a.useEffect((function(){var e=function(e){"Escape"===e.key&&te()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]),c.a.useEffect((function(){E.getInitialCards().then((function(e){i(e)})).catch((function(e){return console.log(e)}))}),[]);var ne=c.a.useState(!1),ae=Object(r.a)(ne,2),ce=ae[0],ie=ae[1],se=c.a.useState({_id:"",email:""}),oe=Object(r.a)(se,2),re=oe[0],ue=oe[1],le=Object(u.g)();function pe(){var e,t=localStorage.getItem("jwt");localStorage.getItem("jwt")&&(e=t,fetch("".concat(z,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(I)).then((function(e){e&&(ue({_id:e.data._id,email:e.data.email}),ie(!0))})).catch((function(e){me(!0),Oe(!1),console.log(e)}))}Object(a.useEffect)((function(){!0===ce&&le.push("/")}),[ce,le]),Object(a.useEffect)((function(){pe()}),[]);var de=c.a.useState(!1),je=Object(r.a)(de,2),he=je[0],me=je[1],be=c.a.useState(!1),_e=Object(r.a)(be,2),fe=_e[0],Oe=_e[1];return Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)(h.Provider,{value:m,children:[Object(d.jsxs)(u.d,{children:[Object(d.jsxs)(u.b,{path:"/sign-in",children:[Object(d.jsx)(j,{children:Object(d.jsx)(l.c,{to:"/sign-up",className:"menu__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(d.jsx)(x,{onLogin:function(e){(function(e){var t=e.password,n=e.email;return fetch("".concat(z,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:n})}).then(I)})({password:e.password,email:e.email}).then((function(e){e.token&&(localStorage.setItem("jwt",e.token),pe(),le.push("/"))})).catch((function(e){me(!0),Oe(!1),console.log(e)}))}})]}),Object(d.jsxs)(u.b,{path:"/sign-up",children:[Object(d.jsx)(j,{children:Object(d.jsx)(l.c,{to:"/sign-in",className:"menu__link",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(d.jsx)(v,{onRegister:function(e){(function(e){var t=e.password,n=e.email;return fetch("".concat(z,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:n})}).then(I)})({password:e.password,email:e.email}).then((function(e){e&&(me(!0),Oe(!0),le.push("/sign-in"))})).catch((function(e){me(!0),Oe(!1),console.log(e)}))}})]}),Object(d.jsx)(R,{path:"/",loggedIn:ce,initialCards:n,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===m._id}));E.changeLikeCardStatus(e._id,t).then((function(t){i((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:K,"\u0441ardClick":function(e){X(e)},onEditProfile:function(){A(!0)},onAddPlace:function(){F(!0)},onEditAvatar:function(){L(!0)},singOut:function(){localStorage.removeItem("jwt")},userMail:re,component:b})]}),Object(d.jsx)(_,{}),Object(d.jsx)(q,{isOpen:he,isRegister:fe,closePopup:te}),Object(d.jsx)(C,{saving:$,onUpdateUser:function(e){ee(!0),E.profileRedact(e).then((function(e){f(e),A(!1)})).catch((function(e){return console.log(e)})).finally((function(){ee(!1)}))},isOpen:D,closePopup:te}),Object(d.jsx)(y,{saving:$,onAddPlace:function(e){ee(!0),E.cardCreate(e).then((function(e){i([e].concat(Object(o.a)(n))),F(!1)})).catch((function(e){return console.log(e)})).finally((function(){ee(!1)}))},isOpen:U,closePopup:te}),Object(d.jsx)(k,{saving:$,onUpdateAvatar:function(e){ee(!0),E.avatarRedact(e).then((function(e){f(e),L(!1)})).catch((function(e){return console.log(e)})).finally((function(){ee(!1)}))},isOpen:N,closePopup:te}),Object(d.jsx)(S,{saving:$,onRemoveCard:function(){ee(!0),E.deleteCard(H._id).then((function(){i((function(e){return e.filter((function(e){return e._id!==H._id}))})),K(!1)})).catch((function(e){return console.log(e)})).finally((function(){ee(!1)}))},isOpen:H,closePopup:te}),Object(d.jsx)(P,{cardName:W.name,cardLink:W.link,closePopup:te})]})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(J,{})})}),document.getElementById("root")),U()}},[[37,1,2]]]);
//# sourceMappingURL=main.42522f85.chunk.js.map