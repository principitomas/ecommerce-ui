import {fk, many, oneToOne, Model} from "redux-orm";

export class Product extends Model{


    static reducer(action, Product, session) {
        const {type, payload} = action;

        switch (type) {

            case "LOAD_PRODUCT_DETAIL":
                Product.upsert(payload);
                break;

            //case "SAVE_PROJECT_SUCCESS":
        }
    }

}

Product.modelName = 'Product';
Product.fields = {
};