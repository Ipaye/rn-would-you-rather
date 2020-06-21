import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'

import { handleInitialData } from '../actions/shared'

// Pages
import Login from './Login'
import Home from './Home'
import QuestionDetails from './QuestionDetails'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import NotFound from './NotFound'
import PrivateRoute from './PrivateRoute'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <LoadingBar />
        <Switch>
          <Route path="/" exact component={Login} />
          <PrivateRoute path="/dashboard" exact component={Home} />
          <PrivateRoute path="/questions/:id" exact component={QuestionDetails} />
          <PrivateRoute path="/add" exact component={NewQuestion} />
          <PrivateRoute path="/leaderboard" exact component={Leaderboard} />
          <Route path="/404" component={NotFound} />
          <Route path="*" component={NotFound} />
        </Switch>
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
