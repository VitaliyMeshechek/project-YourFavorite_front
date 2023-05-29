import { createSlice } from '@reduxjs/toolkit';
import { addToFavorite, fetchNotices } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const noticesPageSlice = createSlice({
  name: 'notices',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    favorite: [],
    own: []
  },

  extraReducers: {
    [fetchNotices.pending]: handlePending,
    [fetchNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchNotices.rejected]: handleRejected,

    [addToFavorite.pending]: handlePending,
    [addToFavorite.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.favorite.push(action.payload);
    },
    [addToFavorite.rejected]: handleRejected,
  },
});

export const noticesPageReducer = noticesPageSlice.reducer;