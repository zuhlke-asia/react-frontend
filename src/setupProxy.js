const proxy = require('http-proxy-middleware');

const filter = (pathname, req) => {
  const matched = pathname.match('^/api/*');
<<<<<<< HEAD
  console.log('proxy matched:', matched);
  return matched;
=======
  console.log('proxy matched:', matched); // this should appear on the terminal where u run `npm start`
  return matched;
};

module.exports = (app) => {
  app.use(proxy(filter, {
    target: 'https://employee-profiles.herokuapp.com/',
    changeOrigin: true,
  }));
>>>>>>> master
};

module.exports = (app) => {
  app.use(proxy(filter, {
    target: 'https://employee-profiles.herokuapp.com/',
    changeOrigin: true,
  }));
};