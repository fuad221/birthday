(this.webpackJsonpbirthday=this.webpackJsonpbirthday||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},27:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),s=c(19),r=c.n(s),a=(c(26),c(27),c(8)),j=c(6),d=c(0);var o=function(){return Object(d.jsxs)("nav",{className:"navbar navbar-dark bg-dark",children:[Object(d.jsx)("li",{className:"",children:Object(d.jsx)(j.b,{to:"/FoodFetch",children:"FoodFetch"})}),Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{to:"/Idea",children:"Idea"})}),Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{to:"/event",children:" event"})}),Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{to:"/YourFamily",children:" your family"})}),Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{to:"/contact",children:"contact"})}),Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{to:"/Interface",children:"Interface"})}),Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{to:"/Login",children:"Login"})}),Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{to:"/Login",children:"LoginForm"})})]})},b=c(15),l=c.n(b),m=c(21),p=(c(17),function(e){var t=e.title,c=e.calories,i=e.img,n=e.ingredients;return Object(d.jsxs)("div",{className:"recipe",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)("ol",{children:n.map((function(e){return Object(d.jsx)("li",{children:e.text})}))}),Object(d.jsxs)("p",{children:["calories: ",c.toFixed(2)]}),Object(d.jsx)("img",{src:i,alt:" ",className:"img"})]})}),h=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(""),r=Object(a.a)(s,2),j=r[0],o=r[1],b=Object(i.useState)("chicken"),h=Object(a.a)(b,2),u=h[0],g=h[1];Object(i.useEffect)((function(){Object(m.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(u,"&app_id=").concat("4dde2438","&app_key=").concat("d3e78673e07087e565711dad3eb62473"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c.hits);case 7:case"end":return e.stop()}}),e)})))()}),[u]);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g(j),o("")},className:"search-form",children:[Object(d.jsx)("input",{type:"text",value:j,onChange:function(e){o(e.target.value)},className:"search-bar"}),Object(d.jsx)("button",{className:"search-but",type:"submit",children:"Search "})]}),Object(d.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(d.jsx)(p,{title:e.recipe.label,calories:e.recipe.calories,img:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})},u=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"test Idea"})})},g=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"test Event"})})},x=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"You can contact us via the following address: "}),Object(d.jsx)("p",{children:"BahnhofStra\xdfe 20"}),Object(d.jsx)("p",{children:"22097 Hamburg"})]})},O=c(2),f=(c(18),function(e){var t=e.images,c=e.price,i=e.yourGift;return Object(d.jsxs)("div",{className:"cardCon",children:[Object(d.jsx)("img",{src:t,alt:" ",className:"imgSize"}),Object(d.jsxs)("p",{className:"fontSize",children:[" ","".concat(c,"$ get your discount 10%  ").concat(i),"  "]}),Object(d.jsx)("button",{className:"btnBooking",children:"add to the cart"})]})}),v=function(e){e.Login,e.error;var t=Object(i.useState)({name:"",email:"",password:""}),c=Object(a.a)(t,2);c[0],c[1];return Object(d.jsx)("form",{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Login"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"name"}),Object(d.jsx)("input",{type:"text",id:"name"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{}),Object(d.jsx)("input",{type:"email",id:"email"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("input",{type:"password",name:"password",id:"password"})]}),Object(d.jsx)("input",{type:"submit",value:"LOGIN"})]})})},y=function(){var e=Object(i.useState)({name:"",email:""}),t=Object(a.a)(e,2),c=t[0],n=(t[1],Object(i.useState)("")),s=Object(a.a)(n,2),r=s[0],j=(s[1],function(e){console.log(e)});return Object(d.jsx)("div",{children:""!=c.email?Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{children:["Welcome, ",Object(d.jsx)("span",{children:c.name})]}),Object(d.jsx)("button",{children:"Logout"})]}):Object(d.jsx)(v,{Login:j,error:r})})},w=[{id:1,img:"https://images-gmi-pmc.edge-generalmills.com/99d8ae9a-737f-491c-a7f7-34b014e5682c.jpg",price:210,discount:.9,yourGift:"77 Euro"},{id:2,img:"https://envato-shoebox-0.imgix.net/9969/b748-ba9d-4fb6-8635-9dbeb5ca4f72/brth4_b268.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=015b2517a4563f68c0d143ba6923a830",price:22,discount:.1,yourGift:"77 Euro"},{id:3,img:"https://images-gmi-pmc.edge-generalmills.com/aa2baf56-8316-4e9a-9407-557853377f2a.jpg",price:23,discount:.1},{id:4,img:"https://cdn75.picsart.com/185632312000202.jpg?type=webp&to=min&r=640",price:20,discount:.1},{id:5,img:"/img/005.jpg",price:20,discount:.1},{id:6,img:"/img/006.jpg",price:20,discount:.1},{id:7,img:"/img/007.jpg",price:20,discount:.1},{id:8,img:"/img/008.jpg",price:20,discount:.1},{id:9,img:"/img/009.jpg",price:20,discount:.1},{id:10,img:"/img/010.jpg",price:20,discount:.1},{id:11,img:"/img/011.jpg",price:20,discount:.1},{id:12,img:"/img/012.jpg",price:20,discount:.1},{id:13,img:"/img/013.jpg",price:20,discount:.1},{id:14,img:"/img/014.jpg",price:20,discount:.1},{id:15,img:"/img/015.jpg",price:20,discount:.1},{id:16,img:"/img/016.jpg",price:20,discount:.1},{id:17,img:"/img/017.jpg",price:20,discount:.1},{id:18,img:"/img/018.jpg",price:20,discount:.1},{id:19,img:"/img/019.jpg",price:20,discount:.1},{id:20,img:"/img/020.jpg",price:20,discount:.1}];var F=function(){var e=Object(i.useState)(w),t=Object(a.a)(e,1)[0];return console.log(t[0].img),Object(d.jsxs)("div",{children:[Object(d.jsx)(o,{}),Object(d.jsxs)(O.a,{path:"/FoodFetch",exact:!0,children:["      ",Object(d.jsx)(h,{}),"            "]}),Object(d.jsx)(O.a,{path:"/Interface",exact:!0,children:t.map((function(e){return Object(d.jsx)(f,{images:e.img,priceA:e.price,yourGift:e.yourGift})}))}),Object(d.jsxs)(O.a,{path:"/Idea",exact:!0,children:["      ",Object(d.jsx)(u,{}),"            "]}),Object(d.jsxs)(O.a,{path:"/Event",exact:!0,children:["     ",Object(d.jsx)(g,{}),"           "]}),Object(d.jsxs)(O.a,{path:"/Contact",exact:!0,children:[Object(d.jsx)("img",{src:"https://mediagen.captureone.com/media/30dlkax1/capture-one-raw-photo-editor-raw-edited-a-b.png?width=1500&upscale=false"}),Object(d.jsx)(x,{}),"         "]}),Object(d.jsxs)(O.a,{path:"/Login",exact:!0,children:["     ",Object(d.jsx)(y,{}),"           "]}),Object(d.jsxs)(O.a,{path:"/LoginForm",exact:!0,children:[" ",Object(d.jsx)(v,{}),"       "]})]})};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(j.a,{children:Object(d.jsx)(F,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.f029e8be.chunk.js.map