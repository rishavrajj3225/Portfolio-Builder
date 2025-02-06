import React from "react";

const Button = ({ name, onClick, className = "" }) => {
  return (
    <button
      type="submit"
      className={`px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
