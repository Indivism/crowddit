import * as C from '../constants'
import querystring from 'query-string'


export let toggleLogin = () => {
    return { type: C.TOGGLE_LOGIN }
}

export let usernameBlur = async payload => {

    if(payload === "")
        return { type: C.DEFAULT }

    let url = C.HEROKU_BACKEND + "/db/checkUsername?" + querystring.stringify({username: payload})
    
    let options = {
        method: 'GET'
    }

    let response = await fetch(url, options)
        .then(response => response.json())
        .then(json => json)
        .catch(err => console.log(err))
    if(response && response.status) {
        return {type: C.USERNAME_BLUR, payload: { status: response.status == 'success' ? true : false }}
    } else {
        return {type: C.USERNAME_BLUR, payload: { status: false }}
    }
} 

export let passwordBlur = async payload => {

    if(payload === "")
        return { type: C.DEFAULT }

    let url = C.HEROKU_BACKEND + "/db/checkPassword?" + querystring.stringify({password: payload})
    
    let options = {
        method: 'GET'
    }

    let response = await fetch(url, options)
        .then(response => response.json())
        .then(json => json)
        .catch(err => console.log(err))

    if(response && response.status) {
        return {type: C.PASSWORD_BLUR, payload: { status: response.status === 'success' ? true : false }}
    } else {
        return {type: C.PASSWORD_BLUR, payload: { status: false }}
    }
}

export let createUser = async () => {
    
    let username = document.getElementById("username-input").value.trim()
    let password = document.getElementById("password-input").value.trim()

    console.log(username, password)

    if(username === password && username === "")
        return { type: C.CREATE_USER_ALERT }

    let url = C.HEROKU_BACKEND + "/db/createUser?" + querystring.stringify({username, password})
    
    let options = {
        method: 'GET'
    }

    let response = await fetch(url, options)
        .then(response => response.json())
        .then(json => json)
        .catch(err => console.log(err))

    console.log(response)
    if(response.status === 'success') {
        console.log("setting cookie")
        document.cookie = 'crowddit=' + response.username
        return {type: C.CREATE_USER, payload: { status: true, username }}
    } else {
        return {type: C.CREATE_USER, payload: { status: false, username }}
    }

}

export let cookie = () => ({
    type: C.COOKIE
})

export let logout = () => {
    document.cookie = 'crowddit' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    return { type: C.LOGOUT }
}

export let login = async ({ username, password }) => {

    let url = C.HEROKU_BACKEND + "/db/login?" + querystring.stringify({username, password})

    let options = {
        method: 'GET'
    }

    let response = await fetch(url, options)
        .then(res => res.json())
        .then(json => json)
    
    console.log("response", response)

    

    if(response.status === "success") {

        let url_associations = C.HEROKU_BACKEND + '/db/getAssociations?' + querystring.stringify({ crowddit: response.username })
        let data = await fetch(url_associations, options)
            .then(res => res.json())
            .then(json => json)
        
        console.log(data.data)
        if(data.data) {
            return { type: C.LOGIN, payload: { username: response.username } }
        } else {
            return { type: C.GET_ASSOCIATIONS, payload: { username: response.username } }
        }
    } else {
        return { type: C.INVALID_LOGIN }
    }
}

export let dismissLoginAlert = () => ({ type: C.DISMISS_LOGIN_ALERT })

export let toggleCreateAccountAlert = () => {
    let username = document.getElementById("username-input").value.trim() === ""
    let password = document.getElementById("password-input").value.trim() === ""
    console.log("check me: ", username, password)
    if(username && password) {
        return { type: C.CREATE_USER_ALERT }
    } else {
        return { type: C.DEFAULT }
    }
}

export let setPage = page => ({ type: C.SET_PAGE, payload: page })