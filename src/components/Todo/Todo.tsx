import React, { useEffect, useState } from "react";
import { Task } from "../../types/todo";
import { TodoInput } from "./TodoInput";
import { TodoLists } from "./TodoLists";

export default function Todolist() {
  interface State {
    task: Task;
    list: Task[];
  }

  const [task, setTask] = useState({
    id: 1,
    content: "",
  });
  const [list, setList] = useState(new Array<Task>());

  useEffect(() => {}, []);

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTask({
      id: task.id + 1,
      content: "",
    });
    setList([...list, task]);
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("change");
    setTask({
      ...task,
      content: event.target.value,
    });
  };

  const deleteTask = (taskToDelete: Task) => {
    setList([...list.filter((task) => task.id !== taskToDelete.id)]);
  };

  return (
    <div>
      <TodoInput task={task} onAdd={addTask} onChange={handleTaskChange} />
      <TodoLists list={list} onDelete={deleteTask} />
    </div>
  );
}
