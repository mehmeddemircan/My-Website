import axios from "axios";
import { GET_ALL_MOVIE_FAIL, GET_ALL_MOVIE_REQUEST, GET_ALL_MOVIE_SUCCESS } from "../constants/MovieConstants";


export const GetMovies = (limit,page) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_MOVIE_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://mywebsiteapi.onrender.com/api/movies?limit=${limit}&page=${page}`
      );
  
      dispatch({
        type: GET_ALL_MOVIE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_MOVIE_FAIL,
        error: error.response,
      });
    }
  };
