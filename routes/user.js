const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const router = express.Router();
const user = require('..\\model\\user');
const authentication = require('..\\middleware\\auth');


/*User sign up*/
router.post('/signup', 
    [
        check('username','Please Enter a Valid Username').not().isEmpty(),
        check('email', 'Please Enter a Valid Email').isEmail(),
        check('password','Please Enter a Valid Password').isLength({min:8})
    ],
    async(req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({errors:errors.array()});
        }
        const {username, email, password} = req.body;
        try {
            let new_user = await user.findOne({username});
            if(new_user) {
                return res.status(400).json({
                    msg: "User Already Exists"
                });
            }
            new_user = new user({
                username,
                email,
                password
            });

            const salt = await bcrypt.genSalt(10);
            new_user.password = await bcrypt.hash(password, salt);
            await new_user.save();


            const payload = {
                new_user: {
                    id: new_user.id
                }
            };

            console.log(JSON.stringify(payload));

            jwt.sign(
                payload,
                "CS411_Projects",
                {
                    expiresIn:3600
                },
                (err,token) => {
                    if(err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
        } catch(err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
);

/*user login*/
router.post("/login",
    [
        check('username','Please enter a valid email').not().isEmpty(),
        check('password','Please enter a valid password').isLength({
            min:6
        })
    ],
    async(req, res)=>{
        const errors = validationResult(req);
        if(!errors){
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const {username, password} = req.body;
        try{
            let login_user = await user.findOne({
                username
            });
            if(!login_user){
                return res.status(400).json({
                    message: "The User Does Not Exist"
                });
            }
            //match the password
            const isMatch = await bcrypt.compare(password,login_user.password);
            
            if(!isMatch){
                return res.status(400).json({
                    message:"Incorrect Password!"
                });
            }

            const payload = {
                login_user: {
                    id: login_user.id
                }
            }
            jwt.sign(
                payload,
                "CS411_Projects",
                {
                    expiresIn: 3600
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
        } catch(err) {
            console.error(err);
            res.status(500).json({
                message: "Server Error"
            });
        } 
    }
);

/*get my own user information*/
router.get('/me', authentication, async(req, res) => {
    try {
        //req.user from the middileware after token has been verified
        const verified_user = await user.findById(req.user.id);
        res.json(verified_user);
    } catch (err) {
        res.send({message: 'Cannot Fetch User'});
    }
});



module.exports = router;