/**
 * User controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle user( login, logout and etc )
 *
 *
 * Module dependencies
 */
const { send, json } = require('micro');
const mongoose = require('mongoose');

const Course = mongoose.model('Course');

/*!
 * Expos
 */

exports.index = async (req, res) => {
  const courses = await Course.find();

  return send(res, 200, courses);
};

exports.create = async (req, res) => {
  const data = await json(req);
  const course = await Course.create(data);

  return send(res, 200, course);
};

exports.update = async (req, res) => {
  const data = await json(req);
  const { _id } = data;

  const course = await Course.findOneAndUpdate({ _id }, data, { new: true });

  return send(res, 200, course);
};

exports.delete = async (req, res) => {
  const data = await json(req);
  const { _id } = data;

  const course = await Course.remove(_id);

  return send(res, 200);
};
