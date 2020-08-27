<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <!-- <el-menu-item index="1">
        <router-link class="router-link" to="/">首页</router-link>
      </el-menu-item>-->
      <el-menu-item index="2">
        <router-link class="router-link" to="/news">新闻</router-link>
        <!-- <el-link href="#/news">新闻</el-link> -->
      </el-menu-item>
      <el-menu-item index="3">
        <router-link class="router-link" to="/movie">影视</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link class="router-link" to="/music">音乐</router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link class="router-link" to="/jokes">笑话</router-link>
      </el-menu-item>
      <el-menu-item index="6" class="login">
        <router-link class="router-link" to="/login">登录</router-link>
      </el-menu-item>
    </el-menu>
    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "2"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.router-link {
  display: block;
  height: 100%;
  padding: 0 20px;
}
.el-menu-item {
  padding: 0;
}
.el-menu-item.login {
  float: right;
}
</style>
