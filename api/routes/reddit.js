const express = require('express');
const snoowrap = require('snoowrap')
const crypto = require('crypto');
const router = express.Router();
const querystring = require('querystring');

const sw = new snoowrap({
    userAgent: 'crowddit',
    clientId: 'DBZ2ZJ37Bs431A',
    clientSecret: 'J_-QRQAYKNPe24Je-QiiAxk7QYM',
    refreshToken: '481153194914-AAkuEVOU_MLIpmbJYyiiDszIdus',
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

router.get('/auth', (request, response, next) => {
    const state = crypto.randomBytes(16).toString('base64');

    const params = {
        client_id: 'DBZ2ZJ37Bs431A',
        response_type: 'code',
        state,
        redirect_uri: 'https://indivism.github.io/crowddit',
        duration: 'permanent',
        scope: 'history identity mysubreddits read save subscribe'
    }

    urlString = 'https://www.reddit.com/api/v1/authorize?' + querystring.stringify(params);

    response.status(200).json({
        status: "success",
        message: "Saved posts retrieved.",
        urlString
    });
})

module.exports = router;