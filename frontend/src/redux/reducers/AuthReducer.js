import { IS_USER_LOGGED_IN_REQUEST, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST } from "../constants/AuthConstants";

const initialState = {
    token: null,
    user: {
      name: "",
      email: "",
     
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: "",
  
  };
  
  export const authReducer = (state = initialState, action) => {
    
  
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          authenticating: true,
        };
        case IS_USER_LOGGED_IN_REQUEST:
          return {
            ...state,
            loading : true ,
            authenticating: true,
          };
    
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          message : action.payload.message,
          authenticate: true,
          authenticating: false,
          loading : false
        };
  
      case LOGIN_FAIL:
        return {
          ...state,
          authenticate: false ,
          authenticating: false,
          error: action.payload.error,
        };
  
      case LOGOUT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LOGOUT_SUCCESS: {
        return {
          ...initialState,
        };
      }
      case LOGOUT_FAIL: {
        return {
          ...state,
          error: action.payload.error,
          loading: false,
        };
      }
  
      case REGISTER_REQUEST:
        return {
          ...state,
          authenticating: true,
        };
  
      case REGISTER_FAIL:
        return {
          ...state,
          authenticate : false ,
          authenticating : false , 
          error: action.payload.error,
        };
  
      default:
        return state;
    }
  };