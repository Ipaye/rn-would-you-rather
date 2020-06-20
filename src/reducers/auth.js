import { SET_AUTHENTICATED_USER, UNSET_AUTHENTICATED_USER } from '../actions/auth'

export default function authenticateUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHENTICATED_USER:
      return action.user
    case UNSET_AUTHENTICATED_USER:
      state = null
      return state
    default:
      return state
  }
}
