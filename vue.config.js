module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        assets: "@/assets",
        common: "@/common",
        network: "@/network",
        views: "@/views",
      },
    },
  },
};
