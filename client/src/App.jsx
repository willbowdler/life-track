import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import routes from './routes/routes'

import ErrorPage from './routes/ErrorPage'
import Root from './routes/Root'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: routes,
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
