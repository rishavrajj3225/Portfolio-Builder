import React from "react";
import { Link } from "react-router-dom";
import Nav from "../UserNav";

export default function Success() {
  return (
    <>
      <Nav />
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white max-w-lg w-full rounded-lg shadow-lg p-6 text-center">
          {/* Close Button */}
          <div className="flex justify-end">
            <Link
              to="/home"
              className="text-red-500 hover:text-red-700 text-xl"
            >
              &times;
            </Link>
          </div>

          {/* Content */}
          <h2 className="text-2xl font-semibold text-gray-800">
            Thank You For Your Submission
          </h2>
          <p className="text-gray-600 mt-2">
            You will receive an email with further instructions.
          </p>

          {/* Button to Redirect Home */}
          <div className="mt-6">
            <Link
              to="/home"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
