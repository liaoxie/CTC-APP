import Vue from "vue";
import VueRouter from "vue-router";
// import My from "../views/Home.vue";

Vue.use(VueRouter);


import mine from "./mine/index.js" ;


export default new VueRouter({
  routes:[
    mine
  ]
})


