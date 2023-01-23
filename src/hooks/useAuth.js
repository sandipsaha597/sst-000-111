import { useDispatch, useSelector } from 'react-redux'
import { AUTH_DISPATCH_ACTION_TYPE } from '../reducers/authReducer'
import { RETROSPECTIVE_CARDS_DISPATCH_ACTION_TYPE } from '../reducers/retrospectiveCardsReducer'

const useAuth = () => {
  const userDetails = useSelector(
    ({ authReducer: { userDetails } }) => userDetails
  )
  const dispatch = useDispatch()

  const login = (username, password) => {
    dispatch({
      type: AUTH_DISPATCH_ACTION_TYPE.LOGIN,
      payload: {
        username,
        password,
      },
    })
  }

  const signUp = (username, password) => {
    dispatch({
      type: AUTH_DISPATCH_ACTION_TYPE.SIGNUP,
      payload: {
        username,
        password,
      },
    })
  }

  const logout = () => {
    dispatch({
      type: RETROSPECTIVE_CARDS_DISPATCH_ACTION_TYPE.DISCARD_UNSAVED_CARDS,
    })
    dispatch({ type: AUTH_DISPATCH_ACTION_TYPE.LOGOUT })
  }

  return {
    userDetails,
    isLoggedIn: !!Object.keys(userDetails).length,
    login,
    signUp,
    logout,
  }
}

export default useAuth
