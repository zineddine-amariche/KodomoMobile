import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'CreateEwallets',
  initialState: {
     
    isLoggedIn:false
  },
  reducers: {
 
    login: (state, action) => {
      state.isLoggedIn = action.payload;
    },
 
  },

  extraReducers: builder => {},
});

export const {login, } =
authSlice.actions;
export default authSlice.reducer;
