export const GET_USERS = 'GET_USERS'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'
export const SAVE_QUESTION_ANSWER_TO_USER = 'SAVE_QUESTION_ANSWER_TO_USER '

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  }
}

// export function saveQuestonAnswerToUser(authenticatedUser, question, answer) {
//   return {
//     type: SAVE_QUESTION_ANSWER_TO_USER,
//     authenticatedUser,
//     question,
//     answer,
//   }
// }

export function addQuestionToUser(questionData) {
  return {
    type: ADD_QUESTION_TO_USER,
    questionData,
  }
}
