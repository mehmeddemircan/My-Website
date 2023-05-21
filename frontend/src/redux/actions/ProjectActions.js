import axios from 'axios'
import { GET_ALL_PROJECT_FAIL, GET_ALL_PROJECT_REQUEST, GET_ALL_PROJECT_SUCCESS, GET_PROJECT_DETAILS_FAIL, GET_PROJECT_DETAILS_REQUEST, GET_PROJECT_DETAILS_SUCCESS } from '../constants/ProjectConstants';

export const GetProjects = (limit,page) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_PROJECT_REQUEST,
      });
  
      const { data } = await axios.get(
        `http://localhost:5000/api/projects?limit=${limit}&page=${page}`
      );
  
      dispatch({
        type: GET_ALL_PROJECT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_PROJECT_FAIL,
        error: error.response,
      });
    }
  };

  export const GetProjectDetails = (projectId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_PROJECT_DETAILS_REQUEST,
      });
  
      const { data } = await axios.get(
        `http://localhost:5000/api/projects/${projectId}`
      );
  
      dispatch({
        type: GET_PROJECT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_PROJECT_DETAILS_FAIL,
        error: error.response,
      });
    }
  };



  