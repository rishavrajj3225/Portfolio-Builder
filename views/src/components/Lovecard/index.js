import React, { useState } from "react";

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center p-4">
        <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center">
          R
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-bold">Shrimp and Chorizo Paella</h2>
          <p className="text-gray-500">September 14, 2016</p>
        </div>
      </div>
      <div
        className="w-full h-56 bg-cover bg-center"
        style={{ backgroundImage: "url('/static/images/cards/paella.jpg')" }}
      ></div>
      <div className="p-4">
        <p className="text-gray-700">Your Product Summary here</p>
      </div>
      <div className="flex justify-between p-4">
        <button className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600">
          <i className="fas fa-heart"></i>
        </button>
        <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          <i className="fas fa-share"></i>
        </button>
        <button
          className={`p-2 bg-gray-200 text-gray-700 rounded-md ${
            expanded ? "rotate-180" : ""
          } transition-all`}
          onClick={handleExpandClick}
        >
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
      {expanded && (
        <div className="p-4">
          <h3 className="font-semibold">Method:</h3>
          <p>Enter your text here</p>
        </div>
      )}
    </div>
  );
}
