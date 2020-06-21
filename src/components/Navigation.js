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
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <NavLink to="/" class="navbar-item" href="https://bulma.io">
            <img src="/assets/icons/logo.png" alt="logo" />
          </NavLink>

          <a role="button" href class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <NavLink to="/dashboard" class="navbar-item">
              Home
            </NavLink>

            <NavLink to="/leaderboard" class="navbar-item">
              Leaderboard
            </NavLink>

            <NavLink to="/add" class="navbar-item">
              New Question
            </NavLink>
          </div>

          <div class="navbar-end">
            <div class="navbar-item profile">
              <img src={this.props.activeUser.avatarURL} alt="ipaye alameen" />
              <p className="ml-2">{this.props.activeUser.name}</p>
            </div>
            <div class="navbar-item">
              <div class="buttons">
                <button onClick={this.handleLogout} class="button is-light">
                  Log out
                </button>
              </div>
            </div>
          </div>
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
