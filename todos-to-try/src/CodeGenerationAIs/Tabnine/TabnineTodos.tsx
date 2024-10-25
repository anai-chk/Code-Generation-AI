// Todosアプリケーションを作成する//-
// 子のフォルダー単体で動作することが条件//-
import React, { useState } from "react";

// 1. ドキュメントの生成タスク
// 2. コードの生成
/**
 * A React functional component that manages a list of todos.
 * Allows users to add and remove todos from the list.
 *
 * @returns {JSX.Element} The rendered component displaying the todo list and controls.
 */
const TabnineTodos: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Todos</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="flex-grow p-2 border border-gray-300 rounded-l"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-5">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded"
          >
            <span>{todo}</span>
            <button
              onClick={() => removeTodo(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabnineTodos;
