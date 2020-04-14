import React from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody } from 'reactstrap';
import * as util from '../../containers/crowddit/util'

class Crowddit extends React.Component {

    // componentDidUpdate(prevProps) {
    //     if(prevProps.subredditSet !== this.props.subredditSet)
    //         util.generateJSX(this.props.crowds)
    // }

    render() {
        console.log("JSX:", this.props.jsx)
        return (
            <div className="container">
                <Button onClick={() => this.props.refreshCrowds()}>Refresh</Button>
                <div style={{paddingTop: "2rem", paddingBottom: "2rem"}}>{util.generateJSX(this.props.crowds || [])}</div>
               
            </div>
        )
    } 
}

export default Crowddit
