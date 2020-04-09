const express = require('express');
const snoowrap = require('snoowrap')

const router = express.Router();

const sw = new snoowrap({
    userAgent: 'crowddit',
    clientId: 'DBZ2ZJ37Bs431A',
    clientSecret: 'J_-QRQAYKNPe24Je-QiiAxk7QYM',
    refreshToken: '481153194914-AAkuEVOU_MLIpmbJYyiiDszIdus',
})
 
router.get('/savedposts', (request, response, next) => {
    const savedPosts = sw.getMe().getSavedContent().then(post => 
        {
        response.status(200).json({
        status: "success",
        message: "Saved posts retrieved.",
        post
    });});

})

module.exports = router;