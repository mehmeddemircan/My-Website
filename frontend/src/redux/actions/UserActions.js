import axios from "axios";
import { GET_USER_COMMENTS_FAIL, GET_USER_COMMENTS_REQUEST, GET_USER_COMMENTS_SUCCESS } from "../constants/UserConstants";

export const GetUserComments = (userId,limit,currentPage) => async (dispatch) => {
    try {
      dispatch({
        type: GET_USER_COMMENTS_REQUEST,
      });
  
      const { data } = await axios.get(
        `http://localhost:5000/api/users/${userId}/comments?limit=${limit}&page=${currentPage}`
      );
  
      dispatch({
        type: GET_USER_COMMENTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_USER_COMMENTS_FAIL,
        error: error.response,
      });
    }
  };
