import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BASE_URL }),
  reducerPath: 'adminApi',
  tagTypes: ['User'],
  endpoints: (build) => ({
    getUserById: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ['User'],
    }),
  }),
});

export const { useGetUserByIdQuery } = api;
