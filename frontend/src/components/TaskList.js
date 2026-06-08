import React from "react";

function TaskList({
  tasks,
  removeTask,
  markDone,
}) {
  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task._id}
          className="task-card"
        >
          <h3>{task.title}</h3>

          <p>{task.status}</p>

          <button
            onClick={() =>
              markDone(task)
            }
          >
            Complete
          </button>

          <button
            onClick={() =>
              removeTask(task._id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
