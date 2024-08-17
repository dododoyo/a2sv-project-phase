import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import BookmarksContainer from "@/containers/BookmarksContainer";
import BookmarkNavbar from "@/components/BookmarkNavbar";
import { options } from "../api/auth/[...nextauth]/options";
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
    return (
      <>
        <BookmarkNavbar />
        <div className="min-h-screen p-8">
          <div className="container mx-auto">
            <div className="flex justify-between mb-4 mt-10 mx-6">
              <h1 className="text-5xl font-bold text-gray-800">Bookmarks</h1>
            </div>
            <BookmarksContainer />
          </div>
        </div>
      </>
    );
  } else {
    redirect("/login");
  }
};

export default Dashboard;
