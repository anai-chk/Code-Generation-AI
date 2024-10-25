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

// import React from ・ 「 ea ( t ・
// import TodoList from '. /TOdOList ;
// import AddTodo from '. /AddTodo';
// const AppLayout = ( ) {
// return (
// く diV>
// く h わ TODO アプリく / hl >
// く AddTodo / >
// く TodoList / >
// く /diV>
// export default AppLayout;
