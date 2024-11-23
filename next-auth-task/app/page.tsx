"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

const Page: React.FC = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });
  if (session) {
    const { role } = session.user;
    if (role === "unverified") {
      redirect("/verify");
    }
    if (role !== "user") {
      redirect("/login");
    }
  }
  return (
    <>
      <div className="font-sans text-center p-8 bg-gray-50 min-h-screen">
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md rounded-lg">
          <Link href="/" className="text-xl font-bold">
            Akil Clone
          </Link>
          <Link
            href="/api/auth/signout?callbackUrl=/login"
            className="text-lg hover:text-blue-300 mx-6"
          >
            Logout
          </Link>
        </nav>
        <h1 className="text-gray-800 m-10 text-3xl font-semibold">
          Welcome to the Dashboard
        </h1>
        {session && (
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
        )}
      </div>
    </>
  );
};

export default Page;
