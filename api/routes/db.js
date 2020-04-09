const express = require('express');
const fetch = require('node-fetch');
// const querystring = require('querystring');
const router = express.Router();
const Database = require('better-sqlite3');

// Error Codes
// 0 -> Invalid Username
// 1 -> Invalid Password
// 2 -> Username already exists

router.get('/login', (request, response, next) => {
    const { username, password } = request.query

    const data = login(username.toUpperCase().trim(), password.trim())
    
    if(data) {
        response.status(200).cookie('crowddit', username.trim()).json({
            status: "success",
            message: "Logged in.",
            username: username.trim()
        })
    } else {
        response.status(404).json({
            status: "failure",
            message: "Invalid username or password.",
            username: null
        })
    }
})

router.get('/checkUsername', (request, response, next) => {
    const { username } = request.query

    // Check that username is valid
    const username_regex = /^([A-Za-z0-9]){4,20}$/

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

    const data = checkUsername(username)

    console.log("checkUsername", data)

    response.status(data ? 404 : 200).json({
        status: data ? "fail" : "success",
        message: data ? "Username is already taken." : "Username is valid!" 
    })
})

router.get('/checkPassword', (request, response, next) => {
    const { password } = request.query

    // Check that username is valid
    const password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

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
    return
})

router.get('/getAssociations', (request, response, next) => {
    const { crowddit } = request.query

    const data = getAssociations(crowddit.toUpperCase())

    response.status(200).json({ data })
})

router.get('/setAssociation', (request, response, next) => {
    const { crowddit, reddit } = request.query

    const data = setAssociation(crowddit.toUpperCase(), reddit.trim())

    response.status(200).json({ data })
})

router.get('/createUser', (request, response, next) => {
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
    const data_username = checkUsername(username)
    if(data_username) {
        response.status(404).json({status: "fail", message: "Username is already taken."})
        return
    }

    const data_insert = insertUser(username.toUpperCase().trim(), password.trim());
    response.status(200).cookie('crowddit', username + ';').json({ status: "success", message: "User account created.", username})
})

const open = () => { return new Database('./crowddit.db', { verbose: console.log })};

const close = db => { db.close() };

const login = (username, password) => {
    const db = open();
    const statement = db.prepare('SELECT * FROM Credentials WHERE Username = ? AND Password = ?');
    const data = statement.get(username, password);
    close(db);
    return data;
}

const checkUsername = username => {
    const db = open()
    const statement = db.prepare('SELECT * FROM Credentials WHERE Username = ?');
    const data = statement.get(username.toUpperCase());
    close(db)
    return data;
};

const insertUser = (username, password) => {
    const db = open();
    const statement = db.prepare('INSERT INTO Credentials(Username, Password) VALUES(?, ?)');
    const data = statement.run(username, password);
    close(db);
    return data;
}

const getAssociations = crowddit => {
    const db = open();
    const statement = db.prepare('SELECT * FROM Usernames WHERE crowddit = ?');
    const data = statement.get(crowddit)
    close(db);
    return data;
}

const setAssociation = (crowddit, reddit) => {
    const db = open();
    const statement = db.prepare(`
        INSERT INTO Usernames(Crowddit, Reddit) 
        VALUES(?, ?)
        ON CONFLICT(Crowddit)
        DO UPDATE SET Reddit = ?
    `);
    const data = statement.run(crowddit, reddit, reddit)
    close(db);
    return data;
}

module.exports = router;