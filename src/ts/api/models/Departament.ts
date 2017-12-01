/**
 * Departament model
 *
 * @module       :: model
 * @description  :: Represent Departament in database
 *
 *
 * Module dependencies
 */

import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Options
 */

const options = {
  timestamps: true,
};

/**
 * DepartamentSchema
 */

const DepartamentSchema = new Schema({
  title: String,
  description: String,
  author: String,
  name: String,
  content: String,
  status: {
    type: Number,
    required: true,
    default: 0,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
}, options);

/**
 * Plugins
 */

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 * Statics
 */

DepartamentSchema.statics = {};

/**
 * Register
 */

export default mongoose.model('Departament', DepartamentSchema);
