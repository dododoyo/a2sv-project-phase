import React from "react";
import { Session } from "next-auth";

interface HomePageProps {
  session: Session;
}

const HomePage: React.FC<HomePageProps> = async ({ session }) => {
  return (
    <>
      <div className="font-sans text-center p-4 mt-8 bg-gray-50 min-h-screen">
        <h1 className="text-gray-800 mt-10 text-3xl font-semibold">
          Welcome to the Dashboard
        </h1>
        {session && (
          <div>
            <div className="profile-section m-10 p-6 text-start mx-20 bg-white rounded-lg shadow-lg">
              <div className="text-start mx-auto">
                <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
                <p className="text-lg">
                  <span className="font-bold">Name:</span> {session.user.name}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Email:</span> {session.user.email}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
