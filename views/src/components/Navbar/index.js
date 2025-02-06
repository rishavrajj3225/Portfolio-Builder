import React, { useState } from "react";

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300">
      {/* Card Header */}
      <div className="flex items-center p-4">
        <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center text-lg font-semibold">
          R
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-bold">Shrimp and Chorizo Paella</h2>
          <p className="text-gray-500 text-sm">September 14, 2016</p>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="w-full h-56 bg-cover bg-center"
        style={{ backgroundImage: "url('/static/images/cards/paella.jpg')" }}
      ></div>

      {/* Card Content */}
      <div className="p-4">
        <p className="text-gray-700">Your Product Summary here</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center p-4">
        <button className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
          <i className="fas fa-heart text-lg"></i>
        </button>
        <button className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          <i className="fas fa-share text-lg"></i>
        </button>
        <button
          className={`p-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-transform ${
            expanded ? "rotate-180" : ""
          }`}
          onClick={handleExpandClick}
        >
          <i className="fas fa-chevron-down text-lg"></i>
        </button>
      </div>

      {/* Expanded Content */}
      <div
        className={`p-4 overflow-hidden transition-all duration-300 ${
          expanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <h3 className="font-semibold">Method:</h3>
        <p className="text-gray-600">Enter your text here</p>
      </div>
    </div>
  );
}
