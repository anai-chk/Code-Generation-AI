import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2, Check, X } from "lucide-react";

// TodoItemの型定義
interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const ClaudeTodos: React.FC = () => {
  // 状態管理
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  // 新規Todo追加
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  // Todoの完了状態を切り替え
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Todo削除
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Card className="w-full max-w-md mx-auto p-4">
      <CardContent>
        {/* 新規Todo追加フォーム */}
        <form onSubmit={handleAddTodo} className="flex gap-2 mb-4">
          <Input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="新しいTodoを入力"
            className="flex-grow"
          />
          <Button type="submit">追加</Button>
        </form>

        {/* Todo一覧 */}
        <div className="space-y-2">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleTodo(todo.id)}
                className="h-8 w-8"
              >
                {todo.completed ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <X className="h-4 w-4 text-gray-500" />
                )}
              </Button>

              <span
                className={`flex-grow ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.text}
              </span>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteTodo(todo.id)}
                className="h-8 w-8 text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ClaudeTodos;
