import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'

function PrivateRoute({ children, component: Component, ...rest }) {
  const {
    authenticatedUser,
    match: { params },
  } = rest
  return (
    <Route
      {...rest}
      render={({ location, ...otherProps }) =>
        authenticatedUser !== null ? (
          <Component {...rest} {...otherProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location.pathname },
            }}
          />
        )
      }
    />
  )
}

function mapStateToProps({ authenticatedUser }) {
  return {
    authenticatedUser,
  }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute))
