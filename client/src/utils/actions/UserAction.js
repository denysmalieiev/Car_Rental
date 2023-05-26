import axios from 'axios';
import {
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAIL,
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,
    LOGOUT_SUCCESS, LOGOUT_FAIL,
    LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL,
    UPDATE_USER_PROFILE_REQUEST, UPDATE_USER_PROFILE_SUCCESS, UPDATE_USER_PROFILE_FAIL,
    UPDATE_USER_PASSWORD_REQUEST, UPDATE_USER_PASSWORD_SUCCESS, UPDATE_USER_PASSWORD_FAIL, 
    ADMIN_GET_ALL_USERS_REQUEST, ADMIN_GET_ALL_USERS_SUCCESS, ADMIN_GET_ALL_USERS_FAIL,
    ADMIN_SINGLE_USER_REQUEST, ADMIN_SINGLE_USER_SUCCESS, ADMIN_SINGLE_USER_FAIL, 
    ADMIN_USER_ROLE_UPDATE_REQUEST, ADMIN_USER_ROLE_UPDATE_SUCCESS, ADMIN_USER_ROLE_UPDATE_FAIL,
    ADMIN_USER_ACCOUNT_DELETE_REQUEST, ADMIN_USER_ACCOUNT_DELETE_SUCCESS, ADMIN_USER_ACCOUNT_DELETE_FAIL,
    CLEAR_ERRORS,
} from '../constants/Constants.js';

// Sign up
export const carRental_Sign_Up = ( firstName, lastName, email, password ) => async(dispath)=>{
    try{
        dispath({ type: SIGN_UP_REQUEST });
        const config = {headers: { "Content-Type": "application/json"}};
        const {data} = await axios.post(`/user/signup`, {
                firstName, 
                lastName, 
                email, 
                password
            },
            config
        );
        dispath({
            type: SIGN_UP_SUCCESS,
            payload: data
        })

    } catch(error){
        dispath({
            type: SIGN_UP_FAIL,
            payload: error.response.data.message
        })
    }
}

// Sign in
export const carRental_Sign_In = (email, password) => async(dispath)=>{
    try{
        dispath({ type: LOGIN_REQUEST });

        const config = {headers: { "Content-Type": "application/json"}};

        await axios.post(`/user/login`, { email, password }, config);

        dispath({
            type: LOGIN_SUCCESS,
            // payload: data.success
        })

    } catch(error){
        dispath({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

// Sign out
export const carRental_Sign_Out = async(dispath)=>{
    try{
        await axios.get(`/user/logout`);
        
        dispath({
            type: LOGOUT_SUCCESS
        })

    } catch(error){
        dispath({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Load user
export const carRental_Load_User = async(dispath)=>{
    try{
        dispath({type: LOAD_USER_REQUEST})

        const {data} = await axios.get(`/user/profile`);
        dispath({
            type: LOAD_USER_SUCCESS,
            payload: data.user
        })

    } catch(error){
        dispath({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Profile update
export const carRental_User_Profile_Update =(userData) => async(dispath)=>{
    try{
        dispath({type: UPDATE_USER_PROFILE_REQUEST})
        const config = {headers: { "Content-Type": "application/json"}};
        const { data } = await axios.patch(`/user/profile/update`, userData, config);
        dispath({
            type: UPDATE_USER_PROFILE_SUCCESS,
            payload: data.user
        })
    } catch(error){
        dispath({
            type: UPDATE_USER_PROFILE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Password update
export const carRental_User_Password_Update = (formData) => async(dispath)=>{
    try{
        dispath({type: UPDATE_USER_PASSWORD_REQUEST})     
        const config = {headers: { "Content-Type": "application/json"}};
        const { data } = await axios.put(`/user/password/update`, {
            oldPassword: formData.oldPassword,
            newPassword: formData.newPassword,
            confirmPassword: formData.confirmPassword,
        }, config);

        dispath({
            type: UPDATE_USER_PASSWORD_SUCCESS,
            payload: data.success
        })
    } catch(error){
        dispath({
            type: UPDATE_USER_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}

// Admin: Get All Users
export const carRental_Admin_Get_All_Users = async(dispath)=>{
    try{
        dispath({type: ADMIN_GET_ALL_USERS_REQUEST})     

        const { data } = await axios.get(`/user/admin/users`);

        dispath({
            type: ADMIN_GET_ALL_USERS_SUCCESS,
            payload: data.users
        })
    } catch(error){
        dispath({
            type: ADMIN_GET_ALL_USERS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Admin: Get Single User Request
export const carRental_Admin_Get_Single_User = (id) => async(dispath)=>{
    try{
        dispath({type: ADMIN_SINGLE_USER_REQUEST})     

        const { data } = await axios.get(`/user/admin/user/${id}`);

        dispath({
            type: ADMIN_SINGLE_USER_SUCCESS,
            payload: data.userProfile
        })
    } catch(error){
        dispath({
            type: ADMIN_SINGLE_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Admin: User Role Update
export const carRental_Admin_User_Role_Update = (id, formData) => async(dispath)=>{
    try{
        dispath({type: ADMIN_USER_ROLE_UPDATE_REQUEST})     
        const config = {headers: { "Content-Type": "application/json"}};
        const { data } = await axios.put(`/user/admin/user/${id}`, {
            role: formData.role,
        }, config);

        dispath({
            type: ADMIN_USER_ROLE_UPDATE_SUCCESS,
            payload: data.user
        })
    } catch(error){
        dispath({
            type: ADMIN_USER_ROLE_UPDATE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Admin: User Account Delete
export const carRental_Admin_User_Account_Delete = (id) => async(dispath)=>{
    try{

        dispath({type: ADMIN_USER_ACCOUNT_DELETE_REQUEST}) 

        await axios.delete(`/user/admin/user/${id}`);

        dispath({
            type: ADMIN_USER_ACCOUNT_DELETE_SUCCESS
        })

    } catch(error){
        dispath({
            type: ADMIN_USER_ACCOUNT_DELETE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clearing Error
export const clearErrors = async(dispath)=>{
    dispath({type: CLEAR_ERRORS});
}