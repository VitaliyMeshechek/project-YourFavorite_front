import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://project-yourfavorite-back.onrender.com/api';

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (values, thunkAPI) => {
    try {

      const response = await axios.patch('/cardPets', values);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const updateUserPhoto = createAsyncThunk(
  'users/updateUserPhoto',
  async (values, thunkAPI) => {

    try {
      const formData = new FormData();
      formData.append('file', values);

      const response = await axios.patch('/cardPets', formData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchPets = createAsyncThunk(
  'pet/fetchAll',
  async (_, thunkAPI) => {
    try {
     
      const response = await axios.get('/cardPets');
      
      return response.data.user.pets;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addPet = createAsyncThunk('pets/addPet', async (pet, thunkAPI) => {
  try {
    const response = await axios.post('/cardPets/pet', pet);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deletePet = createAsyncThunk(
  'pet/deletePet',
  async (id, thunkAPI) => {
   
    try {
      const response = await axios.delete(`/cardPets/pet/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

