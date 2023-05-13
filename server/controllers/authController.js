const authService = require('../services')

const express = require('express')
const bcrypt = require('bcrypt')
const { User } = require('./models')

const router = express.Router()

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body

  let user = await User.findOne({ where: { email } })

  if (user) res.status(409).send('User with this email already exists.')

  const hashedPassword = await bcrypt.hash(password, 10)

  const userData = {
    name: name,
    email: email,
    password: hashedPassword,
  }

  // TODO create settings for them

  user = User.create(userData)
  res.status(200).json({ user: user, message: 'Successfully registered.' })
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({
    where: { email },
    include: [
      {
        model: Widget,
        include: [{ model: WidgetItem }],
      },
      { model: Settings },
    ],
  })

  if (!user) res.status(401).send('Invalid email or password')

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) res.status(401).send('Invalid email or password')

  req.session.userId = user.id

  res.status(200).send('Login successful')
})

router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err)
      return res.status(500).send('Internal Server Error')
    }

    return res.status(200).send('Logout successful')
  })
})

module.exports = router
