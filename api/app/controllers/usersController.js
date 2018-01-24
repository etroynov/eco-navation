/**
 * User controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle user( login, logout and etc )
 *
 *
 * Module dependencies
 */

const mongoose = require('mongoose');

const { send, json } = require('micro');
const { hashSync, compareSync } = require('bcryptjs');
const { generate } = require('generate-password');
const { createTransport } = require('nodemailer');
const { sign } = require('jsonwebtoken');

const Organization = mongoose.model('Organization');
const User = mongoose.model('User');

/*!
 * Expos
 */

exports.index = async (req, res) => {
  const users = await User.find().populate('organizations');

  return send(res, 200, users);
};

exports.create = async (req, res) => {
    try {
    const data = await json(req);
    const user = await User.create(data);

    return send(res, 200, user);
  } catch(e) {
    return send(res, 500, e);
  }
};

exports.update = async (req, res) => {
  try {
    const data = await json(req);
    const { _id } = data;

    const user = await User.findOneAndUpdate({ _id }, data, { new: true });

    return send(res, 200, user)
  } catch(e) {
    return send(res, 500, e);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = await json(req);

    await Organization.findByIdAndRemove(id);
    
    return send(res, 200);
  } catch(e) {
    return send(res, 500, e);
  }
}
