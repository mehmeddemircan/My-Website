import { combineReducers } from "redux";
import { DELETE_FORM_FAIL, DELETE_FORM_REQUEST, DELETE_FORM_RESET, DELETE_FORM_SUCCESS, DELETE_GIVE_JOB_FORM_FAIL, DELETE_GIVE_JOB_FORM_REQUEST, DELETE_GIVE_JOB_FORM_RESET, DELETE_GIVE_JOB_FORM_SUCCESS, DELETE_PROJECT_IDEA_FORM_FAIL, DELETE_PROJECT_IDEA_FORM_REQUEST, DELETE_PROJECT_IDEA_FORM_RESET, DELETE_PROJECT_IDEA_FORM_SUCCESS, DELETE_TEAM_FORM_FAIL, DELETE_TEAM_FORM_REQUEST, DELETE_TEAM_FORM_RESET, DELETE_TEAM_FORM_SUCCESS, GET_CITIES_FAIL, GET_CITIES_REQUEST, GET_CITIES_SUCCESS, GET_FORMS_FAIL, GET_FORMS_REQUEST, GET_FORMS_SUCCESS, GET_MY_GIVE_JOB_FORMS_FAIL, GET_MY_GIVE_JOB_FORMS_REQUEST, GET_MY_GIVE_JOB_FORMS_SUCCESS, GET_MY_PROJECT_IDEA_FORMS_FAIL, GET_MY_PROJECT_IDEA_FORMS_REQUEST, GET_MY_PROJECT_IDEA_FORMS_SUCCESS, GET_MY_TEAM_FORMS_FAIL, GET_MY_TEAM_FORMS_REQUEST, GET_MY_TEAM_FORMS_SUCCESS, SEND_FORM_FAIL, SEND_FORM_REQUEST, SEND_FORM_RESET, SEND_FORM_SUCCESS, UPDATE_FORM_FAIL, UPDATE_FORM_REQUEST, UPDATE_FORM_RESET, UPDATE_FORM_SUCCESS, UPDATE_GIVE_JOB_FORM_FAIL, UPDATE_GIVE_JOB_FORM_REQUEST, UPDATE_GIVE_JOB_FORM_RESET, UPDATE_GIVE_JOB_FORM_SUCCESS, UPDATE_PROJECT_IDEA_FORM_FAIL, UPDATE_PROJECT_IDEA_FORM_REQUEST, UPDATE_PROJECT_IDEA_FORM_RESET, UPDATE_PROJECT_IDEA_FORM_SUCCESS, UPDATE_TEAM_FORM_FAIL, UPDATE_TEAM_FORM_REQUEST, UPDATE_TEAM_FORM_RESET, UPDATE_TEAM_FORM_SUCCESS } from "../constants/FormConstants";


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

 
  export const sendFormReducer = (
    state = {message : ""},
    action
  ) => {
    switch (action.type) {
      case SEND_FORM_REQUEST:
        return { ...state, loading: true };
  
      case SEND_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          message : action.payload.message
        };
  
      case SEND_FORM_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      case SEND_FORM_RESET : 
        return {
            ...state,
            success : false 
        }
      default:
        return state;
    }
  };

  export const getUserGiveJobFormsReducer = (
    state = { forms : []},
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
             forms : action.payload.results
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
      case DELETE_GIVE_JOB_FORM_REQUEST:
      case UPDATE_GIVE_JOB_FORM_REQUEST : 
        return { ...state, loading: true };
  
      case DELETE_GIVE_JOB_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
            message : action.payload.message
        };
  
        case UPDATE_GIVE_JOB_FORM_SUCCESS:
            return {
              ...state,
              loading: false,
              isUpdated: true,
                message : action.payload.message
            };
      
      case DELETE_GIVE_JOB_FORM_FAIL:
        return {
          ...state,
          loading: false,
          isDeleted: false,
          error: action.payload,
        };
        case UPDATE_GIVE_JOB_FORM_FAIL:
            return {
              ...state,
              loading: false,
              isUpdated: false,
              error: action.payload,
            };
      case DELETE_GIVE_JOB_FORM_RESET : 
        return {
            ...state,
            isDeleted : false 
        }
        case UPDATE_GIVE_JOB_FORM_RESET : 
        return {
            ...state,
            isUpdated : false 
        }
      
      
      default:
        return state;
    }
  };

  export const deleteUpdateUserTeamFormsReducer = (
    state = { message : ""},
    action
  ) => {
    switch (action.type) {
      case DELETE_TEAM_FORM_REQUEST:
      case UPDATE_TEAM_FORM_REQUEST : 
        return { ...state, loading: true };
  
      case DELETE_TEAM_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
            message : action.payload.message
        };
  
        case UPDATE_TEAM_FORM_SUCCESS:
            return {
              ...state,
              loading: false,
              isUpdated: true,
                message : action.payload.message
            };
      
      case DELETE_TEAM_FORM_FAIL:
        return {
          ...state,
          loading: false,
          isDeleted: false,
          error: action.payload,
        };
        case UPDATE_TEAM_FORM_FAIL:
            return {
              ...state,
              loading: false,
              isUpdated: false,
              error: action.payload,
            };
      case DELETE_TEAM_FORM_RESET : 
        return {
            ...state,
            isDeleted : false 
        }
        case UPDATE_TEAM_FORM_RESET : 
        return {
            ...state,
            isUpdated : false 
        }
      
      
      default:
        return state;
    }
  };


  export const deleteUpdateUserProjectIdeaFormsReducer = (
    state = { message : ""},
    action
  ) => {
    switch (action.type) {
      case DELETE_PROJECT_IDEA_FORM_REQUEST:
      case UPDATE_PROJECT_IDEA_FORM_REQUEST : 
        return { ...state, loading: true };
  
      case DELETE_PROJECT_IDEA_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
            message : action.payload.message
        };
  
        case UPDATE_PROJECT_IDEA_FORM_SUCCESS:
            return {
              ...state,
              loading: false,
              isUpdated: true,
                message : action.payload.message
            };
      
      case DELETE_PROJECT_IDEA_FORM_FAIL:
        return {
          ...state,
          loading: false,
          isDeleted: false,
          error: action.payload,
        };
        case UPDATE_PROJECT_IDEA_FORM_FAIL:
            return {
              ...state,
              loading: false,
              isUpdated: false,
              error: action.payload,
            };
      case DELETE_PROJECT_IDEA_FORM_RESET : 
        return {
            ...state,
            isDeleted : false 
        }
        case UPDATE_PROJECT_IDEA_FORM_RESET : 
        return {
            ...state,
            isUpdated : false 
        }
      
      
      default:
        return state;
    }
  };



  export const getUserTeamFormsReducer = (
    state = { forms : []},
    action
  ) => {
    switch (action.type) {
      case GET_MY_TEAM_FORMS_REQUEST:
        return { ...state, loading: true };
  
      case GET_MY_TEAM_FORMS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
             forms : action.payload.results
        };
  
      case GET_MY_TEAM_FORMS_FAIL:
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

  export const getUserProjectIdeaFormsReducer = (
    state = { forms : []},
    action
  ) => {
    switch (action.type) {
      case GET_MY_PROJECT_IDEA_FORMS_REQUEST:
        return { ...state, loading: true };
  
      case GET_MY_PROJECT_IDEA_FORMS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
             forms : action.payload.results
        };
  
      case GET_MY_PROJECT_IDEA_FORMS_FAIL:
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

  const formReducer = combineReducers({
    getCities : getCitiesReducer,
    sendForm : sendFormReducer,
    getUserGiveJobForms : getUserGiveJobFormsReducer,
    deleteUpdateUserGiveJobForms : deleteUpdateUserGiveJobFormsReducer,
    deleteUpdateUserTeamForms : deleteUpdateUserTeamFormsReducer,
    deleteUpdateUserProjectIdeaForms : deleteUpdateUserProjectIdeaFormsReducer,
    getUserTeamForms : getUserTeamFormsReducer,
    getUserProjectIdeaForms : getUserProjectIdeaFormsReducer
  })

  export default formReducer