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
        console.log(action.payload.newUser);
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        console.log(action.payload.user);
      })
      .addCase(logIn.rejected, state => {
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = true;
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
