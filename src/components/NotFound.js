import React from 'react'
import { withRouter } from 'react-router-dom'

function NotFound(props) {
  return (
    <div>
      <div className="auth-bg">
        <div className="auth-container">
          <div className="auth-card">
            <div className="column">
              <h1 className="login-title" style={{ fontSize: '30px' }}>
                Ops, Something went wrong{' '}
              </h1>
              <h6 className="login-subtitle">Seems like the quetion youre trying to find or page doesnt exist.</h6>
            </div>
            <div className="column">
              <div className="field">
                <div className="control">
                  <button className="button is-fullwidth is-link" onClick={() => props.history.push('/dashboard')}>
                    Go to Dashboard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(NotFound)
