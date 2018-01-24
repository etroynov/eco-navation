/**
 * Section model
 *
 * @module       :: model
 * @description  :: Represent Section in database
 *
 *
 * Module dependencies
 */

const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

/**
 * Section schema
 */

const SectionSchema = new Schema({
  title: String,
  description: String,
  name: String,
  content: String,
  icon: String,
  status: {
    type: Number,
    default: 0
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
});

/**
 * Section plugin
 */

// SectionSchema.plugin(SectionPlugin, {});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Statics
 */

SectionSchema.statics = {};

/**
 * Register
 */

mongoose.model('Section', SectionSchema);
