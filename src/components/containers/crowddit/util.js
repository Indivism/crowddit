import React from 'react'
import * as C from '../../../constants'
import * as A from '../../../actions'
import { getStore } from '../../../index'
import luminance from 'relative-luminance'

import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';

export let generateJSX = crowds => {
    let jsx = crowds.map(crowd => cardGenerator(crowd))
    console.log("HI HI HI", jsx)
    return jsx
}

let cardGenerator = crowd => {
    var L = luminance([
        parseInt(crowd.bannerBackgroundColor.substring(1,3), 16),
        parseInt(crowd.bannerBackgroundColor.substring(3,5), 16),
        parseInt(crowd.bannerBackgroundColor.substring(6), 16)])
    var color = "#FFFFFF"
    if(L > 0.179 || isNaN(L)) {
        color = "#000000"
    }
    console.log("L", L)
    return (<div style={{margin: "1rem"}}>
        <Card style={{backgroundColor: crowd.bannerBackgroundColor, color}}>
            <CardBody>
                <CardTitle>{ crowd.title }</CardTitle>
                <CardSubtitle>{ crowd.subreddit }</CardSubtitle>
                <CardText>{ crowd.headerTitle }</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    </div>)
}


    
