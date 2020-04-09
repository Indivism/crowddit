const express = require('express');
const fetch = require('node-fetch');
const snoowrap = require('snoowrap');
const router = express.Router();
require('dotenv').config() 


const r = new snoowrap({
    userAgent: 'crowddit',
    clientId: 'r9CTq6ZW0UARpg',
    clientSecret: 'hkKsFTiWhzC8mjooneV-bxRQSDA',
    refreshToken: '22316473-KBD1VWSK6tys_Fb9A25KpC59guM'
});

router.get('/try', (request, response, next) => {
    r.getHot().map(post => post.title).then(console.log);
})

module.exports = router;