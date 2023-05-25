import { combineReducers } from "redux";
import {
  CREATE_PROJECT_COMMENT_FAIL,
  CREATE_PROJECT_COMMENT_REQUEST,
  CREATE_PROJECT_COMMENT_RESET,
  CREATE_PROJECT_COMMENT_SUCCESS,
  DELETE_PROJECT_COMMENT_FAIL,
  DELETE_PROJECT_COMMENT_REQUEST,
  DELETE_PROJECT_COMMENT_RESET,
  DELETE_PROJECT_COMMENT_SUCCESS,
  GET_PROJECT_COMMENTS_FAIL,
  GET_PROJECT_COMMENTS_REQUEST,
  GET_PROJECT_COMMENTS_SUCCESS,
  GET_PROJECT_COMMENT_REPLIES_FAIL,
  GET_PROJECT_COMMENT_REPLIES_REQUEST,
  GET_PROJECT_COMMENT_REPLIES_SUCCESS,
  UPDATE_PROJECT_COMMENT_FAIL,
  UPDATE_PROJECT_COMMENT_REQUEST,
  UPDATE_PROJECT_COMMENT_RESET,
  UPDATE_PROJECT_COMMENT_SUCCESS,
} from "../constants/CommentConstants";

const GET_PROJECT_COMMENTS_INITIAL_STATE = {
  totalComments: 0,
  comments: [],
};
export const getProjectCommentsReducer = (
  state = GET_PROJECT_COMMENTS_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case GET_PROJECT_COMMENTS_REQUEST:
      return { ...state, loading: true };

    case GET_PROJECT_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        totalComments: action.payload.totalComments,
        comments: action.payload.results,
      };

    case GET_PROJECT_COMMENTS_FAIL:
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

const GET_PROJECT_COMMENT_REPLIES_INITIAL_STATE = {
  
    commentReplies: [],
  };
  export const getProjectCommentRepliesReducer = (
    state = GET_PROJECT_COMMENT_REPLIES_INITIAL_STATE,
    action
  ) => {
    switch (action.type) {
      case GET_PROJECT_COMMENT_REPLIES_REQUEST:
        return { ...state, loading: true };
  
      case GET_PROJECT_COMMENT_REPLIES_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
       
          commentReplies: action.payload.data,
        };
  
      case GET_PROJECT_COMMENT_REPLIES_FAIL:
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

export const sendProjectCommentReducer = (
  state = {
    message: "",
  },
  action
) => {
  switch (action.type) {
    case CREATE_PROJECT_COMMENT_REQUEST:
      return { ...state, loading: true };

    case CREATE_PROJECT_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAdded: true,
        message: action.payload.message,
      };

    case CREATE_PROJECT_COMMENT_FAIL:
      return {
        ...state,
        loading: false,
        isAdded: false,
        error: action.payload,
      };
    case CREATE_PROJECT_COMMENT_RESET:
      return {
        ...state,
        isAdded: false,
      };
    default:
      return state;
  }
};

export const deleteProjectCommentReducer = (
  state = {
    message: "",
  },
  action
) => {
  switch (action.type) {
    case DELETE_PROJECT_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_PROJECT_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true,
        message: action.payload.message,
      };

    case DELETE_PROJECT_COMMENT_FAIL:
      return { ...state, error: action.payload };

    case DELETE_PROJECT_COMMENT_RESET:
      return {
        ...state,
        isDeleted: false,
      };

    default:
      return state;
  }
};


export const updateProjectCommentReducer = (
    state = {
      message: "",
    },
    action
  ) => {
    switch (action.type) {
      case UPDATE_PROJECT_COMMENT_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case UPDATE_PROJECT_COMMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: true,
          message: action.payload.message,
        };
  
      case UPDATE_PROJECT_COMMENT_FAIL:
        return { ...state, error: action.payload.error };
  
      case UPDATE_PROJECT_COMMENT_RESET:
        return {
          ...state,
          isUpdated: false,
        };
  
      default:
        return state;
    }
  };

const commentReducer = combineReducers({
  getProjectComments: getProjectCommentsReducer,
  sendProjectComment : sendProjectCommentReducer,
  updateProjectComment : updateProjectCommentReducer,
  deleteProjectComment : deleteProjectCommentReducer,
  getProjectCommentReplies : getProjectCommentRepliesReducer
});

export default commentReducer;
