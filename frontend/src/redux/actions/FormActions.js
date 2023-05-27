
import axios from "axios";
import { GET_CITIES_FAIL, GET_CITIES_REQUEST, GET_CITIES_SUCCESS } from "../constants/FormConstants";


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