const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/my_portfolio/' : '',
  basePath: isProd ? '/my_portfolio' : '',
  trailingSlash: true,
};