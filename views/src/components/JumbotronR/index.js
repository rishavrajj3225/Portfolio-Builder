import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

function JumbotronR() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="bg-indigo-900 text-white text-center py-16 px-6 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-4">
        Welcome to Punjab Grill!!
      </h1>
      <p className="text-lg max-w-3xl mx-auto mb-6">
        Punjab Grill welcomes its guests to experience the region’s legendary
        and unrivaled hospitality, offered generously to every visitor, and
        borne out of a love of bringing people together to enjoy time-honored
        traditions of refined diversion.
        <br />
        Recipes handed down from generations of khansaamas, the Punjabi royal
        chefs, and steeped in the flavors of history, expertly coordinated
        cocktails and an abundance of spectacular wines can be savored amidst
        our sumptuous decor, in an edifice which has been recreated by hand in
        the high sensual style of the fin de siècle Maharajas, who were
        dedicated patrons of the arts and fine craftsmanship. And who treated
        dining, and most everything else, as an art form.
      </p>
      <Button
        onClick={handleClick}
        className="mt-6 px-6 py-3 bg-white text-indigo-800 font-bold rounded-lg shadow-md hover:bg-gray-200 transition"
        name="Get Started"
      />
    </div>
  );
}

export default JumbotronR;
