import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [editItem, setEditItem] = useState(false);
  const [id, setId] = useState(crypto.randomUUID());

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.trim() === "") return; // Prevent empty submissions

    const newItem = { id, title: item };
    setItems([...items, newItem]);
    setItem("");
    setId(crypto.randomUUID());
    setEditItem(false);
  };

  const clearList = () => setItems([]);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const selectedItem = items.find((item) => item.id === id);
    setItem(selectedItem.title);
    setItems(items.filter((item) => item.id !== id));
    setEditItem(true);
    setId(id);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-bold text-center mb-4">Todo Input</h3>
        <TodoInput
          item={item}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          editItem={editItem}
        />
        <TodoList
          items={items}
          clearList={clearList}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}
