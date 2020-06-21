import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import Navigation from './Navigation'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  state = {
    option1: '',
    option2: '',

    toHome: false,
  }
  handleChange = (e) => {
    const name = e.target.name
    const text = e.target.value

    this.setState(() => ({
      [name]: text,
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { option1, option2 } = this.state

    this.props.dispatch(handleAddQuestion({ option1, option2 }))

    this.setState(() => ({
      option1: '',
      option2: '',
      toHome: true,
    }))
    return <Redirect to="/dashboard" />
  }

  handleCancel = (e) => {
    e.preventDefault()
    this.props.history.push('/dashboard')
  }

  render() {
    const { option1, option2, toHome } = this.state
    let disabled

    if (!option1 || !option2) {
      disabled = true
    } else {
      disabled = false
    }

    if (toHome === true) {
      return <Redirect to="/dashboard" />
    }

    return (
      <div className="container">
        <Navigation />
        <div className="page-header mt-5">
          <div className="content">
            <div className="content-image">
              <img src="/assets/icons/avatar2.png" alt="" />
            </div>
            <div className="content-details">
              <h1 className="heading-title">Create New Question</h1>
              <p>Start creating questions, Create two options then submit them</p>
            </div>
          </div>
        </div>

        <div className="box columns">
          <div className="column is-7">
            <h2 style={{ fontSize: '30px' }}>Would you Rather ?</h2>
            <div className="field mt-5">
              <label className="label">Option 1</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="option1"
                  value={option1}
                  onChange={this.handleChange}
                  placeholder="Enter the first option"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Option 2</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="option2"
                  value={option2}
                  onChange={this.handleChange}
                  placeholder="Enter the second option"
                />
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" onClick={this.handleSubmit} disabled={disabled}>
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
      </div>
    )
  }
}

export default connect()(NewQuestion)
