import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS }); // CATEGORIES- array of strings, TASKS- array of objects

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  const filterTasks = tasks.filter((task) => {
    return category === "All" || category === task.category
  })

  // add new task onto tasks list
  function handleAddTask(newTask){
    setTasks([...tasks, newTask])
  }

  //remove task from tasks list
  function handleDeleteTask(deleteTask){
    setTasks(tasks.filter((task) => task.text !== deleteTask))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} setCategory={setCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={filterTasks} onTaskDelete={handleDeleteTask}/>
    </div>
  );
}

export default App;
