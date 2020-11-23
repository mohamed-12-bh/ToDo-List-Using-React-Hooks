import React, { useContext } from "react";
import { TaskContext } from "../context/ContextApi";
import EditTasks from "./EditTasks";
import Task from "./Task";

const TaskList = () => {
  const { tasks, item } = useContext(TaskContext);
  return (
    <div>
      {item ? <EditTasks /> : null}

      <h1 className="text-center display-4 my-3 text-white">All Tasks</h1>
      {tasks.length ? (
        tasks.map((item) => <Task key={item.id} tasks={item} />)
      ) : (
        <h3 className="text-center alert alert-danger col-sm-8 mx-auto">
          Not Found Items
        </h3>
      )}
    </div>
  );
};

export default TaskList;
