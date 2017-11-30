"use strict";
/**
 * Dependencies
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const kstatic = require("koa-static");
const path = require("path");
const next = require("next");
const mongoose = require("mongoose");
const Router = require("koa-router");
const appRoutes_1 = require("./api/routes/appRoutes");
const dashboardRoutes_1 = require("./api/routes/dashboardRoutes");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
/*!
 * Database
 */
mongoose.Promise = Promise;
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
    nextRouter.get('*', async (ctx) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
    });
    app.use(async (ctx, next) => {
        ctx.res.statusCode = 200;
        await next();
    });
    app
        .use(kstatic(path.join(__dirname, '/static')))
        .use(appRoutes_1.appRoutes())
        .use(dashboardRoutes_1.dashboardRoutes())
        .use(dashboardRoutes_1.dashboardRoutes())
        .use(nextRouter.routes())
        .use(appRoutes_1.appAllowedMethods())
        .use(dashboardRoutes_1.dashboardAllowedMethods());
    /*!
    * Logger
    */
    app.use(async (ctx, next) => {
        const start = new Date().getMilliseconds();
        await next();
        const ms = (new Date().getMilliseconds()) - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });
    app.listen(port, err => {
        if (err)
            throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
