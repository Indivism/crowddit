import React from 'react'
import {
    // BrowserRouter as Router,
    Switch,
    Route,
    HashRouter as Router,
    Link
  } from "react-router-dom"

import App from './App'
import Settings from './components/containers/settings'
import CreateAccount from './components/containers/createAccount'

export default () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <App />
            </Route>
            <Route path="/createUser">
                <CreateAccount />
            </Route>
            <Route path="/settings">
                <Settings />
            </Route>
        </Switch>
    </Router>
)