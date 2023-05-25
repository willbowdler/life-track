const initialWidgetState = {
  isLoading: false,
  widgets: [],
  error: null,
}

const widgetReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, isLoading: true, error: null }
    case 'FETCH_SUCCESS':
      return { ...state, isLoading: false, widgets: action.payload }
    case 'FETCH_FAILURE':
      return { ...state, isLoading: false, error: action.payload }
    default:
      return state
  }
}

export { widgetReducer, initialWidgetState }
