'use strict';

/**
 * Course model
 *
 * @module       :: model
 * @description  :: Represent Course in database
 *
 *
 * Module dependencies
 */

const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

/**
 * Course schema
 */

const CourseSchema = new Schema({
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
  },
  content: {
    type: String,
    default: ''
  },
  thumb: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    default: 0,
  },
  rubrics: {
    type: Array
  },
  lessons: {
    type: Array
  },
  tests: {
    type: Array
  },
  slug: {
    type: String,
    default: '',
    unique: true,
    required: true,
  },
});

/**
 * Course plugin
 */

// CourseSchema.plugin(CoursePlugin, {});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Statics
 */

CourseSchema.statics = {};

/**
 * Register
 */

mongoose.model('Course', CourseSchema);
