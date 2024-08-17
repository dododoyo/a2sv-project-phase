"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";


import ErrorPage from "@/views/ErrorPage";
import LoadingPage from "@/views/Loading";
import ServerErrorPage from "@/views/ServerErrorPage";
import OpportunityCard from "@/components/OpportunityCard";
import SearchResultContainer from "./SearchResultContainer";

import { Opportunity } from "@/types";

import { useGetAllOpportunitiesQuery } from "@/app/services/opportunities";
import { useGetAllBookmarksQuery } from "@/app/services/bookmark";
import { updateAccessToken } from "@/app/features/auth/authSlice";
import { updateBookmarks } from "@/app/features/bookmark/bookmarkSlice";
import { updateOpportunity } from "@/app/features/opportunities/opportunitiesSlice";

import { AppDispatch, useAppSelector } from "@/app/store";

const OpportunitesContainer = () => {
  const { data: session } = useSession({
    required: false,
  });
  const searchQuery = useAppSelector(
    (state) => state.searchReducer.value.query
  );

  const {
    data: opportunitiesData,
    error: opportunitiesError,
    isLoading: opportunitiesLoading,
  } = useGetAllOpportunitiesQuery("");

  const {
    data: bookmarksData,
    error: bookmarksError,
    isLoading: bookmarksLoading,
  } = useGetAllBookmarksQuery(session?.user.accessToken);

  const dispatch = useDispatch<AppDispatch>();

  if (session) {
    dispatch(updateAccessToken(session?.user.accessToken));
  }

  if (opportunitiesError) {
    return <ErrorPage />;
  }
  if (opportunitiesLoading) {
    return <LoadingPage />;
  }
  const opportunities = opportunitiesData?.data;

  if (!opportunities) {
    return <ServerErrorPage />;
  }

  dispatch(updateOpportunity(opportunities));

  if (session && session.user && session.user.accessToken !== "") {

    if (bookmarksError) {
      return <ErrorPage />;
    }
    if (bookmarksLoading) {
      return <LoadingPage />;
    }
    const bookmarks = bookmarksData?.data;

    if (!bookmarks) {
      return <ServerErrorPage />;
    }

    dispatch(updateBookmarks(bookmarks));
  }

  if (!opportunities) {
    return (
      <h1 className="text-3xl m-5">
        {`No available Opportunities at the moment.`}
      </h1>
    );
  } else {
    if (searchQuery.length !== 0) {
      return <SearchResultContainer />;
    } else {
      return (
        <div className="grid grid-cols-1 gap-1 m-5">
          {opportunities.map((data: Opportunity, index: number) => (
            <OpportunityCard key={index} data={data} />
          ))}
        </div>
      );
    }
  }
};

export default OpportunitesContainer;
