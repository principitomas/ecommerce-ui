const productDetailsReducer = (state=[], action) => {
    switch(action.type) {
        case 'LOAD_PRODUCT_DETAIL':
            return [...state.filter((item)=> {
                return item.id !== action.payload.id}
                ), action.payload]
        default:
            return state
    }
}

export default productDetailsReducer;