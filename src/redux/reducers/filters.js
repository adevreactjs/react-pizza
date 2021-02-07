
const initialState = {
    category: 0,
    sortBy: 'popular'
}

const filter = (state = initialState, action) => {
    action = {
        type: 'SET_SORT_BY',
        payload: 'price'
    }

    if (action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload
        }
        return state
    }
}

export default filter