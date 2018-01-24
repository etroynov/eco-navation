/**
 * Post model
 *
 * @module       :: model
 * @description  :: Represent Post in database
 *
 *
 * Module dependencies
 */

const mongoose   = require('mongoose');
const bcrypt     = require('bcryptjs');
const timestamps = require('mongoose-timestamp');
const Schema     = mongoose.Schema;

/**
 * Post schema
 */

const PostSchema = new Schema({
  title: String,
  description: String,
  name: String,
  content: String,
  thumb: String,
  tags: Array,
  rubrics: Array,

  slug: {
    type: String,
    unique: true,
    required: true,
  },
  status: {
    type: Number,
    default: 0
  }
});

/**
 * Post plugin
 */

PostSchema.plugin(timestamps);

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

PostSchema.methods.authenticate = (Post, password) => {
  return bcrypt.compareSync(password, Post.password);
};

/**
 * Statics
 */

PostSchema.statics = {};

/**
 * Register
 */

mongoose.model('Post', PostSchema);
