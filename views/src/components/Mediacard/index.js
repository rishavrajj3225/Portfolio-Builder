import React, { useState } from "react";

export default function MediaControlCard() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col justify-between p-4 w-full">
        <div>
          <h5 className="text-xl font-semibold">Live From Space</h5>
          <p className="text-sm text-gray-600">Mac Miller</p>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <button
            className="text-gray-500 hover:text-gray-700"
            aria-label="previous"
          >
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <button
            className="text-blue-500 hover:text-blue-700"
            aria-label="play/pause"
            onClick={handlePlayPause}
          >
            <svg
              className={`w-10 h-10 transform ${isPlaying ? "rotate-180" : ""}`}
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
          <button
            className="text-gray-500 hover:text-gray-700"
            aria-label="next"
          >
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
                d="M5 3l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="w-40 h-40 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/static/images/cards/live-from-space.jpg")',
        }}
      />
    </div>
  );
}
