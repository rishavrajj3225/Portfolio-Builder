import React from "react";

const CardFlip = ({ onClick, children }) => {
  return (
    <div className="bg-pink-100 h-72 flex justify-center items-center text-black">
      <button
        onClick={onClick}
        className="mr-4 btn btn-info px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
      >
        {children}
      </button>
    </div>
  );
};

export default CardFlip;
