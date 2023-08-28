import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:4200/recipes';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Recipe'],
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      // ! В базовом запросе мы указали, что нащи данные нужно сортировать по айди, тоесть 1 тот кто последний создался
      query: () => '/?_sort=id&_order=desc',
      // ! Привязали тег который будет привязан к текущему запросу
      providesTags: () => [
        {
          type: 'Recipe',
        },
      ],
    }),
  }),
});

export const { useGetRecipesQuery } = api;
