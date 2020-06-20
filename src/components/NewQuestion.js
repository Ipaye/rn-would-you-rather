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
        <div class="page-header mt-5">
          <div class="content">
            <div className="content-image">
              <img src="/assets/icons/avatar2.png" alt="" />
            </div>
            <div class="content-details">
              <h1 className="heading-title">Create New Question</h1>
              <p>Start creating questions, Create two options then submit them</p>
            </div>
          </div>
        </div>

        <div class="box columns">
          <div class="column is-7">
            <h2 style={{ fontSize: '30px' }}>Would you Rather ?</h2>
            <div class="field mt-5">
              <label class="label">Option 1</label>
              <div class="control">
                <input class="input" type="text" placeholder="Enter the first option" />
              </div>
            </div>

            <div class="field">
              <label class="label">Option 2</label>
              <div class="control">
                <input class="input" type="text" placeholder="Enter the second option" />
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
      </div>
    )
  }
}

export default NewQuestion
