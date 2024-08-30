import { api } from "../../../config/api";
import { CANCELLED_ORDERS_FAILURE, CANCELLED_ORDERS_REQUEST, CANCELLED_ORDERS_SUCCESS, CONFIRMED_ORDERS_FAILURE, CONFIRMED_ORDERS_REQUEST, CONFIRMED_ORDERS_SUCCESS, DELETE_ORDERS_FAILURE, DELETE_ORDERS_REQUEST, DELETE_ORDERS_SUCCESS, DELIVERED_ORDERS_FAILURE, DELIVERED_ORDERS_REQUEST, DELIVERED_ORDERS_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, PLACED_ORDERS_FAILURE, PLACED_ORDERS_REQUEST, PLACED_ORDERS_SUCCESS, SHIPPED_ORDERS_FAILURE, SHIPPED_ORDERS_REQUEST, SHIPPED_ORDERS_SUCCESS } from "./actionType";

export const getOrders = (orderId) => async (dispatch) => {
    dispatch({ type: GET_ORDERS_REQUEST })
    try {
        const { data } = await api.get(`/api/admin/orders`)
        console.log('get orders: ', data);
        dispatch({ type: GET_ORDERS_SUCCESS, payload: data })

    } catch (error) {
        console.log('error: ', error);
        dispatch({ type: GET_ORDERS_FAILURE, payload: error })

    }
}

export const confirmOrder = (orderId) => async (dispatch) => {
    dispatch({ type: CONFIRMED_ORDERS_REQUEST })
    try {
        const { data } = await api.put(`/api/admin/orders/${orderId}/confirm`)
        console.log('confirm order: ', data);
        dispatch({ type: CONFIRMED_ORDERS_SUCCESS, payload: data })

    } catch (error) {
        console.log('error: ', error);
        dispatch({ type: CONFIRMED_ORDERS_FAILURE, payload: error })

    }
}

export const shipOrder = (orderId) => async (dispatch) => {
    dispatch({ type: SHIPPED_ORDERS_REQUEST })
    try {
        const { data } = await api.put(`/api/admin/orders/${orderId}/ship`)
        console.log('ship order: ', data);
        dispatch({ type: SHIPPED_ORDERS_SUCCESS, payload: data })

    } catch (error) {
        console.log('error: ', error);
        dispatch({ type: SHIPPED_ORDERS_FAILURE, payload: error })

    }
}

export const deliveryOrder = (orderId) => async (dispatch) => {
    dispatch({ type: DELIVERED_ORDERS_REQUEST })
    try {
        const { data } = await api.put(`/api/admin/orders/${orderId}/delivery`)
        console.log('delivery order: ', data);
        dispatch({ type: DELIVERED_ORDERS_SUCCESS, payload: data })

    } catch (error) {
        console.log('error: ', error);
        dispatch({ type: DELIVERED_ORDERS_FAILURE, payload: error })

    }
}

export const cancelOrder = (orderId) => async (dispatch) => {
    dispatch({ type: CANCELLED_ORDERS_REQUEST })
    try {
        const { data } = await api.put(`/api/admin/orders/${orderId}/cancel`)
        console.log('cancel order: ', data);
        dispatch({ type: CANCELLED_ORDERS_SUCCESS, payload: data })

    } catch (error) {
        console.log('error: ', error);
        dispatch({ type: CANCELLED_ORDERS_FAILURE, payload: error })

    }
}

export const placeOrder = (orderId) => async (dispatch) => {
    dispatch({ type: PLACED_ORDERS_REQUEST })
    try {
        const { data } = await api.put(`/api/admin/orders/${orderId}/place`)
        console.log('placed order: ', data);
        dispatch({ type: PLACED_ORDERS_SUCCESS, payload: data })

    } catch (error) {
        console.log('error: ', error);
        dispatch({ type: PLACED_ORDERS_FAILURE, payload: error })

    }
}

export const deleteOrder = (orderId) => async (dispatch) => {
    dispatch({ type: DELETE_ORDERS_REQUEST })
    try {
        const { data } = await api.delete(`/api/admin/orders/${orderId}`)
        console.log('delete order: ', data);
        dispatch({ type: DELETE_ORDERS_SUCCESS, payload: orderId })

    } catch (error) {
        console.log('error: ', error);
        dispatch({ type: DELETE_ORDERS_FAILURE, payload: error })

    }
}