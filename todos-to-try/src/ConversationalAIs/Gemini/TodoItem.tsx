import React from "react";

interface TodoProps {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoProps> = ({
  text,
  completed,
  onToggle,
  onDelete,
}) => {
  return (
    <li className="flex items-center border-b border-gray-200 pb-2">
      <input
        type="checkbox"
        checked={completed}
        className="mr-2 rounded-md"
        onChange={onToggle}
      />
      <span className={completed ? "line-through" : ""}>{text}</span>
      <button
        className="ml-auto px-2 py-1 bg-red-500 text-white rounded"
        onClick={onDelete}
      >
        削除
      </button>
    </li>
  );
};

export default TodoItem;
