import { ADD_QUESTION, GET_QUESTIONS, SAVE_QUESTION_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    case SAVE_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action

      return {
        ...state,
        [qid]: {
          ...state[qid],
          optionOne: {
            ...state[qid].optionOne,
            votes: [
              ...state[qid].optionOne.votes,
              answer === state[qid].optionOne ? state[qid].optionOne.votes.concat(authedUser) : state[qid].optionOne.votes,
            ],
          },
          optionTwo: {
            ...state[qid].optionTwo,
            votes: [
              ...state[qid].optionTwo.votes,
              answer === state[qid].optionTwo ? state[qid].optionTwo.votes.concat(authedUser) : state[qid].optionTwo.votes,
            ],
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
