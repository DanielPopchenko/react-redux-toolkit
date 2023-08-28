import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUserById = (userId) => new Promise((resolve) => setTimeout(() => resolve({ name: 'Daniel', id: 1 }), 1000));

export const getUserById = createAsyncThunk('users/by-id', async (userId, thunkApi) => {
  try {
    const response = await fetchUserById(userId);

    console.log('response:', response);
    return response;
  } catch (error) {
    thunkApi.rejectWithValue(error);
  }
});
