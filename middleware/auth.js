const jwt = require('jsonwebtoken');

const authentication = function(req, res, next) {
    const token = req.header('token');
    if(!token){
        return res.status(401).json({message:'Authentication Error'});
    }
    try{
        const decoded = jwt.verify(token, "CS411_Projects");
        req.user = decoded.login_user;
        // console.log(JSON.stringify(decoded));
        next();        
    } catch (err) {
        console.error(err);
        res.status(500).send({message:'Invalid Token'});
    }
};

module.exports = authentication;
