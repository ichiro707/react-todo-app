import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaa", "iiii"]);
  const [completeTodos, setCompleteTodos] = useState(["uuuu"]);

  // onChangeイベントを引数で受け取る
  // 入力された値をevent.target.valueで取得
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    // スプレッド構文を使用しincompleteTodosの中身全てと配列を結合
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    // 入力欄に文字が残ってしまうため初期化
    setTodoText("");
  };

  return (
    <>
      <div className="input-area">
        {/* onChangeで input に変更があったことを検知 */}
        <input
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              // ループ内で返却している一番親のタグに key を設定する必要がある
              // 仮想DOMでは変更前と変更語を比較してレンダリングしているため何回目のループか
              // 正確に把握するために目印となる key を設定する
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              // keyのつけ忘れ注意
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
          <div className="list-row">
            <li>aaaaa</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
