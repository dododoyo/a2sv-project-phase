import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Unprotected Page
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        This is an unprotected page. Anyone can access this content without
        authentication.
      </p>
      <a
        href="https://telegra.ph/Unprotected-Page-08-16"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Learn More
        </button>
      </a>
    </div>
  );
};

export default Page;
