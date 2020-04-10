import React from 'react'
import { Alert } from 'reactstrap';

export default props => (
    <div className="container-fluid">
        {window.location.toString().includes("success=insert") && (
            <div className="row  justify-content-center" style={{padding: '1rem'}}>
            <div className = "col-6">
                <Alert className="text-center" color="success" isOpen={props.visible} toggle={() => props.dismiss()}>Successfully authenticated Reddit. At any time, you may revoke Crowddit's access within account settings.</Alert>
            </div>
        </div>
        )}
        {window.location.toString().includes("error=fail") && (
            <div className="row  justify-content-center" style={{padding: '1rem'}}>
            <div className = "col-6">
                <Alert className="text-center" color="danger" isOpen={props.visible} toggle={() => props.dismiss()}>Hmm. Crowddit could not connect to Reddit. Try to join the Crowd again.</Alert>
            </div>
        </div>
        )}
        {window.location.toString().includes("error=conflict") && (
            <div className="row  justify-content-center" style={{padding: '1rem'}}>
            <div className = "col-6">
                <Alert className="text-center" color="warning" isOpen={props.visible} toggle={() => props.dismiss()}>There appears to be an internal service error.</Alert>
            </div>
        </div>
        )}
    </div>
)