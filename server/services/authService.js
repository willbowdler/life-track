const db = require('../models')

const User = db.User
const Widget = db.Widget
const WidgetItem = db.WidgetItem
const ItemType = db.ItemType
const WidgetType = db.WidgetType
const Settings = db.Settings

const bcrypt = require('bcrypt')

const findUserByEmail = async () => {}

const register = async (name, email, password) => {
  const existingUser = await User.findOne({ where: { email } })
  if (existingUser) throw new Error('User with this email already exists.', 409)

  const hashedPassword = await bcrypt.hash(password, 10)

  const settingsData = {
    theme: 'light',
  }

  const userData = {
    name: name,
    email: email,
    password: hashedPassword,
    settings: settingsData,
  }

  const newUser = await User.create(userData)
  newUser = await User.createSettings(settingsData)
  return newUser
}

const login = async (email, password, session) => {
  console.log(User)
  const user = await User.findOne({
    where: { email },
    include: [
      {
        model: Widget,
        include: [
          { model: WidgetType },
          { model: WidgetItem, include: [{ model: ItemType }] },
        ],
      },
      { model: Settings },
    ],
  })

  if (!user) throw new Error('Invalid email or password', 401)

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) throw new Error('Invalid email or password', 401)

  session.userId = user.id
  return user
}

const logout = async (session) => {
  session.destroy((err) => {
    if (err) throw new Error('Internal Server Error', 500)
    return 'Login Successful'
  })
}

module.exports = {
  findUserByEmail,
  register,
  login,
  logout,
}
