const proxy = require('http-proxy-middleware');

const filter = (pathname, req) => {
  const matched = pathname.match('^/api/*');
  console.log('proxy matched:', matched);
  return matched;
};

module.exports = (app) => {
  app.use(proxy(filter, {
    target: 'https://employee-profiles.herokuapp.com/',
    changeOrigin: true,
  }));
};