// src/components/AddTodo.tsx
import React, { useState } from "react";

interface AddTodoProps {
  addTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 border px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
