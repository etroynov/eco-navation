'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Dependencies
 */
const Router = require("koa-router");
/**
 * Controllers
 */
const home = require("../controllers/homeController");
const post = require("../controllers/postController");
/*!
 * Init
 */
const router = new Router();
/*!
 * Expo
 */
/*!
 * HOME
 */
router.get('/', home.index);
/*!
 * Posts
 */
router
    .get('/posts/:slug', post.show);
exports.appRoutes = () => router.routes();
exports.appAllowedMethods = () => router.allowedMethods();
