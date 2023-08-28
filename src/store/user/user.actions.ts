import { createAsyncThunk } from '@reduxjs/toolkit';
import { IsUnknownOrNonInferrable } from '@reduxjs/toolkit/dist/tsHelpers';
import { IUser } from './user.types';

// ! Возвращается Промис Promise<IUser>
const fetchUserById = (userId: number): Promise<IUser> =>
  new Promise((resolve) => setTimeout(() => resolve({ name: 'Daniel', id: 1 }), 1000));

export const getUserById = createAsyncThunk<IUser, number>('users/by-id', async (userId, thunkApi) => {
  try {
    const response = await fetchUserById(userId);
    // console.log('response:', response);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
