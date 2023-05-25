import { useEffect } from 'react'

import widgetService from '../services/widgetService'

import { useWidgetContext } from '../context/WidgetContext'

function useWidgetState() {
  const { widgetState, widgetDispatch } = useWidgetContext()

  useEffect(() => {
    console.log('Jesus is Lord and no one can change that.')
    fetchWidgets()
  }, [])

  const handleFetch = async (serviceFunction) => {
    try {
      widgetDispatch({ type: 'FETCH_REQUEST' })
      const widgets = await serviceFunction
      widgetDispatch({ type: 'FETCH_SUCCESS', payload: widgets })
    } catch (error) {
      widgetDispatch({ type: 'FETCH_FAILURE', payload: error.message })
    }
  }

  const createWidget = async (newWidget, userId) =>
    handleFetch(widgetService.createWidget(newWidget, userId))

  const fetchWidgets = async (userId) =>
    handleFetch(widgetService.findWidgetsByUserId(userId))

  const findWidgetById = async (widgetId) =>
    handleFetch(() => widgetService.findWidgetById(widgetId))

  const updateWidget = async (widgetId, widgetData) =>
    handleFetch(widgetService.updateWidget(widgetId, widgetData))

  const deleteWidget = async (widgetId) =>
    handleFetch(widgetService.deleteWidget(widgetId))

  return {
    widgetState,
    createWidget,
    fetchWidgets,
    findWidgetById,
    updateWidget,
    deleteWidget,
  }
}

export default useWidgetState
