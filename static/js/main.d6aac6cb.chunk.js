(this.webpackJsonpbirthday=this.webpackJsonpbirthday||[]).push([[0],{17:function(e,c,i){},18:function(e,c,i){},27:function(e,c,i){},35:function(e,c,i){"use strict";i.r(c);var t=i(1),n=i.n(t),s=i(19),r=i.n(s),j=(i(26),i(27),i(9)),a=i(7),d=i(0);var o=function(){return Object(d.jsxs)("nav",{className:"navbar navbar-dark bg-dark",children:[Object(d.jsx)("li",{className:"",children:Object(d.jsx)(a.b,{to:"/Home",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/Idea",children:"Idea"})}),Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/event",children:" event"})}),Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/YourFamily",children:" your family"})}),Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/contact",children:"contact"})}),Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/Interface",children:"Interface"})}),Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/Login",children:"Login"})})]})},b=i(15),l=i.n(b),p=i(21),g=(i(17),function(e){var c=e.title,i=e.calories,t=e.img,n=e.ingredients;return Object(d.jsxs)("div",{className:"recipe",children:[Object(d.jsx)("h1",{children:c}),Object(d.jsx)("ol",{children:n.map((function(e){return Object(d.jsx)("li",{children:e.text})}))}),Object(d.jsxs)("p",{children:["calories: ",i.toFixed(2)]}),Object(d.jsx)("img",{src:t,alt:" ",className:"img"})]})}),u=function(){var e=Object(t.useState)([]),c=Object(j.a)(e,2),i=c[0],n=c[1],s=Object(t.useState)(""),r=Object(j.a)(s,2),a=r[0],o=r[1],b=Object(t.useState)("chicken"),u=Object(j.a)(b,2),m=u[0],h=u[1];Object(t.useEffect)((function(){Object(p.a)(l.a.mark((function e(){var c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(m,"&app_id=").concat("4dde2438","&app_key=").concat("d3e78673e07087e565711dad3eb62473"));case 2:return c=e.sent,e.next=5,c.json();case 5:i=e.sent,n(i.hits);case 7:case"end":return e.stop()}}),e)})))()}),[m]);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(a),o("")},className:"search-form",children:[Object(d.jsx)("input",{type:"text",value:a,onChange:function(e){o(e.target.value)},className:"search-bar"}),Object(d.jsx)("button",{className:"search-but",type:"submit",children:"Search "})]}),Object(d.jsx)("div",{className:"recipes",children:i.map((function(e){return Object(d.jsx)(g,{title:e.recipe.label,calories:e.recipe.calories,img:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})},m=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"test Idea"})})},h=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"test Event"})})},x=i(2),O=(i(18),function(e){var c=e.images,i=e.price,t=e.yourGift;return Object(d.jsxs)("div",{className:"cardCon",children:[Object(d.jsx)("img",{src:c,alt:" ",className:"imgSize"}),Object(d.jsxs)("p",{className:"fontSize",children:[" ","".concat(i,"$ get your discount 10%  ").concat(t),"  "]}),Object(d.jsx)("button",{className:"btnBooking",children:"add to the cart"})]})}),f=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Login"}),Object(d.jsx)("input",{type:"text"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"checkbox"}),Object(d.jsx)("p",{children:"You agree to all terms "})]})]})},v=[{id:1,img:"/img/001.jpg",price:20,discount:.1,yourGift:"15 Euro"},{id:2,img:"/img/002.jpg",price:22,discount:.1},{id:3,img:"/img/003.jpg",price:23,discount:.1},{id:4,img:"/img/004.jpg",price:20,discount:.1},{id:5,img:"/img/005.jpg",price:20,discount:.1},{id:6,img:"/img/006.jpg",price:20,discount:.1},{id:7,img:"/img/007.jpg",price:20,discount:.1},{id:8,img:"/img/008.jpg",price:20,discount:.1},{id:9,img:"/img/009.jpg",price:20,discount:.1},{id:10,img:"/img/010.jpg",price:20,discount:.1},{id:11,img:"/img/011.jpg",price:20,discount:.1},{id:12,img:"/img/012.jpg",price:20,discount:.1},{id:13,img:"/img/013.jpg",price:20,discount:.1},{id:14,img:"/img/014.jpg",price:20,discount:.1},{id:15,img:"/img/015.jpg",price:20,discount:.1},{id:16,img:"/img/016.jpg",price:20,discount:.1},{id:17,img:"/img/017.jpg",price:20,discount:.1},{id:18,img:"/img/018.jpg",price:20,discount:.1},{id:19,img:"/img/019.jpg",price:20,discount:.1},{id:20,img:"/img/020.jpg",price:20,discount:.1}];var y=function(){var e=Object(t.useState)(v),c=Object(j.a)(e,1)[0];return Object(d.jsxs)("div",{children:[Object(d.jsx)(o,{}),Object(d.jsxs)(x.a,{path:"/home",exact:!0,children:["      ",Object(d.jsx)(u,{}),"            "]}),Object(d.jsxs)(x.a,{path:"/Interface",exact:!0,children:[c.map((function(e){return Object(d.jsx)(O,{images:e.img,priceA:e.price,yourGift:e.yourGift})})),"     "]}),Object(d.jsxs)(x.a,{path:"/Idea",exact:!0,children:["      ",Object(d.jsx)(m,{}),"            "]}),Object(d.jsxs)(x.a,{path:"/Event",exact:!0,children:["     ",Object(d.jsx)(h,{}),"           "]}),Object(d.jsxs)(x.a,{path:"/Login",exact:!0,children:["     ",Object(d.jsx)(f,{}),"           "]})]})};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(a.a,{children:Object(d.jsx)(y,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d6aac6cb.chunk.js.map