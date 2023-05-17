import authService from '../services/authService'
import { useAuth } from '../context/AuthContext'

const useRegister = async () => {
  const { dispatch } = useAuth()
  const register = async (userData) => {
    try {
      dispatch({ type: 'LOGIN_REQUEST' })
      const data = await authService.register(userData)
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user: data, userRole: data.role },
      })
      return data
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: { error: error } })
    }
  }
  return { register }
}

const useLogin = () => {
  const { dispatch } = useAuth()

  const login = async (loginData) => {
    try {
      dispatch({ type: 'LOGIN_REQUEST' })
      const data = await authService.login(loginData)
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user: data, userRole: data.role },
      })
      return data
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: { error: error } })
    }
  }
  return { login }
}

const useLogout = async () => {
  const { dispatch } = useAuth()
  const logout = (userId) => {
    dispatch({ type: 'LOGOUT' })
    const data = authService.logout(userId)
    return data
  }
  return { logout }
}

export { useRegister, useLogin, useLogout }
