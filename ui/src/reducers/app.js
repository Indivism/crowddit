import * as C from '../constants'

const INITIAL = {
    showLoginModal: false,
    validUsername: null,
    cookie: document.cookie.includes('crowddit='),
    username: document.cookie.slice(document.cookie.indexOf('crowddit') + 9)
}

export default (state = INITIAL, action) => {
    switch(action.type) {
        case C.TOGGLE_LOGIN:
            return {
                ...state,
                showLoginModal: !state.showLoginModal
            }
        case C.USERNAME_BLUR:
            return {
                ...state,
                validUsername: action.payload.status,
            }
        case C.PASSWORD_BLUR:
            return {
                ...state,
                validPassword: action.payload.status
            }
        case C.COOKIE:
            return {
                ...state,
                cookie: document.cookie.includes('crowddit=')
            }
        case C.CREATE_USER: 
            return {
                ...state,
                username: action.payload.username
            }
        case C.LOGOUT: {
            return {
                ...state,
                cookie: false
            }
        }
        case C.LOGIN: {
            return {
                ...state,
                showLoginModal: false,
                username: action.payload.username,
                cookie: true
            }
        }

        default:
            return state
    }
}