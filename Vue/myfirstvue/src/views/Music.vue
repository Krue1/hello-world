<template>
  <div id="music" ref="music">
    <h3>音乐</h3>
    <el-button @click="clickHandler">进行操作</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moves: "URLRDL",
      moves2: "RRRRRL",
      keys: new Set()
    };
  },
  methods: {
    clickHandler() {
      console.log(this.moves.split("L"));
      console.log(this.moves2.split("R"));
      this.runOnKeys(() => alert("Hello!"), "KeyQ", "KeyW");
    },
    runOnKeys(func, ...codes) {
      let _this = this;
      this.$refs["music"].addEventListener("keydown", function(e) {
        console.log(e.code);
        let flag = true;
        _this.keys.add(e.code);
        codes.forEach(code => {
          if (!_this.keys.has(code)) {
            flag = false;
            return;
          }
        });
        if (flag) {
          func();
          _this.keys.clear();
        }
      });
      this.$refs["music"].addEventListener("keyup", function(e) {
        _this.keys.delete(e.code);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
/* h3 {
  color: yellow;
} */
$normal: #f00;
h3 {
  color: $normal;
}
</style>
