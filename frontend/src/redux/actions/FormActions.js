
import axios from "axios";
import { DELETE_MY_GIVE_JOB_FORMS_FAIL, DELETE_MY_GIVE_JOB_FORMS_REQUEST, DELETE_MY_GIVE_JOB_FORMS_SUCCESS, GET_CITIES_FAIL, GET_CITIES_REQUEST, GET_CITIES_SUCCESS, GET_MY_GIVE_JOB_FORMS_FAIL, GET_MY_GIVE_JOB_FORMS_REQUEST, GET_MY_GIVE_JOB_FORMS_SUCCESS, SEND_GIVE_JOB_FORM_FAIL, SEND_GIVE_JOB_FORM_REQUEST, SEND_GIVE_JOB_FORM_SUCCESS, UPDATE_MY_GIVE_JOB_FORMS_FAIL, UPDATE_MY_GIVE_JOB_FORMS_REQUEST, UPDATE_MY_GIVE_JOB_FORMS_SUCCESS } from "../constants/FormConstants";


export const GetCities = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_CITIES_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://turkiyeapi.cyclic.app/api/v1/provinces`
      );
  
      dispatch({
        type: GET_CITIES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CITIES_FAIL,
        error: error.response,
      });
    }
  };


  export const SendGiveJobForm = (giveJobForm) => async (dispatch) => {
    try {
      dispatch({
        type: SEND_GIVE_JOB_FORM_REQUEST,
      });
  
      const { data } = await axios.post(
        `http://localhost:5000/api/giveJobForms/submit`,giveJobForm
      );
  
      dispatch({
        type: SEND_GIVE_JOB_FORM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SEND_GIVE_JOB_FORM_FAIL,
        error: error.response,
      });
    }
  };

  export const GetUserGiveJobForms = (userId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_MY_GIVE_JOB_FORMS_REQUEST,
      });
  
      const { data } = await axios.get(
        `http://localhost:5000/api/users/${userId}/giveJobForms`
      );
  
      dispatch({
        type: GET_MY_GIVE_JOB_FORMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_MY_GIVE_JOB_FORMS_FAIL,
        error: error.response,
      });
    }
  };

  export const DeleteUserGiveJobForms = (formId) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_MY_GIVE_JOB_FORMS_REQUEST,
      });
  
      const { data } = await axios.delete(
        `http://localhost:5000/api/giveJobForms/${formId}/delete`
      );
  
      dispatch({
        type: DELETE_MY_GIVE_JOB_FORMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_MY_GIVE_JOB_FORMS_FAIL,
        error: error.response,
      });
    }
  };


  export const UpdateUserGiveJobForms = (formId,form) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_MY_GIVE_JOB_FORMS_REQUEST,
      });
  
      const { data } = await axios.put(
        `http://localhost:5000/api/giveJobForms/${formId}/update`,form
      );
  
      dispatch({
        type: UPDATE_MY_GIVE_JOB_FORMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_MY_GIVE_JOB_FORMS_FAIL,
        error: error.response,
      });
    }
  };

  

  