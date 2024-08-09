import React from "react";
import { JobCardProps } from "@/types";
import JobPageRight from "../components/JobPageRight";
import JobPageLeft from "../components/JobPageLeft";

const JobPage: React.FC<JobCardProps> = ({ data }) => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Applicant Dashboard / <span className="font-normal">Description</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <JobPageLeft data={data} />
        <JobPageRight data={data} />
      </div>
    </div>
  );
};

export default JobPage;
