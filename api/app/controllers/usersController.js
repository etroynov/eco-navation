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
const { hashSync } = require('bcryptjs');
const path = require('path');
const passgen = require('password-generator');
const Etpl = require('email-templates').EmailTemplate;
const email = require('nodemailer');

const Organization = mongoose.model('Organization');
const User = mongoose.model('User');

/*!
 * Expos
 */

exports.index = async (req, res) => {
  const [organizations, users] = await Promise.all([
    Organization.find(),
    User.find(),
  ]);

  return res.render('dashboard/users/index', { organizations, users });
};

exports.login = async (req, res) => {
  const { email, password } = await json(req);
  const user = await User.find({ email });

  console.log(email, password, user);

  return send(res, 200, 'login')
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
      emai,
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

exports.restore = async (req, res) => {
  const id = req.body.id || '';
  const pass = passgen();
  const transporter = email.createTransport({
    service: 'Yandex',
    auth: {
      user: 'access@makdoors.ru',
      pass: 'makdoors713',
    },
  });
  const restoreTpl = path.join(`${__dirname}/../views`, 'emails', 'restore');
  const restoreLetter = new Etpl(restoreTpl);
  const mailOptions = {
    from: 'access@makdoors.ru',
    to: 'access@makdoors.ru',
    subject: 'Доступ к сайту - makdoors.ru',
    html: '',
  };

  const user = await User.update({ _id: id }, { password: bcrypt.hashSync(pass, 8) });

  const restoreLetterTemplate = await restoreLetter.render({
    pass,
    user,
  });

  mailOptions.html = restoreLetterTemplate.html;

  await transporter.sendMail(mailOptions);

  return res.json({
    code: 200,
  });
};
