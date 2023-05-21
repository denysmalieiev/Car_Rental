import axios from 'axios';
import {
    CARS_GET_ALL_REQUEST, CARS_GET_ALL_SUCCESS, CARS_GET_ALL_FAIL,
    CARS_GET_SINGLE_REQUEST, CARS_GET_SINGLE_SUCCESS, CARS_GET_SINGLE_FAIL,
    CLEAR_ERRORS,
} from '../constants/Constants.js';

// Getting all CARSs
export const carRental_Get_All_Cars = async(dispath)=>{
    try{
        dispath({type: CARS_GET_ALL_REQUEST})
        const { data } = await axios.get(`/cars/all`);
        dispath({
            type: CARS_GET_ALL_SUCCESS,
            payload: data.cars
        })

    } catch(error){
        dispath({
            type: CARS_GET_ALL_FAIL,
            payload: error.response.data.message 
        })
    }
}

// Getting single CARS
export const carRental_Get_Single_car = (id) => async(dispath)=>{
    try{
        dispath({type: CARS_GET_SINGLE_REQUEST})

        const { data } = await axios.get(`/cars/${id}`);

        dispath({
            type: CARS_GET_SINGLE_SUCCESS,
            payload: data.car
        })

    } catch(error){
        dispath({
            type: CARS_GET_SINGLE_FAIL, 
            payload: error.response.data.message 
        })
    }
}

// Clearing Error
export const clearError = async(dispath)=>{
    dispath({type: CLEAR_ERRORS});
}