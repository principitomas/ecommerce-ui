import {createSelector} from "redux-orm";
import orm from "../../config/orm";

// export const getAllProjects = createSelector(
//     orm,
//     state => state.orm,
//     session =>{
//         return session.Cart.all().toRefArray();
//     }
// );

export const getCart = createSelector(
    orm,
    state => state.orm,
    function(state, entityId) {
        return entityId;
    },
    function(session, entityId) {
        let cart = session.Cart.withId(entityId);
        return cart;
    }
);
