(window.webpackJsonp=window.webpackJsonp||[]).push([[235,4,6,7,52,55,232],{308:function(e,t,n){"use strict";n.r(t);n(311);var r=n(9),component=Object(r.a)({},(function(){return(0,this._self._c)("p",{staticClass:"headline text-center text-primary-dark tracking-widest leading-loose"},[this._t("default")],2)}),[],!1,null,"0bce659b",null);t.default=component.exports},309:function(e,t,n){var content=n(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(84).default)("70d947f6",content,!0,{sourceMap:!1})},310:function(e,t,n){var content=n(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(84).default)("bf1d0c12",content,!0,{sourceMap:!1})},311:function(e,t,n){"use strict";n(309)},312:function(e,t,n){var r=n(83)((function(i){return i[1]}));r.push([e.i,'/*purgecss start ignore*/\n.headline[data-v-0bce659b]{\n  overflow:hidden;\n  text-align:center\n}\n.headline[data-v-0bce659b]:after,.headline[data-v-0bce659b]:before{\n  background-color:#0D6F0D;\n  content:"";\n  display:inline-block;\n  height:3px;\n  position:relative;\n  vertical-align:middle;\n  width:5%\n}\n.headline[data-v-0bce659b]:before{\n  right:.5em;\n  margin-left:-50%\n}\n.headline[data-v-0bce659b]:after{\n  left:.5em;\n  margin-right:-50%\n}\n\n/*purgecss end ignore*/',""]),r.locals={},e.exports=r},313:function(e,t,n){e.exports=n.p+"img/instagram-green.2a8d076.svg"},314:function(e,t,n){"use strict";n(310)},315:function(e,t,n){var r=n(83)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.square-img[data-v-6428f878]{\n  aspect-ratio:1/1\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},316:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},317:function(e,t,n){"use strict";n.r(t);var r=n(10),o=(n(52),n(209),n(34),n(51),n(21)),l={props:{itemsAmount:{type:Number,default:8}},data:function(){return{posts:[],INSTAGRAM_PROFILE_URL:o.b}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("https://62d041881cc14f8c08879728.mockapi.io/api/v1/instagram");case 3:n=t.sent,e.posts=n.data.slice(0,e.itemsAmount).map((function(e){return{id:e.id,img_src:e.thumbnail_url?e.thumbnail_url:e.media_url,permalink:e.permalink}})),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},c=(n(314),n(9)),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"text-center mx-4 md:mx-16 pb-16 md:pb-24"},[t("Headline",[e._v("\n    SÍGUENOS EN INSTAGRAM\n  ")]),e._v(" "),t("div",{staticClass:"my-8 gap-4 grid grid-rows-4 grid-cols-2 md:grid-rows-2 md:grid-cols-4"},e._l(e.posts,(function(e){return t("a",{key:e.id,staticClass:"cursor-pointer",attrs:{href:e.permalink,target:"_blank"}},[t("img",{staticClass:"square-img object-cover",attrs:{src:e.img_src,alt:"Imagen de instagram"}})])})),0),e._v(" "),t("a",{staticClass:"text-primary-dark",attrs:{href:e.INSTAGRAM_PROFILE_URL,target:"_blank"}},[t("img",{staticClass:"inline",attrs:{src:n(313),alt:"Icono de Instagram"}}),e._v(" "),t("p",{staticClass:"inline"},[e._v("\n      Síguenos en Instagram\n    ")])])],1)}),[],!1,null,"6428f878",null);t.default=component.exports;installComponents(component,{Headline:n(308).default})},323:function(e,t,n){"use strict";n.r(t);var r={emits:["click"],methods:{onClick:function(){this.$emit("click")}}},o=n(9),component=Object(o.a)(r,(function(){var e=this;return(0,e._self._c)("button",{staticClass:"bg-primary text-white px-10 py-4",on:{click:e.onClick}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},325:function(e,t,n){"use strict";n.r(t);var r=n(9),component=Object(r.a)({},(function(){var e=this._self._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}})])}),[],!1,null,null,null);t.default=component.exports},326:function(e,t,n){"use strict";n.r(t);var r=n(9),component=Object(r.a)({},(function(){var e=this._self._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"}})])}),[],!1,null,null,null);t.default=component.exports},329:function(e,t,n){e.exports=n.p+"img/cover.d8d7352.webp"},353:function(e,t,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(84).default)("2ba98880",content,!0,{sourceMap:!1})},362:function(e,t,n){"use strict";n.r(t);var r={props:{question:{type:String,required:!0},answer:{type:String,required:!0}},data:function(){return{showAnswer:!1}}},o=n(9),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("article",{staticClass:"w-full"},[t("div",{staticClass:"px-6 md:px-8 py-4 bg-light-green w-full flex justify-between cursor-pointer hover:bg-hover-green",on:{click:function(t){e.showAnswer=!e.showAnswer}}},[t("h3",{staticClass:"text-primary-dark font-semibold text-xl"},[e._v("\n      "+e._s(e.question)+"\n    ")]),e._v(" "),t("div",{staticClass:"text-primary-dark"},[e.showAnswer?t("outline-chevron-up-icon",{staticClass:"w-8 h-8"}):t("outline-chevron-down-icon",{staticClass:"w-8 h-8"})],1)]),e._v(" "),e.showAnswer?t("p",{staticClass:"mx-6 md:mx-10 my-4",domProps:{innerHTML:e._s(e.answer)}}):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OutlineChevronDownIcon:n(325).default,OutlineChevronUpIcon:n(326).default})},368:function(e,t,n){"use strict";n(353)},369:function(e,t,n){var r=n(83),o=n(316),l=n(329),c=r((function(i){return i[1]})),d=o(l);c.push([e.i,"/*purgecss start ignore*/\n.header-image[data-v-2ee3cc34]{\n  background-image:url("+d+");\n  background-position:50%;\n  background-repeat:no-repeat;\n  background-size:cover\n}\n\n/*purgecss end ignore*/",""]),c.locals={},e.exports=c},393:function(e,t,n){"use strict";n.r(t);n(368);var r=n(9),o=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("header",{staticClass:"header-image flex justify-center items-center"},[t("div",{staticClass:"text-white text-center max-w-2xl my-24"},[t("h1",{staticClass:"font-semibold text-5xl"},[e._v("\n      FAQ\n    ")]),e._v(" "),t("p",{staticClass:"text-xl mt-8"},[e._v("\n      Todo lo que tienes que saber para tu visita.\n    ")])])])}],!1,null,"2ee3cc34",null).exports,l={data:function(){return{faqs:[{question:"1. ¿Se pueden ver luciérnagas todo el año?",answer:"R. El avistamiento de luciérnagas solo se da durante la temporada de lluvias: segunda quincena de junio, julio y principios de agosto. Pero en Piedra Canteada la magia continúa los 365 días del año, con diferentes actividades para que vivas momentos inolvidables con tu familia o amigos."},{question:"2. ¿Hay límite de edad para entrar al parque o para el avistamiento de luciérnagas?",answer:"R. Piedra Canteada es un santuario para toda la familia, donde todos pueden disfrutar de las atracciones y actividades los 365 días del año."},{question:"3. ¿Cómo es el clima en Piedra Canteada?",answer:"R. Tenemos un clima templado y cálido casi todo el año, con días muy soleados. La temperatura baja por las noches, así que te recomendamos empacar un piyama y una chamarra calientitas. En la temporada de avistamiento la lluvia es protagonista, por lo que no debes olvidar un impermeable y calzado adecuado."},{question:"4. ¿Qué tipo de ropa debo utilizar?",answer:"R. Te recomendamos que todo lo que utilices sea muy cómodo, además de una chamarra, sudadera o rompe vientos para que disfrutes la lluvia o el frío. Tampoco olvides una gorra y bloqueador solar."},{question:"5. ¿En dónde puedo comer?",answer:"R. Dentro de Piedra Canteada podrás saborear de la sazón de nuestro restaurante, donde preparamos exquisitos platillos mexicanos con todas las medidas de higiene necesarias para cuidarte siempre. También puedes cocinar tus propios alimentos en nuestra zona de asaderos y comer al aire libre, mientras respiras la fragancia del bosque y disfrutas de las hermosas postales de nuestro paisaje."},{question:"6. ¿Dónde se encuentra Piedra Canteada?",answer:"R. Nuestro bosque mágico está ubicado en Nanacamilpa, Tlaxcala, un punto muy cercano y accesible desde la CDMX, Puebla e Hidalgo."},{question:"7. ¿Qué horarios tienen en el parque?",answer:"R. Día de campo: de 10 am a 7 pm.<br>Campamento: de 10 am a 12 de la tarde del día siguiente.<br>Cabañas: de 3 pm a 12 de la tarde del día siguiente."},{question:"8. ¿Qué actividades puedo hacer en el bosque?",answer:"R. La diversión en Piedra Canteada se vive los 365 días del año. Cuando no es temporada de luciérnagas puedes venir a respirar el aire puro de nuestro bosque mágico, hacer caminatas para conectar con la naturaleza, acampar con tus amigos o familia, deslizarte en la tirolesa, encender el asador para cocinar algo delicioso o disfrutar una noche inolvidable en una cabaña, al calor de la fogata."},{question:"9. ¿Puedo disfrutar Piedra Canteada con mi mascota?",answer:"R. Por el momento no somos Pet Friendly. El ecosistema en el que viven las luciérnagas es muy especial, las restricciones como bosque protegido y santuario no lo permiten."}]}}},c=Object(r.a)(l,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"flex flex-col space-y-4 max-w-3xl"},e._l(e.faqs,(function(e){return t("Question",{key:e.question,attrs:{question:e.question,answer:e.answer}})})),1)}),[],!1,null,null,null),d=c.exports;installComponents(c,{Question:n(362).default});var m={mixins:[n(190).a]},f=Object(r.a)(m,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"text-center"},[t("h2",{staticClass:"text-primary font-semibold text-3xl"},[e._v("\n    ¿No puede encontrar la respuesta?\n  ")]),e._v(" "),t("CallToActionButton",{staticClass:"mt-4",on:{click:e.sendWhatsappMessage}},[e._v("\n    Contáctanos\n  ")])],1)}),[],!1,null,null,null),v=f.exports;installComponents(f,{CallToActionButton:n(323).default});var h={components:{Header:o,Questions:d,ContactUs:v}},x=Object(r.a)(h,(function(){var e=this,t=e._self._c;return t("main",[t("Header"),e._v(" "),t("Questions",{staticClass:"mx-4 mt-16 md:mx-auto md:mt-24"}),e._v(" "),t("ContactUs",{staticClass:"mt-16 md:mx-16 md:mt-24"}),e._v(" "),t("Instagram",{staticClass:"mt-16 md:mx-16 md:mt-24"})],1)}),[],!1,null,null,null);t.default=x.exports;installComponents(x,{Instagram:n(317).default})}}]);