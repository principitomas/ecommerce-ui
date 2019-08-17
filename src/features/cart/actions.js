import {SHOPPING_API} from "../../config/api";


export function loadCart(customerId) {
    return(dispatch)=>{
        return SHOPPING_API.get('1').then(
            ({ data }) => {
                dispatch({
                    type: 'UPDATE_CART',
                    payload: data
                });
            });
}
};

export function addProductToCart(cart, productDetail, quantity) {
    return(dispatch)=>{
        return SHOPPING_API.put(productDetail.id, {quantity: quantity, price: productDetail.price}).then(
            ({ data }) => {
                cart.items.push({itemId: productDetail.id, price: productDetail.price, quantity: quantity})
                dispatch({
                    type: 'UPDATE_CART',
                    payload: cart
                });
            });
    }
};


// export const loadProduct = (productId) => ({ type: 'SHOPPING_API',
//     MAESTRO_API: { endpoint: 'products/'+productId,
//         action_type: 'LOAD_PRODUCT'
//     }
// });
//
// export const saveProduct = (productId, payload) =>
//     ({ type: 'SHOPPING_API',
//         SHOPPING_API: { endpoint: 'products/'+productId,
//             action_type: 'SAVE_PRODUCT',
//             method: 'PUT',
//             payload: payload
//         }
//     });