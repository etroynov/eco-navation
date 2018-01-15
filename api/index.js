/**
 * Dependencies
 */

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { send } = require('micro');
const compose = require('micro-compose');
const { router, get, post } = require('microrouter');
const cors = require('micro-cors')();

/**
 * DataBase
 */

mongoose.connect('mongodb://localhost/ucavtor', { useMongoClient: true });
mongoose.Promise = global.Promise;

/**
 * Models require
 */

fs.readdirSync(path.join(__dirname, '/app/models')).forEach((file) => {
  if (file.includes('.js')) {
    require(path.join(__dirname, '/app/models/', file));
  }
});

/**
 * Routes
 */

const usersController = require('./app/controllers/usersController');
const pagesController = require('./app/controllers/pagesController');
const coursesController = require('./app/controllers/coursesController');
const organizationsController = require('./app/controllers/organizationsController');

const notfound = (req, res) =>
  send(res, 404, 'You shall not passs :)')

/**
 * Expo
 */

module.exports = compose(
  cors
)(router(
  /** USERS **/
  post('/users/store', usersController.store),
  post('/users/login', usersController.login),
  
  /** PAGES **/
  get('/pages', pagesController.index),
  post('/pages/store', pagesController.store),

  /** COURSES **/
  get('/courses', coursesController.index),
  post('/courses/store', coursesController.store),
  
  
  /** ORGANIZATIONS **/
  get('/organizations', organizationsController.index),
  get('/organizations/employers', organizationsController.employers),
  post('/organizations/store', organizationsController.store),
  post('/organizations/login', organizationsController.login),
  
  /** 404 **/
  get('/*', notfound)
));
