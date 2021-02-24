import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
  customer: String,
  item: {
    product: String,
    amount: Number,
    unitPrice: Number
  }
})

module.exports = mongoose.model('Order', OrderSchema)
