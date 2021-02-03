module.exports = {
  publicPath: '/taskio/',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/variables.scss";
        `
      }
    }
  }
};
