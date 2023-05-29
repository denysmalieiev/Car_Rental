import {
    USER_NEW_ORDER_REQUEST, USER_NEW_ORDER_SUCCESS, USER_NEW_ORDER_FAIL,
    USER_ALL_ORDER_REQUEST, USER_ALL_ORDER_SUCCESS, USER_ALL_ORDER_FAIL,
    USER_SINGLE_ORDER_DETAIL_REQUEST, USER_SINGLE_ORDER_DETAIL_SUCCESS, USER_SINGLE_ORDER_DETAIL_FAIL,
    USER_ORDER_CANCEL_REQUEST, USER_ORDER_CANCEL_SUCCESS, USER_ORDER_CANCEL_FAIL,
    ADMIN_USERS_ALL_ORDERS_REQUEST,  ADMIN_USERS_ALL_ORDERS_SUCCESS, ADMIN_USERS_ALL_ORDERS_FAIL,
    ADMIN_USER_ORDER_UPDATE_REQUEST, ADMIN_USER_ORDER_UPDATE_SUCCESS, ADMIN_USER_ORDER_UPDATE_FAIL,
    CLEAR_ERRORS,
} from '../constants/Constants';

// User New Order
export const carRental_User_New_Order = (formData) => async(dispath)=>{
    try{
        dispath({type: USER_NEW_ORDER_REQUEST})
        const config = {headers: { "Content-Type": "application/json"}};

        const { data } = await axios.post(`/order/user/new`, { formData }, config);

        dispath({
            type: USER_NEW_ORDER_SUCCESS,
            payload: data.order
        })

    } catch(error){
        dispath({
            type: USER_NEW_ORDER_FAIL,
            payload: error.response.data.message 
        })
    }
}



// User All Orders
export const carRental_User_All_Orders = async(dispath)=>{
    try{
        dispath({type: USER_ALL_ORDER_REQUEST})
        const { data } = await axios.get(`/order/user/all`);
        dispath({
            type: USER_ALL_ORDER_SUCCESS,
            payload: data.orders
        })

    } catch(error){
        dispath({
            type: USER_ALL_ORDER_FAIL,
            payload: error.response.data.message 
        })
    }
}



// User Single Order
export const carRental_User_Single_Order = (id) => async(dispath)=>{
    try{
        dispath({type: USER_SINGLE_ORDER_DETAIL_REQUEST})
        const { data } = await axios.get(`/order/user/${id}`);
        dispath({
            type: USER_SINGLE_ORDER_DETAIL_SUCCESS,
            payload: data.order
        })

    } catch(error){
        dispath({
            type: USER_SINGLE_ORDER_DETAIL_FAIL,
            payload: error.response.data.message 
        })
    }
}


// User: Order Cancel
export const carRental_User_Order_Cancel = (id) => async(dispath)=>{
    try{
        dispath({type: USER_ORDER_CANCEL_REQUEST})
        const { data } = await axios.get(`/order/cancel/${id}`);
        dispath({
            type: USER_ORDER_CANCEL_SUCCESS,
            payload: data.order
        })

    } catch(error){
        dispath({
            type: USER_ORDER_CANCEL_FAIL,
            payload: error.response.data.message 
        })
    }
}


// Admin: Getting All Orders
export const carRental_Admin_Users_All_Orders = async(dispath)=>{
    try{
        dispath({type: ADMIN_USERS_ALL_ORDERS_REQUEST})
        const { data } = await axios.get(`/order/admin/all`);
        dispath({
            type: ADMIN_USERS_ALL_ORDERS_SUCCESS,
            payload: data
        })

    } catch(error){
        dispath({
            type: ADMIN_USERS_ALL_ORDERS_FAIL,
            payload: error.response.data.message 
        })
    }
}

// Admin: Updating Order
export const carRental_Admin_User_Order_Update = (id, formData) => async(dispath)=>{
    try{
        dispath({type: ADMIN_USER_ORDER_UPDATE_REQUEST})
        const config = {headers: { "Content-Type": "application/json"}};

        const { data } = await axios.get(`/order/update/${id}`, formData, config);

        dispath({
            type: ADMIN_USER_ORDER_UPDATE_SUCCESS,
            payload: data.order
        })

    } catch(error){
        dispath({
            type: ADMIN_USER_ORDER_UPDATE_FAIL,
            payload: error.response.data.message 
        })
    }
}

// Clearing Error
export const clearError = async(dispath)=>{
    dispath({type: CLEAR_ERRORS});
}