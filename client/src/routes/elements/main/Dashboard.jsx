import { useEffect } from 'react'

import { Icon } from '@iconify/react'

import Spinner from '../../../components/global/Spinner'
import SettingsLink from '../../../components/global/SettingsLink'
import AddWidget from '../../../components/pageComponents/Dashboard/AddWidget'

import useWidgetState from '../../../hooks/useWidgetState'

function Dashboard() {
  const { widgetState } = useWidgetState()

  // useEffect(() => {
  //   fetchLists()
  // }, [])
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='d-flex flex-column align-items-center'>
            <div className='d-flex gap-5 align-items-center py-3 px-5 border-bottom'>
              Today's Plan
              <button className='btn p-0 btn-outline-secondary'>
                <Icon icon='material-symbols:navigate-next' width={30} />
              </button>
            </div>
            <AddWidget />
          </div>
        </div>
      </div>
      <SettingsLink />
    </div>
  )
}

export default Dashboard
