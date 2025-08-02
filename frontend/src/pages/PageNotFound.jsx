import React from "react";
import { Link } from "react-router-dom";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 sm:p-6 font-inter">
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-10 text-center mt-25">
        <div className="flex justify-center">
          <ExclamationTriangleIcon className="h-16 w-16 text-red-500" />
        </div>

        <p className="mt-4 text-sm font-semibold text-red-600 uppercase tracking-widest">
          404 - Page Not Found
        </p>

        <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-800">
          Uh-oh! Something's missing.
        </h1>

        <p className="mt-4 text-base text-gray-600">
          Sorry, we couldn't find the page you were looking for. It might have
          been removed, renamed, or didn't exist.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/"
            className="inline-block rounded-md bg-indigo-600 px-5 py-2 text-white font-medium text-sm hover:bg-indigo-700 transition"
          >
            Go to Search Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
