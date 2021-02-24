import OrderController from './controllers/orderController'
import ProductController from './controllers/productController'
import CustomerController from './controllers/customersController'
import express from 'express'
const Routes = express.Router()

const orderController = new OrderController()
const productController = new ProductController()
const customerController = new CustomerController()

// Order Routes
Routes.get('/order', orderController.index)
Routes.post('/order', orderController.create)
Routes.put('/order', orderController.update)

// Product Routes
Routes.get('/product', productController.index)
Routes.post('/product', productController.create)

// Customer Routes
Routes.get('/customer', customerController.index)
Routes.post('/customer', customerController.create)

export default Routes
