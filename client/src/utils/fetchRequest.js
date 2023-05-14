const fetchRequest = (url, method = 'GET', bodyData = {}) => {
  const requestOptions = {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData),
  }
}

//   dispatchList({ type: 'FETCH_REQUEST' })

//   fetch(url, requestOptions)
//     .then((res) => res.json())
//     .then((lists) => {
//       dispatchList({ type: 'FETCH_SUCCESS', payload: lists })
//     })
//     .catch((error) => {
//       dispatchList({ type: 'FETCH_FAILURE', error: error })
//     })
// }
