const express = require('express');
const snoowrap = require('snoowrap')
const crypto = require('crypto');
const router = express.Router();
const auth = require('@jimmycode/simple-oauth2-reddit');

const reddit = auth.create({
  clientId: 'r9CTq6ZW0UARpg',
  clientSecret: 'hkKsFTiWhzC8mjooneV-bxRQSDA',
  callbackURL: 'http://localhost:3001/reddit/auth/callback',
  state: crypto.randomBytes(16).toString('base64')
})

// const sw = new snoowrap({
//     userAgent: 'crowddit',
//     clientId: 'DBZ2ZJ37Bs431A',
//     clientSecret: 'J_-QRQAYKNPe24Je-QiiAxk7QYM',
//     refreshToken: '481153194914-AAkuEVOU_MLIpmbJYyiiDszIdus',
// })

router.get('/auth', reddit.authorize);

router.get('/auth/callback', reddit.accessToken, (request, response) => {
  return response.status(200).json(requset.token)
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





module.exports = router;