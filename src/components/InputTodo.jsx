import React from "React";

//JSXなので キャメルケースにする、値を文字列として扱う、「,」で区切る
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px",
};

export const InputTodo = (props) => {
  //受け取ったpropsを扱いやすように分割代入
  const { todoText, onChange, onClick } = props;
  return (
    <div style={style}>
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
