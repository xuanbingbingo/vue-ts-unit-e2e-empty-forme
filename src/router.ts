import Vue from "vue";
import Router from "vue-router";
import Login from "@/pages/login/Login.vue";
import wrapper from "@/pages/wrapper.vue";
import Mission from "@/pages/mission/index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login",
      component: Login
    },
    // 登录
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/",
      name: "wrapper",
      component: wrapper,
      children: [
        {
          path: "mission",
          component: Mission
        }]
    }
  ],
});
