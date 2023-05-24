import axios from "axios";
import { GET_ALL_BOOK_FAIL, GET_ALL_BOOK_REQUEST, GET_ALL_BOOK_SUCCESS } from "../constants/BookConstants";

export const GetBooks = (limit,page) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_BOOK_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://mywebsiteapi.onrender.com/api/books?limit=${limit}&page=${page}`
      );
  
      dispatch({
        type: GET_ALL_BOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_BOOK_FAIL,
        error: error.response,
      });
    }
  };