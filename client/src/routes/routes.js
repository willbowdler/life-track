import Login from './elements/auth/Login'
import Register from './elements/auth/Register'

import Dashboard from './elements/main/Dashboard'
import AddWidget from './elements/main/AddWidget'
import GlobalSettings from './elements/main/GlobalSettings'
import ToDoToday from './elements/main/ToDoToday'

import AdminBoard from './elements/admin/AdminBoard'

const routes = [
  {
    path: '/login',
    element: <Login />,
    // loader: '',
  },
  {
    path: '/register',
    element: <Register />,
    // loader: '',
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    // loader: '',
  },
  {
    path: '/todo',
    element: <ToDoToday />,
    // loader: '',
  },
  {
    path: '/add_widget',
    element: <AddWidget />,
    // loader: '',
  },
  {
    path: '/settings',
    element: <GlobalSettings />,
    // loader: '',
  },
  {
    path: '/admin/board',
    element: <AdminBoard />,
    // loader: '',
  },
]

export default routes
