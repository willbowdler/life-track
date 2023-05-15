import authService from '../services/authService'
import { useAuth } from '../context/AuthContext'

const useRegister = async (userData) => {
  const { dispatch } = useAuth()
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

const useLogin = async (loginData) => {
  const { dispatch } = useAuth()
  try {
    dispatch({ type: 'LOGIN_REQUEST' })
    const data = authService.login(loginData)
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: { user: data, userRole: data.role },
    })
    return data
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: { error: error } })
  }
}

const useLogout = async (userId) => {
  const { dispatch } = useAuth()

  dispatch({ type: 'LOGOUT' })
  const data = authService.logout(userId)
  return data
}

export { useRegister, useLogin, useLogout }
