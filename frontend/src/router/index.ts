import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use( VueRouter );
const routes : Array<RouteConfig> = [
  {
    path : "/",
    alias : "/cars",
    name : "cars",
    component : () => import("../components/CarsList.vue")
  },
  {
    path : "/add",
    name : "add",
    component : () => import("../components/AddCar.vue")
  }
];
const router = new VueRouter( {
  mode : "history",
  base : process.env.BASE_URL,
  routes
} );
export default router;
