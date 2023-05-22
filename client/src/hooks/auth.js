import authService from '../services/authService'
import { useAuth } from '../context/AuthContext'

const useRegister = () => {
  const { authDispatch } = useAuth()

  const register = async (userData) => {
    try {
      authDispatch({ type: 'LOGIN_REQUEST' })
      const data = await authService.register(userData)
      authDispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user: data, userRole: data.role },
      })
      return data
    } catch (error) {
      authDispatch({ type: 'LOGIN_FAILURE', payload: { error: error } })
    }
  }
  return { register }
}

const useLogin = () => {
  const { authDispatch } = useAuth()

  const login = async (loginData) => {
    try {
      authDispatch({ type: 'LOGIN_REQUEST' })
      const data = await authService.login(loginData)
      authDispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user: data, userRole: data.role },
      })
      return data
    } catch (error) {
      authDispatch({ type: 'LOGIN_FAILURE', payload: { error: error } })
    }
  }
  return { login }
}

const useLogout = () => {
  const { authDispatch } = useAuth()
  const logout = (userId) => {
    authDispatch({ type: 'LOGOUT' })
    const data = authService.logout(userId)
    return data
  }
  return { logout }
}

const usePersist = () => {
  const { authDispatch, authState } = useAuth()

  const persist = async () => {
    try {
      if (authState.isLoggedIn) return

      authDispatch({ type: 'LOGIN_REQUEST' })
      const data = await authService.persist()
      authDispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user: data, userRole: data.role },
      })
      return data
    } catch (error) {
      authDispatch({ type: 'LOGIN_FAILURE', payload: { error: error } })
    }
  }
  return { persist }
}

export { useRegister, useLogin, useLogout, usePersist }
