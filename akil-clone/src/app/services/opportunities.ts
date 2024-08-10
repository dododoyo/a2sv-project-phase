// import { config } from "dotenv";
// config();
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const opportunitiesAPI = createApi({
  //Specify the name for the API
  reducerPath: "opportunities",

  // Specify the base query
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),

  endpoints: (builder) => ({
    // Get All Opportunities (Reading)
    getAllOpportunities: builder.query({
      query: () => `/opportunities/search`,
    }),
    // Get Specific Opportunity (Reading)
    getOpportunityById: builder.query({
      query: (id) => `/opportunities/${id}`,
    }),
  }),
});

export const { useGetAllOpportunitiesQuery, useGetOpportunityByIdQuery } =
  opportunitiesAPI;
