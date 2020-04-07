const INITIAL = []

export default (state = INITIAL, action) => {
    switch(action.type) {
        case 'TEST':
            return [
                ...state
            ]
        default:
            return state
    }
}