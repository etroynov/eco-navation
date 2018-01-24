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
  name: String,
  value: String,

  slug: {
    type: String,
    unique: true,
    required: true,
  },
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
