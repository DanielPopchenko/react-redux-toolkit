import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRecipe } from '../../types/recipe.types';

const URL = 'http://localhost:4200/recipes';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Recipe'],
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getRecipes: builder.query<IRecipe[], string>({
      // ! В базовом запросе мы указали, что нащи данные нужно сортировать по айди, тоесть 1 тот кто последний создался
      query: (searchTerm) => `/?_sort=id&_order=desc&q=${searchTerm}`,
      // ! Привязали тег который будет привязан к текущему запросу
      providesTags: (result, error, serchTerm) => [
        {
          type: 'Recipe',
          id: serchTerm,
        },
      ],
    }),
  }),
});

export const { useGetRecipesQuery } = api;
