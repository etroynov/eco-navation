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
const organizationsController = require('./app/controllers/organizationsController');

const notfound = (req, res) =>
  send(res, 404, 'You shall not pass :)')

/**
 * Expo
 */

module.exports = compose(
  cors
)(router(
  /** USERS **/
  post('/users/create', usersController.create),
  post('/users/login', usersController.login),
  
  /** PAGES **/
  get('/pages', pagesController.index),
  post('/pages/create', usersController.create),
  
  /** ORGANIZATIONS **/
  get('/organizations', organizationsController.index),
  
  /** 404 **/
  get('/*', notfound)
));
