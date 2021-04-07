(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{264:function(e,t,n){var r;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},346:function(e,t,n){e.exports={slider:"slider__2JeE9",next:"next__1OQeZ",prev:"prev__3eB4n",sliderTrack:"sliderTrack__2EXSz",slide:"slide__sNqps"}},406:function(e,t,n){e.exports={content:"content__3JqX5",slider:"slider__IO_DY",slide:"slide__3nxSS",slideOdd:"slideOdd__1KDOs",slideContentWrap:"slideContentWrap__uLtyY",slideContent:"slideContent__3O8Jp",count:"count__3xSp2",title:"title__3GnJU",body:"body__2kZzi"}},598:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(47),i=n(24),a=n(406),l=n.n(a),c=n(37),s=n(201),u=n(264),f=n.n(u),d=n(346),p=n.n(d),h=n(48),m=n(52),v=function(e,t){return t>=0&&t<e.length},w=function(){return(w=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},y=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},b=function(e,t){if(t<0)return 0;for(var n=t;!v(e,n);)n--;return n},_=function(e){var t=window.innerWidth,n=e.sort((function(e,t){return e-t})).findIndex((function(e){return e>=t}));return-1!==n?e[n]:null},g=function(e,t,n,r){var o=t+n-Math.abs(r);return o>=n&&o<=e},S=function(e,t,n,r,o){var i,a,l=function(e,t,n,r){var o=y(t,2),i=o[0],a=o[1],l=y("left"===r?[i-n,i-1]:[a+1,a+n],2),c=l[0],s=l[1];return[b(e,c),b(e,s)]}(t,n,r,o),c=function(e,t){var n=y(t,2),r=n[0],o=n[1],i=e.slice(r,o+1);return{x:i[0].x,width:i.reduce((function(e,t){return e+t.width}),0)}}(t,l),s=(i=e.width,(a=c.width)>=i?0:Math.floor((i-a)/2)),u=-1*(c.x+c.width-e.width+s);return u>0&&(u=0),e.trackWidth-e.width<Math.abs(u)&&(u=-1*(e.trackWidth-e.width)),{currentSlide:l,offset:u}},x=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},E=r.memo((function(e){var t=r.useContext(h.a),n=r.useRef(null),o=x(r.useState(null),2),i=o[0],a=o[1],l=x(r.useState([]),2),c=l[0],s=l[1],u=x(r.useState(0),2),d=u[0],v=u[1],y=x(r.useState([0,0]),2),E=y[0],k=y[1],j=x(r.useState({slidesToScroll:1}),2),O=j[0],N=j[1],C=x(r.useState(0),2),T=C[0],W=C[1],z=e.children,P=e.parentClass,J=e.responsive;r.useEffect((function(){var e=function(e){W(e.timeStamp)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),r.useEffect((function(){var t=n.current;if(t){var r=t.querySelector("[data-slider-track]");if(r){var o={width:t.offsetWidth,trackWidth:r.scrollWidth};a(o);var i,l,c=[],u=0;r.childNodes.forEach((function(e){var t=e.offsetWidth;c.push({x:u,width:t}),u+=t})),N((i=function(e){var t={};return void 0!==e.slidesToScroll&&(t.slidesToScroll=e.slidesToScroll),t}(e),l=function(e){if(!e)return{};var t=_(Object.keys(e).map((function(e){return Object(m.toNumber)(e)})));return null!==t?e[t]:{}}(J),w(w(w({},{slidesToScroll:1}),i),l))),s(c),k(function(e,t,n){var r=t.findIndex((function(t){return g(e,t.x,t.width,n)})),o=t.reduce((function(t,r,o){return g(e,r.x,r.width,n)?o:t}),0);return[b(t,r),b(t,o)]}(o.width,c,d))}}}),[T]);var A=f()(p.a.slider,P,t),I=r.useCallback((function(e){if(i){var t=S(i,c,E,O.slidesToScroll,e);v(t.offset),k(t.currentSlide)}}),[i,E,d]);return r.createElement("div",{className:A,ref:n},r.createElement("div",{className:p.a.sliderTrack,"data-slider-track":!0,style:{transform:"translateX("+d+"px)"}},z),i&&function(e,t,n){return!(e>=t)&&n<0}(i.width,i.trackWidth,d)&&r.createElement("button",{className:p.a.prev,onClick:function(){return I("left")}}),i&&function(e,t,n){return!(e>=t)&&t+n>e}(i.width,i.trackWidth,d)&&r.createElement("button",{className:p.a.next,onClick:function(){return I("right")}}))})),k=r.memo((function(e){var t=r.useContext(h.a),n=e.children,o=e.parentClass,i=f()(p.a.slide,o,t);return r.createElement("div",{className:i},n)})),j=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((r=r.apply(e,t||[])).next())}))},O=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},N=["https://on-desktop.com/wps/World_The_ancient_city_of_Machu_Picchu_in_the_mountains_099543_.jpg","https://wallbox.ru/resize/1920x1080/wallpapers/main/201608/8d13ec8dc987c47.jpg","https://img1.goodfon.ru/wallpaper/nbig/5/93/zakat-gory-vodopad.jpg","https://fb.ru/media/i/3/8/1/3/9/2/i/381392.jpg","https://4.404content.com/1/41/74/622147877513462959/fullsize.jpg","https://img2.akspic.ru/image/131889-gorod-most-arhitektura-orientir-gorodskoj_pejzazh-3840x2160.jpg","https://izobrazhenie.net/photo/0-1/2544_288991092.jpg","https://www.chromethemer.com/download/hd-wallpapers/scottish-cliffs-3840x2160.jpg","https://theecology.net/wp-content/uploads/2019/05/post_5cc8ffd1a3cdf.jpg","https://i.artfile.ru/1920x1080_844367_[www.ArtFile.ru].jpg"],C=function(e){var t=Object(i.b)(),n=r.useContext(s.a).jsonPlaceholderService,o=Object(i.c)(c.d.getTotalCountOfPosts),a=Object(i.c)(c.d.makeGetCertainNumberOfPosts(11));return r.useEffect((function(){j(void 0,void 0,void 0,(function(){return O(this,(function(e){switch(e.label){case 0:return t(c.a.getPosts()),[4,n.deletePost(1)];case 1:return e.sent(),[2]}}))}))}),[]),r.useEffect((function(){return function(){t(c.a.resetState())}}),[]),r.createElement("div",{className:l.a.content},null!==o?r.createElement("h4",null,"Count of posts: ",o):null,a&&r.createElement("div",{className:l.a.slider},r.createElement(E,{slidesToScroll:3,responsive:{1024:{slidesToScroll:2},768:{slidesToScroll:1}}},a.map((function(e,t){var n,o=f()([l.a.slide,(n={},n[l.a.slideOdd]=t%2==0,n)]);return r.createElement(k,{key:e.id},r.createElement("div",{className:o},r.createElement("div",{className:l.a.slideContentWrap,style:{backgroundImage:"url("+N[+t.toString().slice(-1)]+")"}},r.createElement("div",{className:l.a.slideContent},r.createElement("span",{className:l.a.count},t+1," - ",a.length),r.createElement("span",{className:l.a.title},e.title),r.createElement("span",{className:l.a.body},e.body)))))})))))};t.default=function(e){return r.createElement(r.Fragment,null,r.createElement(o.Helmet,null,r.createElement("title",null,"Rest Api")),r.createElement("div",{className:"container"},r.createElement(C,null)))}}}]);