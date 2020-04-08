import * as C from '../constants'

const INITIAL = {
    showLoginModal: false,
    validUsername: null,
    cookie: document.cookie.includes('crowddit')
}

export default (state = INITIAL, action) => {
    switch(action.type) {
        case C.TOGGLE_LOGIN:
            return {
                ...state,
                showLoginModal: !state.showLoginModal
            }
        case C.EMAIL_BLUR:
            return {
                ...state,
                validUsername: action.payload.status
            }
        case C.PASSWORD_BLUR:
            return {
                ...state,
                validPassword: action.payload.status
            }
        case C.COOKIE:
            return {
                ...state,
                cookie: document.cookie.includes('crowddit')
            }
        default:
            return state
    }
}