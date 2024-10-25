import React from "react";

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
    <div className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="mr-2"
        />
        <span className={`flex-1 ${todo.completed ? "line-through" : ""}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
