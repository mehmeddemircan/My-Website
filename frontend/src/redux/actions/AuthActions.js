import axios from "axios";

import {

  GOOGLE_AUTH_SUCCESS,
  IS_USER_LOGGED_IN_REQUEST,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,

  REGISTER_FAIL,
  REGISTER_REQUEST,
} from "../constants/AuthConstants";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

// giriş yapma 
export const Login = (user) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const res = await axios.post(`http://localhost:5000/api/login`, {
      ...user,
    });

    if (res.status === 201) {
         
    const { token, user , message } = res.data;
    localStorage.setItem("token", token);

    localStorage.setItem("user", JSON.stringify(user));
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        token,
        user,
        message
      },
    });
    }

  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,

      payload: error.response.data,
    });
  }
};

export const SignInGoogleFunc = () => async(dispatch) =>  {
            const provider = new GoogleAuthProvider()
            signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user ; 
                dispatch({type: GOOGLE_AUTH_SUCCESS , payload : user})
                localStorage.setItem("user", JSON.stringify(user));
                
            }).catch((error) => {
                alert(error)
            });


    }




    export const GoogleAuthIsUserLoggedIn = () => {
      return async (dispatch) => {
        dispatch({
          type: IS_USER_LOGGED_IN_REQUEST,
        });
    
       
    
        auth.onAuthStateChanged((user) => {
          if (user) {
            dispatch({
              type: GOOGLE_AUTH_SUCCESS,
              payload: {
                user,
              },
            });
          } else {
            dispatch({
              type: LOGIN_FAIL,
              payload: "User is not logged in",
            });
          }
        });
      };
    };
    export const GoogleSignOut = () => {
      return async (dispatch) => {
      
         
    
          await auth.signOut();
     
          dispatch({ type: LOGOUT_SUCCESS });
          localStorage.removeItem("user");
        } 
      
    };
    

// kayıt olma 
export const register = (user) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });


    
    const res = await axios.post("http://localhost:5000/api/register", user);
    if (res.status === 201) {
        
      const { token, user ,message} = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token,
          user,
          message
        },
      });

 
    }

  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};

// sayfa yenilendiğinde dahi kullanıcı girişlerini sifırlamayı önler
export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({
      type : IS_USER_LOGGED_IN_REQUEST ,
    })
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: "das",
      });
    }
  };
};

// Logout
export const logout = () => async (dispatch) => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT_SUCCESS });
};
