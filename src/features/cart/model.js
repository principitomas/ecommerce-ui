import {fk, many, oneToOne, Model} from "redux-orm";

export class Cart extends Model{


    static reducer(action, Cart, session) {
        const {type, payload} = action;

        switch (type) {

            case "LOAD_PRODUCTS":
                payload.forEach(p => Cart.upsert(p));
                break;

            //case "SAVE_PROJECT_SUCCESS":
            case "UPDATE_CART":
                Cart.upsert(payload);
                break;
        }
    }

}

Cart.modelName = 'Cart';
Cart.fields = {
};
