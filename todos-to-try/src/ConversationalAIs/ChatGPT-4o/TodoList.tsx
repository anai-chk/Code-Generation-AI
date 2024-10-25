// src/components/TodoList.tsx
import React from "react";
import { Todo } from "./types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg mt-4">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <p className="p-4 text-center text-gray-500">No todos available.</p>
      )}
    </div>
  );
};

export default TodoList;
