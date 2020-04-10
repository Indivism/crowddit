const express = require('express');
const snoowrap = require('snoowrap')
const crypto = require('crypto');
const router = express.Router();
const open = require('open');
const querystring = require('querystring');
var state

router.get('/auth', (request, response, next) => {

  state = crypto.randomBytes(16).toString('base64')

  var auth_url = snoowrap.getAuthUrl({
    clientId: 'r9CTq6ZW0UARpg',
    scope: ['identity', 'read', 'history', 'mysubreddits'],
    redirectUri: 'https://crowddit-backend.herokuapp.com/reddit/auth/callback/',
    permanent: true,
    state
  })

  open(auth_url)  
  response.status(200).json({ auth_url })
});

router.get('/auth/callback', async (request, response) => {

  const { code } = request.query
  console.log("code", code)
  const data = await snoowrap.fromAuthCode({
    code,
    userAgent: 'Crowddit',
    redirectUri: 'https://crowddit-backend.herokuapp.com/reddit/auth/callback/',
    clientId: 'r9CTq6ZW0UARpg'
  }).then( r => { 
    return r.getHot().then(
      posts => { console.log("posts", posts) }
    ).catch(err => console.log("err in: ", err))})
  .catch(err => console.log("err out: ", err))
})

// router.get('/auth/callback', (request, response) => {

//   const { code } = request.query
//   console.log(log)

//   const params = {
//     code,
//     grant_type: 'authorization_code',
//     redirect_uri: 'https://crowddit-backend.herokuapp.com/reddit/auth/callback/'
//   }

//   const options = {
//     method: 'POST',
//     headers: new Headers({
//       "Authorization": `Basic ${base64.encode(`r9CTq6ZW0UARpg:hkKsFTiWhzC8mjooneV-bxRQSDA`)}`
//     }),
//     body: querystring.stringify(params)
//   }

//   if(code) {
//     fetch('https://www.reddit.com/api/v1/access_token', options)

//   }
// })
 
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