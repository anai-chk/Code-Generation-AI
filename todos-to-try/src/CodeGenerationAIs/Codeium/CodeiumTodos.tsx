import React from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// Todosの初期値
const initialTodos: Todo[] = [
  { id: 1, text: "Todo 1", completed: false },
  { id: 2, text: "Todo 2", completed: true },
  { id: 3, text: "Todo 3", completed: false },
];

/**Todos application for Codeium
 * @param todos - list of todos
 * @returns Todos React Component.
 */
export default function CodeiumTodos({}: {}) {
  const [todos, setTodos] = React.useState(initialTodos);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
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

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold">Codeium Todos</h1>
      {/* Add todos */}
      <input
        type="text"
        placeholder="Add Todo"
        className="border p-2 w-full"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo(e.currentTarget.value);
            e.currentTarget.value = "";
          }
        }}
      />
      {/* List todos */}
      <ul className="mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="mr-2"
            />
            <span
              className={todo.completed ? "line-through text-gray-500" : ""}
            >
              {todo.text}
            </span>
            <button
              className="ml-auto text-red-500 hover:text-red-700"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
