import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { loginUser } from '../actions/auth'

class Login extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  state = {
    user: '',
    errors: false,
  }

  handleOnChange = (event) => {
    const userSelected = event.target.value
    this.setState({ user: userSelected })
  }

  handleLogin = (event) => {
    event.preventDefault()
    const { user } = this.state

    this.props.dispatch(loginUser(user))
    this.props.history.push('/dashboard')
  }

  render() {
    const { users, userNames } = this.props
    return (
      <div className="auth-bg">
        <div className="auth-container">
          <div className="auth-card">
            <div className="column">
              <h1 className="login-title">Answering polls questions as you like </h1>
              <h6 className="login-subtitle"> Welcome Back, Please login to your account.</h6>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Users</label>
                <div className="control">
                  <div className="select is-normal is-fullwidth">
                    <select onChange={this.handleOnChange}>
                      <option hidden>Select a user</option>
                      {userNames.map((user) => (
                        <option key={users[user].id} value={users[user].id}>
                          {users[user].name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button className="button is-fullwidth is-link" onClick={this.handleLogin}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    loading: users ? false : true,
    userNames: Object.keys(users),
    users,
  }
}

export default connect(mapStateToProps)(Login)
