<template>
  <div class="m-container">
    <div class="block">
      <el-timeline>
        <el-timeline-item
          v-bind:timestamp="joke.passtime"
          placement="top"
          v-for="(joke,index) in jokes"
          :key="index"
        >
          <el-card>
            <h4>{{joke.name}}</h4>
            <!-- <video :src="joke.video" controls="controls" height="300px"></video> -->
            <p>{{joke.text}}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <el-pagination
      class="mpage"
      background
      layout="prev, pager, next"
      :current-page="currentPage"
      :page-size="pageSize"
      @current-change="page"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: "Jokes",
  data() {
    return {
      name: "",
      text: "",
      passtime: "",
      jokes: [],
      pageSize: 5,
      currentPage: 1,
      total: 100
    };
  },
  methods: {
    page(currentPage) {
      const _this = this;
      this.$axios
        .get("https://api.apiopen.top/getJoke?page=" + currentPage)
        .then(res => {
          _this.jokes = res.data.result.slice(0, 5);
        });
    }
  },
  mounted() {
    this.page(1);
  }
};
</script>