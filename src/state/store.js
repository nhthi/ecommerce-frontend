import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Auth/Reducer";
import { thunk } from "redux-thunk";
import { customerProductReducer } from "./product/reducer";
import { cartReducer } from "./Cart/reducer";
import { orderReducer } from "./order/reducer";
import { adminOrderReducer } from "./admin/order/reducer";
import { adminUserReducer } from "./admin/user/reducer";




const rootReducer = combineReducers({
    auth:authReducer,
    product:customerProductReducer,
    cart:cartReducer,
    order: orderReducer,
    adminOrder : adminOrderReducer,
    adminUser:adminUserReducer
})


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))