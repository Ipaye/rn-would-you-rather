import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Navigation from './Navigation'
import QuestionTile from './QuestionTile'

class Home extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  state = {
    questionType: 'unAnswered',
  }

  handleQuestionState = (e, value) => {
    e.preventDefault()
    if (value == 'unAnswered') {
      this.setState({ questionType: 'unAnswered' })
    } else {
      this.setState({ questionType: 'answered' })
    }
  }

  render() {
    const { questionType } = this.state
    return (
      <div className="container">
        <Navigation />
        <div class="page-header mt-5">
          <div class="content">
            <div className="content-image">
              <img src="/assets/icons/avatar4.png" alt="" />
            </div>
            <div class="content-details">
              <h1 className="heading-title">Dashboard</h1>
              <p>View all the listing of all the questions, answered and unanswered questions</p>
            </div>
          </div>
        </div>

        <section>
          <div class="columns">
            <div class="column is-3">
              <aside class="menu">
                <p class="menu-label">Question Categories</p>
                <ul class="menu-list">
                  <li>
                    <a className={questionType == 'unAnswered' ? 'is-active' : null} onClick={(e) => this.handleQuestionState(e, 'unAnswered')}>
                      Unanswered
                    </a>
                  </li>
                  <li className="mt-2">
                    <a className={questionType == 'answered' ? 'is-active' : null} onClick={(e) => this.handleQuestionState(e, 'answered')}>
                      Answered
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
            <div class="column">
              {questionType == 'unAnswered'
                ? this.props.unAnsweredQuestions.map((id) => <QuestionTile key={id} id={id} />)
                : this.props.answeredQuestions.map((id) => <QuestionTile key={id} id={id} />)}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

function mapStateToProps({ authenticatedUser, users, questions }) {
  let activeUserAnsweredQuestions = users[authenticatedUser].questions
  questions = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  const answeredQuestions = questions.filter((question) => activeUserAnsweredQuestions.includes(question))
  const unAnsweredQuestions = questions.filter((question) => !activeUserAnsweredQuestions.includes(question))
  return {
    loading: questions ? false : true,
    answeredQuestions,
    unAnsweredQuestions,
  }
}

export default connect(mapStateToProps)(Home)
