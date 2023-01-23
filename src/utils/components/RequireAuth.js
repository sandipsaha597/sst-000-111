import { Navigate } from 'react-router-dom'

const RequireAuth = ({ children, isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/accounts/login" />
  }

  return children
}

export default RequireAuth
