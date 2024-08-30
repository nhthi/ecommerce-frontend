import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./actionType";


const initialState = {
    cart: null,
    // cartItem: null,
    cartItems: [],
    error: null,
    loading: false,
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART_REQUEST:
        case ADD_ITEM_TO_CART_REQUEST:
        case REMOVE_CART_ITEM_REQUEST:
        case UPDATE_CART_ITEM_REQUEST:
            return {
                ...state,
                error: null,
                loading: true
            }
        case GET_CART_SUCCESS:
            return {
                ...state,
                error:null,
                loading:false,
                cart:action.payload,
                cartItems:action.payload.cartItems
            }
        case ADD_ITEM_TO_CART_SUCCESS:
            return {
                ...state,
                error:null,
                loading:false,
                cartItems:[action.payload,...state.cartItems]
            }
        case REMOVE_CART_ITEM_SUCCESS:
            return {
                ...state,
                error:null,
                loading:false,
                cartItems:state.cartItems.filter(item => item.id !== action.payload)
            }
        case UPDATE_CART_ITEM_SUCCESS:
            return {
                ...state,
                error:null,
                loading:false,
                cartItems: state.cartItems.map( item => item.id !== action.payload.id ? item : action.payload)
            }
        case GET_CART_FAILURE:
        case ADD_ITEM_TO_CART_FAILURE:
        case REMOVE_CART_ITEM_FAILURE:
        case UPDATE_CART_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}