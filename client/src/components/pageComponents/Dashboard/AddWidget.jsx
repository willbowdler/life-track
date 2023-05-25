import { useEffect, useState } from 'react'

import { Icon } from '@iconify/react'

import Modal from '../../global/Modal'
import ChecklistOptions from './widgetOptions/ChecklistOptions'
import ListOptions from './widgetOptions/ListOptions'
import ReminderOptions from './widgetOptions/ReminderOptions'

function AddWidget() {
  const [widgetTypes, setWidgetTypes] = useState()
  const [selectedType, setSelectedType] = useState()

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value)
  }

  const fetchWidgetTypes = async () => {
    const response = await fetch('/api/widget-types/index')
    const data = await response.json()
    setWidgetTypes(data)
  }
  useEffect(() => {
    fetchWidgetTypes()
  }, [])

  const addWidgetModalBody = (
    <div>
      <div className='d-flex flex-column gap-3 py-4 px-2'>
        <div>
          <label htmlFor='widgetType'>Select Widget Type:</label>
          <select
            onChange={(e) => {
              handleTypeChange(e)
            }}
            className='form-control'
            id='widgetType'
          >
            {widgetTypes
              ? widgetTypes.data.widgetTypes.map((type, i) => {
                  return (
                    <option key={i} value={type.name}>
                      {type.name}
                    </option>
                  )
                })
              : null}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='widgetTitle'>Widget Title:</label>
          <input
            type='text'
            className='form-control'
            id='widgetTitle'
            placeholder='Enter widget title'
          />
        </div>
        {selectedType ? widgetOptions[selectedType] : null}
      </div>
    </div>
  )

  const widgetOptions = {
    Checklist: <ChecklistOptions />,
    List: <ListOptions />,
    Reminder: <ReminderOptions />,
  }

  return (
    <form>
      <button
        type='button'
        className='btn btn-nostyle'
        data-bs-toggle='modal'
        data-bs-target='#addWidgetModal'
      >
        <Icon
          className='mt-3'
          icon='material-symbols:add-circle-outline-rounded'
          width={20}
        />
      </button>
      <Modal
        title={'Add Widget'}
        body={addWidgetModalBody}
        id={'addWidgetModal'}
      >
        <button
          type='button'
          className='btn btn-secondary'
          data-dismiss='modal'
        >
          Close
        </button>
        <button type='button' className='btn btn-primary'>
          Save
        </button>
      </Modal>
    </form>
  )
}

export default AddWidget
