import { IRecipeData } from '../../types/recipe.types';
import { api } from './api';

// ! Particular work with RECIPE API

export const recipeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // ! builder.mutation is used to add, delete, edit (for example)

    // ! We get null, but pass IRecipeData
    createRecipe: builder.mutation<null, IRecipeData>({
      query: (recipe) => ({
        body: recipe,
        url: '/',
        method: 'POST',
      }),
      invalidatesTags: () => [{ type: 'recipe' }],
    }),
  }),
});

export const { useCreateRecipeMutation } = recipeApi;
