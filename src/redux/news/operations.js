import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://project-yourfavorite-back.onrender.com/api/news';

export const fetchNews = createAsyncThunk(
  'news/getNews',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(URL);
      return res.data.news;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
