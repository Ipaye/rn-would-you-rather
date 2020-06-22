import { ADD_QUESTION, GET_QUESTIONS, SAVE_QUESTION_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    case SAVE_QUESTION_ANSWER:
      const { authenticatedUser, qid, answer } = action
      console.log('[auth  ] ->', authenticatedUser, qid, answer)

      return {
        ...state,
        [qid]: {
          ...state[qid],
          optionOne: {
            ...state[qid].optionOne,
            votes: answer === 'optionOne' ? state[qid].optionOne.votes.concat([authenticatedUser]) : state[qid].optionOne.votes,
          },
          optionTwo: {
            ...state[qid].optionTwo,
            votes: answer === 'optionTwo' ? state[qid].optionTwo.votes.concat([authenticatedUser]) : state[qid].optionTwo.votes,
          },
        },
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      }
    default:
      return state
  }
}
