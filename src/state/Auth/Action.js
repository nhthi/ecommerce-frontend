import { api } from "../../config/api"
import { CHANGE_PASSWORD_FAILURE, CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_RRQUEST, FORGOT_PASSWORD_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, RESET_PASSWORD_FAILURE, RESET_PASSWORD_RRQUEST, RESET_PASSWORD_SUCCESS, UPDATE_USER_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "./ActionType"



export const register = ({ values, handleClose }) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })
    try {
        const { data } = await api.post('/auth/signup', values)
        console.log('data: ', data);
        if (data.jwt) localStorage.setItem('jwt', data.jwt)
        console.log('Register success');
        dispatch({ type: REGISTER_SUCCESS, payload: data.jwt })
        handleClose()

    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error })
        console.log('error: ', error);
    }
}

export const login = ({ values, handleClose }) => async (dispatch) => {
    localStorage.clear()
    dispatch({ type: LOGIN_REQUEST })
    try {
        const { data } = await api.post('/auth/signin', values)
        console.log('data: ', data);
        if (data.jwt) localStorage.setItem('jwt', data.jwt)
        console.log('login success');
        dispatch({ type: LOGIN_SUCCESS, payload: data.jwt })
        handleClose()
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error })
        console.log('error: ', error);
    }
}

export const logout = () => async (dispatch) => {
    try {
        if (localStorage.getItem('jwt')) localStorage.removeItem('jwt')
        console.log('logout success');
        dispatch({ type: LOGOUT })
    } catch (error) {
        console.log('error: ', error);
    }
}

export const getUser = () => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST })
    try {
        const { data } = await api.get('/api/users/profile')
        console.log('get user: ', data);
        dispatch({ type: GET_USER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_USER_FAILURE, payload: error })
        console.log('error: ', error);
    }
}

export const updateUser = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST })
    try {
        const { data } = await api.put('/api/users', reqData)
        console.log('update user: ', data);
        dispatch({ type: UPDATE_USER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: UPDATE_USER_FAILURE, payload: error })
        console.log('error: ', error);
    }
}

export const changePassword = (reqData) => async (dispatch) => {
    dispatch({ type: CHANGE_PASSWORD_REQUEST })
    try {
        const { data } = await api.put('/api/users/change-pw', reqData)
        console.log('change pw user: ', data);
        dispatch({ type: CHANGE_PASSWORD_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CHANGE_PASSWORD_FAILURE, payload: error })
        console.log('change pw error: ', error);
    }
}

export const forgotPassword = (email) => async (dispatch) => {
    dispatch({ type: FORGOT_PASSWORD_RRQUEST })
    try {
        const { data } = await api.post(`/auth/forgot-password?email=${email}`)
        dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message })
        console.log('send email success: ');
    } catch (error) {
        dispatch({ type: FORGOT_PASSWORD_FAILURE, payload: error })
        console.log("send email error: ", error);
    }
}

export const resetPassword = (req) => async (dispatch) => {
    dispatch({ type: RESET_PASSWORD_RRQUEST })
    try {
        const { data } = await api.post(`/auth/reset-password`, req)
        dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.message })
        console.log('reset notify: ', data);
    } catch (error) {
        dispatch({ type: RESET_PASSWORD_FAILURE, payload: error })
        console.log("error: ", error);
    }
}