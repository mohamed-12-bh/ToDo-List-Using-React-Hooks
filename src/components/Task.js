import React, { useContext } from "react";
import { TaskContext } from "../context/ContextApi";
const Task = ({ tasks }) => {
  const { removeTasks, findTasks } = useContext(TaskContext);

  return (
    <div className=" container ">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <ul className="list-unstyled border">
            <li className="d-flex mr-2 p-3">
              &nbsp;&nbsp;{tasks.title}
              <button
                className="btn btn-info btn-sm mr-2 ml-auto"
                onClick={() => findTasks(tasks.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm "
                onClick={() => removeTasks(tasks.id)}
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Task;
