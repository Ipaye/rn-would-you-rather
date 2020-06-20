import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_data'
import { showLoading, hideLoading } from 'react-redux-loading'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTIONS = 'ADD_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

function addQuestion(question) {
  return {
    type: ADD_QUESTIONS,
    question,
  }
}

export function getQuestions() {
  return {
    type: GET_QUESTIONS,
  }
}

function saveAnswerToQuestion({ authedUser, qid, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  }
}

// Action Creators
export function handleAddQuestion(question) {
  return async (dispatch, getState) => {
    const { authenticatedUser } = getState()

    dispatch(showLoading())

    return _saveQuestion({ author: authenticatedUser, ...question })
      .then((tweet) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

export function handleSaveAnswerToQuestion(questionDetails) {
  return (dispatch) => {
    dispatch(showLoading())

    return _saveQuestionAnswer(questionDetails)
      .then((_) => dispatch(saveAnswerToQuestion()))
      .then((_) => dispatch(getQuestions()))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        alert('The was an error answering the question. Try again.')
      })
  }
}
