import React, { useState } from "react";

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white">
      <div className="flex items-center p-4">
        <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center">
          R
        </div>
        <div className="ml-4 flex-1">
          <h2 className="text-xl font-semibold">Shrimp and Chorizo Paella</h2>
          <p className="text-sm text-gray-500">September 14, 2016</p>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
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
              d="M6 9l6 6 6-6"
            ></path>
          </svg>
        </button>
      </div>
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        src="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <div className="p-4">
        <p className="text-sm text-gray-600">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </p>
      </div>
      <div className="flex items-center justify-between p-4">
        <button className="text-gray-500 hover:text-red-500">
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
              d="M20 12H4"
            ></path>
          </svg>
        </button>
        <button className="text-gray-500 hover:text-blue-500">
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
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </button>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={handleExpandClick}
        >
          <svg
            className={`w-6 h-6 transform ${expanded ? "rotate-180" : ""}`}
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
            ></path>
          </svg>
        </button>
      </div>
      {expanded && (
        <div className="p-4">
          <h3 className="text-lg font-semibold">Method:</h3>
          <p className="text-sm text-gray-600 mt-2">
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp, and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt, and pepper, and cook, stirring often until thickened
            and fragrant, about 10 minutes. Add saffron broth and remaining 4
            1/2 cups chicken broth; bring to a boil.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </p>
        </div>
      )}
    </div>
  );
}
