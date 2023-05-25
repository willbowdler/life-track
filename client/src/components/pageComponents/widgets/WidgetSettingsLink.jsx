import { Icon } from '@iconify/react'

import Modal from '../../global/Modal'

function WidgetSettingsLink({ widgetTitle, widgetItems, options }) {
  const modalBody = <h1>Hi</h1>

  return (
    <>
      <button
        className='btn btn-unstyled'
        data-bs-toggle='modal'
        data-bs-target='#modal'
      >
        <Icon
          className='text-dark'
          icon='material-symbols:settings-outline-rounded'
          width={20}
        />
      </button>
      <Modal title={widgetTitle} body={modalBody}></Modal>
    </>
  )
}

export default WidgetSettingsLink
