import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'

class NewQuestion extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  handleCancel = (e) => {
    e.preventDefault()
    this.props.history.push('/dashboard')
  }

  render() {
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
                <input className="input" type="text" placeholder="Enter the first option" />
              </div>
            </div>

            <div className="field">
              <label className="label">Option 2</label>
              <div className="control">
                <input className="input" type="text" placeholder="Enter the second option" />
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
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

export default NewQuestion
