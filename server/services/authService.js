const findUserByEmail = async () => {}

const registerUser = async (name, email, password) => {
  let user = await User.findOne({ where: { email } })

  if (user) throw new Error('User with this email already exists.', 409)

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

  // TODO create settings for them

  return await User.create(userData, {
    include: [
      {
        association: Product.User,
        include: [User.Addresses],
      },
    ],
  })
}

module.exports = {
  findUserByEmail,
  registerUser,
}
