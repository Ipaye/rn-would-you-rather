import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'

import authenticateUser from './auth'
import users from './users'
import questions from './questions'

export default combineReducers({
  authenticateUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
})
