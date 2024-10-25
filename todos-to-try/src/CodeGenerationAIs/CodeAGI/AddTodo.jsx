import React, { useState } from "react";
import { addTodo } from "../apis/api";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState(1);

  // 新しい TODO アイテムを追加する
  const handleAddTodo = async (e) => {
    e.preventDefault();
    const newTodo = {
      title,
      description,
      dueDate,
      priority,
      isCompleted: false,
    };
    await addTodo(newTodo);
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority(1);
  };

  return (
    <form onSubmit={handleAddTodo}>
      <h2>新しい TODO を追加</h2>

      <input
        type="text"
        placeholder="タイトル"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="説明"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />

      <select
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value))}
      >
        <option value={3}>高</option>
        <option value={2}>中</option>
        <option value={1}>低</option>
      </select>

      <button type="submit">追加</button>
    </form>
  );
};

export default AddTodo;
