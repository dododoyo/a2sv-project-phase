"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";

import ErrorPage from "@/views/ErrorPage";
import LoadingPage from "@/views/Loading";
import ServerErrorPage from "@/views/ServerErrorPage";

import { Bookmark } from "@/types";

import { useGetAllBookmarksQuery } from "@/app/services/bookmark";
import { updateAccessToken } from "@/app/features/auth/authSlice";
import { AppDispatch } from "@/app/store";

import OpportunityCardBookmark from "@/components/OpportunityCardBookmark";
import ErrorPageBookmark from "@/components/ErrorPageBookmark";

const BookmarksContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data: session,status } = useSession({
    required: false,
  });

  if (session) {
    dispatch(updateAccessToken(session?.user.accessToken));
  }
  const { data, isError, isLoading } = useGetAllBookmarksQuery(
    session?.user.accessToken
  );

  if (session && session.user && session.user.accessToken !== "") {
    if (isError) {
      return <ErrorPage />;
    }
    if (isLoading) {
      return <LoadingPage />;
    }
    const bookmarks = data?.data;

    if (!bookmarks) {
      return <ServerErrorPage />;
    }
    if (bookmarks && bookmarks.length === 0) {
      return (
        <h1 className="m-10 text-3xl">
          {`You Don't have any Bookmarked Opportunities`}
        </h1>
      );
    } else {
      return (
        <div className="grid grid-cols-1 gap-1">
          {bookmarks.map((data: Bookmark, index: number) => (
            <OpportunityCardBookmark key={index} data={data} />
          ))}
        </div>
      );
    }
  } else {
    if (status === "loading"){
        return <LoadingPage />;
    }
    return <ErrorPageBookmark />;
  }
};

export default BookmarksContainer;
