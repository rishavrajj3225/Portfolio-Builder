import React, { useState } from "react";

export default function TransferList() {
  const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState([
    "Paneer Tikka Masala",
    "Tandoori Naan",
    "Chicken Tandoori",
    "Butter Naan",
  ]);
  const [right, setRight] = useState(["Kulfi", "Shakes", "Coke", "Pepsi"]);

  const handleToggle = (value) => {
    setChecked((prevChecked) =>
      prevChecked.includes(value)
        ? prevChecked.filter((item) => item !== value)
        : [...prevChecked, value]
    );
  };

  const moveCheckedItems = (source, setSource, target, setTarget) => {
    const selectedItems = checked.filter((item) => source.includes(item));
    setTarget((prev) => [...prev, ...selectedItems]);
    setSource((prev) => prev.filter((item) => !selectedItems.includes(item)));
    setChecked((prev) => prev.filter((item) => !selectedItems.includes(item)));
  };

  const renderList = (title, items, side) => (
    <div className="bg-white shadow-md rounded-lg p-4 w-64">
      <h2 className="text-lg font-semibold text-center mb-2">{title}</h2>
      <ul className="h-48 overflow-auto border border-gray-200 rounded-md p-2">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex items-center p-2 border-b last:border-b-0 cursor-pointer transition ${
              checked.includes(item) ? "bg-blue-100" : "hover:bg-gray-100"
            }`}
            onClick={() => handleToggle(item)}
          >
            <input
              type="checkbox"
              className="mr-2"
              checked={checked.includes(item)}
              onChange={() => handleToggle(item)}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 bg-gray-100 p-6 rounded-lg shadow-lg">
      {renderList("Choices", left, "left")}
      <div className="flex flex-col items-center space-y-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition disabled:bg-gray-300"
          onClick={() => moveCheckedItems(left, setLeft, right, setRight)}
          disabled={checked.every((item) => !left.includes(item))}
        >
          →
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition disabled:bg-gray-300"
          onClick={() => moveCheckedItems(right, setRight, left, setLeft)}
          disabled={checked.every((item) => !right.includes(item))}
        >
          ←
        </button>
      </div>
      {renderList("Chosen", right, "right")}
    </div>
  );
}
