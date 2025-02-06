import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

function Jumbotron({ firstName }) {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-600 text-white text-center py-16 px-6 rounded-lg shadow-lg">
      {firstName && (
        <h1 className="text-3xl font-bold">Welcome, {firstName}!</h1>
      )}
      <h1 className="text-4xl font-extrabold mt-2">
        Create and Customize a Portfolio
      </h1>
      <p className="text-lg mt-4 max-w-2xl mx-auto">
        Beautiful designs, powerful features, and the freedom to build anything
        you want. Portfolio Builder is both free and priceless at the same time.
      </p>
      <Button
        onClick={() => navigate("/login")}
        className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-200 transition"
        name="Get Started"
      />
    </div>
  );
}

export default Jumbotron;
