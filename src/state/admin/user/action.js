import { api } from "../../../config/api";
import { GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "./actionType"

export const getAllUser = ()=>async(dispatch)=>{
    dispatch({type:GET_USERS_REQUEST})
    try {
        const { data } = await api.get(`/api/admin/users`)
        console.log('get users: ', data);
        dispatch({ type: GET_USERS_SUCCESS, payload: data })

    } catch (error) {
        console.log('error: ', error);
        dispatch({ type: GET_USERS_FAILURE, payload: error })

    }
}