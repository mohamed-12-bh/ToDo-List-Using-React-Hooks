import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddTasks from "./components/AddTasks";
import TaskList from "./components/TaskList";
import NavBar from "./components/NavBar";
import ContextApi from "./context/ContextApi";
import "./css/app.css";

function App() {
  return (
    <div className="app text-white">
      <div className="overlay"></div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <ContextApi>
            <Route path="/addTasks" component={AddTasks} />
            <Route path="/taskList" component={TaskList} />
          </ContextApi>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
