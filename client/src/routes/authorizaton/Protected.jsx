import { useEffect } from 'react'

import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

import { usePersist } from '../../hooks/auth'

function Protected({ children, permission = 'user' }) {
  const { authState } = useAuth()
  const { persist } = usePersist()

  const handlePersist = async () => await persist()

  useEffect(() => {
    handlePersist()
  }, [authState.isLoggedIn])

  switch (permission) {
    case 'user':
      if (authState.isLoggedIn) {
        return <div>{children}</div>
      } else {
        return <div>{children}</div>
      }

    case 'guest':
      if (authState.isLoggedIn) {
        return <Navigate to='/dashboard' replace />
      } else {
        return <div>{children}</div>
      }

    default:
      console.warn('Invalid permission prop provided.')
      return null
  }
}

export default Protected
