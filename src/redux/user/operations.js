import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const updateUser = createAsyncThunk(
    'users/updateUser',
    async ({ id, values }, thunkAPI) => {
      try {
        const response = await axios.patch(`/users/${id}`, values);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  


export const editData = createAsyncThunk(
    "pets/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/pets");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );


export const fetchPets = createAsyncThunk(
    "pets/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/pets");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

export const addPet = createAsyncThunk(
    "Pets/addPet",
    async (Pet, thunkAPI) => {
        try {
          const response = await axios.post("/pets", Pet);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const deletePet = createAsyncThunk(
    "Pets/deletePet",
    async (id, thunkAPI) => {
        try {
          const response = await axios.delete(`/pets/${id}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
// /pet or pets