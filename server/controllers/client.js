import Product from '../models/Product.js'
import ProductStat from '../models/ProductStat.js'
import Transaction from '../models/Transaction.js'
import User from '../models/User.js'

export const getProducts = async (req, res) => {
	try {
		const products = await Product.find()

		const productsWithStats = await Promise.all(
			products.map(async product => {
				const stat = await ProductStat.find({
					productId: product._id,
				})
				return {
					...product._doc,
					stat,
				}
			})
		)

		res.status(200).json(productsWithStats)
	} catch (error) {
		console.error(error)
		next(error)
	}
}

// Added support for server side pagination
export const getTransactions = async (req, res) => {
	try {
		const { page = 1, pageSize = 25, sort = null, search = '' } = req.query

		const generateSort = () => {
			const sortParsed = JSON.parse(sort)
			const sortFormatted = {
				[sortParsed.field]: (sortParsed.sort = 'asc' ? 1 : -1),
			}

			return sortFormatted
		}
		const sortFormatted = Boolean(sort) ? generateSort() : {}

		const transactions = await Transaction.find({
			$or: [{ cost: { $regex: new RegExp(search, 'i') } }, { userId: { $regex: new RegExp(search, 'i') } }],
		})
			.sort(sortFormatted)
			.skip(page * pageSize)
			.limit(pageSize)

		const total = await Transaction.estimatedDocumentCount({
			name: { $regex: search, $options: 'i' },
		})

		res.status(200).json({
			transactions,
			total,
		})
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

export const getUsers = async (req, res) => {
	try {
		const users = await User.find({ role: 'user' }).select('-password')
		res.status(200).json(users)
	} catch (error) {
		console.error(error)
		next(error)
	}
}
