import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://project-yourfavorite-back.onrender.com/api'

export const fetchAll = createAsyncThunk(
  'noticesPage/fetchAll',
async(_, thunkAPI) => {
  try {
    const response = await axios.get(`/notices` );
    console.log(response.data);
        return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
}
)

export const fetchNotices = createAsyncThunk(
    'noticesPage/fetchNotices',
async ( {categoryName, query} , thunkAPI) => {
      try {
        const response = await axios.get(`/notices/${categoryName}`, {params: {query: query? query : null}} );
        console.log(response.data);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const getFavorite = createAsyncThunk(
    'notices/fetchFavorites',
    async(query, thunkAPI) => {
      try {
        const response = await axios.get(`/notices/favorite`, {params: {query: query? query : null}} );
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    } 
  )

  export const addToFavorite = createAsyncThunk(
    'notices/addToFavorite',
    async (id, thunkAPI) => {
      try {
        const response = await axios.post(`/notices/favorite/${id}` );
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  )


