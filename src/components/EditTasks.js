import React, { useContext, useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { TaskContext } from "../context/ContextApi";

const EditTasks = () => {
  //   let history = useHistory();
  const { editTasks, item } = useContext(TaskContext);
  const [title, setTitle] = useState("");

  useEffect(() => {
    item !== null && setTitle(item.title);
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTasks({ title: title, id: item.id });
    setTitle("");
    // history.push("/taskList");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-lg-8 mx-auto py-3">
          <form className="border p-3 my-3" onSubmit={handleSubmit}>
            <h1 className="text-center display-4 text-white">Edit Task</h1>
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
  );
};

export default EditTasks;
