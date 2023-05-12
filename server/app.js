const express = require('express')
const session = require('express-session')

const config = require('./config/config')
const sessionConfig = require('./config/session')

const app = express()

// Middlewares
const errorMiddleware = require('./middleware/errorHandler')

// Routes
const widgetRouter = require('./routes/widgetRouter.js')

app.use(express.json())
app.use('/api/widgets', widgetRouter)
app.use(errorMiddleware)
app.use(session(sessionConfig))

const PORT = config.port || 3000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
