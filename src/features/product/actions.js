import {PRODUCTS_API} from "../../config/api";


export function searchProducts(search) {
    return(dispatch)=>{
        return PRODUCTS_API.get('products?query='+search).then(
            ({ data }) => {
                dispatch({
                    type: 'SEARCH_PRODUCTS',
                    payload: data
                });
            });
    }
}

export function loadProductDetails(productId) {
    return(dispatch)=>{
        return PRODUCTS_API.get('products/' + productId).then(
            ({ data }) => {
                dispatch({
                    type: 'LOAD_PRODUCT_DETAIL',
                    payload: data
                });
            });
    }

};

export function addProductReview(review, product) {
    return(dispatch)=>{
        return PRODUCTS_API.post('products/' + product.id + '/reviews', review).then(
            ({ data }) => {
                product.reviews = [...product.reviews, review];
                dispatch({
                    type: 'LOAD_PRODUCT_DETAIL',
                    payload: product
                });
            });
    }
};

