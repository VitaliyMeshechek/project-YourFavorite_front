import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader } from 'redux/auth/operations';

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
        // if(categoryName === 'favorite' || categoryName === 'own') {
        //   const { token } = thunkAPI.getState().auth;
        //   setAuthHeader(token);
        // }
        const response = await axios.get(`/notices/${categoryName}`, {params: {query: query? query : null}} );
        console.log(response.data);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const fetchFavorites = createAsyncThunk(
    'notices/fetchFavorites',
    async(query, thunkAPI) => {
      const { token } = thunkAPI.getState().auth;
      try {
        setAuthHeader(token);
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
      const { token } = thunkAPI.getState().auth;
      try {
        setAuthHeader(token);
        const response = await axios.post(`/notices/favorite/${id}` );
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  )

  export const deleteFromFavorite = createAsyncThunk(
    'notices/deleteFromFavorite',
    async (id, thunkAPI) => {
      const { token } = thunkAPI.getState().auth;
      try {
        setAuthHeader(token);
        const response = await axios.delete(`/notices/favorite/${id}` );
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  )


