import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://project-yourfavorite-back.onrender.com';

export const updateUser = createAsyncThunk(
    'users/updateUser',
    async (values , thunkAPI) => {
      try {
        console.log(values)
        const response = await axios.put(`/cardPets`, values);
       
        return ("data", response.data);
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export const updateUserPhoto = createAsyncThunk(
    'users/updateUser',
    async ( values , thunkAPI) => {
      console.log(values)
      try {
        const formData = new FormData();
      formData.append('file', values);

        const response = await axios.put(`/cardPets`, formData);
        return ("data", response.data);
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  // // 👇 Uploading the file using the fetch API to the server
        // fetch('https://httpbin.org/post', {
        //   method: 'POST',
        //   body: file,
        //   // 👇 Set headers manually for single file upload
        //   headers: {
        //     'content-type': file.type,
        //     'content-length': `${file.size}`, // 👈 Headers need to be a string
        //   },
        // })
        //   .then((res) => res.json())
        //   .then((data) => console.log(data))
        //   .catch((err) => console.error(err));

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
    "pets/deletePet",
    async (id, thunkAPI) => {
      console.log(id)
        try {
          const response = await axios.delete(`/pet/${id}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
// /pet or pets