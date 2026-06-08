import React, {
  useEffect,
  useState,
} from "react";

import {
  fetchTasks,
  createTask,
  deleteTask,
  updateTask,
} from "./api";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const res = await fetchTasks();

    setTasks(res.data);
  };

  const addTask = async (task) => {
    const res = await createTask(task);

    setTasks([...tasks, res.data]);
  };

  const removeTask = async (id) => {
    await deleteTask(id);

    setTasks(
      tasks.filter((task) => task._id !== id)
    );
  };

  const markDone = async (task) => {
    const res = await updateTask(
      task._id,
      {
        ...task,
        status: "Completed",
      }
    );

    setTasks(
      tasks.map((t) =>
        t._id === task._id
          ? res.data
          : t
      )
    );
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        removeTask={removeTask}
        markDone={markDone}
      />
    </div>
  );
}

export default App;
