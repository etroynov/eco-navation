/**
 * Questions controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle user( login, logout and etc )
 *
 *
 * Module dependencies
 */
const { send, json } = require('micro');
const mongoose = require('mongoose');

const Question = mongoose.model('Question');

/*!
 * Expos
 */

exports.index = async (req, res) => {
  const questions = await Question.find();

  return send(res, 200, questions);
};

exports.create = async (req, res) => {
  const data = await json(req);
  const question = await Question.create(data);

  return send(res, 200, question);
};

exports.update = async (req, res) => {
  const data = await json(req);
  const { _id } = data;

  const question = await Question.findOneAndUpdate({ _id }, data, { new: true });

  return send(res, 200, question);
};

exports.delete = async (req, res) => {
  const data = await json(req);
  const { _id } = data;

  const question = await Question.remove(_id);

  return send(res, 200);
};
