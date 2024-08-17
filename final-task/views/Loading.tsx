const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg flex items-center space-x-4">
        <div className="relative w-12 h-12">
          <div className="w-full h-full border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
        </div>
        <span className="text-xl font-medium text-gray-800 animate-pulse">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default LoadingPage;
