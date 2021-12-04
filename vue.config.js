module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@use "@/assets/scss/style.scss";`,
      },
    },
  },
};
