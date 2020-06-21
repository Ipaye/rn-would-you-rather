import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'

import { handleInitialData } from '../actions/shared'

// Pages
import Login from './Login'
import Home from './Home'
import QuestionDetails from './QuestionDetails'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />

          <Route path="/" exact component={Login} />
          {this.props.loading === false ? (
            <p>Please wait...</p>
          ) : (
            <div>
              <Route path="/dashboard" exact component={Home} />
              <Route path="/question/:id" component={QuestionDetails} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/leaderboard" component={Leaderboard} />
            </div>
          )}
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authenticatedUser }) {
  console.log('[authenticated] ->', authenticatedUser)
  return {
    loading: !!authenticatedUser,
  }
}
export default connect(mapStateToProps)(App)
