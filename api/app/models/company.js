'use strict';

/**
 * Company model
 *
 * @module       :: model
 * @description  :: Represent Company in database
 *
 *
 * Module dependencies
 */

const mongoose = require('mongoose'),
      bcrypt   = require('bcryptjs'),
      Schema   = mongoose.Schema;

/**
 * Company schema
 */

const CompanySchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  lastname: {
    type: String,
    default: ''
  },
  login: {
    type: String,
    default: ''
  },
  telephone: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  departament: {
    type: String,
    default: ''
  },
  group: {
    type: String,
    default: ''
  }
});

/**
 * Company plugin
 */

// CompanySchema.plugin(CompanyPlugin, {});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

CompanySchema.methods.authenticate = (Company, password) => {
  return bcrypt.compareSync(password, Company.password);
};

/**
 * Statics
 */

CompanySchema.statics = {};

/**
 * Register
 */

mongoose.model('Company', CompanySchema);
