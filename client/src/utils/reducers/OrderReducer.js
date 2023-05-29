import {
    USER_NEW_ORDER_REQUEST, USER_NEW_ORDER_SUCCESS, USER_NEW_ORDER_FAIL,
    USER_ALL_ORDER_REQUEST, USER_ALL_ORDER_SUCCESS, USER_ALL_ORDER_FAIL,
    USER_SINGLE_ORDER_DETAIL_REQUEST, USER_SINGLE_ORDER_DETAIL_SUCCESS, USER_SINGLE_ORDER_DETAIL_FAIL,
    USER_ORDER_CANCEL_REQUEST, USER_ORDER_CANCEL_SUCCESS, USER_ORDER_CANCEL_FAIL,
    ADMIN_USERS_ALL_ORDERS_REQUEST,  ADMIN_USERS_ALL_ORDERS_SUCCESS, ADMIN_USERS_ALL_ORDERS_FAIL,
    ADMIN_USER_ORDER_UPDATE_REQUEST, ADMIN_USER_ORDER_UPDATE_SUCCESS, ADMIN_USER_ORDER_UPDATE_FAIL,
    CLEAR_ERRORS,
} from '../constants/Constants';


export const carRental_User_Single_Order = (state = {cars: {}}, action)=>{
    switch(action.type){
        case USER_NEW_ORDER_REQUEST:
        case USER_SINGLE_ORDER_DETAIL_REQUEST:
        case USER_ORDER_CANCEL_REQUEST:
        case ADMIN_USER_ORDER_UPDATE_REQUEST:
            return {
                loading: true,
                singleOrder: null
            }

        case USER_NEW_ORDER_SUCCESS:
        case USER_SINGLE_ORDER_DETAIL_SUCCESS:
        case USER_ORDER_CANCEL_SUCCESS:
        case ADMIN_USER_ORDER_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                singleOrder: action.payload
            }

        case USER_NEW_ORDER_FAIL:
        case USER_SINGLE_ORDER_DETAIL_FAIL:
        case USER_ORDER_CANCEL_FAIL:
            case ADMIN_USER_ORDER_UPDATE_FAIL:
            return {
                ...state,
                loading: false,
                singleOrder: null,
                error: action.payload,
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}


export const carRental_User_All_Orders = (state = {cars: {}}, action)=>{
    switch(action.type){
        case USER_ALL_ORDER_REQUEST:
            return {
                loading: true,
                userOrders: null
            }

        case USER_ALL_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                userOrders: action.payload
            }

        case USER_ALL_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                userOrders: null,
                error: action.payload,
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}


export const carRental_Admin_All_Users_Orders = (state = {cars: {}}, action)=>{
    switch(action.type){
        case ADMIN_USERS_ALL_ORDERS_REQUEST:
            return {
                loading: true,
                adminAllOrders: null,
                totalOrderAmount: null
            }

        case ADMIN_USERS_ALL_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                adminAllOrders: action.payload.userOrders,
                totalOrderAmount: action.payload.totalOrderAmount
            }

        case ADMIN_USERS_ALL_ORDERS_FAIL:
            return {
                ...state,
                loading: false,
                adminAllOrders: null,
                error: action.payload,
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}