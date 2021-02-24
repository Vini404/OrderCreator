/* eslint-disable no-unused-vars */
import { Request, response, Response } from 'express'
import { isValidObjectId } from 'mongoose'

const Order = require('../models/order')

export default class OrderController {
  async create (req:Request, res:Response, next:any) {
    try {
      const { customer, item } = req.body

      if (!customer && !item) {
        return res.status(404)
      }
      const response = await Order.create({ customer, item })

      return res.json(response.id)
    } catch (error) {
      next(error)
    }
  }

  async index (req:Request, res:Response, next:any) {
    try {
      const id = req.headers.id
      if (await isValidObjectId(id) === false) {
        return res.json('ID invalido')
      } else {
        const AllOrders = await Order.findById(id)
        return res.json(AllOrders)
      }
    } catch (error) {
      next(error)
    }
  }

  async update (req:Request, res:Response, next:any) {
    try {
      const { id, item } = req.body
      await Order.findByIdAndUpdate(id, { item: item })
      return res.sendStatus(200)
    } catch (error) {
      next(error)
    }
  }
}
