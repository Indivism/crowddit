import * as C from '../constants'

const INITIAL = {
    showLoginModal: false,
    validUsername: null,
    cookie: document.cookie.includes('crowddit='),
    username: document.cookie.slice(document.cookie.indexOf('crowddit') + 9),
    invalidLoginAttempt: false,
    createUserAlert: false
}

export default (state = INITIAL, action) => {
    switch(action.type) {
        case C.TOGGLE_LOGIN:
            return {
                ...state,
                showLoginModal: !state.showLoginModal,
                invalidLoginAttempt: false
            }
        case C.USERNAME_BLUR:
            return {
                ...state,
                validUsername: action.payload.status,
                createUserAlert: false
            }
        case C.PASSWORD_BLUR:
            return {
                ...state,
                validPassword: action.payload.status,
                createUserAlert: false
            }
        case C.COOKIE:
            return {
                ...state,
                cookie: document.cookie.includes('crowddit=')
            }
        case C.CREATE_USER: 
            return {
                ...state,
                username: action.payload.username,
                showLoginModal: false
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
                cookie: true,
                invalidLoginAttempt: false
            }
        }
        case C.INVALID_LOGIN: {
            return {
                ...state,
                invalidLoginAttempt: true
            }
        }
        case C.DISMISS_LOGIN_ALERT:
            return {
                ...state,
                invalidLoginAttempt: false
            }

        case C.CREATE_USER_ALERT: {
            return {
                ...state,
                createUserAlert: true
            }
        }

        default:
            return state
    }
}