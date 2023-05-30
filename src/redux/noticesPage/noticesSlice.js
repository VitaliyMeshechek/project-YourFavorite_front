import { createSlice } from '@reduxjs/toolkit';
import {
  addToFavorite,
  deleteFromFavorite,
  fetchAll,
  fetchFavorites,
  fetchNotices,
  addNotice, fetchUsersNotices
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const noticesPageSlice = createSlice({
  name: 'noticesPage',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    favorite: [],
    own: [],
  },

  extraReducers: {
    [fetchAll.pending]: handlePending,
    [addNotice.pending]: handlePending,
    [fetchAll.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchAll.rejected]: handleRejected,
    [addNotice.rejected]: handleRejected,

    [fetchNotices.pending]: handlePending,
    [fetchNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchNotices.rejected]: handleRejected,

    [fetchFavorites.pending]: handlePending,
    [fetchFavorites.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.favorite = action.payload;
    },
    [fetchFavorites.rejected]: handleRejected,

    [addToFavorite.pending]: handlePending,
    [addToFavorite.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.favorite.push(action.payload);
    },
    [addToFavorite.rejected]: handleRejected,
    [addNotice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteFromFavorite.pending]: handlePending,
    [deleteFromFavorite.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.favorite.findIndex(
        contact => contact.id === action.payload.id
      );
      state.favorite.splice(index, 1);
    },
    },
    [deleteFromFavorite.rejected]: handleRejected,

    [fetchUsersNotices.pending]: handlePending,
    [fetchUsersNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.own = action.payload;
    },
    [fetchUsersNotices.rejected]: handleRejected,


  },

);

export const noticesPageReducer = noticesPageSlice.reducer;
