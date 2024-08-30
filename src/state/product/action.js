import excludeVariablesFromRoot from "@mui/material/styles/excludeVariablesFromRoot"
import { api } from "../../config/api"
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, SEARCH_PRODUCT_FAILURE, SEARCH_PRODUCT_REQUEST, SEARCH_PRODUCT_SUCCESS } from "./actionType"


export const findProductById =(productId) => async (dispatch) =>{
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    try {
        const {data} = await api.get(`/api/products/${productId}`)
        console.log('find product by id :',data);
        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
    } catch (error) {
        console.log('error',error);
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error})
    }
}

export const findProducts =(reqData) => async (dispatch) =>{
    dispatch({type:FIND_PRODUCTS_REQUEST})
    try {
        const {color,size,minPrice,maxPrice,minDiscount,category,stock,sort,pageNumber,pageSize} = reqData
        const {data} = await api.get(`/api/products?color=${color}&size=${size}&minPrice=${minPrice}&maxPrice=${maxPrice}
            &minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
        console.log('find products :',data);
        dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})
    } catch (error) {
        console.log('error',error);
        dispatch({type:FIND_PRODUCTS_FAILURE,payload:error})
    }
}

export const deleteProductById =(productId) => async (dispatch) =>{
    dispatch({type:DELETE_PRODUCT_REQUEST})
    try {
        const {data} = await api.delete(`/api/admin/products/${productId}`)
        console.log('delete products :',data);
        dispatch({type:DELETE_PRODUCT_SUCCESS,payload:productId})
    } catch (error) {
        console.log('error',error);
        dispatch({type:DELETE_PRODUCT_FAILURE,payload:error})
    }
}

export const createProduct =(req) => async (dispatch) =>{
    dispatch({type:CREATE_PRODUCT_REQUEST})
    try {
        const {data} = await api.post(`/api/admin/products`,req)
        console.log('create products :',data);
        dispatch({type:CREATE_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
        console.log('error',error);
        dispatch({type:CREATE_PRODUCT_FAILURE,payload:error})
    }
}

export const searchProduct =(query) => async (dispatch) =>{
    dispatch({type:SEARCH_PRODUCT_REQUEST})
    try {
        const {data} = await api.get(`/api/products/search?query=${query}`)
        console.log('search products :',data);
        dispatch({type:SEARCH_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
        console.log('error',error);
        dispatch({type:SEARCH_PRODUCT_FAILURE,payload:error})
    }
}