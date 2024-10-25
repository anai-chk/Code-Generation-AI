import React, { useEffect, useState } from "react";
import { getAllTodos, deleteTodo, toggleTodoCompletion } from "../apis/api";

// TODO アイテムのリストを表示するコンポーネント
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // TODO アイテムを取得する
  const fetchTodos = async () => {
    const data = await getAllTodos();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // TODO アイテムを削除する
  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // TODO アイテムの完了状態を切り替える
  const handleToggleCompletion = async (id) => {
    await toggleTodoCompletion(id);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div>
      <h2>TODO リスト</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
            <button onClick={() => handleToggleCompletion(todo.id)}>
              {todo.isCompleted ? "未完了にする" : "完了にする"}
            </button>
            <button onClick={() => handleDelete(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
