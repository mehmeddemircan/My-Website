import { combineReducers } from "redux";
import { GET_CITIES_FAIL, GET_CITIES_REQUEST, GET_CITIES_SUCCESS } from "../constants/FormConstants";


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


  const formReducer = combineReducers({
    getCities : getCitiesReducer
  })

  export default formReducer