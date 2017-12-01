/**
 * Dependencies
 */

import * as Koa from 'koa';
import * as kstatic from 'koa-static';
import * as path from 'path';
import * as next from 'next';
import * as mongoose from 'mongoose';
import * as Router from 'koa-router';
import { appRoutes, appAllowedMethods } from './api/routes/appRoutes';
import { dashboardRoutes, dashboardAllowedMethods } from './api/routes/dashboardRoutes';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

/*!
 * Database
 */

(mongoose as any).Promise = Promise;

mongoose.connect('mongodb://localhost/ucavtor', {
  useMongoClient: true,
});

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

/*!
 * Init
 */

app.prepare()
.then(() => {
  const app = new Koa();
  const nextRouter = new Router();

  nextRouter.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  app.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  app
  .use(kstatic(path.join(__dirname, '/static')))
  .use(appRoutes())
  .use(dashboardRoutes())
  .use(dashboardRoutes())
  .use(nextRouter.routes())
  .use(appAllowedMethods())
  .use(dashboardAllowedMethods());

  /*!
  * Logger
  */

  app.use(async (ctx, next) => {
    const start: number = new Date().getMilliseconds();

    await next();

    const ms: number = (new Date().getMilliseconds()) - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  });

  app.listen(port, err => {
    if (err) throw err;

    console.log(`> Ready on http://localhost:${port}`);
  });
});
