import {
    CARS_GET_ALL_REQUEST, CARS_GET_ALL_SUCCESS, CARS_GET_ALL_FAIL,
    CARS_GET_SINGLE_REQUEST, CARS_GET_SINGLE_SUCCESS, CARS_GET_SINGLE_FAIL,
    CLEAR_ERRORS,
} from '../constants/Constants.js';

export const allCarReducer = (state = {cars: {}}, action)=>{
    switch(action.type){
        case CARS_GET_ALL_REQUEST:
            return {
                loading: true,
                cars: null
            }

        case CARS_GET_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                cars: action.payload
            }


        case CARS_GET_ALL_FAIL:
            return {
                ...state,
                loading: false,
                cars: null,
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

export const singleCarReducer = (state = {}, action)=>{
    switch(action.type){
        case CARS_GET_SINGLE_REQUEST:
            return {
                loading: true,
                car: null
            }
        case CARS_GET_SINGLE_SUCCESS:
            return {
                ...state,
                loading: false,
                car: action.payload
            }

        case CARS_GET_SINGLE_FAIL:
            return {
                ...state,
                loading: false,
                car: null,
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