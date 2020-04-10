import React from 'react'
import { Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

export default props => {
    console.log(props)
        return props.showInitAlert ? (<div className="container-fluid">
            <div className="row justify-content-center" style={{padding: '1rem'}}>
                <div className = "col-sm-10">
                    <Alert className="text-center" color="info">To use Crowddit, you need to authenticate your Reddit account. Do so within the Crowddit <Link className="alert-link" to="/settings">account settings</Link>.</Alert>
                </div>
            </div>
        </div>) : <div></div>
}