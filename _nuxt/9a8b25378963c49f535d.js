(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{345:function(t,e,n){"use strict";n.r(e);n(59);var l={layout:"dashboard",data:function(){return{tabs:null,id:null,petient:{name:[{firstName:"",lastName:""}]},person:{name:"John Doe",email:"mjohn@gmail.com",past_visits:15,upcoming_visits:3,informations:{Gender:"Female",Birthday:"Feb 24th, 2000",PhoneNumber:"902 300 3091",Address:"15 University ave",City:"Wolfville","Postal Code":"B4P 2R5",MemberStatus:"Active",RegisterdDate:"march 1st, 2020"},files:[{name:"Medical Pres",type:"PDF",size:125785}]}}},beforeMount:function(){this.id=this.$route.params.id},watch:{id:function(t){var e=this;console.log("asad"),this.$fireStore.collection("patients").doc(t).get().then((function(t){e.patient=t.data(),console.log(e.patient.name)}))}},computed:{breadcrumbsLinks:function(){return console.log("assistant_direction"),[{text:"Patients",herf:""},{text:this.person.name,herf:"view/id"}]}}},v=n(5),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{lg6:""}},[n("v-breadcrumbs",{attrs:{items:t.breadcrumbsLinks},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("fas fa-chevron-right")])]},proxy:!0}])})],1),t._v(" "),n("v-flex",{staticClass:"text-right mx-5",attrs:{lg5:""}},[n("v-btn",{staticClass:"mx-2",attrs:{outlined:"",color:"grey",icon:""}},[n("v-icon",[t._v("fas fa-print")])],1),t._v(" "),n("v-btn",{attrs:{to:"/patients/edit/"+t.id}},[n("v-icon",{staticClass:"mr-2",attrs:{color:"primary"}},[t._v("fas fa-edit")]),t._v("\n        Edit\n      ")],1)],1)],1),t._v(" "),n("v-layout",{staticClass:"ma-2",attrs:{row:"",wrap:"","justify-center":""}},[n("v-flex",{attrs:{lg9:""}},[n("v-container",[n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[n("v-flex",{staticClass:"pa-2",attrs:{lg4:""}},[n("v-card",{staticClass:"text-center py-5",attrs:{height:"300px"}},[n("v-avatar",[n("img",{attrs:{alt:"John",src:"https://randomuser.me/api/portraits/men/50.jpg"}})]),t._v(" "),n("v-list",[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v("\n                      "+t._s(t.person.name)+"\n                    ")]),t._v(" "),n("v-list-item-subtitle",[t._v("\n                      "+t._s(t.person.email)+"\n                    ")])],1)],1),t._v(" "),n("v-list-item",[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs6:""}},[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.person.past_visits))]),t._v(" "),n("v-list-item-subtitle",[t._v("Past")])],1)],1)],1),t._v(" "),n("v-flex",{attrs:{xs6:""}},[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.person.upcoming_visits))]),t._v(" "),n("v-list-item-subtitle",[t._v("Upcoming")])],1)],1)],1)],1)],1),t._v(" "),n("v-list-item",[n("v-btn",{attrs:{block:""}},[t._v("\n                    Send message\n                  ")])],1)],1)],1)],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{lg8:""}},[n("v-card",{staticClass:"pa-5",attrs:{height:"300px"}},[n("v-layout",{attrs:{row:"",wrap:"","justify-start":"","align-center":""}},t._l(t.person.informations,(function(e,l){return n("v-flex",{key:l,staticClass:"px-1",attrs:{lg4:""}},[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-subtitle",[t._v(t._s(l))]),t._v(" "),n("v-list-item-title",[t._v(t._s(e))])],1)],1),t._v(" "),n("v-divider",{staticClass:"mx-2"})],1)})),1)],1)],1)],1),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-flex",{staticClass:"ma-2"},[n("v-card",{staticClass:"pa-5",attrs:{height:"500px"}},[n("v-tabs",{model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[n("v-tab",[n("v-btn",[t._v("\n                    Upcoming\n                  ")])],1),t._v(" "),n("v-tab",[t._v("\n                  past\n                ")]),t._v(" "),n("v-tab",[t._v("\n                  Schedule\n                ")])],1),t._v("\n\n              "+t._s(t.tabs)+"\n\n              "),n("v-tabs-items",{model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[n("v-tab-item",{key:"0"},[t._v("\n                  Upcoming Page\n                ")]),t._v(" "),n("v-tab-item",{key:"1"},[t._v("\n                  Past Page\n                ")]),t._v(" "),n("v-tab-item",{key:"2"},[t._v("\n                  Schdule Page\n                ")])],1)],1)],1)],1)],1)],1),t._v(" "),n("v-flex",{attrs:{lg3:""}},[n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"my-2",attrs:{xs12:""}},[n("v-card",[n("v-card-title",[t._v("Notes")]),t._v(" "),n("v-divider"),t._v(" "),n("v-textarea",{staticClass:"ma-2",attrs:{filled:"","background-color":"grey lighten-4",value:"The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."}})],1)],1),t._v(" "),n("v-flex",{staticClass:"my-2",attrs:{xs12:""}},[n("v-card",[n("v-card-title",[t._v("Files")]),t._v(" "),n("v-list",t._l(t.person.files,(function(e,l){return n("v-list-item",{key:l,attrs:{link:"","two-line":""}},[n("v-list-item-icon",[n("v-icon",[t._v("fas fa-file")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(e.name))]),t._v(" "),n("v-list-item-subtitle",[t._v("\n                      "+t._s(e.size))])],1)],1)})),1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);