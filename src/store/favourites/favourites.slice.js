import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

// ! here we are designing our reducers
const favoutiesSlice = createSlice({
  name: 'favorites',
  initialState,

  reducers: {
    toggleFavourites: (state, action) => {
      // ! state is a global state
      // ! action.payload is what we pass to the function
      const recipe = action.payload;

      // ? here we are checking if we have the recipe in a our state
      const doesExist = state.some((r) => r.id === recipe.id);

      // ! found our index
      const index = state.findIndex((item) => item.id === recipe.id);

      // findIndex returns -1 if it didn`t find an index
      // ! so here we are saying if you do find it, cut it out from our state
      if (index !== -1) {
        state.splice(index, 1);
        // ! or just push it in the state
      } else state.push(recipe);
    },
  },
});

export const { actions, reducer } = favoutiesSlice;
