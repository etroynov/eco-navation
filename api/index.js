/**
 * Dependencies
 */

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { send } = require('micro');
const compose = require('micro-compose');
const { router, get } = require('microrouter');
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

const userController = require('./app/controllers/userController');

const notfound = (req, res) =>
  send(res, 404, 'Not found route')

/**
 * Expo
 */

module.exports = compose(
  cors
)(router(
  get('/users/create', userController.create),
  get('/*', notfound)
));
