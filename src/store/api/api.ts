import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRecipe } from '../../types/recipe.types';

const BASE_URL = 'http://localhost:4200/recipes';

// ! General work with API

export const api = createApi({
  reducerPath: 'api',
  // ! for revalidating queries
  tagTypes: ['recipe'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    // ! builder.query is used to do GET, PUT ... requests
    // ? WHAT WE GET - IRecipe[] is smth that we get (a lot of IRecipe)
    // ? null here is a props from query, we do not have them, so we pass null
    getRecipes: builder.query<IRecipe, null>({
      // ! json-server sorting data by id
      query: () => '/?_sort=id&_order=desc',
      providesTags: () => [{ type: 'recipe' }],
    }),
  }),
});

export const { useGetRecipesQuery } = api;
