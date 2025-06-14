// next.config.js
const isGithubPages = process.env.DEPLOY_TARGET === 'GH_PAGES';

module.exports = {
  basePath: isGithubPages ? '/my_portfolio' : '',
  assetPrefix: isGithubPages ? '/my_portfolio/' : '',
  output: 'export', // 静的エクスポート
};