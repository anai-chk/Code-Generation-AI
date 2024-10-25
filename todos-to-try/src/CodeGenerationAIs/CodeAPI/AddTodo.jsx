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

// import React, { useState } from ・ react ・ ;
// import { addT0dO } from ・ .. /apis/api ・・
// const AddT0do = ( ) = > {
// const [title, setTitIe] = useState(' ・ );
// const [description, setDescription] = useState( ・・ );
// const [dueDate, setDueDate] = useState( ・ 、 );
// const [priority, setPriority] = useState(l ) ;
// / / 新しい TODO アイテムを追加する
// const handIeAddT0d0 = async (e) = > {
// e. preventDefauIt();
// const newTodo = { title, description, dueDate, priority, isCompleted: false } ;
// await addT0d0(newT0d0);
// setTitleC');
// setDescription(");
// setDueDate(");
// setPriority(1 ) ;
// return (
// く f0 「 m onSubmit-{handIeAddT0d0)>
// く h2 > 新しい TODO を追加く / h2 >
// く input
// type="text"
// p に ceh0 旧 0 「 タイトル "
// value-{title)
// required
// く t exta rea
// onChange-{(e) -> setTitle(). target. value)}
// export default AddT0do;
// く / fo 「 m >
// く button type-"submit"> 追加く /button>
// く /select>
// く option va 2 = { 3 } > 高く / option >
// く option va に 2 = { 2 } > 中く / option >
// く option va に 2 = { 1 } > 低く / option >
// く 50 厄 ( t value={priority) onChange={(e) > setPriority(). target. value)}>
// onChange={(e) = > setDueDate(). target. value))
// vaIue-{dueDate}
// type-"date
// く input
// onChange-{(e) = > setDescription(). target. value)}
// value-{description)
// p に ceh0 旧等 = ・・説明 "
