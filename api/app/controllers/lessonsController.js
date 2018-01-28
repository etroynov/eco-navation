/**
 * Lessons controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle user( login, logout and etc )
 *
 *
 * Module dependencies
 */
const { send, json } = require('micro');
const mongoose = require('mongoose');

const Lesson = mongoose.model('Lesson');
const Course = mongoose.model('Course');

/*!
 * Expos
 */

exports.index = async (req, res) => {
  const lessons = await Lesson.find();

  return send(res, 200, lessons);
};

exports.create = async (req, res) => {
  const data = await json(req);
  const lesson = await Lesson.create(data);
  const course = await Course.findOne({ _id: data.course });

  course.lessons.push(lesson._id);
  await course.save();


  return send(res, 200, lesson);
};

exports.update = async (req, res) => {
  const data = await json(req);
  const { _id } = data;

  const lesson = await Lesson.findOneAndUpdate({ _id }, data, { new: true });

  return send(res, 200, lesson);
};

exports.delete = async (req, res) => {
  const data = await json(req);
  const lesson = await Lesson.remove(data);

  return send(res, 200);
};
