const initialState = {
    housing: 0,
    money: 0,
}

const filters = (state = initialState, action) => {
    if (action.type === 'SET_HOUSING') {
        return {
            ...state
        }
    }
    return state
}

export default filters