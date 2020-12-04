module.exports = {
  lintOnSave: false,

  // gh pages deployment
  publicPath: "/everyday-tracker/",

  // for anything other that gh pages'
  //   publicPath: "/",

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Everyday Tracker";
      return args;
    });
  },
};
