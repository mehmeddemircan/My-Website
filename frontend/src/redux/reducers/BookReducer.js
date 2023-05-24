import { combineReducers } from "redux";
import { GET_ALL_BOOK_FAIL, GET_ALL_BOOK_REQUEST, GET_ALL_BOOK_SUCCESS } from "../constants/BookConstants";

const GET_BOOKS_INITIAL_STATE = {
    totalBooks : 0,
    books : []
 
  };
  export const getAllBookReducer = (
    state = GET_BOOKS_INITIAL_STATE,
    action
  ) => {
    switch (action.type) {
      case GET_ALL_BOOK_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_BOOK_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          totalBooks : action.payload.totalBooks,
          books: action.payload.results,
        };
  
      case GET_ALL_BOOK_FAIL:
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


  const bookReducer = combineReducers({
    getAllBook : getAllBookReducer
  })

  export default bookReducer