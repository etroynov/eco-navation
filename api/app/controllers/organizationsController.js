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

exports.store = async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    login: req.body.login,
    group: req.body.group,
    lastname: req.body.lastname,
    telephone: req.body.telephone,
    Organization: req.body.Organization,
  });

  return send(res, 200, { user });
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
