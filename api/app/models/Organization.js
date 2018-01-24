/**
 * Organization model
 *
 * @module       :: model
 * @description  :: Represent Organization in database
 *
 *
 * Module dependencies
 */

const mongoose = require('mongoose'),
      bcrypt   = require('bcryptjs'),
      Schema   = mongoose.Schema;

/**
 * Organization schema
 */

const OrganizationSchema = new Schema({
  name: String,
  inn: String,
  kpp: String,
  bankAccount: String,
  bic: String,
  address: String,
  representativeFio: String,
  representativePosition: String,
  representativePhone: String,
  managerFio: String,
  managerPosition: String,
  managerPhone: String,

  email: {
    type: String,
    default: '',
    unique: true,
    required: true
  },
  password: {
    type: String,
    default: ''
  },
  sections: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

/**
 * Organization plugin
 */

// OrganizationSchema.plugin(OrganizationPlugin, {});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

OrganizationSchema.methods.authenticate = (organization, password) => {
  return bcrypt.compareSync(password, organization.password);
};

/**
 * Statics
 */

OrganizationSchema.statics = {};

/**
 * Register
 */

mongoose.model('Organization', OrganizationSchema);
