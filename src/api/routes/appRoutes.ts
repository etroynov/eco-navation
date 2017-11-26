'use strict';

/**
 * Dependencies
 */

import * as Router from 'koa-router';

/**
 * Controllers
 */

import * as home from '../controllers/homeController';
import * as post from '../controllers/postController';

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

export const appRoutes = () => router.routes();
export const appAllowedMethods = () => router.allowedMethods();
