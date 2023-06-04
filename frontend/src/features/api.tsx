import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../config';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseUrl,
  }),
  reducerPath: 'adminApi',
  tagTypes: ['User', 'Products'],
  endpoints: (build) => ({
    getUserById: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ['User'],
    }),
    getProducts: build.query({
      query: () => 'client/products',
      providesTags: ['Products'],
    }),
  }),
});

export const { useGetUserByIdQuery, useGetProductsQuery } = api;
