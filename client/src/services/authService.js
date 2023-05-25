const authService = {
  async register(userData) {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
    const data = await response.json()
    return data
  },

  async login(loginData) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData),
    })
    const data = await response.json()
    return data
  },

  async logout(userId) {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: userId }),
    })
    const data = await response.json()
    return data
  },

  async persist() {
    const response = await fetch('./api/auth/persist')
    const data = await response.json()
    return data
  },
}

// TODO check logged in function that happens on a use effect, but is that necessary

export default authService
