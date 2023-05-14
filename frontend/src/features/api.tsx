import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../config';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: config.baseUrl }),
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
