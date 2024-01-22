
// import { Store, registerInDevtools } from "pullstate";


// export const AuthStore = new Store({
//   isLoggedIn: false,
// });

// registerInDevtools({AuthStore});


// import { createStore,registerInDevtools } from 'redux';

// // Define your initial state and reducer function
// const initialState = {};
// function rootReducer(state = initialState, action) {
//   // Handle different actions and update the state accordingly
//   // Add your own logic here
//   return state;
// }

// // Create the Redux store
// const store = createStore(rootReducer);

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
