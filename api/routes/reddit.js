const express = require('express');
const snoowrap = require('snoowrap')
const crypto = require('crypto');
const router = express.Router();
const open = require('open');
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
    redirectUri: 'https://indivism.github.io/crowddit',
    clientId: 'r9CTq6ZW0UARpg'
  }).then( r => { 
    return r.getHot().then(
      posts => { console.log("posts", posts) }
    ).catch(err => console.log("err in: ", err))})
  .catch(err => console.log("err out: ", err))
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