'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Dependencies
 */
const path = require("path");
const Router = require("koa-router");
const Body = require("koa-body");
/**
 * Controllers
 */
const dashboard = require("../controllers/dashboardController");
const post = require("../controllers/postController");
const file = require("../controllers/fileController");
/*!
 * Init
 */
const router = new Router({
    prefix: '/dashboard',
});
/*!
 * Expo
 */
/*!
 * Home
 */
router.get('/', dashboard.index);
/*!
 * Posts
 */
router
    .get('/posts', post.index)
    .get('/posts/create', post.create)
    .get('/posts/edit/:id', post.edit)
    .get('/posts/destroy/:id', post.destroy)
    .post('/posts/update', post.update)
    .post('/posts/store', post.store);
/*!
 * Files
 */
router
    .get('/files', file.index)
    .get('/files/add', file.add)
    .get('/files/destroy/:id', file.destroy)
    .post('/files/upload', Body({
    multipart: true,
    formidable: {
        uploadDir: path.join(__dirname, 'uploads'),
        keepExtensions: true,
        onFileBegin: (_, file) => {
            file.path = `${path.join(__dirname, 'uploads')}/${file.name}`;
        },
    },
}), file.upload);
exports.dashboardRoutes = () => router.routes();
exports.dashboardAllowedMethods = () => router.allowedMethods();
