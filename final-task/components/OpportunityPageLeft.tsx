import React from "react";
import { JobCardProps } from "@/types";
import { GoVerified } from "react-icons/go";

const OpportunityPageLeft: React.FC<JobCardProps> = ({ data }) => {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Description</h2>
        <p className="text-gray-700">{data.description}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Responsibilities</h2>
        <div className="flex items-center">
          <GoVerified className="text-green-500 mr-2" />
          <div className="text-gray-700">{data.responsibilities}</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Ideal Candidate we want</h2>
        <div className="flex items-center text-gray-700">
          <div className="">{data.idealCandidate}</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">When & Where</h2>
        <p className="text-gray-700 flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          {data.whenAndWhere}
        </p>
      </div>
    </div>
  );
};

export default OpportunityPageLeft;
