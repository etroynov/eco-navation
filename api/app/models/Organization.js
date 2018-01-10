'use strict';

/**
 * Organization model
 *
 * @module       :: model
 * @description  :: Represent Organization in database
 *
 *
 * Module dependencies
 */

const mongoose = require('mongoose'),
      bcrypt   = require('bcryptjs'),
      Schema   = mongoose.Schema;

/**
 * Organization schema
 */

const OrganizationSchema = new Schema({
  name: {
    type: String,
    default: '',
    unique: true,
  },
  inn: {
    type: String,
    default: '',
    unique: true,
  },
  kpp: {
    type: String,
    default: '',
    unique: true,
  },
  bankAccount: {
    type: String,
    default: '',
    unique: true,
  },
  bic: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  },
  directorFio: {
    type: String,
    default: ''
  },
  directorPosition: {
    type: String,
    default: ''
  },
  directorPhone: {
    type: String,
    default: ''
  }
});

/**
 * Organization plugin
 */

// OrganizationSchema.plugin(OrganizationPlugin, {});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

OrganizationSchema.methods.authenticate = (Organization, password) => {
  return bcrypt.compareSync(password, Organization.password);
};

/**
 * Statics
 */

OrganizationSchema.statics = {};

/**
 * Register
 */

mongoose.model('Organization', OrganizationSchema);
