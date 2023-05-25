const request = async (url, method = 'GET', bodyData = null) => {
  const headers = {
    'Content-Type': 'application/json',
  }

  const options = {
    method,
    headers,
    body: bodyData ? JSON.stringify(bodyData) : null,
  }

  const response = await fetch(url, options)
  const data = await response.json()
  return data
}

const widgetService = {
  createWidget(newWidget, userId) {
    return request('api/widgets/create', 'POST', { newWidget, userId })
  },

  findWidgetsByUserId(userId) {
    return request(`api/widgets/${userId}/index`)
  },

  findWidgetById(widgetId) {
    return request(`api/widgets/${widgetId}/show`)
  },

  updateWidget(widgetId, widgetData) {
    return request(`api/widgets/${widgetId}/update`, 'PUT', widgetData)
  },

  deleteWidget(widgetId) {
    return request(`api/widgets/${widgetId}/destroy`, 'DELETE')
  },
}

export default widgetService
