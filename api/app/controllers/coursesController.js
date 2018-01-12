/**
 * User controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle user( login, logout and etc )
 *
 *
 * Module dependencies
 */
const { send } = require('micro');
const mongoose = require('mongoose');

const Course = mongoose.model('Course');

/*!
 * Expos
 */

exports.index = async (req, res) => {
  const courses = await Course.find();

  return send(res, 200, { courses });
};

exports.create = async (req, res) => {
  try {
    const data = await json(req);

    const course = await Course.create(data);
    
    return send(res, 200, Course);
  } catch(e) {

    return send(res, 500, e);
  }
};

exports.update = async (req, res) => {
  const id = req.body.id || '';

  const user = await User.update({
    _id: id,
  }, {
    name: req.body.name,
    login: req.body.login,
    group: req.body.group,
    lastname: req.body.lastname,
    telephone: req.body.telephone,
    Course: req.body.Course,
  });

  return send(res, 200, user);
};

exports.destroy = async (req, res) => {
  const id = req.params.id || '';

  await User.findByIdAndRemove(id);

  return send(res, 200);
};
