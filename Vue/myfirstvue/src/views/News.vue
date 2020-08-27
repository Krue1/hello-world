<template>
  <div class="m-container">
    <div class="block">
      <el-timeline>
        <el-timeline-item
          v-bind:timestamp="news.date"
          placement="top"
          v-for="(news, index) in newsList"
          :key="index"
        >
          <el-card>
            <a :href="news.url">{{ news.title }}</a>
            <img :src="news.thumbnail_pic_s" />
            <!-- <video :src="news.video" controls="controls" height="300px"></video> -->
            <p>{{ news.author_name }}</p>
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
  name: 'News',
  data() {
    return {
      name: '',
      text: '',
      passtime: '',
      newsList: [],
      pageSize: 5,
      currentPage: 1,
      total: 0,
    };
  },
  methods: {
    page(currentPage) {
      const _this = this;
      this.$axios
        .get(this.$axios.defaults.baseUrl + '/toutiao/index', {
          params: {
            type: 'top',
            key: '3dc86b09a2ee2477a5baa80ee70fcdf5',
          },
        })
        .then((res) => {
          console.log(res.data);
          _this.total = res.data.result.data.length;
          _this.newsList = res.data.result.data.slice(
            (currentPage - 1) * 5,
            (currentPage - 1) * 5 + 5
          );
        })
        .catch((err) => this.$alert(err));
    },
  },
  mounted() {
    this.page(1);
  },
};
</script>
