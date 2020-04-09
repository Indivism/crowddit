const express = require('express');
const snoowrap = require('snoowrap')
const crypto = require('crypto');
const router = express.Router();
const querystring = require('querystring');
const open = require('open');

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

router.get('/authUI', (request, response, next) => {
    const state = crypto.randomBytes(16).toString('base64');

    results = {
        client_id: 'DBZ2ZJ37Bs431A',
        response_type: 'code',
        duration: 'permanent',
        scope: 'history identity mysubreddits read save subscribe'
    }

    const params = {
        state,
        redirect_uri: 'https://crowddit-backend.herokuapp.com:65010/reddit/auth',
        ...results
    }

    console.log(params)

    urlString = 'https://www.reddit.com/api/v1/authorize?' + querystring.stringify(params);

    // response.status(200).json({
    //     status: "success",
    //     message: "Saved posts retrieved.",
    //     urlString
    // });

    open(urlString)
    listenForCallback(state, results)
})

let handleError = (res, err, state, results) => {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/html' });
    if (err.statusCode) {
      res.write(`An unknown error occured (status code: ${err.statusCode}). Details on the error have been logged below. `);
    }
    res.write(`Depending on the type of error, <a href=${getAuthenticationUrl(state, results)}>trying again</a> might help.`);
    res.write(`<pre><code>${require('util').inspect(err)}</code></pre>`);
    res.end();
  }

let listenForCallback = (state, results) => {
    require('http').createServer((req, res) => {
        const query = require('url').parse(req.url, true).query;
        if (query.state !== state) {
          res.writeHead(401);
          res.end();
        } else if (query.code) {
          request.post({
            uri: 'access_token',
            auth: { user: results.client_id, pass: results.client_secret || '' },
            form: { grant_type: 'authorization_code', code: query.code, redirect_uri: expected_redirect_uri },
          }).then(token_info => {
            console.log(token_info);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('Your token was retrieved successfully. Thank you for using reddit-oauth-helper.');
            res.write(`<pre><code>${JSON.stringify(token_info, null, 4)}</code></pre>`);
            res.end();
            process.exit();
          }).catch(err => handleError(res, err, state, results));
        } else if (query.error === 'access_denied') {
          res.writeHead(400, { 'Content-Type': 'text/html' });
          res.write('In order to obtain a token, you will need to click "allow" at the reddit authentication screen.');
          res.write(`<br><br>To try again, click <a href=${getAuthenticationUrl(state, results)}>here</a>.`);
          res.end();
        } else {
          handleError(res, { statusCode: 400, statusMessage: 'Failed to parse response from reddit' }, state, results);
        }
      }).listen(65010);
}



module.exports = router;