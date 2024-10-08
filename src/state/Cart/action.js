import { api } from "../../config/api"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./actionType"


export const addItemToCart = (reqData)=> async(dispatch)=>{
    dispatch({type:ADD_ITEM_TO_CART_REQUEST})
    try {
        const {data} = await api.put(`/api/cart/add`,reqData)
        console.log('Add item to cart: ',data);
        dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:data})
        
    } catch (error) {
        console.log('error: ',error);
        dispatch({type:ADD_ITEM_TO_CART_FAILURE,payload:error})
        
    }
}

export const getUserCart = ()=> async(dispatch)=>{
    dispatch({type:GET_CART_REQUEST})
    try {
        const {data} = await api.get(`/api/cart`)
        console.log('get user cart: ',data);
        dispatch({type:GET_CART_SUCCESS,payload:data})
        
    } catch (error) {
        console.log('error: ',error);
        dispatch({type:GET_CART_FAILURE,payload:error})
        
    }
}

export const removeCartItem = (cartItemId)=> async(dispatch)=>{
    dispatch({type:REMOVE_CART_ITEM_REQUEST})
    try {
        const {data} = await api.delete(`/api/cart-item/${cartItemId}`)
        console.log('remove cart item: ',data);
        dispatch({type:REMOVE_CART_ITEM_SUCCESS,payload:cartItemId})
        
    } catch (error) {
        console.log('error: ',error);
        dispatch({type:REMOVE_CART_ITEM_FAILURE,payload:error})
        
    }
}

export const updateCartItem = (reqData)=> async(dispatch)=>{
    dispatch({type:UPDATE_CART_ITEM_REQUEST})
    try {
        const {data} = await api.put(`/api/cart-item/update`,reqData)
        console.log('update cart item: ',data);
        dispatch({type:UPDATE_CART_ITEM_SUCCESS,payload:data})
        dispatch(getUserCart())
        
    } catch (error) {
        console.log('error: ',error);
        dispatch({type:UPDATE_CART_ITEM_FAILURE,payload:error})
        
    }
}