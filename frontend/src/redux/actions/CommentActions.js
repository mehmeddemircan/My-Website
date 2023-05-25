import axios from "axios";
import { CREATE_PROJECT_COMMENT_FAIL, CREATE_PROJECT_COMMENT_REQUEST, CREATE_PROJECT_COMMENT_SUCCESS, DELETE_PROJECT_COMMENT_FAIL, DELETE_PROJECT_COMMENT_REQUEST, DELETE_PROJECT_COMMENT_SUCCESS, GET_PROJECT_COMMENTS_FAIL, GET_PROJECT_COMMENTS_REQUEST, GET_PROJECT_COMMENTS_SUCCESS, GET_PROJECT_COMMENT_REPLIES_FAIL, GET_PROJECT_COMMENT_REPLIES_REQUEST, GET_PROJECT_COMMENT_REPLIES_SUCCESS, UPDATE_PROJECT_COMMENT_FAIL, UPDATE_PROJECT_COMMENT_REQUEST, UPDATE_PROJECT_COMMENT_SUCCESS } from "../constants/CommentConstants";


export const GetProjectComments = (projectId,limit,page) => async (dispatch) => {
    try {
      dispatch({
        type: GET_PROJECT_COMMENTS_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://mywebsiteapi.onrender.com/api/projects/${projectId}/comments?limit=${limit}&page=${page}`
      );
  
      dispatch({
        type: GET_PROJECT_COMMENTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_PROJECT_COMMENTS_FAIL,
        error: error.response,
      });
    }
  };
//get project comment replies
export const getProjectCommentReplies = (commentId) => async(dispatch) => {
    try {
        dispatch({
          type: GET_PROJECT_COMMENT_REPLIES_REQUEST,
        });
    
        const { data } = await axios.get(
          `https://mywebsiteapi.onrender.com/api/comments/${commentId}/replies`
        );
    
        dispatch({
          type: GET_PROJECT_COMMENT_REPLIES_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: GET_PROJECT_COMMENT_REPLIES_FAIL,
          error: error.response,
        });
      }
}
  
export const SendProjectComment = (comment) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_PROJECT_COMMENT_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://mywebsiteapi.onrender.com/api/create-comment`,comment
      );
  
      dispatch({
        type: CREATE_PROJECT_COMMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_PROJECT_COMMENT_FAIL,
        error: error.response,
      });
    }
  };

  export const UpdateProjectComment = (commentId,comment) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_PROJECT_COMMENT_REQUEST,
      });
  
      const { data } = await axios.put(
        `https://mywebsiteapi.onrender.com/api/comments/${commentId}/update`,comment
      );
  
      dispatch({
        type: UPDATE_PROJECT_COMMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_PROJECT_COMMENT_FAIL,
        error: error.response,
      });
    }
  };

  export const DeleteProjectComment = (commentId,comment) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_PROJECT_COMMENT_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://mywebsiteapi.onrender.com/api/comments/${commentId}/delete`,comment
      );
  
      dispatch({
        type: DELETE_PROJECT_COMMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_PROJECT_COMMENT_FAIL,
        error: error.response,
      });
    }
  };

  