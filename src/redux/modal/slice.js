const { createSlice } = require('@reduxjs/toolkit');

export const modalSlice = createSlice({
  name: 'modal',
  initialState: { modal: false },
  reducers: {
    showModal(state, action) {
      state.modal = action.payload;
    },
  },
});

export const { showModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
