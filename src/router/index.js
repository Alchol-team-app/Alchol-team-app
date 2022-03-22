import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Postform from "@/views/Postform.vue"
import Browsing_Page from "@/views/Browsing_Page.vue"
import Cocktail_Postform from "@/views/Cocktail_Postform.vue"
import Cocktail_Browsing from "@/views/Cocktail_Browsing.vue"
import Login from "../views/Login.vue"
import Map from "@/components/Map.vue"
const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },

  {
    path: "/postform",
    name: "Postform",
    component: Postform,
  },
  {
    path: "/browsingpage/:id",
    name: "Browsing_Page",
    component: Browsing_Page,
  },
  {
    path: "/cocktail_postform",
    name: "Cocktail_Postform",
    component: Cocktail_Postform,
  },
  {
    path: "/cocktail_browsing",
    name: "Cocktail_Browsing",
    component: Cocktail_Browsing,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/map",
    name: "Map",
    component: Map,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
