import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-lg text-gray-600 mt-2">
        Oops! The page you are looking for doesn’t exist.
      </p>
      <a href="/" className="mt-4 text-blue-600 underline">
        Go back to Home
      </a>
    </div>
  );
};

export default NotFound;
