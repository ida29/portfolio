webpackJsonp([0],{"2i8S":function(t,e){},IEzc:function(t,e,i){t.exports=i.p+"static/img/dennis_ritchie.a37c8c5.png"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{attrs:{id:"menu"}},[t._m(0),t._v(" "),t._l(t.items,function(e){return i("li",{key:e.id},[i("div",{staticClass:"item center-align"},[i("router-link",{attrs:{to:e.path}},[t._v(t._s(e.val))])],1)])})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"center-align"},[e("img",{staticClass:"circle responsive-img",attrs:{src:i("Y3DS")}})])}]};var n={name:"App",components:{Menu:i("VU/8")({name:"Menu",data:function(){return{msg:"menu",items:[{id:1,val:"home",path:"/"},{id:2,val:"about",path:"/about"},{id:3,val:"works",path:"/works"}]}}},a,!1,function(t){i("ejgE")},"data-v-8d152818",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fulled",staticStyle:{height:"100%"}},[e("div",{staticClass:"row flex",staticStyle:{height:"100%"}},[e("div",{staticClass:"col s2",staticStyle:{height:"100%"}},[e("Menu")],1),this._v(" "),e("div",{staticClass:"col s10",staticStyle:{height:"100%"}},[e("div",{attrs:{id:"app"}},[e("transition",[e("router-view")],1)],1)])])])},staticRenderFns:[]};var c=i("VU/8")(n,r,!1,function(t){i("cGUl")},null,null).exports,l=i("/ocq"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"welcome center-align"},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("h2",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var u=i("VU/8")({name:"Welcome",data:function(){return{msg:"Welcome to my portfolio site!"}}},o,!1,function(t){i("Ngbz")},"data-v-6c4183e6",null).exports,d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about center-align"},[i("h1",[t._v("About")]),t._v(" "),i("h2",[t._v("About")]),t._v(" "),t._l(t.cards,function(e){return i("div",{key:e.id},[i("div",{staticClass:"col s12 m6 cards-container"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-content black-text"},[i("span",{staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),t._l(e.infos,function(e){return i("div",{key:e.id},[i("p",[t._v(t._s(e.val))])])})],2)])])])})],2)},staticRenderFns:[]};var v=i("VU/8")({name:"About",data:function(){return{msg:"About",cards:[{id:1,title:"基本情報",infos:[{id:1,val:"伊田 悠人(Yuto Ida)"},{id:3,val:"エンジニア"},{id:4,val:"芝浦工業大学 工学部 通信工学科 卒業"},{id:2,val:"1992年生まれ"}]},{id:2,title:"職務経歴",infos:[{id:1,val:"2015/04～現在 通信計測機メーカー"}]},{id:3,title:"趣味",infos:[{id:1,val:"漫画"},{id:2,val:"音楽"}]},{id:5,title:"✉️",infos:[{id:1,val:"y.ida898@gmail.com"}]}]}}},d,!1,function(t){i("2i8S")},"data-v-6a65bd30",null).exports,_={name:"Works",data:function(){return{show:!1,msg:"Works",cards:[{id:1,title:"yuruc",year:"2018",text:"C言語学習サイト(未完)",skill:"Ruby on Rails / heroku / jQuery / wandbox API / Ace(editor) / Materialize",img_src:i("IEzc"),link:"https://yuruc.herokuapp.com"},{id:2,title:"portfolio",year:"2019",text:"ポートフォリオサイトです。",skill:"Vue.js / vue-cli / github-pages / Materialize",img_src:i("Y3DS"),link:"https://ida29.github.io/portfolio/#/"}]}},computed:{reverseCards:function(){return this.cards.slice().reverse()}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"works center-align"},[i("h1",[t._v(t._s(t.msg))]),t._v(" "),i("h2",[t._v(t._s(t.msg))]),t._v(" "),t._l(t.reverseCards,function(e){return i("div",{key:e.id},[i("div",{staticClass:"col s12 m6"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-content black-text"},[i("span",{staticClass:"card-title"},[i("a",{attrs:{href:e.link}},[t._v(t._s(e.title))]),t._v(" ("+t._s(e.year)+")")]),t._v(" "),i("p",{attrs:{id:"info"}},[t._v(t._s(e.text))]),t._v(" "),i("p",[t._v(t._s(e.skill))])])])])])})],2)},staticRenderFns:[]};var m=i("VU/8")(_,p,!1,function(t){i("jGrz")},"data-v-05d6c5ce",null).exports;s.a.use(l.a);var f=new l.a({routes:[{path:"/",name:"Welcome",component:u},{path:"/about",name:"About",component:v},{path:"/works",name:"Works",component:m}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:f,components:{App:c},template:"<App/>"})},Ngbz:function(t,e){},Y3DS:function(t,e,i){t.exports=i.p+"static/img/frog.75b0361.png"},cGUl:function(t,e){},ejgE:function(t,e){},jGrz:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0086566205735cbc0af3.js.map