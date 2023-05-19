import { useEffect } from 'react'

import SettingsLink from '../../../components/global/SettingsLink'

import { Icon } from '@iconify/react'

// import { useListsContext } from '../context/ListsContext'

// import Spinner from '../components/global/Spinner'

function Dashboard() {
  // const { listState, fetchLists } = useListsContext()

  // useEffect(() => {
  //   fetchLists()
  // }, [])
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='d-flex flex-column align-items-center'>
            <div className='d-flex gap-5 align-items-center pt-2'>
              Today's Plan
              <button className='btn p-0 btn-outline-secondary'>
                <Icon icon='material-symbols:navigate-next' width={30} />
              </button>
            </div>

            {/* {listState.isLoading ? (
              <Spinner />
            ) : (
              listState.list.map((list, i) => {
                return <h1 key={i}>Yo</h1>
              })
            )} */}
          </div>
        </div>
      </div>
      <SettingsLink />
    </div>
  )
}

export default Dashboard
