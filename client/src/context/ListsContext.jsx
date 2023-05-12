import { useContext, createContext, useReducer } from 'react'

import { listReducer, initialStateList } from '../reducers/listReducer.jsx'

const ListsContext = createContext()

export const ListProvider = ({ children }) => {
  const [listState, dispatchList] = useReducer(listReducer, initialStateList)

  const listRequestBoilerPlate = (url, method = 'GET', bodyData = {}) => {
    const requestOptions = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyData),
    }

    dispatchList({ type: 'FETCH_REQUEST' })

    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((lists) => {
        dispatchList({ type: 'FETCH_SUCCESS', payload: lists })
      })
      .catch((error) => {
        dispatchList({ type: 'FETCH_FAILURE', error: error })
      })
  }

  const fetchLists = () => listRequestBoilerPlate('api/lists/index')

  const addList = (data) =>
    listRequestBoilerPlate('/api/lists/create', 'POST', data)

  const editList = (data, listId) =>
    listRequestBoilerPlate(`/api/lists/${listId}/update`, 'PUT', data)

  const deleteList = (listId) =>
    listRequestBoilerPlate(`/api/lists/${listId}/destroy`, 'DELETE')

  return (
    <ListsContext.Provider
      value={{ fetchLists, addList, editList, deleteList, listState }}
    >
      {children}
    </ListsContext.Provider>
  )
}

export const useListsContext = () => {
  return useContext(ListsContext)
}
