import React, { useState } from "react";

interface AddTodoProps {
  addTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-2 border rounded"
      />
      <button
        type="submit"
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
