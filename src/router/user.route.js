const Router = require('koa-router');

const route = new Router({ prefix: '/user' });
const { register } = require('../controller/user.controller');

route.get('/', (ctx, next) => {
  ctx.body = 'hello hehe';
});

route.post('/register', register);

module.exports = route;
