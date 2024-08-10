import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsAPI = createApi({
  //Specify the name for the API
  reducerPath: "products",
  // Specify the base query
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  // Specify end points for this baseUrl
  endpoints: (builder) => ({
    // Get All Products (Reading)
    getAllProducts: builder.query({
      query: () => `/products`,
    }),
    // Get Specific Product (Reading)
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
    // Add a new Product
    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: `products/add`,
        method: `POST`,
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),
  }),
});

// Export APIs for the productsAPI
export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddNewProductMutation,
} = productsAPI;
