var conf_path="./src/hwcConf.js";
var hwc_conf=require(conf_path);
var p=require("path");

hwc_conf.paths.hwc_js_kernel_loader=hwc_conf.paths.hwc_js_kernel;

module.exports = {
  entry: [
        './src/defines.js',
        './src/init.js',
        "modules/bower_components/webcomponentsjs/webcomponents-lite.js",
        "modules/angularjs/1_5/angular.js",
        "modules/angularjs/1_5/angular-route.js",
        "modules/bower_components/angular-loading-bar/build/loading-bar.min.js",
        "modules/bower_components/angular-video-bg/angular-video-bg.min.js",
        "src/assets/tether/tether.min.js",
        "src/assets/bootstrap/js/bootstrap.min.js",
        conf_path,
        './modules/angular-xt/plugin/index.js',
        './src/app.js'
  ],
  output: {
    path: 'output',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
      root: p.resolve(__dirname),
      alias: hwc_conf.paths,
      extensions: ['', '.js', '.jsx']
  }
};
