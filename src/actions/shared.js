import { showLoading, hideLoading } from 'react-redux-loading'

import { _getQuestions, _getUsers } from '../utils/_data'
import { getUsers } from '../actions/users'
import { getQuestions } from '../actions/questions'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())

    return Promise.all([_getQuestions(), _getUsers()]).then(([questions, users]) => {
      dispatch(getUsers(users))
      dispatch(getQuestions(questions))

      dispatch(hideLoading())
    })
  }
}
