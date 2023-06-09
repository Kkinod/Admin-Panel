import express from 'express'
import { getProducts, getUsers, getTransactions } from '../controllers/client.js'

const router = express.Router()

router.get('/products', getProducts)
router.get('/transactions', getTransactions)
router.get('/users', getUsers)

export default router
