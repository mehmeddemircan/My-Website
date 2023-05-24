import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import projectReducer from "./reducers/ProjectReducers";
import blogReducer from "./reducers/BlogReducer";
import movieReducer from "./reducers/MovieReducer";
import bookReducer from "./reducers/BookReducer";



const rootReducer = combineReducers({
    project : projectReducer,
    blog : blogReducer,
    movie : movieReducer ,
    book : bookReducer
})

const initialState = {}

const middleware = [thunk];



const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;