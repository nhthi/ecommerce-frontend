import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, SEARCH_PRODUCT_FAILURE, SEARCH_PRODUCT_REQUEST, SEARCH_PRODUCT_SUCCESS } from "./actionType";


const initialState = {
    loading: false,
    error: null,
    products: [],
    product: null,
    deletedProductId:null,
    searchProducts:[]
}

export const customerProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
        case DELETE_PRODUCT_REQUEST:
        case CREATE_PRODUCT_REQUEST:
        case SEARCH_PRODUCT_REQUEST:
            return {
                ...state,
                error: null,
                loading: true
            }
        case FIND_PRODUCTS_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                products: action.payload
            }
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                product: action.payload
            }
        case CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: [action.payload,...state.products],
                product:action.payload
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                deletedProductId:action.payload
            }
        case SEARCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                searchProducts:action.payload
            }
        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
        case DELETE_PRODUCT_FAILURE:
        case CREATE_PRODUCT_FAILURE:
        case SEARCH_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}