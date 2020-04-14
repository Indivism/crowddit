import React from 'react'
import NavigationBar from '../../containers/navbar'
import { Nav, NavItem, NavLink, Jumbotron, Button, Form } from 'reactstrap';
import AuthAlert from '../../containers/AuthAlert'
import Revoke from '../../containers/revoke'

class Settings extends React.Component {

    componentDidUpdate() {
        this.props.onUpdate()
        console.log("CHECK:", this.props)
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <AuthAlert />
                <div className = "container-fluid" style={{padding: '3rem'}}>
                    <div className="row justify-content-center">
                        <div className="col-6 justify-content-center">
                            {!this.props.isAuthenticated && <Jumbotron>
                                <h1 className="display-5">Authenticate your Reddit</h1>
                                <p className="lead">Crowddit uses Reddit's API to uncover other subreddits that you may be interested in.</p>
                                <hr />
                                <p>Tokenized access ensures Crowddit will never ask for your password.</p>
                                <p className="lead">
                                    <Button color="primary" onClick={() => { this.props.auth(this.props.crowddit) }}>Join the Crowdd</Button>
                                </p>
                            </Jumbotron>}
                            {this.props.isAuthenticated && <Revoke />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Settings