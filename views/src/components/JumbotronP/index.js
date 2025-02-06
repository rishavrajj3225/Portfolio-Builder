import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

function JumbotronP() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="bg-blue-800 text-white text-center py-16 px-6 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-4">Meet AA Productions!!</h1>
      <p className="text-lg mb-6 max-w-2xl mx-auto">
        We are a husband and wife team, alongside a talented photo and video
        crew. We've been doing what we love—capturing the best moments
        celebrated by families.
        <br />
        So much more goes into your wedding than taking amazing images. From
        helping with a plan to managing the many emotions on your wedding day,
        you get a team that is prepared for whatever comes our way.
      </p>
      <Button
        onClick={handleClick}
        className="mt-6 px-6 py-3 bg-white text-blue-800 font-bold rounded-lg shadow-md hover:bg-gray-200 transition"
        name="Get Started"
      />
    </div>
  );
}

export default JumbotronP;
