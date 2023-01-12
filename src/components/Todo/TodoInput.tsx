import React, { FunctionComponent } from "react";
import { Task } from "../../types/todo";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  task: Task;
}

export const TodoInput: FunctionComponent<Props> = ({
  onAdd,
  onChange,
  task,
}) => (
  <form onSubmit={onAdd}>
    <input onChange={onChange} value={task.content} />
    <button type="submit">추가</button>
  </form>
);
