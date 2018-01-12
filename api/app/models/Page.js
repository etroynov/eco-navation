'use strict';

/**
 * Page model
 *
 * @module       :: model
 * @description  :: Represent Page in database
 *
 *
 * Module dependencies
 */

const mongoose = require('mongoose'),
      bcrypt   = require('bcryptjs'),
      Schema   = mongoose.Schema;

/**
 * Page schema
 */

const PageSchema = new Schema({
  title: {
    type: String,
    default: '',
    unique: true,
  },
  description: {
    type: String,
    default: '',
    unique: true,
  },
  name: {
    type: String,
    default: '',
    unique: true,
  },
  content: {
    type: String,
    default: '',
    unique: true,
  },
  thumb: {
    type: String,
    default: '',
    unique: true,
  },
  tags: {
    type: String,
    default: '',
    unique: true,
  },
  rubrics: {
    type: String,
    default: '',
    unique: true,
  },
  slug: {
    type: String,
    default: ''
  },
  status: {
    type: Number,
    default: ''
  }
});

/**
 * Page plugin
 */

// PageSchema.plugin(PagePlugin, {});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

PageSchema.methods.authenticate = (Page, password) => {
  return bcrypt.compareSync(password, Page.password);
};

/**
 * Statics
 */

PageSchema.statics = {};

/**
 * Register
 */

mongoose.model('Page', PageSchema);
