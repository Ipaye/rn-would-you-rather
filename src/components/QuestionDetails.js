import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'

class QuestionDetails extends Component {
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
              <img src="/assets/avatars/2.png" alt="" />
            </div>
            <div class="content-details">
              <h1 className="heading-title">Akinkunmi Ipaye asks</h1>
              <p>answer or view the result of the question asked by (Akinkunkunmi ipaye)</p>
            </div>
          </div>
        </div>

        <div class="box columns">
          <div class="column is-7">
            <h2 style={{ fontSize: '30px' }}>Would you Rather ?</h2>

            <div class="field mt-4">
              <div class="control">
                <label class="radio">
                  <input type="radio" name="question" />
                  Yes
                </label>
              </div>
            </div>

            <div class="field mt-2 mb-4">
              <div class="control">
                <label class="radio">
                  <input type="radio" name="question" />
                  Yes
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

        <div class="box columns">
          <div class="column is-7">
            <h2 style={{ fontSize: '30px' }}>Results</h2>

            <div class="field mt-4">
              <label class="label">2 out of 3 votes</label>
              <div class="control has-icons-right">
                <input class="input is-success" disabled type="text" placeholder="Text input" value="bulma" />
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </div>
              <p class="help is-success">66% voted for this</p>
            </div>

            <div class="field mt-4">
              <label class="label">1 out of 3 votes</label>
              <div class="control">
                <input class="input" disabled type="text" placeholder="Text input" />
              </div>
              <p class="help is-success">22% voted for this</p>
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
      </div>
    )
  }
}

export default QuestionDetails
