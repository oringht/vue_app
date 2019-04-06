import Vue from "vue";
import App from "./App.vue";
//导入路由的包
import VueRouter from "vue-router";
Vue.use(VueRouter);
import router from "./router.js";
//全局引用
//import MintUI from "mint-ui";
//Vue.use(MintUI);
//import "mint-ui/lib/style.css";
//头部导入
import { Header } from "mint-ui";
Vue.component(Header.name, Header);
//导入mui样式
import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css";

//轮播图引入
import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//导入
import VueResource from "vue-resource";
Vue.use(VueResource);
const vm = new Vue({
  el: "#app",
  render: function(createElement) {
    return createElement(App);
  },
  router
});
