// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const addNotice = createAsyncThunk(
//     'notices/addNotice',
//     async ({ category, newFormData }, thunkAPI) => {
//       console.log({ category, newFormData });
//       try {
//         await axios.post(`/notices/${category}`, newFormData);
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );
