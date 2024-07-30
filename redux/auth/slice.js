import { createSlice } from '@reduxjs/toolkit';
import API from './operations.js';

const authSlice = createSlice({
  name: 'authReducer',

  initialState: {
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder.addCase(API.registerUser.pending, state => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(API.registerUser.fulfilled, state => {
      state.isLoading = false;
    });

    builder.addCase(API.registerUser.rejected, state => {
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(API.loginUser.pending, state => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(API.loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = action.payload;
    });

    builder.addCase(API.loginUser.rejected, state => {
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(API.logoutUser.pending, state => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(API.logoutUser.fulfilled, state => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.token = null;
    });

    builder.addCase(API.logoutUser.rejected, state => {
      state.isLoading = false;
      state.error = true;
    });

    // builder.addCase(API.refreshUser.pending, state => {
    //   state.isLoading = true;
    //   state.error = null;
    // });

    // builder.addCase(API.refreshUser.fulfilled, state => {
    //   state.isLoading = false;
    //   state.isLoggedIn = true;
    // });

    // builder.addCase(API.refreshUser.rejected, state => {
    //   state.isLoading = false;
    // });
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
