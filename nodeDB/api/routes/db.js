const express = require('express');
const fetch = require('node-fetch');
// const querystring = require('querystring');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
var db = {}

// Error Codes
// 0 -> Invalid Username
// 1 -> Invalid Password
// 2 -> Username already exists

router.get('/checkUsername', (request, response, next) => {
    db = open()

    const { username } = request.query

    // Check that username is valid
    const username_regex = /^([A-Za-z0-9]){4,20}$/
    console.log(username.trim().match(username_regex))
    if(username.match(username_regex) == null) {
        console.log("Invalid Username")
        response.status(404).json({
            status: "fail",
            errCode: 0,
            message: "Invalid username syntax."
        })
        close()
        return
    }

    db.all(`SELECT * FROM Credentials`, [], (err, rows) => {
            if (err) {
                console.error(err.message)
                response.status(500).json({
                    message: err
                })
                close()
                return
            } else {
                rows.forEach(row => { 
                    console.log(row.Username, username.toUpperCase().trim())
                    if(row.Username.toUpperCase() == username.toUpperCase().trim()) {
                        response.status(404).json({
                            status: "fail",
                            errCode: 1,
                            message: "Username already exists."
                        })
                        close()
                        return
                    } 
                })
            }
        }
    )

    response.status(200).json({status: "success", message: "Valid Username.", username})
    close()
})

router.get('/checkPassword', (request, response, next) => {
    db = open()

    const { password } = request.query

    // Check that username is valid
    const password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    console.log(password.trim().match(password_regex))
    if(password.match(password_regex) == null) {
        console.log("Invalid Password")
        response.status(404).json({
            status: "fail",
            errCode: 0,
            message: "Invalid password syntax."
        })
        return
    }

    response.status(200).json({status: "success", message: "Valid Password.", password})
    close()
    return
})

router.get('/createUser', (request, response, next) => {
    db = open()

    const { username, password } = request.query
    
    // Check that username is valid
    const username_regex = /^([A-Za-z0-9]){4,20}$/
    const password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    console.log(username.trim().match(username_regex))
    if(username.match(username_regex) == null) {
        console.log("Invalid Username")
        response.status(404).json({
            status: "fail",
            errCode: 0,
            message: "Invalid username syntax."
        })
        close()
        return
    }
    if(password.match(password_regex) == null) {
        console.log("Invalid Password")
        response.status(404).json({
            status: "fail",
            errCode: 1,
            message: "Invalid password syntax."
        })
        close()
        return
    }
    console.log("Valid Username: ", username)

    // Check if Username already exists
    db.all(`SELECT * FROM Credentials`, [], (err, rows) => {
        try {
            if (err) {
                console.error(err.message)
                response.status(500).json({
                    status: "fail",
                    errCode: 1,
                    message: "Username already exists."
                })
                close()
                return
            } else {
                rows.forEach(row => { 
                    console.log(row.Username, username.toUpperCase().trim())
                    if(row.Username.toUpperCase() == username.toUpperCase().trim()) {
                        response.status(404).json({
                            status: "fail",
                            errCode: 1,
                            message: "Username already exists."
                        })
                        close()
                        return
                    } 
                })
            }
        } catch(err) {
            response.status(500).json({
                message: err
            })
            return
        }
    })

    // Username does not already exist! -> Create the user
    db.run(`INSERT INTO Credentials(Username,Password) VALUES(?,?)`, [username, password], err => {
        if(err) {
            return console.error(err.message)
        } else {
            console.log("successful insert")
        }
    })
    response.setHeader('Set-Cookie', ['crowddit=' + username]);
    response.status(200).json({ status: "success", message: "User account created.", username})
    close()
})

const open = () => {
    db = new sqlite3.Database('./crowddit.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
      });
    console.log(db)
    return db;
};

const close = () => {
    db.close((err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Close the database connection.');
      });
};

module.exports = router;