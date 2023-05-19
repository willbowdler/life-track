const authService = require('../services/authService')
const userService = require('../services/userService')

const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body

  const newUser = await authService.register(
    firstName,
    lastName,
    email,
    password
  )
  res.status(200).json({
    success: true,
    data: { user: newUser },
    message: 'Successfully registered.',
  })
}

const login = async (req, res) => {
  const { email, password } = req.body

  const user = await authService.login(email, password, req.session)
  res.status(200).json({
    success: true,
    data: { user: user },
    message: 'Successfully logged in.',
  })
}

const logout = async (req, res) => {
  await authService.logout(req.session)

  res.status(200).json({
    success: true,
    message: 'Successfully logged out.',
  })
}

const persistLogin = async (req, res) => {
  if (req.session.userId) {
    const user = userService.findUserById(req.session.userId)
    res.status(200).json({
      success: true,
      data: { user: user },
      message: 'Successfully persisted.',
    })
  } else throw new Error('Unauthorized. User not logged in.', 401)
}

module.exports = {
  register,
  login,
  logout,
  persistLogin,
}
