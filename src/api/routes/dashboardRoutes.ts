'use strict';

/**
 * Dependencies
 */

import * as path from 'path';

import * as Router from 'koa-router';
import * as Body from 'koa-body';

/**
 * Controllers
 */

import * as dashboard from '../controllers/dashboardController';
import * as post from '../controllers/postController';
import * as file from '../controllers/fileController';

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
      onFileBegin: (_, file: any) => {
        file.path = `${path.join(__dirname, 'uploads')}/${file.name}`;
      },
    },
  }), file.upload);

export const dashboardRoutes = () => router.routes();
export const dashboardAllowedMethods = () => router.allowedMethods();
