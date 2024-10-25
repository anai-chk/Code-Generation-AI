import axios from "axios";
// API のベース URL
const API_URL = "http://localhost:5000/api/todo";

// TODO アイテムを全て取得する
export const getAllTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// 新しい TODO アイテムを追加する
export const addTodo = async (todoItem) => {
  const response = await axios.post(API_URL, todoItem);
  return response.data;
};

// TODO アイテム ID で取得する
export const getTodoById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// TODO アイテムを編集する
export const updateTodo = async (todoItem) => {
  const response = await axios.put(`${API_URL}/${todoItem.id}`, todoItem);
  return response.data;
};

// TODO アイテムを削除する
export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

// TODO アイテムの完了状態を切り替える
export const toggleTodoCompletion = async (id) => {
  const response = await axios.post(`${API_URL}/${id}/toggle`);
  return response.data;
};

// タグでフィルタリングした TODO アイテムを取得する
export const getTodosByTag = async (tag) => {
  const response = await axios.get(`${API_URL}/tag/${tag}`);
  return response.data;
};
