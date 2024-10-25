import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const AppLayout = () => {
  return (
    <div>
      <h1>TODO アプリ</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default AppLayout;
