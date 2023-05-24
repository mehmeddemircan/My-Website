import { combineReducers } from "redux";
import { GET_ALL_MOVIE_FAIL, GET_ALL_MOVIE_REQUEST, GET_ALL_MOVIE_SUCCESS } from "../constants/MovieConstants";


const GET_MOVIES_INITIAL_STATE = {
    totalMovies : 0,
    movies : []
 
  };
  export const getAllMovieReducer = (
    state = GET_MOVIES_INITIAL_STATE,
    action
  ) => {
    switch (action.type) {
      case GET_ALL_MOVIE_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_MOVIE_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          totalMovies : action.payload.totalMovies,
          movies: action.payload.results,
        };
  
      case GET_ALL_MOVIE_FAIL:
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

  const movieReducer = combineReducers({
        getAllMovie : getAllMovieReducer
  })

  export default movieReducer