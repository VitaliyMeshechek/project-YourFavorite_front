import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNotices = createAsyncThunk(
    'notices/fetchNotices',
async ( {categoryName, query} , thunkAPI) => {
      try {
        if(!query) {
          const response = await axios.get(`/notices/${categoryName}`);
        return response.data;
        }
        const response = await axios.get(`/notices/${categoryName}`, {params: {query}} );
        console.log({ categoryName, query });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


