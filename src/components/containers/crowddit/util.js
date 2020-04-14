import React from 'react'
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
  } from 'reactstrap';

export let generateJSX = crowds => {
    for(let crowd in crowds) {
        console.log("i", crowd)
        cardGenerator(crowd)
    }
}

let cardGenerator = details => (
    <Card>
        <CardBody>
            <CardTitle>{ details.subreddit }</CardTitle>
            <CardSubtitle>{details.subtile}</CardSubtitle>
            <CardText>{details.description}</CardText>
            <Button>Button</Button>
            </CardBody>
    </Card>
)