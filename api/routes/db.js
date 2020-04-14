const express = require('express');
const fetch = require('node-fetch');
// const querystring = require('querystring');
const router = express.Router();
const Database = require('better-sqlite3');
const crypto = require('crypto')
const key = crypto.randomBytes(32) 
const iv = crypto.randomBytes(16)

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
    console.log("Get Association -> ", crowddit)
    const data = getAssociations(crowddit)
    console.log("Get Assocations: ", data)
    if(data && Object.keys(data).includes('Crowddit')) {
        response.status(200).json({ message: "Reddit authenticated.", status: "success" })
    } else {
        response.status(200).json({ message: "Reddit is not authenticated.", status: "fail" })
    }
})

router.get('/setAssociation', (request, response, next) => {
    const { crowddit } = request.query

    const data = setAssociation( crowddit.toUpperCase() )

    if(Object.keys(data).includes('Crowddit')) {
        response.status(200).json({ message: "Reddit authenticated.", status: "success" })
    } else {
        response.status(200).json({ message: "Reddit is not authenticated.", status: "fail" })
    }
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

router.get('/revoke', (request, response, next) => {
    try {
        const { crowddit } = request.query
        const data = revoke(crowddit)
        response.status(200).json(data)
    } catch(err) {
        response.status(400).json(err)
    }  
})

router.get('/', async (request, response, next) => {
    const crowddit_db = await read()
    response.status(200).json(crowddit_db)
})

router.get('/test', (request, response, next) => {
    const encrypted = encrypt(String(request.query.message))
    console.log(encrypted)
    console.log(decrypt(encrypted))
})

const open = () => { return new Database('./crowddit.db', { verbose: console.log })};

const close = db => { db.close() };

const login = (username, password) => {
    const db = open();
    const statement = db.prepare('SELECT * FROM Credentials WHERE Username = ? AND Password = ?');
    const data = statement.get(username.toUpperCase(), password);
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
    const data = statement.run(username.toUpperCase(), password);
    close(db);
    return data;
}

const getAssociations = crowddit => {
    const db = open();
    const statement = db.prepare('SELECT * FROM Tokens WHERE Crowddit = ?');
    const data = statement.get(crowddit.toUpperCase())
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
    const random = Math.random().toString(36).substring(2, 15)
    const data = statement.run(crowddit.toUpperCase(), random, random)
    close(db);
    return data;
}

const insertTokenInformation = (crowddit, accessToken, refreshToken) => {
    console.log("insert")
    const db = open();
    const statement = db.prepare(`
        INSERT INTO Tokens(Crowddit, AccessToken, RefreshToken)
        VALUES(?, ?, ?)
        ON CONFLICT(Crowddit)
        DO UPDATE SET AccessToken = ?, RefreshToken = ?
    `);

    const encryptedAccessToken = encrypt(accessToken).encryptedData
    const encryptedRefreshToken = encrypt(refreshToken).encryptedData

    const data = statement.run(
        crowddit.toUpperCase(), 
        encryptedAccessToken,
        encryptedRefreshToken,
        encryptedAccessToken,
        encryptedRefreshToken
    );
    close(db);
    return data;
};

const getTokenInformation = crowddit => {
    const db = open()
    const statement = db.prepare('SELECT AccessToken, RefreshToken FROM Tokens WHERE Crowddit = ?');
    const data = statement.get(crowddit.toUpperCase());
    console.log(data)
    data.RefreshToken = decrypt(data.RefreshToken)
    data.AccessToken = decrypt(data.AccessToken)
    close(db);
    return data;
};

// Reads
const read = () => {
    const db = open()
    const statement_credentials = db.prepare(' SELECT * FROM Credentials')
    const Credentials = statement_credentials.all();
    const statement_usernames = db.prepare(' SELECT * FROM Usernames')
    const Usernames = statement_usernames.all();
    const statement_tokens = db.prepare(' SELECT * FROM Tokens');
    const Tokens = statement_tokens.all();
    const statement_subreddits = db.prepare('SELECT * FROM Subreddits');
    const Subreddits = statement_subreddits.all();
    console.log("raw results: ", Credentials, Usernames, Tokens, Subreddits)
    close(db)
    return { Credentials, Usernames, Tokens, Subreddits }
}

const revoke = crowddit => {
    const db = open()

    const statement_usernames = db.prepare(`
        DELETE FROM Usernames
        WHERE Crowddit = ?
    `)
    const data_usernames = statement_usernames.run(crowddit.toUpperCase())

    const statement_tokens = db.prepare(`
        DELETE FROM Tokens
        WHERE Crowddit = ?
    `)
    const data_tokens = statement_tokens.run(crowddit.toUpperCase())

    close(db)
    return { data_usernames, data_tokens }
}

let encrypt = text => {
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}
   
let decrypt = text => {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

module.exports = {
    router,
    insertTokenInformation, 
    getTokenInformation,
    encrypt,
    decrypt
};

