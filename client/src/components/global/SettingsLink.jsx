import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

function SettingsLink() {
  return (
    <div className='fixed-bottom d-flex justify-content-end m-3 cursor-pointer'>
      <Link to='/settings'>
        <Icon
          className='text-dark'
          icon='material-symbols:settings-outline-rounded'
          width={20}
        />
      </Link>
    </div>
  )
}

export default SettingsLink
