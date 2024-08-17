import React, { useState } from "react";
import { BookmarkCardProps } from "../types";
import Image from "next/image";
import Link from "next/link";

const OpportunityCardBookmark: React.FC<BookmarkCardProps> = ({ data }) => {
  return (
    <div className="relative bg-white border border-gray-400 m-4 rounded-lg shadow-md p-6 transform transition duration-200 ease-in-out">
      <div className="absolute top-2 right-2 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v18l7-5 7 5V3H5z"
          />
        </svg>
      </div>

      <Link key={data.eventID} href={`/opportunity/${data.eventID}`}>
        <div className="flex items-center mb-4">
          <Image
            src={
              data.logoUrl !== ""
                ? data.logoUrl
                : "https://previews.123rf.com/images/get4net/get4net1802/get4net180200198/94675971-corporate-businessman-avatar.jpg"
            }
            alt="Company Avatar"
            width={68}
            height={68}
            className="mr-4"
          />
          <div>
            <h2 className="text-lg font-bold text-gray-900">{data.title}</h2>
            <p className="text-sm text-gray-700">
              {data.orgName} • {data.location}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <span
            key={data.opType}
            className={`inline-block rounded-md px-3 py-1 text-sm font-semibold mr-2 ${
              data.opType === "inPerson"
                ? "text-blue-700 bg-blue-100"
                : "text-orange-600 bg-orange-200"
            }`}
          >
            {data.opType === "inPerson" ? "In Person" : "Remote"}
          </span>

          {/* <span
            className={`inline-block rounded-full border bg-white px-3 py-1 text-sm font-semibold mr-2 
             text-violet-600 border-violet-600
              `}
          >
            {data.categories}
          </span> */}
        </div>
      </Link>
    </div>
  );
};

export default OpportunityCardBookmark;
