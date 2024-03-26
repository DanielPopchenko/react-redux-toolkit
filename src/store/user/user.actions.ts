import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../../types/user.types';

export const fetchUserById = (userId: number): Promise<IUser> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1, name: 'Daniil' }), 1000),
  );
};

// ! createAsyncThunk then gives a keys like (fullfilled, pending...) that we can use to
// ! get in a different cycle of function execution
// ? we get IUser, but pass a number (id)
export const getUserById = createAsyncThunk<IUser, number>(
  '',
  async (userId, thunkApi) => {
    try {
      const response = await fetchUserById(userId);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
