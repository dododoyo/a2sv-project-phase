import React from "react";
import { OpportunityCardProps } from "../types";

const OpportunityCard: React.FC<OpportunityCardProps> = ({ data }) => {
  return (
    <div className="bg-white border border-gray-400 m-4 rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-200 ease-in-out">
      <div className="flex items-center mb-4">
        <img
          src={
            data.logoUrl !== ""
              ? data.logoUrl
              : "https://previews.123rf.com/images/get4net/get4net1802/get4net180200198/94675971-corporate-businessman-avatar.jpg"
          }
          alt="Company Avatar"
          width={68}
          height={68}
          className=" mr-4"
        />
        <div>
          <h2 className="text-lg font-bold text-gray-900">{data.title}</h2>
          <p className="text-sm text-gray-700">
            {data.orgName} •{" "}
            {data.location.map((eachLocation) => eachLocation + "    ")}
          </p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{data.description}</p>
      <div className="flex space-x-2">
        <span
          key={data.opType}
          className={`inline-block rounded-md px-3 py-1 text-sm font-semibold mr-2 ${
            data.opType === "inPerson"
              ? "text-blue-700  bg-blue-100"
              : "text-orange-600  bg-orange-200"
          }`}
        >
          {data.opType === "inPerson" ? "In Person" : "Remote"}
        </span>

        {data.categories.map((tag: string, index: number) => (
          <span
            key={index}
            className={`inline-block rounded-full border bg-white px-3 py-1 text-sm font-semibold mr-2 ${
              index === 0
                ? "text-yellow-600  border-yellow-600"
                : "text-violet-600  border-violet-600"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default OpportunityCard;
