!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var o=function(){document.getElementById("menu-contact").innerHTML="<div>Rice, Beans, Potatoes</div>"};var i=function(){document.getElementById("menu-contact").innerHTML="<div>contact us on: bellomsean@gmail.com</div>"};(()=>{let n=document.getElementById("content");n.innerHTML+='<div class="container-fluid">\n    <section class="search-form">\n        <div class="logo">\n            <a href="#"><img src="img/Screenshot from 2019-08-07 06-57-02.png" alt="Allmenus.com"></a>\n        </div>\n        <div class="form-container">\n            <input class="form-control" type="text" placeholder="Enter Your Address, City, Zip Code">\n            <button class="btn btn-md btn-block mt-2 mb-3">Find Menus</button>\n        </div>\n    </section>\n    <section class="link">\n        <div>\n            <a href="#" id="menu-btn">Menu</a> | <a href="#" id="contact-btn">Contact</a>\n            <div id="menu-contact">Rice, Beans, Potatoes</div>\n        </div>\n    </section>\n    <section class="menus row justify-content-center" >\n        <h2 class="h2">Browse restaurant menus in top cities</h2>\n        <div class="flex-display"></div>\n        <div><a href="#" class="col-md-3"><img src="img/los.png" alt=""></a></div>\n        <div><a href="#" class="col-md-3"><img src="img/san.png" alt=""></a></div>\n        <div><a href="#" class="col-md-3"><img src="img/san.png" alt=""></a></div>\n    </section>\n</div>'})(),document.addEventListener("click",function(n){"menu-btn"==n.target.id?o():"contact-btn"==n.target.id&&i()})}]);