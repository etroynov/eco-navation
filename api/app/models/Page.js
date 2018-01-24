/**
 * Page model
 *
 * @module       :: model
 * @description  :: Represent Page in database
 *
 *
 * Module dependencies
 */

const mongoose   = require('mongoose');
const bcrypt     = require('bcryptjs');
const timestamps = require('mongoose-timestamp');
const Schema     = mongoose.Schema;

/**
 * Page schema
 */

const PageSchema = new Schema({
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
 * Page plugin
 */

PageSchema.plugin(timestamps);

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
