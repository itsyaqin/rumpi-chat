(this["webpackJsonprumpi-chat"]=this["webpackJsonprumpi-chat"]||[]).push([[0],{15:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),o=a(7),l=a.n(o),u=a(12),s=a(3),m=(a(21),a(1)),p=a.n(m),d=(a(22),a(26),a(13)),h=a(14);p.a.initializeApp({apiKey:"AIzaSyD1NFUn4f22mneGY1Z9eIvrWp1dna_iYR8",authDomain:"rumpi-chat-app.firebaseapp.com",databaseURL:"https://rumpi-chat-app.firebaseio.com",projectId:"rumpi-chat-app",storageBucket:"rumpi-chat-app.appspot.com",messagingSenderId:"187980907991",appId:"1:187980907991:web:b4da30b248272e72aa3792",measurementId:"G-WJSJPCB9HH"});var b=p.a.auth(),f=p.a.firestore();function v(){return r.a.createElement("section",{className:"signinPage"},r.a.createElement("button",{onClick:function(){var e=new p.a.auth.GoogleAuthProvider;b.signInWithPopup(e)}},"Sign in With Google"))}function E(){return b.currentUser&&r.a.createElement("button",{onClick:function(){return b.signOut()}},"Sign out")}function g(){var e=f.collection("messages"),t=e.orderBy("createdAt","desc").limit(25),a=Object(h.a)(t,{idField:"id"}),c=Object(s.a)(a,1)[0],i=Object(n.useState)(""),o=Object(s.a)(i,2),m=o[0],d=o[1],v=function(){var t=Object(u.a)(l.a.mark((function t(a){var n,r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=b.currentUser,r=n.uid,c=n.photoURL,t.next=4,e.add({text:m,createdAt:p.a.firestore.FieldValue.serverTimestamp(),uid:r,photoURL:c});case 4:d("");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=Object(n.useRef)();return Object(n.useEffect)((function(){E.current.scrollIntoView({behavior:"smooth"})})),r.a.createElement("div",{className:"chatroomPage"},r.a.createElement("div",{className:"chat-bubble"},c&&c.reverse().map((function(e){return r.a.createElement(w,{key:e.id,message:e})})),r.a.createElement("div",{ref:E})),r.a.createElement("form",{onSubmit:v},r.a.createElement("input",{value:m,onChange:function(e){return d(e.target.value)},placeholder:"Tulis pesan..."}),r.a.createElement("button",{type:"submit"},r.a.createElement("span",{role:"img","aria-label":""},"\ud83d\udcac"))))}function w(e){var t=e.message,a=t.text,n=t.uid,c=t.photoURL,i=n===b.currentUser.uid?" sender":"";return r.a.createElement("div",{className:"bubble".concat(i)},r.a.createElement("div",null,r.a.createElement("div",{className:"img-placeholder"},r.a.createElement("img",{src:c,alt:""}))),r.a.createElement("p",null,a))}var j=function(){var e=Object(d.a)(b),t=Object(s.a)(e,1)[0];return r.a.createElement("div",{className:"app"},r.a.createElement("header",{className:"app-header"},r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":""},"\ud83d\udc44")),r.a.createElement("h3",null,"Rumpi",r.a.createElement("span",null,"Chat")),r.a.createElement(E,null)),t?r.a.createElement(g,null):r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.f7d90981.chunk.js.map