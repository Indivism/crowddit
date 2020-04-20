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
const snoowrapConfig = {
    clientId,
    clientSecret,
    userAgent: 'crowddit'
}

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

router.get('/auth/callback', (request, response, next) => {

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
    console.log("auth/callback", crowddit, code)
    if(code) {
        fetch('https://www.reddit.com/api/v1/access_token', options)
        .then(res => res.json())
        .then(json => {
            console.log(crowddit, json.access_token, json.refresh_token)
            try {
                db.insertTokenInformation(
                    crowddit, 
                    json.access_token, 
                    json.refresh_token
                )
            } catch(err) {
                console.log("INSERT ERROR: ", err)
                response
                .redirect('https://indivism.github.io/crowddit/#/settings?error=conflict')
                return
            }
            response
            .redirect('https://indivism.github.io/crowddit/#/settings?success=insert')
            .json(json)
        })
        return
    }
    response
    .status(200)
    .redirect('https://indivism.github.io/crowddit/#/settings?error=fail')
    .json({message: "failure"})
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

router.get('/getCrowds', (request, response, next) => {
    
    const crowddit = request.query.crowddit
    const { RefreshToken } = db.getTokenInformation(crowddit)
    console.log("here", crowddit, RefreshToken)
    const r = new snoowrap({
        ...snoowrapConfig,
        refreshToken: RefreshToken
    })

    r.getSubscriptions({limit: 5}).then(subscriptions => {
        response.status(200).json(getCrowdsHelper(subscriptions))
    })
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

router.get('/testGetPosts', (request, response, next) => {
    var crowddit = request.query['crowddit']
    const { RefreshToken, AccessToken } = db.getTokenInformation(crowddit);

    const r = new snoowrap({
        clientId, // stay constant
        clientSecret,
        userAgent: 'crowddit', // doesn't matter
        refreshToken: RefreshToken // will change
    })

    r.getMe().getSavedContent().fetchAll().then(posts => {
        response.status(200).json(posts)
    })
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

const getCrowdsHelper = subscriptions => {
    let subreddits = []
    let subs = subscriptions.map(sub => {
        subreddits.push(sub.display_name_prefixed)
        return {    
            subreddit: sub.display_name_prefixed,
            url: sub.url,
            title: sub.title,
            primaryColor: sub.primary_color,
            bannerBackgroundColor: sub.banner_background_color,
            headerTitle: sub.header_title
            }
        }
    )
    return { subreddits, subs }
}

const getSavedPostHelper = posts => {
    let savedPostAuthors = []
    let post = posts.map(post => { 
        savedPostAuthors.push(post.auth_fullName)
        return {
            authorName: post.auth_fullName,
            title: post.title,
            selftext: post.selftext,
            score: post.score,
            createdDate: post.created,
            url: post.url,
        }
    })
}

module.exports = router;