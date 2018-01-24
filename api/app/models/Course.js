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
  title: String,
  description: String,
  name: String,
  content: String,
  thumb: String,
  icon: String,
  price: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    default: 0,
  },
  sections: [{ type: Schema.Types.ObjectId, ref: 'Section' }],
  lessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }],
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  slug: {
    type: String,
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
