import { CANCELLED_ORDERS_FAILURE, CANCELLED_ORDERS_REQUEST, CANCELLED_ORDERS_SUCCESS, CONFIRMED_ORDERS_FAILURE, CONFIRMED_ORDERS_REQUEST, CONFIRMED_ORDERS_SUCCESS, DELETE_ORDERS_FAILURE, DELETE_ORDERS_REQUEST, DELETE_ORDERS_SUCCESS, DELIVERED_ORDERS_FAILURE, DELIVERED_ORDERS_REQUEST, DELIVERED_ORDERS_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, PLACED_ORDERS_FAILURE, PLACED_ORDERS_REQUEST, PLACED_ORDERS_SUCCESS, SHIPPED_ORDERS_FAILURE, SHIPPED_ORDERS_REQUEST, SHIPPED_ORDERS_SUCCESS } from "./actionType";


const initialState = {
    error: null,
    loading: false,
    orders: [],
    updateOrder: null,
    deleteOrderId: null
}

export const adminOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS_REQUEST:
        case PLACED_ORDERS_REQUEST:
        case CONFIRMED_ORDERS_REQUEST:
        case CANCELLED_ORDERS_REQUEST:
        case DELIVERED_ORDERS_REQUEST:
        case SHIPPED_ORDERS_REQUEST:
        case DELETE_ORDERS_REQUEST:
            return {
                ...state,
                error: null,
                loading: true
            }
        case GET_ORDERS_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                orders: action.payload
            }
        case PLACED_ORDERS_SUCCESS:
        case CONFIRMED_ORDERS_SUCCESS:
        case CANCELLED_ORDERS_SUCCESS:
        case DELIVERED_ORDERS_SUCCESS:
        case SHIPPED_ORDERS_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                updateOrder: action.payload
            }
        case DELETE_ORDERS_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                deleteOrderId:action.payload,
                orders:state.orders.filter(item => item.id !== action.payload)
            }
        case GET_ORDERS_FAILURE:
        case PLACED_ORDERS_FAILURE:
        case CONFIRMED_ORDERS_FAILURE:
        case CANCELLED_ORDERS_FAILURE:
        case DELIVERED_ORDERS_FAILURE:
        case SHIPPED_ORDERS_FAILURE:
        case DELETE_ORDERS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}