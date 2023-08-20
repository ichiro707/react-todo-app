import React from "React";

export const InputTodo = (props) => {
  //受け取ったpropsを扱いやすように分割代入
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      {/* onChangeで input に変更があったことを検知 */}
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
