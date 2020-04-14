import React from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody } from 'reactstrap';
import * as util from '../../containers/crowddit/util'

class Crowddit extends React.Component {

    componentDidUpdate(prevProps) {
        console.log("check these props: ", prevProps, this.props)
        if(prevProps.subredditSet !== this.props.subredditSet) {
            util.generateJSX(this.props.crowds)
        }
    }

    render() {
        return (
            <Button onClick={() => this.props.refreshCrowds()}>Refresh</Button>
        )
    }
}

export default Crowddit
