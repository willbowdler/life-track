import { useEffect, useState, useRef } from 'react'

import { Icon } from '@iconify/react'

import Modal from '../../global/Modal'
import ChecklistOptions from './widgetOptions/ChecklistOptions'
import ListOptions from './widgetOptions/ListOptions'
import ReminderOptions from './widgetOptions/ReminderOptions'

import { useAuth } from '../../../context/AuthContext'

function AddWidget() {
  const formRef = useRef()

  const [widgetTitle, setWidgetTitle] = useState()
  const [widgetTypes, setWidgetTypes] = useState()
  const [widgetItems, setWidgetItems] = useState([])
  const [selectedType, setSelectedType] = useState()
  const { authState } = useAuth()

  const widgetOptions = {
    Checklist: (
      <ChecklistOptions
        widgetItems={widgetItems}
        setWidgetItems={setWidgetItems}
        title={widgetTitle}
      />
    ),
    List: (
      <ListOptions
        widgetItems={widgetItems}
        setWidgetItems={setWidgetItems}
        title={widgetTitle}
      />
    ),
    Reminder: (
      <ReminderOptions
        widgetItems={widgetItems}
        setWidgetItems={setWidgetItems}
        title={widgetTitle}
      />
    ),
  }

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value)
  }

  const fetchWidgetTypes = async () => {
    const response = await fetch('/api/widget-types/index')
    const data = await response.json()
    setWidgetTypes(data?.data?.widgetTypes)
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
            <option>--Select a widget type--</option>
            {widgetTypes
              ? widgetTypes.map((type, i) => {
                  return (
                    <option key={i} value={type.type}>
                      {type.type}
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
            onChange={(e) => setWidgetTitle(e.target.value)}
          />
        </div>
        {selectedType ? widgetOptions[selectedType] : null}
      </div>
    </div>
  )

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault()
        const widgetItemsCleaned = widgetItems.map((widgetItem) => {
          return {
            content: widgetItem.content,
          }
        })

        fetch(`/api/widgets/${authState.user.data.user.id}/create`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: widgetTitle,
            type: selectedType,
            widgetItems: widgetItemsCleaned,
          }),
        })

        setWidgetItems([])
        setWidgetTitle(null)

        formRef.current.reset()
      }}
    >
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
          data-bs-dismiss='modal'
        >
          Close
        </button>
        <button
          type='submit'
          className='btn btn-primary'
          data-bs-dismiss='modal'
        >
          Save
        </button>
      </Modal>
    </form>
  )
}

export default AddWidget
