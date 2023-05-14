import User from '../models/User.js'

export const getUser = async (req, res) => {
	try {
		const { id } = req.params
		const user = await User.findById(id)
		res.status(200).json(user)
	} catch (error) {
		console.error(error)
		next(error)
	}
}
