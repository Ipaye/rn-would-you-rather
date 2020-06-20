import { showLoading, hideLoading } from 'react-redux-loading'

export const SET_AUTHENTICATED_USER = 'SET_AUTHENTICATED_USER'
export const UNSET_AUTHENTICATED_USER = 'UNSET_AUTHENTICATED_USER'

export function loginUser(user) {
  return {
    type: SET_AUTHENTICATED_USER,
    user,
  }
}

export function logoutUser() {
  return {
    type: UNSET_AUTHENTICATED_USER,
  }
}
