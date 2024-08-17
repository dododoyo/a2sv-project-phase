import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";
import OpportunitiesContainer from "@/containers/OpportunitiesContainer";
import OpportunitiesNavbar from "@/components/OpportunitiesNavbar";
const Dashboard: React.FC = async () => {
  const session = await getServerSession(options);

  if (session) {
    const { role } = session.user;
    if (role === "unverified") {
      redirect("/verify");
    }
    if (role !== "user") {
      redirect("/login");
    }
  } else {
    redirect("/login");
  }
  

  return (
    <div className="">
      <OpportunitiesNavbar />
      <div className="min-h-screen p-8 my-6">
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
          <OpportunitiesContainer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
