import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { TaskContext } from "../context/ContextApi";

const AddTasks = () => {
  let history = useHistory();
  const { addTasks } = useContext(TaskContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTasks({ title: title, id: Math.random() * 10 });
    setTitle("");
    history.push("/taskList");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <div className="container ">
        <div className="row ">
          <div className="col-lg-8 mx-auto ">
            <form className="p-3 " onSubmit={handleSubmit}>
              <h1 className="text-center display-4 text-white">Add New Task</h1>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Task"
                  onChange={handleChange}
                  value={title}
                />
              </div>
              <button className="btn btn-success btn-block" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTasks;
