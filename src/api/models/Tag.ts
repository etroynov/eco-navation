
/**
 * Post model
 *
 * @module       :: model
 * @description  :: Represent post in database
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
 * TagSchema
 */

const TagSchema = new Schema({
  name: String,
  slug: {
    type: String,
    unique: true,
  },
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

TagSchema.statics = {};

/**
 * Register
 */

export default mongoose.model('Post', TagSchema);
