import React from 'react'
import { Collapse, Button, CardBody, Card, Fade } from 'reactstrap';

export default  props => (
    <div className="container-fluid">
        <div className="row justify-content-center">
            <Fade in={props.auth} tag="h5" className="mt-3">
                <Button color="secondary" onClick={() => props.revokeAuth() } style={{ marginBottom: '1rem' }}>Revoke Crowddit Permissions</Button>
            </Fade>
        </div>
    </div>
)