import { useEffect, useState } from 'react'

import { useAuth } from '../../../context/AuthContext'
import { useLogout } from '../../../hooks/auth'

import Modal from '../../../components/global/Modal'
import { Icon } from '@iconify/react'

function GlobalSettings() {
  const [settings, setSettings] = useState({})
  const { authState } = useAuth()

  const { logout } = useLogout()

  useEffect(() => {
    if (authState.isLoggedIn) setSettings(authState.user.settings)
  }, [authState])

  return (
    <>
      <div className='container'>
        <div className='d-flex flex-column'>
          <h1 className='d-flex align-items-center gap-1 display-4 text-dark p-3'>
            <Icon
              className='text-dark'
              icon='material-symbols:settings-outline-rounded'
              width={35}
            />
            Settings
          </h1>
          <div
            className='border-bottom border-secondary p-3'
            data-bs-toggle='modal'
            data-bs-target='#modal'
          >
            <button className='btn btn-unstyled fs-5'>Logout</button>
          </div>

          <Modal
            title={'Logout'}
            body={'Are you sure you would like to log out?'}
          >
            <button className='btn btn-primary' data-bs-dismiss='modal'>
              Cancel
            </button>
            <button
              onClick={() => logout()}
              className='btn btn-secondary'
              data-bs-dismiss='modal'
            >
              Logout
            </button>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default GlobalSettings
