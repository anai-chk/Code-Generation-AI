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

// import React, { useEffect, useState } from 、 「 eact 、 :
// import { getAIITodos, d 引 0t0T0d5 toggIeTodoCompletion } from ,・ . /apis/apii,
// / / TODO アイテムの完了状態を切り替える
// setTodos(todos. filter(todo = > tOdO. id ! =
// await deleteTodo(id);
// const handIeDeIete = async (id) => {
// / / TODO アイテムを削除する
// fetc hTodos ( ) ;
// setTodos(data);
// const data = await getAIITodos();
// const fetchTodos = async ( ) = > {
// useEffect(() = > {
// / / TODO アイテムを取得する
// const は 0d0 setTodos] = useState([]);
// const TodoList =
// setTodos(todos. map(todo = >
// await toggleTOdOCompIetion(id);
// const handIeToggIeCompletion = async (id) = > {
// todo. id = = id ? { ... todo , isCompleted: !todo isCompleted } : todoreturn (
// く diV>
// く h2 > TODO リストく / h2 >
// く u ー 〉
// {todos. m a p (tOdO = > (
// く ⅱ key-{todo.id}>
// く span style={{ textDecoration: tOdO. isCompIeted ? iline-through'
// は 0d0. tit 厄 }
// く /span>
// く button onCIick={() = > handIeToggIeCompIetion(todo.id)}>
// は0d0. isCompleted ? ' 未完了にする 、 : ' 完了にする 、 }
// く / button>
// く button onCIick-{() handIeDeIete(t0d0. (d))> 削除く /button>
// く月 i >
// く /ul>
// く /diV>
// export default TodoList;
