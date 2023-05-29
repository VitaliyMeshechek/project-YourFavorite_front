import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { deletePet, fetchPets,addPet } from "./operations";


export const petsSlice = createSlice({
    name: 'pets',
    initialState: {
      items: [],
      isLoading: false,
      error: null
    },
    extraReducers: (builder) => {
      builder
        
        .addCase(fetchPets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        })
        .addCase(addPet.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload)
        })
        .addCase(deletePet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
          state.items = state.items.filter(pet => pet.id !== action.payload.id) 
        })
      .addMatcher(isAnyOf(fetchPets.pending,addPet.pending,deletePet.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchPets.rejected,addPet.rejected,deletePet.rejected), (state, action) =>{
        state.isLoading = false;
        state.error = action.payload;
      })
    
    }
  
  })
  
  
  
  
  export const petReducer = petsSlice.reducer