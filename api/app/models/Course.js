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
      bcrypt   = require('bcryptjs'),
      Schema   = mongoose.Schema;

/**
 * Course schema
 */

const CourseSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
    default: ''
  },
  thumb: {
    type: String,
    default: ''
  },
  rubrics: {
    type: Array
  },
  lessons: {
    type: Array
  },
  tests: {
    type: Array
  }
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
 * Methods
 */

CourseSchema.methods.authenticate = (Course, password) => {
  return bcrypt.compareSync(password, Course.password);
};

/**
 * Statics
 */

CourseSchema.statics = {};

/**
 * Register
 */

mongoose.model('Course', CourseSchema);
