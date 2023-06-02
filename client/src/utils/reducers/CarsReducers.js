import {
    CARS_GET_ALL_REQUEST, CARS_GET_ALL_SUCCESS, CARS_GET_ALL_FAIL,
    CARS_GET_SINGLE_REQUEST, CARS_GET_SINGLE_SUCCESS, CARS_GET_SINGLE_FAIL,
    ADMIN_NEW_CAR_DETAILS_REQUEST, ADMIN_NEW_CAR_DETAILS_SUCCESS, ADMIN_NEW_CAR_DETAILS_FAIL,
    ADMIN_CAR_DETAILS_UPDATE_REQUEST, ADMIN_CAR_DETAILS_UPDATE_SUCCESS, ADMIN_CAR_DETAILS_UPDATE_FAIL, ADMIN_CAR_DETAILS_UPDATE_RESET,
    ADMIN_CAR_DETAILS_DELETE_REQUEST, ADMIN_CAR_DETAILS_DELETE_SUCCESS, ADMIN_CAR_DETAILS_DELETE_FAIL,
    ADMIN_NEW_OFFICE_LOCATION_REQUEST, ADMIN_NEW_OFFICE_LOCATION_SUCCESS, ADMIN_NEW_OFFICE_LOCATION_FAIL, ADMIN_NEW_OFFICE_LOCATION_RESET,
    ADMIN_GET_OFFICES_LOCATION_REQUEST, ADMIN_GET_OFFICES_LOCATION_SUCCESS, ADMIN_GET_OFFICES_LOCATION_FAIL,
    ADMIN_SINGLE_OFFICE_LOCATION_REQUEST, ADMIN_SINGLE_OFFICE_LOCATION_SUCCESS, ADMIN_SINGLE_OFFICE_LOCATION_FAIL,
    ADMIN_UPDATE_OFFICE_LOCATION_REQUEST, ADMIN_UPDATE_OFFICE_LOCATION_SUCCESS, ADMIN_UPDATE_OFFICE_LOCATION_FAIL, ADMIN_UPDATE_OFFICE_LOCATION_RESET,
    ADMIN_DELETE_OFFICE_LOCATION_REQUEST, ADMIN_DELETE_OFFICE_LOCATION_SUCCESS, ADMIN_DELETE_OFFICE_LOCATION_FAIL, ADMIN_DELETE_OFFICE_LOCATION_RESET,
    USERS_ALL_STORE_RESET,
    CLEAR_ERRORS,
} from '../constants/Constants.js';

export const allCarReducer = (state = {}, action)=>{
    switch(action.type){
        case CARS_GET_ALL_REQUEST:
        case ADMIN_NEW_CAR_DETAILS_REQUEST:
        case ADMIN_CAR_DETAILS_DELETE_REQUEST:
            return {
                loading: true,
                cars: null
            }

        case CARS_GET_ALL_SUCCESS:
        case ADMIN_NEW_CAR_DETAILS_SUCCESS:
        case ADMIN_CAR_DETAILS_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                cars: action.payload
            }


        case CARS_GET_ALL_FAIL:
        case ADMIN_NEW_CAR_DETAILS_FAIL:
        case ADMIN_CAR_DETAILS_DELETE_FAIL:
            return {
                ...state,
                loading: false,
                cars: null,
                error: action.payload,
            }
        case USERS_ALL_STORE_RESET:
            return {
                state: {},
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

export const singleCarReducer = (state = {}, action)=>{
    switch(action.type){
        case CARS_GET_SINGLE_REQUEST:
            return {
                loading: true,
                car: null,
            }
        case CARS_GET_SINGLE_SUCCESS:
            return {
                ...state,
                loading: false,
                car: action.payload,
            }

        case ADMIN_CAR_DETAILS_UPDATE_REQUEST:
            return {
                    loading: true,
                    car: null,
                    isCarDetailUpdated: false,
                }
        case ADMIN_CAR_DETAILS_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                car: action.payload,
                isCarDetailUpdated: true,
            }

        case CARS_GET_SINGLE_FAIL:
        case ADMIN_CAR_DETAILS_UPDATE_FAIL:
            return {
                ...state,
                loading: false,
                car: null,
                isCarDetailUpdated: false,
                error: action.payload,
            }

        case ADMIN_CAR_DETAILS_UPDATE_RESET:
            return {
                ...state,
                isCarDetailUpdated: false,
            };

        case USERS_ALL_STORE_RESET:
            return {
                state: {},
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


export const adminNewOfficeReducer = (state = {}, action)=>{
    switch(action.type){

        case ADMIN_NEW_OFFICE_LOCATION_REQUEST:
        case ADMIN_UPDATE_OFFICE_LOCATION_REQUEST:
            return {
                loading: true,
                office: null,
                isOfficeStatus: false
            }

        case ADMIN_NEW_OFFICE_LOCATION_SUCCESS:
        case ADMIN_UPDATE_OFFICE_LOCATION_SUCCESS:
            return {
                ...state,
                loading: false,
                office: action.payload,
                isOfficeStatus: true
            }

        case ADMIN_NEW_OFFICE_LOCATION_RESET:
        case ADMIN_UPDATE_OFFICE_LOCATION_RESET:
            return {
                ...state,
                loading: false,
                office: null,
                isOfficeStatus: false
            }
            
        case ADMIN_NEW_OFFICE_LOCATION_FAIL:
        case ADMIN_UPDATE_OFFICE_LOCATION_FAIL:
            return {
                ...state,
                loading: false,
                office: null,
                error: action.payload,
            }

        case ADMIN_DELETE_OFFICE_LOCATION_REQUEST:
            return {
                loading: true,
                isOfficeDelated: false
            }

        case ADMIN_DELETE_OFFICE_LOCATION_SUCCESS:
            return {
                loading: false,
                isOfficeDelated: true
            }

        case ADMIN_DELETE_OFFICE_LOCATION_RESET:
            return {
                loading: false,
                isOfficeDelated: false
            }

        case ADMIN_DELETE_OFFICE_LOCATION_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        case USERS_ALL_STORE_RESET:
            return {
                state: {},
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

// fbxgncvhb
export const adminSingleOfficeReducer = (state = {}, action)=>{
    switch(action.type){
        case ADMIN_SINGLE_OFFICE_LOCATION_REQUEST:
            return {
                loading: true,
                office: null,
                
            }

        case ADMIN_SINGLE_OFFICE_LOCATION_SUCCESS:
            return {
                ...state,
                loading: false,
                office: action.payload,
            }
            
        case ADMIN_SINGLE_OFFICE_LOCATION_FAIL:
            return {
                ...state,
                loading: false,
                office: null,
                error: action.payload,
            }

        case USERS_ALL_STORE_RESET:
            return {
                state: {},
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

// dsfxdgncvhjb


export const adminAllOfficesReducer = (state = {}, action)=>{
    switch(action.type){
        case ADMIN_GET_OFFICES_LOCATION_REQUEST:
            return {
                loading: true,
                offices: null
            }
        case ADMIN_GET_OFFICES_LOCATION_SUCCESS:
            return {
                ...state,
                loading: false,
                offices: action.payload
            }

        case ADMIN_GET_OFFICES_LOCATION_FAIL:
            return {
                ...state,
                loading: false,
                offices: null,
                error: action.payload,
            }

        case USERS_ALL_STORE_RESET:
            return {
                state: {},
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