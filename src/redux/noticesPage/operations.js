import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader } from 'redux/auth/operations';

axios.defaults.baseURL = 'https://project-yourfavorite-back.onrender.com/api';

export const fetchAll = createAsyncThunk(
  'noticesPage/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/notices`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchNotices = createAsyncThunk(
  'noticesPage/fetchNotices',
  async ({ categoryName = 'sell', query }, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/${categoryName}`, {
        params: { query: query ? query : null },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavorites = createAsyncThunk(
  'notices/fetchFavorites',
  async (query, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    try {
      setAuthHeader(token);
      const response = await axios.get(`/notices/favorite`, {
        params: { query: query ? query : null },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  'notices/addToFavorite',
  async (id, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    try {
      setAuthHeader(token);
      const response = await axios.post(`/notices/favorite/${id}`);
      const result = response.data.favorite[0];
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFromFavorite = createAsyncThunk(
  'notices/deleteFromFavorite',
  async (id, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    try {
      setAuthHeader(token);
      const response = await axios.delete(`/notices/favorite/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUsersNotices = createAsyncThunk(
  'notices/fetchUsersNotices',
  async (query, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    try {
      setAuthHeader(token);
      const response = await axios.get(`/notices/own`, {
        params: { query: query ? query : null },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUserNotice = createAsyncThunk(
  'notices/deleteUserNotice',
  async (id, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    try {
      setAuthHeader(token);
      const response = await axios.delete(`/notices/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async ({ category, newFormData }, thunkAPI) => {
    try {
      await axios.post(`/notices/${category}`, newFormData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserById = createAsyncThunk(
  'notices/fetchUserById',
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/users/${id}`);

      return res.data.users;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
