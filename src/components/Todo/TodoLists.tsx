import React, { FunctionComponent } from "react";
import { Task } from "../../types/todo";

interface Props {
  onDelete: (task: Task) => void;
  list: Task[];
}

export const TodoLists: FunctionComponent<Props> = ({ list, onDelete }) => (
  <ul>
    {list &&
      list.map((el) => {
        return (
          <li key={el.id}>
            {el.content}
            {el.id}
            <button onClick={() => onDelete(el)}>삭제</button>
          </li>
        );
      })}
  </ul>
);
