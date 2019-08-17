const cartReducer = (state=null, action) => {
    switch(action.type) {
        case 'UPDATE_CART':
            return action.payload
        case 'REMOVE':
            const firstMatchIndex = state.indexOf(action.payload)
            return state.filter((item,index) => index !== firstMatchIndex)
        default:
            return state
    }
}

export default cartReducer;