import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../config";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseUrl,
  }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Transactions",
    "Users",
    "Geography",
    "Sales",
    "Users",
    "AllUsers",
    "Dashboard",
  ],
  endpoints: (build) => ({
    getUserById: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getUsers: build.query({
      query: () => "client/users",
      providesTags: ["Users"],
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Users"],
    }),
    getAllUsers: build.query({
      query: () => "management/allUsers",
      providesTags: ["AllUsers"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
  useGetUsersQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetAllUsersQuery,
  useGetDashboardQuery,
} = api;
