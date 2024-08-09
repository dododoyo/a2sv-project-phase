import React from "react";
import Image from "next/image";
import { JobCardProps } from "@/types";

const JobCard: React.FC<JobCardProps> = ({ data }) => {
  return (
    <div className="bg-white border border-gray-400 m-4 rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-200 ease-in-out">
      <div className="flex items-center mb-4">
        <Image
          src={data.image}
          alt="Company Avatar"
          width={68}
          height={68}
          className=" mr-4"
        />
        <div>
          <h2 className="text-lg font-bold text-gray-900">{data.title}</h2>
          <p className="text-sm text-gray-700">
            {data.company} • {data.about.location}
          </p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{data.description}</p>
      <div className="flex space-x-2">
        <span
          key={data.type}
          className={`inline-block rounded-md px-3 py-1 text-sm font-semibold mr-2 ${
            data.type === "In Person"
              ? "text-blue-700  bg-blue-100"
              : "text-orange-600  bg-orange-200"
          }`}
        >
          {data.type}
        </span>
        
        {data.about.categories.map((tag, index) => (
          <span
            key={tag}
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

export default JobCard;
