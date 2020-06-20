import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class QuestionTile extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    return (
      <div className="mt-2 mb-1">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img src="/assets/avatars/1.png" alt="Image" />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                  <div>asked</div>
                  Would you rather <span>Do option one </span> <strong>OR</strong> <span>Do option two</span>
                </p>
              </div>
              <nav class="level is-mobile">
                <Link to="question/1" className="button">
                  View Poll
                </Link>
              </nav>
            </div>
          </article>
        </div>
      </div>
    )
  }
}

export default QuestionTile
