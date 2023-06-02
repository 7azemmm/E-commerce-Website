import { CREATE_NEW_USER,RESET_PASSWORD,VERIFY_PASSWORD, FOREGT_PASSWORD, GET_CURERNT_USER, LOGIN_USER } from '../type'
import { useInsertData } from '../../hooks/useInsertData'
import { useGetData, useGetDataToken } from './../../hooks/useGetData';
import { useInsUpdateData } from '../../hooks/useUpdateData';

//create new user 
export const createNewUser = (data) => async (dispatch) => {
    try {
 // Use the useInsertData function to send a POST request with the provided data
        const response = await useInsertData(`/api/v1/auth/signup`, data);
        dispatch({
            type: CREATE_NEW_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: CREATE_NEW_USER,
            payload: e.response,
        })
    }
}



//login  user 
export const loginUser = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/login`, data);
        dispatch({
            type: LOGIN_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: LOGIN_USER,
            payload: e.response,
        })
    }
}


//login  user 
export const getLoggedUser = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/users/getMe`);
        dispatch({
            type: GET_CURERNT_USER,
            payload: response,
            loading: true
        })

    } 
    catch (e) {
        dispatch({
            type: GET_CURERNT_USER,
            payload: e.response,
        })
    }
}