import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRecipe } from '../../types/recipe.types';

const initialState: IRecipe[] = [];

export const favoritesSlice = createSlice({
  name: 'favotites',
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: recipe }: PayloadAction<IRecipe>) => {
      // const recipe = action.payload;

      const doesExist = state.some((r) => r.id === recipe.id);

      if (doesExist) {
        const index = state.findIndex((item) => item.id === recipe.id);

        if (index !== -1) {
          state.splice(index, 1);
        }
      } else state.push(recipe);
    },
  },
});

export const { actions, reducer } = favoritesSlice;
