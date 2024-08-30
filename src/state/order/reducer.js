import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./actionType";


const intialState = {
    order: null,
    orders: [],
    error: null,
    loading: false
}

export const orderReducer = (state = intialState, action) => {
    switch (action.type) {
        case GET_ORDER_BY_ID_REQUEST:
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                error: null,
                loading: true
            }
        case GET_ORDER_BY_ID_SUCCESS:
            return {
                ...state,
                error:null,
                loading:false,
                order:action.payload
            }
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                order:action.payload,
                // orders:[action.payload,...state.orders],
                error:null,
                loading:false
            }
        case GET_ORDER_BY_ID_FAILURE:
        case CREATE_ORDER_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default:
            return state;
    }
}