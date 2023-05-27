import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import projectReducer from "./reducers/ProjectReducers";
import blogReducer from "./reducers/BlogReducer";
import movieReducer from "./reducers/MovieReducer";
import bookReducer from "./reducers/BookReducer";
import { authReducer } from "./reducers/AuthReducer";
import commentReducer from "./reducers/CommentReducer";
import userReducer from "./reducers/UserReducer";
import formReducer from "./reducers/FormReducer";



const rootReducer = combineReducers({
    auth : authReducer ,
    project : projectReducer,
    blog : blogReducer,
    movie : movieReducer ,
    book : bookReducer,
    comment : commentReducer,
    user : userReducer,
    form : formReducer
 
})

const initialState = {}

const middleware = [thunk];



const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;