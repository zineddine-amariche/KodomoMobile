import { combineReducers } from '@reduxjs/toolkit';
import authSlice from "./Features/app/authSlice"
const rootReducer = combineReducers({
  // Add your individual reducers here
  auth: authSlice,

});

export default rootReducer;