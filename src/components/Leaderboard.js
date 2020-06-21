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

        <div className="page-header mt-5">
          <div className="content">
            <div className="content-image">
              <img src="/assets/icons/avatar5.png" alt="" />
            </div>
            <div className="content-details">
              <h1 className="heading-title">Leaderboard</h1>
              <p>View all the details and ranking of all the users</p>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column is-4">
            <div className="box">
              <div className="box-content">
                <div className="box-left">
                  <div>My Rank</div>
                  <h4>3rd Place</h4>
                </div>
                <div className="box-right">
                  <div>My Score</div>
                  <h4>12</h4>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="box-content profile">
                <img src="/assets/avatars/1.png" className="avatar" alt="" />

                <div className="profile-content">
                  <h2>Fellani Max payne</h2>
                  <h5>@fgelaniPaymen</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="box leaderbox">
              <table className="table is-fullwidth">
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
                  <tr className="is-selected">
                    <th>1</th>
                    <td style={{ width: '100px' }}>
                      <div className="table-user">
                        <div className="avatar">
                          <img src="/assets/avatars/1.png" alt="" />
                        </div>
                        <div className="content ml-3">
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
                      <div className="table-user">
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
