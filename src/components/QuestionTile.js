import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class QuestionTile extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    author: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="mt-2 mb-1">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.author.avatarURL} alt={this.props.author.name} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <div>
                  <strong>{this.props.author.name}</strong> <small>@j{this.props.author.id}</small>
                  <div>asked</div>
                  Would you rather <span>{this.props.question.optionOne.text}</span> <strong>OR</strong>{' '}
                  <span>{this.props.question.optionTwo.text}</span>
                </div>
              </div>
              <nav className="level is-mobile">
                <Link to={`/question/${this.props.question.id}`} className="button">
                  View Poll
                </Link>
              </nav>
            </div>
          </article>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id]
  const author = users[questions[id].author]

  return {
    question,
    author,
  }
}

export default withRouter(connect(mapStateToProps)(QuestionTile))
