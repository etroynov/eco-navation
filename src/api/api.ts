/**
 * Dependencies
 */

import * as Koa from 'koa';
import * as kstatic from 'koa-static';
import * as path from 'path';
import * as mongoose from 'mongoose';
import { appRoutes, appAllowedMethods } from './routes/appRoutes';
import { dashboardRoutes, dashboardAllowedMethods } from './routes/dashboardRoutes';

/*!
 * Init
 */

const app    = new Koa();

/*!
 * Database
 */

(mongoose as any).Promise = Promise;

mongoose.connect('mongodb://localhost/resto', {
  useMongoClient: true,
});

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

/*!
 * Middleware
 */

app
  .use(kstatic(path.join(__dirname, '/public')))
  .use(appRoutes())
  .use(dashboardRoutes())
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

/**
 * Server start
 */

app.listen(4000);
