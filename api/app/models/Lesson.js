/**
 * Lesson model
 *
 * @module       :: model
 * @description  :: Represent Lesson in database
 *
 *
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

/**
 * Lesson schema
 */

const LessonSchema = new Schema({
  name: String,
  content: { type: String, default: '' },
  course: { type: Schema.Types.ObjectId, ref: 'Course' }
});

/**
 * Register
 */

mongoose.model('Lesson', LessonSchema);
