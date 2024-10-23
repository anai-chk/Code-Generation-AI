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
    <div>
      <h1>Todos</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabnineTodos;
