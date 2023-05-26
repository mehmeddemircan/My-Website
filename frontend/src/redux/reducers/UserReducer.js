import { combineReducers } from "redux";
import { GET_USER_COMMENTS_FAIL, GET_USER_COMMENTS_REQUEST, GET_USER_COMMENTS_SUCCESS } from "../constants/UserConstants";

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

  const userReducer = combineReducers({
        getUserComments : getUserCommentsReducer
  })

  export default userReducer;