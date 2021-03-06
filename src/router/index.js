import Vue from "vue";
import Router from "vue-router";
import Register from "@/components/Register";
import Contact from "@/components/Contact";
import Login from "@/components/Login";
import UserPage from "@/components/UserPage";
import Reminder from "@/components/Reminder";
import WrongPage from "@/components/WrongPage";

Vue.use(Router);

export default new Router({
  base: process.env.NODE_ENV === "production" ? "/login-vue" : "",
  mode: "history",
  routes: [
    {
      name: "login",
      path: "/",
      component: Login
    },
    {
      name: "userpage",
      path: "/userpage",
      component: UserPage
    },
    {
      name: "register",
      path: "/register",
      component: Register
    },

    {
      name: "contact",
      path: "/contact",
      component: Contact
    },
    {
      name: "reminder",
      path: "/reminder",
      component: Reminder
    },
    {
      name: "wrongPage",
      path: "*",
      component: WrongPage
    }
  ]
});
