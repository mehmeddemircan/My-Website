import { combineReducers } from "redux";
import { GET_ALL_BLOG_FAIL, GET_ALL_BLOG_REQUEST, GET_ALL_BLOG_SUCCESS, GET_BLOG_DETAILS_FAIL, GET_BLOG_DETAILS_REQUEST, GET_BLOG_DETAILS_SUCCESS } from "../constants/BlogConstants";


const GET_BLOGS_INITIAL_STATE = {
    totalBlogs : 0,
    blogs : []
 
  };
  export const getAllBlogReducer = (
    state = GET_BLOGS_INITIAL_STATE,
    action
  ) => {
    switch (action.type) {
      case GET_ALL_BLOG_REQUEST:
        return { ...state, loading: true };
  
      case GET_ALL_BLOG_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          totalBlogs : action.payload.totalBlogs,
          blogs: action.payload.results,
        };
  
      case GET_ALL_BLOG_FAIL:
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

  const GET_BLOG_DETAILS_INITIAL_STATE = {

    blog : {}
 
  };
  export const getBlogDetailsReducer = (
    state = GET_BLOG_DETAILS_INITIAL_STATE,
    action
  ) => {
    switch (action.type) {
      case GET_BLOG_DETAILS_REQUEST:
        return { ...state, loading: true };
  
      case GET_BLOG_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          project : action.payload
        };
  
      case GET_BLOG_DETAILS_FAIL:
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


  const blogReducer = combineReducers({
        getAllBlog : getAllBlogReducer,
        getBlogDetails : getBlogDetailsReducer
  })

  export default blogReducer