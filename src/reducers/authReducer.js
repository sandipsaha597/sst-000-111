import produce from 'immer'
import allUsers from '../allUsers/allUsers'

const LOGIN = 'LOGIN'
const SIGNUP = 'SIGNUP'
const LOGOUT = 'LOGOUT'

export const AUTH_DISPATCH_ACTION_TYPE = {
  LOGIN,
  SIGNUP,
  LOGOUT,
}

const initialState = {
  userDetails: {},
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return produce(state, (draft) => {
        const user = allUsers.find(
          (user) => user.username === action.payload.username
        )
        if (!user || user?.password !== action.payload.password) {
          alert('invalid credentials')
          return state
        }
        draft.userDetails = user
      })
    case SIGNUP:
      return produce(state, (draft) => {
        const user = allUsers.find(
          ({ username }) => username === action.payload.username
        )
        if (user) {
          alert('user already exist')
          return state
        }
        const newUser = {
          username: action.payload.username,
          password: action.payload.password,
        }
        allUsers.push(newUser)
        return { userDetails: newUser }
      })
    case LOGOUT:
      return { userDetails: {} }

    default:
      return state
  }
}

export default authReducer
