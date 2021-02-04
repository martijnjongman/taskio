module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/taskio/" : "/",
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
