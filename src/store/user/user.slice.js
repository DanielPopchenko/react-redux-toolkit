import { createSlice } from '@reduxjs/toolkit';
import { getUserById } from './user.actions';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        const user = action.payload;
        state.user = user;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.user = {};
      });
  },
});
