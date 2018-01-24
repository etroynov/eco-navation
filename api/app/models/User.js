/**
 * User model
 *
 * @module       :: model
 * @description  :: Represent user in database
 *
 *
 * Module dependencies
 */

const mongoose = require('mongoose'),
      bcrypt   = require('bcryptjs'),
      Schema   = mongoose.Schema;

// userPlugin = require('mongoose-user');

/**
 * User schema
 */

const UserSchema = new Schema({
  fio: String,
  telephone: String,
  password: String,
  organization: { type: Schema.Types.ObjectId, ref: 'Organization' },
  courses: { type: Schema.Types.ObjectId, ref: 'Course' },

  tests: {
    type: Array,
    default: []
  },

  level: {
    type: Number,
    default: 0
  }
});

/**
 * Methods
 */

UserSchema.methods.authenticate = (user, password) => {
  return bcrypt.compareSync(password, user.password);
};

/**
 * Register
 */

mongoose.model('User', UserSchema);
