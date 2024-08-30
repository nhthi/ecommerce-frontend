import { CHANGE_PASSWORD_FAILURE, CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_RRQUEST, FORGOT_PASSWORD_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, RESET_PASSWORD_FAILURE, RESET_PASSWORD_RRQUEST, RESET_PASSWORD_SUCCESS, SET_ERROR_NULL, UPDATE_USER_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "./ActionType";


const intialState = {
    error: null,
    loading: false,
    user: null,
    jwt: null,
    success:null
}

export const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case UPDATE_USER_REQUEST:
        case CHANGE_PASSWORD_REQUEST:
        case FORGOT_PASSWORD_RRQUEST:
        case RESET_PASSWORD_RRQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                jwt: action.payload
            }
        case FORGOT_PASSWORD_SUCCESS:
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                error:null,
                success:action.payload
            }
        case UPDATE_USER_SUCCESS:
        case GET_USER_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                user: action.payload
            }
        case CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                success: "Change password success (^_^)",
                loading: false,
                user: action.payload,
                erro:null
            }
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
        case UPDATE_USER_FAILURE:
        case CHANGE_PASSWORD_FAILURE:
        case FORGOT_PASSWORD_FAILURE:
        case RESET_PASSWORD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload?.response?.data?.message,
                success:null
            }

        case LOGOUT:
            return {
                ...state,
                error: null,
                loading: false,
                user: null,
                jwt: null
            }
        case SET_ERROR_NULL:
            return {
                ...state,
                error: null,
                success:null
            }
        default:
            return state;
    }
}

