import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'
import QuestionTile from './QuestionTile'

class Home extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    return (
      <div className="container">
        <Navigation />
        <section id="dashboard-page">
          <div class="columns">
            <div class="column is-3">
              <aside class="menu">
                <p class="menu-label">Question Categories</p>
                <ul class="menu-list">
                  <li>
                    <a className="is-active">Unanswered</a>
                  </li>
                  <li className="mt-2">
                    <a>Answered</a>
                  </li>
                </ul>
              </aside>
            </div>
            <div class="column">
              <QuestionTile />
              <QuestionTile />
              <QuestionTile />
              <QuestionTile />
              <QuestionTile />
              <QuestionTile />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
