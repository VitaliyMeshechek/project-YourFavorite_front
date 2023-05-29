import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNotices = createAsyncThunk(
    'notices/fetchNotices',
async ( {categoryName, query} , thunkAPI) => {
      try {
        // if(!query) {
        //   const response = await axios.get(`/notices/${categoryName}`);
        // return response.data;
        // }
        const response = await axios.get(`/notices/${categoryName}`, {params: {query: query? query : null}} );
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


