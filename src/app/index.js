const Koa = require('koa');
const KoaBody = require('koa-body');
const KoaCors = require('koa2-cors');

const userRouter = require('../router/user.route');
const unicodeRouter = require('../router/unicode.route');

const App = new Koa();

// 处理post请求
App.use(KoaBody());
// 处理跨域
App.use(KoaCors());

App.use(userRouter.routes());
App.use(unicodeRouter.routes());

module.exports = App;
