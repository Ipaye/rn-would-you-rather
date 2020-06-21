import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Navigation from './Navigation'

class Leaderboard extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    userList: PropTypes.array.isRequired,
    authenticatedUser: PropTypes.string.isRequired,
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
              <div className="box-content profile">
                <img
                  src={this.props.users[this.props.authenticatedUser].avatarURL}
                  className="avatar"
                  alt={this.props.users[this.props.authenticatedUser].name}
                />

                <div className="profile-content">
                  <h2>{this.props.users[this.props.authenticatedUser].name}</h2>
                  <h5>@{this.props.users[this.props.authenticatedUser].id}</h5>
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
                      <span title="Questions count">Questions</span>
                    </th>
                    <th>
                      <abbr title="Points gotten">Points</abbr>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.userList.map((user, index) => (
                    <tr key={index} className={user === this.props.authenticatedUser ? 'is-selected' : null}>
                      <th>{index + 1}</th>
                      <td style={{ width: '100px' }}>
                        <div className="table-user">
                          <div className="avatar">
                            <img src={this.props.users[user].avatarURL} alt="" />
                          </div>
                          <div className="content ml-3">
                            <h4>{this.props.users[user].name}</h4>
                            <p>@{this.props.users[user].id}</p>
                          </div>
                        </div>
                      </td>
                      <td>{Object.keys(this.props.users[user].answers).length}</td>
                      <td>{Object.keys(this.props.users[user].questions).length}</td>
                      <td>{Object.keys(this.props.users[user].answers).length + Object.keys(this.props.users[user].questions).length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authenticatedUser, users }) {
  let userList = Object.keys(users).sort((a, b) => {
    return users[b].answers.length + users[b].questions.length - (users[a].answers.length + users[a].questions.length)
  })

  return {
    users,
    userList,
    authenticatedUser,
  }
}

export default connect(mapStateToProps)(Leaderboard)
