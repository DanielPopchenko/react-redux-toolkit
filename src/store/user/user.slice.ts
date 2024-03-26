import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getUserById } from './user.actions';
import { IInitialUser, IUser } from '../../types/user.types';

const initialState: IInitialUser = {
  // ! ------ {} as IUser
  user: {} as IUser,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.isLoading = false;
        const user = action.payload;
        state.user = user;
      })
      // !  action: any - because it is an error and we do not know the type of an error
      .addCase(getUserById.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload.error;
        // ! ----- {} as IUser
        state.user = {} as IUser;
      });
  },
});
