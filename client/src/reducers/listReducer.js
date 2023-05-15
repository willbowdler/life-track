const initialWidgetState = {
  isLoading: true,
  lists: [],
  error: null,
}

// TODO i want to remove is loading and handle that in the component

const listReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, isLoading: true, error: null }
    case 'FETCH_SUCCESS':
      return { ...state, isLoading: false, lists: action.payload }
    case 'FETCH_FAILURE':
      return { ...state, isLoading: false, error: action.payload }
    default:
      return state
  }
}

export { listReducer, initialStateList }
