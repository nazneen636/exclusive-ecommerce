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
    GetProductByCategory: build.query({
      query: () => "/products/category-list",
    }),
    GetSingleProduct: build.query({
      query: (id) => `/products/${id}`,
    }),
    GetSingleProductCategory: build.query({
      query: (category) => `/products/category/${category}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllProductQuery,
  useGetBestSellingProductQuery,
  useGetProductByCategoryQuery,
  useGetSingleProductQuery,
  useGetSingleProductCategoryQuery,
} = productApi;
