import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <NavLink to="/" class="navbar-item" href="https://bulma.io">
            <img src="/assets/icons/logo.png" />
          </NavLink>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
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
              <img src="/assets/avatars/1.png" alt="profile image" />
              <p className="ml-2">Ipaye Alameen</p>
            </div>
            <div class="navbar-item">
              <div class="buttons">
                <button class="button is-light">Log out</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation
