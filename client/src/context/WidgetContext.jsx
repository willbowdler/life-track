import { createContext, useContext, useReducer } from 'react'
import { widgetReducer, initialWidgetState } from '../reducers/widgetReducer'

const WidgetsContext = createContext()

export const WidgetProvider = ({ children }) => {
  const [widgetState, widgetDispatch] = useReducer(
    widgetReducer,
    initialWidgetState
  )

  return (
    <WidgetsContext.Provider value={{ widgetState, widgetDispatch }}>
      {children}
    </WidgetsContext.Provider>
  )
}

export const useWidgetContext = () => {
  return useContext(WidgetsContext)
}
