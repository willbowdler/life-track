const db = require('../models')

const User = db.User

const findUserByEmail = async (email) => {
  const existingUser = await User.findOne({ where: { email } })
  if (!existingUser) throw new Error('No user found.')
  return existingUser
}

const findUserById = async (id) => {
  const existingUser = await User.findOne({ where: { id } })
  if (!existingUser) throw new Error('No user found.')
  return existingUser
}

module.exports = { findUserByEmail, findUserById }
