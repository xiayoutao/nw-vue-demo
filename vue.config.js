const path = require('path');

const resolve = dir => path.join(__dirname, dir);

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  publicPath: isProd ? '/dist/' : '/',
  devServer: {
    open: false,
    port: 5100,
  },
  transpileDependencies: [],
  configureWebpack: {},
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@cps', resolve('src/components'));
  }
};