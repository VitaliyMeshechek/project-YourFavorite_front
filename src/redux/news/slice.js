/* eslint-disable no-unused-vars */
import { fetchNews } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const newsSlice = createSlice({
  name: 'news',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    // FETCH ALL
    [fetchNews.pending]: handlePending,
    [fetchNews.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
  },
});

export const newsReducer = newsSlice.reducer;
