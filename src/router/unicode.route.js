const Router = require('koa-router');

const route = new Router({ prefix: '/font' });
const { font } = require('../controller/unicode.controller');

route.get('/', font);

module.exports = route;
