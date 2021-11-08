const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  publicPath: isProd ? '/' : './',
  devServer: {
    open: true,
    port: 8080
  }
};
