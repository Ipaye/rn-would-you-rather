import { GET_USERS, ADD_QUESTION_TO_USER } from '../actions/users'

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      }
    case ADD_QUESTION_TO_USER:
      console.log('[values] ->', action.questionData.question)
      let questionID = action.questionData.question.id
      let author = action.questionData.question.author
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([questionID]),
        },
      }

    // case SAVE_QUESTION_ANSWER_TO_USER:
    //   let { authenticatedUser, question, answer } = action
    //   console.log('[save question answer to user  ] ->', authenticatedUser, question, answer)
    //   let newAnswer = { [question]: answer }

    //   return {
    //     ...state,
    //     [authenticatedUser]: {
    //       ...users[authenticatedUser],
    //       answers: Object.assign(users[authenticatedUser].answers, newAnswer),
    //     },
    //   }
    default:
      return state
  }
}
