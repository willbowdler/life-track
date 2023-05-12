import ErrorPage from './routes/ErrorPage'
import Dashboard from './routes/Dashboard'
import Root from './routes/Root'

import dashboardLoader from './routes/loaders/dashboardLoader.js'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useListsContext } from './context/ListsContext'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
      ],
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
