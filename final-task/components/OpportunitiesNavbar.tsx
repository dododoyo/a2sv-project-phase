import Link from "next/link";
import React from "react";
import SearchInput from "./SearchInput";

const OpportunitiesNavbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 mb-4 bg-blue-900 text-white shadow-md fixed top-0 w-full z-20 opacity-95">
      <Link href="/" className="text-xl font-bold">
        Akil Clone
      </Link>

      <div className="flex items-center">
        <SearchInput />
        <Link href="/bookmarks" className="text-lg hover:text-blue-300 mx-6">
          Bookmarks
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

export default OpportunitiesNavbar;
