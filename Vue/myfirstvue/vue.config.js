const isPro = Object.is(process.env.NODE_ENV, 'development');
console.log(isPro);
module.exports = {
  devServer: {
    port: 8080,
    host: '127.0.0.1',
    proxy: {
      '/api': {
        // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
        target: 'http://v.juhe.cn/',
        // 允许跨域
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },
};
