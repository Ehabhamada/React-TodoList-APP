import { React, useState, useEffect } from "react";
import Header from "./componnts/Header";
import "./App.css";
import TaskForm from "./componnts/Task-form";
import TasksItem from "./componnts/Tasks-item";

const App = () => {
  let [tasks, settask] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addtask = (task) => {
    if (task.title !== "") {
      settask([task, ...tasks]);
    }
  };
  const handledelete = (id) => {
    settask(tasks.filter((task) => task.id !== id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  const clearAll = () => {
    settask([]);
    localStorage.clear();
  };

  let done = (id) => {
    settask(
      tasks.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="container" basename="React-TodoList-APP">
      <Header title="My React To Do List" />
      <TaskForm
        addtask={addtask}
        clearAll={clearAll}
        tasks={tasks}
        nocomplet={tasks.filter((task) => task.completed)}
      />
      <div className="tasks">
        {tasks.map((t) => (
          <TasksItem
            key={t.id}
            tasks={t}
            onDelete={() => {
              handledelete(t.id);
            }}
            done={done}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
