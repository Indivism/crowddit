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
    refreshToken: '481153194914-pY86yVBFfVLOPEz_ImS9HV4Sy7Y',
})
 
router.get('/savedposts', (request, response, next) => {
    sw.getMe().getSavedContent().then(posts => {
        response.status(200).json({
            status: "success",
            message: "Saved posts retrieved.",
            posts
        });
    });

})

module.exports = router;