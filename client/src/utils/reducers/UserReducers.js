import {
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAIL,
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,
    LOGOUT_SUCCESS, LOGOUT_FAIL,
    LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL,
    UPDATE_USER_PROFILE_REQUEST, UPDATE_USER_PROFILE_SUCCESS, UPDATE_USER_PROFILE_FAIL, UPDATE_USER_PROFILE_RESET,
    UPDATE_USER_PASSWORD_REQUEST, UPDATE_USER_PASSWORD_SUCCESS, UPDATE_USER_PASSWORD_FAIL, UPDATE_USER_PASSWORD_RESET,
    CLEAR_ERRORS,
} from '../constants/Constants.js';


export const userAuthReducer = (state = {}, action)=>{
  switch(action.type){
    case SIGN_UP_REQUEST:
    case LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
      }

    case LOGOUT_SUCCESS:
    case SIGN_UP_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
      };
      
    case SIGN_UP_FAIL:
    case LOGIN_FAIL: 
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      }

    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }; 

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      }
        
    default:
      return state;
    }
}

export const carRental_User_Profile_Load = (state = {}, action) => {
  switch (action.type) {
    case LOAD_USER_REQUEST:
      return {
        loading: true,
      }
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case LOAD_USER_FAIL:
      return {
        loading: false,
        user: null,
        error: action.payload,
      }

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};


export const carRental_User_Profile_Update = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isProfileUpdated: true,
      };

    case UPDATE_USER_PROFILE_FAIL:
      return{
        ...state,
        loading: false,
        error: action.payload,
      }

    case UPDATE_USER_PROFILE_RESET:
      return {
        ...state,
        isProfileUpdated: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const carRental_profile_Password_Update = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_USER_PASSWORD_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_USER_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          isPasswordUpdated: action.payload,
        };
      case UPDATE_USER_PASSWORD_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

      case UPDATE_USER_PASSWORD_RESET:
        return {
          ...state,
          isPasswordUpdated: false,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
};