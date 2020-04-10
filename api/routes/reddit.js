const express = require('express');
const snoowrap = require('snoowrap')
const crypto = require('crypto');
const router = express.Router();
const open = require('open');
const fetch = require('node-fetch')
const base64 = require('base-64');
const querystring = require('querystring');
const db = require('./db');

var state, crowddit

router.get('/auth', (request, response, next) => {
    crowddit = request.query['crowddit']

    state = crypto.randomBytes(16).toString('base64')

    var auth_url = snoowrap.getAuthUrl({
        clientId: 'r9CTq6ZW0UARpg',
        scope: ['identity', 'read', 'history', 'mysubreddits', 'save', 'subscribe'],
        redirectUri: 'https://crowddit-backend.herokuapp.com/reddit/auth/callback/',
        permanent: true,
        state
    })

    open(auth_url)  
    response.status(200).json({ auth_url })
});

router.get('/auth/callback', (request, response) => {

    const { code } = request.query

    const params = {
        code,
        grant_type: 'authorization_code',
        redirect_uri: 'https://crowddit-backend.herokuapp.com/reddit/auth/callback/'
    }

    const headers = new fetch.Headers()

    headers.set('Authorization', "Basic " + base64.encode("r9CTq6ZW0UARpg:hkKsFTiWhzC8mjooneV-bxRQSDA"))
    headers.set('Content-Type', 'application/x-www-form-urlencoded')

    const options = {
        method: 'POST',
        headers,
        body: querystring.stringify(params)
    }

    console.log(code)
    if(code) {
        fetch('https://www.reddit.com/api/v1/access_token', options)
        .then(res => res.json())
        .then(async json => {
            console.log(crowddit, json.access_token, json.refresh_token)
            await db.insertTokenInformation(crowddit, json.access_token, json.refresh_token)
            response.status(200).json(json)
        })
        return
    }
    response.status(400).json({message: "failure"})
    })
    
    router.get('/savedposts', (request, response, next) => {
        sw.getMe().getSavedContent().then(post => {
            response.status(200).json({
                status: "success",
                message: "Saved posts retrieved.",
                post
            });
        });
})

// reference end point
router.get('/test', (request, response, next) => {
    const { RefreshToken, AccessToken } = db.getTokenInformation(crowddit);

    console.log(RefreshToken);
    console.log(AccessToken);

    const r = new snoowrap({
        userAgent: 'crowddit', // doesn't matter
        clientId: 'r9CTq6ZW0UARpg', // stay constant
        clientSecret: 'hkKsFTiWhzC8mjooneV-bxRQSDA', // should be in env var
        refreshToken: RefreshToken // will change
    })

//   r.getHot().map(post => post.title).then(console.log);
    console.log("subscriptions: ", r.getSubscriptions({limit: 2}).then(subscriptions => {
        response.status(200).json(subscriptions)
    }))
})

module.exports = router;