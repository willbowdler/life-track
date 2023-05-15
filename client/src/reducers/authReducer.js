const initialAuthState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
  userRole: null,
}

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.payload.user,
        userRole: action.payload.userRole,
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      }
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        userRole: null,
      }
    default:
      return state
  }
}

export { authReducer, initialAuthState }
