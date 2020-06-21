import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_data'
import { showLoading, hideLoading } from 'react-redux-loading'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
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
export function refetchQuestions() {
  return async (dispatch, getState) => {
    dispatch(showLoading())

    return _getQuestions()
      .then((question) => dispatch(getQuestions(question)))
      .then(() => dispatch(hideLoading()))
  }
}

export function handleAddQuestion(question) {
  return async (dispatch, getState) => {
    const { authenticatedUser } = getState()

    dispatch(showLoading())

    return _saveQuestion({ author: authenticatedUser, optionOneText: question.option1, optionTwoText: question.option2 })
      .then((newQuestion) => {
        console.log('[new question] ->', newQuestion)
        return dispatch(addQuestion(newQuestion))
      })
      .then(() => dispatch(hideLoading()))
  }
}

export function handleSaveAnswerToQuestion(questionDetails) {
  return (dispatch) => {
    dispatch(showLoading())

    return _saveQuestionAnswer(questionDetails)
      .then((_) => dispatch(saveAnswerToQuestion()))
      .then((_) => dispatch(refetchQuestions()))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        alert('The was an error answering the question. Try again.')
      })
  }
}
