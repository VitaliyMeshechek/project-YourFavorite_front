import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNotices = createAsyncThunk(
    'notices/fetchCategory',
    async ({ category, query }, thunkAPI) => {
      console.log({ category, query });
      try {
        await axios.get(`/notices/${category}`, { query: { query } });
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


