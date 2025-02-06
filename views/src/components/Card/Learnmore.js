import React from "react";

export default function ImgMediaCard() {
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white">
      <img
        className="rounded-t-lg w-full h-40 object-cover"
        src="/static/images/cards/contemplative-reptile.jpg"
        alt="Contemplative Reptile"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Lizard</h2>
        <p className="text-sm text-gray-600 mt-2">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.
        </p>
      </div>
      <div className="flex justify-between p-4">
        <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-sm">
          Share
        </button>
        <button className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
}
