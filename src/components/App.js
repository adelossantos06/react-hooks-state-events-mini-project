import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS)

  function handleCategoryClick(category) {
    setSelectedCategory(category)
  }

  const filteredTasks = selectedCategory === "All"
    ? tasks : tasks.filter((task) => task.category === selectedCategory);

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onCategoryClick={handleCategoryClick}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} tasks-={TASKS} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList selectedCategory={selectedCategory} tasks={filteredTasks} />

    </div>
  );
}

export default App;
