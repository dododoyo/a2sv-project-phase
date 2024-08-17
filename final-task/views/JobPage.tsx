import React from "react";
import { JobCardProps } from "@/types";
import Navbar from "./Navbar";
import OpportunityPageLeft from "@/components/OpportunityPageLeft";
import OpportunityPageRight from "@/components/OpportunityPageRight";

const JobPage: React.FC<JobCardProps> = ({ data }) => {
  return (
    <div className="">
      <Navbar/>
      <div className="container mx-auto my-12 p-8">
        <h1 className="text-3xl font-bold mb-6">
          Applicant Dashboard / <span className="font-normal">Description</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <OpportunityPageLeft data={data} />
          <OpportunityPageRight data={data} />
        </div>
      </div>
    </div>
  );
};

export default JobPage;
