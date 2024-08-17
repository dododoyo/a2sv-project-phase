import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

if (!SERVER_URL) throw Error("SERVER_URL is undefined");

export const bookmarkAPI = createApi({
  reducerPath: "bookmarks",
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  endpoints: (builder) => ({
    getAllBookmarks: builder.query({
      query: (accessToken: string) => ({
        url: `/bookmarks`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    addBookmark: builder.mutation({
      query: (query) => {
        const parsedQuery = JSON.parse(query);
        const { id, accessToken } = parsedQuery;
        const request = {
          url: `/bookmarks/${id}`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({}),
        };
        return request;
      },
    }),
    deleteBookmark: builder.mutation({
      query: (query) => {
        const parsedQuery = JSON.parse(query);
        const { id, accessToken } = parsedQuery;
        const request = {
          url: `/bookmarks/${id}`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        };
        return request;
      },
    }),
  }),
});

export const {
  useGetAllBookmarksQuery,
  useAddBookmarkMutation,
  useDeleteBookmarkMutation,
} = bookmarkAPI;
