const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('kcors');

const chats = require('./controllers/chats');

const app = module.exports = new Koa();

app.use(logger());

app.use(cors({ credentials: true }));
app.use(bodyParser());

const publicRouter = new Router({ prefix: '/room' });

publicRouter.post('/42', chats.create);
publicRouter.get('/42', chats.list);
publicRouter.get('/status', chats.status);

app.use(publicRouter.routes());
app.use(publicRouter.allowedMethods());
