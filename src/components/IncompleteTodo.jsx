import React from "React";

export const IncompleteTodo = (props) => {
  //受け取ったpropsを扱いやすように分割代入
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* 2つめの引数 index には順番が入ってくる */}
        {todos.map((todo, index) => {
          return (
            // ループ内で返却している一番親のタグに key を設定する必要がある
            // 仮想DOMでは変更前と変更語を比較してレンダリングしているため何回目のループか
            // 正確に把握するために目印となる key を設定する
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* 単純に引数でindexを渡すとページを読み込んだときに関数が呼ばれてしまうのでボタンを
                クリックしたときに呼ばれるようにアロー関数にしている */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
