import Authorized from './Authorized'

import Dashboard from './elements/Dashboard'
import AddWidget from './elements/AddWidget'
import GlobalSettings from './elements/GlobalSettings'
import ToDoToday from './elements/ToDoToday'
import AdminBoard from './elements/AdminBoard'

const routes = [
  {
    path: '/dashboard',
    element: (
      <Authorized>
        <Dashboard />
      </Authorized>
    ),
  },
  {
    path: '/todo',
    element: (
      <Authorized>
        <ToDoToday />
      </Authorized>
    ),
  },
  {
    path: '/add_widget',
    element: (
      <Authorized>
        <AddWidget />
      </Authorized>
    ),
  },
  {
    path: '/settings',
    element: (
      <Authorized>
        <GlobalSettings />
      </Authorized>
    ),
  },
  {
    path: '/admin/board',
    element: (
      <Authorized admin={true}>
        <AdminBoard />
      </Authorized>
    ),
  },
]

export default routes
