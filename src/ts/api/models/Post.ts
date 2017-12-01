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
 * PostSchema
 */

const PostSchema = new Schema({
  title: String,
  description: String,
  author: String,
  name: String,
  content: String,
  tags: Array,
  status: {
    type: Number,
    required: true,
    default: 0,
  },
  slug: {
    type: String,
    required: true,
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
 * Statics
 */

PostSchema.statics = {};

/**
 * Register
 */

export default mongoose.model('Post', PostSchema);
