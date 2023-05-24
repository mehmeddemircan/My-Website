import axios from "axios";
import { GET_ALL_BLOG_FAIL, GET_ALL_BLOG_REQUEST, GET_ALL_BLOG_SUCCESS, GET_BLOG_DETAILS_FAIL, GET_BLOG_DETAILS_REQUEST, GET_BLOG_DETAILS_SUCCESS } from "../constants/BlogConstants";


export const GetBlogs = (limit,page) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_BLOG_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://mywebsiteapi.onrender.com/api/blogs?limit=${limit}&page=${page}`
      );
  
      dispatch({
        type: GET_ALL_BLOG_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_BLOG_FAIL,
        error: error.response,
      });
    }
  };

  export const GetBlogDetails = (blogId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_BLOG_DETAILS_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://mywebsiteapi.onrender.com/api/blogs/${blogId}`
      );
  
      dispatch({
        type: GET_BLOG_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_BLOG_DETAILS_FAIL,
        error: error.response,
      });
    }
  };

