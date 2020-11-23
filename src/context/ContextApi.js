import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();
// const initialState = [
//   {title: "FirstTask",id: 1},
//   {title: "SecondTask",id: 2},
// ];
const ContextApi = (props) => {
  // const [tasks, setTasks] = useState(initialState);
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks-list")) || []
  );

  const [item, setItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks-list", JSON.stringify(tasks));
  }, [tasks]);
  const removeTasks = (id) => {
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
  };

  const addTasks = (task) => {
    setTasks([...tasks, task]);
  };

  const findTasks = (id) => {
    const task = tasks.find((item) => item.id === id);
    setItem(task);
  };

  const editTasks = (task) => {
    const tasksModify = tasks.map((item) =>
      item.id === task.id ? task : item
    );
    setTasks(tasksModify);
    setItem(null);
  };
  return (
    <TaskContext.Provider
      value={{ tasks, removeTasks, addTasks, findTasks, editTasks, item }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default ContextApi;
