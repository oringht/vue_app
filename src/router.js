import VueRouter from "vue-router";
//导入对应的路由对象
import HomeContainer from "./components/tabbar/HomeContainer.vue";
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue";

var router = new VueRouter({
  routes: [
    { path: "/home", component: HomeContainer },
    { path: "/member", component: MemberContainer },
    { path: "/shopcar", component: SearchContainer },
    { path: "/search", component: ShopcarContainer }
  ],
  //覆盖默认的路由高亮类 默认的类router-link-active
  linkActiveClass: "mui-active"
});

export default router;
