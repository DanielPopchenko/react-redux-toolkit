import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
    getRecipes: builder.query({
      // ! json-server sorting data by id
      query: () => '/?_sort=id&_order=desc',
      providesTags: () => [{ type: 'recipe' }],
    }),
  }),
});

export const { useGetRecipesQuery } = api;
