import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const initialTodos: Todo[] = [
  { id: 1, text: "Learn TypeScript", completed: false },
  { id: 2, text: "Build a React app", completed: false },
  { id: 3, text: "Write tests", completed: false },
];

const GithubCopilotTodos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const newTodoItem: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // フィルター機能を追加する

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="flex-grow p-2 border border-gray-300 rounded-l-lg"
        />
        <button
          onClick={addTodo}
          className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 border rounded-lg ${
              todo.completed ? "bg-green-100" : "bg-gray-100"
            }`}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer ${
                todo.completed ? "line-through" : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="p-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubCopilotTodos;
