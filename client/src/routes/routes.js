import Protected from './authorizaton/Protected'

import Login from './elements/auth/Login'
import Register from './elements/auth/Register'

import Dashboard from './elements/main/Dashboard'
import GlobalSettings from './elements/main/GlobalSettings'
import ToDoToday from './elements/main/ToDoToday'

import AdminBoard from './elements/admin/AdminBoard'

const routes = [
  {
    path: '/login',
    element: (
      <Protected permission={'guest'}>
        <Login />
      </Protected>
    ),
    // loader: '',
  },
  {
    path: '/register',
    element: (
      <Protected permission={'guest'}>
        <Register />
      </Protected>
    ),
    // loader: '',
  },
  {
    path: '/dashboard',
    element: (
      <Protected>
        <Dashboard />
      </Protected>
    ),
    // loader: '',
  },
  {
    path: '/todo',
    element: (
      <Protected>
        <ToDoToday />
      </Protected>
    ),
    // loader: '',
  },
  {
    path: '/settings',
    element: (
      <Protected>
        <GlobalSettings />
      </Protected>
    ),
  },
  {
    path: '/admin/board',
    element: (
      <Protected>
        <AdminBoard />
      </Protected>
    ),
    // loader: '',
  },
]

export default routes
