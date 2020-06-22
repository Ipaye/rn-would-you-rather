import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'

import { logoutUser } from '../actions/auth'

class Navigation extends Component {
  handleLogout = (e) => {
    e.preventDefault()

    this.props.dispatch(logoutUser())
    this.props.history.push('/')
    localStorage.clear()
  }
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item" href="https://bulma.io">
            <img src="/assets/icons/logo.png" alt="logo" />
          </NavLink>

          <a role="button" href="true" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <NavLink to="/dashboard" className="navbar-item">
              Home
            </NavLink>

            <NavLink to="/leaderboard" className="navbar-item">
              Leaderboard
            </NavLink>

            <NavLink to="/add" className="navbar-item">
              New Question
            </NavLink>
          </div>
          {this.props.login != true ? (
            <div className="navbar-end">
              <div className="navbar-item profile">
                <img src={this.props.activeUser.avatarURL} alt="ipaye alameen" />
                <p className="ml-2">{this.props.activeUser.name}</p>
              </div>
              <div className="navbar-item">
                <div className="buttons">
                  <button onClick={this.handleLogout} className="button is-light">
                    Log out
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ authenticatedUser, users }) {
  const activeUser = users[authenticatedUser]
  return {
    activeUser,
  }
}

export default withRouter(connect(mapStateToProps)(Navigation))
