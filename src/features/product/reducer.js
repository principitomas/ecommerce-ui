const searchProductsReducer = (state=[], action) => {
    switch(action.type) {
        case 'SEARCH_PRODUCTS':
            return action.payload
        default:
            return state
    }
}

export default searchProductsReducer;