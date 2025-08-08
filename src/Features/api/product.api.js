import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (build) => ({
    GetAllProduct: build.query({
      query: () => "/products",
    }),
    GetBestSellingProduct: build.query({
      query: () => "/products/category/smartphones?limit=10&skip=5",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductQuery, useGetBestSellingProductQuery } =
  productApi;
