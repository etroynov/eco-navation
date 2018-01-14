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
  },
  inn: {
    type: String,
    default: '',
  },
  kpp: {
    type: String,
    default: '',
  },
  bankAccount: {
    type: String,
    default: '',
  },
  bic: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  },
  representativeFio: {
    type: String,
    default: ''
  },
  representativePosition: {
    type: String,
    default: ''
  },
  representativePhone: {
    type: String,
    default: ''
  },
  managerFio: {
    type: String,
    default: ''
  },
  managerPosition: {
    type: String,
    default: ''
  },
  managerPhone: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: '',
    unique: true,
    required: true
  },
  password: {
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

OrganizationSchema.methods.authenticate = (organization, password) => {
  return bcrypt.compareSync(password, organization.password);
};

/**
 * Statics
 */

OrganizationSchema.statics = {};

/**
 * Register
 */

mongoose.model('Organization', OrganizationSchema);
