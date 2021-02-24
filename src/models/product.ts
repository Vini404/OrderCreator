import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: String,
  unitPrice: String,
  unitAllowBuy: Number
})

module.exports = mongoose.model('Product', productSchema)
