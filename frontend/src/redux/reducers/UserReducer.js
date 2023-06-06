import { combineReducers } from "redux";
import { GET_PROFILE_FAIL, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_USER_COMMENTS_FAIL, GET_USER_COMMENTS_REQUEST, GET_USER_COMMENTS_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_RESET, UPDATE_PROFILE_SUCCESS } from "../constants/UserConstants";

const GET_USER_COMMENTS_INITIAL_STATE = {
    totalComments : 0,
    userComments : []
 
  };
  export const getUserCommentsReducer = (
    state = GET_USER_COMMENTS_INITIAL_STATE,
    action
  ) => {
    switch (action.type) {
      case GET_USER_COMMENTS_REQUEST:
        return { ...state, loading: true };
  
      case GET_USER_COMMENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          totalComments : action.payload.totalComments,
          userComments: action.payload.results,
        };
  
      case GET_USER_COMMENTS_FAIL:
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


  export const getProfileReducer = (
    state = {user: {}},
    action
  ) => {
    switch (action.type) {
      case GET_PROFILE_REQUEST:
        return { ...state, loading: true };
  
      case GET_PROFILE_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          
          user: action.payload.user,
        };
  
      case GET_PROFILE_FAIL:
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
  export const updateProfileReducer = (state = { token : "", user : {} , message : "" }, action) => {
    switch (action.type) {
      case UPDATE_PROFILE_REQUEST:
        return { ...state, loading: true };
      case UPDATE_PROFILE_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          token : action.payload.token,
          user: action.payload.user,
          message : action.payload.message
        };
  
      case UPDATE_PROFILE_FAIL:
        return { ...state, loading: false, error: action.payload };
  
        case UPDATE_PROFILE_RESET:
          return { ...state,success: false, token : "" , user : {} };
      default:
        return state;
    }
  };
  

  const userReducer = combineReducers({
        getUserComments : getUserCommentsReducer,
        getProfile : getProfileReducer,
        updateProfile : updateProfileReducer
  })

  export default userReducer;