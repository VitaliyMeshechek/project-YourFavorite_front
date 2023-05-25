import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addNotice = createAsyncThunk(
    'notices/addNotice',
    async ({ category, newFormData }, thunkAPI) => {
      console.log({ category, newFormData });
      try {
        await axios.post(`/notices/${category}`, newFormData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const fetchPets = createAsyncThunk(
    'pets/fetchCategory',
    async ({ category, query }, thunkAPI) => {
      console.log({ category, query });
      try {
        await axios.get(`/notices/${category}`, newFormData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

