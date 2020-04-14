import React from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody } from 'reactstrap';
import * as util from '../../containers/crowddit/util'

class Crowddit extends React.Component {

    componentDidUpdate(prevProps) {
        console.log("check these props: ", prevProps, this.props)
        if(prevProps.crowds !== this.props.crowds) {
            console.log(prevProps.crowds == this.props.crowds)
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
