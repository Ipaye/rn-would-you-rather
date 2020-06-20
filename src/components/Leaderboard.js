import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'

class Leaderboard extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    return (
      <div className="container">
        <Navigation />

        <div class="page-header mt-5">
          <div class="content">
            <div className="content-image">
              <img src="/assets/icons/avatar5.png" alt="" />
            </div>
            <div class="content-details">
              <h1 className="heading-title">Leaderboard</h1>
              <p>View all the details and ranking of all the users</p>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column is-4">
            <div class="box">
              <div class="box-content">
                <div class="box-left">
                  <div>My Rank</div>
                  <h4>3rd Place</h4>
                </div>
                <div class="box-right">
                  <div>My Score</div>
                  <h4>12</h4>
                </div>
              </div>
            </div>

            <div class="box">
              <div class="box-content profile">
                <img src="/assets/avatars/1.png" className="avatar" alt="" />

                <div class="profile-content">
                  <h2>Fellani Max payne</h2>
                  <h5>@fgelaniPaymen</h5>
                </div>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="box leaderbox">
              <table class="table is-fullwidth">
                <thead>
                  <tr>
                    <th>
                      <abbr title="Position">Pos</abbr>
                    </th>
                    <th>Fullname</th>
                    <th>
                      <span title="Answered Questions">Answered</span>
                    </th>
                    <th>
                      <abbr title="Points gotten">Points</abbr>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="is-selected">
                    <th>1</th>
                    <td style={{ width: '100px' }}>
                      <div class="table-user">
                        <div class="avatar">
                          <img src="/assets/avatars/1.png" alt="" />
                        </div>
                        <div class="content ml-3">
                          <h4>Ipaye Alameen</h4>
                          <p>@alameen</p>
                        </div>
                      </div>
                    </td>
                    <td>38</td>
                    <td>23</td>
                  </tr>
                  <tr>
                    <th>1</th>
                    <td style={{ width: '100px' }}>
                      <div class="table-user">
                        <div class="avatar">
                          <img src="/assets/avatars/1.png" alt="" />
                        </div>
                        <div class="content ml-3">
                          <h4>Ipaye Alameen</h4>
                          <p>@alameen</p>
                        </div>
                      </div>
                    </td>
                    <td>38</td>
                    <td>23</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Leaderboard
