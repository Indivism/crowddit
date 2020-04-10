const express = require('express');
const snoowrap = require('snoowrap')
const crypto = require('crypto');
const router = express.Router();
const open = require('open');
const fetch = require('node-fetch')
const base64 = require('base-64');
const querystring = require('querystring');
const db = require('./db');

const clientId = 'r9CTq6ZW0UARpg'
const clientSecret = 'hkKsFTiWhzC8mjooneV-bxRQSDA'

router.get('/auth', (request, response, next) => {
    var crowddit = request.query['crowddit']

    state = crypto.randomBytes(16).toString('base64')

    var auth_url = snoowrap.getAuthUrl({
        clientId,
        scope: ['identity', 'read', 'history', 'mysubreddits', 'save', 'subscribe'],
        redirectUri: 'https://crowddit-backend.herokuapp.com/reddit/auth/callback/',
        permanent: true,
        state: crowddit
    })

    open(auth_url)  
    response.status(200).json({ auth_url })
});

router.get('/auth/callback', (request, response) => {

    const { code, state } = request.query
    var crowddit = state;

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

    if(code) {
        fetch('https://www.reddit.com/api/v1/access_token', options)
        .then(res => res.json())
        .then(async json => {
            console.log(crowddit, json.access_token, json.refresh_token)
            try {
                db.insertTokenInformation(crowddit, json.access_token, json.refresh_token)
            } catch(err) {
                response
                .status(301)
                .redirect('https://indivism.github.io/crowddit/#/settings?error=conflict')
                .json({ message: "Check that the Crowddit username satisfies the DB constraints such as foreign key, not null, etc. " })
            }
            response
            .status(301)
            .redirect('https://indivism.github.io/crowddit/#/settings?success=insert')
            .json(json)
        })
        return
    }
    response
    .status(200)
    .redirect('https://indivism.github.io/crowddit/#/settings?error=fail')
    .json({message: "failure"})

    next().body = { message: "failure" }
    
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

    var crowddit = request.query['crowddit']
    const { RefreshToken, AccessToken } = db.getTokenInformation(crowddit);

    const r = new snoowrap({
        clientId, // stay constant
        clientSecret,
        userAgent: 'crowddit', // doesn't matter
        refreshToken: RefreshToken // will change
    })

//   r.getHot().map(post => post.title).then(console.log);
    console.log("subscriptions: ", r.getSubscriptions({limit: 2}).then(subscriptions => {
        response.status(200).json(subscriptions)
    }))
})

router.get('/revoke', async (request, response, next) => {
    const crowddit = request.query['crowddit']
    try {
        var { RefreshToken }  = db.getTokenInformation(crowddit)
    } catch {
        response.status(400).json({ message: "Crowddit username not in db.", crowddit })
        return
    }

    console.log(RefreshToken)

    const url = 'https://www.reddit.com/api/v1/revoke_token'

    const params = {
        token: RefreshToken,
        token_hint_type: 'refresh_token'
    }

    const headers = new fetch.Headers()
    headers.set('Authorization', "Basic " + base64.encode(clientId + ":" + clientSecret))
    headers.set('Content-Type', 'application/x-www-form-urlencoded')
    
    const options = {
        method: 'POST',
        headers,
        body: querystring.stringify(params)
    }

    await fetch(url, options)
    response.status(200).json({message: "Revoke attempted"})
})

module.exports = router;