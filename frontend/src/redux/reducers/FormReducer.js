import { combineReducers } from "redux";
import { DELETE_MY_GIVE_JOB_FORMS_FAIL, DELETE_MY_GIVE_JOB_FORMS_REQUEST, DELETE_MY_GIVE_JOB_FORMS_RESET, DELETE_MY_GIVE_JOB_FORMS_SUCCESS, GET_CITIES_FAIL, GET_CITIES_REQUEST, GET_CITIES_SUCCESS, GET_MY_GIVE_JOB_FORMS_FAIL, GET_MY_GIVE_JOB_FORMS_REQUEST, GET_MY_GIVE_JOB_FORMS_SUCCESS, SEND_GIVE_JOB_FORM_FAIL, SEND_GIVE_JOB_FORM_REQUEST, SEND_GIVE_JOB_FORM_RESET, SEND_GIVE_JOB_FORM_SUCCESS, UPDATE_MY_GIVE_JOB_FORMS_FAIL, UPDATE_MY_GIVE_JOB_FORMS_REQUEST, UPDATE_MY_GIVE_JOB_FORMS_RESET, UPDATE_MY_GIVE_JOB_FORMS_SUCCESS } from "../constants/FormConstants";


const GET_CITIES_INITIAL_STATE = {
    cities : []
 
  };
  export const getCitiesReducer = (
    state = GET_CITIES_INITIAL_STATE,
    action
  ) => {
    switch (action.type) {
      case GET_CITIES_REQUEST:
        return { ...state, loading: true };
  
      case GET_CITIES_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          cities : action.payload.data
        };
  
      case GET_CITIES_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

 
  export const sendGiveJobFormReducer = (
    state = {message : ""},
    action
  ) => {
    switch (action.type) {
      case SEND_GIVE_JOB_FORM_REQUEST:
        return { ...state, loading: true };
  
      case SEND_GIVE_JOB_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          message : action.payload.message
        };
  
      case SEND_GIVE_JOB_FORM_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      case SEND_GIVE_JOB_FORM_RESET : 
        return {
            ...state,
            success : false 
        }
      default:
        return state;
    }
  };

  export const getUserGiveJobFormsReducer = (
    state = { giveJobForms : []},
    action
  ) => {
    switch (action.type) {
      case GET_MY_GIVE_JOB_FORMS_REQUEST:
        return { ...state, loading: true };
  
      case GET_MY_GIVE_JOB_FORMS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
             giveJobForms : action.payload.results
        };
  
      case GET_MY_GIVE_JOB_FORMS_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      
      default:
        return state;
    }
  };

  export const deleteUpdateUserGiveJobFormsReducer = (
    state = { message : ""},
    action
  ) => {
    switch (action.type) {
      case DELETE_MY_GIVE_JOB_FORMS_REQUEST:
      case UPDATE_MY_GIVE_JOB_FORMS_REQUEST : 
        return { ...state, loading: true };
  
      case DELETE_MY_GIVE_JOB_FORMS_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
            message : action.payload.message
        };
  
        case UPDATE_MY_GIVE_JOB_FORMS_SUCCESS:
            return {
              ...state,
              loading: false,
              isUpdated: true,
                message : action.payload.message
            };
      
      case DELETE_MY_GIVE_JOB_FORMS_FAIL:
        return {
          ...state,
          loading: false,
          isDeleted: false,
          error: action.payload,
        };
        case UPDATE_MY_GIVE_JOB_FORMS_FAIL:
            return {
              ...state,
              loading: false,
              isUpdated: false,
              error: action.payload,
            };
      case DELETE_MY_GIVE_JOB_FORMS_RESET : 
        return {
            ...state,
            isDeleted : false 
        }
        case UPDATE_MY_GIVE_JOB_FORMS_RESET : 
        return {
            ...state,
            isUpdated : false 
        }
      
      
      default:
        return state;
    }
  };



  const formReducer = combineReducers({
    getCities : getCitiesReducer,
    sendGiveJobForm : sendGiveJobFormReducer,
    getUserGiveJobForms : getUserGiveJobFormsReducer,
    deleteUpdateUserGiveJobForms : deleteUpdateUserGiveJobFormsReducer
  })

  export default formReducer