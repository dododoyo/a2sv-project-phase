import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const SERVER_URL = "https://akil-backend.onrender.com";

export const opportunitiesAPI = createApi({
  reducerPath: "opportunities",
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),

  endpoints: (builder) => ({
    getAllOpportunities: builder.query({
      query: () => `/opportunities/search`,
    }),

    getOpportunityById: builder.query({
      query: (id) => `/opportunities/${id}`,
    }),
  }),
});

export const { useGetAllOpportunitiesQuery, useGetOpportunityByIdQuery } =
  opportunitiesAPI;
