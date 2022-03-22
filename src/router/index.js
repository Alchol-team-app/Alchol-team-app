import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import Postform from "@/views/Postform.vue"
import Browsing_Page from "@/views/Browsing_Page.vue"
import Cocktail_Postform from "@/views/Cocktail_Postform.vue"
import Cocktail_Browsing from "@/views/Cocktail_Browsing.vue"
import MyPage from "@/views/MyPage"
import Logout from "@/views/Logout"

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",

    component: () => import("@/views/About.vue"),
  },
  {
    path: "/postform",
    name: "Postform",
    component: Postform,
  },
  {
    path: "/browsingpage",
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
    path: "/mypage",
    name: "MyPage",
    component: MyPage,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
