'use strict';

/**
 * Dependencies
 */

import * as Router from 'koa-router';

/**
 * Controllers
 */

import * as post from '../controllers/postController';

/*!
 * Init
 */

const router = new Router();

/*!
 * Expo
 */

/*!
 * Posts
 */

router
  .get('/posts', post.index)
  .get('/posts/:slug', post.show);

export const appRoutes = () => router.routes();
export const appAllowedMethods = () => router.allowedMethods();
