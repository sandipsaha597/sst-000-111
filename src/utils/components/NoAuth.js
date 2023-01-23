import { Navigate, useLocation } from 'react-router-dom'

const NoAuth = ({ children, isLoggedIn }) => {
  if (isLoggedIn) {
    return <Navigate to="/" />
  }

  return children
}

export default NoAuth
