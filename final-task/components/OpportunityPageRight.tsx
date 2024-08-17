import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { IoBatteryDead } from "react-icons/io5";
import { LuCalendarCheck } from "react-icons/lu";
import { FaRegCalendarPlus } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { JobCardProps } from "@/types";

const OpportunityPageRight: React.FC<JobCardProps> = ({ data }) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">About</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full">
              <FiPlusCircle size={32} color="#1080FF" />
            </div>
            <div className="ml-6">
              <p className="text-gray-700">Posted On</p>
              <p className="font-semibold">{data.datePosted}</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full">
              <IoBatteryDead size={32} color="#1080FF" />
            </div>
            <div className="ml-6">
              <p className="text-gray-700">Deadline</p>
              <p className="font-semibold">{data.deadline}</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full">
              <MdOutlineLocationOn size={32} color="#1080FF" />
            </div>
            <div className="ml-6">
              <p className="text-gray-700">Location</p>
              <p className="font-semibold ">{data.location[0]}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full">
              <FaRegCalendarPlus size={32} color="#1080FF" />
            </div>
            <div className="ml-6">
              <p className="text-gray-700">Start Date</p>
              <p className="font-semibold">{data.startDate}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full">
              <LuCalendarCheck size={32} color="#1080FF" />
            </div>
            <div className="ml-6">
              <p className="text-gray-700">End Date</p>
              <p className="font-semibold">{data.endDate}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <div className="flex space-x-2 mt-2">
              {data.categories.map((category, index) => (
                <span
                  key={category}
                  className={`inline-block rounded-md px-3 py-1 border bg-white text-sm font-semibold ${
                    index === 0
                      ? "text-yellow-700  border-yellow-700"
                      : "text-green-600  border-green-600"
                  }`}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Required Skills</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.requiredSkills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block  text-violet-700 bg-violet-50 rounded-md px-3 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpportunityPageRight;
