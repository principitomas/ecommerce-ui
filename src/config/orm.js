import {ORM} from "redux-orm";
import {Cart} from "../features/cart/model";
import {Product} from "../features/product/model";


const orm = new ORM();


orm.register(Cart, Product);

export default orm;
