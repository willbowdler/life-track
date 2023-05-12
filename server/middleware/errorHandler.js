const errorHandler = (error, req, res, next) => {
  console.error(error)

  const status = error.statusCode || 500
  const message = error.message || 'Internal Server Error'

  res.status(status).json({ error: message })
}

module.exports = errorHandler
