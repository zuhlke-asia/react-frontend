const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(proxy('/*', { target: 'https://employee-profiles.herokuapp.com/', changeOrigin: true }));
};
