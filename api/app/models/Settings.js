'use strict';

/**
 * Settings model
 *
 * @module       :: model
 * @description  :: Represent Settings in database
 *
 *
 * Module dependencies
 */

const mongoose   = require('mongoose');
const bcrypt     = require('bcryptjs');
const timestamps = require('mongoose-timestamp');
const Schema     = mongoose.Schema;

/**
 * Settings schema
 */

const SettingsSchema = new Schema({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
  thumb: {
    type: String,
    default: '',
  },
  tags: {
    type: String,
    default: '',
  },
  rubrics: {
    type: String,
    default: '',
  },
  slug: {
    type: String,
    default: '',
    unique: true,
  },
  status: {
    type: Number,
    default: ''
  }
});

/**
 * Settings plugin
 */

SettingsSchema.plugin(timestamps);

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

SettingsSchema.methods.authenticate = (Settings, password) => {
  return bcrypt.compareSync(password, Settings.password);
};

/**
 * Statics
 */

SettingsSchema.statics = {};

/**
 * Register
 */

mongoose.model('Settings', SettingsSchema);
