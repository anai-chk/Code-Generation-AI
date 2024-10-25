import React, { useState } from "react";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState("");

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    if (newTodoText.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: newTodoText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoText(""); // Clear input field after adding
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 py-6">
      <ul className="space-y-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggle={() => handleToggle(todo.id)}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </ul>
      {/* Todo addition form */}
      <form onSubmit={handleAddTodo} className="flex gap-2 mt-4">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoList;
