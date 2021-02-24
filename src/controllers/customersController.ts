/* eslint-disable no-unused-vars */
import { Request, Response } from 'express'

const customer = require('../models/customer')

export default class CustomerController {
  async create (req:Request, res:Response, next:any) {
    try {
      const { name } = req.body
      await customer.create({ name })
      return res.sendStatus(200)
    } catch (error) {
      next(error)
    }
  }

  async index (req:Request, res:Response, next:any) {
    try {
      const allCustomers = await customer.find()
      return res.json(allCustomers)
    } catch (error) {
      next(error)
    }
  }
}
