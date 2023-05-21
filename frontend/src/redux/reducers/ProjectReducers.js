import { combineReducers } from "redux";
import { GET_ALL_PROJECT_FAIL, GET_ALL_PROJECT_REQUEST, GET_ALL_PROJECT_SUCCESS, GET_PROJECT_DETAILS_FAIL, GET_PROJECT_DETAILS_REQUEST, GET_PROJECT_DETAILS_SUCCESS } from "../constants/ProjectConstants";


const GET_PROJECTS_INITIAL_STATE = {
    totalProjects : 0,
    projects : []
 
  };
  export const getAllProjectReducer = (
    state = GET_PROJECTS_INITIAL_STATE,
    action
  ) => {
    switch (action.type) {
      case GET_ALL_PROJECT_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_PROJECT_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          totalProjects : action.payload.totalProjects,
          projects: action.payload.results,
        };
  
      case GET_ALL_PROJECT_FAIL:
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

  const GET_PROJECT_DETAILS_INITIAL_STATE = {

    project : {}
 
  };
  export const getProjectDetailsReducer = (
    state = GET_PROJECT_DETAILS_INITIAL_STATE,
    action
  ) => {
    switch (action.type) {
      case GET_PROJECT_DETAILS_REQUEST:
        return { ...state, loading: true };
  
      case GET_PROJECT_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          project : action.payload
        };
  
      case GET_PROJECT_DETAILS_FAIL:
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


  const projectReducer = combineReducers({
        getAllProject : getAllProjectReducer,
        getProjectDetails : getProjectDetailsReducer
  })

  export default projectReducer