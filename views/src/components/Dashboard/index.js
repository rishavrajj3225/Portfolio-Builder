import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-2xl font-bold text-center mb-6">
        Select the level of portfolio customization below
      </h1>

      <div className="flex flex-wrap gap-6 justify-center">
        <Card
          onClick={() => navigate("/userform")}
          className="w-60 h-40 bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center rounded-lg shadow-md cursor-pointer"
        >
          Template Design
        </Card>

        <Card
          onClick={() => navigate("/customtemplate")}
          className="w-60 h-40 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center rounded-lg shadow-md cursor-pointer"
        >
          Custom Design
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
