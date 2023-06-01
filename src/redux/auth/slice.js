import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      id: null,
      name: null,
      email: null,
      avatar: null,
      birthday: null,
      phone: null,
      city: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        console.log(state.user);
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, state => {
        state.isLoggedIn = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = {
          ...action.payload.user,
          firstLogin: false,
        };
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        return state;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        return state;
      }),
});

export const authReducer = authSlice.reducer;
