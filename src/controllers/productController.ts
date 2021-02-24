/* eslint-disable no-unused-vars */
import { Request, Response } from 'express'

const product = require('../models/product')

export default class ProductController {
  async create (req:Request, res:Response, next:any) {
    try {
      const { name, UnitPrice, unitAllowBuy } = req.body
      await product.create({ name, UnitPrice, unitAllowBuy })
      return res.sendStatus(200)
    } catch (error) {
      next(error)
    }
  }

  async index (req:Request, res:Response, next:any) {
    try {
      const allProducts = await product.find()
      return res.json(allProducts)
    } catch (error) {
      next(error)
    }
  }
}
