import { Outlet } from 'react-router'

import { Icon } from '@iconify/react'

function Root() {
  return (
    <div className='min-vh-100'>
      <nav className='navbar navbar-expand bg-light border-bottom border-2 px-2'>
        <div className='container-fluid'>
          <div className='navbar-brand'>Life Track</div>

          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link cursor-pointer'>
                <Icon icon='ph:bell-bold' width={20} />
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link cursor-pointer'>
                <Icon
                  icon='material-symbols:add-circle-outline-rounded'
                  width={20}
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Root
