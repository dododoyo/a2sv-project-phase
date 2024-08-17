"use client";
import React from "react";
import { useGetOpportunityByIdQuery } from "@/app/services/opportunities";

import JobPage from "@/views/JobPage";
import LoadingPage from "@/views/Loading";
import ErrorPage from "@/views/ErrorPage";
import Navbar from "@/views/Navbar";

interface Params {
  opportunityId: string;
}
export default function JobDetailPage({ params }: { params: Params }) {
  const { data, isError, isLoading } = useGetOpportunityByIdQuery(
    params?.opportunityId
  );

  if (isError) {
    return <ErrorPage />;
  }
  if (isLoading) {
    return <LoadingPage />;
  }

  if (!data) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-8xl">Job not found</h1>
        </div>
      </>
    );
  } else {
    return <JobPage data={data.data} />;
  }
}
