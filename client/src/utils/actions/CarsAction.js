import axios from 'axios';
import {
    CARS_GET_ALL_REQUEST, CARS_GET_ALL_SUCCESS, CARS_GET_ALL_FAIL,
    CARS_GET_SINGLE_REQUEST, CARS_GET_SINGLE_SUCCESS, CARS_GET_SINGLE_FAIL,
    ADMIN_NEW_CAR_DETAILS_REQUEST, ADMIN_NEW_CAR_DETAILS_SUCCESS, ADMIN_NEW_CAR_DETAILS_FAIL,
    ADMIN_CAR_DETAILS_UPDATE_REQUEST, ADMIN_CAR_DETAILS_UPDATE_SUCCESS, ADMIN_CAR_DETAILS_UPDATE_FAIL, ADMIN_CAR_DETAILS_UPDATE_RESET,
    ADMIN_CAR_DETAILS_DELETE_REQUEST, ADMIN_CAR_DETAILS_DELETE_SUCCESS, ADMIN_CAR_DETAILS_DELETE_FAIL,
    ADMIN_NEW_OFFICE_LOCATION_REQUEST, ADMIN_NEW_OFFICE_LOCATION_SUCCESS, ADMIN_NEW_OFFICE_LOCATION_FAIL,
    ADMIN_GET_OFFICES_LOCATION_REQUEST, ADMIN_GET_OFFICES_LOCATION_SUCCESS, ADMIN_GET_OFFICES_LOCATION_FAIL,
    CLEAR_ERRORS,
} from '../constants/Constants.js';

// Getting all CARS
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

// Getting single car
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

// Admin: New Car
export const carRental_Admin_New_Car_Detail = ( formData ) => async(dispath)=>{
    try{
        dispath({type: ADMIN_NEW_CAR_DETAILS_REQUEST})
        const config = {headers: { "Content-Type": "application/json"}};
        
        const {data} = await axios.post(`/cars/admin/register`, formData, config );
        
        dispath({
            type: ADMIN_NEW_CAR_DETAILS_SUCCESS,
            payload: data.cars
        })

    } catch(error){
        dispath({
            type: ADMIN_NEW_CAR_DETAILS_FAIL,
            payload: error.response.data.message 
        })
    }
}

// Admin: Car Update
export const carRental_Admin_Car_Details_Update =  ( id, formData ) => async(dispath)=>{
    try{
        dispath({type: ADMIN_CAR_DETAILS_UPDATE_REQUEST})
        
        const config = {headers: { "Content-Type": "application/json"}};
        
        const {data} = await axios.patch(`/cars/admin/detail/delete/${id}`, formData, config );
        
        dispath({
            type: ADMIN_CAR_DETAILS_UPDATE_SUCCESS,
            payload: data.car
        })

    } catch(error){
        dispath({
            type: ADMIN_CAR_DETAILS_UPDATE_FAIL,
            payload: error.response.data.message 
        })
    }
}

    // Admin: Car Delete
export const carRental_Admin_Car_Details_Delete = (id) => async(dispath)=>{
    try{
        dispath({type: ADMIN_CAR_DETAILS_DELETE_REQUEST})
        
        const { data } = await axios.delete(`/cars/admin/detail/delete/${id}`);
        
        dispath({
            type: ADMIN_CAR_DETAILS_DELETE_SUCCESS,
            payload: data.cars
        })

    } catch(error){
        dispath({
            type: ADMIN_CAR_DETAILS_DELETE_FAIL,
            payload: error.response.data.message 
        })
    }
}

// Admin: New Offices
export const carRental_Admin_New_Office_Location = ( formData ) => async(dispath)=>{
    try{
        dispath({ type: ADMIN_NEW_OFFICE_LOCATION_REQUEST });
        
        const config = {headers: { "Content-Type": "application/json"}};
        
        const {data} = await axios.post(`/user/admin/office/register`, formData, config );
        
        dispath({
            type: ADMIN_NEW_OFFICE_LOCATION_SUCCESS,
            payload: data.offices
        })

    } catch(error){
        dispath({
            type: ADMIN_NEW_OFFICE_LOCATION_FAIL,
            payload: error.response.data.message
        })
    }
}

// Getting all Offices
export const carRental_Admin_All_Offices_Load = async(dispath)=>{
    try{
        dispath({type: ADMIN_GET_OFFICES_LOCATION_REQUEST})

        const { data } = await axios.get(`/user/admin/office/all`);
        dispath({
            type: ADMIN_GET_OFFICES_LOCATION_SUCCESS,
            payload: data.offices
        })

    } catch(error){
        dispath({
            type: ADMIN_GET_OFFICES_LOCATION_FAIL,
            payload: error.response.data.message 
        })
    }
}

// Clearing Error
export const clearError = async(dispath)=>{
    dispath({type: CLEAR_ERRORS});
}