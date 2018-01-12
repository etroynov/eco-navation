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

const Organization = mongoose.model('Organization');

/*!
 * Expos
 */

exports.index = async (req, res) => {
  const organizations = await Organization.find();

  return send(res, 200, { organizations });
};

exports.create = async (req, res) => {
  try {
    const {
      name,
      inn,
      kpp,
      bankAccount,
      bic,
      address,
      directorFio,
      directorPosition,
      directorPhone,
      fio,
      position,
      telephone,
      email,
    } = await json(req);

    const organization = await Organization.create({
      name,
      inn,
      kpp,
      bankAccount,
      bic,
      address,
      directorFio,
      directorPosition,
      directorPhone
    });
    
    return send(res, 200, organization);
  } catch(e) {

    console.info('test', e);
    return send(res, 500, e);
  }
};

exports.update = async (req, res) => {
  const id = req.body.id || '';

  await User.update({
    _id: id,
  }, {
    name: req.body.name,
    login: req.body.login,
    group: req.body.group,
    lastname: req.body.lastname,
    telephone: req.body.telephone,
    Organization: req.body.Organization,
  });

  return res.redirect('/dashboard/users');
};

exports.destroy = async (req, res) => {
  const id = req.params.id || '';

  await User.findByIdAndRemove(id);

  return res.redirect('/dashboard/users');
};
