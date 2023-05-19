const validateAuthForm = (data) => {
  const errors = {}
  const { firstName, email, password, confirmPassword } = data
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (data.hasOwnProperty('firstName'))
    if (!firstName) errors.name = 'First name is required!'

  if (!email) errors.email = 'Email is required!'
  else if (!emailRegex.test(email)) errors.email = 'Invalid email format!'

  if (!password) errors.password = 'Password is required!'
  else if (password.length < 8)
    errors.password = 'Password must be at least 8 characters long.'
  else if (password !== confirmPassword)
    errors.password = 'Passwords do not match.'

  return errors
}

export default validateAuthForm
