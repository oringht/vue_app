<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in lunbotuList" :key="index">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>
    <h3>HomeContainer</h3>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  //双向数据绑定 数据模型变了 视图就会变
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(result => {
          //console.log(result.body);
          if (result.body.status === 0) {
            this.lunbotuList = result.body.message;
          } else {
            Toast("加载轮播图失败");
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    /* &:nth-child(1) {
      background: red;
    }
    &:nth-child(2) {
      background: blue;
    }
    &:nth-child(3) {
      background: green;
    } */
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>