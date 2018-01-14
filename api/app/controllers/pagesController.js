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

const Page = mongoose.model('Page');

/*!
 * Expos
 */

exports.index = async (req, res) => {
  const Pages = await Page.find();

  return send(res, 200, { Pages });
};

exports.store = async (req, res) => {
  const data = await json(req);
  const page = await Page.create(data);

  return send(res, 200, { page });
};

exports.update = async (req, res) => {
  const id = req.body.id || '';

  await Page.update({
    _id: id,
  }, {
    name: req.body.name,
    login: req.body.login,
    group: req.body.group,
    lastname: req.body.lastname,
    telephone: req.body.telephone,
    Page: req.body.Page,
  });

  return send(res, 200, { page });
};

exports.destroy = async (req, res) => {
  const id = req.params.id || '';

  await User.findByIdAndRemove(id);

  return send(res, 200);
};
