import { api } from "../../config/api"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./actionType"


export const createOrder = ({ address, navigate }) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST })
    try {
        const { data } = await api.post(`/api/orders`, address)
        console.log('create order: ', data);
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data })
        if (data.id) {
            navigate({ search:`?step=3&order_id=${data.id}` })
        }
    } catch (error) {
        console.log('error: ', error);
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error })

    }
}

export const getOrderById = (orderId) => async (dispatch) => {
    dispatch({ type: GET_ORDER_BY_ID_REQUEST })
    try {
        const { data } = await api.get(`/api/orders/${orderId}`)
        console.log('get order by id: ', data);
        dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data })

    } catch (error) {
        console.log('error: ', error);
        dispatch({ type: GET_ORDER_BY_ID_FAILURE, payload: error })

    }
}