import { AuthProvider } from './context/AuthContext'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import routes from './routes/routes'

import ErrorPage from './routes/elements/error/ErrorPage'
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
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  )
}

export default App
