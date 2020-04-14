import * as C from '../constants'

const INITIAL = {
    showLoginModal: false,
    validUsername: null,
    cookie: document.cookie.includes('crowddit='),
    username: document.cookie.slice(document.cookie.indexOf('crowddit') + 9),
    invalidLoginAttempt: false,
    createUserAlert: false,
    page: "/",
    initAccountAlert: false,
    showAuthAlert: true,
    auth: false,
    crowds: undefined,
    subredditSet: [],
    crowdJSX: []
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
                showLoginModal: false,
                initAccountAlert: true
            }
        case C.LOGOUT: {
            return {
                ...INITIAL
            }
        }
        case C.LOGIN: {
            return {
                ...state,
                showLoginModal: false,
                username: action.payload.username,
                cookie: true,
                invalidLoginAttempt: false,
                initAccountAlert: false,
                auth: true
            }
        }
        case C.GET_ASSOCIATIONS:
            return {
                ...state,
                showLoginModal: false,
                username: action.payload.username,
                cookie: true,
                invalidLoginAttempt: false,
                initAccountAlert: true,
                auth: false
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
        case C.SET_PAGE: {
            return {
                ...state,
                page: action.payload
            }
        }
        case C.DISMISS_AUTH_ALERT: 
            return {
                ...state,
                showAuthAlert: false
            }
        case C.AUTH_SUCCESS: {
            return {
                ...state,
                auth: true,
                initAccountAlert: false
            }
        }
        case C.AUTH_FAIL: {
            return {
                ...state,
                auth: false
            }
        }
        case C.REVOKE_AUTH: {
            return {
                ...state,
                auth: false
            }
        }
        case C.GET_CROWDS: {
            return {
                ...state,
                crowds: action.payload.subs,
                subredditSet: action.payload.subreddits
            }
        }
        case C.CROWDS_CARD_JSX: {
            return {
                ...state,
                crowdJSX: action.payload
            }
        }

        default:
            return state
    }
}