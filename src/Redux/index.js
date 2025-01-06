import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authProvider/Reducer";

const mainReducer = combineReducers({
  user: authReducer,
});

export default mainReducer;