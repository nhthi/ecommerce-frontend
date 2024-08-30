import { GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "./actionType";

const intialState = {
    users: [],
    loading: false,
    error: null,
}

export const adminUserReducer = (state = intialState, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                ...state,
                error: null,
                loading: true
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                users:action.payload
            }
        case GET_USERS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}