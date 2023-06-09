import express from 'express'
import { getProducts, getCustomers, getTransactions } from '../controllers/client.js'

const router = express.Router()

router.get('/products', getProducts)
router.get('/transactions', getTransactions)
router.get('/customers', getCustomers)

export default router
