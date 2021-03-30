const initialState = {
    items: []
}

const hotels = (state = initialState, action) => {
    if (action.type === 'SET_HOTELS') {
        return {
            ...state,
            items: action.payload
        }
    }
    return state
}

export default hotels