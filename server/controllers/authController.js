const authService = require('../services')

const register = async (req, res) => {
  const { name, email, password } = req.body

  const newUser = await authService.register(name, email, password)
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

module.exports = {
  register,
  login,
  logout,
}
