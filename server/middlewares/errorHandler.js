export const errorHandler = (err, req, res, next) => {
	console.error(err.stack)

	if (err instanceof NotFoundError) {
		res.status(404)
	} else if (err instanceof ValidationError) {
		res.status(400)
	} else {
		res.status(500)
	}

	const message = process.env.NODE_ENV === 'production' ? 'A server error has occurred' : err.message

	res.json({ error: message })
}
