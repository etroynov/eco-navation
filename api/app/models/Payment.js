/**
 * Payment model
 *
 * @module       :: model
 * @description  :: Represent Payment in database
 *
 *
 * Module dependencies
 */

const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;

/**
 * Payment schema
 */

const PaymentSchema = new Schema({
  course: { type: Schema.Types.ObjectId, ref: 'User' },
});

/**
 * Register
 */

mongoose.model('Payment', PaymentSchema);
