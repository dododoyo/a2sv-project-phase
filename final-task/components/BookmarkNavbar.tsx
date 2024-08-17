import Link from "next/link";
import React from "react";
const BookmarkNavbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-900 text-white shadow-md fixed top-0 w-full z-20 opacity-95">
      <Link href="/" className="text-xl font-bold">
        Akil Clone
      </Link>

      <div className="">
        <Link
          href="/opportunities"
          className="text-lg hover:text-blue-300 mx-6"
        >
          Opportunities
        </Link>
        <Link
          href="/api/auth/signout?callbackUrl=/login"
          className="text-lg hover:text-blue-300 mx-6"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default BookmarkNavbar;
