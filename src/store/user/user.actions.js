import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserById = (userId) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ id: '1', name: 'Daniil' }), 1000),
  );
};

// ! createAsyncThunk then gives a keys like (fullfilled, pending...) that we can use to
// ! get in a different cycle of function execution
export const getUserById = createAsyncThunk('', async (userId, thunkApi) => {
  try {
    const response = await fetchUserById(userId);
    return response;
  } catch (error) {
    thunkApi.rejectWithValue(error);
  }
});
