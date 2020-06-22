import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { handleSaveAnswerToQuestion } from '../actions/questions'

class QuestionDetails extends Component {
  static propTypes = {
    author: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    hasAnsweredQuestion: PropTypes.bool.isRequired,
  }

  state = {
    selectedOption: '',
  }

  handleCancel = (e) => {
    e.preventDefault()
    this.props.history.push('/dashboard')
  }

  handleOptionChange = (e) => {
    const value = e.target.value
    console.log('[value] ->', value)

    this.setState({
      selectedOption: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { selectedOption } = this.state
    const { question } = this.props

    this.props.dispatch(handleSaveAnswerToQuestion({ selectedOption, question: question.id }))
  }

  render() {
    const { author } = this.props
    const { selectedOption } = this.state
    if (!author) {
      return <Redirect to="/404" />
    }
    let disabled
    if (!selectedOption) {
      disabled = true
    } else {
      disabled = false
    }
    return (
      <div className="container">
        <Navigation />
        <div className="page-header mt-5">
          <div className="content">
            <div className="content-image">
              <img src={this.props.author.avatarURL} alt="" />
            </div>
            <div className="content-details">
              <h1 className="heading-title">{this.props.author.name} asks</h1>
              <p>answer or view the result of the question asked by ({this.props.author.name})</p>
            </div>
          </div>
        </div>

        {this.props.hasAnsweredQuestion === true ? (
          <div className="box columns">
            <div className="column is-7">
              <h2 style={{ fontSize: '30px' }}>Results</h2>

              <div className="field mt-4">
                <label className="label">
                  {this.props.question.optionOne.votes.length} out of{' '}
                  {this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length} votes
                </label>
                <div className={this.props.question.optionOne.votes.includes(this.props.authenticatedUser) ? 'control has-icons-right' : 'control'}>
                  <input
                    className={this.props.question.optionOne.votes.includes(this.props.authenticatedUser) ? 'input is-success' : 'input'}
                    disabled
                    type="text"
                    value={this.props.question.optionOne.text}
                  />
                  {this.props.question.optionOne.votes.includes(this.props.authenticatedUser) ? (
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  ) : null}
                </div>
                <p className="help is-success">
                  {(
                    (this.props.question.optionOne.votes.length /
                      (this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length)) *
                    100
                  ).toFixed(2)}
                  % voted for this
                </p>
              </div>

              <div className="field mt-4">
                <label className="label">
                  {' '}
                  {this.props.question.optionTwo.votes.length} out of{' '}
                  {this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length} votes
                </label>
                <div className={this.props.question.optionTwo.votes.includes(this.props.authenticatedUser) ? 'control has-icons-right' : 'control'}>
                  <input
                    className={this.props.question.optionTwo.votes.includes(this.props.authenticatedUser) ? 'input is-success' : 'input'}
                    disabled
                    type="text"
                    value={this.props.question.optionTwo.text}
                  />
                  {this.props.question.optionTwo.votes.includes(this.props.authenticatedUser) ? (
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  ) : null}
                </div>
                <p className="help is-success">
                  {(
                    (this.props.question.optionTwo.votes.length /
                      (this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length)) *
                    100
                  ).toFixed(2)}
                  % voted for this
                </p>
              </div>

              <div className="field is-grouped mt-5">
                <div className="control">
                  <button onClick={this.handleCancel} className="button is-link is-light">
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="box columns">
            <div className="column is-7">
              <h2 style={{ fontSize: '30px' }}>Would you Rather ?</h2>

              <div className="field mt-4">
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      name="question"
                      onChange={this.handleOptionChange}
                      checked={selectedOption === 'optionOne'}
                      value="optionOne"
                    />
                    {this.props.question.optionOne.text}
                  </label>
                </div>
              </div>

              <div className="field mt-2 mb-4">
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      name="question"
                      onChange={this.handleOptionChange}
                      checked={selectedOption === 'optionTwo'}
                      value="optionTwo"
                    />
                    {this.props.question.optionTwo.text}
                  </label>
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control" onClick={this.handleSubmit}>
                  <button className="button is-link" disabled={disabled}>
                    Submit
                  </button>
                </div>
                <div className="control">
                  <button onClick={this.handleCancel} className="button is-link is-light">
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
  const { id } = props.match.params
  const question = questions[id]
  let author
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
