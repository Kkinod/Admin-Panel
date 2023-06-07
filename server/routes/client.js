import express from 'express'
import { getProducts, getTransactions } from '../controllers/client.js'

const router = express.Router()

router.get('/products', getProducts)
router.get('/transactions', getTransactions)

export default router
