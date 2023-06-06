import axios from "axios";
import { GET_PROFILE_FAIL, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_USER_COMMENTS_FAIL, GET_USER_COMMENTS_REQUEST, GET_USER_COMMENTS_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "../constants/UserConstants";

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

// profil bilgilerini getir
export const GetProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_PROFILE_REQUEST,
    });
    const token = localStorage.getItem('token');
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    };

    const { data } = await axios.get(
      `http://localhost:5000/api/profile/me`,config
    );

    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      error: error.response,
    });
  }
};
  
// profili güncelle
export const UpdateProfile = (user) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_PROFILE_REQUEST,
    });
    const token = localStorage.getItem('token');
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    };

    const { data } = await axios.put(
      `http://localhost:5000/api/profile/update`,user,config
    );
    localStorage.setItem("user", JSON.stringify(data.user))
    localStorage.setItem("token",data.token)
    
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      error: error.response,
    });
  }
};
