import { createSlice } from '@reduxjs/toolkit';

const queryInitialState = '';

const querySlice = createSlice({
  name: 'query',
  initialState: queryInitialState,
  reducers: {
    setQuery(state, action) {
      return action.payload;
    },
  },
});

export const { setQuery } = querySlice.actions;
export const queryReducer = querySlice.reducer;