// src/components/TodoItem.tsx
import React from "react";
import { Todo } from "./types";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <span
        className={`flex-1 ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.text}
      </span>
      <button
        className="bg-blue-500 text-white px-4 py-1 rounded mr-2 hover:bg-blue-600"
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button
        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
