import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class QuestionDetails extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  handleCancel = (e) => {
    e.preventDefault()
    this.props.history.push('/dashboard')
  }

  render() {
    const { author } = this.props
    if (!author) {
      return <Redirect to="/404" />
    }
    return (
      <div className="container">
        <Navigation />
        <div class="page-header mt-5">
          <div class="content">
            <div className="content-image">
              <img src={this.props.author.avatarURL} alt="" />
            </div>
            <div class="content-details">
              <h1 className="heading-title">{this.props.author.name} asks</h1>
              <p>answer or view the result of the question asked by ({this.props.author.name})</p>
            </div>
          </div>
        </div>

        {this.props.hasAnsweredQuestion === true ? (
          <div class="box columns">
            <div class="column is-7">
              <h2 style={{ fontSize: '30px' }}>Results</h2>

              <div class="field mt-4">
                <label class="label">
                  {this.props.question.optionOne.votes.length} out of{' '}
                  {this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length} votes
                </label>
                <div className={this.props.question.optionOne.votes.includes(author.id) ? 'control has-icons-right' : 'control'}>
                  <input
                    className={this.props.question.optionOne.votes.includes(author.id) ? 'input is-success' : 'input'}
                    disabled
                    type="text"
                    value={this.props.question.optionOne.text}
                  />
                  {this.props.question.optionOne.votes.includes(author.id) ? (
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  ) : null}
                </div>
                <p class="help is-success">
                  {(this.props.question.optionOne.votes.length /
                    (this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length)) *
                    100}
                  % voted for this
                </p>
              </div>

              <div class="field mt-4">
                <label class="label">
                  {' '}
                  {this.props.question.optionTwo.votes.length} out of{' '}
                  {this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length} votes
                </label>
                <div className={this.props.question.optionTwo.votes.includes(author.id) ? 'control has-icons-right' : 'control'}>
                  <input
                    className={this.props.question.optionTwo.votes.includes(author.id) ? 'input is-success' : 'input'}
                    disabled
                    type="text"
                    value={this.props.question.optionTwo.text}
                  />
                  {this.props.question.optionTwo.votes.includes(author.id) ? (
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  ) : null}
                </div>
                <p class="help is-success">
                  {(this.props.question.optionTwo.votes.length /
                    (this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length)) *
                    100}
                  % voted for this
                </p>
              </div>

              <div class="field is-grouped mt-5">
                <div class="control">
                  <button onClick={this.handleCancel} class="button is-link is-light">
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div class="box columns">
            <div class="column is-7">
              <h2 style={{ fontSize: '30px' }}>Would you Rather ?</h2>

              <div class="field mt-4">
                <div class="control">
                  <label class="radio">
                    <input type="radio" name="question" value={this.props.question.optionOne.text} />
                    {this.props.question.optionOne.text}
                  </label>
                </div>
              </div>

              <div class="field mt-2 mb-4">
                <div class="control">
                  <label class="radio">
                    <input type="radio" name="question" value={this.props.question.optionTwo.text} />
                    {this.props.question.optionTwo.text}
                  </label>
                </div>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link">Submit</button>
                </div>
                <div class="control">
                  <button onClick={this.handleCancel} class="button is-link is-light">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps({ users, authenticatedUser, questions }, props) {
  console.log('[props] ->', props)
  const { id } = props.match.params
  const question = questions[id]
  let author
  console.log('[question, id ] ->', props.history)
  if (question) {
    author = users[question.author]
  }

  let activeUserAnsweredQuestions = Object.keys(users[authenticatedUser].answers)
  let hasAnsweredQuestion = activeUserAnsweredQuestions.includes(id)

  return {
    question,
    author,
    hasAnsweredQuestion,
  }
}

export default connect(mapStateToProps)(QuestionDetails)
