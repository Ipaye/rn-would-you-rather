import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'

class QuestionDetails extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    return (
      <div className="container">
        <Navigation />
      </div>
    )
  }
}

export default QuestionDetails
