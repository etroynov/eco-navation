/**
 * Paymens controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle payments ( create, update and etc )
 *
 *
 * Module dependencies
 */

const mongoose         = require('mongoose');
const { send, json }   = require('micro');
const { init, status } = require('../utils/payture');

const User    = mongoose.model('User');
const Course  = mongoose.model('Course');
const Payment = mongoose.model('Payment');


/*!
 * Expos
 */

exports.index = async (req, res) => {
  try {
    const payments = await Payment.find();

    return send(res, 200, payments);
  } catch(e) {
    return send(res, 500, e);
  }
};

exports.show = async (req, res) => {
  try {
    const payment = await Payment.findOne({ _id: req.params.id })
      .populate('user')
      .populate('payment');
    
    return send(res, 200, payment);
  } catch(e) {
    return send(res, 500, e);
  }
}

exports.create = async (req, res) => {
  try {
    const { userId, courseId } = await json(req);
    const user = await User.findOne({ _id: userId });
    const course = await User.findOne({ _id: courseId });

    const data = {
      OrderId: "ORD00000000000000005",
      Amount: course.price * 100,
      IP: "127.0.0.1",
      SessionType: "Pay",
      Url: "http://dashboard.ucavtor.ru",
      Language: "RU",
      Total: course.price,
      Product: "курс промышленая безопасность"
    }

    // const payment = await Payment.create(data);

    return send(res, 200, data);
  } catch(e) {
    return send(res, 500, e);
  }
};

exports.update = async (req, res) => {
  const data = await json(req);
  const { _id } = data;

  const payment = await Payment.findOneAndUpdate({ _id }, data, { new: true });

  return send(res, 200, payment);
};

exports.check = async (req, res) => {
  const data = await json(req);
  const { _id } = data;

  const payment = await Payment.findOneAndUpdate({ _id }, data, { new: true });

  return send(res, 200, payment);
};


exports.delete = async (req, res) => {
  try {
    const data   = await json(req);
    const payment = await Payment.remove(data);
    
    return send(res, 200);
  } catch(e) {
    return send(res, 500);
  }
};
