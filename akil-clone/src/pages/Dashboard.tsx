import React from "react";
import { Opportunity } from "../types";
import { useGetAllOpportunitiesQuery } from "../app/services/opportunities";
import OpportunityCard from "../components/OpportunityCard";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
import ServerErrorPage from "./ServerErrorPage";
const Dashboard: React.FC = () => {
  const { data, isError, isLoading } = useGetAllOpportunitiesQuery();
  // console.log(isError,isLoading)
  if (isError) {
    return <ErrorPage />;
  }
  if (isLoading) {
    return <LoadingPage />;
  }
  const opportunities = data?.data;
  if (!opportunities) {
    return <ServerErrorPage />;
  }
  return (
    <div className="bg-green-100 min-h-screen p-8">
      <div className="container mx-auto">
        <div className="flex justify-between mb-4 mt-10 mx-6">
          <h1 className="text-5xl font-bold text-gray-800">Opportunities</h1>

          <div className="relative inline-block">
            <select className="appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline w-full">
              <option>Most Relevant</option>
              <option>Most Recent</option>
              <option>Least Recent</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1">
          {opportunities.map((data: Opportunity, index: number) => (
            <OpportunityCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
