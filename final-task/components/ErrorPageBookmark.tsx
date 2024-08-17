const ErrorPageBookmark = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-12 rounded-lg shadow-2xl text-center transform -rotate-6 hover:rotate-6 transition duration-500 ease-in-out">
        <div className="mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-red-500 animate-bounce mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {`Sorry! You can't access this feature.`}
        </h1>
        <p className="text-2xl text-gray-600 mb-8">Login with email instead.</p>
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Try Again
        </a>
      </div>
    </div>
  );
};

export default ErrorPageBookmark;
