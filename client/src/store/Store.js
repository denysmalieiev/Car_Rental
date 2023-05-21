import {legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userAuthReducer, carRental_User_Profile_Load, carRental_User_Profile_Update, carRental_profile_Password_Update } from '../utils/reducers/UserReducers.js';
import { allCarReducer, singleCarReducer } from '../utils/reducers/CarsReducers.js';


const reducer = combineReducers({
    auth: userAuthReducer,
    user: carRental_User_Profile_Load,
    profileUpdate: carRental_User_Profile_Update,
    passwordUpdate: carRental_profile_Password_Update,
    cars: allCarReducer,
    car: singleCarReducer,
})

let initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;