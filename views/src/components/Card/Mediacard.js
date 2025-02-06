import React from "react";

export default function MediaControlCard() {
  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col justify-between p-4 w-full">
        <div>
          <h5 className="text-xl font-semibold">Live From Space</h5>
          <p className="text-sm text-gray-600">Mac Miller</p>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <button className="text-gray-600 hover:text-gray-800">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7 7-7m4 14l7-7-7-7"
              />
            </svg>
          </button>
          <button className="text-blue-600 hover:text-blue-800">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3l14 9-14 9V3z"
              />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7-7 7m-4-14l-7 7 7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="w-40 h-40 flex-none bg-cover bg-center"
        style={{
          backgroundImage: 'url("/static/images/cards/live-from-space.jpg")',
        }}
        title="Live from space album cover"
      ></div>
    </div>
  );
}
