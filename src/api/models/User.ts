/**
 * User model
 *
 * @module       :: model
 * @description  :: Represent user in database
 *
 *
 * Module dependencies
 */

import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Options
 */

const options = {
  timestamps: true,
};

/**
 * UserSchema
 */

const UserSchema = new Schema({
  name: String,
  email: String,
}, options);

/**
 * Plugins
 */

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 *
 * Statics
 */

UserSchema.statics = {};

/**
 * Register
 */

export default mongoose.model('User', UserSchema);
