import React from "react";

const TodoInput = ({ item, handleChange, handleSubmit, editItem }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 my-3">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <span className="bg-blue-500 text-white px-3 py-2">
            <i className="fas fa-book"></i>
          </span>
          <input
            type="text"
            className="w-full px-4 py-2 outline-none"
            placeholder="Add a todo item"
            value={item}
            onChange={handleChange}
            aria-label="Todo Input"
          />
        </div>
        <button
          type="submit"
          className={`w-full mt-3 py-2 text-white font-bold rounded-md transition-all ${
            editItem
              ? "bg-green-500 hover:bg-green-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {editItem ? "Edit Item" : "Add Item"}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
