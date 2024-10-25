import React from "react";
import TodoList from "./TodoList";

const GeminiTodos: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">Todoアプリ</h1>
      <TodoList />
    </div>
  );
};

export default GeminiTodos;
