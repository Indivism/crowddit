import React from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody } from 'reactstrap';
import * as util from '../../containers/crowddit/util'
import Scroll from 'react-scroll-horizontal'

class Crowddit extends React.Component {

    render() {
        console.log("JSX:", this.props.jsx)
        return (
            this.props.loggedIn && <div className="container">
                <Button onClick={() => this.props.refreshCrowds()}>Refresh</Button>
                <Scroll style={{width: "110%", height: "100%"}}><div style={{width: "40em"}}>test</div></Scroll>
            </div>
        )
    } 
}

export default Crowddit
