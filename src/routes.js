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
            <Route exact path="/createUser">
                <CreateAccount />
            </Route>
            <Route exact path="/settings">
                <Settings />
            </Route>
            <Route exact path="/about">
            </Route>
            <Route path="/">
                <App />
            </Route>
        </Switch>
    </Router>
)