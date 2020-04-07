import * as C from '../constants'

const INITIAL = {
    showLoginModal: false
}

export default (state = INITIAL, action) => {
    switch(action.type) {
        case C.TOGGLE_LOGIN:
            console.log(state)
            return {
                ...state,
                showLoginModal: !state.showLoginModal
            }
        default:
            return state
    }
}