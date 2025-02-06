import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ items, clearList, handleDelete, handleEdit }) => {
  return (
    <div className="my-5">
      <h3 className="text-xl font-bold text-center mb-4 uppercase">
        Todo List
      </h3>

      <ul className="bg-white shadow-md rounded-lg p-4">
        {items.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
          />
        ))}
      </ul>

      {items.length > 0 && (
        <button
          type="button"
          className="w-full mt-5 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-md transition-all"
          onClick={clearList}
        >
          Clear List
        </button>
      )}
    </div>
  );
};

export default TodoList;
